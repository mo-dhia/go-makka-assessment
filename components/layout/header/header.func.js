import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { dimensionsStore } from "../../../store/dimensionStore";

export function useHeaderLogic() {
  const navItems = [
    { id: "Accueil", label: "Accueil", href: "/" },
    { id: "Omra", label: "Omra", href: "/omra" },
    { id: "Omra combinée", label: "Omra combinée", href: "/omra-combinee" },
    { id: "Hajj", label: "Hajj", href: "/hajj" },
    { id: "Voyages Monde", label: "Voyages Monde", href: "/voyages-monde" },
    { id: "Nos services", label: "Nos services", href: "/nos-services" },
  ];

  const [activeItem, setActiveItem] = useState("Hajj");
  const [menuOpen, setMenuOpen] = useState(false);

  const drawerRef = useRef(null);
  const backdropRef = useRef(null);
  const navBarRef = useRef(null);
  const headerRef = useRef(null);
  const navListRef = useRef(null);
  const selectorRef = useRef(null);
  const itemRefs = useRef({});
  const vw = dimensionsStore((s) => s.vw);
  const pathname = usePathname();

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

  const activeNavId = useMemo(() => {
    const normalize = (s) => {
      if (!s) return "/";
      if (s.length > 1 && s.endsWith("/")) return s.slice(0, -1);
      return s;
    };
    const currentPath = normalize(pathname || (typeof window !== "undefined" ? window.location.pathname : "/"));
    let matched = null;
    for (const it of navItems) {
      const href = normalize(it.href);
      const isExact = currentPath === href;
      const isSub = currentPath.startsWith(href + "/");
      if (isExact || isSub) {
        if (!matched || href.length > matched.href.length) matched = { id: it.id, href };
      }
    }
    return matched?.id || activeItem;
  }, [pathname, navItems, activeItem]);

  useEffect(() => {
    const container = navListRef.current;
    const selector = selectorRef.current;
    const activeEl = itemRefs.current[activeNavId];
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
  }, [activeNavId, vw]);

  // Smooth hide/show of navbar on scroll (translateY)
  useEffect(() => {
    const nav = navBarRef.current;
    if (!nav) return;

    let prevScroll = typeof window !== "undefined" ? window.scrollY : 0;
    let direction = null;
    const isScrollInteractionEnabled = true;

    const onScroll = () => {
      if (!isScrollInteractionEnabled || !nav) return;

      const headerHeight = headerRef.current ? headerRef.current.clientHeight : nav.clientHeight;
      if (window.scrollY <= headerHeight) {
        if (nav.style.transform !== "translateY(0px)") {
          direction = "up";
          nav.style.transform = "translateY(0px)";
        }
        if (nav.style.boxShadow !== "none") {
          nav.style.boxShadow = "none";
        }
      } else {
        if (nav.style.boxShadow !== "var(--shadow-bottom)") {
          nav.style.boxShadow = "var(--shadow-bottom)";
        }

        if (!direction) {
          nav.style.transform = "translateY(-100%)";
          direction = "down";
        } else {
          if (prevScroll < window.scrollY) {
            if (direction === "up") {
              nav.style.transform = "translateY(-100%)";
            }
            direction = "down";
          } else if (prevScroll > window.scrollY) {
            if (direction === "down") {
              nav.style.transform = "translateY(0px)";
            }
            direction = "up";
          }
        }
      }
      prevScroll = window.scrollY;
    };

    // Initialize and listen
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [vw]);

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
    headerRef,
    navBarRef,
    navListRef,
    selectorRef,
    setItemRef,
    activeNavId,
  };
}


