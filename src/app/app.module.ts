import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddonsComponent } from './addons/addons.component';
import { SearchComponent } from './search/search.component';
import { SupportComponent } from './support/support.component';
import { routes } from './routes';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      HomeComponent,
      AddonsComponent,
      SearchComponent,
      SupportComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(routes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
