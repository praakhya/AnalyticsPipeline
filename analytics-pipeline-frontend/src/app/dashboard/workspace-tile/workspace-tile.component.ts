import { Component, Input } from '@angular/core';
import { Workspace } from '../../models/workspace';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-workspace-tile',
  standalone: true,
  imports: [
    MatListModule,
    MatCardModule
  ],
  templateUrl: './workspace-tile.component.html',
  styleUrl: './workspace-tile.component.scss'
})
export class WorkspaceTileComponent {
  @Input() workspace!:Workspace
  @Input() viewStyle:string="list"
}
