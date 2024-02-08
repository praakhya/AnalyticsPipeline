import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../app/services/auth.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  constructor(private authService: AuthService) {}
  appName:string = "Analytics Pipeline"
  dataSources:any = [
    {
      name: "MongoDB",
      url: "./assets/logos/mongodb.png"
    },
    {
      name: "MySQL",
      url: "./assets/logos/mysql.png"
    },
    {
      name: "Neo4j",
      url: "./assets/logos/neo4j.png"
    },
    {
      name: "PostgreSQL",
      url: "./assets/logos/postgresql.png"
    }
  ]
  isLoggedIn() {
    return this.authService.isLoggedIn()
  }
}
