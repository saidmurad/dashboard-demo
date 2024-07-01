// dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { ChartDataService } from '../service/ChartData.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public chart: any;

  constructor(private chartDataService: ChartDataService) { }

  ngOnInit(): void {
    this.chartDataService.getChartData().subscribe(data => {
      this.createChart(data);
    });
  }

  createChart(data: any) {
    const labels = data.map((item: any) => item.date);
    const values = data.map((item: any) => item.value);

    this.chart = new Chart("MyChart", {
      type: 'bar', // this denotes the type of chart

      data: {
        labels: labels,
        datasets: [
          {
            label: "Medicine Consumption",
            data: values,
            backgroundColor: 'blue'
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }
}
