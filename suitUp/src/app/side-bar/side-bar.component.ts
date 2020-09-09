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

  constructor (private authService: AuthenticationService, public candidateService: CandidateService,
    private dialog: MatDialog) { }

  firstname: string = this.authService.getUserDetails() ? this.authService.getUserDetails().firstname : 'JOHN';
  lastname: string = this.authService.getUserDetails() ? this.authService.getUserDetails().lastname : 'DOE';

  ngOnInit(): void {

  }

  changePicture(): void {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(UploadFileComponent, dialogConfig);
  }


}
