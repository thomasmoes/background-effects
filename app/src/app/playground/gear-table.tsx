import type { Density, Radius } from "./trip-card";

export interface GearItem {
  name: string;
  category: string;
  weight: string;
  qty: string;
  badge: string;
}

export interface GearTableProps {
  items: GearItem[];
  density?: Density;
  radius?: Radius;
}

export function GearTable({
  items,
  density = "roomy",
  radius = "rounded",
}: GearTableProps) {
  const cardRadius = radius === "rounded" ? "rounded-2xl" : "rounded-md";
  const rowPadding = density === "roomy" ? "py-3" : "py-2";

  return (
    <div
      className={`overflow-hidden ${cardRadius} border border-zinc-800 bg-zinc-900/60 shadow-[0_18px_45px_rgba(0,0,0,0.75)]`}
    >
      <div className="grid grid-cols-[minmax(0,2.6fr)_minmax(0,1.1fr)_minmax(0,0.8fr)_minmax(0,0.8fr)] gap-px border-b border-zinc-800 bg-zinc-900/80 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-400">
        <div>Item</div>
        <div>Category</div>
        <div className="text-right">Weight</div>
        <div className="text-right">Qty</div>
      </div>

      <div className="divide-y divide-zinc-900/70">
        {items.map((item) => (
          <div
            key={item.name}
            className={`grid grid-cols-[minmax(0,2.6fr)_minmax(0,1.1fr)_minmax(0,0.8fr)_minmax(0,0.8fr)] items-center gap-px bg-zinc-950/80 px-4 ${rowPadding} text-sm hover:bg-zinc-900/90`}
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
  );
}

