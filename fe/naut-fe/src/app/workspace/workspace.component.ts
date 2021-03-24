import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

  constructor() { }
  sideNavListItems = [{ "name": "Join Room" }, { "name": "Host Room" }, { "name": "Stream" }, { "name": "Interest" }, { "name": "Premium" }]
  ngOnInit(): void {
  }
  name: string
  changeName(event) {
    this.name = event
  }
}
