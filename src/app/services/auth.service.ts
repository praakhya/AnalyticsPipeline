import { Injectable } from '@angular/core';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticatedUser!:User 
  constructor() { }
  getUser(email:string) {
    //REST call using email. Returned user stored in authenticatedUser
    this.authenticatedUser = new User(email,"")
    return this.authenticatedUser
  }

}
