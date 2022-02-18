import { Component, OnInit } from '@angular/core';
import { navItems } from '../_nav';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {

  public sidebarMinimized = false;
  public navItems = navItems;

  toggleMinimize(e: boolean) {
    this.sidebarMinimized = e;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
