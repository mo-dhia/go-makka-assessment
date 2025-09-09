"use client";

import React, { useEffect, useMemo, useState } from "react";
import styles from "./header.module.css";
import { Menu } from "../../icons/icons";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useHeaderLogic } from "./header.func";
import { supabase } from "@/lib/supabaseClient";

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
    headerRef,
    navBarRef,
    topBarRef,
    navListRef,
    selectorRef,
    setItemRef,
    activeNavId,
    topBarSpacerRef,
  } = useHeaderLogic();
  const pathname = usePathname();
  const router = useRouter();
  const currentItemLabel = (navItems.find((it) => it.id === activeNavId)?.label) || activeItem;

  const [user, setUser] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const init = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!isMounted) return;
      setUser(user ?? null);
    };
    init();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      isMounted = false;
      listener?.subscription?.unsubscribe?.();
    };
  }, []);

  const displayName = useMemo(() => {
    if (!user) return null;
    const name = user.user_metadata?.full_name || user.user_metadata?.name;
    return name || user.email || "Mon compte";
  }, [user]);

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=/hajj`,
        queryParams: { prompt: "select_account" }
      }
    });
    if (error) console.error(error);
  };

  return (
    <>
    <header className={styles.headerRoot} ref={headerRef}>
      <div className={styles.topBar} ref={topBarRef}>
        <div className={styles.container}>
          <div className={styles.branding}>
            <div className={styles.logoTitle}>GO-MAKKAH</div>
            <div className={styles.tagline}>Quand foi et prestige se rencontrent</div>
          </div>
          <div className={styles.contact}>
            <a className={styles.phone} href="tel:+33149877021" aria-label="Appeler le numéro 01 49 87 70 21">01 49 87 70 21</a>
            <a
              className={styles.address}
              href="https://www.google.com/maps/search/?api=1&query=32%20avenue%20Pierre%20Semarde%2C%2094200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ouvrir l'adresse dans Google Maps"
            >
              32 avenue Pierre Semarde, 94200
            </a>
          </div>
        </div>
      </div>

      <nav className={styles.navBar} ref={navBarRef}>
        <div className={styles.container}>
          <div className={styles.currentItem} aria-live="polite">{currentItemLabel}</div>
          <button type="button" className={styles.hamburger} onClick={toggleMenu} aria-label="Ouvrir le menu">
            <Menu className={styles.hamburgerIcon} />
          </button>

          <ul className={styles.navList} ref={navListRef}>
            {navItems.map((item) => (
              <li
                key={item.id}
                className={styles.navItem}
                ref={setItemRef(item.id)}
              >
                <Link href={item.href} className={styles.navButton} aria-current={activeNavId === item.id ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
            <div className={styles.selector} ref={selectorRef} />
          </ul>

          <div className={styles.actions}>
            <button type="button" className={styles.actionLink} onClick={!user ? handleLogin : undefined}>
              <span className={styles.icon} aria-hidden>
                <img src="/imgs/account.png" alt="" />
              </span>
              <span>{user ? displayName : "Connectez-vous"}</span>
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
                  key={item.id}
                  className={`${styles.drawerNavItem} ${activeNavId === item.id ? styles.drawerNavItemActive : ""}`}
                >
                  <button
                    type="button"
                    className={styles.drawerNavButton}
                    onClick={() => { router.push(item.href); setMenuOpen(false); }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              {/* Account / Login */}
              <li className={styles.drawerNavItem}>
                <button
                  type="button"
                  className={styles.drawerNavButton}
                  onClick={!user ? () => { setMenuOpen(false); handleLogin(); } : undefined}
                >
                  {user ? displayName : "Connectez-vous"}
                </button>
              </li>
              
            </ul>
          </aside>
        </div>
      </nav>
    </header>
    {/* Spacer pushes page content below fixed header's red top bar */}
    <div className={styles.topBarSpacer} ref={topBarSpacerRef} />
    </>
  );
}


