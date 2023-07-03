const API_KEY = 'f5726e1123dbd2b96c0a066a3dc8c673'

const requests = {
    movies: {

        fetchAction: `discover/movie?api_key${API_KEY}&with_genre=28`,
        fetchAdventure: `discover/movie?api_key${API_KEY}&with_genre=12`,
        fetchAnimation: `discover/movie?api_key${API_KEY}&with_genre=16`,
        fetchComedy: `discover/movie?api_key${API_KEY}&with_genre=35`,
        fetchCrime: `discover/movie?api_key${API_KEY}&with_genre=80`,
        fetchDocumentary: `discover/movie?api_key${API_KEY}&with_genre=99`,
        fetchDrama: `discover/movie?api_key${API_KEY}&with_genre=18`,
        fetchFamily: `discover/movie?api_key${API_KEY}&with_genre=10751`,
        fetchFantasy: `discover/movie?api_key${API_KEY}&with_genre=14`,
        fetchHistory: `discover/movie?api_key${API_KEY}&with_genre=36`,
        fetchHorror: `discover/movie?api_key${API_KEY}&with_genre=27`,
        fetchMusic: `discover/movie?api_key${API_KEY}&with_genre=10402`,
        fetchMystery: `discover/movie?api_key${API_KEY}&with_genre=9648`,
        fetchRomance: `discover/movie?api_key${API_KEY}&with_genre=10749`,
        fetchSceinceFiction: `discover/movie?api_key${API_KEY}&with_genre=878`,
        fetchTvMovie: `discover/movie?api_key${API_KEY}&with_genre=10770`,
        fetchThriller: `discover/movie?api_key${API_KEY}&with_genre=53`,
        fetchWar: `discover/movie?api_key${API_KEY}&with_genre=10752`,
        fetchWestern: `discover/movie?api_key${API_KEY}&with_genre=37`,
        fetchTrending: `discover/movie?api_key${API_KEY}&include_adult=false&language=en-US&page=1&sort_by=trending.desc`,
        fetchPopular: `discover/movie?api_key${API_KEY}&include_adult=false&language=en-US&page=1&sort_by=popular.desc`,
        fetchNowPlaying: `discover/movie?api_key${API_KEY}&include_adult=false&language=en-US&page=1&sort_by=now_playing.desc`,
        fetchUpcoming: `discover/movie?api_key${API_KEY}&include_adult=false&language=en-US&page=1&sort_by=upcoming.desc`,
        fetchTopRated: `discover/movie?api_key${API_KEY}&include_adult=false&language=en-US&page=1&sort_by=top_rated.desc`,
    },
    
    series: {
        fetchActionandAdventure: `discover/tv/api_key${API_KEY}&with_genre=10759`,
        fetchAnimation: `discover/tv/api_key${API_KEY}&with_genre=16`,
        fetchComedy: `discover/tv/api_key${API_KEY}&with_genre=35`,
        fetchCrime: `discover/tv?api_key${API_KEY}&with_genre=80`,
        fetchDocumentary: `discover/tv?api_key${API_KEY}&with_genre=99`,
        fetchDrama: `discover/tv?api_key${API_KEY}&with_genre=18`,
        fetchFamily: `discover/tv?api_key${API_KEY}&with_genre=10751`,
        fetchWestern: `discover/tv?api_key${API_KEY}&with_genre=37`,
        fetchMystery: `discover/movie?api_key${API_KEY}&with_genre=9648`,
        fetchKids: `discover/movie?api_key${API_KEY}&with_genre=10762`,
        fetchNews: `discover/movie?api_key${API_KEY}&with_genre=10763`,
        fetchReality: `discover/movie?api_key${API_KEY}&with_genre=10764`,
        fetchSciFi: `discover/movie?api_key${API_KEY}&with_genre=10765`,
        fetchSoap: `discover/movie?api_key${API_KEY}&with_genre=10766`,
        fetchTalk: `discover/movie?api_key${API_KEY}&with_genre=10767`,
        fetchWarandPolitics: `discover/movie?api_key${API_KEY}&with_genre=10768`,
        fetchTrending: `discover/tv?api_key${API_KEY}&include_adult=false&language=en-US&page=1&sort_by=trending.desc`,
        fetchPopular: `discover/tv?api_key${API_KEY}&include_adult=false&language=en-US&page=1&sort_by=popular.desc`,
        fetchNowPlaying: `discover/tv?api_key${API_KEY}&include_adult=false&language=en-US&page=1&sort_by=now_playing.desc`,
        fetchUpcoming: `discover/tv?api_key${API_KEY}&include_adult=false&language=en-US&page=1&sort_by=upcoming.desc`,
        fetchTopRated: `discover/tv?api_key${API_KEY}&include_adult=false&language=en-US&page=1&sort_by=top_rated.desc`,
    }
}

export default requests

// MOVIE
// Action            28
// Adventure     12
// Animation     16
// Comedy            35
// Crime         80
// Documentary       99
// Drama         18
// Family            10751
// Fantasy           14
// History           36
// Horror            27
// Music         10402
// Mystery           9648
// Romance           10749
// Science Fiction   878
// TV Movie      10770
// Thriller      53
// War               10752
// Western           37


// TV SHOW
// Action & Adventure    10759
// Animation         16
// Comedy                35
// Crime             80
// Documentary           99
// Drama             18
// Family                10751
// Kids              10762
// Mystery               9648
// News              10763
// Reality               10764
// Sci-Fi & Fantasy  10765
// Soap              10766
// Talk              10767
// War & Politics        10768
// Western               37