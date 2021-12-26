import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
//import {ResultsComponent} from "../results/results.component";
import {NavComponent} from "../nav/nav.component";

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
    private navComponent: NavComponent,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(`PARAMS`, params)
      this.navComponent.getById(params.id)
      console.log(`movie in new-page.component:`, this.navComponent.getById(params.id)); //undefined
    })


    console.log(this.router.url);
    this.imageURL = this.router.url.slice(7)
    console.log(this.imageURL);


    //console.log(this.movie.title);
    // console.log(this.movie.vote_count);
    // console.log(this.movie.overview);
  }

}
