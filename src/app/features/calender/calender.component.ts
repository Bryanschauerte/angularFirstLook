// '../../../../node_modules/ng2-datepicker/src/styles/ng2-datepicker.sass'
  // styleUrls: [ './hero-search.component.css' ],
  import { Component } from '@angular/core';
  import { DatePickerOptions, DateModel } from 'ng2-datepicker';

  @Component({
    selector: 'calender-component',
    templateUrl: './calender.component.html',
    styleUrls: [ './calender.component.css'],
    styles:[`.ion-ios-calendar{background-color:green;}`],
    moduleId: module.id
  })
  export class CalenderComponent {
    date: DateModel;
    options: DatePickerOptions;

    constructor() {
      this.options = new DatePickerOptions({style:'normal'});
    }
  }

  // app.component.html
