import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Mon portfolio';
  menuIsVisible : boolean = false;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {

    this.matIconRegistry.addSvgIcon(
      "usericon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/user.svg")
    );
  }

  showMyMenu() {
    this.menuIsVisible =! this.menuIsVisible;
    let menu = document.querySelector('.container-menu') as HTMLElement;
    menu.classList.add('.close-menu');
  }

}
