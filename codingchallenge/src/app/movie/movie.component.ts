import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
    selector: 'app-movie',
    templateUrl: 'movie.component.html',
    styleUrls: ['movie.component.css'],
    providers: [DataService]
})

export class MovieComponent implements OnInit {

  //Variable to store the data returned by API
  movies = [];

  constructor(private dataService: DataService) {}

  //This method runs during initialization. It calls data.service.ts file's
  //fetchData method to get the data.
  ngOnInit() {
        this.dataService.fetchData().subscribe(
            (data) => this.movies = data,
            err => this.logError(err),
            () => console.log('Movie Details Fetch Complete')
        );
    }

    //Prints error in console.
    logError(err) {
        console.error('There was an error: ' + err);
    }

}
