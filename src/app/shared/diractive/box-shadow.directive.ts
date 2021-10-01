import { Directive,
   ElementRef,
    HostBinding,
    HostListener,
    Input,
    OnInit,
    Renderer2
     } from '@angular/core';

@Directive({
  selector: '[appBoxShadow]'
})
export class BoxShadowDirective implements OnInit {
  @Input() defualtColor : string = 'white';
  @HostBinding('style.color') color:string = "";
  @HostBinding('style.transition') transition:string = "all 0s";
  @HostBinding('style.cursor') cursor:string = "";
  constructor(private elementRef: ElementRef,private renderer:Renderer2) { }
  ngOnInit(): void {

  }
  @HostListener('mouseenter') mouseenter(e:Event){
    this.color = 'darkred';
    this.transition = 'all .6s';
    this.cursor = 'pointer';
  }
  @HostListener('mouseleave') mouseleave(e:Event){
    this.color = this.defualtColor;
    this.transition = 'all .6s';
  }

}


