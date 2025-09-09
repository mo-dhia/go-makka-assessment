import { useEffect, useRef, useState } from "react";

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

  return {
    navItems,
    activeItem,
    setActiveItem,
    menuOpen,
    setMenuOpen,
    toggleMenu,
    drawerRef,
    backdropRef,
  };
}


