import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { CandidateService } from '../services/candidate.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(private authService: AuthenticationService, public candidateService: CandidateService) { }

  firstname: string = this.authService.getUserDetails() ? this.authService.getUserDetails().firstname : 'JOHN';
  lastname: string = this.authService.getUserDetails() ? this.authService.getUserDetails().lastname : 'DOE';
  profilePicture: any = undefined;

  ngOnInit(): void {
    // this.profilePicture = this.candidateService.getCandidateDetails().profilePicture;
  }

  getImage(): void {
    this.candidateService.getProfilePicture();
  }

}
