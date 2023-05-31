import { Component, ElementRef, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
import { Chamado } from 'src/app/models/chamado';
import { ChamadoService } from 'src/app/services/chamado.service';
Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  myChart: any;

  ELEMENT_DATA: Chamado[] = [];

  prioridade: Number[] = [];

  constructor(private elementRef: ElementRef,
    private service: ChamadoService) { }

  ngOnInit(): void {
    this.RenderPrioridadeChart();
  }

  RenderPrioridadeChart() {
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta;

      let counter = [0, 0, 0];
      for (let i = 0; i < this.ELEMENT_DATA.length; i++) {
        if (this.ELEMENT_DATA[i].prioridade == '0') counter[0]++;
        if (this.ELEMENT_DATA[i].prioridade == '1') counter[1]++;
        if (this.ELEMENT_DATA[i].prioridade == '2') counter[2]++;
      }
      this.prioridade = counter;

      let htmlRef = this.elementRef.nativeElement.querySelector(`#myChart`);
      this.myChart = new Chart(htmlRef, {
        type: 'bar',
        data: {
          labels: ['BAIXA', 'MEDIA', 'ALTA'],
          datasets: [{
            label: 'Prioridade dos Chamados',
            data: [this.prioridade[0], this.prioridade[1], this.prioridade[2]],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    })
  }





}
