import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { takeWhile } from "rxjs/operators";
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import * as _ from "lodash";
import { UsersService } from 'src/app/services/users.service';
import { async } from 'rxjs/internal/scheduler/async';
import { error } from 'protractor';
import { vehicleModel } from 'src/app/models/vehicle.model';

//
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy, OnChanges {
  //
  adminForm: FormGroup;
  loading = false;
  submitted = false;
  //
  public isAuth: boolean = false;
  public alive: boolean = true;
  public user: any;
  public Vehicles: any
  //
  constructor(public auth: AuthService, public userServ: UsersService, private formBuilder: FormBuilder, private route: ActivatedRoute,
    private router: Router, private toastr: ToastrService) {
    this.user = this.auth.user();
    console.log('this.user.id: ', _.get(this.user.value, 'id'))
    this.getUserVehicle(null); 
  }

  ngOnInit() {
    //emailuser, nameuser, passworduser, typeiduser
    this.adminForm = this.formBuilder.group({
      id: [null],
      plates: ['', [Validators.required]],
      make: ['', Validators.required],
      color: ['', [Validators.required]],
      model: ['', [Validators.required]],
      userid: [null],
      positiongps: [null]
    });

  }

  ngOnDestroy() {
    this.alive = false;
  }

  ngOnChanges() {
    this.user = this.auth.user();
    this.userServ.getUserVehicle(null)
       .subscribe((data: any) => {
        console.log('data: ', data);
        this.Vehicles = data.data;
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.adminForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.loading = true;

    console.log('this.adminForm.invalid: ', this.adminForm.invalid);
    console.log('this.adminForm.value: ', this.adminForm.value);
    // stop here if form is invalid
    if (this.adminForm.invalid) {
       return;
    }

    console.log('this.adminForm.value: ', this.adminForm.value);

    this.userServ.saveVehicle(this.adminForm.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log('data: ', data)
          this.toastr.success('Hello, vehicle saved successfully', 'Aviso de Angular 9', {
            timeOut: 10000,
            positionClass: 'toast-bottom-right'
          });
          this.getUserVehicle(null);
          this.onReset();
        },
        error => {
          this.toastr.error('Error register: ' + _.get(error, 'error'), 'Aviso de Angular 9', {
            timeOut: 10000,
            positionClass: 'toast-bottom-right'
          })
          console.log('error Register: ', error)
          this.onReset();
        });
  }

  onReset() {
    this.submitted = false;
    this.loading = false;
    this.userServ.selectVehicle = new vehicleModel();
    this.adminForm.reset();
    console.log('this.adminForm.value: ', this.adminForm.value);
  }

  editVehicle(vh: any) {
    this.userServ.selectVehicle = Object.assign({}, vh);
    console.log('Edit selectVehicle: ', this.userServ.selectVehicle)
  }

  deleteVehicle(vh: any) {
    console.log('Edit vh: ', vh)
    this.userServ.selectVehicle = Object.assign({}, vh);
  }

  getUserVehicle(id: any) {
    this.userServ.getUserVehicle(id)
       .subscribe((data: any) => {
        console.log('data: ', data);
        this.Vehicles = data.data;
      });
  }
}
