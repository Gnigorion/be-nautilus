import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    WorkspaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
