import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { bigDataInfo } from './big-data/services';
import { anotherData } from './big-data/interfaces/bigInterfaces';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [],
})
export class AppComponent {
  title = 'new-profect';
  bigDataInfo = inject(bigDataInfo)
  bigData:anotherData[]=[]

  constructor(){
    this.bigDataInfo.getTestAccount().subscribe(value =>{
      this.bigData=value
    })
  }
  

}
