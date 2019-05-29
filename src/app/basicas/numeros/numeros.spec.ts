import { incrementar } from './numero';


describe('Pruebas de numeros', ()  => {

    it('Debe de retoernar 100, si el numero ingresado es mayor 100', () => {

        const res = incrementar(300);
        expect(res).toBe(100);
    });

    it('Debe de retornar el numero ingresado + 1, si no es mayor a 100', () => {
        const res = incrementar(50);
        expect(res).toBe(51);
    });
});
