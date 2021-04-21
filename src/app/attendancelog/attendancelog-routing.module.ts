import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttendancelogPage } from './attendancelog.page';

const routes: Routes = [
  {
    path: '',
    component: AttendancelogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendancelogPageRoutingModule {}
