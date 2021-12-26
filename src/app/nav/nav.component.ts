import {Component, Injectable, OnInit} from '@angular/core';
// import axios from '../axious';
import requests from '../requests';
import {GenreService} from "../genre.service";
import {HttpClient} from "@angular/common/http";

export interface FilmsData {
  page?:number,
  results?: object,
  adult?: boolean,
  backdrop_path?: string,
  genre_ids?: object,
  id?: number,
  original_language?: string,
  original_title?: string,
  overview?: string,
  popularity?: number,
  poster_path?: string,
  release_date?: string,
  title?: string,
  video?: boolean,
  vote_average?: number,
  vote_count?: number
}
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
@Injectable({providedIn: "root"})
export class NavComponent implements OnInit {

  filmsData: FilmsData[] = [];


  constructor(
    private http: HttpClient,
    public genreService: GenreService) {}
  movies: any[] = [
  ];



  async fetchDataAgain(text: string) {
    console.log(text);


    if (text == "Action") {
      // const request = this.http.get<FilmsData[]>(`https://api.themoviedb.org/3/discover/movie?api_key=261986cbb51c934516a9889245136067&with_genres=28&language=ru-RU)
      const request = this.http.get<FilmsData[]>(requests.fetchActionMovies)
        .subscribe(response => {
          //console.log(`Response`, response)
          this.filmsData = response
          console.log(`Action filmsData`, this.filmsData.results);
          this.movies = this.filmsData.results;
        })

    }if (text == "Comedy") {

      // const request = this.http.get<FilmsData[]>(`https://api.themoviedb.org/3/discover/movie?api_key=261986cbb51c934516a9889245136067&with_genres=35&language=ru-RU`)
      const request = this.http.get<FilmsData[]>(requests.fetchComedyMovies)
        .subscribe(response => {
          //console.log(`Response`, response)
          this.filmsData = response
          console.log(`Comedy filmsData`, this.filmsData.results);
          this.movies = this.filmsData.results;
        })
    }

    if (text == "Horror") {

      const request = this.http.get<FilmsData[]>(requests.fetchHorrorMovies)
        .subscribe(response => {
          //console.log(`Response`, response)
          this.filmsData = response
          console.log(`Horror filmsData`, this.filmsData.results);
          this.movies = this.filmsData.results;
        })
    }
    if (text == "Romance") {
      // const request = this.http.get<FilmsData[]>(`https://api.themoviedb.org/3/discover/movie?api_key=261986cbb51c934516a9889245136067&with_genres=10749&language=ru-RU`)
      const request = this.http.get<FilmsData[]>(requests.fetchRomanceMovies)
        .subscribe(response => {
          //console.log(`Response`, response)
          this.filmsData = response
          console.log(`Romance filmsData`, this.filmsData.results);
          this.movies = this.filmsData.results;
        })

    }
      if (text == "Mystery") {

        // const request = this.http.get<FilmsData[]>(`https://api.themoviedb.org/3/discover/movie?api_key=261986cbb51c934516a9889245136067&with_genres=9648&language=ru-RU`)
        const request = this.http.get<FilmsData[]>(requests.fetchMystery)
          .subscribe(response => {
            //console.log(`Response`, response)
            this.filmsData = response
            console.log(`Mystery filmsData`, this.filmsData.results);
            this.movies = this.filmsData.results;
          })
    }
    if (text == "Sci-Fi") {

      // const request = this.http.get<FilmsData[]>(`https://api.themoviedb.org/3/discover/movie?api_key=261986cbb51c934516a9889245136067&with_genres=878&language=ru-RU`)
      const request = this.http.get<FilmsData[]>(requests.fetchSciFi)
        .subscribe(response => {
          //console.log(`Response`, response)
          this.filmsData = response
          console.log(`Sci-Fi filmsData`, this.filmsData.results);
          this.movies = this.filmsData.results;
        })
    }
    if (text == "Western") {

       // const request = this.http.get<FilmsData[]>(`https://api.themoviedb.org/3/discover/movie?api_key=261986cbb51c934516a9889245136067&with_genres=37&language=ru-RU`)
       const request = this.http.get<FilmsData[]>(requests.fetchWestern)
        .subscribe(response => {
          //console.log(`Response`, response)
          this.filmsData = response
          console.log(`Western filmsData`, this.filmsData.results);
          this.movies = this.filmsData.results;
        })


    }
    if (text == "Animation") {
      // const request = this.http.get<FilmsData[]>(`https://api.themoviedb.org/3/discover/movie?api_key=261986cbb51c934516a9889245136067&with_genres=16&language=ru-RU`)
      const request = this.http.get<FilmsData[]>(requests.fetchAnimation)
        .subscribe(response => {
          //console.log(`Response`, response)
          this.filmsData = response
          console.log(`Animation filmsData`, this.filmsData.results);
          this.movies = this.filmsData.results;
        })

    }if (text == "TV") {
      // const request = this.http.get<FilmsData[]>(`https://api.themoviedb.org/3/discover/movie?api_key=261986cbb51c934516a9889245136067&with_genres=10770&language=ru-RU`)
      const request = this.http.get<FilmsData[]>(requests.fetchTV)
        .subscribe(response => {
          //console.log(`Response`, response)
          this.filmsData = response
          console.log(`TV filmsData`, this.filmsData.results);
          this.movies = this.filmsData.results;
        })
    }
  }

  async fetchData() {

    const request = this.http.get<FilmsData[]>(requests.fetchTreding)
      .subscribe(response => {
        //console.log(`Response`, response)
        this.filmsData = response
        console.log(`fetchData Treding filmsData`, this.filmsData.results);
        this.movies = this.filmsData.results;
      })

    return request;

  }
  ngOnInit(): void {
    this.fetchData();
  }

  getById(id: number) {
    return this.movies.find( (p: any) => p.id === id)
  }

}

