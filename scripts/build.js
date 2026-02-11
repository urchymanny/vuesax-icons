const fs = require('fs');
const path = require('path');

const ICONS_DIR = path.join(__dirname, '../icons');
const OUTPUT_DIR = path.join(__dirname, '../src/generated');

// Dynamically discover variant folders
function discoverVariants() {
  if (!fs.existsSync(ICONS_DIR)) {
    return [];
  }
  
  const entries = fs.readdirSync(ICONS_DIR, { withFileTypes: true });
  return entries
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name)
    .filter(name => {
      // Skip non-variant directories, but include all directories that might contain icons
      // Check if directory contains SVG files
      const variantDir = path.join(ICONS_DIR, name);
      const files = fs.readdirSync(variantDir);
      return files.some(file => file.endsWith('.svg'));
    });
}

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Function to convert SVG to React component
function svgToReactComponent(svgContent, iconName, variant) {
  // Extract the inner content (everything between <svg> tags)
  const innerMatch = svgContent.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
  if (!innerMatch) return null;

  let innerContent = innerMatch[1];
  
  // Replace common color values with currentColor
  // This will be handled by the Icon component's color replacement logic
  innerContent = innerContent
    .replace(/fill="#292D32"/g, 'fill="currentColor"')
    .replace(/stroke="#292D32"/g, 'stroke="currentColor"')
    .replace(/fill="#000000"/g, 'fill="currentColor"')
    .replace(/stroke="#000000"/g, 'stroke="currentColor"')
    .replace(/fill="none"/g, 'fill="none"'); // Keep none as is

  // Convert kebab-case attributes to camelCase for JSX
  // Handle attributes like stroke-width, stroke-linecap, etc.
  innerContent = innerContent.replace(/(\w+)-(\w+)=/g, (match, p1, p2) => {
    return `${p1}${p2.charAt(0).toUpperCase() + p2.slice(1)}=`;
  });

  // Format for JSX (indent properly)
  const lines = innerContent.split('\n').filter(line => line.trim());
  return lines.map(line => line.trim()).join('\n');
}

// Function to sanitize component name (handle numbers, special chars, etc.)
function sanitizeComponentName(name) {
  // First, replace special characters that should act as word separators
  name = name
    .replace(/[&()]/g, '_') // Replace &, parentheses with underscore (word separator)
    .replace(/[^a-zA-Z0-9\s_-]/g, '_') // Replace other special chars with underscore
    .replace(/_+/g, '_') // Replace multiple underscores with single
    .replace(/^_|_$/g, ''); // Remove leading/trailing underscores
  
  // Handle names starting with numbers
  if (/^\d/.test(name)) {
    name = 'Icon' + name;
  }
  
  // Convert to PascalCase - split by hyphens, underscores, or spaces
  const parts = name
    .split(/[-_\s]+/) // Split by hyphens, underscores, or spaces
    .filter(part => part.length > 0);
  
  return parts
    .map(word => {
      // Handle camelCase within words (e.g., "3dCube" -> "3DCube")
      // Also handle words starting with numbers
      if (/^\d/.test(word)) {
        return 'Icon' + word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word.charAt(0).toUpperCase() + word.slice(1).replace(/([a-z])([A-Z])/g, '$1$2');
    })
    .join('');
}

// Function to create icon component
function createIconComponent(iconName, variant, svgContent) {
  const baseName = sanitizeComponentName(iconName);
  const variantName = sanitizeComponentName(variant);
  const componentName = `${baseName}${variantName}`;
  const innerContent = svgToReactComponent(svgContent, iconName, variant);
  
  if (!innerContent) return null;

  // Format the inner content with proper indentation
  const formattedContent = innerContent
    .split('\n')
    .map(line => '      ' + line)
    .join('\n');

  return `import React, { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Icon, IconProps, VuesaxIconComponent } from '../Icon';

export const ${componentName}: VuesaxIconComponent = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
${formattedContent}
  </Icon>
));
`;
}

// Scan all icons and group them
function scanIcons(variants) {
  const iconMap = {};
  
  variants.forEach(variant => {
    const variantDir = path.join(ICONS_DIR, variant);
    if (!fs.existsSync(variantDir)) return;

    const files = fs.readdirSync(variantDir).filter(file => file.endsWith('.svg'));
    
    files.forEach(file => {
      const iconName = file.replace('.svg', '');
      if (!iconMap[iconName]) {
        iconMap[iconName] = {};
      }

      const filePath = path.join(variantDir, file);
      try {
        const svgContent = fs.readFileSync(filePath, 'utf-8');
        iconMap[iconName][variant] = svgContent;
      } catch (error) {
        console.warn(`Warning: Could not read ${filePath}: ${error.message}`);
      }
    });
  });

  return iconMap;
}

// Generate individual icon components
function generateIconComponents(iconMap) {
  const exports = [];
  const groupedExports = {};

  Object.keys(iconMap).forEach(iconName => {
    const variants = iconMap[iconName];
    groupedExports[iconName] = {};

    Object.keys(variants).forEach(variant => {
      const svgContent = variants[variant];
      const componentCode = createIconComponent(iconName, variant, svgContent);
      
      if (componentCode) {
        const baseName = sanitizeComponentName(iconName);
        const variantName = sanitizeComponentName(variant);
        const componentName = `${baseName}${variantName}`;
        const fileName = `${iconName}-${variant}.tsx`;
        const filePath = path.join(OUTPUT_DIR, fileName);
        
        fs.writeFileSync(filePath, componentCode);
        exports.push({ componentName, iconName, variant, fileName });
        groupedExports[iconName][variant] = componentName;
      }
    });
  });

  return { exports, groupedExports };
}

// Generate index file
function generateIndexFile(exports, groupedExports) {
  // Generate individual exports
  const individualExports = exports.map(e => 
    `export { ${e.componentName} } from './generated/${e.iconName}-${e.variant}';`
  ).join('\n');

  // Helper to quote object keys if needed (for numbers, special chars, hyphens, etc.)
  const quoteKey = (key) => {
    // Quote if starts with number, contains hyphens or special chars, or is a reserved word
    if (/^\d/.test(key) || /-/.test(key) || /[^a-zA-Z0-9_-]/.test(key) || ['class', 'for', 'if', 'in', 'new', 'return', 'var', 'let', 'const'].includes(key)) {
      return `"${key}"`;
    }
    return key;
  };

  // Create a map of component names to their import paths for the grouped exports
  const componentToPath = {};
  exports.forEach(e => {
    componentToPath[e.componentName] = `./generated/${e.iconName}-${e.variant}`;
  });

  // Generate grouped exports with proper imports
  // We need to import all components first, then reference them in the icons object
  const allComponentNames = new Set();
  Object.keys(groupedExports).forEach(iconName => {
    Object.keys(groupedExports[iconName]).forEach(variant => {
      allComponentNames.add(groupedExports[iconName][variant]);
    });
  });

  // Generate imports for grouped exports
  const groupedImports = Array.from(allComponentNames)
    .sort()
    .map(componentName => {
      const importPath = componentToPath[componentName];
      return `import { ${componentName} } from '${importPath}';`;
    })
    .join('\n');

  // Generate the icons object
  const groupedExportsCode = `export const icons = {\n${Object.keys(groupedExports).map(iconName => {
    const variants = groupedExports[iconName];
    const variantExports = Object.keys(variants).map(variant => {
      const componentName = variants[variant];
      return `    ${quoteKey(variant)}: ${componentName}`;
    }).join(',\n');
    return `  ${quoteKey(iconName)}: {\n${variantExports}\n  }`;
  }).join(',\n')}\n} as const;`;

  const indexContent = `export { Icon, type IconProps, type VuesaxIconComponent } from './Icon';

${individualExports}

${groupedImports}

${groupedExportsCode}
`;

  fs.writeFileSync(path.join(__dirname, '../src/index.ts'), indexContent);
}

// Main build function
function build() {
  console.log('Discovering variant folders...');
  const variants = discoverVariants();
  console.log(`Found variants: ${variants.join(', ')}`);

  console.log('Scanning icons...');
  const iconMap = scanIcons(variants);
  console.log(`Found ${Object.keys(iconMap).length} unique icons`);

  console.log('Generating components...');
  const { exports, groupedExports } = generateIconComponents(iconMap);
  console.log(`Generated ${exports.length} icon components`);

  console.log('Generating index file...');
  generateIndexFile(exports, groupedExports);
  console.log('Build complete!');
}

build();
