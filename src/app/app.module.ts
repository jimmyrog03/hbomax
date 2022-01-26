import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './header/mainmenu.component';
import { UserMenuComponent } from './header/usermenu.component';
import { TopBarComponent } from './header/topbar.component';
import { LeftNavMenuComponent } from './header/leftnavmenu.component';
import { MainPageComponent } from './main-site/mainpage.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    UserMenuComponent,
    TopBarComponent,
    LeftNavMenuComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
