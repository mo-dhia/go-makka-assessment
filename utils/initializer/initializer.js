'use client';

import { useEffect } from "react";
import { dimensionsStore } from "@/../store/dimensionStore";

export default function Initializer() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateViewportWidth = () => {
      const width = window.innerWidth;
      dimensionsStore.getState().setVw(width);
    };

    updateViewportWidth();
    window.addEventListener("resize", updateViewportWidth);
    return () => {
      window.removeEventListener("resize", updateViewportWidth);
    };
  }, []);

  return null;
}
