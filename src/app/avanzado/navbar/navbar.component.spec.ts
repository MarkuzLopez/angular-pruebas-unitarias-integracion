import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de tener un link de la pagina de medicos', () => {

    const elemento = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    let existe = false;

    for (const element of elemento) {
      console.log(element.attributes);
      if (element.attributes['routerLink'] === '/medicos') {
        existe = true;
      }
    }

    expect(existe).toBeTruthy();

  });

});
