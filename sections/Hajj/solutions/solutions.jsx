"use client"
import React from 'react';
import styles from './solutions.module.css';
import useAutoHeightTransition from '../../../hooks/useAutoHeightTransition';
import { useSolutionsLogic } from './solutions.func';

const faqs = [
  {
    id: 'faq-1',
    question: 'Compte Nusuk bloqué à la création ?',
    answer: (
      <div className={styles.answerBlock}>
        <h4 className={styles.answerHeading}>Introduction</h4>
        <p className={styles.answerText}>
          Chaque année, de nombreux pèlerins français rencontrent des difficultés dès la première étape : la création du compte sur la plateforme Nusuk. Sans ce compte, impossible d’accéder aux packages du Hajj.
        </p>

        <h4 className={styles.answerHeading}>Causes fréquentes</h4>
        <ul className={styles.bulletList}>
          <li>Informations personnelles mal saisies (nom, numéro de passeport).</li>
          <li>Adresse email ou numéro de téléphone non validés.</li>
          <li>Tentatives multiples entraînant un blocage automatique.</li>
        </ul>

        <h4 className={styles.answerHeadingGold}>Solutions possibles</h4>
        <ol className={styles.numberList}>
          <li>Vérifiez que vos données correspondent exactement au passeport (majuscules, accents).</li>
          <li>Utilisez un numéro de téléphone valide (idéalement un portable international).</li>
        </ol>
      </div>
    ),
  },
  {
    id: 'faq-2',
    question: 'Carte bancaire refusée par Nusuk ?',
    answer: (
      <div className={styles.answerBlock}>
        <p className={styles.answerText}>Vérifiez la compatibilité internationale, les plafonds et les 3D Secure. En cas d’échec récurrent, contactez votre banque pour autoriser le paiement et réessayez plus tard.</p>
      </div>
    ),
  },
  {
    id: 'faq-3',
    question: 'Forfait confirmé puis annulé sur Nusuk?',
    answer: (
      <div className={styles.answerBlock}>
        <p className={styles.answerText}>Les annulations peuvent survenir après réconciliation des stocks. Surveillez l’email et l’historique de commande; si besoin, contactez le support pour une réémission ou une alternative.</p>
      </div>
    ),
  },
];

export default function Solutions() {
  const { openId, onToggle, registerItemRef } = useSolutionsLogic(faqs[0].id);

  return (
    <section className={styles.wrapper} aria-labelledby='solutions-title'>
      <div className={styles.container}>

        <div className={styles.accordion}>
          {faqs.map((item) => {
            const isOpen = openId === item.id;
            const bodyRef = useAutoHeightTransition(isOpen, { duration: 220, easing: 'ease' });

            return (
              <div key={item.id} className={styles.item} ref={registerItemRef(item.id)}>
                <button
                  className={styles.trigger}
                  aria-expanded={isOpen}
                  aria-controls={`${item.id}-panel`}
                  id={`${item.id}-button`}
                  onClick={() => onToggle(item.id)}
                  type='button'
                >
                  <span className={styles.question}>{item.question}</span>
                  <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`} aria-hidden>▾</span>
                </button>

                <div
                  id={`${item.id}-panel`}
                  aria-labelledby={`${item.id}-button`}
                  role='region'
                  ref={bodyRef}
                  className={styles.content}
                >
                  <div className={styles.contentInner}>{item.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
