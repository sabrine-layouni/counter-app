import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { ResetComponent } from './reset.component';
import { CounterService } from '../services/counter.service';

class CounterServiceMock {
  resetCounter(): void {}
}

class DateMock extends Date {
  constructor() {
    super();
    // Set the current date to a known date for testing purposes
    return new Date('2023-01-01');
  }
}

describe('ResetComponent', () => {
  let component: ResetComponent;
  let fixture: ComponentFixture<ResetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetComponent],
      providers: [
        { provide: CounterService, useClass: CounterServiceMock },
        { provide: Date, useClass: DateMock },
      ],
    });
    fixture = TestBed.createComponent(ResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should reset the counter when user is over 18', fakeAsync(() => {
    const counterService = TestBed.inject(CounterService);
    spyOn(counterService, 'resetCounter');

    // Set the birthdate to ensure the user is over 18
    component.birthdate = '2000-01-01';
    component.validateBirthdate();

    // Trigger the timeout for the toast
    tick(2000);

    expect(counterService.resetCounter).toHaveBeenCalled();
    expect(component.reset).toBe(false);
  }));

  it('should not reset the counter when user is under 18', fakeAsync(() => {
    const counterService = TestBed.inject(CounterService);
    spyOn(counterService, 'resetCounter');

    // Set the birthdate to ensure the user is under 18
    component.birthdate = '2010-01-01';
    component.validateBirthdate();

    // Trigger the timeout for the toast
    tick(2000);

    expect(counterService.resetCounter).not.toHaveBeenCalled();
    expect(component.reset).toBe(false);
  }));
});
