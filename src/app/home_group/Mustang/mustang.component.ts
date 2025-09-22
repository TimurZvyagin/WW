import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalMustangComponent } from 'src/app/modal-mustang/modal-mustang.component';

@Component({
  selector: 'app-mustang',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './mustang.component.html',
  styleUrl: './mustang.component.scss',
})
export class MustangComponent {
  constructor(private dialog: MatDialog) {}
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
}
