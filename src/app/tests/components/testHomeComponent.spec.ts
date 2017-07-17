 import { async, TestBed } from '@angular/core/testing';
 import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
 import { Router } from '@angular/router';
 import { HomeComponent } from './../../components/home.component';


class MockRouter {
    navigateByUrl(url: string) { return url; }
}

   describe('Component: HomeComponent', () => {
     let component: HomeComponent;
   
     beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                { provide: Router, useClass: MockRouter }
            ]
        })
            // the below was added
            .compileComponents().then(() => {
                const fixture = TestBed.createComponent(HomeComponent);
                component = fixture.componentInstance;
            });
    }));

    it('should have a defined component', () => {
         expect(component).toBeDefined();
    });

 });