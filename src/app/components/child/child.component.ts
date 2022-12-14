import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() counter: number = 0;
  @Input() isVisible: boolean = true;

  @Output() listenCounter: EventEmitter<number> = new EventEmitter<number>();
  @Output() listenIsVisible: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  increaseCounterChild(): void {
    this.counter++;
    this.listenCounter.emit(this.counter);
  }
  isVisibleSetter(): void {
    this.listenIsVisible.emit(!this.isVisible);
  }
}
