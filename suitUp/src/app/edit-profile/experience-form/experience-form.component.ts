import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.scss']
})
export class ExperienceFormComponent implements OnInit {

  @Input() experienceDetailsForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.experienceDetailsForm = this.fb.group({
      position: ['', Validators.required],
      emptype: ['', Validators.required],
      location: ['', Validators.required],
      company: ['', Validators.required],
      duration: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

}
