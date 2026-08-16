import { getMatchDates } from "../../../utils/MatchesUtils/MatchUtils";
import MatchDatesItem from "./MatchDatesItem";

const dates = [
  {
    id: "yesterday",
    title: "Yesterday",
  },
  {
    id: "today",
    title: "Today",
  },
  {
    id: "tomorrow",
    title: "Tomorrow",
  },
];

export default function MatchDates({ activeDate, setActiveDate }) {
  const matchDates = getMatchDates();

  return (
    <div className="col-span-8 rounded-2xl border border-border bg-surface p-2">
      <div className="grid grid-cols-3 gap-2">
        {dates.map((date) => (
          <MatchDatesItem
            key={date.id}
            title={date.title}
            date={matchDates[date.id]}
            active={activeDate === date.id}
            onClick={() => setActiveDate(date.id)}
          />
        ))}
      </div>
    </div>
  );
}
