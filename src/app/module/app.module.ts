import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule ,Http, RequestOptions}    from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './../components/app.component';
import { MainComponent } from './../components/header-nav.component';
import { LoginComponent } from '../components/login.component';
import { HomeComponent } from '../components/home.component';
import { NotificationComponent } from '../components/notification.component';
import { FeedComponent } from '../components/feed.component';
import { FriendRequestComponent } from '../components/friendRequest.component';
import { DashboardComponent } from '../components/dashboard.component';
import { AppRoutingModule } from '../routing/app-routing.module';
import { FriendReqService } from '../services/friendRequest.service';
import { PageNotFoundComponent } from '../components/pageNotFound.component';
import { AuthGuard } from '../_guards/index';
import { AuthenticationService, UserService } from '../services/index';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    HomeComponent,
    FeedComponent,
    FriendRequestComponent,
    NotificationComponent,
    PageNotFoundComponent,
    DashboardComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule
  ],
   providers: [
        FriendReqService,
        AuthGuard,
        AuthenticationService,
        UserService
    ],



  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
