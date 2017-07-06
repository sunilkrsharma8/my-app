import { Component } from '@angular/core';
import { MainComponent } from './header-nav.component';

@Component({
  selector: 'approot',
  templateUrl: './../partials/app.component.html'
})
export class AppComponent {
 ngOnInit(): void {
     console.log("Hi");
  }

}
