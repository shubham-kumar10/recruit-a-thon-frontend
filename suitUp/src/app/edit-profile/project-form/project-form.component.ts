import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder } from '@angular/forms';

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
      projects: this.fb.array([this.createProjectFormGroup()]),
      skills: this.fb.array([this.createSkillFormGroup()])
    });
  }

  public addSkillFormGroup() {
    const skills = this.projectDetailsForm.get('skills') as FormArray;
    skills.push(this.createSkillFormGroup());
  }

  public removeOrClearSkill(i: number) {
    const skills = this.projectDetailsForm.get('skills') as FormArray;
    if (skills.length > 1) {
      skills.removeAt(i);
    } else {
      skills.reset();
    }
  }

  private createSkillFormGroup(): FormGroup {
    return new FormGroup({
      skillz: new FormControl(''),
      rating: new FormControl(''),
    });
  }

  public addProjectFormGroup() {
    const projects = this.projectDetailsForm.get('projects') as FormArray;
    projects.push(this.createProjectFormGroup());
  }

  public removeOrClearProject(i: number) {
    const projects = this.projectDetailsForm.get('projects') as FormArray;
    if (projects.length > 1) {
      projects.removeAt(i);
    } else {
      projects.reset();
    }
  }

  private createProjectFormGroup(): FormGroup {
    return new FormGroup({
      projtitle: new FormControl(''),
      sdate: new FormControl(''),
      edate: new FormControl(''),
      description: new FormControl(''),
      ongoing: new FormControl(''),
    });
  }

}
