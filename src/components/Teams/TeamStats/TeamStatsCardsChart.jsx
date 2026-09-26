import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function TeamStatsCardsChart({ title, data, color, Icon , total }) {
  return (
    <div className="w-full rounded-xl border border-border bg-surface p-4">
      <div className="mb-4 flex items-center gap-2">
        <Icon color={color} />

        <h3 className="text-base font-bold text-white">{title}</h3>

        <span className="text-sm font-semibold" style={{ color }}>
          {total}
        </span>
      </div>

      <div className="h-[120px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 5, left: -20, bottom: 0 }}
          >
            <CartesianGrid
              stroke="var(--color-border)"
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="minute"
              tick={{
                fill: "var(--color-text-secondary)",
                fontSize: 11,
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "var(--color-text-secondary)",
                fontSize: 11,
              }}
            />

            <Tooltip />

            <Bar
              dataKey="total"
              fill={color}
              radius={[3, 3, 0, 0]}
              barSize={18}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
