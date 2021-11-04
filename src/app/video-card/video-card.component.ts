import { Component, Input, OnInit } from '@angular/core';
import {Router} from "@angular/router";
// import { HostListener } from "@angular/core";
// import {Router} from "@angular/router";

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {

  public movieSelect(message: any){
    // console.log(message);
    // console.log(this.router.url)
    alert(`Вы выбрали фильм: ${message}`);

    this.router.navigate([`/movie/new-page`] )
    //this.router.navigate([`/movie${message}`] )
    console.log(this.router.url);

  }

  @Input() movie: any;

  baseUrl = "https://image.tmdb.org/t/p/original/";


  constructor(private router: Router) {}


  ngOnInit(): void {
  }

}


