import {Component, Inject, OnInit,ChangeDetectorRef} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {IChoferes} from '../../models/choferes';
import {IAutobuses} from '../../models/autobuses';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-choferes-dialog',
  templateUrl: './choferes-dialog.component.html',
  styleUrls: ['./choferes-dialog.component.css']
})
export class ChoferesDialogComponent implements OnInit {
  toppings = new FormControl();
  choferFormDialog: FormGroup;
  ayudantesArr: FormArray;
  //autobusesArr: IAutobuses;
  title: string;
  displayedColumns: string[] = ['nombre','edad'];
  dataSource: MatTableDataSource<any>;
  constructor(public dialogRef: MatDialogRef<ChoferesDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,
  private chg: ChangeDetectorRef) {
    this.title = data.id ? 'Editar' : 'Nuevo(+)';
    //this.ayudantesArr= data.ayudantes;
    //this.autobusesArr= data.autobuses;
    /*this.dataSource = new MatTableDataSource<any>()
    this.dataSource.data = data.value.ayudantes;*/
    this.ayudantesArr = new FormArray([]);
    console.log(data);
    console.log(data.value.ayudantes);

  }

  ngOnInit(): void {
    this.data.value.ayudantes.map(ing => {
      let index = this.data.value.ayudantes.indexOf(ing);
      this.ayudantesArr.push(
        new FormControl(this.toppingList[index], [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(64),
          Validators.pattern('^[a-zA-Z ]*$')
        ])
      );
    });
  }

  guardaChofer()
  {
    console.log(this.data);
    this.dialogRef.close({data: this.data})
    this.dialogRef.close();
  }
  eliminaRegistro() {
    let indexValue;

    indexValue = this.data.value.ayudantes.indexOf(this.toppings.value.toString());
    this.toppingArray.removeAt(indexValue);
    this.respaldoArray = this.toppingArray;
    //this.choferFormDialog.controls['ayudantes'] = this.toppingArray.value;
  }
  disabledButton() {
    let verify: boolean = false;
    if (this.toppingList.length < 3) {
      verify = true;
    }
    return verify;
  }
  isControlHasError(controlName: string, type: string){
    let control = this.data.controls[controlName];

    if (!control){
      return false;
    }
    return control.hasError(type) && (control.dirty || control.touched);
  }
  detectManually(){
    this.chg.detectChanges();
  }
}
