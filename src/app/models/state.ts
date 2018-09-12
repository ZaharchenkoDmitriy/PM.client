import {SafeUrl} from '@angular/platform-browser';

export class State {
  constructor(number: number, title: string) {
    this.number = number;
    this.title = title;
  }
  number: number;
  title: string;
}
