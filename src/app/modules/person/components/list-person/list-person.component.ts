import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Person } from 'src/app/shared/models/Person';
import { PersonService } from 'src/app/shared/services/person.service';
import { RegisterPersonComponent } from '../register-person/register-person.component';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.scss']
})
export class ListPersonComponent implements OnInit {

  persons: Person[] = [];
  personSelected: Person;

  @Output() 
  personEditEvent = new EventEmitter<Person>();

  @Input()
  registerComponent: RegisterPersonComponent;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getPersons();
  }

  getPersons() {
    this.personService.getPersons()
      .subscribe(response => {
        this.persons = response;
      });
  }

  deletePerson(idPerson: number){
    this.personService.deletePerson(idPerson)
      .subscribe(response => {
        this.getPersons();
      })
  }

  editPerson(person: Person){
    this.personSelected = person;
    this.registerComponent.getPersonSelected();
  }

  getPersonSelected() : Person {
    return this.personSelected;
  }

}
