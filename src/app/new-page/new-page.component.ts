import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import instance from "../axious";
import {API_KEY, languageURL, movieType} from "../requests";

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.scss']
})
export class NewPageComponent implements OnInit {

  @Input() movie: any;
  imageURL: string = '';
  baseUrl = "https://image.tmdb.org/t/p/original/";
  // newMovie: movieType | undefined

  constructor(private router: Router) { }

  async ngOnInit()  {
    //console.log(this.router.url);
    let movieId = this.router.url.slice(7)

    // newMovie = https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
    this.movie  = await instance.get<movieType>(`/movie/${movieId}?api_key=${API_KEY}&${languageURL}`).then(resp=>{
      return resp.data
    });

    console.log(movieId)//675353
    console.log(this.movie)
    console.log(this.movie?.backdrop_path)
  }

}
