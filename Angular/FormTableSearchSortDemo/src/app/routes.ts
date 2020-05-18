  import { Routes } from '@angular/router';

import { SortComponent } from './sort/sort.component';
import { TablesearchComponent } from "./tablesearch/tablesearch.component";
import { UpdatedeleteComponent } from "./updatedelete/updatedelete.component";
import { FormComponent } from "./form/form.component";
import { FullformComponent } from "./fullform/fullform.component";

export const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'formupdel', component: UpdatedeleteComponent },
  { path: 'sort', component: SortComponent },
  { path: 'search', component: TablesearchComponent },
  { path: 'fullform', component: FullformComponent },
  { path: '', redirectTo: '/form', pathMatch: 'full' }
];