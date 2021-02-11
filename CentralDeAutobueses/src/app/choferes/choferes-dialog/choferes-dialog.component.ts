import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormGroup} from '@angular/forms';
import {IChoferes} from '../../models/choferes';
import {IAutobuses} from '../../models/autobuses';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-choferes-dialog',
  templateUrl: './choferes-dialog.component.html',
  styleUrls: ['./choferes-dialog.component.css']
})
export class ChoferesDialogComponent implements OnInit {
  choferFormDialog: FormGroup;
  ayudantesArr;
  autobusesArr: IAutobuses;
  title: string;
  displayedColumns: string[] = ['nombre','edad'];
  dataSource: MatTableDataSource<any>;
  constructor(public dialogRef: MatDialogRef<ChoferesDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) {
    this.title = data.id ? 'Editar' : 'Nuevo(+)';
    this.ayudantesArr= data.ayudantes;
    this.autobusesArr= data.autobuses;
    this.dataSource = new MatTableDataSource<any>()
    this.dataSource.data = data.value.ayudantes;
    console.log(data);
    console.log(data.value.ayudantes);

  }

  ngOnInit(): void {
  }

  guardaChofer()
  {
    console.log(this.data);
  }
  isControlHasError(controlName: string, type: string){
    let control = this.data.controls[controlName];

    if (!control){
      return false;
    }

    return control.hasError(type) && (control.dirty || control.touched);
  }
}
