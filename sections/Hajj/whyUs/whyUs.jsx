"use client";

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styles from './whyUs.module.css';
import { supabase } from '@/lib/supabaseClient';
import { useRouter, useSearchParams } from 'next/navigation';

const leftFeatures = [
  "Nous vous inscrivons sur notre groupe whatsup d'information & assistance",
  'Nous vous envoyons nos formules Hajj 2026',
  "Vous créez par vous-même votre compte Nusuk",
  'Vous réservez une de nos formules',
  'Vous nous envoyez votre passeport et la formule confirmée',
];

const rightFeatures = [
  "Nous vous inscrivons sur notre groupe whatsup d'information & assistance",
  'Nous créons et gérons pour vous votre compte NUSUK',
  'Nous payons votre hajj pour vous si vous le demander. Vos payez votre hajj chez nous',
  'Nous vous envoyons nos formules Hajj 2026',
  "Nous gérons la réservation de votre hajj jusqu'au bout",
  'Et  Vous partez au hajj avec nos équipes accompagnateurs très expérimentés',
];

export default function WhyUs() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [user, setUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(null); // 'assistance' | 'serenite'
  const [submitting, setSubmitting] = useState(false);
  const [submitOk, setSubmitOk] = useState(false);
  const [form, setForm] = useState({ fullName: '', phone: '', notes: '' });

  useEffect(() => {
    let active = true;
    const init = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!active) return;
      setUser(user ?? null);
    };
    init();
    const { data: listener } = supabase.auth.onAuthStateChange((_e, session) => setUser(session?.user ?? null));
    return () => listener?.subscription?.unsubscribe?.();
  }, []);

  // Auto-open modal after redirect from auth
  useEffect(() => {
    const open = searchParams?.get('open');
    const type = searchParams?.get('type');
    if (open === 'subscribe' && (type === 'assistance' || type === 'serenite')) {
      setSelectedType(type);
      setModalOpen(true);
      // Clean URL to prevent reopening on refresh
      router.replace('/hajj');
    }
  }, [searchParams, router]);

  const typeLabel = useMemo(() => selectedType === 'serenite' ? 'Hajj Sérénité' : 'Hajj Assistance', [selectedType]);

  const onOpenSubscribe = useCallback(async (type) => {
    setSelectedType(type);
    if (!user) {
      const next = `/hajj?open=subscribe&type=${type}`;
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}`,
          queryParams: { prompt: 'select_account' }
        }
      });
      if (error) console.error(error);
      return;
    }
    setModalOpen(true);
  }, [user]);

  const onClose = useCallback(() => {
    setModalOpen(false);
    setSubmitOk(false);
    setForm({ fullName: '', phone: '', notes: '' });
  }, []);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (!user) return;
    setSubmitting(true);
    try {
      const payload = {
        user_id: user.id,
        user_email: user.email,
        full_name: form.fullName,
        phone: form.phone,
        notes: form.notes,
        package_type: selectedType, // 'assistance' | 'serenite'
      };
      const { error } = await supabase.from('subscriptions').insert(payload);
      if (error) throw error;
      setSubmitOk(true);
    } catch (err) {
      console.error(err);
      alert("Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setSubmitting(false);
    }
  }, [user, form, selectedType]);

  return (
    <section className={styles.wrapper} aria-labelledby='why-title'>
      <div className={styles.container}>
        <h2 id='why-title' className={styles.title}>Deux formules adaptées à vos besoins</h2>

        <div className={styles.grid}>
          <article className={`${styles.card} ${styles.cardLeft}`}>
            <header className={styles.cardHeader}>
              <div className={styles.ribbon}>
                <img className={styles.ribbonImg} src='/imgs/bookmark-green.png' alt='' />
                <div className={styles.ribbonText}><span>Pack</span><strong>Gratuit</strong></div>
              </div>
              <h3 className={styles.cardTitle}><span className={styles.blue}>Hajj Assistance</span> GO-Makkah</h3>
            </header>

            <div className={styles.bannerLeft}>7% de nos client ont le choisis</div>

            <ul className={styles.features}>
              {leftFeatures.map((f, i) => (
                <li key={i} className={styles.feature}>{f}</li>
              ))}
            </ul>

            <button className={`${styles.cta} ${styles.ctaBlue}`} type='button' onClick={() => onOpenSubscribe('assistance')}>Inscrivez-vous vite !</button>
          </article>

          <article className={`${styles.card} ${styles.cardRight}`}>
            <header className={styles.cardHeader}>
              <div className={styles.priceTag}>
                <div className={styles.priceInside}>
                  <img className={styles.ribbonImg} src='/imgs/bookmark-gold.png' alt='' />
                  <div className={styles.priceNumber}>250</div>
                  <div className={styles.priceUnit}>EUR</div>
                </div>
              </div>
              <h3 className={styles.cardTitle}><span className={styles.gold}>Hajj Sérénité</span> GO-Makkah</h3>
            </header>

            <div className={styles.bannerRight}>80% de nos client ont le choisis</div>

            <ul className={styles.features}>
              {rightFeatures.map((f, i) => (
                <li key={i} className={styles.feature}>{f}</li>
              ))}
            </ul>

            <button className={`${styles.cta} ${styles.ctaGold}`} type='button' onClick={() => onOpenSubscribe('serenite')}>Inscrivez-vous vite !</button>
          </article>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className={styles.modalOverlay}
          role='dialog'
          aria-modal='true'
          aria-label='Inscription'
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <div className={`${styles.modal} ${styles.modalOpen}`}>
            <header className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>Inscription – {typeLabel}</h3>
              <button type='button' className={styles.modalClose} onClick={onClose} aria-label='Fermer'>×</button>
            </header>

            {!submitOk ? (
              <form className={styles.form} onSubmit={onSubmit}>
                <div className={styles.formRow}>
                  <label className={styles.label} htmlFor='fullName'>Nom complet</label>
                  <input id='fullName' name='fullName' value={form.fullName} onChange={onChange} className={styles.input} placeholder='Votre nom et prénom' required />
                </div>
                <div className={styles.formRow}>
                  <label className={styles.label} htmlFor='phone'>Téléphone</label>
                  <input id='phone' name='phone' value={form.phone} onChange={onChange} className={styles.input} placeholder='+33 …' required />
                </div>
                <div className={styles.formRow}>
                  <label className={styles.label} htmlFor='notes'>Notes</label>
                  <textarea id='notes' name='notes' value={form.notes} onChange={onChange} className={styles.textarea} placeholder='Informations complémentaires (optionnel)' />
                </div>
                <footer className={styles.modalFooter}>
                  <button type='button' className={styles.btnSecondary} onClick={onClose}>Annuler</button>
                  <button type='submit' className={styles.btnPrimary} disabled={submitting}>{submitting ? 'Envoi…' : 'Confirmer'}</button>
                </footer>
              </form>
            ) : (
              <div className={styles.success}>
                <div className={styles.successIcon}>✓</div>
                <p className={styles.successText}>Merci, votre inscription a été enregistrée.</p>
                <button type='button' className={styles.btnPrimary} onClick={onClose}>Fermer</button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
