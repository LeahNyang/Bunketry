import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'The Proofing Ground'
      },
      {
        path: 'order',
        component: OrderComponent,
        title: 'Order page',
        pathMatch:'full'
      },
      {
        path: '**',
        redirectTo:'',
        pathMatch:'full'
      }
];
export default routes;