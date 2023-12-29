import { Component } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-testing',
  standalone: true,
  imports: [],
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.scss'
})
export class TestingComponent {
  figure:any = d3.select("#frame") //select html tag with id = frame
  ngOnInit() {
    console.log(this.figure)
  }
  do() {
    console.log(this.figure.text())
  }
}
