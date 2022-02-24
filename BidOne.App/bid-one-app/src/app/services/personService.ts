import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../models/Person';
import { Injectable } from '@angular/core';

@Injectable()
export class PersonService
{
    url = 'https://localhost:44338/Person';

    constructor(private http: HttpClient){

    }

    public save(person: Person){
        return this.http.post(this.url, person);
    }
}
