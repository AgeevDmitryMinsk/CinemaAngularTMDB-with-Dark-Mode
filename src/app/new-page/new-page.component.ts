import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import { take } from 'rxjs/operators';
import {MovieService} from "../movie.service";

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.scss']
})
export class NewPageComponent implements OnInit {




  @Input() movie: any;
  imageURL: string = '';
  baseUrl = "https://image.tmdb.org/t/p/original/";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
    ) {}




  ngOnInit() {
    this.route.params.subscribe(
      params => {
        console.log(`params`, params)
        const id = params['backdrop_path'];  //const id = params.backdrop_path;
        console.log(`id in MovieDetailComponent `, id );
        this.getMovie(id);
      }
    );
  }

  getMovie(id:string) {
    this.movieService.getMovie(id).pipe(take(1)).subscribe(
      movie => {
        this.movie = movie;
        console.log(`this.movie` , this.movie )
      }, () => {}
    );
  }
}
