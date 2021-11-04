import {Injectable} from '@angular/core'

export interface Genre {
  id: number
  name: string
}

@Injectable({providedIn: 'root'})
export class GenreService {
  genres: Genre[] = [
    { id: 28, name: 'Action' },
    { id: 35, name: 'Comedy' }
  ]

  getById(id: number) {
    return this.genres.find(p => p.id === id)
  }
}




