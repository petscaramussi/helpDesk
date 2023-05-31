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
  status: Number[] = [];

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

      let counter2 = [0, 0, 0];
      for (let i = 0; i < this.ELEMENT_DATA.length; i++) {
        if (this.ELEMENT_DATA[i].status == '0') counter2[0]++;
        if (this.ELEMENT_DATA[i].status == '1') counter2[1]++;
        if (this.ELEMENT_DATA[i].status == '2') counter2[2]++;
      }

      const obj = this.ELEMENT_DATA.reduce((val, cur) => {
        val[cur.nomeCliente] = val[cur.nomeCliente] ? val[cur.nomeCliente] + 1 : 1;
        return val;
      }, {});
      
      const res = Object.keys(obj).map((key) => ({
        tecnico: key,
        count: obj[key]
      }));


      let counterTecNomes = [];
      for (let i = 0; i < res.length; i++){
        counterTecNomes.push(res[i].tecnico);
      }

      let counterTecChamados = [];
      for (let i = 0; i < res.length; i++){
        counterTecChamados.push(res[i].count);
      }

      console.log(counterTecNomes);
      
      

      
      this.prioridade = counter;
      this.status = counter2;

      let htmlRef = this.elementRef.nativeElement.querySelector(`#myChart`);
      this.myChart = new Chart(htmlRef, {
        type: 'bar',
        data: {
          labels: ['BAIXA', 'MEDIA', 'ALTA'],
          datasets: [{
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
              'rgba(75, 192, 192)',
              'rgba(54, 162, 235)',
              'rgba(153, 102, 255)'
            ],
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

      let htmlRef2 = this.elementRef.nativeElement.querySelector(`#myChart2`);
      this.myChart = new Chart(htmlRef2, {
        type: 'bar',
        data: {
          labels: ['ABERTO', 'EM ANDAMENTO', 'ENCERRADO'],
          datasets: [{
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)'
            ],
            label: 'Status',
            data: [this.status[0], this.status[1], this.status[2]],
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

      let htmlRef3 = this.elementRef.nativeElement.querySelector(`#myChart3`);
      this.myChart = new Chart(htmlRef3, {
        type: 'bar',
        data: {
          labels: counterTecNomes,
          datasets: [{
            backgroundColor: [
              'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
              'rgba(54, 162, 235)'
            ],
            label: 'Técnico x Chamado',
            data: counterTecChamados,
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
