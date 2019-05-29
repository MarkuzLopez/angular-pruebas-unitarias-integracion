import { TestBed, ComponentFixture } from '@angular/core/testing';

import { MedicoComponent } from './medico.component';
import { MedicoService } from '../intermedio2/medico/medico.service';
import { HttpClientModule } from '@angular/common/http';


describe('Medico Component', () => {

    let componente: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [MedicoComponent],
            providers: [MedicoService],
            imports: [HttpClientModule]
        });

        fixture = TestBed.createComponent(MedicoComponent);
        componente =  fixture.componentInstance;

    });

    it('Debe de crearse el componente', () => {
        expect(componente).toBeTruthy();
    });

    it('Debe de retornar el del medico', () => {
        const nombre = 'Saul';
        const res = componente.saludarMedico(nombre);

        expect(res).toContain(nombre);
    });
});
