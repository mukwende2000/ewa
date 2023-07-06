import Container from "../../components/Container";
import requests from "../../services/requests";
import MovieCategory from "./components/MovieCategory";

const categories = [
  {
    request: requests.movies.fetchPopular,
    categoryName: "Trending",
  },
  {
    request: requests.movies.fetchTopRated,
    categoryName: "Top Rated",
  },
  {
    request: requests.movies.fetchNowPlaying,
    categoryName: "Now Playing",
  },
  {
    request: `${requests.series.fetchPopular}`,
    categoryName: "Trending",
  },
];

function index() {
  return (
    <Container>
      <div className="text-white">
        {categories.map((category, index) => {
          return (
            <MovieCategory
              isTvSeries={index > 2}
              endPoint={category.request}
              categoryName={category.categoryName}
            />
          );
        })}
      </div>
    </Container>
  );
}

export default index;
