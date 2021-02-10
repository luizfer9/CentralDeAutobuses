import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { ICentrales} from '../models/centrales';
import {IAutobuses} from '../models/autobuses';
import { ReactiveFormsModule , FormGroup } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-centrales',
  templateUrl: './centrales.component.html',
  styleUrls: ['./centrales.component.css'],
  providers: [BsModalService]
})
export class CentralesComponent implements OnInit {
  autobus = 0;
  @ViewChild('template') template: TemplateRef<any>;
  central: FormGroup;
  centrales: ICentrales[] = [
    { id: 1 , nombre: 'Sinaloa' , ubicacion: 'Sinaloa' , autobuses: [
        { id: 1 , serie: 123456 , ruta: 'Culiacan -> Mazatlan' , estatus: 'Circulacion'},
        { id: 2 , serie: 789107 , ruta: 'Culiacan -> Mazatlan' , estatus: 'Circulacion'}
      ]
    },
    { id: 2 , nombre: 'Guadalajara' , ubicacion: 'Guadalajara' , autobuses: [
        { id: 3 , serie: 564872 , ruta: 'Culiacan -> Guadalajara' , estatus: 'Circulacion'},
        { id: 4 , serie: 879421 , ruta: 'Culiacan -> Guadalajara' , estatus: 'Circulacion'}
      ]
    }
  ];
  displayedColumns: string[] = [ 'nombre' , 'ubicacion', 'autobuses' , 'accion' ];
  constructor(private modalService: BsModalService) { }

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
  public newButton() {
    // this.editChofer = new FormGroup(
    // );
    this.openModal();
  }
  // tslint:disable-next-line:typedef
  public openModal(){
    this.modalService.show(this.template);
  }
}
