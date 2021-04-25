import { Component, OnInit } from '@angular/core';
import {UsersService} from './services/user-service';
import {User} from '../models/User';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent implements OnInit {
  userForm: FormGroup;
  private user: User;

  constructor(private userService: UsersService) {
    this.userForm = new FormGroup({
      name: new FormControl(),
      age: new FormControl()
    });
  }

  ngOnInit(){
    // tslint:disable-next-line:no-console
    console.log('init');
  }

  saveUser(user: User) {
    this.userService.addUser(user).
      // tslint:disable-next-line:no-console
      subscribe((response) => console.log(response));
    // tslint:disable-next-line:no-console
  }
}
