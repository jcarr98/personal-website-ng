import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RecipeService } from '../services/recipe.service';

@Component({
    selector: 'app-view-recipe',
    templateUrl: './view-recipe.component.html',
    styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent implements OnInit {
    selectedRecipe;
    parsedDirections: String[];
    done: Boolean[];
    loading: Boolean;

    constructor(private route: ActivatedRoute, private router: Router, private recipeService: RecipeService) { }

    ngOnInit(): void {
        let givenID = this.route.snapshot.paramMap.get('id');
        this.loading = true;
        this.done = [];
        this.loadData(givenID);
    }

    loadData(idx) {
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

    parseDirections() {
        this.parsedDirections = this.selectedRecipe.directions.split(".")
        for(let i = 0; i < this.parsedDirections.length; i++) {
            this.done.push(false);
        }
    }

    change(index) {
        this.done[index] = !this.done[index];
    }
}
