import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PersonsPageComponent } from './pages/persons-page/persons-page.component';
import { RegisterPersonComponent } from './components/register-person/register-person.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ListPersonComponent } from './components/list-person/list-person.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: PersonsPageComponent
  }
]

@NgModule({
  declarations: [PersonsPageComponent, PersonsPageComponent, RegisterPersonComponent, ListPersonComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatListModule,
    MatIconModule
  ]
})
export class PersonModule { }
