import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownComponent } from './down.component';
import { CounterService } from '../services/counter.service';

//counterServiceMock
class CounterServiceMock {
  decrementCounter(value: number): void {}
}
describe('DownComponent', () => {
  let component: DownComponent;
  let fixture: ComponentFixture<DownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownComponent],
      providers: [{ provide: CounterService, useClass: CounterServiceMock }],
    });
    fixture = TestBed.createComponent(DownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call decrementCounter method on CounterService when decrease is called', () => {
    const counterService = TestBed.inject(CounterService);
    spyOn(counterService, 'decrementCounter');

    component.decrease();

    expect(counterService.decrementCounter).toHaveBeenCalledWith(1);
  });
});
