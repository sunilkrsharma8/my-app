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
  }

}
