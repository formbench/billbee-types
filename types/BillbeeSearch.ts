interface SearchResultsProduct {
  Id: number;
  ShortText: string;
  SKU: string;
  Tags: string;
}

interface SearchResultsOrder {
  Id: number;
  ExternalReference: string;
  BuyerName: string;
  InvoiceNumber: string;
  CustomerName: string;
  ArticleTexts: string;
}

interface SearchResultsCustomer {
  Id: number;
  Name: string;
  Addresses: string;
  Number: string;
}

export interface BillbeeSearchResults {
  Products: SearchResultsProduct[];
  Orders: SearchResultsOrder[];
  Customers: SearchResultsCustomer[];
}
