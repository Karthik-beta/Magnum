import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.css']
})
export class ShiftComponent implements OnInit {

  constructor(private service:SharedService) { }

  ShiftList:any=[];
  ModalTitle:string="";
  ActivateAddEditShiftComp:boolean=false;
  shift:any;

  ngOnInit(): void {
    this.refreshShiftList();
  }

  addClick(){
    this.shift={
      shiftId:0,
      shiftName:"",
      shiftStartTime:"",
      shiftEndTime:""
    }
    this.ModalTitle="Add Shift";
    this.ActivateAddEditShiftComp=true;

  }

  editClick(item: any){
    this.shift=item;
    this.ModalTitle="Edit Shift";
    this.ActivateAddEditShiftComp=true;
  }

  // deleteClick(shiftId: any){
  //   if(confirm('Are you sure??')){
  //     this.service.deleteShift(shiftId.shiftId).subscribe(data=>{
  //       this.refreshShiftList();
  //     })
  //   }
  // }

  closeClick(){
    this.ActivateAddEditShiftComp=false;
    this.refreshShiftList();
  }

  refreshShiftList(){
    this.service.getShiftList().subscribe(data=>{
      this.ShiftList=data;
    });
  }



}
