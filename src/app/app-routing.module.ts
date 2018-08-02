import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { DataComponent } from './data/data.component';
import { ReactformComponent } from './reactform/reactform.component';
const routes: Routes= [ 
  { path: '', redirectTo: '/reactform', pathMatch: 'full' },
  { path: 'data', component: DataComponent },
  { path :'reactform',
  component: ReactformComponent
}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
