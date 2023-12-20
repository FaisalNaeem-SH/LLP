import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../../../common/base.service';
import { RoleEditorComponent } from './role-editor/role-editor.component';
import { RoleVM } from './meta/model';
import { BaseFilter } from '../../../common/baseFilter';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class RoleService extends BaseService {
  constructor(private HttpClient: HttpClient) {
    super(HttpClient);
  }
  public init(): void {
    BaseService.entity = {
      componentName: RoleEditorComponent,
      moduleName: 'Auth',
      model: {
        entity: RoleVM,
        entityName: 'role',
        PageNumber: 1,
        PageSize: 10,
        sortingArray: [],
        filterArray: [],
      },
      displayedColumns: ['action', 'id', 'role name', 'index page'],
      filterValues: [
        new BaseFilter('id', new FormControl('')),
        new BaseFilter('role name', new FormControl('')),
        new BaseFilter('index page', new FormControl('')),
      ],
    };
    BaseService.entity.model;
  }
}
