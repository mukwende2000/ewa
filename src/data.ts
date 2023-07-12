import requests from "./services/requests";

interface Genre {
  name: string;
  id: string;
}

const movies: Genre[] = [
  { name: "Action", id: "28" },
  { name: "Adventure", id: "12" },
  { name: "Animation", id: "16" },
  { name: "Comedy", id: "35" },
  { name: "Crime", id: "80" },
  { name: "Documentary", id: "99" },
  { name: "Drama", id: "18" },
  { name: "Family", id: "10751" },
  { name: "Fantasy", id: "14" },
  { name: "History", id: "36" },
  { name: "Horror", id: "27" },
  { name: "Music", id: "10402" },
  { name: "Mystery", id: "9648" },
  { name: "Romance", id: "10749" },
  { name: "Science Fiction", id: "878" },
  { name: "Tv Movie", id: "10770" },
  { name: "Thriller", id: "53" },
  { name: "War", id: "10752" },
  { name: "Western", id: "37" },
];

const series: Genre[] = [
  { name: "Action & Adventure", id: "10759" },
  { name: "Animation", id: "16" },
  { name: "Comedy", id: "35" },
  { name: "Crime", id: "80" },
  { name: "Documentary", id: "99" },
  { name: "Drama", id: "18" },
  { name: "Family", id: "10751" },
  { name: "Kids", id: "10762" },
  { name: "Mystery", id: "9648" },
  { name: "News", id: "10763" },
  { name: "Reality", id: "10764" },
  { name: "Sci-Fi & Fantasy", id: "10765" },
  { name: "Soap", id: "10766" },
  { name: "Talk", id: "10767" },
  { name: "war & Politics", id: "10767" },
  { name: "Western", id: "37" },
];

interface Category {
  request: string;
  categoryName: string;
  id: number;
}
const categories: Category[] = [
  {
    request: requests.movies.fetchPopular,
    categoryName: "Trending",
    id: 1,
  },
  {
    request: requests.movies.fetchTopRated,
    categoryName: "Top Rated",
    id: 2,
  },
  {
    request: requests.movies.fetchNowPlaying,
    categoryName: "Now Playing",
    id: 3,
  },
  {
    request: `${requests.series.fetchPopular}`,
    categoryName: "Trending",
    id: 4,
  },
];

export { series, movies, categories };
