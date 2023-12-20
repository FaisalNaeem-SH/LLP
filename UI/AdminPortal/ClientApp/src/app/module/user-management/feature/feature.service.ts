import { Injectable } from '@angular/core';
import { BaseService } from '../../../common/base.service';
import { FeatureEditorComponent } from './feature-editor/feature-editor.component';
import { HttpClient } from '@angular/common/http';
import { FeatureVM } from './meta/model';
import { BaseFilter } from '../../../common/baseFilter';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FeatureService extends BaseService {
  constructor(private HttpClient: HttpClient) {
    super(HttpClient);
  }
  public init(): void {
    BaseService.entity = {
      componentName: FeatureEditorComponent,
      moduleName: 'Auth',
      model: {
        entity: FeatureVM,
        entityName: 'feature',
        PageNumber: 1,
        PageSize: 10,
        sortingArray: [],
        filterArray: [],
      },
      displayedColumns: ['action', 'id', 'url', 'permissions'],
      filterValues: [
        new BaseFilter('id', new FormControl('')),
        new BaseFilter('url', new FormControl('')),
        new BaseFilter('permissions', new FormControl('')),
      ],
    };
  }
}
