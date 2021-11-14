/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ForumPostModelDto = {
    forum_topic_id?: number;
    forum_topic_se_name?: string | null;
    formatted_text?: string | null;
    is_current_customer_allowed_to_edit_post?: boolean;
    is_current_customer_allowed_to_delete_post?: boolean;
    customer_id?: number;
    allow_viewing_profiles?: boolean;
    customer_avatar_url?: string | null;
    customer_name?: string | null;
    is_customer_forum_moderator?: boolean;
    post_created_on_str?: string | null;
    show_customers_post_count?: boolean;
    forum_post_count?: number;
    show_customers_join_date?: boolean;
    customer_join_date?: string;
    show_customers_location?: boolean;
    customer_location?: string | null;
    allow_private_messages?: boolean;
    signatures_enabled?: boolean;
    formatted_signature?: string | null;
    current_topic_page?: number;
    allow_post_voting?: boolean;
    vote_count?: number;
    vote_is_up?: boolean | null;
    id?: number;
    custom_properties?: Record<string, any> | null;
}