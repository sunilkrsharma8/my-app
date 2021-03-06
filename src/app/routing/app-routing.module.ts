import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home.component';
import { NotificationComponent } from '../components/notification.component';
import { FeedComponent } from '../components/feed.component';
import { FriendRequestComponent } from '../components/friendRequest.component';
import { LoginComponent } from '../components/login.component';
import { AppComponent } from '../components/app.component';
import { DashboardComponent } from '../components/dashboard.component';
import {PageNotFoundComponent} from '../components/pageNotFound.component';
import { AuthGuard } from '../_guards/index';




const routes: Routes = [
	
    {
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'approot',
		component: AppComponent
	},
	{
		path: 'home',
		component: HomeComponent,
		canActivate: [AuthGuard]
	},
    {
		path: 'feed',
		component: FeedComponent,
		canActivate: [AuthGuard]
	},
    {
		path: 'friendRequest',
		component: FriendRequestComponent,
		canActivate: [AuthGuard]
	},
    {
		path: 'notification',
		component: NotificationComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'dashboard',
		component: DashboardComponent,
		canActivate: [AuthGuard]
	},
	{
		path: '',
		redirectTo: '/login', 
		pathMatch: 'full',
	},
	 {
		  path: '**', 
		  component: PageNotFoundComponent
	 }
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],

})

export class AppRoutingModule {


}