import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-shopfloor',
  templateUrl: './shopfloor.component.html',
  styleUrls: ['./shopfloor.component.css']
})
export class ShopfloorComponent implements OnInit {

  constructor(public service:SharedService) { }

  ShopfloorList:any=[];

  ngOnInit(): void {
    this.refreshShopfloorList();
  }

  refreshShopfloorList(){
    this.service.getShopfloorList().subscribe(data=>{
      this.ShopfloorList=data;
    });
  }

}
