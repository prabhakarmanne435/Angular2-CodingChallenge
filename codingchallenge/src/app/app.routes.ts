import { GameComponent } from "./game/game.component";
import { JokeComponent } from "./joke/joke.component";
import { MovieComponent } from "./movie/movie.component";
import { HomeComponent } from "./home/home.component";
import { Routes } from "@angular/router";

//A constant to define the routes for links
export const appRoutes: Routes = [
  { path: 'game', component: GameComponent },
  { path: 'joke', component: JokeComponent },
  { path: 'movie', component: MovieComponent},
  { path: '', component: HomeComponent }
];
