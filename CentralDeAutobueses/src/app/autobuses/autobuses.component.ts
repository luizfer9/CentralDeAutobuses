import { Component, OnInit } from '@angular/core';
import { IAutobuses } from '../models/autobuses';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-autobuses',
  templateUrl: './autobuses.component.html',
  styleUrls: ['./autobuses.component.css']
})
export class AutobusesComponent implements OnInit {
  autobuses: IAutobuses[] = [
    { id: 1 , serie: 123456 , ruta: 'Culiacan -> Mazatlan' , estatus: 'Circulacion'},
    { id: 2 , serie: 78910 , ruta: 'Culiacan -> Mazatlan' , estatus: 'Circulacion'},
    { id: 3 , serie: 564872 , ruta: 'Culiacan -> Guadalajara' , estatus: 'Circulacion'},
    { id: 4 , serie: 879421 , ruta: 'Culiacan -> Guadalajara' , estatus: 'Circulacion'}
  ];
  displayedColumns: string[] = [ 'serie' , 'ruta' , 'estatus', 'accion'];
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
  // tslint:disable-next-line:typedef
  public newButton()
  {
  }
}
