import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import {from, Observable, empty} from 'rxjs/index';

describe('MedicosComponent', () => {

    // let componente: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach( () => {
    //   componente = new MedicosComponent(servicio);
    });


    it('Init: debe de cargar los medico', () => {
        // spyOn(servicio, 'getMedicos').and.callFake(() => {
        //     return from(['Medico1', 'Medico2', 'Medico3']);
        //   });
        // componente.ngOnInit();
        // expect(componente.medicos.length).toBeGreaterThan(0);
    });

    it('Debe de llamaar al servicio para agregar un medico', () => {
        // const espia = spyOn(servicio, 'agregarMedico').and.callFake(medico => {
        //     return empty();
        // });

        // componente.agregarMedico();
        // expect(espia).toHaveBeenCalled();
    });


});
