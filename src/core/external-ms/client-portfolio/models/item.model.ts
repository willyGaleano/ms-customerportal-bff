import { Price } from './price.model';

export class Item {
  sku: string;
  title: string;
  categoryId: string;
  category: string;
  brand: string;
  classification: string;
  unitsPerBox: string;
  minOrderUnits: string;
  packageDescription: string;
  packageUnitDescription: string;
  quantity_max_redeem: number;
  redeem_unit: string;
  order_reason_redeem: string;
  sku_redeem: boolean;
  price: Price;
  points: number;
}
