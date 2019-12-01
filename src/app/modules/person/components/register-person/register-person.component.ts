import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { PersonService } from 'src/app/shared/services/person.service';
import { Person } from 'src/app/shared/models/Person';
import { ListPersonComponent } from '../list-person/list-person.component';

@Component({
  selector: 'app-register-person',
  templateUrl: './register-person.component.html',
  styleUrls: ['./register-person.component.scss']
})
export class RegisterPersonComponent implements OnInit {

  registerForm: FormGroup
  submitted = false;
  editable = false;

  person: Person;

  @Input()
  listComponent: ListPersonComponent;
  
  @ViewChild('form', {static: false}) form : FormGroupDirective;

  constructor(private formBuilder: FormBuilder, private personService: PersonService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    });
  }

  f() {
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted = true;

    if(!this.registerForm.valid) {
      return;
    }

    this.person = {
      idPerson: this.editable ? this.person.idPerson : 0,
      firstname: this.registerForm.get('firstname').value,
      lastname: this.registerForm.get('lastname').value
    };

    this.personService.savePerson(this.person)
      .subscribe(response => {
        this.onReset();
        this.listComponent.getPersons();
      });
    
  }

  onReset() {
    this.submitted = false;
    this.form.resetForm();
    this.registerForm.reset();
    if (this.editable){
      this.editable = false;
    }
  }

  getPersonSelected() {
    this.editable = true;
    this.person = this.listComponent.getPersonSelected();
    this.registerForm.setValue({
      firstname: this.person.firstname,
      lastname: this.person.lastname
    });
  }

  newPerson() {
    this.editable = false;
    this.onReset();
  }

}
