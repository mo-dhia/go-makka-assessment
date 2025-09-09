"use client";

import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";

const footerColumns = [
  {
    title: "Plan de site",
    links: [
      { label: "Qui sommes nous", href: "#" },
      { label: "annuaire_des_hotels", href: "#" },
      { label: "recherche", href: "#" },
      { label: "Promotions", href: "#" },
      { label: "Boutique en ligne", href: "#" },
    ],
  },
  {
    title: "Liens utiles",
    links: [
      { label: "Qui sommes nous", href: "#" },
      { label: "annuaire_des_hotels", href: "#" },
      { label: "recherche", href: "#" },
      { label: "Promotions", href: "#" },
      { label: "Boutique en ligne", href: "#" },
    ],
  },
  {
    title: "Hajj - Omra",
    links: [
      { label: "Qui sommes nous", href: "#" },
      { label: "annuaire_des_hotels", href: "#" },
      { label: "recherche", href: "#" },
      { label: "Promotions", href: "#" },
      { label: "Boutique en ligne", href: "#" },
    ],
  },
  {
    title: "Informations",
    links: [
      { label: "Qui sommes nous", href: "#" },
      { label: "annuaire_des_hotels", href: "#" },
      { label: "recherche", href: "#" },
      { label: "Promotions", href: "#" },
      { label: "Boutique en ligne", href: "#" },
    ],
  },
  {
    title: "Nos agences",
    links: [
      { label: "Qui sommes nous", href: "#" },
      { label: "annuaire_des_hotels", href: "#" },
      { label: "recherche", href: "#" },
      { label: "Promotions", href: "#" },
      { label: "Boutique en ligne", href: "#" },
    ],
  },
];

const flagList = [
  { alt: "France", src: "/imgs/france.png" },
  { alt: "Algérie", src: "/imgs/algeria.png" },
  { alt: "Maroc", src: "/imgs/moroco.png" },
  { alt: "Arabie Saoudite", src: "/imgs/saudiarabia.png" },
  { alt: "Tunisie", src: "/imgs/tunisia.png" },
];

export default function Footer() {
  return (
    <footer className={styles.footerRoot}>
      <div className={styles.columns}>        
        {footerColumns.map((col) => (
          <div key={col.title} className={styles.column}>
            <h3 className={styles.columnTitle}>{col.title}</h3>
            <ul className={styles.linkList}>
              {col.links.map((link) => (
                <li key={`${col.title}-${link.label}`} className={styles.linkItem}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.flagsBar} aria-label="Pays">
        <div className={styles.flags}>
          {flagList.map((flag) => (
            <span key={flag.alt} className={styles.flag}>
              <img src={flag.src} alt={flag.alt} />
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}


