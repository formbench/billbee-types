export interface BillbeeProduct {
  InvoiceText: {
    Text: string;
    LanguageCode: string;
  }[];
  Manufacturer: string;
  Id: number;
  Title: {
    Text: string;
    LanguageCode: string;
  }[];
  Description: {
    Text: string;
    LanguageCode: string;
  }[];
  ShortDescription: {
    Text: string;
    LanguageCode: string;
  }[];
  BasicAttributes: {
    Text: string;
    LanguageCode: string;
  }[];
  Images: {
    Url: string;
    Id: number;
    ThumbPathExt: string;
    ThumbUrl: string;
    Position: number;
    IsDefault: boolean;
    ArticleId: number;
  }[];
  VatIndex: number;
  Price: number;
  CostPrice: number;
  Vat1Rate: number;
  Vat2Rate: number;
  StockDesired: number;
  StockCurrent: number;
  StockWarning: number;
  SKU: string;
  EAN: string;
  Materials: {
    Text: string;
    LanguageCode: string;
  }[];
  Tags: {
    Text: string;
    LanguageCode: string;
  }[];
  Sources: {
    Id: number;
    Source: string;
    SourceId: string;
    ApiAccountName: string;
    ApiAccountId: number;
    ExportFactor: number;
    StockSyncInactive: true;
    StockSyncMin: number;
    StockSyncMax: number;
    UnitsPerItem: number;
    Custom: Record<string, unknown>;
  }[];
  Weight: number;
  WeightNet: number;
  LowStock: true;
  StockCode: string;
  StockReduceItemsPerSale: number;
  Stocks: {
    Name: string;
    StockId: number;
    StockCurrent: number;
    StockWarning: number;
    StockCode: string;
    UnfulfilledAmount: number;
    StockDesired: 0;
  }[];
  Category1: {
    Name: string;
    Id: 0;
  };
  Category2: {
    Name: string;
    Id: 0;
  };
  Category3: {
    Name: string;
    Id: 0;
  };
  Type: number;
  Unit: number;
  UnitsPerItem: number;
  SoldAmount: number;
  SoldSumGross: number;
  SoldSumNet: number;
  SoldSumNetLast30Days: number;
  SoldSumGrossLast30Days: number;
  SoldAmountLast30Days: number;
  ShippingProductId: number;
  IsDigital: true;
  IsCustomizable: true;
  DeliveryTime: number;
  Recipient: number;
  Occasion: number;
  CountryOfOrigin: string;
  ExportDescription: string;
  TaricNumber: string;
  Condition: number;
  WidthCm: number;
  LengthCm: number;
  HeightCm: number;
  BillOfMaterial: {
    Amount: number;
    ArticleId: number;
    SKU: string;
  }[];
  CustomFields: {
    Id: number;
    DefinitionId: number;
    Definition: {
      Id: number;
      Name: string;
      Configuration: Record<string, unknown>;
      Type: number;
      IsNullable: true;
    };
    ArticleId: number;
    Value: Record<string, unknown>;
  };
}

export interface ReservedAmount {
  ReservedAmount: number;
}

export interface CustomField {
  Id: number;
  Name: string;
  Configuration: Record<string, unknown>;
  Type: number;
  IsNullable: boolean;
}

export interface ProductImage {
  Url: string;
  Id: number;
  ThumbPathExt: string;
  ThumbUrl: string;
  Position: number;
  IsDefault: boolean;
  ArticleId: number;
}

export interface UpdateStockResponse {
  SKU: string;
  CurrentStock: number;
  UnfulfilledAmount: number;
  Message: string;
}

export interface ImagesDeleteResponse {
  Deleted: number[];
  NotFound: number[];
}
