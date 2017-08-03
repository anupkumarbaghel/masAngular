import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,FormControl,Validator }   from '@angular/forms';

import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {MdTabsModule,MdIconModule,MdDialogModule,MdButtonModule} from '@angular/material';

import { AppComponent } from './app.component';
import { IndentComponent } from './component/indent/indent.component';
import { MeasurementbookComponent } from './component/measurementbook/measurementbook.component';
import { HomeComponent } from './component/home/home.component';
import { SubmittedIndentComponent } from './component/indent/submitted-indent/submitted-indent.component';
import { CreateIndentComponent,ConfirmIndentSubmittedDialog } from './component/indent/create-indent/create-indent.component';
import { DraftIndentComponent } from './component/indent/draft-indent/draft-indent.component';
import { ReadonlyIndentComponent } from './component/indent/readonly-indent/readonly-indent.component';

//Create Indent
import {HttpClientModule} from '@angular/common/http'; 
import {IndentService} from './service/indent/indent.service';
import {MeasurementBookService} from './service/measurementbook/measurement-book.service';
import {FilterDeletedPipe} from './pipe/filter-deleted.pipe';

import { CreateMeasurementBookComponent,ConfirmMeasurementBookSubmittedDialog } from './component/measurementbook/create-measurement-book/create-measurement-book.component';
import { DraftMeasurementBookComponent } from './component/measurementbook/draft-measurement-book/draft-measurement-book.component';
import { ReadonlyMeasurementBookComponent } from './component/measurementbook/readonly-measurement-book/readonly-measurement-book.component';
import { SubmittedMeasurementBookComponent } from './component/measurementbook/submitted-measurement-book/submitted-measurement-book.component';

@NgModule({
  declarations: [
    AppComponent,
    IndentComponent,
    MeasurementbookComponent,
    HomeComponent,
    SubmittedIndentComponent,
    CreateIndentComponent,
    ConfirmIndentSubmittedDialog,
    DraftIndentComponent,
    FilterDeletedPipe,
    ReadonlyIndentComponent,
    CreateMeasurementBookComponent,
    ConfirmMeasurementBookSubmittedDialog,
    DraftMeasurementBookComponent,
    ReadonlyMeasurementBookComponent,
    SubmittedMeasurementBookComponent
  ],
  imports: [
     BrowserModule
     ,BrowserAnimationsModule
    ,AppRoutingModule
    ,MdTabsModule
    ,MdButtonModule
    ,MdIconModule
    ,MdDialogModule
    ,HttpClientModule
    ,FormsModule
  ],
  providers: [IndentService,MeasurementBookService],
  entryComponents: [ConfirmIndentSubmittedDialog
    ,ConfirmMeasurementBookSubmittedDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
