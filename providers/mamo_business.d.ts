import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get Mamo account balances by wallet, currency and wallet type. */
    "mamo_business.get_balances": {
      input: Record<string, never>;
      output: {
        /** Account wallets available to the business. */
        wallets?: Array<{
          /** Wallet identifier. */
          id?: string;
          /** Wallet currency code. */
          currency?: string;
          /** Wallet balance in its currency. */
          balance?: number;
          /** Wallet type, such as main_wallet or debit. */
          type?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get the business profile and account status associated with the connected Mamo production API key. */
    "mamo_business.get_business": {
      input: Record<string, never>;
      output: {
        /** Business display name. */
        business_name?: string;
        /** Business slug used in payment URLs. */
        business_tag?: string;
        /** Business website. */
        website?: string;
        /** Account status, such as Verified or Blocked; null when unverified. */
        account_status?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get a Mamo payment's status, amounts, refunds and settlement details. */
    "mamo_business.get_payment": {
      input: {
        /**
         * Resource identifier returned by Mamo. Dot path segments are not accepted.
         * @minLength 1
         */
        payment_id: string;
      };
      output: {
        /** Payment identifier. */
        id?: string;
        /** Payment status. Refunded payments can remain captured; inspect refund_status. */
        status?: string;
        /** Payment amount. */
        amount?: number;
        /** Payment currency code. */
        amount_currency?: string;
        /** Refund status, separate from payment status. */
        refund_status?: string;
        /** Settlement amount as a formatted string, possibly containing thousands separators. */
        settlement_amount?: string;
        [key: string]: unknown;
      };
    };
    /** Get a Mamo payment link's settings, status and checkout URL. */
    "mamo_business.get_payment_link": {
      input: {
        /**
         * Resource identifier returned by Mamo. Dot path segments are not accepted.
         * @minLength 1
         */
        link_id: string;
      };
      output: {
        /** Payment link identifier. */
        id?: string;
        /** Payment link title. */
        title?: string;
        /** Link state, such as active, inactive or expired. */
        status?: string;
        /** Hosted checkout URL. */
        payment_url?: string;
        /** Payment amount. */
        amount?: number;
        /** Payment currency code. */
        amount_currency?: string;
        [key: string]: unknown;
      };
    };
    /** List Mamo payment links newest first, including inactive deleted links. Follow pagination_meta.next_page to fetch more. */
    "mamo_business.list_payment_links": {
      input: {
        /**
         * Page number, starting at 1. Zero is treated as page 1.
         * @minimum 0
         */
        page?: number;
        /**
         * Records per page, from 1 to 1000. Defaults to 10.
         * @minimum 1
         * @maximum 1000
         */
        per_page?: number;
      };
      output: {
        /** Payment links on this page. */
        data?: Array<{
          /** Payment link identifier. */
          id?: string;
          /** Payment link title. */
          title?: string;
          /** Link state, such as active, inactive or expired. */
          status?: string;
          /** Hosted checkout URL. */
          payment_url?: string;
          /** Payment amount. */
          amount?: number;
          /** Payment currency code. */
          amount_currency?: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata. Continue with next_page until it is null. */
        pagination_meta?: {
          /** Current page number. */
          page?: number;
          /** Records per page. */
          per_page?: number;
          /** Total number of pages. */
          total_pages?: number;
          /** Next page number, or null on the last page. */
          next_page?: number | null;
          /** Previous page number, or null on the first page. */
          prev_page?: number | null;
          /** Total record count. */
          total_count?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List Mamo payments with date, link and sort filters. Dates cover inclusive whole days in Gulf Standard Time. Follow pagination_meta.next_page to fetch more. */
    "mamo_business.list_payments": {
      input: {
        /**
         * Page number, starting at 1. Zero is treated as page 1.
         * @minimum 0
         */
        page?: number;
        /**
         * Records per page, from 1 to 1000. Defaults to 10.
         * @minimum 1
         * @maximum 1000
         */
        per_page?: number;
        /**
         * Include payments created on or after this date, YYYY-MM-DD.
         * @format date
         */
        start_date?: string;
        /**
         * Include payments created on or before this date, YYYY-MM-DD.
         * @format date
         */
        end_date?: string;
        /**
         * Only include payments made through this payment link.
         * @minLength 1
         */
        link_identifier?: string;
        /** Payment sort field. */
        "order_by[field]"?: "created_at";
        /** Sort direction. Defaults to desc. */
        "order_by[direction]"?: "asc" | "desc";
      };
      output: {
        /** Payments on this page. */
        data?: Array<{
          /** Payment identifier. */
          id?: string;
          /** Payment status. Refunded payments can remain captured; inspect refund_status. */
          status?: string;
          /** Payment amount. */
          amount?: number;
          /** Payment currency code. */
          amount_currency?: string;
          /** Refund status, separate from payment status. */
          refund_status?: string;
          /** Settlement amount as a formatted string, possibly containing thousands separators. */
          settlement_amount?: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata. Continue with next_page until it is null. */
        pagination_meta?: {
          /** Current page number. */
          page?: number;
          /** Records per page. */
          per_page?: number;
          /** Total number of pages. */
          total_pages?: number;
          /** Next page number, or null on the last page. */
          next_page?: number | null;
          /** Previous page number, or null on the first page. */
          prev_page?: number | null;
          /** Total record count. */
          total_count?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}
