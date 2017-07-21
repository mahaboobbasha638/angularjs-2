import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.component.html',
  styleUrls: ['./tab3.component.scss']
})
export class Tab3Component implements OnInit, OnDestroy {

  id: any;
  private observerRef: any;

  constructor(private route: ActivatedRoute) {
    this.id = "test-id";
  }

  ngOnInit() {
    console.log(this.route.snapshot.params);
    this.observerRef = this.route.params.subscribe(params => {
      console.log("observer");
      console.log(params);
    });
  }

  ngOnDestroy(){
    this.observerRef.unsubscribe();
  }

}
