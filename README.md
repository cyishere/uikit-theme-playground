# UIkit Theme Playground

An interactive, real-time theme editor for the [UIkit](https://getuikit.com) frontend framework. Build, preview, and export your custom UIkit themes with instant feedback.

## Overview

The UIkit Theme Playground allows developers to manipulate core UIkit variables and see changes reflected instantly across a comprehensive component library. It bridges the gap between static design and implementation by providing a live sandbox for design system exploration.

### Key Features

- **Live Variable Editor:** Modify colors, typography, and spacing variables.
- **Real-time Compilation:** Changes are compiled on-the-fly using `less.js`.
- **Cross-Tab Synchronization:** Open a demo page in a new tab and watch it update in real-time as you edit in the playground.
- **Theme Presets:** Quickly switch between pre-configured theme styles (Elegant, Playful, Bold).
- **Export Ready:** Download your customized theme as a ready-to-use `.less` file.

---

## Architecture

The project is built with **Vue 3 (Composition API)** and focuses on a clean separation between the UI, business logic, and the styling engine.

### 1. State Management (Global Store)

The application state resides in `src/stores/theme.ts` (Reactive Store).

- **Decoupling:** Components do not manage their own data; they consume and mutate the global `themeState`.
- **Consistency:** This ensures that the Sidebar, Preview Canvas, and Topbar are always in sync.

### 2. Theming Engine (Less.js)

Instead of using standard CSS variables, this project utilizes `less.modifyVars()`.

- **Workflow:** When a variable changes, the `applyTheme` utility triggers a debounced update to the `less.js` compiler running in the browser.
- **Deep Integration:** This allows us to tap into UIkit's core Less mixins and nested variables. By leveraging **UIkit Hooks** (e.g., `.hook-card()`, `.hook-form()`) in `public/theme.less`, the project injects custom "bridge variables" to control properties that aren't directly exposed as variables by the framework.
- **Vendored Assets:** Although `less` and `uikit` are included in `devDependencies` for version tracking, the actual `less.js` compiler and the UIkit Less source files are vendored in the `public/` directory (`public/less.js` and `public/uikit/`). This ensures that the browser-side compiler can access all necessary source files during real-time compilation without complex build-time resolution.

### 3. Cross-Tab Persistence & Sync

To provide a seamless developer experience:

- **Persistence:** All changes are automatically saved to `localStorage`.
- **Sync:** The application listens for the browser's `storage` event. When you edit the theme in one tab, any open "Preview" tabs update instantly without a page reload.

---

## Technical Trade-offs: CSS Variables vs. Less

A key architectural decision was choosing **Less** (via `less.js`) over native **CSS Variables**.

| Feature           | Less (Chosen)                                                                     | CSS Variables                                                                         |
| :---------------- | :-------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| **Compatibility** | Fully compatible with UIkit's native `@variable` system and mixins.               | Requires rewriting/mapping UIkit's internals to `var()`.                              |
| **Calculations**  | Supports complex color functions (e.g., `darken()`, `fade()`) during compilation. | Limited to basic `calc()` or modern `color-mix()` (which has less framework support). |
| **Performance**   | Slight overhead for in-browser compilation (mitigated with debouncing).           | Zero overhead (native browser support).                                               |
| **Exportability** | Produces a standard Less file compatible with any UIkit build pipeline.           | Requires a custom CSS variable bridge.                                                |

**Conclusion:** For a tool specifically designed for **UIkit**, using Less provides the most authentic and powerful customization experience, as it respects the framework's original architecture.

---

## Development Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v20+ or v22+)
- [pnpm](https://pnpm.io/)

### Installation

```bash
pnpm install
```

### Run Development Server

```bash
pnpm dev
```

### Build for Production

```bash
pnpm build
```

---

## License

This project is for demonstration purposes. UIkit is property of [YOOtheme](https://yootheme.com/uikit).
