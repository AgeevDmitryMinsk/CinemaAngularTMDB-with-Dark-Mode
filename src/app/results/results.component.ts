import {Component, Injectable, Input, OnInit} from '@angular/core';
// import axios from '../axious';
// import requests from '../requests';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})


export class ResultsComponent implements OnInit {

  constructor() { }


  @Input() movies:any;


  ngOnInit(): void {
  }

  selectCard(id: any) {
    this.movies = this.movies.filter((movies: any)=> movies.id == id)
  }



}
