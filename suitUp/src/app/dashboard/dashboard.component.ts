import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobService } from '../services/job.service';
import { Job } from '../models/jobs.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private http: HttpClient, public jobService: JobService) { }

  jobList: Job[];

  ngOnInit(): void {
    this.jobService.getAllJobs().subscribe(
      (response) => {
        this.jobList = response;
        console.log(response);
      });
  }

}
