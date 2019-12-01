import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/app/shared/models/Person';

@Component({
  selector: 'app-persons-page',
  templateUrl: './persons-page.component.html',
  styleUrls: ['./persons-page.component.scss']
})
export class PersonsPageComponent implements OnInit {

  personSelected: Person;

  constructor() { }

  ngOnInit() {
  }

  editPerson($event : Person){
    this.personSelected = $event;

  }

}
