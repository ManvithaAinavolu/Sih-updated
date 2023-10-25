import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotificationComponent } from './notification/notification.component';
import { ParentRegisterComponent } from './parent-register/parent-register.component';
import { ChildRegisterComponent } from './child-register/child-register.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },{
    path: 'notification',
    component: NotificationComponent
  },
  {
    path: 'parent-regiser',
    component:ParentRegisterComponent
  },
  {
    path: 'child-regiser',
    component:ChildRegisterComponent
  },
  {
    path: 'register',
    component:RegisterComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
