import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe de mostrar la leyenda', () => {

    component.leyenda = 'Progresso de carga';

    fixture.detectChanges(); /// disparar la de4tencion de cambios

    const elem: HTMLElement = fixture.debugElement.query( By.css('h3')).nativeElement;

    expect(elem.innerHTML).toContain(' Progresso de carga - 50');

    });

    it('Debe de mostar el iinput el valor del progreso', () => {

       component.cambiarValor(5);
       fixture.detectChanges();

       fixture.whenStable().then( () =>  {

        const input = fixture.debugElement.query( By.css('input'));
        const elem = input.nativeElement;

        expect(elem.value).toBe('55');

       });
    });

    it('Debe de incrementar/decrementar en 5, con un click en el boton ', () => {

        const botones =  fixture.debugElement.queryAll( By.css('.btn-primary'));

        botones[0].triggerEventHandler('click', null);
        expect(component.progreso).toBe(45);

        botones[1].triggerEventHandler('click', null);
        expect(component.progreso).toBe(50);

    });

    it('Deberia de cambiar a 45, debe de mostrar el progreso', () => {

        const boton =  fixture.debugElement.queryAll(By.css('.btn-primary'));
        boton[0].triggerEventHandler('click', null);

        fixture.detectChanges(); // disparar la detencia de cambios

        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement; // detectaar los cambios en html

        expect(elem.innerHTML).toContain('45');

    });

});
