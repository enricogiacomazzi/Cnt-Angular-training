import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './features/list/list.component';
import { DetailComponent } from './features/detail/detail.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { ChatComponent } from './features/chat/chat.component';

const routes: Routes = [
  {
    path: 'pokemon',
    component: ListComponent
  },
  {
    path: 'pokemon/:gino',
    component: DetailComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: '',
    redirectTo: '/pokemon',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
