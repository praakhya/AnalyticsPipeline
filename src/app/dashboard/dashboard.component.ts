import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { Workspace } from '../models/workspace';
import { User } from '../models/user';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { WorkspaceListComponent } from './workspace-list/workspace-list.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    WorkspaceListComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  viewStyle: string = "list";
  collection: string = "Recent Workspaces";
  workspaces:Array<Workspace> = [];
  user!:User
  recentRange:number = 5;
  constructor(private authService: AuthService, private dataService:DataService) {}
  ngOnInit() {
    this.user = this.authService.getUser("xijaw67542@vasteron.com")
    this.workspaces = this.dataService.getWorkspaces(this.user.email)
    for (var w of this.workspaces) {
      console.log(typeof(w), w.name, w.cover, w.id,w)
    }
  }
}
