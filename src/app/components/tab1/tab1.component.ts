import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.scss']
})

export class Tab1Component implements OnInit {

  id = '';
  name = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.name = this.route.snapshot.params.name;
  }

  ngAfterViewInit(){
    
  }

}
