export type Density = "roomy" | "compact";
export type Radius = "rounded" | "square";

export interface TripCardProps {
  label: string;
  title: string;
  subtitle: string;
  totalWeight: string;
  weightBreakdown: string;
  dailyEffort: string;
  elevation: string;
  foodDensity: string;
  foodSummary: string;
  density?: Density;
  radius?: Radius;
}

export function TripCard({
  label,
  title,
  subtitle,
  totalWeight,
  weightBreakdown,
  dailyEffort,
  elevation,
  foodDensity,
  foodSummary,
  density = "roomy",
  radius = "rounded",
}: TripCardProps) {
  const cardRadius = radius === "rounded" ? "rounded-2xl" : "rounded-md";
  const cardPadding =
    density === "roomy" ? "p-5 md:p-6" : "p-3 md:p-4";

  return (
    <div
      className={`${cardRadius} border border-zinc-800 bg-zinc-900/60 ${cardPadding} shadow-[0_18px_45px_rgba(0,0,0,0.65)]`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            {label}
          </p>
          <h3 className="text-xl font-semibold tracking-tight">
            {title}
          </h3>
          <p className="text-xs text-zinc-400">{subtitle}</p>
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
          <p className="text-lg font-semibold text-zinc-50">
            {totalWeight}
          </p>
          <p className="text-[11px] text-zinc-400">
            {weightBreakdown}
          </p>
        </div>
        <div className="space-y-1 rounded-xl border border-zinc-800 bg-zinc-900/70 p-3">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500">
            Daily effort
          </p>
          <p className="text-lg font-semibold text-zinc-50">
            {dailyEffort}
          </p>
          <p className="text-[11px] text-zinc-400">
            {elevation}
          </p>
        </div>
        <div className="space-y-1 rounded-xl border border-zinc-800 bg-zinc-900/70 p-3">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500">
            Food density
          </p>
          <p className="text-lg font-semibold text-zinc-50">
            {foodDensity}
          </p>
          <p className="text-[11px] text-zinc-400">
            {foodSummary}
          </p>
        </div>
      </div>
    </div>
  );
}

