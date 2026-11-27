"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

const STORAGE_KEY = "dd-cookie-consent";

type CookieConsent = { visible: boolean; accept: () => void; reopen: () => void };

const CookieContext = createContext<CookieConsent>({ visible: false, accept: () => {}, reopen: () => {} });

export function useCookieConsent() {
  return useContext(CookieContext);
}

export function CookieProvider({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let accepted = false;
    try {
      accepted = window.localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      accepted = false;
    }
    if (!accepted) {
      const t = window.setTimeout(() => setVisible(true), 400);
      return () => window.clearTimeout(t);
    }
  }, []);

  const accept = useCallback(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Storage unavailable: dismiss for this session only.
    }
    setVisible(false);
  }, []);
  const reopen = useCallback(() => setVisible(true), []);

  const value = useMemo(() => ({ visible, accept, reopen }), [visible, accept, reopen]);
  return <CookieContext.Provider value={value}>{children}</CookieContext.Provider>;
}

export function CookieBanner() {
  const { visible, accept } = useCookieConsent();
  if (!visible) return null;
  return (
    <div className="dd-cookie" role="dialog" aria-label="Cookies">
      <div className="dd-cookie__card">
        <p>We use cookies to personalize content, run ads, and analyze traffic.</p>
        <button type="button" onClick={accept}>
          Okay
        </button>
      </div>
    </div>
  );
}
