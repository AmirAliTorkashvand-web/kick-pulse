import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Matches from "./pages/Matches";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
