import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructurales',
  templateUrl: './estructurales.component.html',
  styleUrls: ['./estructurales.component.css'],
})
export class EstructuralesComponent implements OnInit {
  canRead = true;

  list = [1, 2, 3, 4, 5];
  videos = [
    { id: 1, name: 'Clean Code Javascript' },
    { id: 2, name: 'Clean Code Angular' },
    { id: 3, name: 'RxJs y Observables en Angular' },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleRead() {
    this.canRead = !this.canRead;
  }
}
