/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductAttributeCombinationProductAttributeCombinationDtoPagedListDto } from '../models/ProductAttributeCombinationProductAttributeCombinationDtoPagedListDto';
import type { ProductDto } from '../models/ProductDto';
import type { ProductProductDtoPagedListDto } from '../models/ProductProductDtoPagedListDto';
import type { ProductSortingEnum } from '../models/ProductSortingEnum';
import type { ProductType } from '../models/ProductType';
import type { StockQuantityHistoryStockQuantityHistoryDtoPagedListDto } from '../models/StockQuantityHistoryStockQuantityHistoryDtoPagedListDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ProductService {

    /**
     * Delete products
     * @param ids Array of product identifiers (separator - ;)
     * @returns void 
     * @throws ApiError
     */
    public static getDeleteProducts(
ids: string,
): CancelablePromise<void> {
        return __request({
            method: 'GET',
            path: `/api-backend/Product/DeleteProducts/${ids}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets all products displayed on the home page
     * @returns ProductDto Success
     * @throws ApiError
     */
    public static getGetAllProductsDisplayedOnHomepage(): CancelablePromise<Array<ProductDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Product/GetAllProductsDisplayedOnHomepage`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets featured products by a category identifier
     * @param categoryId Category identifier
     * @param storeId Store identifier; 0 if you want to get all records
     * @returns ProductDto Success
     * @throws ApiError
     */
    public static getGetCategoryFeaturedProducts(
categoryId: number,
storeId?: number,
): CancelablePromise<Array<ProductDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Product/GetCategoryFeaturedProducts/${categoryId}`,
            query: {
                'storeId': storeId,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets featured products by a manufacturer identifier
     * @param manufacturerId Manufacturer identifier
     * @param storeId Store identifier; 0 if you want to get all records
     * @returns ProductDto Success
     * @throws ApiError
     */
    public static getGetManufacturerFeaturedProducts(
manufacturerId: number,
storeId?: number,
): CancelablePromise<Array<ProductDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Product/GetManufacturerFeaturedProducts/${manufacturerId}`,
            query: {
                'storeId': storeId,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets products which marked as new
     * @param storeId Store identifier; 0 if you want to get all records
     * @returns ProductDto Success
     * @throws ApiError
     */
    public static getGetProductsMarkedAsNew(
storeId?: number,
): CancelablePromise<Array<ProductDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Product/GetProductsMarkedAsNew`,
            query: {
                'storeId': storeId,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets products by identifier
     * @param ids Array of product identifiers (separator - ;)
     * @returns ProductDto Success
     * @throws ApiError
     */
    public static getGetProductsByIds(
ids: string,
): CancelablePromise<Array<ProductDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Product/GetProductsByIds/${ids}`,
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get number of product (published and visible) in certain category
     * @param categoryIds Array of category identifiers (separator - ;)
     * @param storeId Store identifier; 0 to load all records
     * @returns number Success
     * @throws ApiError
     */
    public static getGetNumberOfProductsInCategory(
categoryIds?: string,
storeId?: number,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/Product/GetNumberOfProductsInCategory`,
            query: {
                'categoryIds': categoryIds,
                'storeId': storeId,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets products by product attribute
     * @param productAttributeId Product attribute identifier
     * @param pageIndex Page index
     * @param pageSize Page size
     * @returns ProductProductDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetProductsByProductAtributeId(
productAttributeId: number,
pageIndex?: number,
pageSize: number = 2147483647,
): CancelablePromise<ProductProductDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Product/GetProductsByProductAtributeId/${productAttributeId}`,
            query: {
                'pageIndex': pageIndex,
                'pageSize': pageSize,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets associated products
     * @param parentGroupedProductId Parent product identifier (used with grouped products)
     * @param storeId Store identifier; 0 to load all records
     * @param vendorId Vendor identifier; 0 to load all records
     * @param showHidden A value indicating whether to show hidden records
     * @returns ProductDto Success
     * @throws ApiError
     */
    public static getGetAssociatedProducts(
parentGroupedProductId: number,
storeId?: number,
vendorId?: number,
showHidden: boolean = false,
): CancelablePromise<Array<ProductDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Product/GetAssociatedProducts/${parentGroupedProductId}`,
            query: {
                'storeId': storeId,
                'vendorId': vendorId,
                'showHidden': showHidden,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update product review totals
     * @param productId Product Id
     * @returns any Success
     * @throws ApiError
     */
    public static getUpdateProductReviewTotals(
productId: number,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-backend/Product/UpdateProductReviewTotals/${productId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get low stock products
     * @param vendorId Vendor identifier; pass null to load all records
     * @param loadPublishedOnly Whether to load published products only; pass null to load all products, pass true to load only published products, pass false to load only unpublished products
     * @param pageIndex Page index
     * @param pageSize Page size
     * @param getOnlyTotalCount A value in indicating whether you want to load only total number of records. Set to "true" if you don't want to load data from database
     * @returns ProductProductDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetLowStockProducts(
vendorId?: number,
loadPublishedOnly: boolean = true,
pageIndex?: number,
pageSize: number = 2147483647,
getOnlyTotalCount: boolean = false,
): CancelablePromise<ProductProductDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Product/GetLowStockProducts`,
            query: {
                'vendorId': vendorId,
                'loadPublishedOnly': loadPublishedOnly,
                'pageIndex': pageIndex,
                'pageSize': pageSize,
                'getOnlyTotalCount': getOnlyTotalCount,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get low stock product combinations
     * @param vendorId Vendor identifier; pass null to load all records
     * @param loadPublishedOnly Whether to load combinations of published products only; pass null to load all products, pass true to load only published products, pass false to load only unpublished products
     * @param pageIndex Page index
     * @param pageSize Page size
     * @param getOnlyTotalCount A value in indicating whether you want to load only total number of records. Set to "true" if you don't want to load data from database
     * @returns ProductAttributeCombinationProductAttributeCombinationDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetLowStockProductCombinations(
vendorId?: number,
loadPublishedOnly: boolean = true,
pageIndex?: number,
pageSize: number = 2147483647,
getOnlyTotalCount: boolean = false,
): CancelablePromise<ProductAttributeCombinationProductAttributeCombinationDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Product/GetLowStockProductCombinations`,
            query: {
                'vendorId': vendorId,
                'loadPublishedOnly': loadPublishedOnly,
                'pageIndex': pageIndex,
                'pageSize': pageSize,
                'getOnlyTotalCount': getOnlyTotalCount,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Gets a product by SKU
     * @param sku SKU
     * @returns ProductDto Success
     * @throws ApiError
     */
    public static getGetProductBySku(
sku: string,
): CancelablePromise<ProductDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Product/GetProductBySku`,
            query: {
                'sku': sku,
            },
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets a products by SKU array
     * @param skuArray SKU array (separator - ;)
     * @param vendorId Vendor ID; 0 to load all records
     * @returns ProductDto Success
     * @throws ApiError
     */
    public static getGetProductsBySku(
skuArray: string,
vendorId?: number,
): CancelablePromise<Array<ProductDto>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Product/GetProductsBySku`,
            query: {
                'skuArray': skuArray,
                'vendorId': vendorId,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Update HasTierPrices property (used for performance optimization)
     * @param productId Product Id
     * @returns any Success
     * @throws ApiError
     */
    public static getUpdateHasTierPricesProperty(
productId: number,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-backend/Product/UpdateHasTierPricesProperty/${productId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Update HasDiscountsApplied property (used for performance optimization)
     * @param productId Product Id
     * @returns any Success
     * @throws ApiError
     */
    public static getUpdateHasDiscountsApplied(
productId: number,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-backend/Product/UpdateHasDiscountsApplied/${productId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets number of products by vendor identifier
     * @param vendorId Vendor identifier
     * @returns any Success
     * @throws ApiError
     */
    public static getGetNumberOfProductsByVendorId(
vendorId: number,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-backend/Product/GetNumberOfProductsByVendorId/${vendorId}`,
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Parse "required product Ids" property
     * @param productId Product Id
     * @returns number Success
     * @throws ApiError
     */
    public static getParseRequiredProductIds(
productId: number,
): CancelablePromise<Array<number>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Product/ParseRequiredProductIds/${productId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get a value indicating whether a product is available now (availability dates)
     * @param productId Product Id
     * @param dateTime Datetime to check; pass null to use current date
     * @returns boolean Success
     * @throws ApiError
     */
    public static getProductIsAvailable(
productId: number,
dateTime?: string,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/Product/ProductIsAvailable/${productId}`,
            query: {
                'dateTime': dateTime,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get a list of allowed quantities (parse 'AllowedQuantities' property)
     * @param productId Product Id
     * @returns number Success
     * @throws ApiError
     */
    public static getParseAllowedQuantities(
productId: number,
): CancelablePromise<Array<number>> {
        return __request({
            method: 'GET',
            path: `/api-backend/Product/ParseAllowedQuantities/${productId}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get total quantity
     * @param productId Product id
     * @param useReservedQuantity A value indicating whether we should consider "Reserved Quantity" property
 * when "multiple warehouses" are used
     * @param warehouseId Warehouse identifier. Used to limit result to certain warehouse.
 * Used only with "multiple warehouses" enabled.
     * @returns number Success
     * @throws ApiError
     */
    public static getGetTotalStockQuantity(
productId: number,
useReservedQuantity: boolean = true,
warehouseId?: number,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/Product/GetTotalStockQuantity/${productId}`,
            query: {
                'useReservedQuantity': useReservedQuantity,
                'warehouseId': warehouseId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get number of rental periods (price ratio)
     * @param productId Product id
     * @param startDate Start date
     * @param endDate End date
     * @returns number Success
     * @throws ApiError
     */
    public static getGetRentalPeriods(
productId: number,
startDate: string,
endDate: string,
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/Product/GetRentalPeriods/${productId}`,
            query: {
                'startDate': startDate,
                'endDate': endDate,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Formats the stock availability/quantity message
     * @param productId Product Id
     * @param requestBody Selected product attributes in XML format (if specified)
     * @returns string Success
     * @throws ApiError
     */
    public static postFormatStockMessage(
productId: number,
requestBody?: string,
): CancelablePromise<string> {
        return __request({
            method: 'POST',
            path: `/api-backend/Product/FormatStockMessage/${productId}`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Formats SKU
     * @param productId Product Id
     * @param requestBody Attributes in XML format
     * @returns string Success
     * @throws ApiError
     */
    public static postFormatSku(
productId: number,
requestBody?: string,
): CancelablePromise<string> {
        return __request({
            method: 'POST',
            path: `/api-backend/Product/FormatSku/${productId}`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Formats manufacturer part number
     * @param productId Product Id
     * @param requestBody Attributes in XML format
     * @returns string Success
     * @throws ApiError
     */
    public static postFormatMpn(
productId: number,
requestBody?: string,
): CancelablePromise<string> {
        return __request({
            method: 'POST',
            path: `/api-backend/Product/FormatMpn/${productId}`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Formats GTIN
     * @param productId Product Id
     * @param requestBody Attributes in XML format
     * @returns string Success
     * @throws ApiError
     */
    public static postFormatGtin(
productId: number,
requestBody?: string,
): CancelablePromise<string> {
        return __request({
            method: 'POST',
            path: `/api-backend/Product/FormatGtin/${productId}`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Formats start/end date for rental product
     * @param productId Product Id
     * @param date date
     * @returns string Success
     * @throws ApiError
     */
    public static getFormatRentalDate(
productId: number,
date: string,
): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api-backend/Product/FormatRentalDate/${productId}`,
            query: {
                'date': date,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Update product store mappings
     * @param productId Product Id
     * @param storesIds A list of store ids for mapping (separator - ;)
     * @returns any Success
     * @throws ApiError
     */
    public static getUpdateProductStoreMappings(
productId: number,
storesIds: string,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-backend/Product/UpdateProductStoreMappings/${productId}/${storesIds}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets the value whether the sequence contains downloadable products
     * @param productIds Product identifiers (separator - ;)
     * @returns boolean Success
     * @throws ApiError
     */
    public static getHasAnyDownloadableProduct(
productIds: string,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/Product/HasAnyDownloadableProduct/${productIds}`,
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets the value whether the sequence contains gift card products
     * @param productIds Product identifiers (separator - ;)
     * @returns boolean Success
     * @throws ApiError
     */
    public static getHasAnyGiftCardProduct(
productIds: string,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/Product/HasAnyGiftCardProduct/${productIds}`,
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Gets the value whether the sequence contains recurring products
     * @param productIds Product identifiers (separator - ;)
     * @returns boolean Success
     * @throws ApiError
     */
    public static getHasAnyRecurringProduct(
productIds: string,
): CancelablePromise<boolean> {
        return __request({
            method: 'GET',
            path: `/api-backend/Product/HasAnyRecurringProduct/${productIds}`,
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns any Success
     * @throws ApiError
     */
    public static deleteDelete(
id: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api-backend/Product/Delete/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * @param id 
     * @returns ProductDto Success
     * @throws ApiError
     */
    public static getGetById(
id: number,
): CancelablePromise<ProductDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Product/GetById/${id}`,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Search products
     * @param pageIndex Page index
     * @param pageSize Page size
     * @param categoryIds Category identifiers
     * @param manufacturerIds Manufacturer identifiers
     * @param storeId Store identifier; 0 to load all records
     * @param vendorId Vendor identifier; 0 to load all records
     * @param warehouseId Warehouse identifier; 0 to load all records
     * @param productType Product type; 0 to load all records
     * @param visibleIndividuallyOnly A values indicating whether to load only products marked as "visible individually"; "false" to load all records; "true" to load "visible individually" only
     * @param excludeFeaturedProducts A value indicating whether loaded products are marked as featured (relates only to categories and manufacturers); "false" (by default) to load all records; "true" to exclude featured products from results
     * @param priceMin Minimum price; null to load all records
     * @param priceMax Maximum price; null to load all records
     * @param productTagId Product tag identifier; 0 to load all records
     * @param keywords Keywords
     * @param searchDescriptions A value indicating whether to search by a specified "keyword" in product descriptions
     * @param searchManufacturerPartNumber A value indicating whether to search by a specified "keyword" in manufacturer part number
     * @param searchSku A value indicating whether to search by a specified "keyword" in product SKU
     * @param searchProductTags A value indicating whether to search by a specified "keyword" in product tags
     * @param languageId Language identifier (search for text searching)
     * @param filteredSpecOptionIds Specification options list to filter products; null to load all records (separator - ;)
     * @param orderByType Order by
     * @param showHidden A value indicating whether to show hidden records
     * @param overridePublished null - process "Published" property according to "showHidden" parameter
 * true - load only "Published" products
 * false - load only "Unpublished" products
     * @returns ProductProductDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetAll(
pageIndex?: number,
pageSize: number = 2147483647,
categoryIds?: Array<number>,
manufacturerIds?: Array<number>,
storeId?: number,
vendorId?: number,
warehouseId?: number,
productType?: ProductType,
visibleIndividuallyOnly: boolean = false,
excludeFeaturedProducts: boolean = false,
priceMin?: number,
priceMax?: number,
productTagId?: number,
keywords?: string,
searchDescriptions: boolean = false,
searchManufacturerPartNumber: boolean = true,
searchSku: boolean = true,
searchProductTags: boolean = false,
languageId?: number,
filteredSpecOptionIds?: string,
orderByType?: ProductSortingEnum,
showHidden: boolean = false,
overridePublished?: boolean,
): CancelablePromise<ProductProductDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Product/GetAll`,
            query: {
                'pageIndex': pageIndex,
                'pageSize': pageSize,
                'categoryIds': categoryIds,
                'manufacturerIds': manufacturerIds,
                'storeId': storeId,
                'vendorId': vendorId,
                'warehouseId': warehouseId,
                'productType': productType,
                'visibleIndividuallyOnly': visibleIndividuallyOnly,
                'excludeFeaturedProducts': excludeFeaturedProducts,
                'priceMin': priceMin,
                'priceMax': priceMax,
                'productTagId': productTagId,
                'keywords': keywords,
                'searchDescriptions': searchDescriptions,
                'searchManufacturerPartNumber': searchManufacturerPartNumber,
                'searchSku': searchSku,
                'searchProductTags': searchProductTags,
                'languageId': languageId,
                'filteredSpecOptionIds': filteredSpecOptionIds,
                'orderByType': orderByType,
                'showHidden': showHidden,
                'overridePublished': overridePublished,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Get products for which a discount is applied
     * @param discountId Discount identifier; pass null to load all records
     * @param showHidden A value indicating whether to load deleted products
     * @param pageIndex Page index
     * @param pageSize Page size
     * @returns ProductProductDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetProductsWithAppliedDiscount(
discountId?: number,
showHidden: boolean = false,
pageIndex?: number,
pageSize: number = 2147483647,
): CancelablePromise<ProductProductDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Product/GetProductsWithAppliedDiscount`,
            query: {
                'discountId': discountId,
                'showHidden': showHidden,
                'pageIndex': pageIndex,
                'pageSize': pageSize,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns ProductDto Success
     * @throws ApiError
     */
    public static postCreate(
requestBody?: ProductDto,
): CancelablePromise<ProductDto> {
        return __request({
            method: 'POST',
            path: `/api-backend/Product/Create`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static putUpdate(
requestBody?: ProductDto,
): CancelablePromise<any> {
        return __request({
            method: 'PUT',
            path: `/api-backend/Product/Update`,
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Adjust inventory
     * @param productId Product identifier
     * @param quantityToChange Quantity to increase or decrease
     * @param message Message for the stock quantity history
     * @param requestBody Attributes in XML format
     * @returns any Success
     * @throws ApiError
     */
    public static postAdjustInventory(
productId: number,
quantityToChange: number,
message: string = '',
requestBody?: string,
): CancelablePromise<any> {
        return __request({
            method: 'POST',
            path: `/api-backend/Product/AdjustInventory/${productId}`,
            query: {
                'quantityToChange': quantityToChange,
                'message': message,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Book the reserved quantity
     * @param productId Product identifier
     * @param warehouseId Warehouse identifier
     * @param quantity Quantity, must be negative
     * @param message Message for the stock quantity history
     * @returns any Success
     * @throws ApiError
     */
    public static getBookReservedInventory(
productId: number,
warehouseId: number,
quantity: number,
message: string = '',
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-backend/Product/BookReservedInventory/${productId}/${warehouseId}`,
            query: {
                'quantity': quantity,
                'message': message,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Reverse booked inventory (if acceptable)
     * @param productId product identifier
     * @param shipmentItemId Shipment item identifier
     * @param message Message for the stock quantity history
     * @returns number Success
     * @throws ApiError
     */
    public static getReverseBookedInventory(
productId: number,
shipmentItemId: number,
message: string = '',
): CancelablePromise<number> {
        return __request({
            method: 'GET',
            path: `/api-backend/Product/ReverseBookedInventory/${productId}/${shipmentItemId}`,
            query: {
                'message': message,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Add stock quantity change entry
     * @param productId Product identifier
     * @param quantityAdjustment Quantity adjustment
     * @param stockQuantity Current stock quantity
     * @param warehouseId Warehouse identifier
     * @param message Message
     * @param combinationId Product attribute combination identifier
     * @returns any Success
     * @throws ApiError
     */
    public static getAddStockQuantityHistoryEntry(
productId: number,
quantityAdjustment: number,
stockQuantity: number,
warehouseId?: number,
message: string = '',
combinationId?: number,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api-backend/Product/AddStockQuantityHistoryEntry/${productId}`,
            query: {
                'quantityAdjustment': quantityAdjustment,
                'stockQuantity': stockQuantity,
                'warehouseId': warehouseId,
                'message': message,
                'combinationId': combinationId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Get the history of the product stock quantity changes
     * @param productId Product identifier
     * @param warehouseId Warehouse identifier; pass 0 to load all entries
     * @param combinationId Product attribute combination identifier; pass 0 to load all entries
     * @param pageIndex Page index
     * @param pageSize Page size
     * @returns StockQuantityHistoryStockQuantityHistoryDtoPagedListDto Success
     * @throws ApiError
     */
    public static getGetStockQuantityHistory(
productId: number,
warehouseId?: number,
combinationId?: number,
pageIndex?: number,
pageSize: number = 2147483647,
): CancelablePromise<StockQuantityHistoryStockQuantityHistoryDtoPagedListDto> {
        return __request({
            method: 'GET',
            path: `/api-backend/Product/GetStockQuantityHistory/${productId}`,
            query: {
                'warehouseId': warehouseId,
                'combinationId': combinationId,
                'pageIndex': pageIndex,
                'pageSize': pageSize,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
            },
        });
    }

}