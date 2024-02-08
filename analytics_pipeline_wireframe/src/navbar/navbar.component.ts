import { Component, Signal, WritableSignal, signal } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AuthService } from '../app/services/auth.service';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {CdkMenu, CdkMenuItem, CdkMenuTrigger} from '@angular/cdk/menu';
import {MatListModule} from '@angular/material/list';
import { User } from '../app/model/user';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    CdkMenuTrigger, CdkMenu, CdkMenuItem,
    MatListModule,
    MatDividerModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  user:User|undefined;
  userSignal:WritableSignal<User|undefined> = signal(undefined)
  constructor(private authService:AuthService) {
    this.userSignal = this.authService.getUserSignal()
  }
  isLoggedIn() {
    return this.authService.isLoggedIn()
  }
  logout() {
    this.authService.logout()
  }

}
