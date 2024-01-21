import { Routes } from '@angular/router';
import { LandingComponent } from '../landing/landing.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    {path:"", component:LandingComponent},
    {path:"signup", component:SignupComponent},
];
