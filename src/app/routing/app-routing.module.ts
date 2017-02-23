import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {LandingComponent} from '../views/landing/landing.component';
import {AnimationsComponent} from '../views/animations/animations.component';
import {OtherComponent} from '../views/other/other.component';


const appRoutes: Routes = [
  { path: 'animations', component: AnimationsComponent },
  { path: 'other',        component: OtherComponent },
  // { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: LandingComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
