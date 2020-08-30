import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { Candidate } from '../models/candidate.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http:HttpClient, private authService:AuthenticationService) { }

  candidateUrl = environment.baseUrl+'profile';

  addCandidateDetails(candidateDetails: Candidate): Observable<Candidate>{
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.post<Candidate>(this.candidateUrl + '/'+ this.authService.userId, candidateDetails, { headers });
  }
}
