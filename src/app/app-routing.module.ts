import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './components/company/company.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'job-list',
    pathMatch: 'full',
  },
  {
    path: 'job-list',
    component: JobListComponent,
  },
  {
    path: 'job-detail',
    children: [
      {
        path: 'not-found',
        component: PageNotFoundComponent,
      },
      {
        path: ':id',
        component: JobDetailComponent,
      },
      {
        path: '**',
        redirectTo: 'job-detail/not-found',
      },
    ],
  },
  {
    path: 'companies',
    children: [
      { path: 'not-found', component: PageNotFoundComponent },
      { path: ':id', component: CompanyComponent },
      { path: '**', redirectTo: 'company/not-found' },
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
