const API_KEY = "261986cbb51c934516a9889245136067";

const baseQuery = "/discover/movie?";
const languageURL = "language=ru-RU"

export default {

  //fetchTreding: `/trending/all/week?api_key=${API_KEY}&language=ru-RU`,
  // fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=ru-RU`,
  //
  // fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=ru-RU`,
  // fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=ru-RU`,
  fetchActionMovies: `${baseQuery}api_key=${API_KEY}&with_genres=28&${languageURL}`,
  fetchComedyMovies: `${baseQuery}api_key=${API_KEY}&with_genres=35&${languageURL}`,

  // fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=ru-RU`,
  // fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=ru-RU`,
  // fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648&language=ru-RU`,
  // fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878&language=ru-RU`,
  // fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37&language=ru-RU`,
  // fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16&language=ru-RU`,
  // fetchTV: `/discover/movie?api_key=${API_KEY}&with_genres=10770&language=ru-RU`,
}
