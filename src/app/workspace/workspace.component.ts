import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { InsertDatasetDialogComponent } from './insert-dataset-dialog/insert-dataset-dialog.component';
import { DatasetComponent } from './dataset/dataset.component';


// https://blog.logrocket.com/data-visualization-angular-d3-js/
// https://d3js.org/d3-chord/chord
@Component({
  selector: 'app-workspace',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    DatasetComponent
  ],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.scss'
})
export class WorkspaceComponent {
  datasets: any[] = []
  constructor(public dialog: MatDialog){}
  openDialog() {
    const dialogRef = this.dialog.open(InsertDatasetDialogComponent);
    dialogRef.componentInstance.datasets.subscribe(result => {
      console.log('Got the data!', result);
      this.datasets.push({
        "name":result[0],
        "columns":result[1],
        "dataset":result[2]
      })
  });
  }

}
