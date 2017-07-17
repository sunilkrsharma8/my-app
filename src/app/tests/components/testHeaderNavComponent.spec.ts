import { TestBed } from '@angular/core/testing';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MainComponent } from './../../components/header-nav.component';

describe('Component: MainComponent', () => {
    let component: MainComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MainComponent],
        });

        const fixture = TestBed.createComponent(MainComponent);
        component = fixture.componentInstance;
    });

    it('should have a defined component', () => {
        expect(component).toBeDefined();
    });

});