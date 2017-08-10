import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { TryIterationComponent } from './try-iteration/try-iteration.component';
import { SelectAnObjectComponent } from './select-an-object/select-an-object.component';

@NgModule({
  declarations: [
    AppComponent,    
    UserinfoComponent, TryIterationComponent, SelectAnObjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
