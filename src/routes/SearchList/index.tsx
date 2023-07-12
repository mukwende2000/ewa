import axios from "axios";
import MovieItem from "../Home/components/MovieItem";
import { API_KEY } from "../../services/requests";
import { useLoaderData, useParams } from "react-router-dom";
import Container from "../../components/Container";
import Pagination from "../../components/Pagination";
import Footer from "../../components/Footer";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

function index() {
  const [page, setPage] = useState(1);
  const param = useParams();

  function fetchNextPage(page: number) {
    const data = axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${param.id}&page=${page}`
    );
    return data;
  }

  const { isLoading, isError, data } = useQuery({
    queryKey: ["movies", { page }],
    keepPreviousData: true,
    queryFn: () => fetchNextPage(page),
  });
  const results = data?.data?.results;
  return (
    <Container>
      <p className="text-white font-bold text-xl ml-5 my-3">
        Showing {page * 20 - 20 + 1} - {page * results?.length} of{" "}
        {data?.data?.total_results} results
      </p>
      <ul className="px-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {results?.map((movie: any) => {
          return (
            <MovieItem
              key={movie.id}
              pathname={`/movie/${movie.id}`}
              path={movie.backdrop_path || movie.poster_path}
              movieTitle={movie.title}
              year={movie.release_date?.slice(0, 3)}
            />
          );
        })}
      </ul>
      <Pagination
        setPage={setPage}
        page={page}
        totalPages={data?.data?.total_pages}
      />
      <Footer />
    </Container>
  );
}
export default index;
