import { Component, OnInit, Input } from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    Validators,
    FormControl,
} from '@angular/forms';
import { User } from '../models/user';
import { SignUpService } from '../services/sign-up.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
    public signUpForm: FormGroup;
    public user: User;
    public userCreated: boolean = null;
    public error: string;

    constructor(
        private formBuilder: FormBuilder,
        private signUpService: SignUpService,
        private router: Router,
        public signup: SignUpService
    ) { }

    ngOnInit() {
        this.signUpForm = this.formBuilder.group({
            username: ['', [Validators.required, this.isUsernameTaken]],
            firstname: ['', [Validators.required]],
            lastname: ['', [Validators.required]],
            password: ['', [Validators.required]],
            confirmPassword: [
                '',
                [Validators.required, this.matchConfirmPassword.bind(this)],
            ],
            contact: ['', [Validators.required]],
        });
    }
    public get username() {
        return this.signUpForm.get('username');
    }

    public get firstname() {
        return this.signUpForm.get('firstname');
    }

    public get lastname() {
        return this.signUpForm.get('lastname');
    }

    public get password() {
        return this.signUpForm.get('password');
    }

    public get confirmPassword() {
        return this.signUpForm.get('confirmPassword');
    }

    public get contact() {
        return this.signUpForm.get('contact');
    }

    public matchConfirmPassword(
        formControl: FormControl
    ): { [s: string]: boolean } {
        if (this.signUpForm) {
            if (
                formControl.value &&
                formControl.value.length > 0 &&
                formControl.value !== this.signUpForm.get('password').value
            ) {
                return { nomatch: true };
            }
        }
        return null;
    }

    isUsernameTaken(formControl: FormControl): { [s: string]: boolean } {
        if (formControl.value === 'admin') {
            return { userNameTaken: true };
        } else {
            return null;
        }
    }

    public goToLogin(): void {
        this.router.navigate(['login']);
    }

    public addUser(): void {
        console.log(this.signUpForm.value['firstname']);

        this.user = {
            id: null,
            firstName: this.signUpForm.value['firstname'],
            lastName: this.signUpForm.value['lastname'],
            password: this.signUpForm.value['password'],
            userName: this.signUpForm.value['username'],
            contactNumber: this.signUpForm.value['contact'],
        };
        this.signUpService.addUser(this.user).subscribe(
            (data) => {
                this.userCreated = true;
                this.error = 'Signed Up Successfull.Go to Login Page';
                console.log(this.userCreated);
                this.router.navigate['login'];
            },
            (error) => {
                console.log('error');
                if (error.status == 400) {
                    this.error = 'User Already Exists';
                    this.userCreated = false;
                }
                console.log(this.error);
            }
        );
    }

    public navigateToLogin(): void {
        this.router.navigate(['login']);
    }
}
