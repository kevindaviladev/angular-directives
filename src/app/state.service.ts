import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  filtersSource = new BehaviorSubject(null);
  filters$ = this.filtersSource.asObservable();

  constructor() {}
}
