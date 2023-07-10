export interface Genre {
  id: number;
  name: string;
}
export interface MovieType {
  adult: boolean;
  backdrop_path: string;
  genre_ids?: number[];
  genres?: Genre[];
  id: number;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Company {
  id: number;
  name: string;
  origin_country: string;
  logo_path: string;
}

export interface MovieDetailsType extends MovieType {
  belongs_to_collection: any;
  budget: number;
  homepage: string;
  imdb_id: string;
  original_language: string;
  production_companies: Company[];
  production_countries: { iso_3166_1: string; name: string }[];
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
}

export interface SeriesDetailsType {
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_name: string;
  original_language: string;
  original_country: string[];
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
  homepage: string;
  tagline: string;
}

export interface CastItemType {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}
