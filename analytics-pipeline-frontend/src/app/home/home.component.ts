import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { navigateTo } from '../general/functions';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButtonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor (private router: Router) {}
  navigateTo(url:string) {
    navigateTo(url,this.router)
  }
  
}
