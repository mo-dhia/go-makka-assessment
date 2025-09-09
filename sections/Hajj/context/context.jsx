import React from 'react';
import Image from 'next/image';
import styles from './context.module.css';

const HajjContextSection = () => {
    return (
        <section className={styles.wrapper} aria-labelledby='context-title'>
            <div className={styles.container}>
                <h2 id='context-title' className={styles.heading}>Le contexte du Hajj aujourd’hui</h2>

                <p className={styles.paragraph}>
                    Depuis plusieurs années, l’Arabie Saoudite a mis en place un système centralisé de gestion du Hajj appelé <strong>Nusuk</strong>.
                    &nbsp;<img className={styles.kaabaIcon} src='/imgs/kaabaIcon.png' alt='' />
                </p>

                <p className={styles.paragraph}>
                    Toutes les inscriptions et tous les packages Hajj passent par ce portail officiel. Les agences saoudiennes agréées y proposent leurs offres, souvent en partenariat avec des agences françaises de confiance comme <span className={styles.iconText}>
                        <strong className={styles.brandName}>GO-MAKKAH</strong>
                        <img className={styles.goMakkahIcon} src='/imgs/goMakkahIcon.png' alt='' />

                    </span>.
                </p>

                <p className={styles.paragraph}>
                    Notre rôle est de vous aider à naviguer dans <span className={styles.iconText}>

                        <strong>ce système complexe</strong>
                    </span>, à choisir le pack qui correspond le mieux à vos attentes, et à <strong>sécuriser</strong> votre inscription dans les meilleures conditions.
                </p>
            </div>
        </section>
    );
};

export default HajjContextSection;
