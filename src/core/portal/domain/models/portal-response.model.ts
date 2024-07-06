import { Field, ObjectType } from '@nestjs/graphql';
import { Portal } from './portal.model';

@ObjectType()
export class PortalResponse {
  @Field(() => Portal, { nullable: true })
  portal?: Portal | null;
}
