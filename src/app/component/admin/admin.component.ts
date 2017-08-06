import { Component, OnInit } from '@angular/core';
import { AdminViewModel } from '../../viewmodel/admin/admin.viewmodel';

import { LockComponent } from '../lock/lock.component';
import { StoreViewmodel } from '../../viewmodel/store/store.viewmodel';

import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private http: HttpClient) { }
  ngOnInit() {

  }
  myName: string = "admin";
  admin: AdminViewModel;

  onLockOpen(admin: AdminViewModel) {
    this.admin = admin;
    this.addRowToAdmin();
  }
  addRowToAdmin() {
    this.admin.storeCollection.push(new StoreViewmodel());
  }

  onSaveButtonClick() {
    if (this.validateAdmin()) {
      let lockUrl: string = environment.apiBaseEndPoint + '/admin';
      this.http.post(lockUrl, this.admin).subscribe(
        resAdmin => this.admin = resAdmin as AdminViewModel
        , error => alert('Error Plaeae try again')
        , () => this.addRowToAdmin()
      );
    }
    else {
      alert("Entry is not correct. Please try again");
    }

  }

  validateAdmin(): boolean {
    let isValid = true;
    this.admin.storeCollection.forEach(store => {
      if (store.name && store.key) {
        if (store.name.length <= 0 || store.key.length <= 0) {
         var index=this.admin.storeCollection.indexOf(store);
         this.admin.storeCollection.splice(index,1);
        }
      }
      else {
       var index=this.admin.storeCollection.indexOf(store);
         this.admin.storeCollection.splice(index,1);
      }

    });
    return isValid;
  }



}
