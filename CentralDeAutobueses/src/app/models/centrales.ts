import { IAutobuses} from './autobuses';

export interface ICentrales {
  id: number;
  nombre: string;
  ubicacion: string;
  autobuses: IAutobuses[];
}
