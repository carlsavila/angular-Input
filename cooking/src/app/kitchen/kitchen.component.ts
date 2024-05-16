import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MagicOvenComponent } from '../magic-oven/magic-oven.component';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [FormsModule, MagicOvenComponent],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {

  isCooked: boolean = false;
  flourQuantity: number = 0;
  saltQuantity: number = 0;
  sugarQuantity: number = 0;
  eggQuantity: number = 0;
  numberOfCookies: number = 0;
  
  startCooking() {
    this.isCooked = true;
    console.log(this.isCooked);
  }
}
