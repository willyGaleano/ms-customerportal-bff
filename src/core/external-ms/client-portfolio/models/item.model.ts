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
  quantityMaxRedeem: number;
  redeemUnit: string;
  orderReasonRedeem: string;
  skuRedeem: boolean;
  price: Price;
  points: number;
}
