import { CommonModule } from '@angular/common';
import { Component, OnInit,ChangeDetectorRef,} from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalMustangComponent } from 'src/app/mustang/modal-mustang/modal-mustang.component';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-mustang',
  standalone: true,
  imports: [CommonModule, MatDialogModule ],
  templateUrl: './mustang.component.html',
  styleUrl: './mustang.component.scss',
})
export class MustangComponent implements OnInit  {
  constructor(public dialog: MatDialog,private cdr: ChangeDetectorRef) {}
    // const allImages = document.querySelectorAll('.carca-galere');
    // const clickedImage = event.currentTarget as HTMLElement;
    // allImages.forEach((image: Element) => image.classList.remove('active'));
    // clickedImage.classList.add('active');

    activeCar:string='mustang';

    setActive(carName:string):void{
      this.activeCar=carName
    }

  openDialog(): void {
    this.dialog
      .open<ModalMustangComponent, null, boolean>(ModalMustangComponent, {
        width: '900px',
        height: '450px',
      })
      .afterClosed().pipe(takeUntilDestroyed())
      .subscribe((result) => {
        console.log(result);
        if (!result) return;
      });
  }
  public displayText:string='';

  ngOnInit(): void {

  const fullText: string = "Hello my dear friends, today we will learn MUSTANG  ";
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
