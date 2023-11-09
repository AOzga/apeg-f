
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appProgressdirective]'
})
export class ProgressdirectiveDirective {

  constructor() { }
  @HostListener('scroll', ['$event'])
  scroll(event:any) {

    var winScroll = event.currentTarget.scrollTop;
    var height = event.currentTarget.scrollHeight - event.currentTarget.clientHeight;
    var scrolled = (winScroll / height) * 100;
  }
}
