import { async, TestBed } from '@angular/core/testing';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from './../../components/app.component';

class MockRouter {
    navigateByUrl(url: string) { return url; }
}

describe('Component: AppComponent', () => {
    let component: AppComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                { provide: Router, useClass: MockRouter }
            ]
        })
            // the below was added
            .compileComponents().then(() => {
                const fixture = TestBed.createComponent(AppComponent);
                component = fixture.componentInstance;
            });
    }));

    it('should have a defined component', () => {
        expect(component).toBeDefined();
    });

    
});