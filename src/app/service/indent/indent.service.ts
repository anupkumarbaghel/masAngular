import {Injectable} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'
import 'rxjs/add/operator/map';

import {IndentViewmodel} from '../../viewmodel/indent/indent.viewmodel';
import {IndentTableViewmodel} from '../../viewmodel/indent/indent-table.viewmodel';
import { ApiEndPoint } from '../../apiEndPoint';

@Injectable()
export class IndentService{
    indentUrl=ApiEndPoint.indentApiUrl;
    openIndentApiUrl=ApiEndPoint.openIndentApiUrl;
    draftOpenApiUrl=ApiEndPoint.draftOpenApiUrl;

    constructor(private http:HttpClient){}

    getAllIndentByStatus(indentStatus:string,storeID:number){
          let queryStringParams = new HttpParams();
           queryStringParams = queryStringParams.append("indentStatus", indentStatus);
           queryStringParams = queryStringParams.append("storeID",""+storeID);

        return this.http.get(this.indentUrl,{params:queryStringParams});
    }
    
    GetIndent(id:number){
        return this.http.get(this.indentUrl+'/'+id);
    }
    DeleteIndent(id:number){
        return this.http.delete(this.indentUrl+'/'+id);
    }
    getOpenIndent(storeID:number){
        return this.http.get(this.openIndentApiUrl,{
           params: new HttpParams().set('storeID',""+storeID),
        });
    }

    createEditIndent(indent:IndentViewmodel){
        return this.http.post(this.indentUrl,indent);
    }

    draftOpenIndent(indent:IndentViewmodel){
        return this.http.post(this.draftOpenApiUrl,indent);
    }
    
}