import { Component, Input } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { Workspace } from '../../models/workspace';
import { WorkspaceTileComponent } from '../workspace-tile/workspace-tile.component';

@Component({
  selector: 'app-workspace-list',
  standalone: true,
  imports: [
    MatListModule,
    MatGridListModule,
    MatCardModule,
    WorkspaceTileComponent
  ],
  templateUrl: './workspace-list.component.html',
  styleUrl: './workspace-list.component.scss'
})
export class WorkspaceListComponent {
  @Input() viewStyle:string="list"
  @Input() workspaces:Array<Workspace> = []
}
