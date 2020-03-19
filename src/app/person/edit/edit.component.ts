import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { Router } from '@angular/router';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  person: Person = new Person();

  constructor(private router: Router, private service: PersonService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    const id = localStorage.getItem('id');
    this.service.getPersonById(id)
      .subscribe( data => {
        this.person = data;
      });

  }

  edit(p: Person) {
    this.loadData();
    this.service.editPerson(p)
      .subscribe( data => {
        this.person = data;
        this.router.navigate(['list']);
      });
  }

}
