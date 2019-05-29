import {Formulario} from './formulario';
import { FormBuilder } from '@angular/forms';

describe('Formularios', () => {

    let  componente: Formulario;

    beforeEach( () => {
     componente = new Formulario( new FormBuilder() );
    });

    it('Debe de crear un formularios con dos campos', () => {
        expect(componente.form.contains('email')).toBeTruthy();
        expect(componente.form.contains('password')).toBeTruthy();
    });

    it('El emial debe ser un correo valido', () => {
        const control = componente.form.get('email');
        control.setValue('');
        expect(control.valid).toBeFalsy();
    });

    it('El emaail debe de ser un correo valido', () => {
        const control = componente.form.get('email');
        control.setValue('marco@gmail.com');
        expect(control.valid).toBeTruthy();
    });
});
