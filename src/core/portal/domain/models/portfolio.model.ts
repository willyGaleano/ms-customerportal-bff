import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Tax {
  @Field(() => String)
  taxType: string;

  @Field(() => String)
  taxId: string;

  @Field()
  rate: number;
}

@ObjectType()
export class Price {
  @Field()
  fullPrice: number;

  @Field(() => [Tax])
  taxes: Tax[];
}

@ObjectType()
export class Item {
  @Field(() => String)
  sku: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  categoryId: string;

  @Field(() => String)
  category: string;

  @Field(() => String)
  brand: string;

  @Field(() => String)
  classification: string;

  @Field(() => String)
  unitsPerBox: string;

  @Field(() => String)
  minOrderUnits: string;

  @Field(() => String)
  packageDescription: string;

  @Field(() => String)
  packageUnitDescription: string;

  @Field()
  quantityMaxRedeem: number;

  @Field(() => String)
  redeemUnit: string;

  @Field(() => String)
  orderReasonRedeem: string;

  @Field()
  skuRedeem: boolean;

  @Field(() => Price)
  price: Price;

  @Field()
  points: number;
}

@ObjectType()
export class Portfolio {
  @Field(() => String)
  id: string;

  @Field(() => String)
  channel: string;

  @Field(() => String)
  country: string;

  @Field()
  createdDate: string;

  @Field(() => String)
  customerCode: string;

  @Field(() => String)
  route: string;

  @Field(() => [Item])
  items: Item[];
}
