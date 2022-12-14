import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  counter: number = 0;
  isVisible: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  increaseCounterParent(event: number): void {
    this.counter = event;
  }
  showElement(event: boolean): void {
    this.isVisible = !this.isVisible;
  }
}
