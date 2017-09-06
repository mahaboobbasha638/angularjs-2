import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';

import { TdocService } from '../../services/tdoc/tdoc.service';
import { TdocContentService } from '../../services/tdoc-content/tdoc-content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [TdocService, TdocContentService],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HomeComponent implements OnInit, OnDestroy {

  tdocContentRequest: any;
  tdocRequest: any;
  tdocHtml: any;
  tdocHtmlContent: any;
  observerRef: any;
  fileName: any;
  activeTab: any;

  constructor(private route: ActivatedRoute, private tdocService: TdocService,
    private tdocContentService: TdocContentService) { 
      this.activeTab = "list";
  }

  ngOnInit() {

    let thisView = this;
    this.observerRef = this.route.params.subscribe(params => {
      if(params["file"]){
        thisView.getFileContent(params["file"]);
        this.activeTab = "content";
      } else {
        thisView.getFileList();
        this.activeTab = "list";
      }
    });

  }

  ngOnDestroy(){
    this.observerRef.unsubscribe();
  }

  ngAfterViewInit(){
    
  }

  getFileList(){
    var thisView = this;

    if(thisView.tdocRequest){
        thisView.tdocRequest.unsubscribe();
    }

    thisView.tdocRequest =  thisView.tdocService.getData({})
    .subscribe(
        result => {
          thisView.tdocHtml = result;
        },
        err => {}
    );

  }

  getFileContent(fileName){
    var thisView = this;
    
    if(thisView.tdocContentRequest){
        thisView.tdocContentRequest.unsubscribe();
    }

    thisView.tdocContentRequest =  thisView.tdocContentService.getData({"filename":fileName})
    .subscribe(
        result => {
          thisView.tdocHtmlContent = result;
        },
        err => {}
    );
  }

}
