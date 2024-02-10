import { Component, Input } from '@angular/core';
import { Workspace } from '../../model/workspace';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ElementRef, ViewChild } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-workspace-list-item',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule
  ],
  animations:[],
  templateUrl: './workspace-list-item.component.html',
  styleUrl: './workspace-list-item.component.scss'
})
export class WorkspaceListItemComponent {
  panelOpenState = false;
  @Input() workspace!:Workspace;
  constructor(private navService:SidenavService) {}
  openNav() {
    console.log("In open nav for ", this.workspace.workspaceName)
    this.navService.setWorkspace(this.workspace)

  }

}
