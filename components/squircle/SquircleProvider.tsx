"use client";

import { useEffect } from "react";

export default function SquircleProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if ("paintWorklet" in CSS) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (CSS as any).paintWorklet.addModule(
        "https://www.unpkg.com/css-houdini-squircle@0.3.0/squircle.min.js"
      );
    }
  }, []);

  return children;
}
