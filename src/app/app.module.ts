import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TitleComponent } from './components/title/title.component';
import { ButtonComponent } from './components/button/button.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TitleComponent,
    ButtonComponent,
    BigCardComponent,
    CardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
