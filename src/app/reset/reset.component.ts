import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss'],
})
export class ResetComponent {
  birthdate = '';
  reset = false;
  constructor(private counterService: CounterService) {}
  validateBirthdate(): void {
    const currentDate = new Date();
    const userBirthdate = new Date(this.birthdate);
    // Calculate age
    const age = currentDate.getFullYear() - userBirthdate.getFullYear();
    // Check if user is over 18
    if (age >= 18) {
      //show the reset confirmation toast for 2 seconds
      this.reset = true;
      setTimeout(() => {
        this.reset = false;
      }, 2000);
      // Reset the counter to 0
      this.counterService.resetCounter();
    }
  }
}
