import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

  constructor() { }
  sideNavListItems = [{ "name": "Feeds" },{"name":"Friends"}, { "name": "Room" }, { "name": "Stream" }, { "name": "Interest" }, { "name": "Premium" }]
  ngOnInit(): void {
  }
  name: string
  changeName(event) {
    this.name = event
  }
}
