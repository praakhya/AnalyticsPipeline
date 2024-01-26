import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from '../app/footer/footer.component';
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    FooterComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
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
}
