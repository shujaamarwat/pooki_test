// src/app/dashboard.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DashboardData } from '../model/dashboard.model';
import { SubmissionData } from '../model/submissions.model';

@Injectable({
  providedIn: 'root'
})
export class PopulateService {
  private dashboardUrl = 'http://localhost:3000/api/dashboard';
  private submissionsUrl = 'http://localhost:3000/api/submissions';

  constructor(private http: HttpClient) {}

  getDashboardData(): Observable<DashboardData> {
    return this.http.get<DashboardData>(this.dashboardUrl);
  }

  getSubmissionsData(): Observable<SubmissionData[]> {
    return this.http.get<SubmissionData[]>(this.submissionsUrl);
  }
}
