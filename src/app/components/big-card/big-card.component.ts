import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent implements OnInit {
  @Input()
  Id: string = '';
  @Input()
  urlPhoto: string = '';
  @Input()
  date: Date | undefined;
  @Input()
  local: string = '';
  @Input()
  description: string = '';


  constructor() {}
  ngOnInit(): void {}

  getdescriptionParts(): string[] {
    const descriptionParts: string[] = [];

    // Divide a descrição em palavras
    const palavras = this.description.split(' ');

    // Limites de caracteres para cada parágrafo
    const limitesCaracteres = [23, 17, 10];

    for (const limite of limitesCaracteres) {
      let currentParagraph = '';

      // Adiciona palavras ao parágrafo até atingir o limite de caracteres
      while (
        palavras.length > 0 &&
        currentParagraph.length + palavras[0].length <= limite
      ) {
        currentParagraph += palavras.shift() + ' ';
      }

      descriptionParts.push(currentParagraph.trim());
    }

    return descriptionParts;
  }

  formatarData(data: Date | undefined): string {
    if (data) {
      const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      };
      return data.toLocaleDateString('pt-BR', options);
    }
    return 'Data não disponível';
  }

}
