import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GameComponent } from './game';
import { HomeComponent } from './home';
import { JokeComponent } from './joke';
import { MovieComponent } from './movie';
import { DataService } from './data.service';

import { appRoutes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HomeComponent,
    JokeComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
