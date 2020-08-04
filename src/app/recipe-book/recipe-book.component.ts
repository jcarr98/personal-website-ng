import { Component, OnInit } from '@angular/core';
import * as recipes from '../../assets/recipes/recipes.json';

@Component({
    selector: 'app-recipe-book',
    templateUrl: './recipe-book.component.html',
    styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {
    allRecipes: any = (recipes as any).default;
    
    constructor() { }

    ngOnInit(): void {

    }
}
