import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Change the carrier of up to 40 registered tracking numbers; each number can be changed up to 5 times. */
    "17track.change_carrier": {
      input: {
        /**
         * Carrier changes to apply.
         * @minItems 1
         * @maxItems 40
         */
        carrier_changes: Array<Record<string, unknown>>;
      };
      output: {
        /** Items accepted and processed by 17TRACK. */
        accepted: Array<Record<string, unknown>>;
        /** Items rejected by 17TRACK with error details. */
        rejected: Array<Record<string, unknown>>;
      };
    };
    /** Permanently delete up to 40 registered tracking numbers; deleted shipments cannot be restored. */
    "17track.delete_trackings": {
      input: {
        /**
         * Tracking numbers to delete.
         * @minItems 1
         * @maxItems 40
         */
        trackings: Array<{
          /**
           * A 17TRACK-compatible tracking number.
           * @minLength 5
           * @maxLength 50
           * @pattern ^[A-Za-z0-9-]+$
           */
          number: string;
          /**
           * The numeric 17TRACK carrier code.
           * @exclusiveMinimum 0
           */
          carrier?: number;
        }>;
      };
      output: {
        /** Items accepted and processed by 17TRACK. */
        accepted: Array<Record<string, unknown>>;
        /** Items rejected by 17TRACK with error details. */
        rejected: Array<Record<string, unknown>>;
      };
    };
    /** Get the current tracking and email quota counters for the 17TRACK account. */
    "17track.get_quota": {
      input: Record<string, never>;
      output: {
        /**
         * The total tracking quota.
         * @minimum 0
         */
        total: number;
        /**
         * The tracking quota already used.
         * @minimum 0
         */
        used: number;
        /**
         * The tracking quota still available.
         * @minimum 0
         */
        remaining: number;
        /**
         * The number of tracking registrations used today.
         * @minimum 0
         */
        todayUsed: number;
        /**
         * The maximum number of registrations allowed per day, where 0 means unlimited.
         * @minimum 0
         */
        dailyLimit: number;
        /**
         * The free email notification quota.
         * @minimum 0
         */
        freeEmailQuota: number;
        /**
         * The free email notification quota already used.
         * @minimum 0
         */
        freeEmailQuotaUsed: number;
      };
    };
    /** Query a single tracking number against carriers in real time; Standard mode (cacheLevel 0) returns carrier data from the last 3 hours and costs 1 quota, Instant mode (cacheLevel 1) triggers an immediate carrier fetch and costs 10 quota. */
    "17track.get_realtime_tracking_details": {
      input: {
        /** A tracking number and optional additional tracking parameters queried in real time. */
        tracking: {
          /**
           * A 17TRACK-compatible tracking number.
           * @minLength 5
           * @maxLength 50
           * @pattern ^[A-Za-z0-9-]+$
           */
          number: string;
          /**
           * The numeric 17TRACK carrier code.
           * @exclusiveMinimum 0
           */
          carrier?: number;
          /**
           * The last-mile carrier code for a UPU shipment.
           * @exclusiveMinimum 0
           */
          final_carrier?: number;
          /**
           * The origin ISO 3166-1 alpha-2 country code.
           * @pattern ^[A-Za-z]{2}$
           */
          origin_country?: string;
          /**
           * The shipping date, normally in YYYY/MM/DD format.
           * @minLength 1
           */
          ship_date?: string;
          /**
           * The destination postal code.
           * @minLength 1
           */
          destination_postal_code?: string;
          /**
           * The destination ISO 3166-1 alpha-2 country code.
           * @pattern ^[A-Za-z]{2}$
           */
          destination_country?: string;
          /**
           * The destination city.
           * @minLength 1
           */
          destination_city?: string;
          /**
           * The shipper name.
           * @minLength 1
           */
          shipper?: string;
          /**
           * The consignee name.
           * @minLength 1
           */
          consignee?: string;
          /**
           * The last digits of the shipper or recipient phone number.
           * @minLength 1
           */
          phone_number_last_4?: string;
          /**
           * The shipper or recipient phone number.
           * @minLength 1
           */
          phone_number?: string;
          /**
           * The Brazilian CPF or CNPJ identifier.
           * @minLength 1
           */
          cpf_or_cnpj?: string;
          /** Carrier-specific information required to retrieve tracking events. */
          special_tracking_info?: {
            /**
             * The carrier query channel type.
             * @minLength 1
             */
            number_type?: string;
            /**
             * The value required by the carrier query channel.
             * @minLength 1
             */
            parameter?: string;
          };
          /** The real-time query mode: 0 returns carrier data cached within the last 3 hours (Standard, costs 1 quota), 1 triggers an immediate carrier fetch (Instant, costs 10 quota). */
          cacheLevel?: 0 | 1;
        };
      };
      output: {
        /** Items accepted and processed by 17TRACK. */
        accepted: Array<Record<string, unknown>>;
        /** Items rejected by 17TRACK with error details. */
        rejected: Array<Record<string, unknown>>;
      };
    };
    /** Get current tracking details for up to 40 registered tracking numbers. */
    "17track.get_tracking_details": {
      input: {
        /**
         * Tracking numbers to retrieve.
         * @minItems 1
         * @maxItems 40
         */
        trackings: Array<{
          /**
           * A 17TRACK-compatible tracking number.
           * @minLength 5
           * @maxLength 50
           * @pattern ^[A-Za-z0-9-]+$
           */
          number: string;
          /**
           * The numeric 17TRACK carrier code.
           * @exclusiveMinimum 0
           */
          carrier?: number;
        }>;
      };
      output: {
        /** Items accepted and processed by 17TRACK. */
        accepted: Array<Record<string, unknown>>;
        /** Items rejected by 17TRACK with error details. */
        rejected: Array<Record<string, unknown>>;
      };
    };
    /** List registered 17TRACK shipments with status, time, and pagination filters. */
    "17track.list_trackings": {
      input: {
        /**
         * Tracking numbers to filter by.
         * @minItems 1
         * @maxItems 200
         */
        tracking_numbers?: Array<string>;
        /**
         * The numeric 17TRACK carrier code.
         * @exclusiveMinimum 0
         */
        carrier?: number;
        /** The source used to register the tracking number. */
        data_origin?: "Api" | "Manual" | "Import";
        /** The current main package status. */
        package_status?: "NotFound" | "InfoReceived" | "InTransit" | "Expired" | "AvailableForPickup" | "OutForDelivery" | "DeliveryFailure" | "Delivered" | "Exception";
        /**
         * The start of the registration time range.
         * @minLength 1
         */
        register_time_from?: string;
        /**
         * The end of the registration time range.
         * @minLength 1
         */
        register_time_to?: string;
        /** Whether 17TRACK is still tracking the shipment. */
        tracking_status?: "Tracking" | "Stopped";
        /** Whether the latest carrier synchronization succeeded. */
        sync_status?: boolean;
        /**
         * The start of the latest tracking time range.
         * @minLength 1
         */
        track_time_from?: string;
        /**
         * The end of the latest tracking time range.
         * @minLength 1
         */
        track_time_to?: string;
        /**
         * The start of the webhook push time range.
         * @minLength 1
         */
        push_time_from?: string;
        /**
         * The end of the webhook push time range.
         * @minLength 1
         */
        push_time_to?: string;
        /** The webhook push result. */
        push_status?: "NotPushed" | "Success" | "Failure";
        /** The webhook HTTP response status code. */
        push_status_code?: number;
        /**
         * The start of the stopped tracking time range.
         * @minLength 1
         */
        stop_track_time_from?: string;
        /**
         * The end of the stopped tracking time range.
         * @minLength 1
         */
        stop_track_time_to?: string;
        /**
         * The result page number, starting from 0.
         * @minimum 0
         */
        page_no?: number;
        /** The order used for tracking records. */
        order_by?: "RegisterTimeAsc" | "RegisterTimeDesc" | "PushTimeAsc" | "PushTimeDesc" | "TrackTimeAsc" | "TrackTimeDesc";
      };
      output: {
        /** Tracking records returned by 17TRACK. */
        trackings: Array<Record<string, unknown>>;
        /** Pagination information returned by 17TRACK. */
        pagination: {
          /**
           * The total number of matching tracking records.
           * @minimum 0
           */
          totalItems: number;
          /**
           * The total number of result pages.
           * @minimum 0
           */
          totalPages: number;
          /**
           * The current page number.
           * @minimum 0
           */
          pageNumber: number;
          /**
           * The number of records in a page.
           * @minimum 0
           */
          pageSize: number;
        };
      };
    };
    /** Queue a webhook push of the latest tracking results for up to 40 registered tracking numbers. */
    "17track.push_trackings": {
      input: {
        /**
         * Tracking numbers to push.
         * @minItems 1
         * @maxItems 40
         */
        trackings: Array<{
          /**
           * A 17TRACK-compatible tracking number.
           * @minLength 5
           * @maxLength 50
           * @pattern ^[A-Za-z0-9-]+$
           */
          number: string;
          /**
           * The numeric 17TRACK carrier code.
           * @exclusiveMinimum 0
           */
          carrier?: number;
        }>;
      };
      output: {
        /** Items accepted and processed by 17TRACK. */
        accepted: Array<Record<string, unknown>>;
        /** Items rejected by 17TRACK with error details. */
        rejected: Array<Record<string, unknown>>;
      };
    };
    /** Register up to 40 tracking numbers for automatic tracking by 17TRACK. */
    "17track.register_trackings": {
      input: {
        /**
         * Tracking numbers to register.
         * @minItems 1
         * @maxItems 40
         */
        trackings: Array<{
          /**
           * A 17TRACK-compatible tracking number.
           * @minLength 5
           * @maxLength 50
           * @pattern ^[A-Za-z0-9-]+$
           */
          number: string;
          /**
           * The language code used to translate tracking events.
           * @minLength 1
           */
          lang?: string;
          /** The fallback behavior when the carrier does not support the requested language. */
          translation_mode?: "Denied" | "UseDefaultLang" | "UseThirdPartyServices";
          /**
           * The recipient email used for optional 17TRACK notifications.
           * @maxLength 250
           * @format email
           */
          email?: string;
          /**
           * The merchant order number.
           * @minLength 3
           * @maxLength 50
           * @pattern ^[A-Za-z0-9-]+$
           */
          order_no?: string;
          /**
           * The order time accepted by 17TRACK.
           * @minLength 1
           */
          order_time?: string;
          /**
           * The numeric 17TRACK carrier code.
           * @exclusiveMinimum 0
           */
          carrier?: number;
          /**
           * The last-mile carrier code for a UPU shipment.
           * @exclusiveMinimum 0
           */
          final_carrier?: number;
          /** Whether 17TRACK should auto-detect the carrier. */
          auto_detection?: boolean;
          /**
           * The origin ISO 3166-1 alpha-2 country code.
           * @pattern ^[A-Za-z]{2}$
           */
          origin_country?: string;
          /**
           * The shipping date, normally in YYYY/MM/DD format.
           * @minLength 1
           */
          ship_date?: string;
          /**
           * The destination postal code.
           * @minLength 1
           */
          destination_postal_code?: string;
          /**
           * The destination ISO 3166-1 alpha-2 country code.
           * @pattern ^[A-Za-z]{2}$
           */
          destination_country?: string;
          /**
           * The destination city.
           * @minLength 1
           */
          destination_city?: string;
          /**
           * The shipper name.
           * @minLength 1
           */
          shipper?: string;
          /**
           * The consignee name.
           * @minLength 1
           */
          consignee?: string;
          /**
           * The last digits of the shipper or recipient phone number.
           * @minLength 1
           */
          phone_number_last_4?: string;
          /**
           * The shipper or recipient phone number.
           * @minLength 1
           */
          phone_number?: string;
          /**
           * The Brazilian CPF or CNPJ identifier.
           * @minLength 1
           */
          cpf_or_cnpj?: string;
          /** Carrier-specific information required to retrieve tracking events. */
          special_tracking_info?: {
            /**
             * The carrier query channel type.
             * @minLength 1
             */
            number_type?: string;
            /**
             * The value required by the carrier query channel.
             * @minLength 1
             */
            parameter?: string;
          };
          /**
           * A custom tag attached to the tracking number.
           * @maxLength 100
           */
          tag?: string;
          /**
           * A note describing the package.
           * @maxLength 1000
           */
          remark?: string;
        }>;
      };
      output: {
        /** Items accepted and processed by 17TRACK. */
        accepted: Array<Record<string, unknown>>;
        /** Items rejected by 17TRACK with error details. */
        rejected: Array<Record<string, unknown>>;
      };
    };
    /** Restart automatic tracking for up to 40 stopped tracking numbers; each number can only be restarted once. */
    "17track.restart_tracking": {
      input: {
        /**
         * Tracking numbers to restart.
         * @minItems 1
         * @maxItems 40
         */
        trackings: Array<{
          /**
           * A 17TRACK-compatible tracking number.
           * @minLength 5
           * @maxLength 50
           * @pattern ^[A-Za-z0-9-]+$
           */
          number: string;
          /**
           * The numeric 17TRACK carrier code.
           * @exclusiveMinimum 0
           */
          carrier?: number;
        }>;
      };
      output: {
        /** Items accepted and processed by 17TRACK. */
        accepted: Array<Record<string, unknown>>;
        /** Items rejected by 17TRACK with error details. */
        rejected: Array<Record<string, unknown>>;
      };
    };
    /** Stop automatic tracking for up to 40 registered tracking numbers; mutually exclusive with restart_tracking. */
    "17track.stop_tracking": {
      input: {
        /**
         * Tracking numbers to stop.
         * @minItems 1
         * @maxItems 40
         */
        trackings: Array<{
          /**
           * A 17TRACK-compatible tracking number.
           * @minLength 5
           * @maxLength 50
           * @pattern ^[A-Za-z0-9-]+$
           */
          number: string;
          /**
           * The numeric 17TRACK carrier code.
           * @exclusiveMinimum 0
           */
          carrier?: number;
        }>;
      };
      output: {
        /** Items accepted and processed by 17TRACK. */
        accepted: Array<Record<string, unknown>>;
        /** Items rejected by 17TRACK with error details. */
        rejected: Array<Record<string, unknown>>;
      };
    };
    /** Update the metadata (tag, addresses, language, remark, order info) of up to 40 registered tracking numbers. */
    "17track.update_tracking_info": {
      input: {
        /**
         * Metadata updates to apply.
         * @minItems 1
         * @maxItems 40
         */
        trackings: Array<{
          /**
           * A 17TRACK-compatible tracking number.
           * @minLength 5
           * @maxLength 50
           * @pattern ^[A-Za-z0-9-]+$
           */
          number: string;
          /**
           * The numeric 17TRACK carrier code.
           * @exclusiveMinimum 0
           */
          carrier?: number;
          /** The tracking metadata fields to update. */
          items: {
            /**
             * A custom tag attached to the tracking number.
             * @maxLength 100
             */
            tag?: string;
            /**
             * The origin ISO 3166-1 alpha-2 country code.
             * @pattern ^[A-Za-z]{2}$
             */
            origin_country?: string;
            /**
             * The shipping date, normally in YYYY/MM/DD format.
             * @minLength 1
             */
            ship_date?: string;
            /**
             * The destination postal code.
             * @minLength 1
             */
            destination_postal_code?: string;
            /**
             * The destination ISO 3166-1 alpha-2 country code.
             * @pattern ^[A-Za-z]{2}$
             */
            destination_country?: string;
            /**
             * The destination city.
             * @minLength 1
             */
            destination_city?: string;
            /**
             * The shipper name.
             * @minLength 1
             */
            shipper?: string;
            /**
             * The consignee name.
             * @minLength 1
             */
            consignee?: string;
            /**
             * The last digits of the shipper or recipient phone number.
             * @minLength 1
             */
            phone_number_last_4?: string;
            /**
             * The shipper or recipient phone number.
             * @minLength 1
             */
            phone_number?: string;
            /**
             * The Brazilian CPF or CNPJ identifier.
             * @minLength 1
             */
            cpf_or_cnpj?: string;
            /** Carrier-specific information required to retrieve tracking events. */
            special_tracking_info?: {
              /**
               * The carrier query channel type.
               * @minLength 1
               */
              number_type?: string;
              /**
               * The value required by the carrier query channel.
               * @minLength 1
               */
              parameter?: string;
            };
            /**
             * The language code used to translate tracking events.
             * @minLength 1
             */
            lang?: string;
            /** The fallback behavior when the carrier does not support the requested language. */
            translation_mode?: "Denied" | "UseDefaultLang" | "UseThirdPartyServices";
            /**
             * A note describing the package.
             * @maxLength 1000
             */
            remark?: string;
            /**
             * The merchant order number.
             * @minLength 3
             * @maxLength 50
             * @pattern ^[A-Za-z0-9-]+$
             */
            order_no?: string;
            /**
             * The order time accepted by 17TRACK.
             * @minLength 1
             */
            order_time?: string;
          };
        }>;
      };
      output: {
        /** Items accepted and processed by 17TRACK. */
        accepted: Array<Record<string, unknown>>;
        /** Items rejected by 17TRACK with error details. */
        rejected: Array<Record<string, unknown>>;
      };
    };
  }
}
