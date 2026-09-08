"use client";

import { useState } from "react";
import { DownloadSimple, ArrowSquareOut } from "@phosphor-icons/react";

type Country = "colombia" | "mexico";

const COUNTRIES: Record<
  Country,
  { label: string; flag: string; brief: string; courses: string }
> = {
  colombia: {
    label: "Colombia",
    flag: "🇨🇴",
    brief: "/briefs/adipa-brief-colombia.pdf",
    courses: "https://adipa.co/cursos?page=1&per_page=24&mod=asincronica",
  },
  mexico: {
    label: "México",
    flag: "🇲🇽",
    brief: "/briefs/adipa-brief-mexico.pdf",
    courses: "https://adipa.mx/cursos?page=1&per_page=24",
  },
};

export function CountryBriefPicker() {
  const [country, setCountry] = useState<Country>("colombia");
  const current = COUNTRIES[country];

  return (
    <div className="adipa-card p-6">
      <h3 className="text-lg font-semibold text-brand-navy">Elige tu país</h3>
      <p className="mt-2 text-[15px] text-brand-navy/80">
        Consulta los cursos asincrónicos disponibles y descarga el brief con el detalle de tu
        colaboración.
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
      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={current.courses}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-adipa bg-brand-purple px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-[1.02]"
        >
          <ArrowSquareOut size={18} weight="bold" />
          Ver cursos asincrónicos {current.label}
        </a>
        <a
          href={current.brief}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-adipa border border-brand-navy/15 bg-white px-5 py-2.5 text-sm font-semibold text-brand-navy transition hover:scale-[1.02]"
        >
          <DownloadSimple size={18} weight="bold" />
          Descargar brief
        </a>
      </div>
    </div>
  );
}
