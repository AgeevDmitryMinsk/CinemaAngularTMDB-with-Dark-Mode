import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
// import { HostListener } from "@angular/core";
// import {Router} from "@angular/router";

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {

  @Output() onSelectCard = new EventEmitter<number>()

  public movieSelect(message: any){
    // console.log(message);
    // console.log(this.router.url)
    alert(`Вы выбрали фильм: ${message}`);

    // this.router.navigate([`/movie/new-page`] )
    this.router.navigate([`/movie/${message}`] )
    console.log(this.router.url);
    console.log(this.movie.title);
    console.log(this.movie.vote_count);
    console.log(this.movie.overview);
  }

  @Input() movie: any;

  baseUrl = "https://image.tmdb.org/t/p/original/";


  constructor(private router: Router) {}


  ngOnInit(): void {
  }

  selectCard() {
    this.onSelectCard.emit(this.movie.id)

  }

}


