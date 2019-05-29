import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { By } from '@angular/platform-browser';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { NavbarComponent } from './avanzado/navbar/navbar.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      schemas: [
        NO_ERRORS_SCHEMA /// para no tomar en cuenta el selector que no se encuentaa, o identidad que no se conozca
      ],
      declarations: [
        AppComponent,
        // NavbarComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pruebas-unitarias'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('pruebas-unitarias');
  });

  it('Debe de tener un router-outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);

    const debugElement = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(debugElement).not.toBeNull();
  });

  // xit('Debe de tener un link a la pagina de medicos', () => {

  //   const fixture = TestBed.createComponent(AppComponent);

  //   const elemento =  fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

  //   let existe = false;

  //   for (const element of elemento ) {
  //     console.log(element.attributes);
  //     if (element.attributes['routerLink']  === '/medicos') {
  //       console.log('existe ruta medicos');
  //       existe = true;
  //     }
  //   }

  //   expect(existe).toBeTruthy();

  // });

  xit('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to pruebas-unitarias!');
  });
});
