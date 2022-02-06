import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/login/login.component';
import { PdfComponent } from './Components/pdf/pdf.component';
import { CrudTableComponent } from './Components/crud-table/crud-table.component';
import { Page404Component } from './Components/page404/page404.component';
import { IndexComponent } from './Components/index/index.component';
import { SupportComponent } from './Components/support/support.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MaterialModule } from './Materiel/MaterialModule';
import { HistoriqueComponent } from './Components/historique/historique.component';
import { AddnewComponent } from './Components/crud-table/addnew/addnew.component';
import { EditComponent } from './Components/crud-table/edit/edit.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { ProductServiceService } from './Services/product-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';


import { NgxPaginationModule } from 'ngx-pagination';
import { ShowoneComponent } from './Components/historique/showone/showone.component';
@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    AddnewComponent,
    HistoriqueComponent,
    Page404Component,
    LoginComponent,
    PdfComponent,
    CrudTableComponent,
    IndexComponent,
    SupportComponent,
    HistoriqueComponent,
    EditComponent,
    ShowoneComponent,
  ],
  imports: [
    RouterModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
        HttpClientModule,
    MaterialModule,
    Ng2OrderModule,
    BrowserModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [ProductServiceService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
