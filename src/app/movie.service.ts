import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpModule } from '@angular/http';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class MovieService {
private query: string;
private API_KEY: string = environment.MOVIE_API_KEY;
private API_URL: string = environment.MOVIE_API_URL;
private URL: string = this.API_URL + this.API_KEY + '&query=';
private perPage: string = "&per_page=10";
  constructor(private http:Http) { }
getMovie(query)
{
	return this.http.get(this.URL + query + this.perPage).map(res => res.json());
}
}
 