import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { AltaComponent } from './paginas/alta/alta.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },

    { path: 'alta', component: AltaComponent },
    { path: 'home', component: HomeComponent }];
