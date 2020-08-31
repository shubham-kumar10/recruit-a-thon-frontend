import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CandidateService } from 'src/app/services/candidate.service';
import { Candidate } from 'src/app/models/candidate.model';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.scss']
})
export class PersonalFormComponent implements OnInit {

  @Input() personalDetailsForm: FormGroup;
  isOptional = true;
  isChecked = false;
  constructor(private fb: FormBuilder, private _candidate: CandidateService) { }

  ngOnInit(): void {

    this.personalDetailsForm = this.fb.group({
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

  }

  addCandidateDetails(): void {

    let candidateData: Candidate = {
      id: null,
      bio: this.personalDetailsForm.value[''],
      city: this.personalDetailsForm.value['city'],
      country: this.personalDetailsForm.value['country'],
      dateOfBirth: this.personalDetailsForm.value['dob'],
      gender: this.personalDetailsForm.value['gender'],
      profilePicture: null,
      resume: null
    }
    this._candidate.addCandidateDetails(candidateData).subscribe(
      data => {
        console.log(data);
      }
    )
  }
}
