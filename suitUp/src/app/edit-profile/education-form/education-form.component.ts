import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl} from '@angular/forms';
import { CandidateService } from 'src/app/services/candidate.service';
import { Education, Candidate } from 'src/app/models/candidate.model';

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.scss']
})
export class EducationFormComponent implements OnInit {

  @Input() data : Candidate;
  @Input() educationDetailsForm: FormGroup;
  constructor(private fb: FormBuilder, private candidateService: CandidateService) { }

  ngOnInit(): void {
    this.educationDetailsForm = this.fb.group({
      educations: this.fb.array([this.createEducationFormGroup()]),
    });
    // this.data = this.candidateService.getCandidatedetails();
  }

  public addEducationFormGroup() {
    const educations = this.educationDetailsForm.get('educations') as FormArray
    educations.push(this.createEducationFormGroup());

    const educationData: Education = {
      id: null,
      institution: 'sdcf',
      startDate:null,
      endDate: null,
      degree: 'adsf',
      description: 'ads',
      percentage: 'a',
    }
  
    this.data.education.push(educationData);
  }

  public removeOrClearEducation(i: number) {
    const educations = this.educationDetailsForm.get('educations') as FormArray
    if (educations.length > 1) {
      educations.removeAt(i)
    } else {
      educations.reset()
    }
  }

  private createEducationFormGroup(): FormGroup {
    return new FormGroup({
      'school': new FormControl(''),
      'board': new FormControl(''),
      'sdate': new FormControl(''),
      'edate': new FormControl(''),
      'stream': new FormControl(''),
      'percentage': new FormControl(''),
    })
  }

  addEducationDetails(){

  this.candidateService.addCandidateDetails(this.data).subscribe(
    (data) => {
      this.candidateService.setCandidatedetails(data);
      console.log(data);
    });
  console.log(this.data);
  }


}
