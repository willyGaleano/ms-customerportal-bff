import { Item } from './item.model';

export class ClientPortfolio {
  id: string;
  channel: string;
  country: string;
  createdDate: string;
  customerCode: string;
  route: string;
  items: Item[];
}
