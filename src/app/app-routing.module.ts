import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SubmissionsComponent } from './components/submissions/submissions.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'submissions', component: SubmissionsComponent },
  { path: 'timesheets', redirectTo: '/timesheets', pathMatch: 'full' },
  { path: 'clients', redirectTo: '/clients', pathMatch: 'full' },
  { path: 'settings', redirectTo: '/settings', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
