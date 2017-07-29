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
   

    constructor(private http:HttpClient){}

    getAllIndent(){
        return this.http.get(this.indentUrl);
    }
    
    getOpenIndent(){
        return this.http.get(this.openIndentApiUrl);
    }

    createEditIndent(indent:IndentViewmodel){
        return this.http.post(this.indentUrl,indent);
    }
    
}