import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(private elRef: ElementRef) {
    this.elRef.nativeElement.style.color = 'Red';
    this.elRef.nativeElement.style.fontSize = '20px';
  }

  // @HostBinding('style.border') varborder = '5px solid red';
  // @HostBinding('style.backgroundColor') varbgcolor = 'lightgray';

  // @HostBinding('style.border') varborder: string;
  // @HostListener('mouseover') onMouseOver() {
  //   this.varborder = '5px solid red';
  // }
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.varborder = '';
  // }
  // @HostListener('click') onMouseClick() {
  //   window.alert('Hello');
  // }

  @Input() defaultColor: string = 'red';
  @Input() mouseoverClr: string = 'black';
  @Input() mouseleaveClr: string = 'blue';

  @HostBinding('style.backgroundColor') varbgcolor: string;
  ngAfterViewInit() {
    this.varbgcolor = this.defaultColor;
  }
  @HostListener('mouseover') onOver() {
    this.changeBgColor(this.mouseoverClr);
  }
  @HostListener('mouseleave') onLeave() {
    this.changeBgColor(this.mouseleaveClr);
  }
  changeBgColor(color: string) {
    this.varbgcolor = color;
  }
}
