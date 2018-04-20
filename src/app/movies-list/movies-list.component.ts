import { Component, OnInit } from '@angular/core';
import {  MovieService } from '../movie.service';
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
movies: any[];
imagesFound: boolean = false;
handleSuccess(data){
	this.imagesFound = true;
	this.movies = data.results;
	console.log(data.results);
}
handleError(error){
	console.log(error);
}
constructor(private movieService : MovieService) { }
searchMovie(query : string){
	return this.movieService.getMovie(query).subscribe(data=> this.handleSuccess(data),
														error => this.handleError(error),
														() => console.log("Done TATA!"))
}
  ngOnInit() {
  }

}
