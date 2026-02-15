"use client";

import { useState } from "react";
import { GearTable } from "./gear-table";
import { TripCard } from "./trip-card";

export default function PlaygroundPage() {
  const [density, setDensity] = useState<"roomy" | "compact">("roomy");
  const [radius, setRadius] = useState<"rounded" | "square">("rounded");

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-10">
        <section className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-xs text-zinc-200">
          <span className="font-medium uppercase tracking-[0.16em] text-zinc-400">
            Design controls
          </span>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                Density
              </span>
              <div className="inline-flex overflow-hidden rounded-full border border-zinc-700 bg-zinc-900">
                <button
                  type="button"
                  onClick={() => setDensity("roomy")}
                  className={`px-3 py-1 text-[11px] font-medium ${
                    density === "roomy"
                      ? "bg-zinc-100 text-zinc-950"
                      : "text-zinc-300"
                  }`}
                >
                  Roomy
                </button>
                <button
                  type="button"
                  onClick={() => setDensity("compact")}
                  className={`px-3 py-1 text-[11px] font-medium ${
                    density === "compact"
                      ? "bg-zinc-100 text-zinc-950"
                      : "text-zinc-300"
                  }`}
                >
                  Compact
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                Corners
              </span>
              <div className="inline-flex overflow-hidden rounded-full border border-zinc-700 bg-zinc-900">
                <button
                  type="button"
                  onClick={() => setRadius("rounded")}
                  className={`px-3 py-1 text-[11px] font-medium ${
                    radius === "rounded"
                      ? "bg-zinc-100 text-zinc-950"
                      : "text-zinc-300"
                  }`}
                >
                  Soft
                </button>
                <button
                  type="button"
                  onClick={() => setRadius("square")}
                  className={`px-3 py-1 text-[11px] font-medium ${
                    radius === "square"
                      ? "bg-zinc-100 text-zinc-950"
                      : "text-zinc-300"
                  }`}
                >
                  Sharp
                </button>
              </div>
            </div>
          </div>
        </section>

        <header className="flex flex-col gap-2 border-b border-zinc-800 pb-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
            Ultralight packing · Playground
          </p>
          <h1 className="text-3xl font-semibold tracking-tight">
            Trip & gear UX sandbox
          </h1>
          <p className="max-w-2xl text-sm text-zinc-400">
            This page is your safe space to explore layouts, states, and visual
            styles for trips, hikes, gear, and food. Nothing here is wired to
            real data yet.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-[minmax(0,2fr),minmax(0,1.4fr)]">
          <div className="space-y-4">
            <h2 className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-400">
              Upcoming trip
            </h2>
            <TripCard
              label="Base pack v1 · Prototype"
              title="Kungsleden South · 5 days"
              subtitle="12–16 August · Abisko → Nikkaluokta · Solo"
              totalWeight="7.4 kg"
              weightBreakdown="Base 4.1 kg · Food 2.3 kg · Water 1.0 kg"
              dailyEffort="18–22 km / day"
              elevation="2,400 m total ↑ · 2,100 m ↓"
              foodDensity="4.6 kcal / g"
              foodSummary="3,200 kcal / day · 700 g food"
              density={density}
              radius={radius}
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-400">
              Visual notes
            </h2>
            <div className="space-y-3 rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/40 p-4 text-xs text-zinc-300">
              <p className="font-medium text-zinc-200">
                Use this side panel to jot down what you&apos;re testing:
              </p>
              <ul className="list-disc space-y-1 pl-4">
                <li>Does this card feel calm or noisy?</li>
                <li>Is the hierarchy between trip title vs stats clear?</li>
                <li>How does this hold up in dark vs light modes?</li>
              </ul>
              <p className="pt-1 text-[11px] text-zinc-500">
                You can freely change spacing, radii, colors, shadows, and type
                scale here without worrying about breaking data logic.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-400">
              Gear list · table exploration
            </h2>
            <div className="flex gap-2">
              <button className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs font-medium text-zinc-200 shadow-sm transition hover:border-zinc-500 hover:bg-zinc-800">
                Compact mode
              </button>
              <button className="inline-flex items-center justify-center rounded-full border border-transparent bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-50 shadow-sm transition hover:bg-zinc-700">
                Chunky cards
              </button>
            </div>
          </div>

          <GearTable
            items={[
              {
                name: "Gossamer Gear Mariposa 60",
                category: "Backpack",
                weight: "1,150 g",
                qty: "1",
                badge: "Always on",
              },
              {
                name: "Palace 2P + pegs",
                category: "Shelter",
                weight: "980 g",
                qty: "1",
                badge: "Swap?",
              },
              {
                name: "Down quilt 20°",
                category: "Sleep",
                weight: "780 g",
                qty: "1",
                badge: "Comfort",
              },
              {
                name: "Powerbank 20,000 mAh",
                category: "Electronics",
                weight: "450 g",
                qty: "1",
                badge: "Heavy",
              },
            ]}
            density={density}
            radius={radius}
          />
        </section>
      </div>
    </div>
  );
}

