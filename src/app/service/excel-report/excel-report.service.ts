import {Injectable} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'

import { ApiEndPoint } from '../../apiEndPoint';
import { ExcelReportViewmodel } from "../../viewmodel/excel-report/excel-report.viewmodel";

@Injectable()
export class ExcelReportService{
    excelReportUrl = ApiEndPoint.excelReportUrl;
    
    constructor(private http:HttpClient){}

    createExcelMasReport(excelReportViewmodel:ExcelReportViewmodel){
        excelReportViewmodel.reportType="mas";
       return  this.http.post(this.excelReportUrl,excelReportViewmodel);
    }

    createExcelBalanceQuantityReport(excelReportViewmodel:ExcelReportViewmodel){
        excelReportViewmodel.reportType="bq";
        return  this.http.post(this.excelReportUrl,excelReportViewmodel);
     }

     createExcelAmountBalanceQuantityReport(excelReportViewmodel:ExcelReportViewmodel){
        excelReportViewmodel.reportType="abq";
        return  this.http.post(this.excelReportUrl,excelReportViewmodel);
     }

   
    
}