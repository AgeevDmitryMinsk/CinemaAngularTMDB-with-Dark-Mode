import {Component, Input, OnInit} from '@angular/core';
import 'axios';
import instance from "../axious";
import axios from "axios";
import requests, {API_KEY, languageURL, movieType} from "../requests";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})


export class ResultsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router  ) {}


  @Input() movies:any;


  ngOnInit(): void {
  }

  async selectCard(id: any) {
    // this.movies = this.movies.filter((movies: any)=> movies.id == id)
    console.log(id)
    //const instance = axios.create({baseURL: "https://api.themoviedb.org/3" });
    //const instance = axios.create({ baseURL: "https://api.themoviedb.org/3/movie/" });

    console.log(instance.get<movieType>(`/movie/${id}?api_key=${API_KEY}&${languageURL}`).then( (resp)=> {
      // console.log(instance.get(`/${id}?api_key=261986cbb51c934516a9889245136067&language=ru-RU`).then( (resp)=> {
      //console.log(resp.data)
      return resp.data
    }))
    // const request = await instance.get<movieType>(requests.fetchActionMovies);
    const request = await instance.get<movieType>(`/movie/${id}?api_key=${API_KEY}&${languageURL}`).then(resp=>{
      return resp.data
    });
    //this.movies = request.
    console.log(request)
    this.router.navigate([`/movie/${id}`]);

  }
}
