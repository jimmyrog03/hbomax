import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './header/mainmenu.component';
import { UserMenuComponent } from './header/usermenu.component';
import { TopBarComponent } from './header/topbar.component';
import { LeftNavMenuComponent } from './header/leftnavmenu.component';
import { MainPageComponent } from './main-site/mainpage.component';
import { WideCardComponent } from './cards/widecard.component';
import { ForYouComponent } from './carousels/foryou.carousel';
import { TallCardComponent } from './cards/tallcard.component';
import { JustAddedComponent } from './carousels/justadded.carousel.component';

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
    JustAddedComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
