import { Component, OnInit } from '@angular/core';
import { SayhiMessageService } from './message.services';
import { CommonModule } from '@angular/common';

@Component({
  styleUrl: './message.component.scss',
  standalone: true,
  selector: 'sayhi-message',
  templateUrl: './message.component.html',
  imports: [CommonModule],
})
export class SayhiMessageComponent implements OnInit {
  showme = false;

  constructor(private banner: SayhiMessageService) {}

  ngOnInit(): void {
    this.banner.state$.subscribe((state) => {
      this.showme = state;
    });
  }
}
