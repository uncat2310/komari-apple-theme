# Komari Apple Theme 🍎

> *An Apple-inspired theme for [Komari Monitor](https://github.com/Akizon77/Komari) — frosted glass, clean typography, minimalist aesthetics.*
>
> *为 [Komari Monitor](https://github.com/Akizon77/Komari) 设计的 Apple 风格主题 — 毛玻璃质感、清爽排版、极简美学。*

---

## ✨ Features / 特性

- **Frosted Glass Design** — Native `backdrop-filter` blur with Apple-style translucent panels
  **毛玻璃设计** — 原生模糊滤镜，Apple 风格半透明面板
- **Light & Dark Mode** — Automatic system preference detection + manual toggle
  **明暗模式** — 自动跟随系统 + 手动切换
- **Dynamic Accent Colors** — Blue / Sky / Indigo / Iris
  **动态主题色** — 蓝 / 天蓝 / 靛蓝 / 鸢尾紫
- **Custom Background** — Desktop & mobile background images with localStorage fallback
  **自定义背景** — 桌面端和移动端可分别设置背景图，自动缓存
- **Responsive Layout** — Optimized for desktop and mobile (≤768px)
  **响应式布局** — 桌面和移动端均适配
- **Smooth Animations** — Fade-in entries and hover transitions
  **流畅动画** — 入场淡入和悬停过渡
- **Content Width Control** — Adjustable via theme settings panel
  **内容宽度可调** — 通过主题设置面板调整

## 📦 Installation / 安装

### For Komari Monitor / 用于 Komari

Place the theme folder under Komari's theme directory:
将主题文件夹放到 Komari 的主题目录下：

```
komari/data/theme/Apple/
```

Make sure your `dist/index.html` includes:
确保 `dist/index.html` 中已引入：

```html
<link rel="stylesheet" href="/themes/Apple/apple-theme.css">
<script defer src="/themes/Apple/apple-theme.js"></script>
```

Then restart Komari and select the theme from the settings panel.
重启 Komari，在设置面板中选择主题即可。

### Standalone / 独立使用

```html
<link rel="stylesheet" href="apple-theme.css">
<script defer src="apple-theme.js"></script>
```

## ⚙️ Configuration / 配置

| Setting / 配置项 | Type / 类型 | Default / 默认 | Description / 说明 |
|:--|:--|:--|:--|
| `selectThemeColor` | select | `blue` | Accent color / 主题色 |
| `selectedDefaultAppearance` | select | `system` | System / Light / Dark / 外观 |
| `mainWidth` | number | `75` | Content width (%) / 内容宽度百分比 |
| `enableBlur` | switch | `true` | Enable backdrop blur / 启用背景模糊 |
| `blurValue` | number | `24` | Blur amount (px) / 模糊程度 |
| `blurBackgroundColor` | string | `rgba(...)` | Glass background color / 毛玻璃背景色 |
| `backgroundImage` | string | `` | Desktop bg URL / 桌面端背景图 |
| `backgroundImageMobile` | string | `` | Mobile bg URL / 移动端背景图 |
| `enableStatsBar` | switch | `true` | Show stats bar / 显示统计栏 |
| `enableLogo` | switch | `true` | Show logo / 显示 Logo |
| `enableTitle` | switch | `true` | Show title / 显示标题 |
| `enableSearchButton` | switch | `true` | Show search / 显示搜索 |
| `enableGroupedBar` | switch | `true` | Show group bar / 显示分组栏 |

## 📁 Files / 文件结构

```
komari-apple-theme/
├── apple-theme.css       # Main stylesheet / 主样式表 (~25KB)
├── apple-theme.js        # JavaScript / 动态功能逻辑
├── komari-theme.json     # Theme manifest / 主题配置清单
└── README.md             # This file / 本文件
```

## 💡 Customization Tips / 自定义建议

### Accent Colors / 主题色
Edit the `--accent-*` variables in `apple-theme.css` to match your brand.
修改 `--accent-*` CSS 变量即可自定义主题色。

### Background Images / 背景图
- Use high-resolution images (1920×1080+) for best frosted glass effect
  **建议使用高清图片**以获得最佳毛玻璃效果
- Last valid background is auto-saved in localStorage
  最后有效的背景图会自动缓存到 localStorage
- Desktop and mobile can be set independently
  桌面端和移动端可分别设置不同背景

### Performance / 性能
- `backdrop-filter: blur()` is GPU-accelerated in modern browsers
  现代浏览器中 GPU 加速，性能良好
- On low-end devices, reduce `blurValue` or disable `enableBlur`
  低端设备可降低模糊值或关闭背景模糊

## 🌐 Browser Support / 浏览器支持

| Browser / 浏览器 | Version / 最低版本 |
|:--|:--|
| Chrome / Edge | 105+ |
| Firefox | 103+ |
| Safari | 15.4+ |
| Opera | 91+ |

## 📜 Credits / 鸣谢

- Design inspired by [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
  **设计灵感**来源于 Apple HIG
- Built for [Komari Monitor](https://github.com/Akizon77/Komari) by [Akizon77](https://github.com/Akizon77)
  **为** Komari Monitor 构建
- Maintained by [uncat2310](https://github.com/uncat2310)
  **维护者**：uncat2310

## 📄 License / 许可

MIT
