import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, DestroyRef, ElementRef,  inject,  OnInit,  Renderer2, signal, ViewChild } from '@angular/core';
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
export class HomeComponent implements AfterViewInit, OnInit{
  private  readonly destroyRef = inject(DestroyRef);
  count= signal(0)



  constructor(private dialog:MatDialog) {}

  @ViewChild('backgroundVideo') videoElement!:ElementRef<HTMLVideoElement>;  
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
        .afterClosed().pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((result) => {
          if (!result) return // если резульатата нет, то retrun останавливает код 
          console.log(result);
        });
    }
    ngOnInit(){
      // console.log(this.count())
      // this.count.set(100)
      // console.log(this.count())
      // this.count.update(value=> value+ 1)
      // this.count()
    }  
  }
const count = signal(0)
    count()
      count.set(100)
      count()
      count.update(value=> value+ 1)
      count()
{}
