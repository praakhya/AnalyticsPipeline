import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { HttpClientModule, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../../../constants';
import { catchError, of } from 'rxjs';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  errorMessage:string = "";
  constructor(private authService: AuthService, private router:Router, private http:HttpClient) {}
  ngOnInit() {
    this.authService.authError.subscribe(err=>{
      console.log(err)
      this.errorMessage = err
    })
  }
  authUser() {
    this.authService.authUser(this.username, this.password)
  } 

}
