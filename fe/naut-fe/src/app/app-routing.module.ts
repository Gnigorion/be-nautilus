import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedsComponent } from './workspace/feeds/feeds.component';
import { FriendsComponent } from './workspace/friends/friends.component';
import { InterestComponent } from './workspace/interest/interest.component';
import { PremiumComponent } from './workspace/premium/premium.component';
import { RoomComponent } from './workspace/room/room.component';
import { StreamComponent } from './workspace/stream/stream.component';

const routes: Routes = [
  { path:'dashboard',
    component:DashboardComponent,
    children:[
      {
        path:'feeds',
        component: FeedsComponent
      },
      {
        path:'friends',
        component: FriendsComponent
      },
      {
        path:'interest',
        component: InterestComponent
      },
      {
        path:'premium',
        component: PremiumComponent
      },
      {
        path:'room',
        component: RoomComponent
      },
      {
        path:'stream',
        component: StreamComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
