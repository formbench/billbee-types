export interface ShippingProviderProduct {
    id: number;
    displayName: string;
    productName: string;
}
export interface ShippingProvider {
    id: number;
    name: string;
    products: ShippingProviderProduct[];
}
export interface ShippingCarrier {
    Id: number;
    Name: string;
}
export interface ShipmentsResponse {
    BillbeeId: number;
    ShippingId: string;
    Shipper: string;
    Created: string;
    TrackingUrl: string;
    ShippingProviderId: number;
    ShippingProviderProductId?: number;
    ShippingCarrier: number;
    ShipmentType?: any;
}
export interface ShipWithLabelResponse {
    OrderId: number;
    OrderReference: string;
    ShippingId: string;
    TrackingUrl: string;
    LabelDataPdf: string;
    ExportDocsPdf: string;
    Carrier: string;
    ShippingDate: string;
}
//# sourceMappingURL=BillbeeShipments.d.ts.map