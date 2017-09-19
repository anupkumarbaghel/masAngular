import {Injectable} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'

import { ApiEndPoint } from '../../apiEndPoint';
import { MasterRegisterViewmodel } from "../../viewmodel/master-register/master-register.viewmodel";

@Injectable()
export class MasterRegisterService{
    masterRegsterUrl = ApiEndPoint.masterRegisterUrl;
    
    constructor(private http:HttpClient){}

    getAllMasterRegister(storeID:number){
        let queryStringParams = new HttpParams();
        queryStringParams = queryStringParams.append("storeID", "" +storeID );
        return this.http.get(this.masterRegsterUrl, { params: queryStringParams });
    }
    DeleteMasterRegister(id:number){
        return this.http.delete(this.masterRegsterUrl+'/'+id);
    }
   

    createMasterRegister(masterRegister:MasterRegisterViewmodel){
       return  this.http.post(this.masterRegsterUrl,masterRegister);
    }

   
    
}