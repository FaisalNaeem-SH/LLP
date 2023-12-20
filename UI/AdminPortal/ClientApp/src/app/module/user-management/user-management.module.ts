import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlBrowserComponent } from './url/url-browser/url-browser.component';
import { UrlEditorComponent } from './url/url-editor/url-editor.component';
import { AngularMaterialModule } from '../../material.module';
import { BaseBrowserComponent } from '../../common/base-browser/base-browser.component';
import { ModuleBrowserComponent } from './module/module-browser/module-browser.component';
import { ModuleEditorComponent } from './module/module-editor/module-editor.component';
import { BaseEditorComponent } from '../../common/base-editor/base-editor.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppdropdownComponent } from '../../common/appdropdown/appdropdown.component';
import { FeatureBrowserComponent } from './feature/feature-browser/feature-browser.component';
import { FeatureEditorComponent } from './feature/feature-editor/feature-editor.component';
import { RoleBrowserComponent } from './role/role-browser/role-browser.component';
import { RoleEditorComponent } from './role/role-editor/role-editor.component';
import { ApptreeComponent } from '../../common/apptree/apptree.component';

@NgModule({
  declarations: [
    UrlBrowserComponent,
    UrlEditorComponent,
    BaseBrowserComponent,
    ModuleBrowserComponent,
    ModuleEditorComponent,
    BaseEditorComponent,
    AppdropdownComponent,
    FeatureBrowserComponent,
    FeatureEditorComponent,
    RoleBrowserComponent,
    RoleEditorComponent,
    ApptreeComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class UserManagementModule {}
