import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {

  @Input() projectDetailsForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.projectDetailsForm = this.fb.group({
      projtitle: ['', Validators.required],
      duration: ['', Validators.required],
      description: ['', Validators.required],
      team: ['', Validators.required],
    });
  }

}
