import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginAppComponent } from './login-app/login-app.component';     // Add this
import { LoginRecordComponent } from './login-record/login-record.component';  // Add this
const routes: Routes = [
  {
    path: '',
    component: LoginAppComponent
  },
  {
    path: 'Record',
    component: LoginRecordComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
