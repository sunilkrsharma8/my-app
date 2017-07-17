 import { async, TestBed } from '@angular/core/testing';
 import { Router } from '@angular/router';
 import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
 import { PageNotFoundComponent } from './../../components/pageNotFound.component';


class MockRouter {
    navigateByUrl(url: string) { return url; }
}

   describe('Component: PageNotFoundComponent', () => {
     let component: PageNotFoundComponent;

     beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PageNotFoundComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                { provide: Router, useClass: MockRouter }
            ]
        })
        // the below was added
        .compileComponents().then(() => {
            const fixture = TestBed.createComponent(PageNotFoundComponent);
            component = fixture.componentInstance;
        });
    }));

    it('should have a defined component', () => {
         expect(component).toBeDefined();
    });

 });