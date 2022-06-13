import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[mostrarSi]',
})
export class MostrarsiDirective {
  @Input('mostrarSi') show = false;
  @Input('mostrarSiElse') otherTemplate: TemplateRef<any> | null = null;
  constructor(
    private viewContainerRef: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  ngOnInit(): void {
    if (this.show) this.viewContainerRef.createEmbeddedView(this.template);
    else if (this.otherTemplate)
      this.viewContainerRef.createEmbeddedView(this.otherTemplate);
  }
}
