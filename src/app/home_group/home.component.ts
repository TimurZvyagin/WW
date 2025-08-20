import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SlidersComponent } from '../sliders/sliders.component';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { SayhiMessageService } from './sayhi-message/message.services';
import { SayhiMessageComponent } from './sayhi-message/message.component';

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
  constructor(private router: Router, private banner: SayhiMessageService) {}

  Application() {
    this.router.navigate(['/application']);
  }
}
