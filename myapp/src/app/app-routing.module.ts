import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SloveListComponent } from './sloves/slove-list/slove-list.component';
import { SloveCreateComponent } from './sloves/slove-create/slove-create.component';
import { SloveEditComponent } from './sloves/slove-edit/slove-edit.component';
import { SloveDeleteComponent } from './sloves/slove-delete/slove-delete.component.ts';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sloves', component: SloveListComponent, canActivate: [AuthGuard] },
  { path: 'slove/create', component: SloveCreateComponent, canActivate: [AuthGuard] },
  { path: 'slove/edit/:id', component: SloveEditComponent, canActivate: [AuthGuard] },
  { path: 'slove/delete/:id', component: SloveDeleteComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
