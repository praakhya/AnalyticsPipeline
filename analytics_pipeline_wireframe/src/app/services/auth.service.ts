import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  initUser(user: User) {
    localStorage.setItem("user", JSON.stringify(user));
  }
  getUser() {
    return JSON.parse(localStorage.getItem("user")!) as User;
  }
  isLoggedIn() {
    if (localStorage.getItem("user") === null) {
      return false
    }
    return true
  }
  logout() {
    localStorage.removeItem("user")
    window.location.reload();
  }
}
