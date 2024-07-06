import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Tax {
  @Field(() => String, { nullable: true })
  taxType: string;

  @Field(() => String, { nullable: true })
  taxId: string;

  @Field({ nullable: true })
  rate: number;
}

@ObjectType()
export class Price {
  @Field({ nullable: true })
  fullPrice: number;

  @Field(() => [Tax], { nullable: true })
  taxes: Tax[];
}

@ObjectType()
export class Item {
  @Field(() => String, { nullable: true })
  sku: string;

  @Field(() => String, { nullable: true })
  title: string;

  @Field(() => String, { nullable: true })
  categoryId: string;

  @Field(() => String, { nullable: true })
  category: string;

  @Field(() => String, { nullable: true })
  brand: string;

  @Field(() => String, { nullable: true })
  classification: string;

  @Field(() => String, { nullable: true })
  unitsPerBox: string;

  @Field(() => String, { nullable: true })
  minOrderUnits: string;

  @Field(() => String, { nullable: true })
  packageDescription: string;

  @Field(() => String, { nullable: true })
  packageUnitDescription: string;

  @Field({ nullable: true })
  quantityMaxRedeem: number;

  @Field(() => String, { nullable: true })
  redeemUnit: string;

  @Field(() => String, { nullable: true })
  orderReasonRedeem: string;

  @Field({ nullable: true })
  skuRedeem: boolean;

  @Field(() => Price, { nullable: true })
  price: Price;

  @Field({ nullable: true })
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

  @Field(() => [Item], { nullable: true, defaultValue: [] })
  items: Item[];
}
