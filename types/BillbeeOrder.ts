export interface BillbeeOrder {
  RebateDifference: number;
  ShippingIds: {
    BillbeeId: number;
    ShippingId: string;
    Shipper: string;
    Created: string;
    TrackingUrl: string;
    ShippingProviderId: number;
    ShippingProviderProductId: number;
    ShippingCarrier: number;
    ShipmentType: number;
  }[];
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
  Comments: {
    Id: number;
    FromCustomer: boolean;
    Text: string;
    Name: string;
    Created: string;
  }[];
  InvoiceNumberPrefix: string;
  InvoiceNumberPostfix: string;
  InvoiceNumber: number;
  InvoiceDate: string;
  InvoiceAddress: {
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
  };
  ShippingAddress: {
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
  };
  PaymentMethod: number;
  ShippingCost: number;
  TotalCost: number;
  AdjustmentCost: number;
  AdjustmentReason: string;
  OrderItems: {
    BillbeeId: number;
    TransactionId: string;
    Product: {
      OldId: string;
      Id: string;
      Title: string;
      Weight: number;
      SKU: string;
      SkuOrId: string;
      IsDigital: boolean;
      Images: {
        Url: string;
        IsDefaultImage: boolean;
        Position: number;
        ExternalId: string;
      }[];
      EAN: string;
      PlatformData: string;
      TARICCode: string;
      CountryOfOrigin: string;
      BillbeeId: number;
    };
    Quantity: number;
    TotalPrice: number;
    TaxAmount: number;
    TaxIndex: number;
    Discount: number;
    Attributes: {
      Id: string;
      Name: string;
      Value: string;
      Price: number;
    }[];
    GetPriceFromArticleIfAny: boolean;
    IsCoupon: boolean;
    ShippingProfileId: string;
    DontAdjustStock: boolean;
    UnrebatedTotalPrice: number;
    SerialNumber: string;
  }[];
  Currency: string;
  Seller: {
    Platform: string;
    BillbeeShopName: string;
    BillbeeShopId: number;
    Id: string;
    Nick: string;
    FirstName: string;
    LastName: string;
    FullName: string;
    Email: string;
  };
  Buyer: {
    Platform: string;
    BillbeeShopName: string;
    BillbeeShopId: number;
    Id: string;
    Nick: string;
    FirstName: string;
    LastName: string;
    FullName: string;
    Email: string;
  };
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
  ShippingServices: {
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
  }[];
  Customer: {
    Id: number;
    Name: string;
    Email: string;
    Tel1: string;
    Tel2: string;
    Number: number;
    PriceGroupId: number;
    LanguageId: number;
    VatId: string;
    Type: number;
  };
  History: {
    Created: string;
    EventTypeName: string;
    Text: string;
    EmployeeName: string;
    TypeId: number;
  }[];
  Payments: {
    BillbeeId: number;
    TransactionId: string;
    PayDate: string;
    PaymentType: number;
    SourceTechnology: string;
    SourceText: string;
    PayValue: number;
    Purpose: string;
    Name: number;
  }[];
  LastModifiedAt: string;
}

export interface StockDictionary {
  [sku: string]: number;
}

// eslint-disable-next-line no-shadow
export enum BillbeeOrderStates {
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
  Im_Fulfillment
}
