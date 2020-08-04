import { Component, OnInit } from '@angular/core';
import * as recipes from '../../assets/recipes/recipes.json';

@Component({
    selector: 'app-recipe-book',
    templateUrl: './recipe-book.component.html',
    styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {
    allRecipes: any = (recipes as any).default;
    searchOptions;
    searchValue;
    
    constructor() { }

    ngOnInit(): void {
        this.searchValue = "";
        this.initFilter();
    }

    initFilter() {
        this.searchOptions = this.filterSearch();
    }

    filterSearch() {
        this.searchOptions = [];
        if(this.searchValue.trim().length === 0) {
            return this.allRecipes;
        }
        else{
            let tempArray = [];
            for(let i = 0; i < this.allRecipes.length; i++) {
                if(this.allRecipes[i].name.toLocaleLowerCase().includes(this.searchValue.toLocaleLowerCase())) {
                    tempArray.push(this.allRecipes[i]);
                }
            }

            return tempArray;
        }
    }

    clearSearch() {
        this.searchValue = "";
        this.searchOptions = this.filterSearch();
    }
}
