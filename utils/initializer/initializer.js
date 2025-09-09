'use client';

import { useEffect } from "react";
import { dimensionsStore } from "@/../store/dimensionStore";
import { usePathname, useRouter } from "next/navigation";

export default function Initializer() {
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateViewportWidth = () => {
      const width = window.innerWidth;
      dimensionsStore.getState().setVw(width);
    };

    updateViewportWidth();
    window.addEventListener("resize", updateViewportWidth);

    // Redirect to Hajj on first load from home page
    try {
      const currentPath = pathname || window.location.pathname;
      if (currentPath === "/") {
        router.replace("/hajj");
      }
    } catch {}
    return () => {
      window.removeEventListener("resize", updateViewportWidth);
    };
  }, []);

  return null;
}
