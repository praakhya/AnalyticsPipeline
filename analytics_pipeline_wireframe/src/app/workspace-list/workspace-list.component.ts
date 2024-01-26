import { Component, Input } from '@angular/core';
import { Workspace } from '../model/workspace';
import { MatCardModule } from '@angular/material/card';
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
  @Input() workspaceList:Workspace[] = [];
}
