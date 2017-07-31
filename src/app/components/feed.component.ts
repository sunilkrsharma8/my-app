import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FeedsData } from '../model/feedsData';
import { FeedsService } from '../services/feeds.service';

import { User } from '../model/user';
import { UserService } from '../services/index';

@Component({
  selector: 'feed',
  templateUrl: './../partials/feed.component.html',
  providers: [FeedsService]
})
export class FeedComponent {

  feedsData: FeedsData[];
  feedData = FeedsData;
  post :string;
  users: User[] = [];
  
  constructor(
    private feedsService: FeedsService,
    private userService: UserService
  ) { }

  public setModelData = (req) => {
    this.feedData = req;
  }

  getAllFriendReq(): void {
    this.feedsService
      .getFeeds()
      .then((Request) => {
        Request.forEach(feedData => {
          feedData['isLike'] = false;
          if (feedData.likedBy && feedData.likedBy.length) {
            feedData.likedBy.forEach(likeData => {
              if (likeData && likeData['id'] === '62') {
                feedData['isLike'] = true;
              }
            });
          }
        });
        this.feedsData = Request;
      });
  }

 getParticularRecord(uri): void {
    this.feedsService
      .getParticularRecord(uri)
      .then((Request) => {
        this.feedData = Request[0];
      });
  }

  ngOnInit(): void {
    this.getAllFriendReq();

  }

  public clickedLike(req: FeedsData): void {
    this.feedsService
      .likeClicked(req.uri)
      .then(Requests => this.feedsData = Requests);
     this.getAllFriendReq();
  }

  public clickedUnLike(req: FeedsData): void {
    this.feedsService
      .unLikeClicked(req)
      .then(Requests => this.feedsData = Requests);
    this.getAllFriendReq();
  }

  public postComment(req: FeedsData, post: String): void {
    this.feedsService
      .commentPost(req.uri,post)
      .then(Requests => this.feedsData = Requests);
      this.post = "";
      console.log("checking req -- ", req);
      this.getParticularRecord(req.uri);
      this.getAllFriendReq();
      
  }

}
