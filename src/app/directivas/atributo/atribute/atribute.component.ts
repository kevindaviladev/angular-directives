import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atribute',
  templateUrl: './atribute.component.html',
  styleUrls: ['./atribute.component.css'],
})
export class AtributeComponent implements OnInit {
  isWarning = true;
  isLoading = false;

  name = 'Suscribete!';
  constructor() {}

  ngOnInit(): void {}

  toggleLoading() {
    this.isLoading = !this.isLoading;
  }
}
