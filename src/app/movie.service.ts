// import { Injectable } from '@angular/core';
// import {HttpClient} from "@angular/common/http";
// import {Observable} from "rxjs";
//
// import requests from "./requests";
//
// export interface FilmsData {
//   page?:number,
//   results?: object,
//   adult?: boolean,
//   backdrop_path?: string,
//   genre_ids?: object,
//   id?: number,
//   original_language?: string,
//   original_title?: string,
//   overview?: string,
//   popularity?: number,
//   poster_path?: string,
//   release_date?: string,
//   title?: string,
//   video?: boolean,
//   vote_average?: number,
//   vote_count?: number
// }
//
// @Injectable({
//   providedIn: 'root'
// })
// export class MovieService {
//
//   filmsData: FilmsData[] = [];
//   baseUrl: string;
//   apiKey: string;
//
//   constructor(private http: HttpClient) {
//     this.baseUrl = 'https://api.themoviedb.org/3/';
//     this.apiKey = '261986cbb51c934516a9889245136067';
//   }
//
//
//   movies: any[] = [];
//
//   load() : Observable<any>  {
//     return  this.http.get<FilmsData[]>(requests.fetchTreding)
//   }
//
//   getById(id: number) {
//     console.log(`hello from getById`)
//     console.log(this.movies?.find( (x: any) => x.id === id))
//     return this.movies.find( (x: any) => x.id === id)
//   }
//
//   getMovie(id: string): Observable<any> {
//     return this.http.get(`${this.baseUrl}movie/${id}?api_key=${this.apiKey}&language=ru-RU`)
//   }
//
//   // getMovie(id: string): Observable<any> {
//   //   return this.http.get(`${this.baseUrl}movie/${id}?api_key=${this.apiKey}`)
//   // }
//
// }
