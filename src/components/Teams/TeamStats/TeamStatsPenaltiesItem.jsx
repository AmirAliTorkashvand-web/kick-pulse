import { PieChart, Pie, Cell } from "recharts";

export default function TeamStatsPenaltiesItem({ scored, missed , data , total}) {
  const successRate = total ? Math.round((scored / total) * 100) : 0;

  const COLORS = ["#00e676", "#ff4567"];

  return (
    <div className="w-full rounded-xl border border-border bg-surface p-5">
      <div className="flex items-center gap-8">
        <div className="relative h-35 w-40 shrink-0">
          <PieChart width={160} height={140}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={52}
              outerRadius={70}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
              stroke="none"
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-white">
              {successRate}%
            </span>
            <span className="text-xs text-text-secondary">Success rate</span>
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <div className="border-b border-border py-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-secondary">Scored</span>
              <span className="font-semibold text-brand">
                {scored} / {total}
              </span>
            </div>
          </div>

          <div className="py-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-secondary">Missed</span>
              <span className="font-semibold text-danger">
                {missed} / {total}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
