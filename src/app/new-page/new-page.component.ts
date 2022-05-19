import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import instance from "../axious";
import {API_KEY, languageURL, movieType} from "../requests";

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.scss']
})
export class NewPageComponent implements OnInit {

  public buy_ticket() {
    alert(`* здесь можно будет купить билет c ID = ${this.movie.id}, ${this.movie.title}`);
  }

  $observable: Promise<any> | undefined;
  movie: any;
  imageURL: string = '';
  baseUrl = "https://image.tmdb.org/t/p/original/";

  constructor(private router: Router) {
  }

  async ngOnInit() {
    //console.log(this.router.url);
    let movieId = this.router.url.slice(7)
    this.movie = await instance.get<movieType>(`/movie/${movieId}?api_key=${API_KEY}&${languageURL}`).then(resp => {
      return resp.data
    }).catch(err => this.router.navigate([`/error`])
      //console.log(`error`,error);
    );

    this.$observable = instance.get<movieType>(`/movie/${movieId}?api_key=${API_KEY}&${languageURL}`).then(resp => {
      return resp.data
    }).catch(error => console.log(`Упс! что-то пошло не так:`, error.message))
    // console.log(movieId)//675353
    // console.log(this.movie)
    // console.log(this.movie?.backdrop_path)
    console.log(`2022 Inspiration`)
  }


}

//2022 Inspiration

