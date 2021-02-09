import { Component, OnInit } from '@angular/core';
import { ICentrales} from '../models/centrales';
import {IAutobuses} from '../models/autobuses';
import {MDCIconButtonToggle} from '@material/icon-button';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-centrales',
  templateUrl: './centrales.component.html',
  styleUrls: ['./centrales.component.css']
})
export class CentralesComponent implements OnInit {
  autobus: number = 0;
  centrales: ICentrales[] = [
    { id: 1 , nombre: 'Sinaloa' , ubicacion: 'Sinaloa' , autobuses: [
        { id: 1 , serie: 123456 , ruta: 'Culiacan -> Mazatlan' , estatus: 'Circulacion'},
        { id: 2 , serie: 78910 , ruta: 'Culiacan -> Mazatlan' , estatus: 'Circulacion'}
      ]
    },
    { id: 2 , nombre: 'Guadalajara' , ubicacion: 'Guadalajara' , autobuses: [
        { id: 3 , serie: 564872 , ruta: 'Culiacan -> Guadalajara' , estatus: 'Circulacion'},
        { id: 4 , serie: 879421 , ruta: 'Culiacan -> Guadalajara' , estatus: 'Circulacion'}
      ]
    }
  ];
  displayedColumns: string[] = [ 'nombre' , 'ubicacion', 'autobuses' , 'accion' ];
  constructor() { }

  ngOnInit(): void {
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
