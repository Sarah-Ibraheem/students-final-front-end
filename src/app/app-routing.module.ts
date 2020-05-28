import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/services/auth.guard';
import { RedirectGuard } from './auth/services/redirect.guard';
import { PublicComponentComponent } from './test/public-component/public-component.component';
import { ProtectedComponent } from './test/protected/protected.component';
import { HomeComponent } from './home/home.component';
import { EmailVerificationComponent } from './auth/register/email-verification/email-verification.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateComponent } from './profile/update/update.component';
import { SettingsComponent } from './profile/settings/settings.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [RedirectGuard],
  },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [RedirectGuard],
  },

  {
    path: 'email/verify',
    component: EmailVerificationComponent,
    canActivate: [RedirectGuard],
  },

  {
    path: 'profile',
    component: ProfileComponent,
    // canActivate: [RedirectGuard],
  },

  {
    path: 'profile/update',
    component: UpdateComponent,
    // canActivate: [RedirectGuard],
  },

  {
    path: 'settings',
    component: SettingsComponent,
    // canActivate: [RedirectGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
