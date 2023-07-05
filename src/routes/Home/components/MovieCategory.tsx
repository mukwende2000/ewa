import { Link } from "react-router-dom";
import MovieItem from "./MovieItem";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import requests from "../../../services/requests";
import { getData } from "../../../services/getData";
import { useEffect, useState } from "react";

type Props = {
  isTvSeries?: boolean;
  categoryName: string;
  request: string;
};

function MovieCategory({ request, isTvSeries, categoryName }: Props) {
  const [movies, setMovies] = useState<any>();
  //   const movieQuery = useQuery({
  //     queryKey: ["movies"],
  //     queryFn: () => getData(request),
  //   });
  //   const movies = movieQuery.data?.data?.results?.slice(0, 6);
  //   console.log(request);
  useEffect(() => {
    async function getData(endPoint: string): Promise<any> {
      const request = await axios.get(
        `https://api.themoviedb.org/3${endPoint}`
      );
      setMovies(request.data.results.slice(0, 6));
      return request;
    }

    getData(request);
  });
  return (
    <div className="first:mt-9 mt-20">
      <div className="flex justify-between my-5">
        <p className="flex items-center gap-3">
          <span className="text-3xl">{categoryName}</span>
          <span className="text-[10px] font-bold border px-3 tracking-widest rounded">
            {isTvSeries ? "SERIES" : "MOVIE"}
          </span>
        </p>
        <Link to="">see more</Link>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {movies?.map((movie: any, index: any) => {
          return (
            <MovieItem
              key={movie.id}
              id={movie.id}
              path={movie.backdrop_path || movie.poster_path}
              movieTitle={movie.title || movie.name}
              year={
                movie.release_date?.slice(0, 4) ||
                movie.first_air_date?.slice(0, 4)
              }
              isTvSeries={isTvSeries}
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
