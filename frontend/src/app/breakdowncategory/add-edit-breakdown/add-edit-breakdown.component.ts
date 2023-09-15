import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { MessageService, ConfirmationService, ConfirmEventType } from 'primeng/api';

@Component({
  selector: 'app-add-edit-breakdown',
  templateUrl: './add-edit-breakdown.component.html',
  styleUrls: ['./add-edit-breakdown.component.css']
})
export class AddEditBreakdownComponent implements OnInit {

  constructor(private service:SharedService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  @Input() bdc:any;
  @Output() CategoryAdded: EventEmitter<void> = new EventEmitter<void>();
  breakdownCategoryId!:number;
  breakdownCategoryName:string='';

  ngOnInit(): void {
    this.breakdownCategoryId=this.bdc.breakdownCategoryId;
    this.breakdownCategoryName=this.bdc.breakdownCategoryName;
  }

  addBreakdowncategory(){

  const val = {
    breakdownCategoryId: this.breakdownCategoryId,
    breakdownCategoryName: this.breakdownCategoryName,
    // Add other properties as needed
  };

  // Call the service method to update employee data
  this.service.addBreakdowncategory(val).subscribe({
    next: (response) => {
      // Handle success response if needed
      // console.log('Employee data updated:', response);

      // Show success message
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Successfully Added New Breakdown Category'
      });

      // Programmatically trigger the Close button
      const closeButton = document.getElementById('closeButton') as HTMLButtonElement;
      if (closeButton) {
        closeButton.click();
      }

       // Emit event to notify parent component
       this.CategoryAdded.emit();

    },
    error: (error) => {
      // Handle error if needed
      // console.error('Error updating employee data:', error);

      // Show error message
      this.messageService.add({ severity: 'warn', summary: 'Failed', detail: 'Failed to Add Breakdown Category' });
    }
  });
}

  updateBreakdowncategory(){
    var val = {
      breakdownCategoryId:this.breakdownCategoryId,
      breakdownCategoryName:this.breakdownCategoryName
    };
    this.service.updateBreakdowncategory(val).subscribe ({
    next: (response) => {
      // Handle success response if needed
      // console.log('Employee updated:', response);

      // Show success message
       this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Successfully Updated Breakdown Category Details'
      });

      // Programmatically trigger the Close button
      const closeButton = document.getElementById('closeButton') as HTMLButtonElement;
      if (closeButton) {
        closeButton.click();
      }

      // Emit event to notify parent component
      this.CategoryAdded.emit();


      },
      error: (error) => {
        // Handle error if needed
        // console.error('Error updating employee:', error);

        // Show error message
        this.messageService.add({ severity: 'warn', summary: 'Failed', detail: 'Failed to Update Breakdown Category Details' });

      }
    });
  }

  deleteEmployee() {
    this.service.deleteBreakdowncategory(this.breakdownCategoryId).subscribe({
      next: (response) => {
        // Handle success response if needed
        console.log('Employee deleted:', response);
      },
      error: (error) => {
        // Handle error if needed
        console.error('Error deleting employee:', error);
      }
    });
  }

}
