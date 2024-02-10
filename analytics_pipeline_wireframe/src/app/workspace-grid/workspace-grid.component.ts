import { Component, Input } from '@angular/core';
import { Workspace } from '../model/workspace';
import { MatCardModule } from '@angular/material/card';
import { DataService } from '../services/data.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-workspace-grid',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatChipsModule
  ],
  templateUrl: './workspace-grid.component.html',
  styleUrl: './workspace-grid.component.scss'
})
export class WorkspaceGridComponent {
  workspaceList:Workspace[] = [];
  constructor(private dataService: DataService){}
  ngOnInit() {
    this.dataService.workspaceList.subscribe(wl=>{
      this.workspaceList = wl
    })
  }

}
