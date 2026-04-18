# Product Requirements Document (PRD)

## Product Name

**UIkit Theme Playground**

The UIkit frontend framework: https://getuikit.com

# 1. Purpose

Build an interactive tool that allows developers to:

- Edit UIkit theme variables
- See real-time visual changes
- Understand how variables affect components
- Export a usable theme configuration

# 2. Goals

## Primary Goal

Demonstrate ability to build a **design system tooling interface** with strong CSS/theming understanding.

## Secondary Goals

- Demonstrate UIkit integration
- Provide clean developer experience (DX)

# 3. Target Users

- Frontend developers using UIkit
- Theme/customization-focused engineers

# 4. Core Features (MVP)

## 4.1 Theme Variable Editor (Sidebar)

### Description

UI for editing theme values.

### Requirements

- Grouped variables:
  - Colors
  - Typography (optional)
  - border (optional)
  - Spacing (optional)

- Input types:
  - Color picker
  - Text/number input

## 4.2 Live Preview Panel (Main Display)

### Description

Displays UIkit components updating in real time.

### Requirements

- Must include:
  - Buttons
  - Cards
  - Form input
  - Alert

- Changes reflect instantly when variables update

## 4.3 Theme Engine (Core Logic)

### Description

Handles variable updates and applies styles.

### MVP Approach

- Use CSS variables for instant updates

### Future (Optional)

- Compile Less using `less.js`

## 4.5 Export Feature

### Description

Download theme configuration.

### MVP Output

- CSS file with variables

```less
@global-primary-background: #1e87f0;
@global-secondary-background: #222222;
```

## 4.6 Reset Theme

### Description

Reset variables to default values.

# 5. User Flow

```text
User opens app
  ↓
Sees default UIkit theme
  ↓
Changes primary color
  ↓
Preview updates instantly
  ↓
Inspects value on right panel
  ↓
Clicks “Export”
  ↓
Downloads theme file
```

# 6. UI Layout

```text
|  Sidebar  |        Main Display       |
|-----------|---------------------------|
| Variables | Top Bar (title + actions) |
|           | Components                |
```

# 7. UX Requirements

- Instant feedback (no “Apply” button)
- Clean, minimal layout
- No visual clutter
- Consistent spacing

# 8. Non-Goals (for 1-week scope)

Do NOT build:

- Full drag-and-drop builder
- Full UIkit variable coverage
- Complex dependency graph
- Backend / persistence

# 9. Success Criteria

Project is successful if:

- Variables update UI in real time
- UIkit components clearly reflect changes
- Code is clean and structured
- README explains architecture decisions

# 10. Key Engineering Signals (what reviewers should see)

- Understanding of **design systems**
- Ability to integrate **external UI frameworks (UIkit)**
- Clean separation between:
  - styling
  - logic
  - UI

- Awareness of **theming architecture**

# 11. README Requirements (VERY important)

Include:

## 1. Project overview

## 2. Architecture explanation

## 3. Trade-offs:

- CSS variables vs Less
