import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import * as Echarts from 'echarts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  chartComponentElement: any;
  @ViewChild('chart_component') chartComponent;
  chartServiceElement: any;

  constructor(public element:ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.initiateCharts();
  }

  initiateCharts(){
    if(this.chartComponentElement != 'undefined' && this.chartComponentElement){
        this.chartServiceElement.unsubscribe();
    } 

    this.chartComponentElement = Echarts.init(this.chartComponent.nativeElement);
    
    this.chartComponentElement.showLoading({
                            text: "Loading..",
                            textStyle: {
                                color: "#ccc"
                            }
                        });
    this.createChart();
  }

  createChart(){
      
      let options = {
                      title : {
                          text: 'Test Chart',
                          subtext: 'Sub title',
                          x:'left'
                      },
                      tooltip : {
                          trigger: 'item',
                          formatter: "{a} <br/>{b} : {c} ({d}%)"
                      },
                      legend: {
                          orient: 'vertical',
                          left: 'right',
                          data: ['Data Set1','Data Set2','Data Set3','Data Set4','Data Set5']
                      },
                      series : [
                          {
                              name: 'Series Name',
                              type: 'pie',
                              radius : '55%',
                              center: ['50%', '60%'],
                              data:[
                                  {value:335, name:'Data Set1'},
                                  {value:310, name:'Data Set2'},
                                  {value:234, name:'Data Set3'},
                                  {value:135, name:'Data Set4'},
                                  {value:1548, name:'Data Set5'}
                              ],
                              itemStyle: {
                                  emphasis: {
                                      shadowBlur: 10,
                                      shadowOffsetX: 0,
                                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                                  }
                              }
                          }
                      ]
                  };
    this.chartComponentElement.setOption(options);
    this.chartComponentElement.hideLoading();  

  }

  onResize(event){
    if(this.chartComponentElement != null)
      this.chartComponentElement.resize();
  }

}
