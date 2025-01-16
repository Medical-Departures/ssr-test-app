import { Routes } from '@angular/router';
import { SecondComponent } from './hello.component';

export const routes: Routes = [
  {
    path: 'rooms/:slug',
    component: SecondComponent,
  },
  {
    path: 'fixed',
    component: SecondComponent,
  },
  { path: '', redirectTo: 'fixed', pathMatch: 'full' },
];
