import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AdminViewModel } from '../../viewmodel/admin/admin.viewmodel';
import { StoreViewmodel } from '../../viewmodel/store/store.viewmodel'

@Component({
  selector: 'app-lock',
  templateUrl: './lock.component.html',
  styleUrls: ['./lock.component.css']
})
export class LockComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    if (this.parentName == "admin")this.KeyLabelMessage="Please enter admin key";
    else this.KeyLabelMessage="Please enter store key";
  }
  @Output() onAdminLockOpen = new EventEmitter<AdminViewModel>();
  @Output() onStoreLockOpen = new EventEmitter<StoreViewmodel>();
  @Input() parentName: string;

  admin: AdminViewModel = new AdminViewModel();
  store: StoreViewmodel = new StoreViewmodel();
  key:string;
  error: boolean = false;
  KeyLabelMessage:string;
  loginButtonLabel:string="Login";

  logIn() {
    this.loginButtonLabel="Wait...";
    if (this.parentName == "admin") {
      this.adminLogIn();
    }
    else{
      this.storeLogin();
    }
  }

  storeLogin(){
      this.store.key=this.key;
      let lockUrl: string = environment.apiBaseEndPoint  + '/lock' + '/store';
      this.http.post(lockUrl,this.store).subscribe(
      resStore => this.store = resStore as StoreViewmodel
      , error =>{  this.error = true;this.loginButtonLabel="Login";this.key="";}
      , () => {
        this.error = false;
        this.onStoreLockOpen.emit(this.store);
      }
    );
  }

  adminLogIn() {
    this.admin.key=this.key;
    let lockUrl: string = environment.apiBaseEndPoint + '/lock' + '/admin';
    this.http.post(lockUrl, this.admin).subscribe(
      resAdmin => this.admin = resAdmin as AdminViewModel
      , error =>{  this.error = true;this.loginButtonLabel="Login";this.key="";}
      , () => {
        this.error = false;
        this.onAdminLockOpen.emit(this.admin);
      }
    );
  }
  


}
