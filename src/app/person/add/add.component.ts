import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from '../../services/person.service';
import { Person } from '../person';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  newPerson: Person = new Person();

  constructor(private router: Router, private service: PersonService) { }

  ngOnInit() {
  }

  save() {
    console.log(this.newPerson);
    
    this.service.createPerson(this.newPerson)
      .subscribe( data => {
        alert('Successfully added');
        this.router.navigate(['list']);
      });
  }

}
