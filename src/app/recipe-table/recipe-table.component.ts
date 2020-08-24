import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-recipe-table',
    templateUrl: './recipe-table.component.html',
    styleUrls: ['./recipe-table.component.css']
})
export class RecipeTableComponent implements OnInit {
    // Get all recipes
    allRecipes: any;
    categories: string[];
    categoryItems: any[][];

    constructor() { }

    ngOnInit(): void {
        
    }

}
