import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-cliente-mantenimiento',
  templateUrl: './cliente-mantenimiento.component.html',
  styleUrls: ['./cliente-mantenimiento.component.css']
})
export class ClienteMantenimientoComponent implements OnInit {

  public cliente:Cliente;
  
  constructor() { }

  ngOnInit() {
    this.cliente = new Cliente();

    this.cliente.id = 1;
    this.cliente.activo = true;
  }

}
