"use client";

import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

function CallbackInner() {
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    const checkSession = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error) {
        console.error(error);
      }
      if (!user) {
        router.replace("/");
        return;
      }
      // Clean hash from OAuth fragment if present, then redirect
      const next = params.get("next") || "/hajj";
      if (typeof window !== 'undefined' && window.location.hash) {
        // Replace state without hash to avoid flashing tokens in URL
        const cleanUrl = window.location.origin + window.location.pathname + window.location.search;
        window.history.replaceState(null, "", cleanUrl);
      }
      router.replace(next);
    };

    checkSession();
  }, [router, params]);

  return <p>Redirection…</p>;
}

export default function Callback() {
  return (
    <Suspense fallback={<p>Redirection…</p>}>
      <CallbackInner />
    </Suspense>
  );
}


