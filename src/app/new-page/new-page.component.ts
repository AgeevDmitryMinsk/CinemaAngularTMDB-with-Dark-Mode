import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.scss']
})
export class NewPageComponent implements OnInit {

  @Input() movie: any;
  imageURL: string = '';
  baseUrl = "https://image.tmdb.org/t/p/original/";

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.router.url);
    this.imageURL = this.router.url.slice(7)
    console.log(this.imageURL);
  }

}
