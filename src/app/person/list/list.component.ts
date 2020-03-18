import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../../services/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  people: Person[] = [];

  constructor(private service: PersonService, private router: Router) { }

  ngOnInit() {
    this.service.getPeople()
      .subscribe(data => this.people = data);
  }

}
