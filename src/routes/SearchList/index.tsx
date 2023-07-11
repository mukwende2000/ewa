import axios from "axios";
import MovieItem from "../Home/components/MovieItem";
import { API_KEY } from "../../services/requests";
import { useLoaderData } from "react-router-dom";
import Container from "../../components/Container";

function index() {
  const { data } = useLoaderData() as any;
  const movies = data.results;
  return (
    <Container>
      <p>Showing 1 - 20 of 1000 results</p>
      <ul className="px-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {movies.map((movie: any) => {
          return (
            <MovieItem
              key={movie.id}
              pathname={`/movie/${movie.id}`}
              path={movie.backdrop_path || movie.poster_path}
              movieTitle={movie.title}
              year={movie.release_date.slice(0, 3)}
            />
          );
        })}
      </ul>
    </Container>
  );
}

export async function loader({ params }: any) {
  const { id } = params;
  const data = axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${id}`
  );
  return data;
}

export default index;
