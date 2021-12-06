import { Component } from '@angular/core';
import { Estudante } from './arquivo'; //importando o arquivo.ts para o app.component.ts

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TabelaAlunos';

  //inserindo os 5 alunos com dados completos

  juliana: Estudante = new Estudante("Juliana Barroso", 3393690, "Análise e Desenvolvimento de Sistemas", "05/03/1987");
  ana: Estudante = new Estudante("Ana de Souza", 1122331, "Pedagogia", "15/10/1990");
  jose: Estudante = new Estudante("José da Silva", 1122332, "Engenharia Civil", "08/05/1989");
  maria: Estudante = new Estudante("Maria Soares", 1122333, "Ciências Contábeis", "27/04/1988");
  mateus: Estudante = new Estudante("Mateus Rocha", 1122334, "Tecnologia em Gestão de Recursos Humanos", "11/11/1993");

  //enviando os alunos no constructor do arquivo.ts
  alunos: Estudante[] = [this.juliana, this.ana, this.jose, this.maria, this.mateus];
  
}
