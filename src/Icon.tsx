import React, { ForwardRefExoticComponent, RefAttributes } from "react";

export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, "ref"> {
  size?: number | string;
  width?: number | string;
  height?: number | string;
  "text-color"?: string;
  color?: string;
}

export type VuesaxIconComponent = ForwardRefExoticComponent<Omit<IconProps, "ref"> & RefAttributes<SVGSVGElement>>;

const BaseIconRenderer = React.forwardRef<SVGSVGElement, IconProps & { children: React.ReactNode }>(({
  size,
  width,
  height,
  "text-color": textColor,
  color,
  children,
  style,
  ...props
}, ref) => {
  // Calculate dimensions - respect viewBox ratio (24x24)
  const viewBox = "0 0 24 24";
  const aspectRatio = 24 / 24; // 1:1

  let finalWidth: number | string | undefined;
  let finalHeight: number | string | undefined;

  if (size) {
    finalWidth = size;
    finalHeight = size;
  } else {
    finalWidth = width;
    finalHeight = height;

    // If only one dimension is provided, calculate the other maintaining aspect ratio
    if (width && !height) {
      finalHeight = typeof width === "number" ? width / aspectRatio : width;
    } else if (height && !width) {
      finalWidth = typeof height === "number" ? height * aspectRatio : height;
    }
  }

  // Default to 24 if no size specified
  if (!finalWidth && !finalHeight) {
    finalWidth = 24;
    finalHeight = 24;
  }

  // Handle color replacement
  const iconColor = textColor || color;

  // Process children to replace currentColor with the specified color
  const processChildren = (children: React.ReactNode): React.ReactNode => {
    return React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) {
        return child;
      }

      const childProps: any = { ...child.props };

      // If a color is specified, replace currentColor with that color
      if (iconColor) {
        if (childProps.fill === "currentColor") {
          childProps.fill = iconColor;
        }
        if (childProps.stroke === "currentColor") {
          childProps.stroke = iconColor;
        }
      }

      // Recursively process nested children
      if (childProps.children) {
        childProps.children = processChildren(childProps.children);
      }

      return React.cloneElement(child as React.ReactElement<any>, childProps);
    });
  };

  const processedChildren = processChildren(children);

  // Merge styles - if color is provided and it's not currentColor, use CSS color
  const mergedStyle: React.CSSProperties = {
    ...style,
    ...(iconColor && iconColor !== "currentColor" ? { color: iconColor } : {}),
  };

  return (
    <svg
      ref={ref}
      width={finalWidth}
      height={finalHeight}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={mergedStyle}
      {...props}
    >
      {processedChildren}
    </svg>
  );
});

export { BaseIconRenderer as Icon };
