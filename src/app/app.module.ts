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
import { LessTallCardComponent } from './cards/lesstallcard.component';
import { FooterBarComponent } from './footer/footerbar.component';
import { CollectionsComponent } from './carousels/collections.carousel.component';
import { XWideCardComponent } from './cards/Xwidecard.component';
import { SAGAwardsComponent } from './carousels/SAGAwards.carousel.component';
import { XWideCarouselComponent } from './carousels/Xwide.carousel.component';
import { TallImgCarouselComponent } from './carousels/tall.img.carousel.component';
import { ShowCaseCardRightComponent } from './cards/showcasecard-right.component';
import { CriticsChoiceComponent } from './carousels/critics-choice.carousel.component';
import { SearchTopBarComponent } from './header/searchtopbar.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database'
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AddToSearchComponent } from './add-to-search/add-to-search.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationComponent } from './main-site/authentication/authentication.component';

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
    AwardsPageComponent,
    LessTallCardComponent,
    FooterBarComponent,
    CollectionsComponent,
    XWideCardComponent,
    SAGAwardsComponent,
    XWideCarouselComponent,
    TallImgCarouselComponent,
    ShowCaseCardRightComponent,
    CriticsChoiceComponent,
    SearchTopBarComponent,
    UserInfoComponent,
    AddToSearchComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
