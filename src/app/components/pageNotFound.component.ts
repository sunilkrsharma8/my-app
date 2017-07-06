import { Component } from '@angular/core';
import { Router }   from '@angular/router';

@Component({
  selector: 'page-notfound',
  templateUrl: './../partials/pageNotFound.component.html'
})
export class PageNotFoundComponent {
  constructor(
    private router: Router
  ) { }
 
}
