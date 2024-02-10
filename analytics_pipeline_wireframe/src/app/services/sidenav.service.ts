import { Injectable, WritableSignal, signal } from '@angular/core';
import { Workspace } from '../model/workspace';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  currentWorkspace!:BehaviorSubject<Workspace>
  currentWorkspaceSignal:WritableSignal<Workspace|undefined> = signal(undefined)
  currentStyleSignal:WritableSignal<any> = signal({
    height:"0",
    "display":"none"
  })
  currentCreateStyleSignal:WritableSignal<any> = signal("0")
  constructor() { }
  setWorkspace(ws:Workspace|undefined) {
    console.log("In set workspace: ")
    //this.currentWorkspace.next(ws)
    this.currentWorkspaceSignal.set(ws)
    if (ws!=undefined) {
      this.currentStyleSignal.set({
        
        maxHeight:"50vh",
        "display":"flex"
      })
    }
    else {
      this.currentStyleSignal.set({
        maxHeight:"0",
        "display":"none"
      })
    }
    console.log(this.currentWorkspaceSignal(), this.currentStyleSignal())
  }
  getWorkpsaceSignal() {
    return this.currentWorkspaceSignal
  }
  getStyleSignal() {
    return this.currentStyleSignal
  }
  getCreateStyleSignal() {
    return this.currentCreateStyleSignal
  }

}

