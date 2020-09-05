import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CandidateService } from 'src/app/services/candidate.service';
import { Candidate } from 'src/app/models/candidate.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.scss']
})
export class PersonalFormComponent implements OnInit {

  @Input() personalDetailsForm: FormGroup;
  isOptional = true;
  isChecked = false;
  email = this.authService.getUserDetails()? this.authService.getUserDetails().username: null;
  constructor(private fb: FormBuilder, private candidateService: CandidateService, private authService: AuthenticationService) { }

  ngOnInit(): void {

    this.personalDetailsForm = this.fb.group({
      email: ['', Validators.required],
      dob: ['', Validators.required],
      country: ['', Validators.required],
      contact: ['', Validators.required],
      zipcode: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['', Validators.required],
      summary: ['', Validators.required],
      role: ['', Validators.required]
    });

    this.personalDetailsForm.patchValue({email: this.email});
  }

  addCandidateDetails(): void {

    const candidateData: Candidate = {
      id: null,
      bio: this.personalDetailsForm.get('summary').value,
      city: this.personalDetailsForm.get('city').value,
      country: this.personalDetailsForm.get('country').value,
      dateOfBirth: this.personalDetailsForm.get('dob').value,
      gender: this.personalDetailsForm.get('gender').value,
      profilePicture: null,
      resume: null
    };
    this.candidateService.addCandidateDetails(candidateData).subscribe(
    (data) => {
        console.log(data);
      });
  }
}
