import axios from "axios";
import MovieItem from "../Home/components/MovieItem";
import { API_KEY } from "../../services/requests";
import { useLoaderData } from "react-router-dom";
import Container from "../../components/Container";

function index() {
  const { data } = useLoaderData() as any;
  const series = data.results;
  return (
    <Container>
      <ul className="px-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {series.map((show: any) => {
          return (
            <MovieItem
              key={show.id}
              id={show.id}
              path={show.backdrop_path}
              movieTitle={show.name}
              year={show.first_air_date.slice(0, 3)}
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
    `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=${id}`
  );
  return data;
}

export default index;
