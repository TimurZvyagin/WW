import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlidersComponent } from '../sliders/sliders.component';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { SayhiMessageComponent } from './say-hi-message/message.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SlidersComponent,
    MatButtonModule,
    SayhiMessageComponent,
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
