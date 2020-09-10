import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { CandidateService } from '../services/candidate.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UploadFileComponent } from '../upload-file/upload-file.component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(private authService: AuthenticationService, public candidateService: CandidateService,
    private dialog: MatDialog) { }

  firstname: string;
  lastname: string;
  headLine: string;
  ngOnInit(): void {
    this.detailsInit();
  }

  changePicture(): void {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(UploadFileComponent, dialogConfig);
  }

  detailsInit(): void {
    if (this.authService.getUserDetails()) {
      this.firstname = this.authService.getUserDetails().firstname;
      this.lastname = this.authService.getUserDetails().lastname;
    }
    if (this.candidateService.getCandidateDetails()) {
      this.headLine = this.candidateService.getCandidateDetails().experience[0].designation;
    } /*else if (this.authService.getUserDetails().role) {
      this.headLine = this.authService.getUserDetails().role;
    } */else {
      this.headLine = null;
    }
  }

}
