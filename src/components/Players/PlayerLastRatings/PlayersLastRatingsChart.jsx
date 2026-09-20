import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { findData } from "../../../utils/PlayersUtils/PlayersUtils";

export default function PlayerAppearancesChart({ player }) {
  if (!player?.length) return null;

  const data = findData(player[0].statistics, [
    ["league", ["league", "name"]],
    ["appearences", ["games", "appearences"]],
  ]);

  return (
    <div className="w-full rounded-xl bg-surface p-4">
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="150%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 0,
              left: -20,
              bottom: 10,
            }}
          >
            <XAxis
              dataKey="league"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#94a3b8",
                fontSize: 11,
              }}
              interval={0}
              angle={-20}
              textAnchor="end"
              height={60}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#94a3b8",
                fontSize: 12,
              }}
              allowDecimals={false}
            />

            <Tooltip
              cursor={{ fill: "rgba(255,255,255,0.04)" }}
              contentStyle={{
                backgroundColor: "#111827",
                border: "1px solid #1f2937",
                borderRadius: "8px",
                color: "#fff",
              }}
              labelStyle={{
                color: "#94a3b8",
              }}
            />

            <Bar
              dataKey="appearences"
              name="Appearances"
              fill="#00e676"
              radius={[6, 6, 0, 0]}
              barSize={36}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
