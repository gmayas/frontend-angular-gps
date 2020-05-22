import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { GoogleMap } from '@angular/google-maps';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import * as _ from "lodash";
import { async } from '@angular/core/testing';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnDestroy, OnChanges {
  // Create an Observable that will publish a value on an interval
  public secondsCounter:any = interval(5000);
  //
  public uluru: any;
  public uluruA: any;
  public map: any;
  public infoWindow: any;
  public isAuth: boolean = false;
  public alive: boolean = true;
  public user: any;
  public Vehicles: any

  constructor(private auth: AuthService, private userServ: UsersService,
    private router: Router, private toastr: ToastrService, private google: GoogleMap) {
    this.user = this.auth.user();
    console.log('this.user.id: ', _.get(this.user.value, 'id'))
    this.getUserVehicle(null);
  }

  // Initialize and add the map
  initMap() {

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.uluru = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.map = new google.maps.Map(document.getElementById('map'), {
          center: this.uluru,
          zoom: 5
        });
        this.infoWindow = new google.maps.InfoWindow;
        this.infoWindow.setPosition(this.uluru);
        this.infoWindow.setContent(`Usted esta aqui: ${this.uluru.lat} ,  ${this.uluru.lng}`);
        this.infoWindow.open(this.map);
        this.map.setCenter(this.uluru);
      }, () => {
        this.handleLocationError(true, this.infoWindow, this.map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      this.handleLocationError(false, this.infoWindow, this.map.getCenter());
    }
    // add markers to map
    // Subscribe to begin publishing values
    let rdPS1 = 0, rdPS2 = 0;
    let markers = [];
    let dataIn = {};
    let marker = new google.maps.Marker();
    this.secondsCounter
      .pipe(takeWhile(() => this.alive))
      .subscribe(n => {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(null);
        }
        markers = [];
        this.Vehicles.map((vl, id, ar) => {
          //console.log(_.get(ar[id],"plates"))
          rdPS1 =  this.getRandomInt(-10,10);
          rdPS2 =  this.getRandomInt(-10,10);
          // add markers to map
          this.uluruA = [{ lat: this.uluru.lat , lng: this.uluru.lng }];
          this.uluruA.map((l, i, a) => {
            //console.log(a[i])
            let c = {lat: _.get(l,'lat') + rdPS1, lng: _.get(l,'lng') + rdPS2}
            //console.log('c: ', c)
            marker = new google.maps.Marker({
              position: c,
              label: { color: 'black', text: `${_.get(ar[id],"plates")}` },
              map: this.map
            });
            markers.push(marker);
            dataIn = {
              id:_.get(ar[id],"id"),
              latitude: _.get(c, 'lat'),
              longitude: _.get(c, 'lng'),
              zoom: 5  
            }
            this.setPosition(dataIn);
          });
         
          //
          for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(this.map);
          }
        });
        // 
        console.log(`It's been ${n} seconds since subscribing!`)
        if (n == 5) {this.alive = false;}
      });
  }

  setPosition(dataIn){
    this.userServ.setPosition(dataIn)
    .pipe(first())
    .subscribe(
      data => {
        console.log('data: ', data)
        //this.getUserVehicle(null);
      },
      error => {
        this.toastr.error('Error register', 'Aviso de Angular 9', {
          timeOut: 10000,
          positionClass: 'toast-bottom-right'
        })
        this.router.navigate(['home']);
        console.log('error Register: ', error)
      });
  }

  handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.');
    this.handleLocationError(false, this.infoWindow, this.map.getCenter());
    infoWindow.open(this.map);
  }
  

  ngOnInit() {
    this.initMap()
  }

  ngOnDestroy() {
    this.alive = false;
  }

  ngOnChanges() {
    this.user = this.auth.user();
  }

  getUserVehicle(id: any) {
    this.userServ.getUserVehicle(id)
      .subscribe((data: any) => {
        console.log('data: ', data);
        this.Vehicles = data.data;
      });
  }

  // Retorna un entero aleatorio entre min (incluido) y max (excluido)
  // ¡Usando Math.round() te dará una distribución no-uniforme!
 getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
}
