import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  firstname: string = this.authService.getUserDetails() ? this.authService.getUserDetails().firstname : 'JOHN';
  lastname: string = this.authService.getUserDetails() ? this.authService.getUserDetails().lastname : 'DOE';

  ngOnInit(): void {

  }

}
