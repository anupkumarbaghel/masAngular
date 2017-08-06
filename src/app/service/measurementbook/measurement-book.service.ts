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

    getAllMeasurementBookByStatus(measurementBookStatus:string,storeID:number){
          let queryStringParams = new HttpParams();
           queryStringParams = queryStringParams.append("measurementBookStatus", measurementBookStatus);
           queryStringParams = queryStringParams.append("storeID",""+storeID);

        return this.http.get(this.measurementBookUrl,{params:queryStringParams});
    }
    
    getMeasurementBook(id:number){
        return this.http.get(this.measurementBookUrl+'/'+id);
    }
    DeleteMeasurementBook(id:number){
        return this.http.delete(this.measurementBookUrl+'/'+id);
    }
    getOpenMeasurementBook(storeID:number){
        return this.http.get(this.openmeasurementBookApiUrl,{
           params: new HttpParams().set('storeId',""+storeID),
        });
    }

    createEditMeasurementBook(measurementBook:MeasurementBookViewmodel){
        return this.http.post(this.measurementBookUrl,measurementBook);
    }

    draftOpenMeasurementBook(measurementBook:MeasurementBookViewmodel){
        return this.http.post(this.draftOpenmeasurementBookApiUrl,measurementBook);
    }
    
}