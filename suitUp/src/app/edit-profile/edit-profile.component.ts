import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Candidate } from '../models/candidate.model';

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

  constructor() { }

  ngOnInit(): void {
  }

}
