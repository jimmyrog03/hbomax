import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './header/mainmenu.component';
import { UserMenuComponent } from './header/usermenu.component';
import { TopBarComponent } from './header/topbar.component';
import { LeftNavMenuComponent } from './header/leftnavmenu.component';
import { MainPageComponent } from './main-site/mainpage.component';
import { WideCardComponent } from './cards/widecard.component';
import { ForYouComponent } from './carousels/foryou.carousel.component';
import { TallCardComponent } from './cards/tallcard.component';
import { JustAddedComponent } from './carousels/justadded.carousel.component';
import { SquareCardComponent } from './cards/squarecard.component';
import { MyListComponent } from './carousels/mylist.carousel.component';
import { ShowCaseCardComponent } from './cards/showcasecard.component';
import { PopularMoviesComponent } from './carousels/popularmovies.carousel.component';
import { XTallCardComponent } from './cards/Xtallcard.component';
import { AppRoutingModule } from './app-routing.module';
import { SeriesPageComponent } from './main-site/series.component';
import { MoviesPageComponent } from './main-site/moviespage.component';
import { SearchPageComponent } from './main-site/searchpage.component';
import { OriginalsPageComponent } from './main-site/originalspage.component';
import { LastChancePageComponent } from './main-site/lastchancepage.component';
import { JustAddedPageComponent } from './main-site/justaddedpage.component';
import { ComingSoonPageComponent } from './main-site/comingsoonpage.component';
import { TrendingNowPageComponent } from './main-site/trendingnowpage.component';
import { AwardsPageComponent } from './main-site/awardspage.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    UserMenuComponent,
    TopBarComponent,
    LeftNavMenuComponent,
    MainPageComponent,
    WideCardComponent,
    ForYouComponent,
    TallCardComponent,
    JustAddedComponent,
    SquareCardComponent,
    MyListComponent,
    ShowCaseCardComponent,
    PopularMoviesComponent,
    XTallCardComponent,
    SeriesPageComponent,
    MoviesPageComponent,
    SearchPageComponent,
    OriginalsPageComponent,
    LastChancePageComponent,
    JustAddedPageComponent,
    ComingSoonPageComponent,
    TrendingNowPageComponent,
    AwardsPageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
