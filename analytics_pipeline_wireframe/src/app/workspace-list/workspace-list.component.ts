import { Component, Input, ViewChild } from '@angular/core';
import { Workspace } from '../model/workspace';
import { MatCardModule } from '@angular/material/card';
import { DataService } from '../services/data.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatAccordion, MatExpansionModule, matExpansionAnimations} from '@angular/material/expansion';
import { MatAccordionBase } from '@angular/material/expansion';
import { MatExpansionPanelContent } from '@angular/material/expansion';
@Component({
  selector: 'app-workspace-list',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
  ],
  animations:[],
  templateUrl: './workspace-list.component.html',
  styleUrl: './workspace-list.component.scss'
})
export class WorkspaceListComponent {
  workspaceList:Workspace[] = [];
  dataSource:Workspace[] = [];
  columns: string[] = ['Workspace name', 'Description', 'Owner'];
  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;


  panelOpenState = false;
  constructor(private dataService: DataService){}
  ngOnInit() {
    this.dataService.workspaceList.subscribe(wl=>{
      this.workspaceList = wl
      this.dataSource = wl
      console.log("In list:",this.workspaceList)
    })
  }
}
