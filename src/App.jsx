import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";

import Matches from "./pages/Matches";

import Leagues from "./pages/Leagues";

import Players from "./pages/Players";

import Teams from "./pages/Teams";
import MatchInfo from "./components/Matches/MatchInfo/MatchInfo";
import {
  getFixtures,
  getHomeFixtures,
} from "./services/Home/MatchFixtureService";
import { getFeaturedMatches } from "./utils/HomeUtils/HomeUtils";
import { useEffect, useState } from "react";

function App() {
  // const [fixture, setFixture] = useState([]);

  // useEffect(() => {
  //   const fetchFixture = async () => {
  //     const data = await getFixtures({
  //       id: 1528928,
  //     });

  //     setFixture(data);
  //     console.log(data);
  //   };

  //   fetchFixture();
  // }, []);

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
          element: <Matches />,
        },
        {
          path: "leagues",
          element: <Leagues />,
        },
        {
          path: "players",
          element: <Players />,
        },
        {
          path: "teams",
          element: <Teams />,
        },
        // {
        //   path: "transfers",
        //   element: <MatchInfo fixtureData={fixture} />,
        // },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
