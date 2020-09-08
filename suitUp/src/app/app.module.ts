import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobcardComponent } from './jobcard/jobcard.component';
import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { EducationFormComponent } from './edit-profile/education-form/education-form.component';
import { ExperienceFormComponent } from './edit-profile/experience-form/experience-form.component';
import { PersonalFormComponent } from './edit-profile/personal-form/personal-form.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProjectFormComponent } from './edit-profile/project-form/project-form.component';
import { JobsComponent } from './jobs/jobs.component';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';
import { SavedJobsComponent } from './saved-jobs/saved-jobs.component';
import { CdkStepper } from '@angular/cdk/stepper';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    NavBarComponent,
    SideBarComponent,
    DashboardComponent,
    JobcardComponent,
    ProfileComponent,
    EducationFormComponent,
    ExperienceFormComponent,
    PersonalFormComponent,
    EditProfileComponent,
    ProjectFormComponent,
    JobsComponent,
    AppliedJobsComponent,
    SavedJobsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
    MatStepperModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule,
  ],
  providers: [
    {
      provide: CdkStepper, useValue: {}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
