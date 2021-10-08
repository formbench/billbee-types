import { HeadersInit } from "node-fetch";

// TODO
export type BillbeeHeaders = HeadersInit & {
  Authorization: string;
  "X-Billbee-Api-Key": string;
};
