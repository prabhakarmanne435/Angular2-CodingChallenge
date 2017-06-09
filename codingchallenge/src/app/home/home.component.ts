import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {
    constructor() { }

    //Variables to show data on page
    description1 = "Hi, I’m Riya Dashoriya.";
    description2 = "Nerd. Love to Code – anything, everything. Zeal to learn."+
    " Adventurous. Love the Change. Happy. Positive. Motivated. Self-starter."+
    " Passion for New Technology. Crazy.";
    interests = "Listening music, reading about new technology";
    project1 = "This is a Movie Trailer Website developed using Python for"+
    " Udacity's Full Stack Web Developer Nanodegree Plus Program.";
    project2 = "A responsive website that display images, descriptions and"+
    " links to each of the portfolio projects "+
    "done as a part of Udacity's Full Stack Web Developer Nanodegree.";

    ngOnInit() {
        
    }

}
