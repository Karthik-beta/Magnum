import { Component } from '@angular/core';
import { SharedService } from './shared.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'frontend';

  isLoginPage: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check the current route's path
        const currentRoute = this.activatedRoute.firstChild;
        if (currentRoute) {
          this.isLoginPage = currentRoute.snapshot.routeConfig?.path === 'login';
        }
      }
    });
  }

}
