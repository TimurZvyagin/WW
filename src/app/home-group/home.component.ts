import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef,  Renderer2, ViewChild } from '@angular/core';
// import { SlidersComponent } from '../sliders/sliders.component';
import { Router } from '@angular/router';
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
export class HomeComponent implements AfterViewInit{
 private observer!: IntersectionObserver;
  constructor(private router: Router,private dialog:MatDialog,  private el: ElementRef,
    private renderer: Renderer2) {}

  @ViewChild('backgroundVideo') videoElement!: ElementRef<HTMLVideoElement>;  
   private initializeVideo() {
    const video = this.videoElement.nativeElement;
    // Перезагружаем видео
    video.load();
     video.muted = true;

  }

  ngAfterViewInit():void {
    this.initializeVideo();
  }
  ModalApl(): void {
      this.dialog
        .open<ApplicationComponent, null, boolean>(ApplicationComponent, {
          width: '600px',
          height: '550px'
        })
        .afterClosed().pipe(takeUntilDestroyed())
        .subscribe((result) => {
          console.log(result);
          if (!result) return;
        });
    }

}
  

