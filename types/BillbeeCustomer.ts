export interface BillbeeCustomer {
  Id: number;
  Name: string;
  Email: string;
  Tel1?: string;
  Tel2?: string;
  Number: number;
  PriceGroupId?: number;
  LanguageId?: number;
  VatId?: string;
  Type?: number;
}
