"use client";

import { useState } from "react";
import { DownloadSimple, ArrowSquareOut } from "@phosphor-icons/react";

type Country = "colombia" | "mexico" | "argentina";

const COUNTRIES: Record<
  Country,
  { label: string; flag: string; brief?: string; courses: string }
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
  argentina: {
    label: "Argentina",
    flag: "🇦🇷",
    courses: "https://adipa.ar/cursos",
  },
};

export function CountryBriefPicker() {
  const [country, setCountry] = useState<Country>("colombia");
  const current = COUNTRIES[country];

  return (
    <div>
      <div className="adipa-card p-6">
        <h3 className="text-lg font-semibold text-brand-navy">Elige tu país</h3>
        <p className="mt-2 text-[15px] text-brand-navy/80">
          Consulta los cursos asincrónicos disponibles y descarga el brief con el detalle de tu
          colaboración.
        </p>
        <div className="mt-4 flex gap-3">
          {(Object.keys(COUNTRIES) as Country[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setCountry(key)}
              aria-label={COUNTRIES[key].label}
              aria-pressed={country === key}
              title={COUNTRIES[key].label}
              className={`flex h-12 w-12 items-center justify-center rounded-full text-2xl transition ${
                country === key
                  ? "bg-brand-soft ring-2 ring-brand-purple ring-offset-2"
                  : "opacity-50 hover:opacity-100"
              }`}
            >
              {COUNTRIES[key].flag}
            </button>
          ))}
        </div>
        <p className="mt-2 text-sm font-medium text-brand-navy/70">{current.label}</p>
        {current.brief && (
          <a
            href={current.brief}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-adipa border border-brand-navy/15 bg-white px-5 py-2.5 text-sm font-semibold text-brand-navy transition hover:scale-[1.02]"
          >
            <DownloadSimple size={18} weight="bold" />
            Descargar brief
          </a>
        )}
      </div>
      <a
        href={current.courses}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex items-center justify-center gap-2 rounded-adipa bg-brand-purple px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:scale-[1.02] hover:bg-brand-purple/90"
      >
        <ArrowSquareOut size={18} weight="bold" />
        Ver cursos asincrónicos {current.label}
      </a>
    </div>
  );
}
