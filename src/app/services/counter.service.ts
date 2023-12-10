import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private counter = 0;
  private step = 1; //Step of counter (X)
  private clickCount = 0; //number of counter changes

  //initiate storage object: put counter value with its key
  private counterCountStorage = { key: 'counter', value: this.counter };
  //create subjectBehaviors to manage the counter and step state
  private counterSubject = new BehaviorSubject<number>(this.counter);
  private stepSubject = new BehaviorSubject<number>(this.step);

  constructor() {
    this.loadCounterFromStorage();
  }
  //load counter from storage
  private loadCounterFromStorage(): void {
    const SAVED_COUNTER = localStorage.getItem(this.counterCountStorage.key);
    if (SAVED_COUNTER) {
      this.counter = parseInt(SAVED_COUNTER, 10);
      this.counterSubject.next(this.counter);
    }
  }
  //save counter in storage
  private savecounterInstorage(): void {
    localStorage.setItem(this.counterCountStorage.key, this.counter.toString());
  }
  //return the counter observable
  getCounterObservable(): BehaviorSubject<number> {
    return this.counterSubject;
  }
  //return the step observable
  getStepObservable(): BehaviorSubject<number> {
    return this.stepSubject;
  }
  //increment counter value
  incrementCounter(value: number): void {
    this.clickCount++;
    if (this.clickCount % 30 === 0) {
      this.counter = this.counter + (this.step *= 2);
    } else {
      this.counter += value;
    }
    this.savecounterInstorage();
    this.counterSubject.next(this.counter);
    this.stepSubject.next(this.step);
  }

  //decrement counter value
  decrementCounter(value: number): void {
    this.clickCount++;
    if (this.clickCount % 30 === 0) {
      this.counter = this.counter - (this.step *= 2);
    } else {
      this.counter -= value;
    }
    this.savecounterInstorage();
    this.counterSubject.next(this.counter);
    this.stepSubject.next(this.step);
  }

  //reset counter values
  resetCounter(): void {
    this.counter = 0;
    this.clickCount = 0;
    this.step = 1;
    this.savecounterInstorage();
    this.counterSubject.next(this.counter);
    this.stepSubject.next(this.step);
  }
}
