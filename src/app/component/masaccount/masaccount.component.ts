import { Component, OnInit,Input } from '@angular/core';

import { StoreViewmodel } from "../../viewmodel/store/store.viewmodel";
import { ExcelReportViewmodel } from "../../viewmodel/excel-report/excel-report.viewmodel";

import { ExcelReportService } from '../../service/excel-report/excel-report.service';

@Component({
  selector: 'app-masaccount',
  templateUrl: './masaccount.component.html',
  styleUrls: ['./masaccount.component.css']
})
export class MasaccountComponent implements OnInit {

  constructor(private excelReportService: ExcelReportService) { }

  ngOnInit() {
  }

  @Input() inputStore: StoreViewmodel;

  excelReportInput: ExcelReportViewmodel = new ExcelReportViewmodel();


  onGenerateMasAccount(){
     this.excelReportInput.storeID=this.inputStore.id;
     this.excelReportInput.storeName=this.inputStore.name;
     this.excelReportService.createExcelMasReport(this.excelReportInput).subscribe(
       data=>this.excelReportInput= data as ExcelReportViewmodel
       ,error => alert(JSON.stringify(error))
       ,()=>window.location.href=this.excelReportInput.reportUrl
     );
  }

}
