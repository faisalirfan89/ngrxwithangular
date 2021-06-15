import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UseroperationComponent } from './useroperation/useroperation.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'useroperation', component: UseroperationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
