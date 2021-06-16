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
import { BookoperationComponent } from './bookoperation/bookoperation.component';
import { BooklistviewComponent } from './booklistview/booklistview.component';
import { BookitemviewComponent } from './bookitemview/bookitemview.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './effects/book.effects';
import { bookReducer } from './bookoperation/reducers/book.reducer';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UseroperationComponent,
    UserlistviewComponent,
    ItemviewComponent,
    BookoperationComponent,
    BooklistviewComponent,
    BookitemviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ users: userReducer,books:bookReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 20
    }),
    EffectsModule.forRoot([BookEffects]),
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
