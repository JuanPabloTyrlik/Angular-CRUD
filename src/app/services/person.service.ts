import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../person/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  url = 'http://localhost:8080/api/v1/person/';

  constructor(private httpClient: HttpClient) {}

  getPeople() {
    return this.httpClient.get<Person[]>(this.url);
  }

  createPerson(person: Person) {
    return this.httpClient.post<Person>(this.url, person);
  }

}
