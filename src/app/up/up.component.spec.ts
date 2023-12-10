import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterService } from '../services/counter.service';

import { UpComponent } from './up.component';

//mock counter service
class CounterServiceMock {
  incrementCounter(value: number): void {}
}
describe('UpComponent', () => {
  let component: UpComponent;
  let fixture: ComponentFixture<UpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpComponent],
      providers: [{ provide: CounterService, useClass: CounterServiceMock }],
    });
    fixture = TestBed.createComponent(UpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call incrementCounter method on CounterService when increase is called', () => {
    const counterService = TestBed.inject(CounterService);
    spyOn(counterService, 'incrementCounter');

    component.increase();

    expect(counterService.incrementCounter).toHaveBeenCalledWith(1);
  });
});
