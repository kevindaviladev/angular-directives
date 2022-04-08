import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-report2',
  templateUrl: './report2.component.html',
  styleUrls: ['./report2.component.css'],
})
export class Report2Component implements OnInit {
  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    this.stateService.filters$.subscribe((res) => {
      console.log('Filtros segundo reporte: ', res);
    });
  }
}
