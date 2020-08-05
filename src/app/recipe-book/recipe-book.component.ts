import { Component, OnInit } from '@angular/core';
import * as recipes from '../../assets/recipes/recipes.json';
import { CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER } from '@angular/cdk/overlay/overlay-directives';

@Component({
    selector: 'app-recipe-book',
    templateUrl: './recipe-book.component.html',
    styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {
    allRecipes: any = (recipes as any).default;
    categories: string[];
    selectedCategories: boolean[];
    filteredOptions;
    searchValue;
    
    constructor() { }

    ngOnInit(): void {
        this.searchValue = "";
        this.initFilter();
    }

    // Init all filters
    initFilter() {
        // Init all categories
        this.selectedCategories = [];
        this.categories = [];
        for(let i = 0; i < this.allRecipes.length; i++) {
            let thisItem = this.allRecipes[i].category;
            if(!this.categories.includes(thisItem)) {
                // Filter out blank lines
                if(thisItem.trim().length > 0){
                    this.categories.push(thisItem);
                    this.selectedCategories.push(true);
                }
            }
        }

        // Init all filters
        this.filter();
    }

    filter() {
        this.filteredOptions = [];
        this.filterCategory();
        this.filterSearch();
    }

    // Search methods
    filterSearch() {
        if(this.searchValue.trim().length > 0) {
            let tempArray = [];
            for(let i = 0; i < this.filteredOptions.length; i++) {
                if(this.filteredOptions[i].name.toLocaleLowerCase().includes(this.searchValue.toLocaleLowerCase())) {
                    tempArray.push(this.filteredOptions[i]);
                }
            }

            this.filteredOptions = tempArray;
        }
    }

    clearSearch() {
        this.searchValue = "";
        this.filter();
    }

    // Category methods
    applyCategory(index) {
        this.selectedCategories[index] = !this.selectedCategories[index];
        this.filter();
    }

    filterCategory() {
        let categoriesToFilter = [];
        // Iterate over selected categories, if any = true, add those to filter
        for(let i = 0; i < this.selectedCategories.length; i++) {
            if(!this.selectedCategories[i]) {
                categoriesToFilter.push(this.categories[i]);
            }
        }

        // If item is included in filter, show it on the page
        if(categoriesToFilter.length > 0) {
            for(let j = 0; j < this.allRecipes.length; j++) {
                if(categoriesToFilter.includes(this.allRecipes[j].category)) {
                    this.filteredOptions.push(this.allRecipes[j])
                }
            }
        }
        else {
            for(let i of this.allRecipes) {
                this.filteredOptions.push(i);
            }
        }
    }
}
