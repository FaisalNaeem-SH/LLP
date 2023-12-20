import { Component } from '@angular/core';
import { BaseService } from '../../../../common/base.service';
import { FormBuilder } from '@angular/forms';
import { BaseEditorComponent } from '../../../../common/base-editor/base-editor.component';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-role-editor',
  templateUrl: './role-editor.component.html',
  styleUrl: './role-editor.component.css',
})
export class RoleEditorComponent extends BaseEditorComponent {
  public entity: any;
  public override service: any;
  constructor(public roleService: RoleService, formBuilder: FormBuilder) {
    super(roleService, formBuilder);
    this.service.init();
    this.entity = BaseService.entity;
  }
}
