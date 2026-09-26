import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";

import Matches from "./pages/Matches";

import Leagues from "./pages/Leagues";

import Players from "./pages/Players";

import Teams from "./pages/Teams";
import TeamInfo from "./components/Teams/TeamInfo/TeamInfo";
import { useEffect , useState } from "react";
import { getTeams } from "./services/Players/TeamPlayersService";

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
