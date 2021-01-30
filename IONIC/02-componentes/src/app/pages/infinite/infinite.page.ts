import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  data: any[] = Array(20);

  //  se usa para no hacer uso desde el html, sino manejarlo desde el ts
  @ViewChild( IonInfiniteScroll ) inifiteScroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData(event) {
    console.log(event);

    setTimeout(() => {

      if ( this.data.length > 50 ) {
        this.inifiteScroll.complete();
        this.inifiteScroll.disabled = true;
        return;
      }

      const nuevoArr = Array(20);
      this.data.push( ...nuevoArr );

      // event.target.complete();
      this.inifiteScroll.complete();
    }, 1500);
  }

}
