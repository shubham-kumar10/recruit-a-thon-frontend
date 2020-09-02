import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Errors } from '../constants/errors.constants';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

    public loginForm: FormGroup;
    public invalidLogin: boolean;
    public errorMessage: string;
    public errorType: string;

    constructor(
        private formBuild: FormBuilder,
        public authService: AuthenticationService,
        private router: Router
    ) { }

    ngOnInit() {
        this.loginForm = this.formBuild.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
    }
    get username() {
        return this.loginForm.get('username');
    }
    get password() {
        return this.loginForm.get('password');
    }

    public getUsername(): string {
        return this.loginForm.value.username;
    }

    public getPassword(): string {
        return this.loginForm.value.password;
    }

    public toSignup(): void {
        this.router.navigate(['register']);
    }

    public onSubmit(): void {
        this.authService
            .authenticate(this.getUsername(), this.getPassword())
            .subscribe(
                (data) => {
                    this.authService.setUserDetails(data);
                    this.errorMessage = 'Logged In successfully';
                    this.errorType = Errors.SUCCESS;
                    this.goToProfile();
                },
                (error) => {
                    this.errorType = Errors.DANGER;
                    this.errorMessage = error.error.message;
                }
            );
    }

    goToProfile(): void {
        this.router.navigate(['profile']);
    }
}
