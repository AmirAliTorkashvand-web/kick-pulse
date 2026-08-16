import MatchesLeagueItem from "./MatchesleagueItem";
import MatchesLeagueMatchItem from "./MatchleagueMatchItem";

export default function MatchesLeague() {
  return (
    <div className="col-span-8 flex flex-col gap-4">
      <MatchesLeagueItem>
        <MatchesLeagueMatchItem/>
      </MatchesLeagueItem>
    </div>
  );
}
