import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  public priceFilterForm = new FormGroup({
    min: new FormControl(''),
    max: new FormControl(''),
  });

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigate(
      [],
      {
        queryParams: this.priceFilterForm.value,
        queryParamsHandling: 'merge'
      }
    );
  }

}
