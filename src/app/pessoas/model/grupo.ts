import { Permissao } from './permissao';
export class Grupo{

  id: number;
  nome: string;
  permissoes: Permissao[] = [];
}
