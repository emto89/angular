import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {

  constructor(private el: ElementRef) {
    console.log("Directiva llamada");
    
  }
  
  @Input("appResaltar") nuevoColor: string;

  @HostListener('mouseenter') mouseEntro() {
    this.resaltar(this.nuevoColor || 'yellow');
  }
  @HostListener('mouseleave') mouseSalio() {
    this.resaltar(null);
  }
  private resaltar(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  
  
}
