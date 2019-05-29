import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router-medico',
  templateUrl: './router-medico.component.html',
  styles: []
})
export class RouterMedicoComponent implements OnInit {

  id: any;

  constructor(public router: Router, public activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe( params => {
// tslint:disable-next-line: no-string-literal
      this.id = params['id'];
    });
  }

  guardarMedico() {
    this.router.navigate(['medico', '123']);
  }

}
