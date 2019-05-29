import { mensaje } from './string';

describe('Pruebasa de String', () => {

  it('Debes de regresar un string', () => {
        const resp = mensaje('Marco');
        expect(typeof resp).toBe('string');
  });

  it('Debes de retornar un saludo con e nombre enviado', () =>  {
      const nombre = 'Juan';
      const resp = mensaje(nombre);

      expect(resp).toContain(nombre);
  });

});
