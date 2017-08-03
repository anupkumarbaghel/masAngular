import {Injectable} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'
import 'rxjs/add/operator/map';

import {MeasurementBookViewmodel} from '../../viewmodel/measurementbook/measurement-book.viewmodel';
import {MeasurementBookTableViewmodel} from '../../viewmodel/measurementbook/measurement-book-table.viewmodel';
import { ApiEndPoint } from '../../apiEndPoint';

@Injectable()
export class MeasurementBookService{
    measurementBookUrl=ApiEndPoint.measurementBookApiUrl;
    openmeasurementBookApiUrl=ApiEndPoint.openmeasurementBookApiUrl;
    draftOpenmeasurementBookApiUrl=ApiEndPoint.draftOpenmeasurementBookApiUrl;

    constructor(private http:HttpClient){}

    getAllMeasurementBookByStatus(measurementBookStatus:string){
        return this.http.get(this.measurementBookUrl,{
           params: new HttpParams().set('measurementBookStatus', measurementBookStatus),
        });
    }
    
    getMeasurementBook(id:number){
        return this.http.get(this.measurementBookUrl+'/'+id);
    }
    DeleteMeasurementBook(id:number){
        return this.http.delete(this.measurementBookUrl+'/'+id);
    }
    getOpenMeasurementBook(){
        return this.http.get(this.openmeasurementBookApiUrl);
    }

    createEditMeasurementBook(measurementBook:MeasurementBookViewmodel){
        return this.http.post(this.measurementBookUrl,measurementBook);
    }

    draftOpenMeasurementBook(id:number){
        return this.http.post(this.draftOpenmeasurementBookApiUrl,id);
    }
    
}