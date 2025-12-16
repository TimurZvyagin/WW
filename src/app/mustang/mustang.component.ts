import { CommonModule } from '@angular/common';
import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { repeat } from 'rxjs';
import { ModalMustangComponent } from 'src/app/mustang/modal-mustang/modal-mustang.component';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-mustang',
  standalone: true,
  imports: [CommonModule, MatDialogModule ],
  templateUrl: './mustang.component.html',
  styleUrl: './mustang.component.scss',
})
export class MustangComponent implements OnInit {
  constructor(public dialog: MatDialog,private cdr: ChangeDetectorRef) {}
  setActive(event: MouseEvent): void {
    const allImages = document.querySelectorAll('.carca-galere');
    const clickedImage = event.currentTarget as HTMLElement;

    allImages.forEach((image: Element) => image.classList.remove('active'));

    // Добавляем класс active только к выбранной картинке
    clickedImage.classList.add('active');
  }
  openDialog(): void {
    this.dialog
      .open<ModalMustangComponent, null, boolean>(ModalMustangComponent, {
        width: '900px',
        height: '450px',
      })
      .afterClosed()
      .subscribe((result) => {
        console.log(result);
        if (!result) return;
      });
  }
  public displayText:string='';

  ngOnInit(): void {

  const fullText: string = "Hello my dear friends, today we will learning MUSTANG  ";
  const obj: { length: number } = { length: 1 };

  gsap.to(obj, {
    length: fullText.length,
    duration: 4,
    ease: "none",
    repeat: -1, 
    yoyo: true,
    onUpdate: (): void => {
        this.displayText = fullText.substring(
          0,
          Math.floor(obj.length));
          this.cdr.detectChanges();
      }
    }
  )
  }
}
