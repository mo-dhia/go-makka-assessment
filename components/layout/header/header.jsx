"use client";

import React, { useState } from "react";
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
                ◦
              </span>
              <span>Mon compte</span>
            </button>
            <button type="button" className={styles.actionLink}>
              <span className={styles.icon} aria-hidden>
                ◦
              </span>
              <span>Espace client</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}


