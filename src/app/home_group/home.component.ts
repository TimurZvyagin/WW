import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlidersComponent } from '../sliders/sliders.component';
import { Router } from '@angular/router';
import { SayhiMessageComponent } from './sayhi-message/message.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SlidersComponent,
    SayhiMessageComponent,
    MatButtonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private router: Router) {}

  Application() {
    this.router.navigate(['/application']);
  }
}
