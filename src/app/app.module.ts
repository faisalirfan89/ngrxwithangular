import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UseroperationComponent } from './useroperation/useroperation.component';
import { UserlistviewComponent } from './userlistview/userlistview.component';
import { ItemviewComponent } from './itemview/itemview.component';
import { StoreModule } from '@ngrx/store';
import {userReducer} from 'src/app/useroperation/reducer/useroperation.reducer'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UseroperationComponent,
    UserlistviewComponent,
    ItemviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ users: userReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 20
    }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
