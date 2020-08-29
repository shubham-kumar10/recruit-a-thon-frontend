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
      gender: ''
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ''
    });
    this.thirdFormGroup = this.fb.group({
      secondCtrl: ''
    });
    this.fourthFormGroup = this.fb.group({
      secondCtrl: ''
    });
  }

}
