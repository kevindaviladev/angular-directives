import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { StateService } from '../state.service';

@Component({
  selector: 'app-report1',
  templateUrl: './report1.component.html',
  styleUrls: ['./report1.component.css'],
})
export class Report1Component implements OnInit {
  value: any;
  value$: any;
  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    this.value$ = this.stateService.filters$.pipe(
      map((res: any) => ({
        age: Number(res?.age) + 5 || null,
        originalAge: Number(res?.age) || null,
      }))
    );
  }
}
