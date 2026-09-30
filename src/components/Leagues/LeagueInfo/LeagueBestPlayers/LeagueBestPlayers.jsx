import LeagueBestPlayersTable from "./LeagueBestPlayersTable";

export default function LeagueBestPlayers({ topScorers, topAssisters }) {
  if (!topAssisters.length) return null;
  if (!topScorers.length) return null;
  return (
    <>
      <div className="grid grid-cols-8 gap-2 mt-4">
        <LeagueBestPlayersTable category="scorers" col={4} Player={topScorers}/>
        <LeagueBestPlayersTable category="assists" col={4} Player={topAssisters}/>
        <LeagueBestPlayersTable category="g/a" col={8} Player={topScorers}/>
      </div>
    </>
  );
}
