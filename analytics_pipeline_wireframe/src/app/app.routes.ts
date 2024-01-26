import { Routes } from '@angular/router';
import { LandingComponent } from '../landing/landing.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { loginGuard } from './guards/login.guard';
export const routes: Routes = [
    {path:"", component:LandingComponent},
    {path:"signup", component:SignupComponent},
    {path:"login", component:LoginComponent},
    {path: "dashboard", component:DashboardComponent, canActivate:[loginGuard]}
];
