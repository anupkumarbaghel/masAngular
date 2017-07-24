import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'

import {Indent_VM} from '../../ViewModel/indent/indent-vm';

@Injectable()
export class IndentService{
    indentApiUrl:string='http://localhost:52800/api/indent';

    constructor(private http:HttpClient){}

    getAllIndent(){
        return this.http.get(this.indentApiUrl);
    }

    createIndent(indent:Indent_VM){
            return this.http.post(this.indentApiUrl,indent);
        }
}