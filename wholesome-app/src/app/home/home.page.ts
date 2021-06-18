import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../shared/services/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public headerService : HeaderService) { }

  ngOnInit() {
  }

}
