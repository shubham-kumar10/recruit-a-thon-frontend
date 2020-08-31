import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.scss']
})
export class EducationFormComponent implements OnInit {

  @Input() educationDetailsForm:FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.educationDetailsForm = this.fb.group({
      school: ['', Validators.required],
      board: ['', Validators.required],
      year: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      degree: ['', Validators.required],
      stream: ['', Validators.required],
    });
  }

}
