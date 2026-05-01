# Komari Apple Theme 🍎

An Apple-inspired theme for [Komari Monitor](https://github.com/Akizon77/Komari) — a server monitoring dashboard with frosted glass effects, clean typography, and minimalist aesthetics.

## Features

- **Frosted Glass Design** — Native `backdrop-filter` blur with Apple-style translucent panels
- **Light & Dark Mode** — Automatic system preference detection with manual toggle support
- **Dynamic Accent Colors** — Choose between Blue, Sky, Indigo, and Iris
- **Custom Background** — Set desktop and mobile background images with fallback persistence
- **Responsive Layout** — Optimized for both desktop and mobile (≤768px)
- **Smooth Animations** — Subtle fade-in and hover transitions inspired by Apple HIG
- **Content Width Control** — Adjustable main content width via theme settings

## Installation

### For Komari Monitor (via theme system)

1. Place the theme folder under Komari's theme directory:
   ```
   komari/data/theme/Apple/
   ```

2. Make sure your `dist/index.html` includes:
   ```html
   <link rel="stylesheet" href="/themes/Apple/apple-theme.css">
   <script defer src="/themes/Apple/apple-theme.js"></script>
   ```

3. Restart Komari and select the theme from the settings panel.

### Standalone

Include the CSS and JS in any HTML page:

```html
<link rel="stylesheet" href="apple-theme.css">
<script defer src="apple-theme.js"></script>
```

## Configuration

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `selectThemeColor` | select | `blue` | Accent color (blue/sky/indigo/iris) |
| `selectedDefaultAppearance` | select | `system` | Default appearance (system/light/dark) |
| `mainWidth` | number | `75` | Content width in percentage |
| `enableBlur` | switch | `true` | Enable background blur effect |
| `blurValue` | number | `24` | Blur amount in pixels |
| `blurBackgroundColor` | string | `rgba(...)` | Frosted glass background color |
| `backgroundImage` | string | `` | Desktop background image URL |
| `backgroundImageMobile` | string | `` | Mobile background image URL |
| `enableStatsBar` | switch | `true` | Show stats bar |
| `enableLogo` | switch | `true` | Show logo |
| `enableTitle` | switch | `true` | Show title |
| `enableSearchButton` | switch | `true` | Show search |
| `enableGroupedBar` | switch | `true` | Show group bar |

## Files

```
komari-apple-theme/
├── apple-theme.css       # Main stylesheet (~25KB)
├── apple-theme.js        # JavaScript for dynamic features
├── komari-theme.json     # Theme configuration manifest
└── README.md             # This file
```

## Customization Tips

### Change Accent Colors
Edit the `--accent-*` CSS variables in `apple-theme.css` to match your brand.

### Background Image Advice
- For best frosted glass effect, use high-resolution images (1920×1080+) with moderate contrast
- The theme auto-saves your last valid background in localStorage for persistence
- Mobile and desktop backgrounds can be set independently

### Performance
- `backdrop-filter: blur()` is GPU-accelerated in modern browsers
- On low-end devices, consider reducing `blurValue` or disabling `enableBlur`

## Browser Support

- Chrome/Edge 105+
- Firefox 103+
- Safari 15.4+
- Opera 91+

## Credits

- Inspired by Apple Human Interface Guidelines
- Built for [Komari Monitor](https://github.com/Akizon77/Komari) by [Akizon77](https://github.com/Akizon77)
- Maintained by [uncat2310](https://github.com/uncat2310)

## License

MIT
