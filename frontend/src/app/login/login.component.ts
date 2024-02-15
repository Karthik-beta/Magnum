import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SharedService } from '../shared.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observer } from 'rxjs';
// import {AuthService} from '../auth.service';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formData = {
    username: '',
    password: ''
  };


  constructor(private http: HttpClient, private router: Router, private sharedService: SharedService, private messageService: MessageService) {}


  ngOnInit(): void {
  //   this.router.events.subscribe((event) => {
  //     if (event instanceof NavigationEnd) {
  //       // Determine if the user is on the login page
  //       this.isLoginPage = this.router.url.includes('/login');
  //       this.sharedService.setIsLoginPage(this.isLoginPage);
  //     }
  //   });

  //   // Subscribe to changes in isLoginPage
  //   this.sharedService.isLoginPage$.subscribe((value) => {
  //     this.isLoginPage = value;
  //   });
  }



  onLogin() {
    // Send a POST request to your Django backend for authentication
    const apiUrl = 'http://163.157.19.175:8000/api/login/';

    const observer: Observer<any> = {
      next: (response) => {
        // Handle successful login, e.g., redirect to a different page
        console.log('Login successful', response);
        // Redirect to the desired URL
        this.router.navigate(['/alert']);
      },
      error: (error) => {
        // Handle login error, display an error message to the user
        console.error('Login error', error);
      },
      complete: () => {
        // Optional: Handle any cleanup or completion logic
      }
    };

    this.http.post(apiUrl, this.formData).subscribe(observer);
  }

  username!: string;

  password!: string;

  navigateIfMatch(): void {
    switch (true) {
        case this.username === 'skf' && this.password === 'skf123':
            // Navigate to /dashboard if username and password are both 'hamilton'
            this.router.navigate(['/alert']);
            break;

        case this.username === 'admin' && this.password === 'admin123':
            // Navigate to another route if username and password match another combination
            this.router.navigate(['/alert']);
            break;

        case this.username === 'superuser' && this.password === 'superuser':
            // Navigate to another route if username and password match another combination
            this.router.navigate(['/alert']);
            break;

        default:
            // Handle the case when none of the conditions are met
            console.log('Invalid username or password');
            this.messageService.add({ severity: 'error', summary: 'Login Failed', detail: 'Invalid username or password' });
            // Optionally, you can navigate to an error route or show a message to the user.
            break;
    }
}

}
