import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieServiceService } from './movie-service.service';
import { MovieService } from './movie.service';


@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [MovieServiceService, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
