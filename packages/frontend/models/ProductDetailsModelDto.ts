/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddToCartModelDto } from './AddToCartModelDto';
import type { GiftCardModelDto } from './GiftCardModelDto';
import type { ManageInventoryMethod } from './ManageInventoryMethod';
import type { ManufacturerBriefInfoModelDto } from './ManufacturerBriefInfoModelDto';
import type { PictureModelDto } from './PictureModelDto';
import type { ProductBreadcrumbModelDto } from './ProductBreadcrumbModelDto';
import type { ProductDetailsAttributeModelDto } from './ProductDetailsAttributeModelDto';
import type { ProductEstimateShippingModelDto } from './ProductEstimateShippingModelDto';
import type { ProductPriceModelDto } from './ProductPriceModelDto';
import type { ProductReviewOverviewModelDto } from './ProductReviewOverviewModelDto';
import type { ProductSpecificationModelDto } from './ProductSpecificationModelDto';
import type { ProductTagModelDto } from './ProductTagModelDto';
import type { ProductType } from './ProductType';
import type { TierPriceModelDto } from './TierPriceModelDto';
import type { VendorBriefInfoModelDto } from './VendorBriefInfoModelDto';

export type ProductDetailsModelDto = {
    default_picture_zoom_enabled?: boolean;
    default_picture_model?: PictureModelDto;
    picture_models?: Array<PictureModelDto> | null;
    name?: string | null;
    short_description?: string | null;
    full_description?: string | null;
    meta_keywords?: string | null;
    meta_description?: string | null;
    meta_title?: string | null;
    se_name?: string | null;
    visible_individually?: boolean;
    product_type?: ProductType;
    show_sku?: boolean;
    sku?: string | null;
    show_manufacturer_part_number?: boolean;
    manufacturer_part_number?: string | null;
    show_gtin?: boolean;
    gtin?: string | null;
    show_vendor?: boolean;
    vendor_model?: VendorBriefInfoModelDto;
    has_sample_download?: boolean;
    gift_card?: GiftCardModelDto;
    is_ship_enabled?: boolean;
    is_free_shipping?: boolean;
    free_shipping_notification_enabled?: boolean;
    delivery_date?: string | null;
    is_rental?: boolean;
    rental_start_date?: string | null;
    rental_end_date?: string | null;
    available_end_date?: string | null;
    manage_inventory_method?: ManageInventoryMethod;
    stock_availability?: string | null;
    display_back_in_stock_subscription?: boolean;
    email_a_friend_enabled?: boolean;
    compare_products_enabled?: boolean;
    page_share_code?: string | null;
    product_price?: ProductPriceModelDto;
    add_to_cart?: AddToCartModelDto;
    breadcrumb?: ProductBreadcrumbModelDto;
    product_tags?: Array<ProductTagModelDto> | null;
    product_attributes?: Array<ProductDetailsAttributeModelDto> | null;
    product_specification_model?: ProductSpecificationModelDto;
    product_manufacturers?: Array<ManufacturerBriefInfoModelDto> | null;
    product_review_overview?: ProductReviewOverviewModelDto;
    product_estimate_shipping?: ProductEstimateShippingModelDto;
    tier_prices?: Array<TierPriceModelDto> | null;
    /**
     * a list of associated products. For example, "Grouped" products could have several child "simple" products
     */
    associated_products?: Array<ProductDetailsModelDto> | null;
    display_discontinued_message?: boolean;
    current_store_name?: string | null;
    in_stock?: boolean;
    allow_adding_only_existing_attribute_combinations?: boolean;
    id?: number;
    custom_properties?: Record<string, any> | null;
}