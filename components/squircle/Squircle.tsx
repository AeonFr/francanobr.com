import React from "react";
import styles from "./squircle.module.css";

// Utility type for inferring props for the 'as' component
// This allows Squircle to accept all props of the component passed to 'as'
type AsProp<C extends React.ElementType> = {
  as?: C;
} & Omit<React.ComponentPropsWithoutRef<C>, 'as' | 'className' | 'style'>;

interface BaseSquircleProps {
  children: React.ReactNode;
  type?: "fill" | "outline" | "gradient";
  smooth?: number;
  radius?: number;
  background?: string;
  gradientStops?: string;
  className?: string;
  style?: React.CSSProperties;
}

// Generic SquircleProps type
type SquircleProps<C extends React.ElementType = 'div'> = BaseSquircleProps & AsProp<C>;

export default function Squircle<C extends React.ElementType = 'div'>({
  type = "fill",
  smooth,
  radius,
  children,
  background,
  gradientStops,
  as,
  className = '',
  style = {},
  ...rest
}: SquircleProps<C>) {
  const Component = as || 'div';
  const squircleStyle = {
    ...(smooth ? { '--squircle-smooth': smooth } : {}),
    ...(radius ? { '--squircle-radius': `${radius}px` } : {}),
    ...(background ? { '--squircle-background': background } : {}),
    ...(gradientStops && type === 'gradient' ? { '--squircle-gradient-stops': gradientStops } : {}),
    ...style,
  } as React.CSSProperties;

  return (
    <Component
      className={`${styles.button} ${styles[type]} ${className}`.trim()}
      style={squircleStyle}
      {...rest}
    >
      {children}
    </Component>
  );
}
