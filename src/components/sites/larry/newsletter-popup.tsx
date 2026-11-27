"use client";

import { useCallback, useEffect, useState, type FormEvent } from "react";
import { SendIcon } from "./icons";

const STORAGE_KEY = "dd-newsletter-popup";

/**
 * Local rebuild of the Mailchimp signup popup the source loads after the visitor
 * scrolls about a third of the page. Shown once per browser.
 */
export function NewsletterPopup() {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);

  const close = useCallback(() => {
    setOpen(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(STORAGE_KEY)) return;
    } catch {
      // Storage unavailable: still show once per page view.
    }
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max > 0.3) {
        setOpen(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (e.currentTarget.checkValidity()) setDone(true);
  };

  if (!open) return null;
  return (
    <div className="dd-popup" role="dialog" aria-modal="true" aria-labelledby="dd-popup-title" onClick={close}>
      <div className="dd-popup__card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="dd-popup__close" aria-label="Close" onClick={close}>
          ×
        </button>
        <div className="dd-popup__logo dd-wordmark">
          <span>Larry Harvey</span>
          <span>Letters</span>
        </div>
        <SendIcon className="dd-popup__plane" fillOpacity={1} strokeWidth={1} />
        <h2 id="dd-popup-title">A letter from Larry, now and then</h2>
        {done ? (
          <p className="dd-popup__note" role="status">
            You are on the list. Welcome to the table.
          </p>
        ) : (
          <form onSubmit={onSubmit}>
            <input type="text" name="firstName" placeholder="First name" aria-label="First name" />
            <input type="email" name="email" placeholder="Email address" aria-label="Email address" required />
            <button type="submit">Ask for the letters</button>
            <p className="dd-popup__note">No tips, no promotions, no spam. Plain words, when there is something worth saying.</p>
          </form>
        )}
      </div>
    </div>
  );
}
