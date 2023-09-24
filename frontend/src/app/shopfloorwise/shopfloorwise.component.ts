import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-shopfloorwise',
  templateUrl: './shopfloorwise.component.html',
  styleUrls: ['./shopfloorwise.component.css']
})
export class ShopfloorwiseComponent implements OnInit {

  constructor(private service: SharedService) { }



  ShopfloorList: any[] = [];

  shopfloor: string='';
  machineId: string='';
  category: string='';
  andon_alerts: string='';

  cardColors: string[] = [
    'burlywood',
    '#ccc',
    'rgb(133, 124, 190)',
    'rgb(195, 223, 195)',
    'rgb(202, 202, 180)'
  ];


  ngOnInit(): void {
    // this.shopfloorwiseData();
  }

  shopfloorwiseData() {
    this.service.getShopfloorwiseData().subscribe((data: any) => {
      this.ShopfloorList = data;
      // this.shopfloor = data.shopfloor;
      // this.machineId = data.machineId;
      // this.category = data.category;
      // this.andon_alerts = data.andon_alerts;
    });
  }

}
