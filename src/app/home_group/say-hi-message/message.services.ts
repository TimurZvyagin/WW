import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of, } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';


@Injectable({
  providedIn: 'root',
})
export class SayhiMessageService {
  private bannerState$ = new BehaviorSubject<boolean>(false); //BehaviorSubject хранит в себе был ли открыт баннер и на него можно подписаться в любой момнет

  constructor() {
    const wereshow = sessionStorage.getItem('wereopen');
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
        .pipe(delay(3000), takeUntilDestroyed())
      .subscribe(() => {
        this.bannerState$.next(false);
      });
    // setTimeout(() => {
    //   this.bannerstate.next(false);
    // }, 3000);
  }
}

