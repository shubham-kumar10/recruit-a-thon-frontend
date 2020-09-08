import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../services/candidate.service';
import { AuthenticationService } from '../services/authentication.service';
import { Candidate } from '../models/candidate.model';
import { LoggedInUser } from '../models/user';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PersonalFormComponent } from '../edit-profile/personal-form/personal-form.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProjectFormComponent } from '../edit-profile/project-form/project-form.component';
import { LoginComponent } from '../login/login.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private candidateService: CandidateService,
    private authService: AuthenticationService, private dialog: MatDialog) { }

  userDetails: LoggedInUser;
  candidateDetails: Candidate;
  personalDetailsForm: FormGroup;
  ngOnInit(): void {
    this.candidateService.getCandidateProfile().subscribe(
      (response) => {
        this.candidateDetails = response;
        this.candidateService.setCandidateDetails(this.candidateDetails);
      });
    this.userDetails = this.authService.getUserDetails();
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      personalDetailsForm: this.personalDetailsForm
    };
    this.dialog.open(PersonalFormComponent, dialogConfig);
  }

}
