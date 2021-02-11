import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

declare var mapboxgl: any;


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit, AfterViewInit {

  lat: number;
  lng: number;

  constructor( private router: ActivatedRoute, private navCtlr: NavController) { }

  ngOnInit() {
    let geo: any = this.router.snapshot.paramMap.get('geo');
    // console.log('Geo',geo);
    geo = geo.substr(4);
    geo = geo.split(',');
    

    this.lat = Number(geo[0]);
    this.lng = Number(geo[1]);
    // console.log(this.lng, this.lat);
  }

  onClick() {
    this.navCtlr.navigateForward('tabs/tab2');
  }


  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    mapboxgl.accessToken = 'pk.eyJ1IjoibWVkbTg5IiwiYSI6ImNra3p1Ymt2azBqeHQycnBsNHh2cGVwOHoifQ.HndsdYqDf3L6B4CTBuCpYw';
    
    var map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/light-v10',
      center: [this.lng, this.lat],
      zoom: 15.5,
      pitch: 45,
      bearing: -17.6,
      container: 'map',
      antialias: true
    });
    
    map.on('load', ()=> {
      // Insert the layer beneath any symbol layer.

      map.resize();

      new mapboxgl.Marker()
      .setLngLat([this.lng, this.lng])
      .addTo(map);

      var layers = map.getStyle().layers;
       
      var labelLayerId;
      for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
            labelLayerId = layers[i].id;
             break;
        }
      }
       
      map.addLayer(
      {
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
          'fill-extrusion-color': '#aaa',
          
          // use an 'interpolate' expression to add a smooth transition effect to the
          // buildings as the user zooms in
          'fill-extrusion-height': [
          'interpolate',
          ['linear'],
          ['zoom'],
          15,
          0,
          15.05,
          ['get', 'height']
          ],
          'fill-extrusion-base': [
            'interpolate',
            ['linear'],
            ['zoom'],
            15,
            0,
            15.05,
            ['get', 'min_height']
          ],
          'fill-extrusion-opacity': 0.6
        }
      },
      labelLayerId
      );
      });


  }

}
