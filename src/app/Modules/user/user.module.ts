import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserTemplateComponent } from './user-template/user-template.component';
import { RouterModule, Routes } from '@angular/router';

const userRoute: Routes = [
  {
    path: '',
    component: UserTemplateComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
];

@NgModule({
  declarations: [LoginComponent, RegisterComponent, UserTemplateComponent],
  imports: [CommonModule, RouterModule.forChild(userRoute)],
})
export class UserModule {}
