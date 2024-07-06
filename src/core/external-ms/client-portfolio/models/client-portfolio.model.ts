import { Item } from './item.model';

export class ClientPortfolio {
  _id: string;
  channel: string;
  country: string;
  createdDate: string;
  customerCode: string;
  route: string;
  items: Item[];
}
