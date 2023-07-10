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
      <ul className="px-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {movies.map((movie: any) => {
          return (
            <MovieItem
              key={movie.id}
              pathname={`/movie/${movie.id}`}
              path={movie.backdrop_path}
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
  console.log(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genre=${id}`
  );
  const data = axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${id}`
  );
  return data;
}

export default index;
