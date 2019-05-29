import { usuarioLogueado } from './booleanos';


describe('Prueba de Booleanos', () => {

    it('Debe retornar  true', () =>  {

        const resp =  usuarioLogueado();
        expect(resp).toBeTruthy();
        // expect(resp).not.toBeTruthy();
    });

});
