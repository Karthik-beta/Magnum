import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../shared.service';
import { ApexChart, ApexDataLabels, ApexNonAxisChartSeries, ApexTitleSubtitle } from 'ng-apexcharts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service: SharedService) { }

  andonList: any[] = [];

  ngOnInit(): void {
      this.refreshAndList();
  }

  refreshAndList() {
    this.service.getAndList().subscribe(data => {
      this.andonList = data;
    });
  }





  chartSeries2: ApexNonAxisChartSeries = [6,5,1,1,1,1,1];

  chartDetails2: ApexChart = {
  type: 'pie',
  toolbar: {
    show: true
  }
};



  chartLabels2 = ["Running", "Breakdown", "RESETTING", "ENGINEERING", "ELECT MAINT", "QUALITY", "MECH MAINT"];

  chartTitle2: ApexTitleSubtitle = {
    text: 'Daily Breakdown Analysis',
    align: 'left'
  };

  chartDataLabels2: ApexDataLabels = {
    enabled: true
  };



}
