import { Routes } from '@angular/router';
import { DownComponent } from './down/down.component';
import { ResetComponent } from './reset/reset.component';
import { UpComponent } from './up/up.component';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'up', pathMatch: 'full' },
  { path: 'up', component: UpComponent },
  { path: 'down', component: DownComponent },
  { path: 'reset', component: ResetComponent },
  { path: '**', redirectTo: 'up' },
];
