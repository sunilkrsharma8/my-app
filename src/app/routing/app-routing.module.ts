import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home.component';
import { NotificationComponent } from '../components/notification.component';
import { FeedComponent } from '../components/feed.component';
import { FriendRequestComponent } from '../components/friendRequest.component';
import { LoginComponent } from '../components/login.component';
import { AppComponent } from '../components/app.component';




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
		component: HomeComponent
	},
    {
		path: 'feed',
		component: FeedComponent
	},
    {
		path: 'friendRequest',
		component: FriendRequestComponent
	},
    {
		path: 'notification',
		component: NotificationComponent
	},
	{
		path: '',
		redirectTo: '/login', 
		pathMatch: 'full',
	}
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],

})

export class AppRoutingModule {


}