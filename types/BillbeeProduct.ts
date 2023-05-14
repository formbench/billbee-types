import { BillbeeLocalizedString } from './BillbeeLocalizedString';

interface ProductSource {
  Id: number;
  Source: string;
  SourceId: string;
  ApiAccountName: string;
  ApiAccountId: number;
  ExportFactor: number;
  StockSyncInactive: boolean;
  StockSyncMin: number;
  StockSyncMax: number;
  UnitsPerItem: number;
  Custom: Record<string, unknown>;
}

interface ProductStock {
  Name: string;
  StockId: number;
  StockCurrent: number;
  StockWarning: number;
  StockCode: string;
  UnfulfilledAmount: number;
  StockDesired: 0;
}

export interface ProductCategory {
  Name: string;
  Id: number;
}

interface ProductBillOfMaterialItem {
  Amount: number;
  ArticleId: number;
  SKU: string;
}

export interface CustomField {
  Id: number;
  Name: string;
  Configuration: Record<string, unknown>;
  Type: number;
  IsNullable: boolean;
}

interface ProductCustomField {
  Id: number;
  DefinitionId: number;
  Definition: CustomField;
  ArticleId: number;
  Value: Record<string, unknown>;
}

export interface ReservedAmount {
  ReservedAmount: number;
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

export interface BillbeeProduct {
  InvoiceText: BillbeeLocalizedString[];
  Manufacturer: string;
  Id: number;
  Title: BillbeeLocalizedString[];
  Description: BillbeeLocalizedString[];
  ShortDescription: BillbeeLocalizedString[];
  BasicAttributes: BillbeeLocalizedString[];
  Images: ProductImage[];
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
  Materials: BillbeeLocalizedString[];
  Tags: BillbeeLocalizedString[];
  Sources: ProductSource[];
  Weight: number;
  WeightNet: number;
  LowStock: boolean;
  StockCode: string;
  StockReduceItemsPerSale: number;
  Stocks: ProductStock[];
  Category1: ProductCategory;
  Category2: ProductCategory;
  Category3: ProductCategory;
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
  IsDigital: boolean;
  IsCustomizable: boolean;
  DeliveryTime: number;
  Recipient: number;
  Occasion: number;
  CountryOfOrigin: string;
  ExportDescription: string;
  ExportDescriptionMultiLanguage: BillbeeLocalizedString[];
  TaricNumber: string;
  Condition: number;
  WidthCm: number;
  LengthCm: number;
  HeightCm: number;
  BillOfMaterial: ProductBillOfMaterialItem[];
  CustomFields: ProductCustomField[];
  IsDeactivated: boolean;
}
