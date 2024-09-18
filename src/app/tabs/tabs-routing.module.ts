import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../components/tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'calculator',
        loadChildren: () => import('../components/calculator/calculator.module').then(m => m.CalculatorPageModule)
      },
      {
        path: 'library',
        loadChildren: () => import('../components/more-info/more-info.module').then(m => m.MoreInfoPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
