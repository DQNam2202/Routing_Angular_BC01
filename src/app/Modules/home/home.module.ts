import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeTemplateComponent } from './home-template/home-template.component';
import { HeaderComponent } from './home-template/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
// Ta lấy dữ liệu Input từ người dủng => import @angular form
import {FormsModule} from "@angular/forms"

// Cấu hình route cho homeModule, routes dùng để định nghĩa 
const HomeRoute:Routes = [
  {path:'',component:HomeTemplateComponent,children:[
    {path:'',component:HomePageComponent},
    {path:'homepage',component:HomePageComponent},
    {path:'detail/:id',component:DetailComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
  ]}
]

@NgModule({
  declarations: [
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    HomeTemplateComponent,
    HeaderComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(HomeRoute),FormsModule
  ],
  exports:[HeaderComponent]
})
export class HomeModule { }
