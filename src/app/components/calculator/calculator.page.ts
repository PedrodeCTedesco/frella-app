import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'calculator.page.html',
  styleUrls: ['calculator.page.scss']
})
export class CalculatorPage {
  gastosFixos!: number;
  gastosVariaveis!: number;
  valorFrella!: number;
  valorHora!: number;
  isInvalid: boolean = false;

  constructor() {}

  calcularValorHora() {
    const totalGastos = this.gastosFixos + this.gastosVariaveis;
    const totalGanhos = totalGastos + this.valorFrella;

    // Considerando uma média de 160 horas de trabalho por mês
    const horasMensais = 160;

    // Calcula o valor da hora
    this.valorHora = totalGanhos / horasMensais;
  }
}
