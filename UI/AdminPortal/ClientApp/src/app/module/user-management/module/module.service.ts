import { Injectable } from '@angular/core';
import { BaseService } from '../../../common/base.service';
import { ModuleEditorComponent } from './module-editor/module-editor.component';
import { ModuleVM } from './meta/model';
import { HttpClient } from '@angular/common/http';
import { BaseFilter } from '../../../common/baseFilter';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ModuleService extends BaseService {
  constructor(private HttpClient: HttpClient) {
    super(HttpClient);
  }
  public init(): void {
    BaseService.entity = {
      componentName: ModuleEditorComponent,
      moduleName: 'Auth',
      model: {
        entity: ModuleVM,
        entityName: 'module',
        PageNumber: 1,
        PageSize: 10,
        sortingArray: [],
        filterArray: [],
        entityId: 0,
      },
      displayedColumns: ['action', 'id', 'name', 'progress'],
      filterValues: [
        new BaseFilter('id', new FormControl('')),
        new BaseFilter('name', new FormControl('')),
        new BaseFilter('progress', new FormControl('')),
      ],
    };
  }
}
