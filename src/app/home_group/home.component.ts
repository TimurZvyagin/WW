import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
// import { SlidersComponent } from '../sliders/sliders.component';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { SayhiMessageComponent } from './say-hi-message/message.component';
import { SkillBoxSlideComponent } from "../skill-slides/like-skill.component";

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
export class HomeComponent implements AfterViewInit {
  constructor(private router: Router) {}
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

  ngOnDestroy() {
    if (this.videoElement?.nativeElement) {
    }
  }




  Application() {
    this.router.navigate(['/application'])
  }
}
  

