import axios from "axios";
import MovieItem from "../Home/components/MovieItem";
import { API_KEY } from "../../services/requests";
import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Pagination from "../../components/Pagination";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

function index() {
  const [page, setPage] = useState(1);
  const param = useParams();

  function fetchNextPage(page: number) {
    const data = axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=${param.id}&page=${page}`
    );
    return data;
  }

  const { isLoading, isError, data } = useQuery({
    queryKey: ["movies", { page }],
    keepPreviousData: true,
    queryFn: () => fetchNextPage(page),
  });
  const series = data?.data?.results;

  return (
    <Container>
      <ul className="px-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {series?.map((show: any) => {
          return (
            <MovieItem
              key={show.id}
              pathname={`/show/${show.id}`}
              path={show.backdrop_path}
              movieTitle={show.name}
              year={show?.first_air_date?.slice(0, 3)}
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
