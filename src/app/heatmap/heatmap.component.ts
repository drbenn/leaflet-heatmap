import { Component, OnInit } from '@angular/core';
import * as L from "leaflet";
import 'leaflet.heat/dist/leaflet-heat.js'
import { addressPoints } from '../../assets/realworld.10000'
import { heatData } from './heatData';

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.scss']
})

// https://stackoverflow.com/questions/54858755/how-to-put-a-heatmap-in-ngx-leaflet
// https://codesandbox.io/s/jn11pwkxw?file=/src/app/app.component.ts:43-72
export class HeatmapComponent implements OnInit {
  options = {
    layers: [
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: ""
      })
    ],
    zoom: 5,
    center: L.latLng(48, 31)
  };

    // var heat = L.heatLayer([
  //   [50.5, 30.5, 0.2], // lat, lng, intensity
  //   [50.6, 30.4, 0.5],
  //   ...
  // ], {radius: 25}).addTo(map);

  latLngData = [
    {
    lat: 48.37, 
    lng: 31.16
    },
    {
      lat: 48.37, 
      lng: 31.16
    },
    {
      lat: 48.37, 
      lng: 31.16
    },
    {
      lat: 48.37, 
      lng: 31.16
    },
]
  onMapReady(map:any) {
    // let newAddressPoints = addressPoints.map(function (p) { return [p[0], p[1]]; });
    // const heat = L.heatLayer(newAddressPoints, {radius: 25}).addTo(map);
    // let newAddressPoints = addressPoints.map(function (p) { return [p[0], p[1]]; });
    const heat = (L as any).heatLayer(this.latLngData, {radius: 25}).addTo(map);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
