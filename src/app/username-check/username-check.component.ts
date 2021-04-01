import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'username-check',
  templateUrl: './username-check.component.html',
  styleUrls: ['./username-check.component.css']
})
export class UsernameCheckComponent implements OnInit {
  UserName = "";

  constructor() {

  }

  ngOnInit(): void {
  }

  onReset() {
    this.UserName = "";
  }
}
