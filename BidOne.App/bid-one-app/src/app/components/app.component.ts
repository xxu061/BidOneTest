import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SAVEPERSON, UPDATEFIRSTNAME, UPDATELASTNAME } from '../actions/PersonActions';
import { Person } from '../models/Person';
import { AppState } from '../states/personState';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  person: Person = {firstName: '', lastName: ''};

  constructor(private store: Store<AppState>, private toastr: ToastrService){
  }

  firstNameOnChange(event: any): void {
    this.store.dispatch(UPDATEFIRSTNAME(event.target.value));
  }

  lastNameOnChange(event: any): void {
    this.store.dispatch(UPDATELASTNAME(event.target.value));
  }

  ngOnInit(): void {
    this.store.select((s) => s.personState.firstName)
    .subscribe((s) => {
      this.person.firstName = s;
    });

    this.store.select((s) => s.personState.lastName)
    .subscribe((s) => {
      this.person.lastName = s;
    });

    this.store.select((s) => s.personState.error)
    .subscribe((s) => {
      if(s){
        this.toastr.error(s);
      }
    });

    this.store.select((s) => s.personState.success)
    .subscribe((s) => {
      if(s){
        this.toastr.success(s);
      }
    });
  }

  save(): void {
    this.store.dispatch(SAVEPERSON(this.person));
  }
}
