"use client";

import { useState } from "react";
import { DownloadSimple } from "@phosphor-icons/react";

type Country = "colombia" | "mexico";

const COUNTRIES: Record<Country, { label: string; flag: string; file: string }> = {
  colombia: {
    label: "Colombia",
    flag: "🇨🇴",
    file: "/briefs/adipa-brief-colombia.pdf",
  },
  mexico: {
    label: "México",
    flag: "🇲🇽",
    file: "/briefs/adipa-brief-mexico.pdf",
  },
};

export function CountryBriefPicker() {
  const [country, setCountry] = useState<Country>("colombia");
  const current = COUNTRIES[country];

  return (
    <div className="adipa-card p-6">
      <h3 className="text-lg font-semibold text-brand-navy">Brief completo por país</h3>
      <p className="mt-2 text-[15px] text-brand-navy/80">
        Elige tu país para descargar el brief con el detalle de tu curso disponible.
      </p>
      <div className="mt-4 flex gap-2">
        {(Object.keys(COUNTRIES) as Country[]).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setCountry(key)}
            className={`rounded-adipa px-4 py-2 text-sm font-semibold transition ${
              country === key
                ? "bg-brand-purple text-white"
                : "bg-brand-soft text-brand-navy hover:bg-brand-lavender"
            }`}
          >
            {COUNTRIES[key].flag} {COUNTRIES[key].label}
          </button>
        ))}
      </div>
      <a
        href={current.file}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 rounded-adipa bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-[1.02]"
      >
        <DownloadSimple size={18} weight="bold" />
        Descargar brief {current.label}
      </a>
    </div>
  );
}
