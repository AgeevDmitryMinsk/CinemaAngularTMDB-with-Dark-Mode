export const API_KEY = "261986cbb51c934516a9889245136067";

export const baseQuery = "/discover/movie?";
export const languageURL = "language=ru-RU"

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
// https://image.tmdb.org/t/p/original/movie/675353/images  - File Not Found
// https://image.tmdb.org/t/p/original/aEGiJJP91HsKVTEPy1HhmN0wRLm.jpg - ok

//from axios: baseURL: "https://api.themoviedb.org/3"

//https://api.themoviedb.org/3/trending/all/week?api_key=261986cbb51c934516a9889245136067&language=ru-RU  //- OK

// page: 1,
//   results: [
//   {
//     overview: "Продолжение истории величайшего мага Земли доктора Стивена Стрэнджа. С помощью старых и новых мистических союзников Стрэндж отправляется в мультивселенную, чтобы сразиться с новым таинственным противником.",
//     release_date: "2022-05-04",
//     title: "Доктор Стрэндж: В мультивселенной безумия",
//     adult: false,
//     backdrop_path: "/AdyJH8kDm8xT8IKTlgpEC15ny4u.jpg",
//     genre_ids: [
//       14,
//       28,
//       12,
//     ],
//     original_language: "en",
//     original_title: "Doctor Strange in the Multiverse of Madness",
//     poster_path: "/nuK6N5SC4t9bfh2bPSOCdVVKNPM.jpg",
//     vote_count: 1446,
//     video: false,
//     vote_average: 7.5,
//     id: 453395,
//     popularity: 4209.478,
//     media_type: "movie",
//   },
//   {
//     genre_ids: [
//       28,
//       12,
//       18,
//       14,
//     ],
//     id: 639933,
//     original_language: "en",
//     original_title: "The Northman",
//     poster_path: "/aNlKvl91MTLKc5i59SxrxAlXLlT.jpg",
//     title: "Варяг",
//     vote_average: 7.6,
//     overview: "Фильм основан на саге об Амлете из древнескандинавской хроники, записанной Саксоном Грамматиком. Сюжет рассказывает о том, как викинг Фьёльнир убивает своего брата, конунга Хорвендила, и берёт в жёны его супругу Гудрун. Амлет, сын Хорвендила, скрывается и клянётся отомстить убийце отца. Когда Амлет становится старше, он объединяется со славянской ведьмой Ольгой, похищенной викингами, и стремится вернуться домой, чтобы убить Фьёльнира.",
//     release_date: "2022-04-07",
//     vote_count: 685,
//     adult: false,
//     backdrop_path: "/ik9SVGcYxKg6y2a9cW0e0WchImW.jpg",
//     video: false,
//     popularity: 898.495,
//     media_type: "movie",
//   } ....

//https://api.themoviedb.org/3/movie/453395/images?api_key=261986cbb51c934516a9889245136067&language=ru-RU - NOK

// https://api.themoviedb.org/3/discover/movie?id=675353&api_key=261986cbb51c934516a9889245136067&with_genres=28&language=ru-RU - OK


// https://api.themoviedb.org/3/movie/453395/images?api_key=261986cbb51c934516a9889245136067&language=en-US

//GET
// /movie/{movie_id}/external_ids
//https://api.themoviedb.org/3/movie/453395/external_ids?api_key=261986cbb51c934516a9889245136067
  // facebook_id: "DoctorStrangeOfficial",
  //   instagram_id: "doctorstrangeofficial",
  // twitter_id: "DrStrange",

// Get Details
// GET
// /movie/{movie_id}
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

//  https://api.themoviedb.org/3/movie/675353?api_key=261986cbb51c934516a9889245136067&language=ru-RU
  //
  // {
  //   adult: false,
  //     backdrop_path: "/AdyJH8kDm8xT8IKTlgpEC15ny4u.jpg",
  //   belongs_to_collection: {
  //   id: 618529,
  //     name: "Doctor Strange Collection",
  //     poster_path: "/bm7UlW3ctMJAvD6NNXrCDdRyyKn.jpg",
  //     backdrop_path: "/5ZuctJh5uX5L2dz1CjA7WsTJwZk.jpg",
  // },
  //   budget: 200000000,
  //     genres: [
  //   {
  //     id: 14,
  //     name: "Fantasy",
  //   },
  //   {
  //     id: 28,
  //     name: "Action",
  //   },
  //   {
  //     id: 12,
  //     name: "Adventure",
  //   },
  // ],
  //   homepage: "https://www.marvel.com/movies/doctor-strange-in-the-multiverse-of-madness",
  //   id: 453395,
  //   imdb_id: "tt9419884",
  //   original_language: "en",
  //   original_title: "Doctor Strange in the Multiverse of Madness",
  //   overview: "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
  //   popularity: 4209.478,
  //   poster_path: "/wRnbWt44nKjsFPrqSmwYki5vZtF.jpg",
  //   production_companies: [
  //   {
  //     id: 420,
  //     logo_path: "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
  //     name: "Marvel Studios",
  //     origin_country: "US",
  //   }
  // ],
  //   production_countries: [
  //   {
  //     iso_3166_1: "US",
  //     name: "United States of America",
  //   }
  // ],
  //   release_date: "2022-05-04",
  //   revenue: 568000000,
  //   runtime: 126,
  //   spoken_languages: [
  //   {
  //     english_name: "Cantonese",
  //     iso_639_1: "cn",
  //     name: "广州话 / 廣州話",
  //   },
  //   {
  //     english_name: "English",
  //     iso_639_1: "en",
  //     name: "English",
  //   },
  //   {
  //     english_name: "Spanish",
  //     iso_639_1: "es",
  //     name: "Español",
  //   },
  // ],
  //   status: "Released",
  //   tagline: "Enter a new dimension of Strange.",
  //   title: "Doctor Strange in the Multiverse of Madness",
  //   video: false,
  //   vote_average: 7.5,
  //   vote_count: 1482,
  // }

export type genresType = {
  id: number
  name: string
}

export type production_companiesType = {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

export type production_countriesType = {
  iso_3166_1: string
  name: string
}

export type spoken_languagesType = {
  english_name: string
  iso_639_1: string
  name: string
}
export type movieType = {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: {
    id: number
    name: string
    poster_path: string
    backdrop_path: string
  },
  budget: number
  genres: genresType[],
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: number
  production_companies: production_companiesType[],
  production_countries: production_countriesType[],
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: spoken_languagesType[],
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: string
  vote_count: string
}
