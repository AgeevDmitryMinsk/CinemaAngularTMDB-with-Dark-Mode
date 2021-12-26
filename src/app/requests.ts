const API_KEY = "261986cbb51c934516a9889245136067";
const baseURL = "https://api.themoviedb.org/3";
const baseQuery = "/discover/movie?";
const languageURL = "language=ru-RU"

export default {

  fetchTreding: `${baseURL}/trending/all/week?api_key=${API_KEY}&language=ru-RU`,
  // fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=ru-RU`,
  //
  // fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28&language=ru-RU`,

  //`https://api.themoviedb.org/3/discover/movie?api_key=261986cbb51c934516a9889245136067&with_genres=28&language=ru-RU`

  // fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=ru-RU`,

  fetchActionMovies: `${baseURL}${baseQuery}api_key=${API_KEY}&with_genres=28&${languageURL}`,
  fetchComedyMovies: `${baseURL}${baseQuery}api_key=${API_KEY}&with_genres=35&${languageURL}`,

  // fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=ru-RU`,
  fetchHorrorMovies: `${baseURL}${baseQuery}api_key=${API_KEY}&with_genres=27&${languageURL}`,
  // fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=ru-RU`,
  fetchRomanceMovies: `${baseURL}${baseQuery}api_key=${API_KEY}&with_genres=10749&${languageURL}`,
  // fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648&language=ru-RU`,
  fetchMystery: `${baseURL}${baseQuery}api_key=${API_KEY}&with_genres=9648&${languageURL}`,
  // fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878&language=ru-RU`,
  fetchSciFi: `${baseURL}${baseQuery}api_key=${API_KEY}&with_genres=878&${languageURL}`,
  // fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37&language=ru-RU`,
  fetchWestern: `${baseURL}${baseQuery}api_key=${API_KEY}&with_genres=37&${languageURL}`,
  // fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16&language=ru-RU`,
  fetchAnimation: `${baseURL}${baseQuery}api_key=${API_KEY}&with_genres=16&${languageURL}`,
  // fetchTV: `/discover/movie?api_key=${API_KEY}&with_genres=10770&language=ru-RU`,
  fetchTV: `${baseURL}${baseQuery}api_key=${API_KEY}&with_genres=10770&${languageURL}`,
}
