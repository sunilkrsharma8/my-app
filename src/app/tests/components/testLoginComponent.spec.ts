import { async, TestBed } from '@angular/core/testing';
import { NgModule,  CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule }   from '@angular/http';
import { LoginComponent } from './../../components/login.component';
import { AuthenticationService } from './../../services/authentication.service';

class MockRouter {
    navigateByUrl(url: string) { return url; }
}

describe('Component: LoginComponent', () => {
    let component: LoginComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, HttpModule],
            declarations: [LoginComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                { provide: Router, useClass: MockRouter },
                AuthenticationService
            ]
        })
        // the below was added
        .compileComponents().then(() => {
            const fixture = TestBed.createComponent(LoginComponent);
            component = fixture.componentInstance;
        });
    }));

    it('should have a defined component', () => {
        expect(component).toBeDefined();
    }); 

});