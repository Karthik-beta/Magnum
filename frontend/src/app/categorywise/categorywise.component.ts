import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-categorywise',
  templateUrl: './categorywise.component.html',
  styleUrls: ['./categorywise.component.css']
})
export class CategorywiseComponent implements OnInit {

  constructor(private service: SharedService) { }



  ShopfloorList: any[] = [];

  shopfloor: string='';
  machineId: string='';
  category: string='';
  andon_alerts: string='';
  results: any[] = [];



  qualityItems: any[] = [];
  engineeringItems: any[] = [];
  resettingItems: any[] = [];
  electmaint: any[] = [];
  mechmaint: any[] = [];



  today_open_alerts: number = 0;
  total_open_alerts: number = 0;
  total_acknowledge_alerts: number = 0;
  total_resetting_alerts: number = 0;
  total_engineering_alerts: number = 0;
  total_quality_alerts: number = 0;
  total_mech_maint_alerts: number = 0;
  total_elect_maint_alerts: number = 0;
  total_alerts: number = 0;
  total_closed_alerts: number = 0;



  cardColors: string[] = [
    'burlywood',
    '#ccc',
    'rgb(133, 124, 190)',
    'rgb(195, 223, 195)',
    'rgb(202, 202, 180)'
  ];


  ngOnInit(): void {
    this.shopfloorwiseData();
    this.metricsData();
  }

  shopfloorwiseData() {
    this.service.getShopfloorwiseData().subscribe((data: any) => {
      // Store the original data in this.ShopfloorList
      this.ShopfloorList = data;
      this.shopfloor = data.shopfloor;
      this.machineId = data.machineId;
      this.category = data.category;
      this.andon_alerts = data.andon_alerts;

      // Filter items with category "QUALITY" and store them in qualityItems
      this.qualityItems = this.ShopfloorList.filter(item => item.category === 'QUALITY');

      // Filter items with category "ENGINEERING" and store them in engineeringItems
      this.engineeringItems = this.ShopfloorList.filter(item => item.category === 'ENGINEERING');

      // Filter items with category "RESETTING" and store them in resettingItems
      this.resettingItems = this.ShopfloorList.filter(item => item.category === 'RESETTING');

      // Filter items with category "ELECT MAINT" and store them in electmaint
      this.electmaint = this.ShopfloorList.filter(item => item.category === 'ELECTMAINT');

      // Filter items with category "MECH MAINT" and store them in mechmaint
      this.mechmaint = this.ShopfloorList.filter(item => item.category === 'MECHMAINT');
    });
  }



  metricsData() {
    this.service.getMetricsData().subscribe((data: any) => {
      this.results = data;
      this.today_open_alerts = data.today_open_alerts;
      this.total_open_alerts = data.total_open_alerts;
      this.total_acknowledge_alerts = data.total_acknowledge_alerts;
      this.total_resetting_alerts = data.total_resetting_alerts;
      this.total_engineering_alerts = data.total_engineering_alerts;
      this.total_quality_alerts = data.total_quality_alerts;
      this.total_mech_maint_alerts = data.total_mech_maint_alerts;
      this.total_elect_maint_alerts = data.total_elect_maint_alerts;
      this.total_alerts = data.total_alerts;
      this.total_closed_alerts = data.total_closed_alerts;
    });
  }



}
