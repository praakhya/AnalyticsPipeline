import { Component, Input } from '@angular/core';
import { Workspace } from '../../model/workspace';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
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
  
  panelContentClasses:string[] = [
    "panel-content"
  ];
  togglePanelContent(visibility:boolean) {
    this.panelOpenState = visibility
    
    var showIndex = this.panelContentClasses.indexOf("showing");
    if (showIndex!=-1) {
      this.panelContentClasses.splice(showIndex, 1);
    }
    else {
      this.panelContentClasses.push("showing")
    }
    console.log("After toggling: ",this.panelOpenState, this.panelContentClasses)
  }
  classListGetter() {
    return this.panelContentClasses.join(' ');
  }
  getStyle() {
    if (this.panelOpenState && this.workspace.coverPictureURL) {
        return  {
          "background-image": `url(${this.workspace.coverPictureURL})`,
          "background-size": "cover",
        }
      }
    else return ""
  }
  getClass() {
    if (this.panelOpenState && this.workspace.coverPictureURL) {
        this.panelContentClasses.push("with-image")
      }
    else {
      this.panelContentClasses = this.panelContentClasses.filter(u=>{u=="with-image"});
      
    }
    return this.classListGetter()
  }

}
