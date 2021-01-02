import { Endereco } from './endereco';
import { Grupo } from './grupo';
import { Usuario } from "./usuario";

export class Pessoa {
  id: number;
  nome: String;
  email: String;
  dataNascimento: String;
  dataCadastro: String;
  dataAtualizacao: String;
  usuario: Usuario = new Usuario();
  endereco: Endereco = new Endereco();;
  grupos: Grupo[] = [];
}
