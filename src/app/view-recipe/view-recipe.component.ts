import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-view-recipe',
    templateUrl: './view-recipe.component.html',
    styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent implements OnInit {
    tempRecipeBook;
    selectedRecipe;
    parsedDirections: string[];
    done: boolean[];

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        let givenID = parseInt(this.route.snapshot.paramMap.get('id'));
        this.done = [];

        this.tempRecipeBook = [
            {
                "id": 1,
                "name": "American Chop Suey",
                "description": "An American pasta casserole made with ground beef, macaroni and a seasoned tomato sauce, found in the cuisine of New England and other regions of the United States.",
                "ingredients": [
                    {
                        "name": "Chopped green pepper",
                        "amount": "1"
                    },
                    {
                        "name": "Chopped Onion",
                        "amount": "1"
                    },
                    {
                        "name": "Can of tomato soup",
                        "amount": "1"
                    },
                    {
                        "name": "Hamburg",
                        "amount": "1 pound"
                    },
                    {
                        "name": "Cooked spaghetti",
                        "amount": ""
                    }
                ],
                "directions": "Cook pepper and onion, add hamburg. Cook hamburg until no longer pink, drain. Add soup and 1/3 can of water. Add spaghetti, mix well and serve"
            },
            {
                "id": 2,
                "name": "Bacon-Cheeseburger Potato Pie",
                "description": "Delicious potato pie.",
                "ingredients": [
                    {
                        "name": "Lean ground beef",
                        "amount": "1 1/2 pound"
                    },
                    {
                        "name": "Bread crumbs",
                        "amount": "1/2 cup"
                    },
                    {
                        "name": "Finely chopped onion",
                        "amount": "1/4 cup"
                    },
                    {
                        "name": "Ketchup",
                        "amount": "1/4 cup"
                    },
                    {
                        "name": "Prepared mustard",
                        "amount": "2 tsp"
                    },
                    {
                        "name": "Bacon",
                        "amount": "3 slices"
                    },
                    {
                        "name": "Water",
                        "amount": "1 1/4 cup"
                    },
                    {
                        "name": "Margarine",
                        "amount": "3 tablespoons"
                    },
                    {
                        "name": "Garlic salt",
                        "amount": "1/4 tsp"
                    },
                    {
                        "name": "Milk",
                        "amount": "3/4 cup"
                    },
                    {
                        "name": "Mashed potato flakes",
                        "amount": "2 cups"
                    },
                    {
                        "name": "Shredded cheddar cheese",
                        "amount": "4 oz (1 cup)"
                    }
                ],
                "directions": "In medium bowl combine beef, bread crumbs, onion, ketchup, and mustard. Press mixture in bottom and sides of 9 inch pie plate. Bake at 375 for 15 minutes. Cook bacon. In saucepan, combine water, margarine, and garlic salt. Bring to a boil. Remove from heat and add milk. With fork, stir in potato flakes \n\n Remove beef crust from oven and pour off drippings. Spoon potato mixture evenly into crust. Return to oven and bake 15 minutes. Remove pie from oven and top with remaining cheese and crumbled up bacon. Return to oven for 5 additional minutes. Let stand 10 minutes before serving"
            }
        ];

        this.selectedRecipe = this.getSelectedRecipe(givenID);
        this.parsedDirections = this.parseDirections();
        for(let i = 0; i < this.parsedDirections.length; i++) {
            this.done.push(false);
        }
    }

    getSelectedRecipe(idx: number) {
        for(let i = 0; i < this.tempRecipeBook.length; i++) {
            if(this.tempRecipeBook[i].id === idx) {
                return this.tempRecipeBook[i];
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
