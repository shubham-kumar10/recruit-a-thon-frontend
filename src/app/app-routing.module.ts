import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { JobsComponent } from './jobs/jobs.component';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';
import { SavedJobsComponent } from './saved-jobs/saved-jobs.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AddJobsComponent } from './add-jobs/add-jobs.component';
import { SearchAreaComponent } from './search-area/search-area.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'editprofile', component: EditProfileComponent, canActivate: [AuthGuardService] },
  { path: 'jobs', component: JobsComponent },
  { path: 'appliedjobs', component: AppliedJobsComponent, canActivate: [AuthGuardService] },
  { path: 'savedjobs', component: SavedJobsComponent, canActivate: [AuthGuardService] },
  { path: 'addjobs', component: AddJobsComponent, canActivate: [AuthGuardService] },
  { path: 'search', component: SearchAreaComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
