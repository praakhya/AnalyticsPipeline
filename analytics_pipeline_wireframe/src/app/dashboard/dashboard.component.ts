import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { WorkspaceListComponent } from '../workspace-list/workspace-list.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Workspace } from '../model/workspace';
import {MatDividerModule} from '@angular/material/divider';
import { WorkspaceGridComponent } from '../workspace-grid/workspace-grid.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    WorkspaceListComponent,
    MatButtonToggleModule, 
    MatIconModule,
    FormsModule,
    MatDividerModule,
    WorkspaceGridComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  user!:User;
  workspaces:Workspace[]=[];
  group_value:string="list";

  constructor(private authService:AuthService, private router:Router, private dataService: DataService){}
  ngOnInit() {
    this.user = this.authService.getUser()
    this.workspaces = this.dataService.getWorkspaces(this.user)
  }

}
