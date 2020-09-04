import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../services/candidate.service';
import { AuthenticationService } from '../services/authentication.service';
import { Candidate } from '../models/candidate.model';
import { LoggedInUser } from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private candidateService: CandidateService, private authService: AuthenticationService) { }

  userDetails: LoggedInUser;
  candidateDetails: Candidate;

  ngOnInit(): void {
    this.candidateService.getCandidateProfile().subscribe(
      (response) => {
        this.candidateDetails = response;
        this.candidateService.setCandidateDetails(this.candidateDetails);
      });
    this.userDetails = this.authService.getUserDetails();
  }

}
