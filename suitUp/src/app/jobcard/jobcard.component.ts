import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../models/jobs.model';

@Component({
  selector: 'app-jobcard',
  templateUrl: './jobcard.component.html',
  styleUrls: ['./jobcard.component.css']
})
export class JobcardComponent implements OnInit {

  @Input() jobDetails: Job;
  constructor() { }

  ngOnInit(): void {
  }

}
