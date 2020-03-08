import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appNgIfStructuralDirective]'
})
export class NgIfStructuralDirectiveDirective {

  constructor(private tempRef: TemplateRef<any>, private viewContRef: ViewContainerRef) { }
  @Input() set appNgIfStructuralDirective(condition: boolean) {
    if (condition) {
      this.viewContRef.createEmbeddedView(this.tempRef);
    } else {
      this.viewContRef.clear();
    }
  }
}
