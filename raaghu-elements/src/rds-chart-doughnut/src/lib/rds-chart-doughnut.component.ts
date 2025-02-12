import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import Chart from 'chart.js/auto';
// import { ChartDataSet } from '@rds-common-lib';

export interface ChartDataSetDoughnut {
  label: string,
  data: Array<number>;
  fill: boolean,
  borderColor: string,
  tension: number,
  backgroundColor: Array<string>;
  borderWidth: number;
}

@Component({
  selector: 'rds-chart-doughnut',
  templateUrl: './rds-chart-doughnut.component.html',
  styleUrls: ['./rds-chart-doughnut.component.scss']
})
export class RdsChartDoughnutComponent implements OnInit {

  static count = 0;
  canvas: any;
  ctx: any;
  //chartId = 'doughnutChart' + RdsChartDoughnutComponent.count;
  @Input() chartId:string='doughnutChart0';
  @Input() chartWidth = 400;
  @Input() chartHeight = 400;
  @Input() chartStyle?: any;
  @Input() chartLabels?: any
  @Input() canvasBackgroundColor?: any;
  @Input() ChartDataSets?: ChartDataSetDoughnut[] | any;
  @Input() chartOptions?: any;
  @Input() titleText = '';
  @Input() subTitleText = '';
  style: CSSStyleDeclaration | undefined;

  constructor() {
    RdsChartDoughnutComponent.count++;
  }

  ngOnInit(): void {
    this.style = getComputedStyle(document.body);
    this.ChartDataSets[0].backgroundColor[0] = this.style.getPropertyValue('--chartColor1');
    this.ChartDataSets[0].backgroundColor[1] = this.style.getPropertyValue('--chartColor2');
    this.ChartDataSets[0].backgroundColor[2] = this.style.getPropertyValue('--chartColor3');
    this.ChartDataSets[0].backgroundColor[3] = this.style.getPropertyValue('--chartColor4');
    this.ChartDataSets[0].backgroundColor[4] = this.style.getPropertyValue('--chartColor5');
    this.ChartDataSets[0].backgroundColor[5] = this.style.getPropertyValue('--chartColor6');
    this.ChartDataSets[0].backgroundColor[6] = this.style.getPropertyValue('--chartColor7');
    this.ChartDataSets[0].backgroundColor[7] = this.style.getPropertyValue('--chartColor8');
    this.ChartDataSets[0].backgroundColor[8] = this.style.getPropertyValue('--chartColor9');
    this.ChartDataSets[0].backgroundColor[9] = this.style.getPropertyValue('--chartColor10');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.doughnutChartBrowser();
  }

  ngAfterViewInit(): void {
    this.doughnutChartBrowser();
  }

  public get classes(): string[] {
    var classes = ['res-width']
    if (this.chartStyle === "Dark") {
      classes.push('dark-mode')
      return classes
    }
    return classes
  }

  doughnutChartBrowser(): void {
    let chartStatus = Chart.getChart(this.chartId);
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }
    this.canvas = document.getElementById(this.chartId);
    const title = this.titleText;
    const subTitle = this.subTitleText;
    if (this.canvas !== null) {
      this.canvas.style.backgroundColor = this.canvasBackgroundColor;
      this.ctx = this.canvas.getContext('2d');
      const centerText = {
        id: 'counter3',
        beforeDraw(chart, args, options) {
          const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
          ctx.save();
          ctx.font = '600 1.2rem Poppins';
          ctx.textAlign = 'center';
          ctx.fillText(title, width / 2, top + (height / 2.1));
          ctx.restore();

          ctx.font = '400 0.7rem Poppins';
          ctx.textAlign = 'center';
          ctx.fillText(subTitle, width / 2, (height / 0.85) / 2.1 + top);
          ctx.restore();
        }
      };
      const canvas = new Chart(this.ctx, {
        type: 'doughnut',
        data: {
          labels: this.chartLabels,
          datasets: this.ChartDataSets,
        },
        options: this.chartOptions,
        plugins: [centerText]
      });
      if(canvas !== null){
        canvas.canvas.style.height = this.chartHeight+'px'; 
        canvas.canvas.style.width = this.chartWidth+'px';
      } 
    }
  }

}
