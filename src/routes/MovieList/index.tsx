import axios from "axios";
import MovieItem from "../Home/components/MovieItem";
import { API_KEY } from "../../services/requests";
import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Pagination from "../../components/Pagination";
import Footer from "../../components/Footer";

function index() {
  const [page, setPage] = useState(1);
  const param = useParams();

  function fetchNextPage(page: number) {
    const data = axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${param.id}&page=${page}`
    );
    return data;
  }

  const { isLoading, isError, data } = useQuery({
    queryKey: ["movies", { page }],
    keepPreviousData: true,
    queryFn: () => fetchNextPage(page),
  });
  const movies = data?.data?.results;

  return (
    <Container styles="pb-5">
      <ul className="px-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {movies?.map((movie: any) => {
          return (
            <MovieItem
              key={movie.id}
              pathname={`/movie/${movie.id}`}
              path={movie.backdrop_path}
              movieTitle={movie.title}
              year={movie.release_date?.slice(0, 3)}
            />
          );
        })}
      </ul>
      <Pagination
        page={page}
        setPage={setPage}
        totalPages={data?.data?.total_pages}
      />
      <Footer />
    </Container>
  );
}

export default index;
