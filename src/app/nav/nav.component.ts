import {Component, OnInit} from '@angular/core';
import {GenreService} from "../genre.service";
import {HttpClient} from "@angular/common/http";
import {FilmsData, MovieService} from "../movie.service";


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {

  filmsData: FilmsData[] = [];


  constructor(
    private http: HttpClient,
    public genreService: GenreService,
    private movieService: MovieService
  ) {}
  movies: any[] = [
  ];



  async fetchDataAgain(text: string) {
    console.log(text);

  }

  async fetchData() {

    return this.movieService.load().subscribe(response => {
        //console.log(`Response`, response)
        this.filmsData = response
        console.log(`fetchData Treding filmsData`, this.filmsData.results);
        this.movies = this.filmsData.results;
        console.log(this.movies)
      });

  }

  ngOnInit(): void {
    //this.movieService.load();
    console.log(`hello from navComponent`)
    this.fetchData()


  }

  getById(id: number) {

    return this.movies.find( (p: any) => p.id === id)
  }

}

