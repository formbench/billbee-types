export interface BillbeeSearchResults {
  Products: {
    Id: number;
    ShortText: string;
    SKU: string;
    Tags: string;
  }[];
  Orders: {
    Id: number;
    ExternalReference: string;
    BuyerName: string;
    InvoiceNumber: string;
    CustomerName: string;
    ArticleTexts: string;
  }[];
  Customers: {
    Id: number;
    Name: string;
    Addresses: string;
    Number: string;
  }[];
}
