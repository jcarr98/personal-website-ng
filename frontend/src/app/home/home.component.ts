import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  aboutSection;
  projectSection
  resumeSection;

  constructor() { }

  ngOnInit(): void {
    this.aboutSection = false;
    this.projectSection = false;
    this.resumeSection = false;
  }

  openDiv(a) {
    if(a === "about") {
      this.aboutSection = true;
      this.projectSection = false;
      this.resumeSection = false;
    }
    else if(a === "project") {
      this.aboutSection = false;
      this.projectSection = true;
      this.resumeSection = false;
    }
    else if(a === "resume") {
      this.aboutSection = false;
      this.projectSection = false;
      this.resumeSection = true;
    }
    else {
      throw "Invalid button click";
    }
  }

}
