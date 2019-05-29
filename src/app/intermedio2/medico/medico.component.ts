import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../intermedio2/medico/medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: []
})
export class MedicoComponent implements OnInit {
  medicos: any[] = [];
  constructor(public medicoService: MedicoService) { }

  ngOnInit() {
  }

  saludarMedico(nombre: string) {
    return `Saludos ${nombre}`;
  }

  obtenerMedicos() {
    this.medicoService.getMedicos()
        .subscribe((res: any) => {
          this.medicos = res;
        });
  }

}
