import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  @Input() showOverlay:boolean;
  @Output() closeOverlay = new EventEmitter<boolean>();

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  close() {
    this.closeOverlay.emit();
  }

  preventDefaultSearch($event) {
    $event.stopPropagation();
  }

  search (text:string) {
    this.router.navigate( [ 'search', text ] );
  }
}
