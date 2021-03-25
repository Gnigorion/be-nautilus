import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

  constructor() { }
  sideNavListItems = [
    { 'name': 'Feed', 'route': 'feeds' }, 
    { 'name': 'Friends', 'route': 'friends' }, 
    { 'name': 'Room', 'route': 'room' }, 
    { 'name': 'Stream', 'route': 'stream' }, 
    { 'name': 'Interest', 'route': 'interest' }, 
    { 'name': 'Premium', 'route': 'premium' }]
  ngOnInit(): void {
  }
  name: string
  changeName(event) {
    this.name = event
  }
}
