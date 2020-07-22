import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routing modules
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Router } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuBarComponent } from './global_components/menu-bar/menu-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Custom modules
import { NbThemeModule, NbCardModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuBarComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'page-not-found', component: PageNotFoundComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: '**', redirectTo: '/page-not-found', pathMatch: 'full'}
    ]),
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbCardModule,
    NbLayoutModule,
    NbButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
