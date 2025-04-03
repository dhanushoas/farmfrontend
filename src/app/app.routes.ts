import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent), canActivate: [AuthGuard] },
  { path: 'settings', loadComponent: () => import('./pages/settings/settings.component').then(m => m.SettingsComponent), canActivate: [AuthGuard] },
  { path: 'signin', loadComponent: () => import('./users/signin/signin.component').then(m => m.SigninComponent) },
  { path: 'signup', loadComponent: () => import('./users/signup/signup.component').then(m => m.SignupComponent) },
  { path: '**', redirectTo: 'signin' } // Redirect unknown routes to signin
];
