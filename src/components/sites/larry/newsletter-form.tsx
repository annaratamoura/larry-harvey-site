"use client";

import { useState, type FormEvent } from "react";
import { SendIcon } from "./icons";

type NewsletterFormProps = {
  layout: "row" | "col";
  placeholder: string;
  buttonLabel?: string;
};

/** Email capture used in the hero and footer. The source posts to its own form backend. */
export function NewsletterForm({ layout, placeholder, buttonLabel }: NewsletterFormProps) {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (e.currentTarget.checkValidity()) setSent(true);
  };

  return (
    <form className={`dd-newsletter dd-newsletter--${layout}`} onSubmit={onSubmit}>
      <label>
        <span className="sr-only">Email</span>
        <input className="dd-input" type="email" name="email" required placeholder={placeholder} autoComplete="email" />
      </label>
      <button type="submit" className="dd-send" aria-label={buttonLabel ?? "Subscribe"}>
        {buttonLabel ? <span>{buttonLabel}</span> : null}
        <SendIcon />
      </button>
      {sent ? (
        <p className="dd-newsletter__msg" role="status">
          Thank you. You are on the list.
        </p>
      ) : null}
    </form>
  );
}
