import { Component } from '@angular/core';
import { Input } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-dataset',
  standalone: true,
  imports: [
    MatTableModule
  ],
  templateUrl: './dataset.component.html',
  styleUrl: './dataset.component.scss'
})
export class DatasetComponent {
  @Input() name:string = "";
  @Input() displayedColumns: string[] = [];
  @Input() dataSource:any[] = []
}
