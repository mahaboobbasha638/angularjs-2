# Angularjs 2 Essentials
- install angular cli

        npm install -g angular-cli

- creatting project with sass style

        ng new pcs1 --style=sass // for sass
        ng new pcs --style=scss  // for scss

- add Bootstrap

        npm install bootstrap@next

- Build the project

        ng build

- Building and starting project

        ng server

- Adding font awesome style for icons

        npm install font-awesome --save

- Adding echarts

        npm install echarts --save
        npm install @types/echarts --save-dev

- Adding d3

        npm install d3 --save
        npm install @types/d3 --save-dev

- Initializing d3 and echarts instances


        import { Component, ElementRef, ViewChild } from '@angular/core';
        import * as D3 from 'd3/index';
        import * as Echarts from 'echarts';

        @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
        })
        export class AppComponent{
        title = 'app works!';
        @ViewChild('mapRef') mapRef;
        d3Element: any;
        echartElement: any;
        d3Svg: any;
        constructor(private element: ElementRef) {
            
            //this.echartElement.setOptions();
        }

        ngAfterViewInit(){
        this.d3Element = D3.select(this.element.nativeElement);
        this.d3Svg = this.d3Element.append('svg')
            .attr('width', "200px")
            .attr('height', "200px")
            .append('g')
            .attr('transform', 'translate(100px, 100px)');
            this.echartElement = Echarts.init(this.mapRef.nativeElement);  
        }


        }
