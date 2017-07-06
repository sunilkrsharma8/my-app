import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppComponent } from './../components/app.component';
import { MainComponent } from './../components/header-nav.component';
import { LoginComponent } from '../components/login.component';
import { HomeComponent } from '../components/home.component';
import { NotificationComponent } from '../components/notification.component';
import { FeedComponent } from '../components/feed.component';
import { FriendRequestComponent } from '../components/friendRequest.component';
import { AppRoutingModule } from '../routing/app-routing.module';
import { FriendReqService } from '../services/friendRequest.service';
import { PageNotFoundComponent } from '../components/pageNotFound.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    HomeComponent,
    FeedComponent,
    FriendRequestComponent,
    NotificationComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [FriendReqService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
