import { Cidade } from './cidade';
export class Endereco {
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  referencia: string;
  cidade: Cidade = new Cidade();
}
