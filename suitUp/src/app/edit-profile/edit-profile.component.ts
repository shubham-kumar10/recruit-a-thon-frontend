import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Candidate } from '../models/candidate.model';
import { CandidateService } from '../services/candidate.service';

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
  isOptional = true;
  isChecked = false;

  constructor(private candidateService: CandidateService) { }

  ngOnInit(): void {
  }

  addCandidateDetails(): void {
    this.candidateService.addCandidateDetails(this.candidateService.getCandidatedetails()).subscribe(
      (data) => { console.log(data); });

  }

}
