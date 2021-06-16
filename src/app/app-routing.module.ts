import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookoperationComponent } from './bookoperation/bookoperation.component';
import { LoginComponent } from './login/login.component';
import { UseroperationComponent } from './useroperation/useroperation.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'useroperation', component: UseroperationComponent },
  { path: 'bookoperation', component: BookoperationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
