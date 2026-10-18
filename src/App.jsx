import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";

import Matches from "./pages/Matches";

import Players from "./pages/Players";

import Teams from "./pages/Teams";
import MainMatches from "./components/Matches/MainMatches";
import LeaguesContainer from "./components/Leagues/LeaguesContainer.";
import LeagueDetailPage from "./components/Leagues/LeagueDetialPage";
import PlayersSharedContainer from "./components/Players/PlayersSharedContainer";
import TeamsSharedContainer from "./components/Teams/TeamsSharedContainer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "matches",
          children: [
            {
              index: true,
              element: <Matches />,
            },
            {
              path: ":matchId",
              element: <MainMatches />,
            },
          ],
        },
        {
          path: "leagues",
          element: <LeagueDetailPage />,
          children: [
            {
              index: true,
              element: <LeaguesContainer />,
            },
            {
              path: ":leagueId",
              element: <LeaguesContainer />,
            },
          ],
        },
        {
          path: "players",
          children: [
            {
              index: true,
              element: <Players />,
            },
            {
              path: ":playerLinkId",
              element: <PlayersSharedContainer />,
            },
          ],
        },
        {
          path: "teams",
          children: [
            {
              index: true,
              element: <Teams />,
            },
            {
              path: ":teamId/:leagueId",
              element: <TeamsSharedContainer />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
