import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../services/candidate.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private candidateService: CandidateService
  ) { }

  ngOnInit(): void {

  }

}
