import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Matches from "./pages/Matches";
import Leagues from "./pages/Leagues";

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
        element: <Leagues />
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
