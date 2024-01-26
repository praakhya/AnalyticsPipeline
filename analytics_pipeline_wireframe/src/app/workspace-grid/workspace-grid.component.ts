import { Component, Input } from '@angular/core';
import { Workspace } from '../model/workspace';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-workspace-grid',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './workspace-grid.component.html',
  styleUrl: './workspace-grid.component.scss'
})
export class WorkspaceGridComponent {
  @Input() workspaceList:Workspace[] = [];

}
