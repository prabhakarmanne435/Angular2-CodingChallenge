import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
    selector: 'app-joke',
    templateUrl: 'joke.component.html',
    styleUrls: ['joke.component.css'],
    providers: [DataService]
})

export class JokeComponent implements OnInit {

    constructor(private dataService: DataService) { }

    //Variable to store the data returned by API
    joke=[];

    ngOnInit() {
    }

    //This method is called whenever user enters a value. It calls
    //data.service.ts file's displayJoke method to get the data.
    displayJokes(val: number){
        if(val>0){
            this.dataService.displayJoke(val).subscribe(
                (data) => this.joke = data,
                err => this.logError(err),
                () => console.log('Joke Fetch Selected')
            );
        }else {
            this.dataService.displayJoke(0).subscribe(
                (data) => this.joke = data,
                err => this.logError(err),
                () => console.log('0 Joke Fetched')
            );
        }
    }

    //Prints error in console.
    logError(err) {
        console.error('There was an error: ' + err);
    }

}
