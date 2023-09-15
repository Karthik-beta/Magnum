import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { TableLazyLoadEvent } from 'primeng/table';
import { MessageService, ConfirmationService, ConfirmEventType } from 'primeng/api';

@Component({
  selector: 'app-breakdowncategory',
  templateUrl: './breakdowncategory.component.html',
  styleUrls: ['./breakdowncategory.component.css']
})
export class BreakdowncategoryComponent implements OnInit{

  constructor(private service:SharedService, private messageService: MessageService, private confirmationService: ConfirmationService) { }


  ngOnInit(): void {
    this.refreshBreakdowncategoryList();
  }

  breakdowncategoryList:any=[];
  breakdowncategoryListWithoutFilter:any=[];
  ModalTitle:string="";
  ActivateAddEditBdcComp:boolean=false;
  bdc:any;



  addClick(){
    this.bdc={
      breakdownCategoryId:0,
      breakdownCategoryName:""
    }
    this.ModalTitle="Add Breakdown Category";
    this.ActivateAddEditBdcComp=true;

  }

  editClick(item: any){
    this.bdc=item;
    this.ModalTitle="Edit Breakdown Category";
    this.ActivateAddEditBdcComp=true;
  }

  // deleteClick(breakdownCategoryId: any){
  //   this.confirmationService.confirm({
  //     message: 'Are you sure that you want to perform this action?',
  //     accept: () => {
  //       this.service.deleteBreakdowncategory(breakdownCategoryId.breakdownCategoryId).subscribe(data=>{
  //         this.refreshBreakdowncategoryList();
  //         this.messageService.add({ severity: 'warn', summary: 'Success', detail: 'Deleted Successfully' });
  //       })
  //     }
  // });
  // }

  onCategoryAdded() {
    this.refreshBreakdowncategoryList();
  }


  closeClick(){
    this.ActivateAddEditBdcComp=false;
    this.refreshBreakdowncategoryList();
  }

  refreshBreakdowncategoryList(){
    this.service.getBreakdowncategoryList().subscribe(data=>{
      this.breakdowncategoryList=data;
    });
  }


  deleteClick(dataItem: { breakdownCategoryId: any }) {
    // Extract the employee_id from the log object
    const breakdownCategoryId = dataItem.breakdownCategoryId;
    // console.log('breakdownCategoryId:', breakdownCategoryId);

    // Display the confirmation dialog before proceeding with deletion
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this employee?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        // Call the deleteEmployee method from the service
        this.service.deleteBreakdowncategory(breakdownCategoryId).subscribe({
          next: (response) => {
            // Handle success response if needed
            // console.log('Employee deleted:', response);

            // Show success message
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Breakdown Category has been deleted successfully.'
            });

            // Load data
            this.refreshBreakdowncategoryList();
          },
          error: (error) => {
            // Handle error if needed
            console.error('Error deleting Breakdown Category:', error);

            // Show error message
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Failed to delete Breakdown Category.'
            });
          }
        });
      },
      reject: () => {
        // User rejected the confirmation, do nothing or handle as needed
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have Cancelled' });
        // console.log('Deletion cancelled by user.');
      }
    });
  }



}
