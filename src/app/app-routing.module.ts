import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { UserinfoComponent } from './userinfo/userinfo.component';
import { TryIterationComponent } from './try-iteration/try-iteration.component';
import { SelectAnObjectComponent } from './select-an-object/select-an-object.component';
import { RouterComponent } from './router/router.component';

const routes: Routes = [ 
 { path: 'iterateObjects', component:TryIterationComponent }
];


@NgModule({  
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
