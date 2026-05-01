(function () {
  const media = window.matchMedia("(max-width: 768px)");
  const storageKey = "apple-theme:last-valid-bg";
  let lastSelected = null;
  let inFlight = false;
  let lastLoadAt = 0;

  function quoteUrl(url) {
    return `url("${String(url).replace(/\\/g, "\\\\").replace(/"/g, '\\"')}")`;
  }

  function selectBackground(settings) {
    const desktop = settings.backgroundImage || "";
    const mobile = settings.backgroundImageMobile || "";
    return media.matches ? (mobile || desktop) : (desktop || mobile);
  }

  function setBackground(selected, persist) {
    if (!selected) {
      lastSelected = "";
      document.documentElement.style.setProperty("--apple-user-bg-image", "none");
      document.body.classList.remove("apple-theme-has-bg");
      return;
    }

    lastSelected = selected;
    if (persist) {
      try {
        window.localStorage.setItem(storageKey, selected);
      } catch (_) {}
    }
    document.documentElement.style.setProperty("--apple-user-bg-image", quoteUrl(selected));
    document.body.classList.add("apple-theme-has-bg");
  }

  function preloadImage(url) {
    return new Promise(function (resolve) {
      if (!url) {
        resolve(false);
        return;
      }

      const image = new Image();
      image.onload = function () { resolve(true); };
      image.onerror = function () { resolve(false); };
      image.crossOrigin = "anonymous";
      image.referrerPolicy = "no-referrer";
      image.src = url;
    });
  }

  async function applyBackground(settings) {
    const selected = selectBackground(settings);

    // Apply content width from theme settings
    if (settings.mainWidth) {
      document.documentElement.style.setProperty("--apple-content-width", settings.mainWidth + "%");
    } else {
      document.documentElement.style.removeProperty("--apple-content-width");
    }

    if (!selected) {
      try {
        window.localStorage.removeItem(storageKey);
      } catch (_) {}
      setBackground("");
      return;
    }

    if (selected === lastSelected) return;

    if (await preloadImage(selected)) {
      setBackground(selected, true);
      return;
    }

    try {
      const fallback = window.localStorage.getItem(storageKey);
      if (fallback) setBackground(fallback, false);
    } catch (_) {}
  }

  async function loadSettings(force) {
    const now = Date.now();
    if (!force && now - lastLoadAt < 2000) return;
    if (inFlight) return;
    inFlight = true;
    lastLoadAt = now;

    try {
      const response = await fetch("/api/public", { cache: "no-store" });
      if (!response.ok) return;
      const payload = await response.json();
      await applyBackground((payload && payload.data && payload.data.theme_settings) || {});
    } catch (_) {
      // Keep the CSS fallback if public settings cannot be fetched.
    } finally {
      inFlight = false;
    }
  }

  function scheduleLoad() {
    window.setTimeout(function () {
      loadSettings(true);
    }, 80);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { loadSettings(true); }, { once: true });
  } else {
    try {
      const fallback = window.localStorage.getItem(storageKey);
      if (fallback) setBackground(fallback, false);
    } catch (_) {}
    loadSettings(true);
  }

  if (media.addEventListener) {
    media.addEventListener("change", function () { loadSettings(true); });
  } else if (media.addListener) {
    media.addListener(function () { loadSettings(true); });
  }

  window.addEventListener("focus", scheduleLoad);
  window.addEventListener("pageshow", scheduleLoad);
  window.addEventListener("popstate", scheduleLoad);
  document.addEventListener("visibilitychange", function () {
    if (!document.hidden) scheduleLoad();
  });

  ["pushState", "replaceState"].forEach(function (name) {
    const original = history[name];
    if (typeof original !== "function") return;
    history[name] = function () {
      const result = original.apply(this, arguments);
      scheduleLoad();
      return result;
    };
  });

  window.setInterval(function () {
    if (!document.hidden) loadSettings(false);
  }, 15000);
})();
