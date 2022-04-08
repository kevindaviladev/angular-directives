import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, map } from 'rxjs/operators';
import { ApiService } from './api.service';
import { StateService } from './state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularTips';

  form: FormGroup;

  constructor(
    private apiService: ApiService,
    private stateService: StateService
  ) {
    this.form = new FormGroup({
      name: new FormControl(''),
      age: new FormControl(''),
    });
  }
  ngOnInit() {
    // this.apiService.getData().subscribe(console.log);
    this.form.get('name')?.valueChanges.subscribe((res) => {
      console.log('value: ', res);
      // this.filter();
    });
  }

  filter() {
    this.stateService.filtersSource.next(this.form.value);
  }
}
