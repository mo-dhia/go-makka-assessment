"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import styles from "./page.module.css";

export default function AdminPage() {
  const [subs, setSubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all"); // all | assistance | serenite
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    let active = true;
    const load = async () => {
      setLoading(true);
      setError("");
      try {
        const { data, error } = await supabase
          .from("subscriptions")
          .select("id, user_id, user_email, full_name, phone, notes, package_type, created_at")
          .order("created_at", { ascending: false });
        if (error) throw error;
        if (!active) return;
        setSubs(data || []);
      } catch (e) {
        if (!active) return;
        setError(e.message || "Erreur");
      } finally {
        if (active) setLoading(false);
      }
    };
    load();
    return () => { active = false; };
  }, []);

  const filtered = useMemo(() => {
    let list = subs;
    if (filter !== "all") list = list.filter((s) => s.package_type === filter);
    if (search) {
      const q = search.toLowerCase();
      list = list.filter((s) =>
        (s.full_name || "").toLowerCase().includes(q) ||
        (s.user_email || "").toLowerCase().includes(q) ||
        (s.phone || "").toLowerCase().includes(q)
      );
    }
    return list;
  }, [subs, filter, search]);

  // close modal on ESC
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Subscriptions</h1>
          <div className={styles.controls}>
            <input
              className={styles.search}
              placeholder="Rechercher (nom, email, téléphone)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select className={styles.select} value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="all">Tous</option>
              <option value="assistance">Hajj Assistance</option>
              <option value="serenite">Hajj Sérénité</option>
            </select>
          </div>
        </header>

        {loading && <div className={styles.state}>Chargement…</div>}
        {error && <div className={styles.error}>Erreur: {error}</div>}
        {!loading && !error && filtered.length === 0 && (
          <div className={styles.state}>Aucun résultat</div>
        )}

        <section className={styles.grid}>
          {filtered.map((s) => (
            <article
              key={s.id}
              className={`${styles.card} ${s.package_type === 'serenite' ? styles.cardGold : styles.cardBlue}`}
              onClick={() => setSelected(s)}
            >
              <header className={styles.cardHeader}>
                <div className={styles.badge}>{s.package_type === 'serenite' ? 'Sérénité' : 'Assistance'}</div>
                <div className={styles.date}>{new Date(s.created_at).toLocaleString()}</div>
              </header>
              <div className={styles.rows}>
                <div className={styles.row}><span className={styles.key}>Nom</span><span className={styles.val}>{s.full_name || '—'}</span></div>
                <div className={styles.row}><span className={styles.key}>Email</span><span className={styles.val}>{s.user_email || '—'}</span></div>
                <div className={styles.row}><span className={styles.key}>Téléphone</span><span className={styles.val}>{s.phone || '—'}</span></div>
                <div className={styles.row}><span className={styles.key}>Notes</span><span className={styles.val}>{s.notes || '—'}</span></div>
                <div className={styles.row}><span className={styles.key}>User ID</span><span className={styles.valMono}>{s.user_id}</span></div>
              </div>
            </article>
          ))}
        </section>
        {selected && (
          <div className={styles.modalOverlay} role="dialog" aria-modal="true" onClick={(e) => { if (e.target === e.currentTarget) setSelected(null); }}>
            <div className={styles.modal}>
              <header className={styles.modalHeader}>
                <h3 className={styles.modalTitle}>
                  {selected.package_type === 'serenite' ? 'Hajj Sérénité' : 'Hajj Assistance'} · {new Date(selected.created_at).toLocaleString()}
                </h3>
                <button type="button" className={styles.modalClose} aria-label="Fermer" onClick={() => setSelected(null)}>×</button>
              </header>
              <div className={styles.modalBody}>
                <div className={styles.modalGrid}>
                  <div className={styles.modalRow}><span className={styles.modalKey}>Nom</span><span className={styles.modalVal}>{selected.full_name || '—'}</span></div>
                  <div className={styles.modalRow}><span className={styles.modalKey}>Email</span><span className={styles.modalVal}>{selected.user_email || '—'}</span></div>
                  <div className={styles.modalRow}><span className={styles.modalKey}>Téléphone</span><span className={styles.modalVal}>{selected.phone || '—'}</span></div>
                  <div className={styles.modalRow}><span className={styles.modalKey}>Notes</span><span className={styles.modalVal}>{selected.notes || '—'}</span></div>
                  <div className={styles.modalRow}><span className={styles.modalKey}>User ID</span><span className={styles.modalVal}>{selected.user_id}</span></div>
                  <div className={styles.modalRow}><span className={styles.modalKey}>ID</span><span className={styles.modalVal}>{selected.id}</span></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}


