export type FieldStringLiterals =
  | "AddressType"
  | "Company"
  | "FirstName"
  | "LastName"
  | "Name2"
  | "Street"
  | "Housenumber"
  | "Zip"
  | "City"
  | "State"
  | "CountryCode"
  | "Email"
  | "Tel1"
  | "Tel2"
  | "Fax"
  | "AddressAddition";

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

export interface BillbeeCustomerAddress {
  Id: number;
  AddressType: number;
  CustomerId: number;
  Company: string;
  FirstName: string;
  LastName: string;
  Name2: string;
  Street: string;
  Housenumber: string;
  Zip: string;
  City: string;
  State: string;
  CountryCode: string;
  Email: string;
  Tel1: string;
  Tel2: string;
  Fax: string;
  AddressAddition: string;
}
