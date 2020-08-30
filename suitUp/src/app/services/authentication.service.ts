import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {

    public loggedInUser = { loggedOut: true };
    public validCredentials = true;
    public accessToken: string; // JWT token
    public redirectUrl = '/';
    public loggedIn: boolean = false;
    private authenticationApiUrl = `${environment.baseUrl}authenticate`;
    private token: string;
    public username: string;
    public userId = 0;

    constructor(private httpClient: HttpClient, public router: Router) { }

    public setToken(token: string) {
        this.token = token;
    }
    public getToken() {
        return this.token;
    }

    public setUserId(userId:number){
        this.userId = userId;
    }
    
    authenticate(user: string, password: string): Observable<any> {
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', 'Basic ' + btoa(user + ':' + password));
        return this.httpClient.get(this.authenticationApiUrl, { headers })
    }

    public logout(): void {
        this.loggedIn = false;
        this.setToken(null);
        this.userId = null;
    }
}
