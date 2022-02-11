import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from './main-site/mainpage.component';
import { SeriesPageComponent } from './main-site/series.component';
import { MoviesPageComponent } from './main-site/moviespage.component';
import { SearchPageComponent } from './main-site/searchpage.component';
import { OriginalsPageComponent } from './main-site/originalspage.component';

const routes:Routes = [
  {path: '', component: MainPageComponent},
  {path: 'home', component: MainPageComponent},
  {path: 'series', component: SeriesPageComponent},
  {path: 'movies', component: MoviesPageComponent},
  {path: 'search', component: SearchPageComponent},
  {path: 'originals', component: OriginalsPageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  RouterModule
  ]
})
export class AppRoutingModule { }
