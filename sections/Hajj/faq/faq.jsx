"use client";
import React, { useState } from 'react';
import styles from './faq.module.css';
import useAutoHeightTransition from '../../../hooks/useAutoHeightTransition';

const left = [
  { q: "Qu’est-ce que le Hajj ?", a: "Le Hajj est le pèlerinage à La Mecque, cinquième pilier de l’islam, que tout musulman capable doit accomplir au moins une fois dans sa vie." },
  { q: "Quand a lieu le Hajj ?", a: "Le Hajj se déroule annuellement pendant les jours de Dhou al-Hijja, selon le calendrier lunaire islamique." },
  { q: "Qui est obligé de faire le Hajj ?", a: "Tout musulman adulte, sain d’esprit et disposant des moyens physiques et financiers est tenu d’accomplir le Hajj une fois dans sa vie." },
];

const right = [
  { q: "Quelles sont les principales étapes du Hajj ?", a: "Ihram, Tawaf, Sa’i, station à Arafat, Muzdalifah, lapidation à Mina, et Tawaf d’adieu." },
  { q: "Quelle est la différence entre le Hajj et la ’Umra ?", a: "La ’Umra peut se faire toute l’année et est plus courte; le Hajj se fait à des dates précises avec des rites obligatoires supplémentaires." },
  { q: "Quels sont les bienfaits du Hajj ?", a: "Perfection spirituelle, pardon des péchés, renforcement de la foi et solidarité entre musulmans du monde entier." },
];

function Column({ items, openKey, onToggle, prefix }) {
  return (
    <div className={styles.column}>
      {items.map((item, i) => {
        const key = `${prefix}-${i}`;
        const isOpen = openKey === key;
        const bodyRef = useAutoHeightTransition(isOpen, { duration: 220, easing: 'ease' });
        return (
          <div key={key} className={`${styles.item} ${isOpen ? styles.isOpen : ''}`}>
            <button
              type='button'
              className={styles.trigger}
              aria-expanded={isOpen}
              onClick={() => onToggle(isOpen ? null : key)}
            >
              <span>{item.q}</span>
              <span className={`${styles.chevron} ${isOpen ? styles.open : ''}`}>▾</span>
            </button>
            <div ref={bodyRef} className={styles.panel}>
              <div className={styles.panelInner}>{item.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function FAQ() {
  const [openKey, setOpenKey] = useState(null);

  return (
    <section className={styles.wrapper} aria-labelledby='faq-title'>
      <div className={styles.container}>
        <h2 id='faq-title' className={styles.title}>Tout savoir sur notre service Hajj</h2>
        <p className={styles.subtitle}>Pour plus d’informations consulter notre <a href='#' className={styles.link}>page d’aide</a>.</p>

        <div className={styles.grid}>
          <Column items={left} openKey={openKey} onToggle={setOpenKey} prefix='l' />
          <Column items={right} openKey={openKey} onToggle={setOpenKey} prefix='r' />
        </div>
      </div>
    </section>
  );
}
