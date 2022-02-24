import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { SAVEPERSON, UPDATEFIRSTNAME, UPDATELASTNAME } from '../actions/PersonActions';
import { Person } from '../models/Person';
import { AppState } from '../states/personState';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  person: Person = {firstName: '', lastName: ''};

  constructor(private store: Store<AppState>){
  }

  firstNameOnChange(event): void {
    this.store.dispatch(UPDATEFIRSTNAME(event.target.value));
  }

  lastNameOnChange(event): void {
    this.store.dispatch(UPDATELASTNAME(event.target.value));
  }

  ngOnInit(): void {
    this.store.select((s) => s.personState.firstName)
    .subscribe((s) => {
      console.log(s);
      this.person.firstName = s;
    });

    this.store.select((s) => s.personState.lastName)
    .subscribe((s) => {
      console.log(s);
      this.person.lastName = s;
    });
  }

  public save(): void {
    console.log(this.person);
    this.store.dispatch(SAVEPERSON(this.person));
  }
}
