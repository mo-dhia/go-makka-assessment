"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./header.module.css";

export default function Header() {
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

  return (
    <header className={styles.headerRoot}>
      <div className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.branding}>
            <div className={styles.logoTitle}>GO-MAKKAH</div>
            <div className={styles.tagline}>Quand foi et prestige se rencontrent</div>
          </div>
          <div className={styles.contact}>
            <div className={styles.phone}>01 49 87 70 21</div>
            <div className={styles.address}>32 avenue Pierre Semarde, 94200</div>
          </div>
        </div>
      </div>

      <nav className={styles.navBar}>
        <div className={styles.container}>
          <button type="button" className={styles.hamburger} onClick={toggleMenu} aria-label="Ouvrir le menu">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li
                key={item}
                className={`${styles.navItem} ${
                  activeItem === item ? styles.active : ""
                }`}
              >
                <button
                  type="button"
                  className={styles.navButton}
                  aria-current={activeItem === item ? "page" : undefined}
                  onClick={() => setActiveItem(item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <button type="button" className={styles.actionLink}>
              <span className={styles.icon} aria-hidden>
                <img src="/imgs/account.png" alt="" />
              </span>
              <span>Mon compte</span>
            </button>
            <button type="button" className={styles.actionLink}>
              <span className={styles.icon} aria-hidden>
                <img src="/imgs/chat.png" alt="" />
              </span>
              <span>Espace client</span>
            </button>
          </div>
        </div>

        {/* Backdrop and drawer for mobile */}
        <div
          ref={backdropRef}
          className={`${styles.backdrop} ${menuOpen ? styles.backdropOpen : ""}`}
          aria-hidden={!menuOpen}
        >
          <aside
            ref={drawerRef}
            className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}
            role="dialog"
            aria-label="Menu"
          >
            <ul className={styles.drawerNavList}>
              {navItems.map((item) => (
                <li key={item} className={styles.drawerNavItem}>
                  <button
                    type="button"
                    className={styles.drawerNavButton}
                    onClick={() => {
                      setActiveItem(item);
                      setMenuOpen(false);
                    }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </nav>
    </header>
  );
}


