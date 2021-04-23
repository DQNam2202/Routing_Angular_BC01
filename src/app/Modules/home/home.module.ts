import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeTemplateComponent } from './home-template/home-template.component';
import { HeaderComponent } from './home-template/header/header.component';
import { RouterModule, Routes } from '@angular/router';

// Cấu hình root cho homeModule, routes dùng để định nghĩa 
const HomeRoute:Routes = [
  {path:'',component:HomeTemplateComponent,children:[
    {path:'',component:HomePageComponent},
    {path:'homepage',component:HomePageComponent}
  ]}
]

@NgModule({
  declarations: [
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    HomeTemplateComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(HomeRoute)
  ],
  exports:[HeaderComponent]
})
export class HomeModule { }
