const API_KEY = "261986cbb51c934516a9889245136067";

const baseQuery = "/discover/movie?";
const languageURL = "language=ru-RU"

export default {

  // fetchTreding: `/trending/all/week?api_key=${API_KEY}&language=ru-RU`,
  // fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=ru-RU`,
  //
  // fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=ru-RU`,
  // fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=ru-RU`,
  fetchActionMovies: `${baseQuery}api_key=${API_KEY}&with_genres=28&${languageURL}`,
  fetchComedyMovies: `${baseQuery}api_key=${API_KEY}&with_genres=35&${languageURL}`,

  // fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=ru-RU`,
  fetchHorrorMovies: `${baseQuery}api_key=${API_KEY}&with_genres=27&${languageURL}`,
  // fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=ru-RU`,
  fetchRomanceMovies: `${baseQuery}api_key=${API_KEY}&with_genres=10749&${languageURL}`,
  // fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648&language=ru-RU`,
  fetchMystery: `${baseQuery}api_key=${API_KEY}&with_genres=9648&${languageURL}`,
  // fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878&language=ru-RU`,
  fetchSciFi: `${baseQuery}api_key=${API_KEY}&with_genres=878&${languageURL}`,
  // fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37&language=ru-RU`,
  fetchWestern: `${baseQuery}api_key=${API_KEY}&with_genres=37&${languageURL}`,
  // fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16&language=ru-RU`,
  fetchAnimation: `${baseQuery}api_key=${API_KEY}&with_genres=16&${languageURL}`,
  // fetchTV: `/discover/movie?api_key=${API_KEY}&with_genres=10770&language=ru-RU`,
  fetchTV: `${baseQuery}api_key=${API_KEY}&with_genres=10770&${languageURL}`,
}
