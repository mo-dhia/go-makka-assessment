import React from 'react';
import Image from 'next/image';
import styles from './strategy.module.css';

const items = [
  { icon: '/imgs/learning.png', title: 'Des formations pratiques', desc: 'en ligne et parfois en présentiel' },
  { icon: '/imgs/read.png', title: 'Des webinars et réunions', desc: "pour suivre l'actualité du Hajj" },
  { icon: '/imgs/whatsapp.png', title: 'Un groupe Whatsaap', desc: 'pour rester en contact permanant avec notre équipe' },
  { icon: '/imgs/request.png', title: 'Réponses personnalisées', desc: 'à toutes vos questions par télé / whatsapp' },
  { icon: '/imgs/muslim.png', title: 'Accompagnement religieux et médical', desc: 'séminaires avec imams, médecins et experts du Hajj' },
];

export default function Strategy() {
  return (
    <section className={styles.wrapper} aria-labelledby='strategy-title'>
      <div className={styles.container}>
        <h2 id='strategy-title' className={styles.title}>L’accompagnement GO Makkah : bien plus qu’une simple inscription</h2>
        <p className={styles.intro}>Chez GO Makkah, nous croyons que le Hajj doit se préparer avec autant de rigueur spirituelle que logistique. C’est pourquoi nous mettons à votre disposition, gratuitement :</p>

        <div className={styles.grid}>
          {items.map((it, idx) => (
            <div key={idx} className={styles.item}>
              <Image src={it.icon} alt='' width={36} height={36} className={styles.icon} />
              <div className={styles.texts}>
                <div className={styles.itemTitle}>{it.title}</div>
                <div className={styles.itemDesc}>{it.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.note}>Cet accompagnement est inclus pour tous nos inscrits, quelle que soit l’option choisie.</p>
      </div>
    </section>
  );
}
