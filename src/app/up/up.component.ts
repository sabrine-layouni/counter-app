import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-up',
  templateUrl: './up.component.html',
  styleUrls: ['./up.component.scss'],
})
export class UpComponent {
  constructor(public counterService: CounterService) {}
  increase() {
    this.counterService.incrementCounter(1);
  }
}
