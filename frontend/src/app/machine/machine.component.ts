import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})
export class MachineComponent implements OnInit {

  constructor(public service:SharedService) { }

  MachineList:any=[];

  ngOnInit(): void {
    this.refreshMachineList();
  }

  refreshMachineList(){
    this.service.getMachineList().subscribe(data=>{
      this.MachineList=data;
    });
  }

}
