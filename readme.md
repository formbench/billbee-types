# Billbee Types

This repository provides typescript types for use with the responses of the Billbee REST API.
For documentation of that API go to api https://www.billbee.io/hilfecenter/api

To use the types, the need to be manually imported from this package.

Provided types are:

## General

- BillbeeResponse\<T>

## Orders Endpoint

- BillbeeOrder
- BillbeeOrderState

## Products Endpoint

- Billbee Product
- ReservedAmount
- CustomField
- ProductImage
- UpdateStockResponse
- ImagesDeleteResponse

## Search Endpoint

- BillbeeSearchResults

## Shipments Endpoint

- ShippingProvider
- ShippingProviderProduct
- ShippingCarrier
- ShipmentsResponse
- ShipWithLabelResponse
