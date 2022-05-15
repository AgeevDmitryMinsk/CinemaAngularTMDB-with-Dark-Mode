import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {VideoCardComponent} from "./video-card/video-card.component";
import {FooterComponent} from "./footer/footer.component";
import {NewPageComponent} from "./new-page/new-page.component";
import {NavComponent} from "./nav/nav.component";
import {ErrorPageComponent} from "./error-page/error-page.component";



const routes: Routes = [
  { path: '', redirectTo: 'movie', pathMatch: 'full'},
  {path: 'movie', component: NavComponent},
  {path: `movie/:id`, component: NewPageComponent},
  {path: 'error', component: ErrorPageComponent},
  {path: '**', redirectTo: '/error' }

  // {path: 'movie/new-page', component: NewPageComponent},

  // {path: 'movie/video-card', component: VideoCardComponent},
  // {path: 'footer', component: FooterComponent},

  // { path: '**', redirectTo: 'movie', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
