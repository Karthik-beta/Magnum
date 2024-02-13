import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api'
import { ButtonModule } from 'primeng/button';
import { MenuItem, MessageService, ConfirmationService, ConfirmEventType } from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @ViewChild('profileMenu') profileMenu: any;
  @ViewChild('settingsMenu') settingsMenu: any;
  @ViewChild('managementMenu') managementMenu: any;

  profile_items: MenuItem[] | undefined;
  settings_items: MenuItem[] | undefined;
  management_items: MenuItem[] | undefined;

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
    private router: Router,
    private http: HttpClient) {}




  ngOnInit() {
      this.profile_items = [
          {
              label: 'Options',
              items: [
                  {
                      label: 'Profile',
                      icon: 'pi pi-user',
                      command: () => {
                          this.update();
                      }
                  },
                  {
                      label: 'Change Password',
                      icon: 'pi pi-lock',
                      command: () => {
                          this.delete();
                      }
                  },
                  {
                      label: 'Log Out',
                      icon: 'pi pi-sign-out',
                      command: () => {
                          // this.delete();
                          this.confirm();
                      }
                  }
              ]
          }
      ];
      this.settings_items = [
          {
              label: 'Settings',
              items: [
                  {
                      label: 'Configuration',
                      icon: 'pi pi-server',
                      routerLink: ['/conf']
                  },
                  {
                      label: 'Master Data',
                      icon: 'pi pi-id-card',
                      routerLink: ['/employee']
                  },
                  {
                      label: 'Attendance Rules',
                      icon: 'pi pi-clock',
                      command: () => {
                          this.delete();
                      }
                  }
                ]
              }
      ];
      this.management_items = [
          {
              // label: 'Management',
              items: [
                  {
                      label: 'Manual Punch Management',
                      icon: 'pi pi-clock',
                      routerLink: ['/employee'],
                  },
                  {
                      label: 'Leave Management',
                      icon: 'pi pi-calendar',
                  },
                  {
                      label: 'Compensatory Off Management',
                      icon: 'pi pi-calendar-plus',
                  },
                  {
                      label: 'On Duty Management',
                      icon: 'pi pi-calendar-minus',
                  },
                  {
                      label: 'Gate Pass Management',
                      icon: 'pi pi-id-card',
                  },
                  {
                      label: 'Holiday Management',
                      icon: 'pi pi-calendar-times',
                  },
                  {
                      label: 'Shift Management',
                      icon: 'pi pi-clock',
                  },
              ]
            }
              ];
  }

  update() {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
  }

  delete() {
      this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
  }

  // confirm() {
  //   this.confirmationService.confirm({
  //       message: 'Are you sure that you want to Logout?',
  //       header: 'Confirmation',
  //       icon: 'pi pi-exclamation-triangle',
  //       accept: () => {
  //           this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have Successfully Logged Out' });
  //       },
  //       reject: () => {
  //           this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have Cancelled' });
  //       }
  //   });


  //   reject: () => {
  //     this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have Cancelled' });
  //   }

  confirm() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to Logout?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.logout(); // Call the logout function here
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have Cancelled' });
      }
    });
  }

  private logout() {
    // Make an HTTP POST request to your logout endpoint
    this.http.post('http://163.157.19.175:8000/api/logout/', {}).subscribe({
      next: () => {
        // Clear session/token (implement your logic here)

        // Display a logout message
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have Successfully Logged Out' });

        // Route to the login page
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Logout Error:', error);
        // Handle any errors that occur during logout
        // You can display an error message or implement custom error handling here
      },
    });
  }








}
