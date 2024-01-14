import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-testing',
  standalone: true,
  imports: [
    ChartModule
  ],
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.scss'
})
export class TestingComponent {
    basicData:any = { 
      labels: ['January', 'February', 'March', 
               'April', 'May', 'June'], 
      datasets: [ 
          { 
              label: '2020', 
              data: [65, 59, 80, 81, 56, 55], 
              tension: 0.4, 
              backgroundColor: [ 
                  '#FF6371', 
                  '#36A2EB', 
                  '#FFCE45', 
                  '#ff6200', 
                  '#00ffbf', 
                  '#9900ff', 
              ], 
              borderColor: '#42A5F5',
              indexAxis: 'x', //specified for horizontal or vertical
          }, 
      ], 
  }; 
  basicOptions = { 
      title: { 
          display: true, 
          text: 'Article Views', 
          fontSize: 32, 
          position: 'top', 
      }, 
  }
}
