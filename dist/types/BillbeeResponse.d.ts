export interface BillbeeResponse<T> {
    Data: T;
    ErrorMessage: string;
    ErrorCode: number;
    Paging?: {
        Page: number;
        TotalPages: number;
        TotalRows: number;
        PageSize: number;
    };
}
//# sourceMappingURL=BillbeeResponse.d.ts.map