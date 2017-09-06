import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[bgColor]'
})
export class AttributeStyleDirective {

  @Input() bgColor: string;

  constructor(private el: ElementRef) { 
    //el.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.highlightColor(this.bgColor);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlightColor(this.bgColor);
  }

  public highlightColor(color){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
