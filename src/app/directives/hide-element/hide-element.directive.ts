import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[hideElement]'
})
export class HideElementDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef) { }

  @Input() set hideElement(isHidden: boolean){
    if(!isHidden){
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    } else if(isHidden){
      this.viewContainerRef.clear();
    }
  }

}
