import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainDropDownComponent } from './header/maindropdown.component';
import { SearchBarButtonComponent } from './header/searchbar-button.component';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './header/mainmenu.component';
import { UserMenuComponent } from './header/usermenu.component';
import { TopBarComponent } from './header/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainDropDownComponent,
    SearchBarButtonComponent,
    MainMenuComponent,
    UserMenuComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
