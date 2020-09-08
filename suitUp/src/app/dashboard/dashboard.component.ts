import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../services/candidate.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private candidateService: CandidateService) { }
  selectedFile: File;
  ngOnInit(): void {

  }


  public onFileChanged(event): void {
    this.selectedFile = event.target.files[0];
  }

  onUploadClick(): void {
    console.log(this.selectedFile);
    const uploadData = new FormData();
    uploadData.append('imageFile', this.selectedFile);
    this.candidateService.uploadFile(uploadData).subscribe(
      response => {
        console.log(response);
        this.candidateService.profilePicture = 'data:image/jpeg;base64,' + response.profilePicture;
      }
    );
  }

}
