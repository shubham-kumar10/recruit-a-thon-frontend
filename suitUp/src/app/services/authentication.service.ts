import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User, LoggedInUser } from '../models/user';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {

    private authenticationApiUrl: string = environment.baseUrl + 'authenticate';
    private userDetails: LoggedInUser;

    constructor(private httpClient: HttpClient, public router: Router) { }

    public getUserDetails() {
        return this.userDetails;
    }

    public setUserDetails(userDetails: LoggedInUser) {
        this.userDetails = userDetails;
    }

    authenticate(user: string, password: string): Observable<LoggedInUser> {
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', 'Basic ' + btoa(user + ':' + password));
        return this.httpClient.get<LoggedInUser>(this.authenticationApiUrl, { headers });
    }

    public logout(): void {
        this.getUserDetails().token = null;
        this.getUserDetails().id = null;
    }
}
