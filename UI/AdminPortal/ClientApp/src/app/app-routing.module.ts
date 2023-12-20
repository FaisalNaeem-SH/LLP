import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomeComponent } from './admin/home/home.component';
// import { UrlComponent } from './admin/url/url.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { UrlBrowserComponent } from './module/user-management/url/url-browser/url-browser.component';
import { ModuleBrowserComponent } from './module/user-management/module/module-browser/module-browser.component';
import { FeatureBrowserComponent } from './module/user-management/feature/feature-browser/feature-browser.component';
import { RoleBrowserComponent } from './module/user-management/role/role-browser/role-browser.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'url',
        component: UrlBrowserComponent,
      },
      {
        path: 'module',
        component: ModuleBrowserComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
      {
        path: 'feature',
        component: FeatureBrowserComponent,
      },
      {
        path: 'role',
        component: RoleBrowserComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
