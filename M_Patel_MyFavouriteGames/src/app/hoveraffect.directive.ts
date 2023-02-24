import { Directive, HostListener,HostBinding, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appHoveraffect]'
})
export class HoveraffectDirective {

  @Input('appHoveraffect') hoverstyle: string='';
  @HostBinding('style.textDecoration') textDecoration: string='';

  constructor(private element: ElementRef) {}

   @HostListener('mouseover') onMouseOver()  {
    
    if(this.hoverstyle === 'bold'){
      this.element.nativeElement.style.fontWeight = this.hoverstyle;
    } 
    else 
    {
      this.element.nativeElement.style.textDecoration = 'underline';
      this.element.nativeElement.style.fontWeight = 'bold';
    }
  }

  @HostListener('mouseout') onMouseOut()  {
    
    this.element.nativeElement.style.textDecoration = 'none';
    this.element.nativeElement.style.fontWeight = 'normal';
    }
  }
