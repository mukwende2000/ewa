import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./routes/Home";
import Movies from "./routes/Movies";
import Series from "./routes/Series";
import MovieDetails from "./routes/MovieDetails";

function App() {
  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      path: "/",
      children: [
        {
          element: <Home />,
          path: "/",
        },
        {
          element: <Movies />,
          path: "/movies",
        },
        {
          element: <Series />,
          path: "/series",
        },
        {
          element: <MovieDetails />,
          path: "movies/:id",
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
