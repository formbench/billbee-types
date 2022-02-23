export interface BillbeeSearchResultsProduct {
  Id: number;
  ShortText: string;
  SKU: string;
  Tags: string;
}

export interface BillbeeSearchResultsOrder {
  Id: number;
  ExternalReference: string;
  BuyerName: string;
  InvoiceNumber: string;
  CustomerName: string;
  ArticleTexts: string;
}

export interface BillbeeSearchResultsCustomer {
  Id: number;
  Name: string;
  Addresses: string;
  Number: string;
}

export interface BillbeeSearchResults {
  Products: BillbeeSearchResultsProduct[];
  Orders: BillbeeSearchResultsOrder[];
  Customers: BillbeeSearchResultsCustomer[];
}
