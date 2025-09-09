"use client"
import { useRef, useState, useCallback } from 'react'

export function useSolutionsLogic(initialId) {
    const [openId, setOpenId] = useState(initialId)
    const itemRefs = useRef({})

    const registerItemRef = useCallback((id) => (el) => {
        if (el) itemRefs.current[id] = el
    }, [])

    const scrollToItem = useCallback((id) => {
        const el = itemRefs.current[id];
        if (!el) return;
      
        try {
          setTimeout(() => {
            const rect = el.getBoundingClientRect();
            const offset = window.innerHeight * 0.3; // 10vh
            const scrollTop = window.pageYOffset + rect.top - offset;
      
            window.scrollTo({
              top: scrollTop,
              behavior: 'smooth',
            });
          }, 120);
        } catch {
          setTimeout(() => {
            const rect = el.getBoundingClientRect();
            const offset = window.innerHeight * 0.3;
            const scrollTop = window.pageYOffset + rect.top - offset;
      
            window.scrollTo({
              top: scrollTop,
              behavior: 'smooth',
            });
          }, 120);
        }
      }, []);
      

    const onToggle = useCallback((id) => {
        setOpenId((prev) => {
            const next = prev === id ? null : id
            // Defer scroll so height transition can begin
            requestAnimationFrame(() => scrollToItem(id))
            return next
        })
    }, [scrollToItem])

    return { openId, onToggle, registerItemRef }
}
