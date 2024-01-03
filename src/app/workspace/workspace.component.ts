import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { InsertDatasetDialogComponent } from './insert-dataset-dialog/insert-dataset-dialog.component';
import { DatasetComponent } from './dataset/dataset.component';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { DatasetOptionsBottomSheetComponent } from './dataset-options-bottom-sheet/dataset-options-bottom-sheet.component';

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
    DatasetComponent,
    MatBottomSheetModule
  ],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.scss'
})
export class WorkspaceComponent {
  datasets: any[] = []
  constructor(private _bottomSheet: MatBottomSheet){}

  openBottomSheet(): void {

    const bottomSheetRef = this._bottomSheet.open(DatasetOptionsBottomSheetComponent);
    bottomSheetRef.afterDismissed().subscribe((data)=>{
      this.datasets.push(data)

    })
  }
  

}
