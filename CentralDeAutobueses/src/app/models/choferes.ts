import {IAutobuses} from './autobuses';

export interface IChoferes {
  id_chofer: number;
  nombre: string;
  matricula: string;
  autobuses: IAutobuses[];
  telefono: number;
  ayudantes: {nombre: string, edad: number}[];
}
