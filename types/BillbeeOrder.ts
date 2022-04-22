import { BillbeeCustomer } from './BillbeeCustomer';
import { ShipmentsResponse } from './BillbeeShipments';

interface OrderAddress {
  BillbeeId: number;
  FirstName: string;
  LastName: string;
  Company: string;
  NameAddition: string;
  Street: string;
  HouseNumber: string;
  Zip: string;
  City: string;
  CountryISO2: string;
  Country: string;
  Line2: string;
  Email: string;
  State: string;
  Phone: string;
}

interface OrderComment {
  Id: number;
  FromCustomer: boolean;
  Text: string;
  Name: string;
  Created: string;
}

interface OrderProductImage {
  Url: string;
  IsDefaultImage: boolean;
  Position: number;
  ExternalId: string;
}

interface OrderProduct {
  OldId: string;
  Id: string;
  Title: string;
  Weight: number;
  SKU: string;
  SkuOrId: string;
  IsDigital: boolean;
  Images: OrderProductImage[];
  EAN: string;
  PlatformData: string;
  TARICCode: string;
  CountryOfOrigin: string;
  BillbeeId: number;
}

interface OrderItemAttribute {
  Id: string;
  Name: string;
  Value: string;
  Price: number;
}

interface OrderItem {
  BillbeeId: number;
  TransactionId: string;
  Product: OrderProduct;
  Quantity: number;
  TotalPrice: number;
  TaxAmount: number;
  TaxIndex: number;
  Discount: number;
  Attributes: OrderItemAttribute[];
  GetPriceFromArticleIfAny: boolean;
  IsCoupon: boolean;
  ShippingProfileId: string;
  DontAdjustStock: boolean;
  UnrebatedTotalPrice: number;
  SerialNumber: string;
  InvoiceSKU: string;
}

interface OrderChannel {
  Platform: string;
  BillbeeShopName: string;
  BillbeeShopId: number;
  Id: string;
  Nick: string;
  FirstName: string;
  LastName: string;
  FullName: string;
  Email: string;
}

interface OrderShippingServices {
  DisplayName: string;
  DisplayValue: string;
  RequiresUserInput: boolean;
  ServiceName: string;
  typeName: string;
  PossibleValueLists: {
    key: string;
    value: {
      key: number;
      value: string;
    }[];
  }[];
  CanBeConfigured: boolean;
}

interface OrderHistory {
  Created: string;
  EventTypeName: string;
  Text: string;
  EmployeeName: string;
  TypeId: number;
  VatFlags?: VatFlags;
}

interface VatFlags {
  ThirdPartyCountry: boolean;
  SrcCountryIsEqualToDstCountry: boolean;
  CustomerHasVatId: boolean;
  EuDeliveryThresholdExceeded: boolean;
  OssEnabled: boolean;
  SellerIsRegisteredInDstCountry: boolean;
  OrderDistributionCountryIsEmpty: boolean;
  UserProfileCountryIsEmpty: boolean;
  SetIglWhenVatIdIsAvailableEnabled: boolean;
  RatesFrom: string;
  VatIdFrom: string;
  IsDistanceSale: boolean;
}

interface OrderPayment {
  BillbeeId: number;
  TransactionId: string;
  PayDate: string;
  PaymentType: number;
  SourceTechnology: string;
  SourceText: string;
  PayValue: number;
  Purpose: string;
  Name: number;
}

export interface BillbeeOrder {
  RebateDifference: number;
  ShippingIds: ShipmentsResponse[];
  AcceptLossOfReturnRight: boolean;
  Id: string;
  OrderNumber: string;
  State: number;
  VatMode: number;
  CreatedAt: string;
  ShippedAt: string;
  ConfirmedAt: string;
  PayedAt: string;
  SellerComment: string;
  Comments: OrderComment[];
  InvoiceNumberPrefix: string;
  InvoiceNumberPostfix: string;
  InvoiceNumber: number;
  InvoiceDate: string;
  InvoiceAddress: OrderAddress;
  ShippingAddress: OrderAddress;
  PaymentMethod: number;
  ShippingCost: number;
  TotalCost: number;
  AdjustmentCost: number;
  AdjustmentReason: string;
  OrderItems: OrderItem[];
  Currency: string;
  Seller: OrderChannel;
  Buyer: OrderChannel;
  UpdatedAt: string;
  TaxRate1: number;
  TaxRate2: number;
  BillBeeOrderId: number;
  BillBeeParentOrderId: number;
  VatId: string;
  Tags: string[];
  ShipWeightKg: number;
  LanguageCode: string;
  PaidAmount: number;
  ShippingProfileId: string;
  ShippingProviderId: number;
  ShippingProviderProductId: number;
  ShippingProviderName: string;
  ShippingProviderProductName: string;
  ShippingProfileName: string;
  PaymentInstruction: string;
  IsCancelationFor: string;
  PaymentTransactionId: string;
  DistributionCenter: string;
  DeliverySourceCountryCode: string;
  CustomInvoiceNote: string;
  CustomerNumber: string;
  PaymentReference: string;
  ShippingServices?: OrderShippingServices[];
  Customer: BillbeeCustomer;
  History: OrderHistory[];
  Payments: OrderPayment[];
  LastModifiedAt: string;
  ApiAccountId: string;
  ApiAccountName: string;
  MerchantVatId: string;
  CustomerVatId: string;
  IsFromBillbeeApi: boolean;
}

export enum BillbeeOrderState {
  Bestellt = 1,
  Bestaetigt,
  Zahlung_erhalten,
  Versendet,
  Reklamation,
  Geloescht,
  Abgeschlossen,
  Storniert,
  Archiviert,
  Rated0,
  Mahnung,
  Mahnung2,
  Gepackt,
  Angeboten,
  Zahlungserinnerung,
  Im_Fulfillment,
}
