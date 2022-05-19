import { Component, OnInit } from '@angular/core';
import axios from '../axious';
import requests from '../requests';
import {GenreService} from "../genre.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


  constructor(public genreService: GenreService) {}
  movies: any[] = [
  ];



  async fetchDataAgain(text: string) {
    console.log(text);


    if (text == "Action") {
      const request = await axios.get(requests.fetchActionMovies);
      console.log(request.data.results);
      this.movies = request.data.results;

    }if (text == "Comedy") {
      const request = await axios.get(requests.fetchComedyMovies);
      console.log(request.data.results);
      this.movies = request.data.results;

    }


    if (text == "Horror") {
      const request = await axios.get(requests.fetchHorrorMovies);
      console.log(request.data.results);
      this.movies = request.data.results;

    }
    if (text == "Romance") {
      const request = await axios.get(requests.fetchRomanceMovies);
      console.log(request.data.results);
      this.movies = request.data.results;

    }
    if (text == "Mystery") {
      const request = await axios.get(requests.fetchMystery);
      console.log(request.data.results);
      this.movies = request.data.results;

    }
    if (text == "Sci-Fi") {
      const request = await axios.get(requests.fetchSciFi);
      console.log(`gdfsdfgsdg`);
      console.log(request.data.results);
      this.movies = request.data.results;

    }
    if (text == "Western") {
      const request = await axios.get(requests.fetchWestern);
      console.log(request.data.results);
      this.movies = request.data.results;

    }
    if (text == "Animation") {
      const request = await axios.get(requests.fetchAnimation);
      console.log(request.data.results);
      this.movies = request.data.results;

    }if (text == "TV") {
      const request = await axios.get(requests.fetchTV);
      console.log(request.data.results);
      this.movies = request.data.results;

    }
  }

  async fetchData() {
    // const request = await axios.get(requests.fetchTreding);
    const request = await axios.get(requests.fetchActionMovies);
    console.log(request.data.results);
    this.movies = request.data.results;

    return request;

  }
  ngOnInit(): void {
    this.fetchData();
  }

}
