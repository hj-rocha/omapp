import { Endereco } from '../../geografia/models/endereco';
import { Grupo } from './grupo';
import { Usuario } from "./usuario";

export class PessoaJuridica {
  id: number;
  nome: string;
  email: string;
  razaoSocial: string;
  cnpj: string;
  dataNascimento: string;
  telefone: string;
  telefoneComercial: string;
  anotacoes: string;
 // dataCadastro: string;
 // dataAtualizacao: string;
  usuario: Usuario ;
  endereco: Endereco = new Endereco();
  grupos: Grupo[];
}
