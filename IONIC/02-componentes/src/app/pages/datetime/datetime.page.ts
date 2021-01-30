import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {

  fechaNaci: Date = new Date();
  customYearValues = [2025,2020, 2016, 2008, 2004, 2000, 1996];
  customPickerOptions = {
    buttons: [{
      text: 'Hola',
      handler: ( event) => console.log(event)
    }, {
      text: 'Mundo',
      handler: () => {
        console.log('Clicked Log. Do not Dismiss.');
        return false;
      }
    }]
  }

  constructor() { }

  ngOnInit() {
  }

  cambioFecha(event) {
    console.log( new Date(event.detail.value) );

  }


}
