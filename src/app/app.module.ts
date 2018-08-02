import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { DataStoreService } from './data-store.service';
import { AppComponent } from './app.component';
import { ReactformComponent } from './reactform/reactform.component';
import { DataComponent } from './data/data.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ReactformComponent,
    DataComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    
  
  ],
  providers: [ DataStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
