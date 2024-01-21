import { Component, Output } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Data } from '../../models/data';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-insert-dataset-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
  templateUrl: './insert-dataset-dialog.component.html',
  styleUrl: './insert-dataset-dialog.component.scss'
})
export class InsertDatasetDialogComponent {
  @Output() datasets = new EventEmitter<any>();
  header:any[] = []
  uploadedDataset:any = null
  name : string = '';
  constructor(private dataService: DataService, private http: HttpClient) {}
  valuechange(event:any) {
    console.log(this.name);
  }
  parseCSV(csvText:string) {
    var table:any[] = []
    table = csvText.split("\n")
    console.log("table: ",table)
    for (var word of table[0].split(",")) {
      if (word)
        this.header.push(word)
    }
    var objectList:any[] = []
    for (var i=1; i<table.length; ++i) {
      var row:any[] = table[i].split(",")
      var obj:any = {}
      for (var j=0; j<this.header.length; ++j) {
        obj[this.header[j]]= row[j]
      }
      objectList.push(obj)
      }
      return objectList
    }
  
  changeListener(event:any) {
    var files:FileList = event.target.files
    console.log(files);
    if (files && files.length > 0) {
      let file: File|null = files.item(0);
      console.log(file!.name);
      console.log(file!.size);
      console.log(file!.type);
      let reader: FileReader = new FileReader();
      reader.readAsText(file!);
      reader.onload = (e) => {
        let csv: string = reader.result as string;
        this.uploadedDataset = this.parseCSV(csv);
      }
    }

  }
  uploadDataset() {
    this.datasets.emit([this.name,this.header,this.uploadedDataset])
    this.postData(this.name,this.uploadedDataset).subscribe(data=>{
      console.log(data)
    })
    this.uploadedDataset=null;
    this.header=[];
  }
  postData(title:string, data:any): Observable<Data>{
    const sendingData = {
      "title":title,
      "data":data
    } 
    var sendHeaders:HttpHeaders = new HttpHeaders()
    sendHeaders.set("Content-Type", "application/json")
    return this.http.post<Data>('/api/data', sendingData,{
      headers: sendHeaders
    })
  }
  
}
