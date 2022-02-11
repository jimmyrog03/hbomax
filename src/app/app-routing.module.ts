import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from './main-site/mainpage.component';
import { SeriesPageComponent } from './main-site/series.component';
import { MoviesPageComponent } from './main-site/moviespage.component';
import { SearchPageComponent } from './main-site/searchpage.component';
import { OriginalsPageComponent } from './main-site/originalspage.component';
import { JustAddedPageComponent } from './main-site/justaddedpage.component';
import { LastChancePageComponent } from './main-site/lastchancepage.component';
import { ComingSoonPageComponent } from './main-site/comingsoonpage.component';
import { TrendingNowPageComponent } from './main-site/trendingnowpage.component';
import { AwardsPageComponent } from './main-site/awardspage.component';

const routes:Routes = [
  {path: '', component: MainPageComponent},
  {path: 'home', component: MainPageComponent},
  {path: 'series', component: SeriesPageComponent},
  {path: 'movies', component: MoviesPageComponent},
  {path: 'search', component: SearchPageComponent},
  {path: 'originals', component: OriginalsPageComponent},
  {path: 'justadded', component: JustAddedPageComponent},
  {path: 'lastchance', component: LastChancePageComponent},
  {path: 'comingsoon', component: ComingSoonPageComponent},
  {path: 'trendingnow', component: TrendingNowPageComponent},
  {path: 'awards', component: AwardsPageComponent}

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
