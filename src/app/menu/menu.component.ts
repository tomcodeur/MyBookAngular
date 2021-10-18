import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuIsHidden : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  hideMyMenu() {
    this.menuIsHidden =! this.menuIsHidden;
    let menu = document.querySelector('.container-menu') as HTMLElement;
    menu.classList.add('.close-menu');
    console.log(menu);
  }

}
