import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from '../header/header.component'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  goToLink(url){
    let vaar = window.open("https://google.com", "_blank", 'height=700,width=700');
  }

}
