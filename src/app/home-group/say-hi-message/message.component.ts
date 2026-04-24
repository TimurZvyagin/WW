import { Component, DestroyRef, OnInit } from '@angular/core';
import { SayhiMessageService } from './message.services';
import { CommonModule } from '@angular/common';
import {
  animate,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';


const fadeOut = trigger('fadeOut', [
  
      transition(':leave', [
        animate('500ms ease-in', 
        style({ opacity: 0 })) // Растворяем перед удалением
      ])
    ])

// const fadeOut = trigger('fadeOut', [
//   state('visible', style({ opacity: 1 })),
//   state(
//     'hidden',
//     style({ opacity: 0, height: 0, position:absolute overflow: 'hidden' })
//   ),
//   transition('visible => hidden', [animate('2.5s ease-out')]),
// ]);

@Component({
  styleUrl: './message.component.scss',
  standalone: true,
  selector: 'say-hi-message',
  templateUrl: './message.component.html',
  imports: [CommonModule],
  animations: [fadeOut],
})
export class SayhiMessageComponent implements OnInit {
  showme: boolean = true;

  constructor(private banner: SayhiMessageService, private destroyRef: DestroyRef) {}

  ngOnInit(): void {
    this.banner.state$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((state) => {
      this.showme = state;
    });
  }
}
