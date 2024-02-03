import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  username:string=""
  password:string=""
  profilePicUrl:string=""
  constructor(private authService:AuthService){}
  signup() {
    var u = new User()
    u.username = this.username;
    u.profilePictureURL = this.profilePicUrl;
    u.password = this.password;
    this.clearInputs()
    this.authService.signup(u)
  }
  clearInputs() {
    this.username = ""
    this.password = ""
    this.profilePicUrl = ""
  }

}
