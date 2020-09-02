import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

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
      experiences: this.fb.array([this.createExperienceFormGroup()]),
    });
  }

  public addExperienceFormGroup() {
    const experiences = this.experienceDetailsForm.get('experiences') as FormArray
    experiences.push(this.createExperienceFormGroup())
  }

  public removeOrClearExperience(i: number) {
    const experiences = this.experienceDetailsForm.get('experiences') as FormArray
    if (experiences.length > 1) {
      experiences.removeAt(i)
    } else {
      experiences.reset()
    }
  }

  private createExperienceFormGroup(): FormGroup {
    return new FormGroup({
      'position': new FormControl(''),
      'emptype': new FormControl(''),
      'location': new FormControl(''),
      'company': new FormControl(''),
      'duration': new FormControl(''),
      'description': new FormControl('')
    })
  }

}
