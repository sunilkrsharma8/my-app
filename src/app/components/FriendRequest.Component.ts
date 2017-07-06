import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { FriendRequestUser } from '../model/friendRequestUser';
import { FriendReqService } from '../services/friendRequest.service';

@Component({
  selector: 'friendRequest',
  templateUrl: './../partials/friendRequest.component.html',
  providers: [FriendReqService]
})
export class FriendRequestComponent implements OnInit {
  
  frndRequests: FriendRequestUser[];

  constructor(
    private friendReqService: FriendReqService,
    private router: Router
  ) { }

  getAllFriendReq(): void {
    this.friendReqService
      .getFriendRequest()
      .then(Requests => this.frndRequests = Requests);
  }

  ngOnInit(): void {
    	this.getAllFriendReq();
  }
}