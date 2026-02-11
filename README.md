<div align="center">
  <img src="vuesax.png" alt="Vuesax Logo" width="200" />
  
  # vuesax-icons
  
  Typed React components for the full Vuesax icon set (bold, broken, bulk, linear, twotone), generated directly from the official SVGs.
  
  [![npm version](https://img.shields.io/npm/v/vuesax-icon-pack.svg)](https://www.npmjs.com/package/vuesax-icon-pack)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
  **Source:** [Vuesax Icons on Figma](https://www.figma.com/community/file/1037171936958147285/vuesax-icons)
</div>

---

## Installation

```bash
npm install vuesax-icon-pack
# or
yarn add vuesax-icon-pack
```

---

## Quick Start

```tsx
import { Icon3dCubeScanBold } from 'vuesax-icon-pack';

export function Example() {
  return (
    <Icon3dCubeScanBold
      size={32}
      text-color="#2563EB"
    />
  );
}
```

---

## Import Styles

### 1. Individual icon imports (tree-shakeable)

```tsx
import { IconAlarmBold, IconAlarmLinear } from 'vuesax-icon-pack';

export function Header() {
  return (
    <div className="flex items-center gap-2">
      <IconAlarmBold size={20} text-color="#EF4444" />
      <IconAlarmLinear size={20} text-color="currentColor" />
      <span>Notifications</span>
    </div>
  );
}
```

### 2. Grouped icons (by name and variant)

```tsx
import { icons } from 'vuesax-icon-pack';

export function IconSelector({
  name,
  variant = 'bold',
  size = 24,
}: {
  name: keyof typeof icons;
  variant?: keyof (typeof icons)[typeof name];
  size?: number;
}) {
  const Icon = icons[name]?.[variant];
  if (!Icon) return null;

  return <Icon size={size} />;
}

// Usage
// <IconSelector name="alarm" variant="linear" />
// <IconSelector name="3d-cube-scan" variant="bold" />
```

### 3. Wildcard import

```tsx
import * as VuesaxIcons from 'vuesax-icon-pack';

export function WildcardExample() {
  return <VuesaxIcons.Icon3dCubeScanBold size={24} />;
}
```

---

## SVG Source Example

The icons are generated from the original Vuesax SVG files. For example, the **3d-cube-scan (bold)** SVG:

```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M22 9.75C21.59 9.75 21.25 9.41 21.25 9V7C21.25 4.42 19.58 2.75 17 2.75H7C4.42 2.75 2.75 4.42 2.75 7V9C2.75 9.41 2.41 9.75 2 9.75C1.59 9.75 1.25 9.41 1.25 9V7C1.25 3.56 3.56 1.25 7 1.25H17C20.44 1.25 22.75 3.56 22.75 7V9C22.75 9.41 22.41 9.75 22 9.75Z" fill="#292D32"/>
  <!-- more paths... -->
</svg>
```

Becomes a React component that respects `size`, `width`, `height`, and color props:

```tsx
import { Icon3dCubeScanBold } from 'vuesax-icon-pack';

<Icon3dCubeScanBold size={32} text-color="currentColor" />;
```

---

## Props

All icon components extend `React.SVGProps<SVGSVGElement>` and support:

- `size?: number | string` – sets both width and height (preserves 1:1 ratio).
- `width?: number | string` – custom width (height auto-calculated if not provided).
- `height?: number | string` – custom height (width auto-calculated if not provided).
- `text-color?: string` – replaces all primary strokes/fills with this color (maps through `currentColor`).
- `color?: string` – alias for `text-color`.
- Any standard SVG `<svg>` prop (e.g. `className`, `onClick`, `aria-*`, etc.).

Color behavior:

- By default, icons use `currentColor`, so they inherit from CSS `color`.
- Passing `text-color="red"` or `color="red"` overrides the icon color.
- Passing `text-color="currentColor"` keeps inheritance from parent text color.

---

## Available Variants

Each icon can have up to these variants (depending on the source SVGs):

- `bold` – bold filled icons
- `broken` – outlined / broken style
- `bulk` – solid / filled bulk style
- `linear` – clean line icons
- `twotone` – two-tone icons using opacity

Not every icon has every variant; the build step inspects the SVG folders and only generates the variants that actually exist.

Example (grouped access):

```ts
icons['alarm'].bold;
icons['alarm'].linear;
icons['3d-cube-scan'].twotone;
```

---

## Icon Naming

Component names are PascalCase with the variant suffix. Icons starting with numbers get an `Icon` prefix:

- `Icon3dCubeScanBold` → `3d-cube-scan` icon, **bold** variant (starts with number)
- `AlarmBold` → `alarm` icon, **bold** variant (regular name)
- `AlarmLinear` → `alarm` icon, **linear** variant

Grouped access uses the original kebab-case file name:

- `icons['3d-cube-scan'].bold`
- `icons.alarm.linear`

---

## Usage Examples

### 1. Theming via CSS

```tsx
import { Icon3dCubeScanBold } from 'vuesax-icon-pack';

export function ThemedIcon() {
  return (
    <div style={{ color: '#10B981' }}>
      {/* Inherits green from parent */}
      <Icon3dCubeScanBold text-color="currentColor" size={32} />
    </div>
  );
}
```

### 2. Button with icon

```tsx
import { IconArrowCircleRightLinear } from 'vuesax-icon-pack';

export function IconButton() {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900 text-white"
    >
      Next
      <IconArrowCircleRightLinear size={18} text-color="currentColor" />
    </button>
  );
}
```

### 3. Variant switcher

```tsx
import { icons } from 'vuesax-icon-pack';

const variants: Array<keyof (typeof icons)['alarm']> = [
  'bold',
  'broken',
  'bulk',
  'linear',
  'twotone',
];

export function VariantGallery() {
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      {variants.map((variant) => {
        const Icon = icons.alarm[variant];
        if (!Icon) return null;

        return (
          <div key={variant} style={{ textAlign: 'center', fontSize: 12 }}>
            <Icon size={28} text-color="#111827" />
            <div>{variant}</div>
          </div>
        );
      })}
    </div>
  );
}
```

---

## Development

```bash
# Generate icon components from SVG files
npm run build:icons

# Build TypeScript to dist/
npm run build:ts

# Full build (icons + types + JS)
npm run build
```

---

## License

MIT
