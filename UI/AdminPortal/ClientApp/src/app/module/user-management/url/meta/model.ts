import { BaseModel } from '../../../../common/baseModel';

export class URLVM implements BaseModel {
  id: number;
  enityId: number;
  serviceId: number;
  name: string;
  constructor(id: number, enityId: number, serviceId: number, name: string) {
    this.id = id;
    this.enityId = enityId;
    this.serviceId = serviceId;
    this.name = name;
  }
}
