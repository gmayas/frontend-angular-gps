import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment'
import { BehaviorSubject, Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';
import 'rxjs/add/operator/debounceTime';
import 'rxjs-compat/add/operator/takeUntil';
import * as _ from "lodash";
import { ToastrService } from 'ngx-toastr';

import { vehicleModel } from '../models/vehicle.model'
import { AuthService } from './auth.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public selectVehicle: vehicleModel;

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService,
    private auth: AuthService) {
    this.selectVehicle = new vehicleModel;
  }

  getUserVehicle(id: number) {
    try {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'token': localStorage.getItem('jwtToken')
        })
      };
      console.log('httpOptions: ', httpOptions)
      return this.http.get(environment.api_url + `/user/userVehicles/${id}`, httpOptions)
        .pipe(map((data: any) => {
          console.log('data: ', data)
          return data;
        }, error => {
          this.auth.logout();
          this.router.navigate(['home']);
          this.toastr.success('Hello: Your session has expired, just log in again.', 'Aviso de Angular 9', {
            timeOut: 10000,
            positionClass: 'toast-bottom-right'
          });
          console.log('error profile: ', error)
        }));
    } catch (e) {
      console.log('error profile: ', e)
    }
  }

  saveVehicle(dataIn: any) {
    try {
      console.log('dataIn: ', dataIn);
      let api_url: any, params: any = {}, headers;
      params.id = _.get(dataIn, 'id');
      headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('jwtToken')
      });
      let dataVehicle = {
        id: _.get(dataIn, 'id'),
        plates: _.get(dataIn, 'plates'),
        make: _.get(dataIn, 'make'),
        color: _.get(dataIn, 'color'),
        model: _.get(dataIn, 'model'),
        userid: _.get(dataIn, 'userid'),
        positiongps: _.get(dataIn, 'positiongps')
      }
      //
      if (_.isNil(dataVehicle.id) || dataVehicle.id == 0) {
        this.auth.user()
          .subscribe((user: any) => {
            console.log('user: ', user);
            dataVehicle.userid = user.id;
          });
        api_url = environment.api_url + '/user/addVehicle';
      } else {
        api_url = environment.api_url + `/user/updateVehicle/${params.id}`
      };

      console.log('environment.api_url: ', api_url)
      console.log('dataVehicle: ', dataVehicle);
      console.log('headers: ', headers);

      return this.http.post(api_url, dataVehicle, { headers })
        .pipe(map((data: any) => {
          console.log('data: ', data)
          return data;
        }, error => {
          this.auth.logout();
          this.router.navigate(['home']);
          this.toastr.success('Hello: Your session has expired, just log in again.', 'Aviso de Angular 9', {
            timeOut: 10000,
            positionClass: 'toast-bottom-right'
          });
          console.log('error profile: ', error)
        }));
    } catch (e) {
      console.log('error profile: ', e)
    }
  }

  setPosition(dataIn: any) {
    //console.log('dataIn: ', dataIn);
    let api_url: any, params: any = {}, headers;
    headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem('jwtToken')
    });

    let dataPosition = {
      idvehicles: _.get(dataIn, 'id'),
      latitude: _.get(dataIn, 'latitude'),
      longitude: _.get(dataIn, 'longitude'),
      zoom: _.get(dataIn, 'zoom')
    }

    console.log('dataPosition: ', dataPosition)
    //console.log('headers: ', headers);
    //

    return this.http.post(environment.api_url + '/user/addPosition', dataPosition)
      .pipe(map((data: any) => {
        console.log('data: ', data)
        return data;
      }, error => {
        this.auth.logout();
        this.router.navigate(['home']);
        this.toastr.success('Hello: Your session has expired, just log in again.', 'Aviso de Angular 9', {
          timeOut: 10000,
          positionClass: 'toast-bottom-right'
        });
        console.log('error profile: ', error)
      }));
  }
}
