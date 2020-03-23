import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {

  @Input() templateRefExp: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }
}
