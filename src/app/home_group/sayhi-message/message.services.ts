import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SayhiMessageService {
  private genershow = new BehaviorSubject<boolean>(false); //BehaviorSubject хранит в себе был ли открыт баннер и на него можно подписаться в любой момнет

  constructor() {
    const wereshow = sessionStorage.getItem('wereopen');
    if (!wereshow) {
      this.showbanner();
      sessionStorage.setItem('wereopen', 'true');
    }
  }
  get state$() {
    return this.genershow.asObservable(); //подписка
  }

  private showbanner() {
    this.genershow.next(true);
    setTimeout(() => {
      this.genershow.next(false);
    }, 10000);
  }
}
