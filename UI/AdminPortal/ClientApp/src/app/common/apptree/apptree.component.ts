import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'User Management',
    children: [
      {
        name: 'user',
        children: [
          {
            name: 'Can View',
          },
          {
            name: 'Can Add',
          },
          {
            name: 'Can Edit',
          },
          {
            name: 'Can Delete',
          },
        ],
      },
      {
        name: 'URL',
        children: [
          {
            name: 'Can Redirect',
          },
        ],
      },
      {
        name: 'Module',
        children: [
          {
            name: 'Can View',
          },
        ],
      },
    ],
  },
  {
    name: 'History',
    children: [
      {
        name: 'Culture',
        children: [
          {
            name: 'Show Slider',
          },
          {
            name: 'Disable Button',
          },
        ],
      },
      {
        name: 'Politics',
        children: [
          {
            name: 'Show Sidebar',
          },
          {
            name: 'Show Header',
          },
        ],
      },
    ],
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'app-apptree',
  templateUrl: './apptree.component.html',
  styleUrl: './apptree.component.css',
})
export class ApptreeComponent {
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
