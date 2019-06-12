import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JokeDetailComponent } from './joke-detail/joke-detail.component';
import { JokeGetComponent } from './joke-get/joke-get.component';

const routes: Routes = [
  {
    path: 'detail/:id',
    component: JokeDetailComponent
  },
  {
    path: 'jokes',
    component: JokeGetComponent
  },
  { path: '',
    redirectTo: '/jokes',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
