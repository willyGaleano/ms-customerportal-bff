import { CustomerGroup } from './customer-group.model';
import { PaymentMethod } from './payment-method.model';

export class Client {
  id: string;
  address: string;
  blocked: string;
  cellPhone: string;
  channel: string;
  clientId: string;
  country: string;
  customerGroup: CustomerGroup;
  customerSchema: number;
  distrChan: string;
  division: string;
  fiscalCode1: string;
  fiscalCode2: string;
  frequency: boolean;
  frequencyDays: string;
  idPortfolio: string;
  immediateDelivery: boolean;
  industryCode: string;
  industryCode1: string;
  isEnrollment: boolean;
  name: string;
  name2: string;
  office: string;
  paymentCondition: string;
  paymentMethods: PaymentMethod[];
  priceGroup: string;
  priceList: string;
  routeId: string;
  salesOrg: string;
  supplyCenter: string;
  updateDate: string;
  vendorGroup: string;
}
