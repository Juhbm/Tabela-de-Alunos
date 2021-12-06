//criação do arquivo.ts solicitado na atividade, inserindo o código que vai estruturar o envio dos dados para a tabela

export class Estudante { //criação da classe com nome Estudante e suas variáveis definindo como number para o ru e string para os demais dados.
    nome: string;
    ru: number;
    curso: string;
    dataNasc: string;

    constructor(nome: string, ru: number, curso: string, dataNasc: string){
        this.nome = nome;
        this.ru = ru;
        this.curso = curso;
        this.dataNasc = dataNasc;
      }
}