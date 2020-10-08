import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Routing modules
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Router } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Nebular modules
import { 
  NbThemeModule, 
  NbCardModule, 
  NbLayoutModule, 
  NbButtonModule, 
  NbListModule, 
  NbCheckboxModule, 
  NbBadgeModule, 
  NbInputModule,
  NbTabsetModule,
  NbSpinnerModule,
  NbToastrModule
} from '@nebular/theme';

// Custom modules
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { RecipeTableComponent } from './recipe-table/recipe-table.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    RecipeBookComponent,
    ViewRecipeComponent,
    RecipeTableComponent,
    ProjectsComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'recipe', component: RecipeBookComponent},
      {path: 'recipe_table', component: RecipeTableComponent},
      {path: 'recipe/:id', component: ViewRecipeComponent},
      {path: 'page-not-found', component: PageNotFoundComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: '**', redirectTo: '/page-not-found', pathMatch: 'full'}
    ], {useHash: true}),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbCardModule,
    NbLayoutModule,
    NbButtonModule,
    NbListModule,
    NbCheckboxModule,
    NbBadgeModule,
    NbInputModule,
    NbTabsetModule,
    NbSpinnerModule,
    NbToastrModule.forRoot()
  ],
  providers: [ CookieService ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
