"use client";

import { useState } from "react";
import { ArrowSquareOut } from "@phosphor-icons/react";

type Country = "colombia" | "mexico" | "argentina";

const COUNTRIES: Record<Country, { label: string; flag: string; courses: string }> = {
  colombia: {
    label: "Colombia",
    flag: "🇨🇴",
    courses: "https://adipa.co/cursos?page=1&per_page=24&mod=asincronica",
  },
  mexico: {
    label: "México",
    flag: "🇲🇽",
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
      <div className="rounded-adipa bg-brand-navy p-6 text-white shadow-lg">
        <h3 className="text-lg font-semibold">Elige tu país</h3>
        <p className="mt-2 text-[15px] text-white/80">
          Consulta los cursos asincrónicos disponibles en tu país. El brief con el detalle de tu
          colaboración lo encuentras arriba.
        </p>
      </div>
      <div className="mt-4 flex flex-col items-center gap-3">
        <div className="flex gap-3">
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
                  ? "bg-white ring-2 ring-brand-purple ring-offset-2"
                  : "bg-white/70 opacity-60 hover:opacity-100"
              }`}
            >
              {COUNTRIES[key].flag}
            </button>
          ))}
        </div>
        <a
          href={current.courses}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-adipa bg-brand-purple px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:scale-[1.02] hover:bg-brand-purple/90"
        >
          <ArrowSquareOut size={18} weight="bold" />
          Ver cursos asincrónicos {current.label}
        </a>
      </div>
    </div>
  );
}
