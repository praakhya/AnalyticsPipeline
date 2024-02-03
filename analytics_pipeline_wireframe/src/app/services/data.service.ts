import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Workspace } from '../model/workspace';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { urlTree, makeUrl } from '../../../constants';
import { HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  workspaceList:BehaviorSubject<Workspace[]>; 
  constructor(private httpClient:HttpClient) {
    this.workspaceList = new BehaviorSubject<Workspace[]>([])
  }
  loadWorkspaces(user:User) {
    var url = makeUrl([urlTree.base.v1,urlTree.users.workspaces,user.username])
    this.httpClient.get<Array<Workspace>>(url).subscribe({
      next: (workspaces)=>{
        this.workspaceList.next(workspaces)
      },
      error: (err)=>{
        throw new HttpErrorResponse(err)
      }
    })
  }
  postWorkspace(workspace:Workspace) {
    console.log("In post:",workspace)
    var url = makeUrl([urlTree.base.v1,urlTree.workspace.base])
    this.httpClient.post<Workspace>(
      url,
      workspace,
      ).subscribe({
      next: (workspace)=>{
        var tempList = this.workspaceList.getValue()
        tempList.push(workspace)
        this.workspaceList.next(tempList)
        
      },
      error: (err)=>{
        throw new HttpErrorResponse(err)
      }
    })
    //get workspaces
  }
}
