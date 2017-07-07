import { Component } from '@angular/core';
import { FeedsData } from '../model/feedsData';
import { FeedsService } from '../services/feeds.service';

@Component({
  selector: 'feed',
  templateUrl: './../partials/feed.component.html',
  providers: [FeedsService]
})
export class FeedComponent {

  feedsData: FeedsData[];
  feedData = FeedsData;
  
  constructor(
    private feedsService: FeedsService
  ) { }

  public setModelData = (req) => {  
    this.feedData = req;
  }

  getAllFriendReq(): void {
    this.feedsService
      .getFeeds()
      .then(Requests => this.feedsData = Requests);
  }

  ngOnInit(): void {
    	this.getAllFriendReq();
  }

  public clickedLike () : void {
    // this.feedsService
    //   .likeClicked()
    //   .then(Requests => this.feedsData = Requests);  
  }
 
}
