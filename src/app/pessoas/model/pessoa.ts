import { Endereco } from './endereco';
import { Grupo } from './grupo';
import { Usuario } from "./usuario";

export class Pessoa {
  id: number;
  nome: string;
  email: string;
  dataCadastro: string;
  dataAtualizacao: string;
  usuario: Usuario;
  endereco: Endereco;
  grupos: Grupo[] = [];
}
