import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductComponent } from './pages/product/product.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'',component:AuthLayoutComponent,children:[
        {path:'login',component:LoginComponent,title:'login'},
        {path:'register',component:RegisterComponent,title:'register'}
    ]},
    {path:'',component:BlankLayoutComponent,children:[
        {path:'home',component:HomeComponent,title:'home'},
        {path:'cart',component:CartComponent,title:'cart'},
        {path:'product',component:ProductComponent,title:'product'},
        {path:'**',component:NotfoundComponent},
    ]

    }
];
