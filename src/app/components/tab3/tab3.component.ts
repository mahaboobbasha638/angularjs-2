import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.component.html',
  styleUrls: ['./tab3.component.scss']
})
export class Tab3Component implements OnInit, OnDestroy {

  id: any;
  private observerRef: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.id = "test-id";
  }

  ngOnInit() {
    console.log(this.route.snapshot.params);
    console.log(this.route);
    this.observerRef = this.route.params.subscribe(params => {
      console.log("observer");
      console.log(params);
    });
  }

  ngOnDestroy(){
    this.observerRef.unsubscribe();
  }

  goHome(){
    this.router.navigate(['tab1', {id:"bashaid", name:"testing name"}]);
  }

}
