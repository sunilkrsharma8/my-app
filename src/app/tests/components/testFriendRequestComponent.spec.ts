 import { async, TestBed } from '@angular/core/testing';
 import { NgModule,  CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
 import { Router } from '@angular/router';
 import { Http, HttpModule }   from '@angular/http';
 import { FriendRequestComponent } from './../../components/FriendRequest.Component';
 import { FriendReqService } from './../../services/friendRequest.service';

class MockRouter {
    navigateByUrl(url: string) { return url; }
}

   describe('Component: FriendRequestComponent', () => {
     let component: FriendRequestComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FriendRequestComponent],
            imports: [HttpModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                { provide: Router, useClass: MockRouter }
            ]
        })
        // the below was added
        .compileComponents().then(() => {
            const fixture = TestBed.createComponent(FriendRequestComponent);
            component = fixture.componentInstance;
        });
    }));

    it('should have a defined component', () => {
         expect(component).toBeDefined();
     });

 });