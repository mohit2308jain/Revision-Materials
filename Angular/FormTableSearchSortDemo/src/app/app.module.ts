import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { SortComponent } from './sort/sort.component';
import { UpdatedeleteComponent } from './updatedelete/updatedelete.component';
import { TablesearchComponent } from './tablesearch/tablesearch.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FullformComponent } from './fullform/fullform.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    SortComponent,
    UpdatedeleteComponent,
    TablesearchComponent,
    FilterPipe,
    FullformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
