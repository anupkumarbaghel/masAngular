import {Injectable} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'
import 'rxjs/add/operator/map';

import {IndentViewmodel} from '../../viewmodel/indent/indent.viewmodel';
import {IndentTableViewmodel} from '../../viewmodel/indent/indent-table.viewmodel';

@Injectable()
export class IndentService{
    indentApiUrl:string='http://localhost:52800/api/indent';
    indentTableApiUrl:string='http://localhost:52800/api/indenttable';

    constructor(private http:HttpClient){}

    getAllIndent(){
        return this.http.get(this.indentApiUrl);
    }
    
    getOpenIndent(){
        return this.http.get(this.indentApiUrl+"/bystatus",{
            params: new HttpParams().set('IndentStatus', 'o')
        });
    }

    createEditIndent(indent:IndentViewmodel){
            return this.http.post(this.indentApiUrl,indent);
    }
    
    createEditIndentTable(indentTable:IndentTableViewmodel){
            return this.http.post(this.indentTableApiUrl,indentTable);
        }
}