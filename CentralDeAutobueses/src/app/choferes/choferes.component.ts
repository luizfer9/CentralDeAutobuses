import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { IChoferes} from '../models/choferes';
import {ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {MatInputModule} from '@angular/material/input';
import { IAutobuses} from '../models/autobuses';
import { AutobusesComponent } from '../autobuses/autobuses.component';


@Component({
  selector: 'app-choferes',
  templateUrl: './choferes.component.html',
  styleUrls: ['./choferes.component.css'],
  providers: [BsModalService]
})
export class ChoferesComponent implements OnInit {

  @ViewChild('template') template: TemplateRef<any>;
  title: string;
  choferForm: FormGroup;
  autobusesExt: { 1,  2, 3, 4};
  bus: IAutobuses[];
  choferes: IChoferes[] = [
    { id: 1, nombre: 'Luis', matricula: 'zcdelrsas',
      autobuses: [
        { id: 1 , serie: 123456 , ruta: 'Culiacan -> Mazatlan' , estatus: 'Circulacion'},
        { id: 2 , serie: 123456 , ruta: 'Culiacan -> Mazatlan' , estatus: 'Circulacion'}
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
      id: 3, nombre: 'Juana', matricula: 'werqwecxa', autobuses: [
        { id: 4 , serie: 879421 , ruta: 'Culiacan -> Guadalajara' , estatus: 'Circulacion'}
      ],
      telefono: 4578124895, ayudantes: [{nombre: 'Jhon', edad: 17}, {nombre: 'Edgar', edad: 15}]
    }
  ];
  busID: IAutobuses[] = [
    { id: 1 , serie: 123456 , ruta: 'Culiacan -> Mazatlan' , estatus: 'Circulacion'},
    { id: 2 , serie: 78910 , ruta: 'Culiacan -> Mazatlan' , estatus: 'Circulacion'},
    { id: 3 , serie: 564872 , ruta: 'Culiacan -> Guadalajara' , estatus: 'Circulacion'},
    { id: 4 , serie: 879421 , ruta: 'Culiacan -> Guadalajara' , estatus: 'Circulacion'}
  ] ;
  displayedColumns: string[] = [ 'nombre' , 'matricula', 'autobuses' , 'telefono', 'ayudantes', 'accion' ];
  constructor(private modalService: BsModalService,
              private fb: FormBuilder) {  }
  // tslint:disable-next-line:typedef
  ngOnInit(): void {
    this.crearFormulario();
  }
  // tslint:disable-next-line:typedef
  public editButton(ele: IChoferes)
  {
    this.inicializarFormulario(ele);
    this.openModal();
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
  public crearFormulario()
  {
    this.choferForm = this.fb.group(
      {
        id: new FormControl(null),
        nombre: new FormControl('', Validators.required),
        matricula: new FormControl('', Validators.required),
        autobuses: new FormControl('', Validators.required),
        telefono: new FormControl('', Validators.required),
        ayudantes: new FormControl('', Validators.required)
      }
    );
  }
  // tslint:disable-next-line:typedef
  public inicializarFormulario(chof: IChoferes)
  {
    this.title = chof.id ? 'Editar' : 'Nuevo(+)';
    console.log(this.title);
    this.bus = chof.autobuses;
    this.choferForm.setValue(
      {
        id: chof.id,
        nombre: chof.nombre,
        matricula: chof.matricula,
        autobuses: this.bus,
        telefono: chof.telefono,
        ayudantes: chof.ayudantes
      }
    );
  }
  // tslint:disable-next-line:typedef
  public openModal(){
    this.modalService.show(this.template);
  }
}
