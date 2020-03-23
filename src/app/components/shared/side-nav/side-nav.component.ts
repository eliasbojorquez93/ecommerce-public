import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @Input() isOpen:boolean = false;
  @Input() categories = [];
  @Output() closeSideNav = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {}

  close() {
    this.closeSideNav.emit();
  }

}
