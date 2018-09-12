import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { State } from '../../models/state';
import {del} from '../../../../node_modules/@types/selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {
  public states: BehaviorSubject<State[]> = new BehaviorSubject([]);
  public state: BehaviorSubject<State> = new BehaviorSubject(null);
  public currentState: State;
  public currentStates: State[];

  constructor() {
    window.onresize =  () => {
      const popUp = document.getElementById('pop-up-background');

      if (popUp) {
        popUp.style.width = document.documentElement.clientWidth + 'px';
        popUp.style.height = document.documentElement.clientHeight + 'px';
      }
    };

    this.state.subscribe(state => this.currentState = state);
    this.states.subscribe(states => this.currentStates = states);
  }

  initPopup() {
    const popUp = document.getElementById('pop-up-background');
    popUp.style.width = document.documentElement.clientWidth + 'px';
    popUp.style.height = document.documentElement.clientHeight + 'px';
  }

  initStates(states: State[]) {
    this.states.next(states);
    this.state.next(states[0]);

    setInterval(() => {
      const popUp = document.getElementById('pop-up-background');
        if (popUp) {
          this.initScroll(popUp);
          clearInterval(0);
        }
      }, 10);
  }

  initScroll(popUp) {
    const self = this;

    popUp.addEventListener('wheel', (event) => {
      if (Math.abs(event.deltaX) + Math.abs(event.deltaY) > 100) {
        if (Math.abs(event.deltaY) * 2 > Math.abs(event.deltaX)) {
          event.deltaY < 0 ? self.nextState() : self.previousState();
        } else {
          event.deltaX > 0 ? self.nextState() : self.previousState();
        }
      }
    });
  }

  previousState() {
    const index = this.currentStates.indexOf(this.currentState);
    if (index > 0) {
      this.state.next(this.currentStates[index - 1]);
    }
  }

  nextState() {
    const index = this.currentStates.indexOf(this.currentState);
    if (index < this.currentStates.length - 1) {
      this.state.next(this.currentStates[index + 1]);
    }
  }
  stateByTitle(title: string) {
    const state = this.states.getValue().find(st => st.title === title);
    return state;
  }


  confirm(text: string) {
    return confirm(text);
  }
}
