import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private appService: AppService, private authService: AuthenticationService) { }
  isCollapsed = true;
  ngOnInit(): void {
  }

  toggleSidebarPin(): void {
    this.appService.toggleSidebarPin();
  }

  toggleSidebar(): void {
    this.appService.toggleSidebar();
  }

  logout(): void {
    this.authService.logout();
  }
}
