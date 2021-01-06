import { Endereco } from './endereco';
import { Grupo } from './grupo';
import { Usuario } from "./usuario";

export class Pessoa {
  id: number;
  nome: string;
  email: string;
  dataNascimento: string;
 // dataCadastro: string;
 // dataAtualizacao: string;
  usuario: Usuario ;
  endereco: Endereco = new Endereco();
  grupos: Grupo[];
}
