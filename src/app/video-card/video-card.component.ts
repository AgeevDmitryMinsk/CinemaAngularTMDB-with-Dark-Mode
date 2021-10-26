import { Component, Input, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {

  public movieSelect(message: any){
    // console.log(message);
    alert(`Вы выбрали фильм: ${message}`);
  }

  @Input() movie: any;

  baseUrl = "https://image.tmdb.org/t/p/original/"

  constructor() { }


  ngOnInit(): void {
  }

}


