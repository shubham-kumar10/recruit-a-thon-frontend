import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Candidate } from 'src/app/models/candidate.model';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.scss']
})
export class ExperienceFormComponent implements OnInit {

  @Input() experienceDetailsForm: FormGroup;
  data: Candidate;
  constructor(private fb: FormBuilder, private candidateService: CandidateService) { }

  ngOnInit(): void {
    this.experienceDetailsForm = this.fb.group({
      experience: this.fb.array([this.createExperienceFormGroup()]),
    });
  }

  public addExperienceFormGroup() {
    const experiences = this.experienceDetailsForm.get('experiences') as FormArray;
    experiences.push(this.createExperienceFormGroup());
  }

  public removeOrClearExperience(i: number) {
    const experiences = this.experienceDetailsForm.get('experiences') as FormArray;
    if (experiences.length > 1) {
      experiences.removeAt(i);
    } else {
      experiences.reset();
    }
  }

  private createExperienceFormGroup(): FormGroup {
    return new FormGroup({
      position: new FormControl(''),
      emptype: new FormControl(''),
      location: new FormControl(''),
      company: new FormControl(''),
      sdate: new FormControl(''),
      edate: new FormControl(''),
      current: new FormControl(''),
    });
  }

  addExperienceDetails() {
    this.data = this.candidateService.getCandidatedetails();
    this.data.experience = this.experienceDetailsForm.value.experience;
    this.candidateService.setCandidatedetails(this.data);
  }

}
