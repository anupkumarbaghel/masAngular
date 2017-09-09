import {Injectable} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'

import { ApiEndPoint } from '../../apiEndPoint';
import { ExcelReportViewmodel } from "../../viewmodel/excel-report/excel-report.viewmodel";

@Injectable()
export class ExcelReportService{
    excelReportUrl = ApiEndPoint.excelReportUrl;
    
    constructor(private http:HttpClient){}

    createExcelReport(excelReportViewmodel:ExcelReportViewmodel){
       return  this.http.post(this.excelReportUrl,excelReportViewmodel);
    }

   
    
}