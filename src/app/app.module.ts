import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,FormControl,Validator }   from '@angular/forms';

import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {MdTabsModule} from '@angular/material';

import { AppComponent } from './app.component';
import { IndentComponent } from './component/indent/indent.component';
import { MeasurementbookComponent } from './component/measurementbook/measurementbook.component';
import { HomeComponent } from './component/home/home.component';
import { SubmittedIndentComponent } from './component/indent/submitted-indent/submitted-indent.component';
import { CreateIndentComponent } from './component/indent/create-indent/create-indent.component';
import { DraftIndentComponent } from './component/indent/draft-indent/draft-indent.component';

//Create Indent
import {HttpClientModule} from '@angular/common/http'; 
import {IndentService} from './service/indent/indent.service';
import {IndentViewmodel} from './viewmodel/indent/indent.viewmodel';

@NgModule({
  declarations: [
    AppComponent,
    IndentComponent,
    MeasurementbookComponent,
    HomeComponent,
    SubmittedIndentComponent,
    CreateIndentComponent,
    DraftIndentComponent
  ],
  imports: [
     BrowserModule
     ,BrowserAnimationsModule
    ,AppRoutingModule
    ,MdTabsModule
    ,HttpClientModule
    ,FormsModule
  ],
  providers: [IndentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
