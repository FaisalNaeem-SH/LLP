import { BaseItem } from './BaseItem';

export interface BaseTree {
  item: string;
  itemArray: [BaseItem];
  parentItem: BaseTree;
}
