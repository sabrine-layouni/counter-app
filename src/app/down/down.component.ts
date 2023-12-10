import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-down',
  templateUrl: './down.component.html',
  styleUrls: ['./down.component.scss'],
})
export class DownComponent {
  constructor(public counterService: CounterService) {}
  decrease() {
    this.counterService.decrementCounter(1);
  }
}
