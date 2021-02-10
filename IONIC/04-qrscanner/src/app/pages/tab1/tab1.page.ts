import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( private barcodeScanner: BarcodeScanner) {}

  ionViewDidEnter() {
    console.log(" View Did Enter ");
  }
  ionViewDidLeave() {
    console.log(" View Did Leave ");
  }

  ionViewWillEnter() {
    console.log(" View Will enter ");
    this.scan(); 
  }

  ionViewWillLeave() {
    console.log(" View Will Leave ");
  }

  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });
  }


}
