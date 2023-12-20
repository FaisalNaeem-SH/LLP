import { BaseModel } from '../../../../common/baseModel';

export class FeatureVM implements BaseModel {
  id: number;
  urlId: number;
  name: string;
  constructor(id: number, urlId: number, name: string) {
    this.id = id;
    this.urlId = urlId;
    this.name = name;
  }
}
