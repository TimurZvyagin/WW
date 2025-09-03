import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SayhiMessageService {
  private bannerState$ = new BehaviorSubject<boolean>(false); //BehaviorSubject хранит в себе был ли открыт баннер и на него можно подписаться в любой момнет

  constructor() {
    // const wereshow = sessionStorage.getItem('wereopen');
    const wereshow = false;
    if (!wereshow) {
      this.showbanner();
      sessionStorage.setItem('wereopen', 'true');
    }
  }
  get state$(): Observable<boolean> {
    return this.bannerState$.asObservable(); //подписка
  }

  private showbanner() {
    this.bannerState$.next(true);

    of(null)
      .pipe(delay(3000))
      .subscribe(() => {
        this.bannerState$.next(false);
      });
    // setTimeout(() => {
    //   this.bannerstate.next(false);
    // }, 3000);
  }
}
