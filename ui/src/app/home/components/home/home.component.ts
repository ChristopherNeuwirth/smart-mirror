import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() {}

  today: number = Date.now();

  ngOnInit() {
    setInterval(() => {
      this.today = Date.now();
    }, 1000);
  }
}
