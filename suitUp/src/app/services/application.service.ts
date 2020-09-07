import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { CandidateService } from '../services/candidate.service';
import { Observable } from 'rxjs';
import { Application } from '../models/candidate.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http: HttpClient, private authService: AuthenticationService, private candidateService: CandidateService) { }
  applyUrl = environment.baseUrl + 'apply';
  withdrawUrl = environment.baseUrl + 'withdraw';
  saveUrl = environment.baseUrl + 'save';

  applyJobs(canId: number, jobId: number): Observable<Application> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.authService.getUserDetails().token);
    const url: string = this.applyUrl + '/' + canId + jobId;
    return this.http.get<Application>(url, { headers });
  }

  withdrawJobs(appId: number): Observable<Application> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.authService.getUserDetails().token);
    const url: string = this.withdrawUrl + '/' + appId;
    return this.http.get<Application>(url, { headers });
  }

  saveJobs(canId: number, jobId: number): Observable<Application> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.authService.getUserDetails().token);
    const url: string = this.applyUrl + '/' + canId + jobId;
    return this.http.get<Application>(url, { headers });
  }
}
