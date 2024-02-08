import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { User } from '../model/user';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { baseUrl } from '../../../constants';
import { Router } from '@angular/router';
import { urlTree, makeUrl } from '../../../constants';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authError: BehaviorSubject<string> = new BehaviorSubject("")
  user:WritableSignal<User|undefined> = signal(undefined)
  constructor(private httpClient: HttpClient, private router: Router) { 
    var storedUser = this.getUser()
    if (storedUser!=undefined && storedUser!=null) {
      this.user.set(storedUser)
    }
  }
  initUser(user: User) {
    this.user.set(user)
    localStorage.setItem("user", JSON.stringify(user));
  }
  getUserSignal() {
    return this.user
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
    this.user.set(undefined);
    window.location.reload();
  }
  signup(user: User) {
    let headers = new HttpHeaders({
      headers: [
        "Content-Type: application/json;"
      ]
    });
    this.httpClient.post(
      makeUrl([urlTree.base.v1, urlTree.users.base]),
      user,
      {
        headers: headers
      }
    ).subscribe({
      next: (response) => {
        this.authError.next("User Creation Successful!")
        console.log("Login successful", response)
        alert(this.authError.getValue())
        this.authError.next("")
        this.router.navigate(["login"])
      },
      error: (err) => {
        throw new Error(err)
      }
    });
  }
authUser(username: string, password: string) {
  const authUrl = "/v1/auth"
  const body = {
    "username": username,
    "password": password
  }
  let headers = new HttpHeaders({
    headers: [
      "Content-Type: application/json; charset=utf-8"
    ]
  });
  this.httpClient.post(
    baseUrl + authUrl,
    body,
    {
      headers: headers
    }
  ).subscribe({
    next: (response) => {
      this.initUser(response as User)
      console.log("Login successful", this.getUser())
      this.router.navigate(["dashboard"])

    },
    error: (err) => {
      if (err.status == 403 && err.error == null) {
        this.authError.next("The user " + username + " was not found.")
        throw new Error("The user " + username + " was not found.")
      }
      else {
        var httpErr = err.error as HttpErrorResponse
        console.log(err)
        this.authError.next(httpErr.message)
        throw new Error(httpErr.message)
      }
    }
  });
}}
