import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

/**
 *
 * @example:
 * @Component({
 *    providers: [DestroyService] // creates instance of service per component
 * })
 * Foo {
 *    some$: Observable<any>;
 *    constructor(private destroy$: TuiDestroyService) {
 *      some$.pipe(takeUntil(this.destroy$)).subscribe();
 *    }
 * }
 */
@Injectable()
export class DestroyService extends Subject<void> implements OnDestroy {
  ngOnDestroy(): void {
    this.next();
    this.complete();
  }
}
