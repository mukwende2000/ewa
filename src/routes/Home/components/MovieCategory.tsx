import { Link } from "react-router-dom";
import MovieItem from "./MovieItem";
import { useQuery } from "@tanstack/react-query";
import { getData } from "../../../services/getData";
import { MovieType, SeriesDetailsType } from "../../../utils/types";

type Props = {
  isTvSeries?: boolean;
  categoryName: string;
  endPoint: string;
};

function MovieCategory({ endPoint, isTvSeries, categoryName }: Props) {
  const movieQuery = useQuery({
    queryKey: ["movies", endPoint],
    queryFn: () => getData(endPoint),
  });
  const movies = movieQuery.data?.data?.results?.slice(0, 6);

  return (
    <div className="first:mt-9 mt-20">
      <div className="flex justify-between my-5">
        <p className="flex items-center gap-3">
          <span className="text-3xl">{categoryName}</span>
          <span className="text-[10px] font-bold border px-3 tracking-widest rounded">
            {isTvSeries ? "SERIES" : "MOVIE"}
          </span>
        </p>
        <Link to="" className="text-sm">
          SEE MORE
        </Link>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {movies?.map((movie: MovieType | SeriesDetailsType, index: number) => {
          let title;
          let year;
          if ("title" in movie && "release_date" in movie) {
            title = movie.title;
            year = movie.release_date.slice(0, 4);
          } else {
            title = movie.name;
            year = movie.first_air_date.slice(0, 4);
          }
          return (
            <MovieItem
              key={movie.id}
              pathname={isTvSeries ? `/show/${movie.id}` : `/movie/${movie.id}`}
              path={movie.backdrop_path || movie.poster_path}
              movieTitle={title}
              isTvSeries={isTvSeries}
              year={year}
              styles={
                index === 4
                  ? "lg:col-start-1 lg:col-end-3"
                  : index === 5
                  ? "lg:col-start-3 lg:col-end-5"
                  : undefined
              }
            />
          );
        })}
      </ul>
    </div>
  );
}

export default MovieCategory;
