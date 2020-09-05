import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Candidate } from '../models/candidate.model';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  personalDetailsForm: FormGroup;
  educationDetailsForm: FormGroup;
  experienceDetailsForm: FormGroup;
  additionalDetailsForm: FormGroup;
  data: Candidate;
  isOptional = true;
  isChecked = false;
  
  constructor(private candidateService: CandidateService) { }

  ngOnInit(): void {
    this.data = this.candidateService.getCandidatedetails();
  }

}
