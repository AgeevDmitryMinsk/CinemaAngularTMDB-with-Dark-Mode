// В ПЕРСПЕКТИВЕ ЗДЕСЬ НУЖНО ДОБАВИТЬ НАВИГАЦИЮ ПО ЖАНРУ:

import {Injectable} from '@angular/core'

export interface Genre {
  id: number
  name: string
}

@Injectable({providedIn: 'root'})
export class GenreService {

  public getGenre(): Array<any> {
    return [
      {id: 28, name: 'Action'},
      {id: 35, name: 'Comedy'},
      {id: 27, name: 'Horror'},
      {id: 10749, name: 'Romance'},
      {id: 9648, name: 'Mystery'},
      {id: 878, name: 'Sci-Fi'},
      {id: 37, name: 'Western'},
      {id: 16, name: 'Animation'},
      {id: 10770, name: 'TV'},
    ]

  }
}





