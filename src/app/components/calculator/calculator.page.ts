import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'calculator.page.html',
  styleUrls: ['calculator.page.scss']
})
export class CalculatorPage {
  gastosFixos!: number;
  gastosVariaveis!: number;
  horasPorDia!: number;
  diasPorSemana!: number;
  faturarPorMes!: number;
  valorHora!: number;
  isInvalid: boolean = false;
  isDisabled = true;

  constructor() {}

  calcularValorHora() {
    // Calcula o total de gastos mensais
    const totalGastos = this.gastosFixos + this.gastosVariaveis;

    // Define o total de ganhos desejado como faturar por mês
    const totalGanhos = this.faturarPorMes;

    // Calcula o total de horas trabalhadas por mês
    const horasSemanais = this.horasPorDia * this.diasPorSemana;
    const horasMensais = horasSemanais * 4;

    // Calcula o valor da hora
    this.valorHora = totalGanhos / horasMensais;
  }
}
