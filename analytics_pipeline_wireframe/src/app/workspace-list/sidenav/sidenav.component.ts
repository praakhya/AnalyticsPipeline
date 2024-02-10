import { Component, WritableSignal, signal } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';
import { Workspace } from '../../model/workspace';
import { ViewChild, ElementRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  workspace!:Workspace
  workspaceSignal:WritableSignal<Workspace|undefined>
  styleSignal:WritableSignal<any>
  @ViewChild('sidenav') sidenav!: ElementRef;

  constructor(private navService:SidenavService) {
    this.workspaceSignal = this.navService.getWorkpsaceSignal()
    this.styleSignal = this.navService.getStyleSignal()
  }
  
  closeNav() {
    this.navService.setWorkspace(undefined)

  }
  canBeOpened() {
    if (this.workspaceSignal()) {
      console.log("Can be opened")
      return true
    }
    console.log("Cannot be opened")
    return false
  }
}
