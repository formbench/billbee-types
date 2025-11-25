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
export interface BillbeeCustomerAddressPatchBody extends Partial<Omit<BillbeeCustomerAddress, 'Id' | 'CustomerId'>> {
}
//# sourceMappingURL=BillbeeCustomerAddress.d.ts.map