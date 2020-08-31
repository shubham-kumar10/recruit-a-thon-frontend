import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CandidateService } from '../services/candidate.service';
import { Candidate } from '../models/candidate.model';
import { PersonalFormComponent } from '../edit-profile/personal-form/personal-form.component';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  personalDetailsForm: FormGroup;
  educationDetailsForm: FormGroup;
  experienceDetailsForm: FormGroup;
  fourthFormGroup: FormGroup;
  isOptional = true;
  isChecked = false;
  constructor(private fb: FormBuilder, private _candidate: CandidateService) { }

  ngOnInit(): void {
    
    this.experienceDetailsForm = this.fb.group({
      position: ['', Validators.required],
      emptype: ['', Validators.required],
      location: ['', Validators.required],
      company: ['', Validators.required],
      duration: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.fourthFormGroup = this.fb.group({
      projtitle: ['', Validators.required],
      duration: ['', Validators.required],
      description: ['', Validators.required],
      team: ['', Validators.required],
    });
  }
}
