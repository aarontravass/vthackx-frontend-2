import { Component, OnInit, Renderer, HostListener, Inject  } from '@angular/core';
import { Location } from '@angular/common';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor( private renderer : Renderer, public location: Location, @Inject(DOCUMENT) document) {}
  @HostListener('window:scroll', ['$event'])
    onWindowScroll(e) {
       if (window.pageYOffset > 550) {
         var element = document.getElementById('navbar-top');
         if (element) {
          element.classList.remove('navbar-transparent');
         }
       } else {
        var element = document.getElementById('navbar-top');
        if (element) {
          element.classList.add('navbar-transparent');
        }
       }
    }
  ngOnInit(){
    this.onWindowScroll(event);
  }
}