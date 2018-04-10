import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name = 'Jhon Dorian';
  hobbies: string[];
  constructor() { }

  ngOnInit() {
    this.hobbies = ['eat', 'pray', 'love'];
  }

}
