import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./routes/Home";
import Movies from "./routes/Movies";
import Series from "./routes/Series";
import MovieList, { loader as MovieLoader } from "./routes/MovieList";
import SeriesList, { loader as SeriesLoader } from "./routes/SeriesList";
import MovieDetails, {
  loader as movieDetailsLoader,
} from "./routes/MovieDetails";

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
          path: "/movie/:id",
          loader: movieDetailsLoader,
        },
        {
          element: <MovieList />,
          path: "movies/:id",
          loader: MovieLoader,
        },
        {
          element: <SeriesList />,
          path: "series/:id",
          loader: SeriesLoader,
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
