import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function TeamStatsGoalsByMinuteChart({data}) {
  return (
    <div className="w-full rounded-xl border border-border bg-surface p-4">
      <div className="h-[220px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 5,
              left: -20,
              bottom: 0,
            }}
            barGap={3}
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
              tick={{
                fill: "var(--color-text-secondary)",
                fontSize: 11,
              }}
              axisLine={false}
              tickLine={false}
              domain={[0, 20]}
              ticks={[0, 5, 10, 15, 20]}
            />

            <Tooltip
              cursor={{ fill: "rgba(255,255,255,0.03)" }}
              contentStyle={{
                background: "var(--color-surface-light)",
                border: "1px solid var(--color-border)",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "white" }}
              itemStyle={{ fontSize: "12px" }}
            />

            <Bar
              dataKey="scored"
              name="Goals For"
              fill="var(--color-brand)"
              radius={[3, 3, 0, 0]}
              barSize={12}
            />

            <Bar
              dataKey="conceded"
              name="Goals Against"
              fill="var(--color-danger)"
              radius={[3, 3, 0, 0]}
              barSize={12}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 flex items-center justify-center gap-6 border-t border-border pt-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-brand" />
          <span className="text-xs font-medium text-text-secondary">
            Goals Scored
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-danger" />
          <span className="text-xs font-medium text-text-secondary">
            Goals Conceded
          </span>
        </div>
      </div>
    </div>
  );
}
