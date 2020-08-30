import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  isOptional = true;
  isChecked = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this.fb.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      country: ['', Validators.required],
      contact: ['', Validators.required],
      zipcode: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['', Validators.required],
      role: ['', Validators.required]
    });
    this.secondFormGroup = this.fb.group({
      school: ['', Validators.required],
      board: ['', Validators.required],
      year: ['', Validators.required],
      percentage: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      degree: ['', Validators.required],
      stream: ['', Validators.required],
    });
    this.thirdFormGroup = this.fb.group({
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
