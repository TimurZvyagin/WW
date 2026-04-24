import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, DestroyRef, effect, ElementRef,  inject,  OnInit,   signal, viewChild, ViewChild } from '@angular/core';
// import { SlidersComponent } from '../sliders/sliders.component';
import { MatButtonModule } from '@angular/material/button';
import { SayhiMessageComponent } from './say-hi-message/message.component';
import { SkillBoxSlideComponent } from "./skill-slides/like-skill.component";
import { ApplicationComponent } from './modal-application/application.component';
import { MatDialog } from '@angular/material/dialog';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    // SlidersComponent,
    MatButtonModule,
    SayhiMessageComponent,
    SkillBoxSlideComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent{
  private  readonly destroyRef = inject(DestroyRef);
  videoElement = viewChild<ElementRef<HTMLVideoElement>>('backgroundVideo');

  constructor(private dialog:MatDialog) {

    effect(() => {
      const video = this.videoElement()?.nativeElement;
      if (video) {
        video.muted = true;
        video.load();
      }
    })
  };

  ModalApl(): void {
      this.dialog
        .open<ApplicationComponent, null, boolean>(ApplicationComponent, {
          width: '600px',
          height: '550px'
        })
        .afterClosed().pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((result) => {
          if (!result) return // если резульатата нет, то retrun останавливает код 
          console.log(result);
        });
    }
}
