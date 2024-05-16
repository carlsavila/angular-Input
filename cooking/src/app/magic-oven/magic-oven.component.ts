import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-magic-oven',
  standalone: true,
  imports: [],
  templateUrl: './magic-oven.component.html',
  styleUrl: './magic-oven.component.css'
})
export class MagicOvenComponent {
  //in app-magic-oven 
  @Input()
  startCooking: boolean = false;

  @Input()
  numberOfCookies: number = 0;

  @Input()
  flour: number = 0;

  @Input()
  salt: number = 0;

  @Input()
  sugar: number = 0;

  @Input()
  egg: number = 0;
}
