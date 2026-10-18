import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getLeague } from "../../services/Home/MatchContentServices";

export default function LeagueDetailPage() {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    async function fetchLeagues() {
      try {
        const result = await getLeague({ season: 2024 });
        setLeagues(result.response);
      } catch (err) {
        console.error("Failed to fetch leagues:", err);
      }
    }

    fetchLeagues();
  }, []);

  return <Outlet context={{ leagues }} />;
}
