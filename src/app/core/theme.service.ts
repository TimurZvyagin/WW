import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export enum Theme {
  Dark = 'dark',
  Light = 'light',
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'support-theme';
  private themeSubject$ = new BehaviorSubject<Theme>(
    (localStorage.getItem(this.THEME_KEY) as Theme) || Theme.Dark
  );
  get theme$(): Observable<Theme> {
    return this.themeSubject$.asObservable();
  }

  constructor(@Inject(DOCUMENT) private document: Document) {}

  setTheme(theme: Theme): void {
    this.themeSubject$.next(theme);
    localStorage.setItem(this.THEME_KEY, theme);
  }

  getTheme(): Theme {
    return this.themeSubject$.value;
  }
}
