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

    getAllIndentByStatus(indentStatus:string){
        return this.http.get(this.indentUrl,{
           params: new HttpParams().set('indentStatus', indentStatus),
        });
    }
    
    GetIndent(id:number){
        return this.http.get(this.indentUrl+'/'+id);
    }
    DeleteIndent(id:number){
        return this.http.delete(this.indentUrl+'/'+id);
    }
    getOpenIndent(){
        return this.http.get(this.openIndentApiUrl);
    }

    createEditIndent(indent:IndentViewmodel){
        return this.http.post(this.indentUrl,indent);
    }

    draftOpenIndent(id:number){
        return this.http.post(this.draftOpenApiUrl,id);
    }
    
}