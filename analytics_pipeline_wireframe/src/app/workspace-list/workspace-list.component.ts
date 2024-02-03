import { Component, Input } from '@angular/core';
import { Workspace } from '../model/workspace';
import { MatCardModule } from '@angular/material/card';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-workspace-list',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './workspace-list.component.html',
  styleUrl: './workspace-list.component.scss'
})
export class WorkspaceListComponent {
  workspaceList:Workspace[] = [];
  constructor(private dataService: DataService){}
  ngOnInit() {
    this.dataService.workspaceList.subscribe(wl=>{
      this.workspaceList = wl
      console.log("In list:",this.workspaceList)
    })
  }
}
