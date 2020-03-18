import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-spring-boot';

  constructor(private router: Router) {}

  ListAll() {
    this.router.navigate(["list"]);
  }

  Edit() {
    this.router.navigate(["edit"]);
  }

  Add() {
    this.router.navigate(["add"]);
  }
}
