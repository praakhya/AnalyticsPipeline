import { Component } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { InsertDatasetDialogComponent } from '../insert-dataset-dialog/insert-dataset-dialog.component';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-dataset-options-bottom-sheet',
  standalone: true,
  imports: [
    MatBottomSheetModule,
    MatListModule,
    MatButtonModule
  ],
  templateUrl: './dataset-options-bottom-sheet.component.html',
  styleUrl: './dataset-options-bottom-sheet.component.scss'
})
export class DatasetOptionsBottomSheetComponent {
  @Output() datasets = new EventEmitter<any>();

  constructor(public dialog: MatDialog, private _bottomSheetRef: MatBottomSheetRef<DatasetOptionsBottomSheetComponent>) { }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
  openDialog() {
    const dialogRef = this.dialog.open(InsertDatasetDialogComponent);
    dialogRef.componentInstance.datasets.subscribe(result => {
      console.log('Got the data!', result);
      this.datasets.emit(result)
    });
  }
}