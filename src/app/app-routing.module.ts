import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { BeaconsComponent } from './beacons/beacons.component';

const routes: Routes = [
  {
    path: "", component: BeaconsComponent
  }, {
    path: "add", component: AddComponent
  },
  {
    path: "view-all", component: BeaconsComponent
  },
  {
    path: "delete", component: DeleteComponent
  },
  {
    path: "**", redirectTo: 'view-all', pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
