import { Component, OnInit,Input } from '@angular/core';

import { StoreViewmodel } from "../../viewmodel/store/store.viewmodel";
import { ExcelReportViewmodel } from "../../viewmodel/excel-report/excel-report.viewmodel";

import { ExcelReportService } from '../../service/excel-report/excel-report.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(private excelReportService: ExcelReportService) { }
  
    ngOnInit() {
    }
  
    @Input() inputStore: StoreViewmodel;
  
    excelReportInput: ExcelReportViewmodel = new ExcelReportViewmodel();
  
  
    onGenerateBalanceQuantityReport(){
       this.excelReportInput.storeID=this.inputStore.id;
       this.excelReportInput.storeName=this.inputStore.name;
       this.excelReportService.createExcelBalanceQuantityReport(this.excelReportInput).subscribe(
         data=>this.excelReportInput= data as ExcelReportViewmodel
         ,error => alert(JSON.stringify(error))
         ,()=>window.location.href=this.excelReportInput.reportUrl
       );
    }

}
