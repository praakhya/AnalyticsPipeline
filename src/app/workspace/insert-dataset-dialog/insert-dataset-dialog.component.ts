import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { csv } from 'd3';
@Component({
  selector: 'app-insert-dataset-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './insert-dataset-dialog.component.html',
  styleUrl: './insert-dataset-dialog.component.scss'
})
export class InsertDatasetDialogComponent {
  datasets:any[] = []
  uploadedDataset:any = null
  parseCSV(csvText:string) {
    var table:any[] = []
    table = csvText.split("\n")
    var header:any[] = []
    for (var word of csvText.split(",")) {
      header.push(word)
    }
    var objectList:any[] = []
    for (var i=1; i<table.length; ++i) {
      var row:any[] = table[i].split(",")
      var obj:any = {}
      for (var j=0; j<header.length; ++j) {
        obj[header[j]]= row[j]
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
    this.datasets.push(this.uploadedDataset)
    this.uploadedDataset=null
  }
}
