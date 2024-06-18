import { Directive, ElementRef, Renderer2, Inject } from '@angular/core';

@Directive({
  selector: '[cherry-button]'
})
export class CherryButtonDirective {


  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#C91959');
    this.renderer.setStyle(this.el.nativeElement, 'color', '#EBD1EA');
    this.renderer.setStyle(this.el.nativeElement, 'font-family', 'Cherry Swash, cursive');
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '30px');
    this.renderer.setStyle(this.el.nativeElement, 'border', 'none');
    this.renderer.setStyle(this.el.nativeElement, 'padding', '10px');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
    this.renderer.setStyle(this.el.nativeElement, 'width', 'auto');
    this.renderer.setStyle(this.el.nativeElement, 'height', '100%');

  }

}
