import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of, timer, } from 'rxjs';


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
    return this.bannerState$.asObservable(); 
  }

  private showbanner() {
    this.bannerState$.next(true); 
    timer(3000).subscribe(()=>{this.bannerState$.next(false)});// сам отписывается, то есть уничтожается через 3 секунуды  и сам создает поток 

    // setTimeout(() => {
    //   this.bannerstate.next(false);
    // }, 3000);

    // of(null).pipe(delay(3000)).subscribe(()=>{this.bannerState$.next(false)}) // вот это прошлый код 
  }
}


