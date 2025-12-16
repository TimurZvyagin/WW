// import {
//   animate,
//   state,
//   style,
//   transition,
//   trigger,
// } from '@angular/animations';
// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';

// const fadeInOut = trigger('fadeInOut', [
//   state('open', style({ opacity: 1 })),
//   state('close', style({ opacity: 0 })),
//   transition('open => close', [animate('3s ease-out')]),
//   transition('close => open', [animate('3s ease-out')]),
// ]);

// @Component({
//   selector: 'sliders',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './sliders.component.html',
//   styleUrls: ['./sliders.component.scss'],
//   animations: [fadeInOut],
// })
// export class SlidersComponent {
//   slides = [
//     {
//       description: 'What did you do, when you saw the Trojan on your computer',
//       img: 'assets/img/smile-face.jpg',
//     },
//     {
//       description: 'Youre after taking a cybersecurity course',
//       img: 'assets/img/chacker.jpg',
//     },
//     {
//       description: 'Или таким ',
//       img: 'assets/img/matrix.png',
//     },
//   ];  

//   currentIndex = 0;
//   public isShowU = true;

//   private changeSlide(newIndex: number) {
//     this.isShowU = false; // вырубает текст

//     setTimeout(() => {
//       this.currentIndex = newIndex; // меняет на новый индекс
//       this.isShowU = true; // снова показывает текст
//     }, 500);
//   }

//   goToSlide(index: number) {
//     if (index !== this.currentIndex) {
//       this.changeSlide(index);
//     }
//   }
// }
