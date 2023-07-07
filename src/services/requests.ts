export const API_KEY = "f5726e1123dbd2b96c0a066a3dc8c673";

const requests = {
  movies: {
    fetchAction: `/discover/movie?api_key=${API_KEY}&with_genre=28`,
    fetchAdventure: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
    fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genre=16`,
    fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genre=35`,
    fetchCrime: `/discover/movie?api_key=${API_KEY}&with_genre=80`,
    fetchDocumentary: `/discover/movie?api_key=${API_KEY}&with_genre=99`,
    fetchDrama: `/discover/movie?api_key=${API_KEY}&with_genre=18`,
    fetchFamily: `/discover/movie?api_key=${API_KEY}&with_genre=10751`,
    fetchFantasy: `/discover/movie?api_key=${API_KEY}&with_genre=14`,
    fetchHistory: `/discover/movie?api_key=${API_KEY}&with_genre=36`,
    fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genre=27`,
    fetchMusic: `/discover/movie?api_key=${API_KEY}&with_genre=10402`,
    fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genre=9648`,
    fetchRomance: `/discover/movie?api_key=${API_KEY}&with_genre=10749`,
    fetchSceinceFiction: `/discover/movie?api_key=${API_KEY}&with_genre=878`,
    fetchTvMovie: `/discover/movie?api_key=${API_KEY}&with_genre=10770`,
    fetchThriller: `/discover/movie?api_key=${API_KEY}&with_genre=53`,
    fetchWar: `/discover/movie?api_key=${API_KEY}&with_genre=10752`,
    fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genre=37`,
    fetchTrending: `/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&per_page=6&sort_by=trending.desc`,
    fetchPopular: `/discover/movie?api_key=${API_KEY}&include_adult=false&language=en-US&page=1&per_page=6&sort_by=popularity.desc`,
    fetchNowPlaying: `/discover/movie?api_key=${API_KEY}&include_adult=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3$release_date.gte={min_date}&release_date.let={max_date}`,
    fetchUpcoming: `/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}`,
    fetchTopRated: `/discover/movie?api_key=${API_KEY}&include_adult=false&language=en-US&page=1&sort_by=vote_average.desc&without_genre=99,10755&vote_count.gte=200`,
  },

  series: {
    fetchActionandAdventure: `//discover/tv/api_key=${API_KEY}&with_genre=10759`,
    fetchAnimation: `//discover/tv/api_key=${API_KEY}&with_genre=16`,
    fetchComedy: `/discover/tv/api_key=${API_KEY}&with_genre=35`,
    fetchCrime: `/discover/tv?api_key=${API_KEY}&with_genre=80`,
    fetchDocumentary: `/discover/tv?api_key=${API_KEY}&with_genre=99`,
    fetchDrama: `/discover/tv?api_key=${API_KEY}&with_genre=18`,
    fetchFamily: `/discover/tv?api_key=${API_KEY}&with_genre=10751`,
    fetchWestern: `/discover/tv?api_key=${API_KEY}&with_genre=37`,
    fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genre=9648`,
    fetchKids: `/discover/movie?api_key=${API_KEY}&with_genre=10762`,
    fetchNews: `/discover/movie?api_key=${API_KEY}&with_genre=10763`,
    fetchReality: `/discover/movie?api_key=${API_KEY}&with_genre=10764`,
    fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genre=10765`,
    fetchSoap: `/discover/movie?api_key=${API_KEY}&with_genre=10766`,
    fetchTalk: `/discover/movie?api_key=${API_KEY}&with_genre=10767`,
    fetchWarandPolitics: `/discover/movie?api_key=${API_KEY}&with_genre=10768`,
    fetchTrending: `/discover/tv?api_key=${API_KEY}&include_adult=false&language=en-US&page=1&sort_by=trending.desc`,
    fetchPopular: `/discover/tv?api_key=${API_KEY}&include_adult=false&language=en-US&page=1&sort_by=popularity.desc`,
    fetchNowPlaying: `/discover/tv?api_key=${API_KEY}&include_adult=false&language=en-US&page=1&sort_by=now_playing.desc`,
    fetchUpcoming: `/discover/tv?api_key=${API_KEY}&include_adult=false&language=en-US&page=1&sort_by=upcoming.desc`,
    fetchTopRated: `/discover/tv?api_key=${API_KEY}&include_adult=false&language=en-US&page=1&sort_by=top_rated.desc`,
  },
};

export default requests;

//movie Details
//https://api.themoviedb.org/3/movie/385687?api_key=f5726e1123dbd2b96c0a066a3dc8c673&language=en-US

//Casts
//https://api.themoviedb.org/3/movie/385687/credits?api_key=f5726e1123dbd2b96c0a066a3dc8c673
