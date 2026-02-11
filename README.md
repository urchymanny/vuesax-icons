# vuesax-icons

A React icon library for Vuesax icons, similar to [lucide-react](https://github.com/lucide-icons/lucide). This library provides all Vuesax icons in multiple variants (bold, broken, bulk, linear, twotone) as React components.

## Installation

```bash
npm install vuesax-icons
```

## Usage

### Individual Icon Import

```tsx
import { Icon3dCubeScanBold } from 'vuesax-icons';

function App() {
  return <Icon3dCubeScanBold size={24} text-color="blue" />;
}
```

### Grouped Icons Import

Icons are also available in a grouped structure:

```tsx
import { icons } from 'vuesax-icons';

function App() {
  const AlarmIcon = icons.alarm.bold;
  return <AlarmIcon width={32} height={32} color="red" />;
}
```

### Wildcard Import

```tsx
import * as Icons from 'vuesax-icons';

function App() {
  return <Icons.Icon3dCubeScanBold size={24} />;
}
```

## Props

All icons accept the following props (extending `React.SVGProps<SVGSVGElement>`):

- `size?: number | string` - Sets both width and height (maintains aspect ratio)
- `width?: number | string` - Icon width (height calculated automatically if not provided)
- `height?: number | string` - Icon height (width calculated automatically if not provided)
- `text-color?: string` - Replaces fill/stroke colors with this color (uses `currentColor` by default)
- `color?: string` - Alias for `text-color`
- All standard SVG props are also supported

## Examples

### Basic Usage

```tsx
import { Icon3dCubeScanBold } from 'vuesax-icons';

<Icon3dCubeScanBold />
```

### Custom Size

```tsx
import { Icon3dCubeScanBold } from 'vuesax-icons';

<Icon3dCubeScanBold size={48} />
<Icon3dCubeScanBold width={32} height={32} />
```

### Custom Color

```tsx
import { Icon3dCubeScanBold } from 'vuesax-icons';

<Icon3dCubeScanBold text-color="#FF5733" />
<Icon3dCubeScanBold color="currentColor" />
```

### Using CSS Color

```tsx
import { Icon3dCubeScanBold } from 'vuesax-icons';

<div style={{ color: 'blue' }}>
  <Icon3dCubeScanBold text-color="currentColor" />
</div>
```

### Grouped Icons

```tsx
import { icons } from 'vuesax-icons';

function IconSelector({ iconName, variant = 'bold' }) {
  const Icon = icons[iconName]?.[variant];
  if (!Icon) return null;
  
  return <Icon size={24} />;
}

// Usage
<IconSelector iconName="alarm" variant="linear" />
```

## Available Variants

Each icon is available in the following variants:

- `bold` - Bold filled icons
- `broken` - Broken/outlined style icons
- `bulk` - Bulk/filled style icons
- `linear` - Linear/outlined style icons
- `twotone` - Two-tone style icons

## Icon Naming

Icons are named using PascalCase with the variant suffix:
- `Icon3dCubeScanBold` - 3d-cube-scan icon, bold variant
- `IconAlarmLinear` - alarm icon, linear variant

When using grouped icons, use the original kebab-case name:
- `icons['3d-cube-scan'].bold`
- `icons.alarm.linear`

## Development

```bash
# Generate icon components from SVG files
npm run build:icons

# Build TypeScript
npm run build:ts

# Build everything
npm run build
```

## License

MIT
