import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { CookieService } from 'ngx-cookie-service';
import { NbToastrService, NbComponentStatus } from '@nebular/theme';

@Component({
    selector: 'app-view-recipe',
    templateUrl: './view-recipe.component.html',
    styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent implements OnInit, AfterViewInit {
    selectedRecipe: any;
    parsedDirections: String[];
    done: Boolean[];
    loading: Boolean;

    constructor(private route: ActivatedRoute, private router: Router, private recipeService: RecipeService, private cookieService: CookieService, private toastrService: NbToastrService) { }

    ngOnInit(): void {
        let givenID = this.route.snapshot.paramMap.get('id');
        this.selectedRecipe = "";
        this.done = [];
        this.loadData(givenID);
    }

    ngAfterViewInit(): void {
        this.loading = true;
    }

    loadData(idx): void {
        this.recipeService.get(idx)
            .subscribe(
                data => {
                    // Get recipe from database
                    this.selectedRecipe = data;

                    // Set loading status
                    this.loading = false;

                    // Parse directions for recipe
                    this.parseDirections();
                },
                error => {
                    console.log(error);
                });
    }

    saveRecipe(): void {
        let status: NbComponentStatus;
        let currentCart = this.cookieService.get('user-cart').length > 0 ? JSON.parse(this.cookieService.get('user-cart')) : [];

        for(let i = 0; i < currentCart.length; i++) {
            if(currentCart[i].id == this.selectedRecipe._id) {
                status = 'danger';
                this.toastrService.show('This recipe is already in your cart', 'Error', {status});
                return;
            }
        }
        
        currentCart.push({"id": this.selectedRecipe._id, "name": this.selectedRecipe.name});
        status = 'success';
        this.toastrService.show('Recipe added to cart!', 'Success', {status})
        this.cookieService.set('user-cart', JSON.stringify(currentCart));
    }

    parseDirections(): void {
        this.parsedDirections = this.selectedRecipe.directions.split(".")
        for(let i = 0; i < this.parsedDirections.length; i++) {
            this.done.push(false);
        }
    }

    change(index): void {
        this.done[index] = !this.done[index];
    }
}
