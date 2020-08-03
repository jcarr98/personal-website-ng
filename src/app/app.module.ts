import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Routing modules
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Router } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuBarComponent } from './global_components/menu-bar/menu-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Custom modules
import { NbThemeModule, NbCardModule, NbLayoutModule, NbButtonModule, NbListModule, NbCheckboxModule } from '@nebular/theme';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuBarComponent,
    PageNotFoundComponent,
    RecipeBookComponent,
    ViewRecipeComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'recipe', component: RecipeBookComponent},
      {path: 'recipe/:id', component: ViewRecipeComponent},
      {path: 'page-not-found', component: PageNotFoundComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: '**', redirectTo: '/page-not-found', pathMatch: 'full'}
    ]),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbCardModule,
    NbLayoutModule,
    NbButtonModule,
    NbListModule,
    NbCheckboxModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
