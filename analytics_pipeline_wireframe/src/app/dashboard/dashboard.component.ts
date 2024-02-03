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
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    WorkspaceListComponent,
    MatButtonToggleModule, 
    MatIconModule,
    FormsModule,
    MatDividerModule,
    WorkspaceGridComponent,
    MatButtonModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatCardModule,
    MatInputModule,
    MatChipsModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  user!:User;
  group_value:string="list";
  workspaceName:string="";
  description:string="";
  workspaceImgUrl:string="";
  sourceUnavailable:boolean=false;
  createMode:boolean = false;

  constructor(private authService:AuthService, private router:Router, private dataService: DataService){}
  ngOnInit() {
    this.user = this.authService.getUser()
    console.log("USER:",this.user)
    this.dataService.loadWorkspaces(this.user)
    
  }
  workspacesExist() {
    return this.dataService.workspaceList.getValue().length > 0
  }
  toggleCreate() {
    this.createMode = !this.createMode
  }
  addWorkspace() {
    var ws = new Workspace()
    ws.workspaceName = this.workspaceName;
    ws.description = this.description;
    ws.ownerName = this.user.username;
    ws.coverPictureURL = this.workspaceImgUrl;
    this.clearInputs()
    this.dataService.postWorkspace(ws)
  }
  clearInputs() {
    this.workspaceName = ""
    this.description = ""
    this.workspaceImgUrl = ""
    this.createMode = false
  }


}
