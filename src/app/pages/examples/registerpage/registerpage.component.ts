import { Component, OnInit, OnDestroy, HostListener } from "@angular/core";
declare var tableau: any;

@Component({
  selector: "app-registerpage",
  templateUrl: "registerpage.component.html"
})
export class RegisterpageComponent implements OnInit, OnDestroy {
 
  constructor() {
    
  }
  viz: any;

  ngOnInit() {
    var divElement = document.getElementById("viz1668325171173");
    var vizElement = divElement.getElementsByTagName("object")[0];
    console.log(vizElement)
    vizElement.style.width = "100%";
    vizElement.style.height = divElement.offsetWidth * 0.75 + "px";
    var scriptElement = document.createElement("script");
    scriptElement.src =
      "https://public.tableau.com/javascripts/api/viz_v1.js";
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }
  ngOnDestroy() {
    
  }
}
