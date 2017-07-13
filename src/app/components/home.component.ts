import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './../partials/home.component.html'
})
export class HomeComponent {

    private date;

    constructor() { 
      this.date = new Date();  
    }

    
}
