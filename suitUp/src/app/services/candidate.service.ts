import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { Candidate, Education, Experience, Project, Skill } from '../models/candidate.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http: HttpClient, private authService: AuthenticationService) { }
  private candidateDetails: Candidate;
  candidateUrl = environment.baseUrl + 'profile';
  commonUrl = environment.baseUrl + 'edit';
  educationUrl = 'education';
  experienceUrl = 'project';
  projectUrl = 'experience';
  skillUrl = 'skills';

  getCandidatedetails(): Candidate {
    return this.candidateDetails;
  }

  setCandidatedetails(candidateDetails: Candidate): void {
    this.candidateDetails = candidateDetails;
  }

  addCandidateDetails(candidateDetails: Candidate): Observable<Candidate> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.authService.getUserDetails().token);
    const url: string = this.candidateUrl + '/' + this.authService.getUserDetails().id;
    return this.http.post<Candidate>(url, candidateDetails, { headers });
  }

  updateEducationDetails(EducationDetails: Education): Observable<Education> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.authService.getUserDetails().token);
    const url: string = this.commonUrl + '/' + this.getCandidatedetails().id + '/' + this.educationUrl;
    return this.http.post<Education>(url, EducationDetails, { headers });
  }

  updateExperienceDetails(ExperienceDetails: Experience): Observable<Experience> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.authService.getUserDetails().token);
    const url: string = this.commonUrl + '/' + this.getCandidatedetails().id + '/' + this.experienceUrl;
    return this.http.post<Experience>(url, ExperienceDetails, { headers });
  }

  updateProjectDetails(ProjectDetails: Project): Observable<Project> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.authService.getUserDetails().token);
    const url: string = this.commonUrl + '/' + this.getCandidatedetails().id + '/' + this.projectUrl;
    return this.http.post<Project>(url, ProjectDetails, { headers });
  }

  updateSkillDetails(SkillDetails: Skill): Observable<Skill> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.authService.getUserDetails().token);
    const url: string = this.commonUrl + '/' + this.getCandidatedetails().id + '/' + this.skillUrl;
    return this.http.post<Skill>(url, SkillDetails, { headers });
  }
}
