export default function PlaygroundPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-10">
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
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.65)]">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                    Base pack v1 · Prototype
                  </p>
                  <h3 className="text-xl font-semibold tracking-tight">
                    Kungsleden South · 5 days
                  </h3>
                  <p className="text-xs text-zinc-400">
                    12–16 August · Abisko → Nikkaluokta · Solo
                  </p>
                </div>
                <button className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs font-medium text-zinc-200 shadow-sm transition hover:border-zinc-500 hover:bg-zinc-800">
                  Edit trip
                </button>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <div className="space-y-1 rounded-xl border border-zinc-800 bg-zinc-900/70 p-3">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500">
                    Total pack weight
                  </p>
                  <p className="text-lg font-semibold text-zinc-50">7.4 kg</p>
                  <p className="text-[11px] text-zinc-400">
                    Base 4.1 kg · Food 2.3 kg · Water 1.0 kg
                  </p>
                </div>
                <div className="space-y-1 rounded-xl border border-zinc-800 bg-zinc-900/70 p-3">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500">
                    Daily effort
                  </p>
                  <p className="text-lg font-semibold text-zinc-50">
                    18–22 km / day
                  </p>
                  <p className="text-[11px] text-zinc-400">
                    2,400 m total ↑ · 2,100 m ↓
                  </p>
                </div>
                <div className="space-y-1 rounded-xl border border-zinc-800 bg-zinc-900/70 p-3">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500">
                    Food density
                  </p>
                  <p className="text-lg font-semibold text-zinc-50">
                    4.6 kcal / g
                  </p>
                  <p className="text-[11px] text-zinc-400">
                    3,200 kcal / day · 700 g food
                  </p>
                </div>
              </div>
            </div>
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

          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 shadow-[0_18px_45px_rgba(0,0,0,0.75)]">
            <div className="grid grid-cols-[minmax(0,2.6fr)_minmax(0,1.1fr)_minmax(0,0.8fr)_minmax(0,0.8fr)] gap-px border-b border-zinc-800 bg-zinc-900/80 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-400">
              <div>Item</div>
              <div>Category</div>
              <div className="text-right">Weight</div>
              <div className="text-right">Qty</div>
            </div>

            <div className="divide-y divide-zinc-900/70">
              {[
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
              ].map((item) => (
                <div
                  key={item.name}
                  className="grid grid-cols-[minmax(0,2.6fr)_minmax(0,1.1fr)_minmax(0,0.8fr)_minmax(0,0.8fr)] items-center gap-px bg-zinc-950/80 px-4 py-3 text-sm hover:bg-zinc-900/90"
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="truncate text-[13px] font-medium text-zinc-50">
                        {item.name}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-zinc-900 px-2 py-[2px] text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-400">
                        {item.badge}
                      </span>
                    </div>
                    <div className="h-[3px] w-20 rounded-full bg-gradient-to-r from-emerald-400/60 via-emerald-500/60 to-emerald-300/50" />
                  </div>
                  <div className="text-xs text-zinc-400">{item.category}</div>
                  <div className="text-right text-xs text-zinc-100">
                    {item.weight}
                  </div>
                  <div className="text-right text-xs text-zinc-400">
                    {item.qty}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

