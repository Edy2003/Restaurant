import {Routes} from "@angular/router";

import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { DishDetailComponent } from '../dish-detail/dish-detail.component';
import { MenuComponent } from '../menu/menu.component';

export const routes:Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'menu', component:MenuComponent},
  {path: 'about', component:AboutComponent},
  {path: ' ', redirectTo:'/home', pathMatch:'full'}
  ];
