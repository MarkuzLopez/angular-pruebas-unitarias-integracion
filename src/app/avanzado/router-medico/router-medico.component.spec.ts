import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/observable/empty';

class FakeRouter {
  navigate(params) { }
}

// tslint:disable-next-line: class-name
class fakeAcvtivatedRoute {
// tslint:disable-next-line: deprecation
  private subject =  new Subject();

  push(valor) {
    this.subject.next(valor);
  }

  get params() {
    return this.subject.asObservable();
  }
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      providers: [
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: fakeAcvtivatedRoute }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de redicerccionar a medico cuando se guarda', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    component.guardarMedico();

    expect(spy).toHaveBeenCalledWith(['medico', '123']);
  });

  it('Debe de colocar el id =  nuevo', () => {

    component =  fixture.componentInstance;
    const activatedRoute: fakeAcvtivatedRoute =  TestBed.get(ActivatedRoute);

    activatedRoute.push({id: 'nuevo'});

    expect(component.id).toBe('nuevo');
  });

});
