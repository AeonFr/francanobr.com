"use client";

import React, { useState, useEffect } from "react";
import styles from "./squircle.module.css";

interface SquircleProps {
  children: React.ReactNode;
  smooth?: number;
  radius?: number;
  background?: string;
  backgroundHover?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function Squircle({
  smooth,
  radius,
  children,
  background,
  backgroundHover,
  className = '',
  style = {},
  ...rest
}: SquircleProps) {
  const squircleStyle = {
    ...(smooth ? { '--squircle-smooth': smooth } : {}),
    ...(radius ? { '--squircle-radius': `${radius}px` } : {}),
    ...(background ? { '--squircle-background': background } : {}),
    ...(backgroundHover ? { '--squircle-background-hover': backgroundHover } : {}),
    ...style,
  } as React.CSSProperties;

  const [fallbackMode, setFallbackMode] = useState(true);

  useEffect(() => {
    setFallbackMode(!("paintWorklet" in CSS));
  }, [])


  return (
    <div
      className={`${styles.button} ${fallbackMode ? styles.fallback : ''} ${className}`.trim()}
      style={squircleStyle}
      {...rest}
    >
      {children}
    </div>
  );
}
