import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { CandidateService } from 'src/app/services/candidate.service';
import { Education, Candidate } from 'src/app/models/candidate.model';

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.scss']
})
export class EducationFormComponent implements OnInit {
  data: Candidate;
  @Input() educationDetailsForm: FormGroup;
  constructor(private fb: FormBuilder, private candidateService: CandidateService) { }

  ngOnInit(): void {
    this.educationDetailsForm = this.fb.group({
      educations: this.fb.array([this.createEducationFormGroup()]),
    });
  }

  public addEducationFormGroup() {
    // this.data = this.candidateService.getCandidatedetails();
    const educations = this.educationDetailsForm.get('educations') as FormArray;
    educations.push(this.createEducationFormGroup());
  }

  public removeOrClearEducation(i: number) {
    const educations = this.educationDetailsForm.get('educations') as FormArray;
    if (educations.length > 1) {
      educations.removeAt(i);
    } else {
      educations.reset();
    }
  }

  private createEducationFormGroup(): FormGroup {
    return new FormGroup({
      school: new FormControl(''),
      board: new FormControl(''),
      sdate: new FormControl(''),
      edate: new FormControl(''),
      stream: new FormControl(''),
      percentage: new FormControl(''),
    });
  }

  addEducationDetails() {
    this.data = this.candidateService.getCandidatedetails();
    this.data.education = this.educationDetailsForm.value.educations;
    this.candidateService.setCandidatedetails(this.data);
  }
}
