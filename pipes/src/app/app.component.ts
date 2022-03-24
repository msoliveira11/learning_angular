import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'john doe';
  todaysDate = new Date();
  cost = 2000;
  temperature = 25.123476;
  pizza = {
    toppings: ['pepperoni', 'mushroom'],
    size: 'Large'
  };
}
