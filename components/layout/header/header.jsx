"use client";

import React from "react";
import styles from "./header.module.css";
import { Menu } from "./icons/icons";
import { useHeaderLogic } from "./header.func";

export default function Header() {
  const {
    navItems,
    activeItem,
    setActiveItem,
    menuOpen,
    setMenuOpen,
    toggleMenu,
    drawerRef,
    backdropRef,
  } = useHeaderLogic();

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
          <div className={styles.currentItem} aria-live="polite">{activeItem}</div>
          <button type="button" className={styles.hamburger} onClick={toggleMenu} aria-label="Ouvrir le menu">
            <Menu className={styles.hamburgerIcon} />
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
                <li
                  key={item}
                  className={`${styles.drawerNavItem} ${
                    activeItem === item ? styles.drawerNavItemActive : ""
                  }`}
                >
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


