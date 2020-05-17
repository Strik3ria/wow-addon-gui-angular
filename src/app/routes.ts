import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddonsComponent } from './addons/addons.component';
import { SearchComponent } from './search/search.component';
import { SupportComponent } from './support/support.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'addons', component: AddonsComponent },
    { path: 'search', component: SearchComponent },
    { path: 'support', component: SupportComponent }
];
