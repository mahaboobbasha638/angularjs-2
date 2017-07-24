import { NgModule } from '@angular/core';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule, ActivatedRoute} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.scss']
})

export class Tab1Component implements OnInit, OnDestroy {

  paramsRef: any;
  id = '';
  name = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //this.id = this.route.snapshot.params.id;
    //this.name = this.route.snapshot.params.name;
    this.paramsRef = this.route.params.subscribe(params => {
      this.id = params.id;
      this.name = params.name;
    })
  }

  ngOnDestroy(){
    this.paramsRef.unsubscribe();
  }

  ngAfterViewInit(){
    
  }

}
