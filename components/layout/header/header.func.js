import { useEffect, useRef, useState } from "react";
import { dimensionsStore } from "../../../store/dimensionStore";

export function useHeaderLogic() {
  const navItems = [
    "Accueil",
    "Omra",
    "Omra combinée",
    "Hajj",
    "Voyages Monde",
    "Nos services",
  ];

  const [activeItem, setActiveItem] = useState("Hajj");
  const [menuOpen, setMenuOpen] = useState(false);

  const drawerRef = useRef(null);
  const backdropRef = useRef(null);
  const navListRef = useRef(null);
  const selectorRef = useRef(null);
  const itemRefs = useRef({});
  const vw = dimensionsStore((s) => s.vw);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    function onClickOutside(e) {
      if (!menuOpen) return;
      const target = e.target;
      if (
        drawerRef.current &&
        !drawerRef.current.contains(target) &&
        backdropRef.current &&
        backdropRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((v) => !v);

  useEffect(() => {
    const container = navListRef.current;
    const selector = selectorRef.current;
    const activeEl = itemRefs.current[activeItem];
    if (!container || !selector || !activeEl) {
      if (selector) selector.style.opacity = 0;
      return;
    }
    requestAnimationFrame(() => {
      const left = activeEl.offsetLeft;
      const width = activeEl.offsetWidth;
      selector.style.transform = `translateX(${left}px)`;
      selector.style.width = `${width}px`;
      selector.style.opacity = 1;
    });
  }, [activeItem, vw]);

  const setItemRef = (key) => (el) => {
    if (el) itemRefs.current[key] = el;
  };

  return {
    navItems,
    activeItem,
    setActiveItem,
    menuOpen,
    setMenuOpen,
    toggleMenu,
    drawerRef,
    backdropRef,
    navListRef,
    selectorRef,
    setItemRef,
  };
}


