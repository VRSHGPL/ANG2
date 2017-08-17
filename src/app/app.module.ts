import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from './app.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { TryIterationComponent } from './try-iteration/try-iteration.component';
import { SelectAnObjectComponent } from './select-an-object/select-an-object.component';
import { RouterComponent } from './router/router.component';
import { ObjectdetailsComponent } from './objectdetails/objectdetails.component';


@NgModule({
  declarations: [
    AppComponent,    
    UserinfoComponent, TryIterationComponent, SelectAnObjectComponent, RouterComponent, ObjectdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'iterateObjects',
        component: TryIterationComponent
      },
      {
        path:'someOtherRouting',
        component: RouterComponent
      },
      {
        path:'detail/:id',
        component: ObjectdetailsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
