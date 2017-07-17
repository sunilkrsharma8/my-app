//  import { async, TestBed } from '@angular/core/testing';
//  import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//  import {FormsModule} from '@angular/forms';
//  import { Router } from '@angular/router';
//  import { Http, HttpModule }   from '@angular/http';
//  import { FeedComponent } from './../../components/feed.component';
//  import { FeedsData } from './../../model/feedsData';
//  import { FeedsService } from './../../services/feeds.service';

// class MockRouter {
//     navigateByUrl(url: string) { return url; }
// }

//    describe('Component: FeedComponent', () => {
//      let component: FeedComponent;

//     beforeEach(async(() => {
//         TestBed.configureTestingModule({
//             declarations: [FeedComponent],
//             imports: [HttpModule, FormsModule],
//             schemas: [CUSTOM_ELEMENTS_SCHEMA],
//             providers: [
//                 { provide: Router, useClass: MockRouter },
//                 FeedsService
//             ]
//         })
//         // the below was added
//         .compileComponents().then(() => {
//             const fixture = TestBed.createComponent(FeedComponent);
//             component = fixture.componentInstance;
//         });
//     }));

//     it('should have a defined component', () => {
//          expect(component).toBeDefined();
//      });

//  });