import { arregloRobots } from './arreglos';

describe('Prueba de arreglos ', () => { 
    it('Debe de retornar al menos 3 robots', () =>  {
        const res = arregloRobots();
        // expect(res.length).toBe(3);
        expect(res.length).toBeGreaterThanOrEqual(3);
    });

    it('Debe de exisitir Drone y Ultron', () => {
        const res = arregloRobots();
        expect(res).toContain('Drone');
        expect(res).toContain('Ultron');
    });
});
