import { Component, OnInit } from '@angular/core';
import * as recipes from '../../assets/recipes/recipes.json';

@Component({
    selector: 'app-recipe-table',
    templateUrl: './recipe-table.component.html',
    styleUrls: ['./recipe-table.component.css']
})
export class RecipeTableComponent implements OnInit {
    // Get all recipes
    allRecipes: any = (recipes as any).default;
    categories: string[];
    categoryItems: any[][];

    constructor() { }

    ngOnInit(): void {
        
    }

}
