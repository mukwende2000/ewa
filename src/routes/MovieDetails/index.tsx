import axios from "axios";
import Container from "../../components/Container";
import { FaImdb, FaLink } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { imageUrl } from "../Home/components/MovieItem";
import { API_KEY } from "../../services/requests";
import { CastItemType, Genre, MovieDetailsType } from "../../utils/types";

function index() {
  const data = useLoaderData() as [MovieDetailsType, CastItemType[]];
  const [movie, cast] = data;

  console.log(movie);
  console.log(cast);
  return (
    <main className="text-white">
      <Container styles="md:flex gap-10 px-10">
        <div className="basis-full grid md:block place-items-center">
          <img src={`${imageUrl}${movie?.poster_path}`} alt={movie?.title} />
        </div>
        <div className="basis-full">
          <h1 className="text-5xl text-center md:text-left">{movie?.title}</h1>
          <p className="text-gray-500 my-3 text-center md:text-left">
            {movie?.tagline}
          </p>

          <div>
            <h2 className="font-bold mb-2">Genre</h2>
            <div className="flex gap-3">
              {movie?.genres?.map((genre: Genre) => {
                return (
                  <p
                    key={genre.id}
                    className="bg-white text-black rounded px-1 text-xs md:text-sm"
                  >
                    {genre.name}
                  </p>
                );
              })}
            </div>
            <div className="my-5">
              <h2 className="font-bold">Synopsis</h2>
              <p>{movie?.overview}</p>
            </div>
            <div>
              <h2 className="font-bold mb-3">Cast</h2>
              <div className="flex flex-wrap gap-3">
                {cast?.map((CastItemType: CastItemType) => {
                  return (
                    <span
                      key={CastItemType.id}
                      className="p-1 text-xs rounded border"
                    >
                      {CastItemType.name}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="my-5 flex gap-5">
              <a
                href={movie?.homepage}
                target="_blank"
                className="flex gap-5 items-center rounded bg-slate-500 py-2 px-5"
              >
                <span>Website</span>
                <FaLink />
              </a>
              <button className="flex items-center gap-5 rounded bg-slate-500 px-5">
                <span>IMDB</span>
                <FaImdb />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

type LoaderParams = {
  params: { id: number };
};

export async function loader({ params }: any): Promise<any> {
  const { id } = params;
  const data: [MovieDetailsType, CastItemType][] = [];
  await axios
    .all([
      axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US
         `
      ),
      axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
      ),
    ])
    .then(
      axios.spread((movie, cast) => {
        data.push(movie.data);
        data.push(cast.data.cast);
      })
    );
  return data;
}

export default index;
