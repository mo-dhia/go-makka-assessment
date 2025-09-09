"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function Callback() {
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    const checkSession = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.replace("/");
        return;
      }
      const next = params.get("next") || "/hajj";
      router.replace(next);
    };

    checkSession();
  }, [router, params]);

  return <p>Redirection…</p>;
}


