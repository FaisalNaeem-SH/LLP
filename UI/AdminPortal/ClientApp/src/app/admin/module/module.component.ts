import { Component } from '@angular/core';

interface Permission {
  name: string;
  children: PermissionCategory[];
}

interface PermissionCategory {
  name: string;
  permissions: UserPermission[] | UrlPermission[] | OtherPermission[];
}

interface BasePermission {
  canView: boolean;
  canEdit: boolean;
  canDelete: boolean;
}
interface FlatPermission {
  category: string;
  canView: boolean;
  canEdit: boolean;
  canDelete: boolean;
}
interface UserPermission extends BasePermission {
  // additional properties specific to user permissions
}

interface UrlPermission extends BasePermission {
  // additional properties specific to URL permissions
}

interface OtherPermission extends BasePermission {
  // additional properties specific to other permissions
}
@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrl: './module.component.css'
})

export class ModuleComponent {

 permissions: Permission[] = [
    {
      name: 'userManagement',
      children: [
        {
          name: 'users',
          permissions: [
            { canView: true, canEdit: true, canDelete: false },
            { canView: false, canEdit: true, canDelete: true },
          ],
        },
        {
          name: 'url',
          permissions: [
            { canView: true, canEdit: false, canDelete: true },
          ],
        },
        {
          name: 'other',
          permissions: [
            { canView: true, canEdit: true, canDelete: true },
          ],
        },
      ],
    },
  ];
  displayedColumns: string[] = ['category', 'canView', 'canEdit', 'canDelete'];
  dataSource: FlatPermission[] = this.flattenPermissions();


  private flattenPermissions(): FlatPermission[] {
    let flatPermissions: FlatPermission[] = [];

    this.permissions.forEach((topLevelPermission) => {
      topLevelPermission.children.forEach((category) => {
        category.permissions.forEach((permission) => {
          flatPermissions.push({
            category: category.name,
            canView: permission.canView,
            canEdit: permission.canEdit,
            canDelete: permission.canDelete,
          });
        });
      });
    });

    return flatPermissions;
  }
  
}
