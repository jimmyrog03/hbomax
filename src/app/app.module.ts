import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainDropDownComponent } from './header/maindropdown.component';
import { SearchBarComponent } from './header/searchbar.component';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './header/mainmenu.component';
import { UserMenuComponent } from './header/usermenu.component';

@NgModule({
  declarations: [
    AppComponent,
    MainDropDownComponent,
    SearchBarComponent,
    MainMenuComponent,
    UserMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
