import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormArray, FormControl, Validators} from '@angular/forms';
import { CandidateService } from '../services/candidate.service';
import { Candidate } from '../models/candidate.model';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  isOptional = true;
  isChecked = false;
  constructor(private fb: FormBuilder, private _candidate: CandidateService) { }

  ngOnInit(): void {
    this.firstFormGroup = this.fb.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      country: ['', Validators.required],
      contact: ['', Validators.required],
      zipcode: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['', Validators.required],
      role: ['', Validators.required]
    });
    this.secondFormGroup = this.fb.group({
      school: ['', Validators.required],
      board: ['', Validators.required],
      year: ['', Validators.required],
      percentage: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      degree: ['', Validators.required],
      stream: ['', Validators.required],
    });
    this.thirdFormGroup = this.fb.group({
      position: ['', Validators.required],
      emptype: ['', Validators.required],
      location: ['', Validators.required],
      company: ['', Validators.required],
      duration: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.fourthFormGroup = this.fb.group({
      projects: this.fb.array([this.createProjectFormGroup()]),
      skills: this.fb.array([this.createSkillFormGroup()])
    });
  }

  public addSkillFormGroup() {
    const skills = this.fourthFormGroup.get('skills') as FormArray
    skills.push(this.createSkillFormGroup())
  }

  public removeOrClearSkill(i: number) {
    const skills = this.fourthFormGroup.get('skills') as FormArray
    if (skills.length > 1) {
      skills.removeAt(i)
    } else {
      skills.reset()
    }
  }

  private createSkillFormGroup(): FormGroup {
    return new FormGroup({
      'skillz': new FormControl('')
    })
  }

  public addProjectFormGroup() {
    const projects = this.fourthFormGroup.get('projects') as FormArray
    projects.push(this.createProjectFormGroup())
  }

  public removeOrClearProject(i: number) {
    const projects = this.fourthFormGroup.get('projects') as FormArray
    if (projects.length > 1) {
      projects.removeAt(i)
    } else {
      projects.reset()
    }
  }

  private createProjectFormGroup(): FormGroup {
    return new FormGroup({
      'projtitle': new FormControl(''),
      'duration': new FormControl(''),
      'description': new FormControl(''),
      'team': new FormControl(''),
    })
  }

  addCandidateDetails(): void{

    let candidateData: Candidate = {
      id: null,
      bio: this.firstFormGroup.value[''],
      city:this.firstFormGroup.value['city'],
      country:this.firstFormGroup.value['country'],
      dateOfBirth:this.firstFormGroup.value['dob'],
      gender:this.firstFormGroup.value['gender'],
      profilePicture: null,
      resume: null
    }
    this._candidate.addCandidateDetails(candidateData).subscribe(
      data => {
        console.log(data);
      }
    )
  }

}
