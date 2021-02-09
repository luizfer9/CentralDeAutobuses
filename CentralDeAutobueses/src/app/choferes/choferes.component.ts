import { Component, OnInit } from '@angular/core';
import { IChoferes} from '../models/choferes';

@Component({
  selector: 'app-choferes',
  templateUrl: './choferes.component.html',
  styleUrls: ['./choferes.component.css']
})
export class ChoferesComponent implements OnInit {
  choferes: IChoferes[] = [
    { id: 1, nombre: 'Luis', matricula: 'zcdelrsas',
      autobuses: [
        { id: 1 , serie: 123456 , ruta: 'Culiacan -> Mazatlan' , estatus: 'Circulacion'}
      ],
      telefono: 2278727123, ayudantes: [{ nombre: 'Raul', edad: 25}]
    },
    {
      id: 2, nombre: 'Paul', matricula: 'ndmerkms',
      autobuses: [
        {id: 2, serie: 78910, ruta: 'Culiacan -> Mazatlan', estatus: 'Circulacion'}
      ],
      telefono: 5478912315, ayudantes: [{nombre: 'Juan', edad: 15}]
    },
    {
      id: 3, nombre: 'Maria', matricula: 'werwgqtg',
      autobuses: [
        { id: 3 , serie: 564872 , ruta: 'Culiacan -> Guadalajara' , estatus: 'Circulacion'}
      ],
      telefono: 8794532164, ayudantes: [{nombre: 'Brayan', edad: 17}]
    },
    {
      id: 3, nombre: 'Juana', matricula: 'werqwecxa',
      autobuses: [
        { id: 4 , serie: 879421 , ruta: 'Culiacan -> Guadalajara' , estatus: 'Circulacion'}
      ],
      telefono: 4578124895, ayudantes: [{nombre: 'Jhon', edad: 17},{nombre: 'Edgar', edad: 15}]
    }
  ];
  displayedColumns: string[] = [ 'nombre' , 'matricula', 'autobuses' , 'telefono', 'ayudantes', 'accion' ];
  constructor() { }
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  public newButton()
  {
  }
  // tslint:disable-next-line:typedef
  public editButton()
  {
  }
  // tslint:disable-next-line:typedef
  public deleteButton()
  {
  }
}
