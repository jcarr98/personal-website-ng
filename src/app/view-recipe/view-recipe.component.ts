import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as recipes from '../../assets/recipes/recipes.json';

@Component({
    selector: 'app-view-recipe',
    templateUrl: './view-recipe.component.html',
    styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent implements OnInit {
    allRecipes: any = (recipes as any).default;
    selectedRecipe;
    parsedDirections: string[];
    done: boolean[];

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        let givenID = parseInt(this.route.snapshot.paramMap.get('id'));
        this.done = [];

        this.selectedRecipe = this.getSelectedRecipe(givenID);
        this.parsedDirections = this.parseDirections();
        for(let i = 0; i < this.parsedDirections.length; i++) {
            this.done.push(false);
        }
    }

    getSelectedRecipe(idx: number) {
        for(let i = 0; i < this.allRecipes.length; i++) {
            if(this.allRecipes[i].id === idx) {
                return this.allRecipes[i];
            }
        }
    }

    parseDirections() {
        return this.selectedRecipe.directions.split(".");
    }

    change(index) {
        this.done[index] = !this.done[index];
    }
}
