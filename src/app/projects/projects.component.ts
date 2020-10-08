import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
    allProjects: String[]

    constructor() { }

    ngOnInit(): void {
        this.allProjects = [
            "Personal Website",
            "Personal Website (old)",
            "Automatic Window Shades",
            "Planner",
            "Mod Remover"
        ]
    }

}
