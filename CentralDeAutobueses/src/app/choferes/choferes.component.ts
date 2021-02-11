import {ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {IChoferes} from '../models/choferes';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BsModalService} from 'ngx-bootstrap/modal';
import {IAutobuses} from '../models/autobuses';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { ChoferesDialogComponent } from './choferes-dialog/choferes-dialog.component';


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
  autobusesExt: { 1, 2, 3, 4 };
  bus: IAutobuses[];
  ayudantes: { nombre: string, edad: number }[];
  choferes: IChoferes[] = [
    {
      id: 1, nombre: 'Luis', matricula: 'zcdelrsas',
      autobuses: [
        {id: 1, serie: 123456, ruta: 'Culiacan -> Mazatlan', estatus: 'Circulacion'},
        {id: 2, serie: 123456, ruta: 'Culiacan -> Mazatlan', estatus: 'Circulacion'}
      ],
      telefono: 2278727123, ayudantes: [{nombre: 'Raul', edad: 25}]
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
        {id: 3, serie: 564872, ruta: 'Culiacan -> Guadalajara', estatus: 'Circulacion'}
      ],
      telefono: 8794532164, ayudantes: [{nombre: 'Brayan', edad: 17}, {nombre: 'Brayan', edad: 17}]
    },
    {
      id: 3, nombre: 'Juana', matricula: 'werqwecxa', autobuses: [
        {id: 4, serie: 879421, ruta: 'Culiacan -> Guadalajara', estatus: 'Circulacion'}
      ],
      telefono: 4578124895, ayudantes: [{nombre: 'Jhon', edad: 17}]
    }
  ];
  busID: IAutobuses[] = [
    {id: 1, serie: 123456, ruta: 'Culiacan -> Mazatlan', estatus: 'Circulacion'},
    {id: 2, serie: 78910, ruta: 'Culiacan -> Mazatlan', estatus: 'Circulacion'},
    {id: 3, serie: 564872, ruta: 'Culiacan -> Guadalajara', estatus: 'Circulacion'},
    {id: 4, serie: 879421, ruta: 'Culiacan -> Guadalajara', estatus: 'Circulacion'}
  ];
  displayedColumns: string[] = ['nombre', 'matricula', 'autobuses', 'telefono', 'ayudantes', 'accion'];
  dataSource: MatTableDataSource<any>;


  constructor(private modalService: BsModalService,
              private ref: ChangeDetectorRef,
              private fb: FormBuilder,
              public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<any>()
    this.dataSource.data = this.choferes;
  }

  ngOnInit(): void {
    this.crearFormulario();
  }

  public editButton(ele: IChoferes) {
    this.inicializarFormulario(ele);
    //this.openModal();
    this.openDialog();
  }

  public deleteButton(i) {
    console.log(i);
    this.dataSource.data.splice(i, 1);
    this.dataSource._updateChangeSubscription();
    this.ref.detectChanges()
  }

  public newButton() {
    this.openDialog();
  }

  public crearFormulario() {
    this.choferForm = this.fb.group(
      {
        id: new FormControl(null),
        nombre: new FormControl('',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(64)
          ]),
        matricula: new FormControl('',
          [
            Validators.required,
            Validators.minLength(14),
            Validators.maxLength(14)
          ]),
        autobuses: new FormControl(),
        telefono: new FormControl('',
          [
            Validators.required,
            Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$'),
            Validators.minLength(10),
            Validators.maxLength(10)
          ]),
        ayudantes: new FormControl()
      }
    );
  }

  public inicializarFormulario(chof: IChoferes) {
    this.bus = chof.autobuses;
    this.choferForm.reset(chof);

    console.log(chof.ayudantes);

  }
  public openModal() {
    this.modalService.show(this.template);
  }

  openDialog()
  {
    const dialogRef = this.dialog.open(ChoferesDialogComponent, {width: '330px',
      height: '500px',data: this.choferForm});

    dialogRef.afterClosed().subscribe( result => {
      console.log('Dialog: ${result}');
    })
  }

  isControlHasError(controlName: string, type: string){
    let control = this.choferForm.controls[controlName];

    if (!control){
      return false;
    }

    return control.hasError(type) && (control.dirty || control.touched);
  }
}
