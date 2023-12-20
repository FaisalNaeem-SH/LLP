import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseModel } from './baseModel';
import { URLVM } from '../module/user-management/url/meta/model';
import { ModuleVM } from '../module/user-management/module/meta/model';
import { BaseItem } from './BaseItem';
import { FeatureVM } from '../module/user-management/feature/meta/model';
import { BaseTree } from './BaseItem copy';

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  public static entity: any = {};
  constructor(private http: HttpClient) {}
  public getAllEntities(): BaseModel {
    // console.log(BaseService.entity.model.PageNumber);
    // console.log(BaseService.entity.model.PageSize);
    console.log(BaseService.entity);

    if (BaseService.entity.model && BaseService.entity.model.entityName) {
      const apiUrl = `https://localhost:7173/api/${BaseService.entity.moduleName}/${BaseService.entity.model.entityName}/GetAllEntities`;

      this.http.post(apiUrl, BaseService.entity.model).subscribe(
        (response) => {
          // Handle the successful response here
          console.log('API Response:', response);
        },
        (error) => {
          // Handle errors here
          console.error('API Error:', error);
        }
      );
    }
    return new BaseModel();
  }
  public getAllEntitieslocal(id: number): BaseModel {
    const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
      ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
      '.';

    return {
      id: id.toString(),
      name: name,
      progress: Math.round(Math.random() * 100).toString(),
      fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
    };
  }

  GetLookup(lookupEntity: string) {
    let data: BaseItem[] = [];
    if (lookupEntity === 'URL') {
      data = [
        { value: 'steak-0', viewValue: 'Auth' },
        { value: 'pizza-1', viewValue: 'Auth/User' },
        { value: 'tacos-2', viewValue: 'Auth/Module' },
      ];
    }
    if (lookupEntity === 'ParentModule') {
      data = [
        { value: 'steak-0', viewValue: 'UserManegment' },
        { value: 'pizza-1', viewValue: 'User' },
        { value: 'tacos-2', viewValue: 'Module' },
      ];
    }
    if (lookupEntity === 'Permission') {
      data = [
        { value: '0', viewValue: 'Can View' },
        { value: '1', viewValue: 'Can Add' },
        { value: '2', viewValue: 'Can Edit' },
        { value: '3', viewValue: 'Can Delete' },
        { value: '4', viewValue: 'Other' },
      ];
    }
    return data;
  }
  // GetTree(lookupEntity: string) {
  //   let data: BaseTree[] = [];
  //   if (lookupEntity === 'role') {
  //     data = [
  //       { item: 'Dashboard', itemArray: [{value:'CanView'},{'CanView':'CanView'}] },
  //       { value: 'UserManagement', viewValue: 'Auth/User' },
  //       { value: 'tacos-2', viewValue: 'Auth/Module' },
  //     ];
  //   }
  //   return data;
  // }
  public Save(): BaseModel {
    if (BaseService.entity.model.entityName == 'URL') {
      console.log(BaseService.entity);
    } else if (BaseService.entity.model.entityName == 'module') {
      console.log(BaseService.entity);
    } else if (BaseService.entity.model.entityName == 'feature') {
      console.log(BaseService.entity);
    } else if (BaseService.entity.model.entityName == 'role') {
      console.log(BaseService.entity);
    }

    return new BaseModel();

    // const apiUrl = `https://api.example.com/${BaseService.entity.entityName}`;

    // this.http.get(apiUrl).subscribe(
    //   (response) => {
    //     // Handle the successful response here
    //     console.log('API Response:', response);
    //   },
    //   (error) => {
    //     // Handle errors here
    //     console.error('API Error:', error);
    //   }
    // );
  }

  //Get entity by id
  public getEntityById(id: number) {
    if (BaseService.entity.model.entityName == 'URL') {
      BaseService.entity.model.entity = new URLVM(1, 1, 1, 'URL name');
    } else if (BaseService.entity.model.entityName == 'module') {
      BaseService.entity.model.entity = new ModuleVM(1, 1, 'new Name');
    } else if (BaseService.entity.model.entityName == 'feature') {
      BaseService.entity.model.entity = new FeatureVM(1, 1, 'Feature VM');
    }

    return;
  }
}
