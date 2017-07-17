 import { async, TestBed } from '@angular/core/testing';
 import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
 import { Router } from '@angular/router';
 import { NotificationComponent } from './../../components/notification.component';

class MockRouter {
    navigateByUrl(url: string) { return url; }
}

   describe('Component: NotificationComponent', () => {
     let component: NotificationComponent;

     beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NotificationComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                { provide: Router, useClass: MockRouter }
            ]
        })
        // the below was added
        .compileComponents().then(() => {
            const fixture = TestBed.createComponent(NotificationComponent);
            component = fixture.componentInstance;
        });
    }));

    it('should have a defined component', () => {
         expect(component).toBeDefined();
    });

 });