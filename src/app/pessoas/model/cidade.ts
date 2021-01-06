import { Estado } from './estado';


export class Cidade{
  id: number;
  nome: string;
  estado: Estado= new Estado();
}
