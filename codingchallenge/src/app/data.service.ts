import { Injectable } from '@angular/core';
import { Http, Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataService {

    constructor(private http: Http, private jsonp: Jsonp) {}

    //For Fetching data for movie component. JSONP request is sent to get
    //details for a particular movie.
    fetchData(){
      return this.jsonp.get('https://api.themoviedb.org/3/movie/'+
      '278927?api_key=fd35dcdcfbba840ef2f9ea42c5c55869&callback=JSONP_CALLBACK')
      .map(
            (res) =>{
              let data = res.json();
              return data;
            }
        );
    }

    //For fetching data for joke component. JSONP request is sent, which returns
    // number of jokes as entered by user.
    displayJoke(val){
        return this.jsonp.get('https://api.icndb.com/jokes/random/'+val+
        '?callback=JSONP_CALLBACK').map(
            (res) =>{
              let data = res.json();
              return data;
            }
        );
    }

    //For fetching data for High/Low card game. GET request is sent, which
    //returns two cards from a single deck.
    getDeck(){
        return this.http.get('http://deckofcardsapi.com/api/deck/new/draw/'+
        '?count=2').map(
            (res) =>{
              let data = res.json();
              return data.cards;
            }
        );
    }

}
