export interface BillbeeCustomerContactData {
    Id: number;
    TypeId: number;
    TypeName: string;
    SubType: string;
    Value: string;
}
export interface BillbeeCustomer {
    Id: number;
    Name: string;
    Email: string;
    Tel1?: string;
    Tel2?: string;
    Number: number;
    PriceGroupId?: number;
    LanguageId?: number;
    DefaultMailAddress?: BillbeeCustomerContactData;
    DefaultCommercialMailAddress?: BillbeeCustomerContactData;
    DefaultStatusUpdatesMailAddress?: BillbeeCustomerContactData;
    DefaultPhone1?: BillbeeCustomerContactData;
    DefaultPhone2?: BillbeeCustomerContactData;
    DefaultFax?: BillbeeCustomerContactData;
    VatId?: string;
    Type?: number;
    MetaData?: BillbeeCustomerContactData[];
}
//# sourceMappingURL=BillbeeCustomer.d.ts.map