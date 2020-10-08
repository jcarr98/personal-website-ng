import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { RecipeService } from '../services/recipe.service';

@Component({
    selector: 'app-recipe-book',
    templateUrl: './recipe-book.component.html',
    styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {
    allRecipes: any;
    loading: Boolean;
    cart: any[];
    categories: string[];
    selectedCategories: boolean[];
    filteredOptions;
    badSearch: boolean;
    searchValue;
    
    constructor(private recipeService: RecipeService, private cookieService: CookieService) { }

    ngOnInit(): void {
        this.searchValue = "";
        this.allRecipes = [];
        this.cart = this.cookieService.get('user-cart').length > 0 ? JSON.parse(this.cookieService.get('user-cart')) : [];
        this.loading = true;
        this.loadData();
    }

    addToCart(id) {
        // Check if item is in cart
        for(let i = 0; i < this.cart.length; i++) {
            if(this.cart[i].id == id) {
                console.log("Item already added");
                return;
            }
        }
        // Find name of object
        let name = "";
        for(let j = 0; j < this.allRecipes.length; j++) {
            if(this.allRecipes[j]._id == id) {
                name = this.allRecipes[j].name;
                break;
            }
        }
        this.cart.push({"id": id, "name": name});
        this.cookieService.set('user-cart', JSON.stringify(this.cart))
    }

    removeFromCart(id) {
        // Find item in cart and remove it
        for(let i = 0; i < this.cart.length; i++) {
            if(this.cart[i].id == id) {
                this.cart.splice(i, 1);
                break;
            }
        }

        // If this causes the cart to be empty, just delete the cookie
        // Otherwise, update the cookie
        if(this.cart.length == 0) {
            this.cookieService.delete('user-cart');
        }
        else {
            this.cookieService.set('user-cart', JSON.stringify(this.cart));
        }
    }

    clearCart() {
        this.cookieService.delete('user-cart');
        this.cart = [];
    }

    loadData() {
        this.recipeService.getAll()
            .subscribe(
                data => {
                    // Load all recipes from database
                    this.allRecipes = data;

                    // Initialize filter
                    this.initFilter();

                    // Update loading status
                    this.loading = false;
                },
                error => {
                    console.log(error);
                });

        this.initFilter();
        this.loading = false;
    }

    // Init all filters
    initFilter() {
        // Init all categories
        this.categories = [];
        for(let i = 0; i < this.allRecipes.length; i++) {
            let thisItem = this.allRecipes[i].category;
            if(!this.categories.includes(thisItem)) {
                // Filter out blank lines
                if(thisItem.trim().length > 0){
                    this.categories.push(thisItem);
                }
            }
        }

        // Load previously selected filters
        this.selectedCategories = JSON.parse(this.cookieService.get('user-categories'))
        if(this.selectedCategories.length == 0) {
            for(let j = 0; j < this.categories.length; j++) {
                this.selectedCategories.push(true);
            }
        }

        this.categories.sort();

        // Init all filters
        this.filter();
    }

    filter() {
        this.filteredOptions = [];
        this.filterCategory();
        this.filterSearch();
        if(this.filteredOptions.length === 0) {
            this.badSearch = true;
        }
        else {
            this.badSearch = false;
        }

        this.filteredOptions.sort();
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
        this.cookieService.set('user-categories', JSON.stringify(this.selectedCategories));
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
