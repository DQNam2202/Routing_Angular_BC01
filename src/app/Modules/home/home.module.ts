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
import {FormsModule} from "@angular/forms";
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { DemoLifecycleComponent } from './demo-lifecycle/demo-lifecycle.component'
import { ShareModule } from 'src/app/_core/share/share/share.module';
import { LoginGuard } from 'src/app/_core/guard/login.guard';


// Cấu hình route cho homeModule, routes dùng để định nghĩa 
const HomeRoute:Routes = [
  {path:'',component:HomeTemplateComponent,children:[
    {path:'',component:HomePageComponent},
    {path:'homepage',component:HomePageComponent},
    // Nếu check true thì mới cho đăng nhập
    {path:'detail/:id',component:DetailComponent,canActivate:[LoginGuard]},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'lifecycle',component:LifecycleComponent},
  ]}
]

@NgModule({
  declarations: [
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    HomeTemplateComponent,
    HeaderComponent,
    DetailComponent,
    LifecycleComponent,
    DemoLifecycleComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(HomeRoute),FormsModule,ShareModule
  ],
  exports:[HeaderComponent]
})
export class HomeModule { }
