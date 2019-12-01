import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../models/Person';
import { environment } from 'src/environments/environment';
import { of, Observable } from 'rxjs';
import { BaseResponse } from '../models/BaseResponse';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private CONTROLLER_NAME: string = "Persons"

  constructor(private http: HttpClient) { }

  public getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(`${environment.API_URL}${this.CONTROLLER_NAME}`);
  }

  public savePerson(person: Person): Observable<BaseResponse> {
    console.log(person, "send");
    return this.http.post<BaseResponse>(`${environment.API_URL}${this.CONTROLLER_NAME}`, person);
  }

  public deletePerson(idPerson: number): Observable<BaseResponse> {
    return this.http.delete<BaseResponse>(`${environment.API_URL}${this.CONTROLLER_NAME}/${idPerson}`);
  }

}
