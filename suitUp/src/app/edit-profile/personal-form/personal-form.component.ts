import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CandidateService } from 'src/app/services/candidate.service';
import { Candidate } from 'src/app/models/candidate.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LoggedInUser } from 'src/app/models/user';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.scss']
})
export class PersonalFormComponent implements OnInit {

  @Input() personalDetailsForm: FormGroup;
  isOptional = true;
  isChecked = false;
  email = this.authService.getUserDetails() ? this.authService.getUserDetails().username : null;
  constructor(private fb: FormBuilder, private candidateService: CandidateService, private authService: AuthenticationService) { }

  ngOnInit(): void {

    this.personalDetailsForm = this.fb.group({
      email: ['', Validators.required],
      dob: ['', Validators.required],
      country: ['', Validators.required],
      contact: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['', Validators.required],
      summary: ['', Validators.required],
      role: ['', Validators.required]
    });

    this.personalDetailsForm.patchValue({ email: this.email });
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
      resume: null,
      education: [],
      project: [],
      experience: [],
      skills: [],
      applications: [],
    };

    const userData: LoggedInUser = this.authService.getUserDetails();
    userData.role = this.personalDetailsForm.get('role').value;
    userData.contactnumber = this.personalDetailsForm.get('contact').value;
    userData.username = this.personalDetailsForm.get('email').value;

    this.candidateService.setCandidateDetails(candidateData);
    this.authService.updateUseDetails(userData);
  }
}
