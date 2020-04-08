import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './guards/auth.guard';
import {NologinGuard} from './guards/nologin.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canActivate : [AuthGuard]},
  // tslint:disable-next-line:max-line-length
  { path: 'login',  loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule), canActivate: [NologinGuard]},
  // tslint:disable-next-line:max-line-length
  { path: 'register', loadChildren: () => import('./components/register/register.module').then( m => m.RegisterPageModule), canActivate: [NologinGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
