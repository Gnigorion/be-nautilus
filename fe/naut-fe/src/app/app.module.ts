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
import { FeedsComponent } from './workspace/feeds/feeds.component';
import { FriendsComponent } from './workspace/friends/friends.component';
import { RoomComponent } from './workspace/room/room.component';
import { StreamComponent } from './workspace/stream/stream.component';
import { InterestComponent } from './workspace/interest/interest.component';
import { PremiumComponent } from './workspace/premium/premium.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    WorkspaceComponent,
    FeedsComponent,
    FriendsComponent,
    RoomComponent,
    StreamComponent,
    InterestComponent,
    PremiumComponent
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
