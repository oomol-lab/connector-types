import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create, update, merge, or sync one or more OptimoRoute orders in one request. */
    "optimoroute.create_or_update_orders": {
      input: {
        /**
         * The list of orders to write to OptimoRoute.
         * @minItems 1
         * @maxItems 500
         */
        orders: Array<{
          /**
           * The OptimoRoute order identifier assigned by the platform.
           * @minLength 1
           */
          id?: string;
          /**
           * The user-specified order identifier.
           * @minLength 1
           */
          orderNo?: string;
          /**
           * The related order number for linked pickup and delivery pairs.
           * @minLength 1
           */
          relatedOrderNo?: string;
          /**
           * The related OptimoRoute order identifier.
           * @minLength 1
           */
          relatedId?: string;
          /** The OptimoRoute bulk write mode for this order. */
          operation?: "MERGE" | "SYNC" | "CREATE" | "UPDATE";
          /** Whether CREATE should allow duplicate orderNo values in OptimoRoute. */
          acceptDuplicateOrderNo?: boolean;
          /**
           * The order date in YYYY-MM-DD format.
           * @format date
           */
          date?: string;
          /** The order duration in minutes. */
          duration?: number;
          /** The OptimoRoute order priority. */
          priority?: "L" | "M" | "H" | "C";
          /** The OptimoRoute order type. */
          type?: "D" | "P" | "T";
          /** The first load requirement. */
          load1?: number;
          /** The second load requirement. */
          load2?: number;
          /** The third load requirement. */
          load3?: number;
          /** The fourth load requirement. */
          load4?: number;
          /** An OptimoRoute driver assignment selector. */
          assignedTo?: {
            /**
             * The driver serial recognized by OptimoRoute.
             * @minLength 1
             */
            serial?: string;
            /**
             * The driver externalId recognized by OptimoRoute.
             * @minLength 1
             */
            externalId?: string;
          };
          /** An OptimoRoute location object. */
          location?: {
            /**
             * The location identifier.
             * @minLength 1
             */
            locationNo?: string;
            /**
             * The location address.
             * @minLength 1
             */
            address?: string;
            /**
             * The location name.
             * @minLength 1
             */
            locationName?: string;
            /** The location latitude. */
            latitude?: number;
            /** The location longitude. */
            longitude?: number;
            /** The location notes. */
            notes?: string;
            /** The check-in time in minutes. */
            checkInTime?: number;
            [key: string]: unknown;
          };
          /** The allowed service time windows. */
          timeWindows?: Array<{
            /**
             * The earliest time in HH:MM format.
             * @minLength 1
             */
            twFrom: string;
            /**
             * The latest time in HH:MM format.
             * @minLength 1
             */
            twTo: string;
          }>;
          /** The weekdays allowed for servicing the order. */
          allowedWeekdays?: Array<"sun" | "mon" | "tue" | "wed" | "thu" | "fri" | "sat">;
          /** An OptimoRoute date range object with inclusive from and to dates. */
          allowedDates?: {
            /**
             * The inclusive start date in YYYY-MM-DD format.
             * @format date
             */
            from?: string;
            /**
             * The inclusive end date in YYYY-MM-DD format.
             * @format date
             */
            to?: string;
          };
          /** The datetime windows when the order can be serviced. */
          allowedDateTimes?: Array<{
            /**
             * The inclusive earliest datetime in ISO format.
             * @format date-time
             */
            from?: string | null;
            /**
             * The inclusive latest datetime in ISO format.
             * @format date-time
             */
            to?: string | null;
          }>;
          /** The required driver skills. */
          skills?: Array<string>;
          /** The required vehicle features. */
          vehicleFeatures?: Array<string>;
          /** The free-form order note. */
          notes?: string;
          /** The customer email address. */
          email?: string;
          /** The customer phone number. */
          phone?: string;
          /** The legacy customField1 value. */
          customField1?: string;
          /** The legacy customField2 value. */
          customField2?: string;
          /** The legacy customField3 value. */
          customField3?: string;
          /** The legacy customField4 value. */
          customField4?: string;
          /** The legacy customField5 value. */
          customField5?: string;
          /** The OptimoRoute custom field values keyed by field code. */
          customFields?: Record<string, unknown>;
          /** The OptimoRoute customer notification preference when specified. */
          notificationPreference?: "email" | "sms" | "voice" | "dont_notify";
          [key: string]: unknown;
        }>;
      };
      output: {
        /** Whether at least one order write succeeded. */
        success: boolean;
        /** The per-order write results returned by OptimoRoute. */
        orders: Array<{
          /** Whether the order write succeeded. */
          success: boolean;
          /** The OptimoRoute order identifier when returned. */
          id: string | null;
          /** The OptimoRoute orderNo when returned. */
          orderNo: string | null;
          /** The OptimoRoute per-order error code when present. */
          code: string | null;
          /** The OptimoRoute per-order error or warning message when present. */
          message: string | null;
          /** The locationNo echoed for location-related errors when present. */
          locationNo: string | null;
          /** The raw OptimoRoute result item. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Delete one or more OptimoRoute orders by orderNo or id. */
    "optimoroute.delete_orders": {
      input: {
        /**
         * The list of orders to delete from OptimoRoute.
         * @minItems 1
         * @maxItems 500
         */
        orders: Array<{
          /**
           * The user-specified order identifier.
           * @minLength 1
           */
          orderNo?: string;
          /**
           * The OptimoRoute order identifier assigned by the platform.
           * @minLength 1
           */
          id?: string;
        }>;
        /** Whether delete_orders should remove all matches when one order selector matches multiple orders. */
        deleteMultiple?: boolean;
        /** Whether delete_orders should ignore live-plan delete restrictions when possible. */
        forceDelete?: boolean;
      };
      output: {
        /** Whether at least one order delete succeeded. */
        success: boolean;
        /** The per-order delete results returned by OptimoRoute. */
        orders: Array<{
          /** Whether the order delete succeeded. */
          success: boolean;
          /** The OptimoRoute order identifier when returned. */
          id: string | null;
          /** The OptimoRoute orderNo when returned. */
          orderNo: string | null;
          /** The OptimoRoute per-order error code when present. */
          code: string | null;
          /** The OptimoRoute per-order error or warning message when present. */
          message: string | null;
          /** The raw OptimoRoute result item. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Retrieve one or more OptimoRoute orders by orderNo or id. */
    "optimoroute.get_orders": {
      input: {
        /**
         * The list of orders to retrieve from OptimoRoute.
         * @minItems 1
         * @maxItems 500
         */
        orders: Array<{
          /**
           * The user-specified order identifier.
           * @minLength 1
           */
          orderNo?: string;
          /**
           * The OptimoRoute order identifier assigned by the platform.
           * @minLength 1
           */
          id?: string;
        }>;
      };
      output: {
        /** Whether at least one order retrieval succeeded. */
        success: boolean;
        /** The per-order retrieval results returned by OptimoRoute. */
        orders: Array<{
          /** Whether the order retrieval succeeded. */
          success: boolean;
          /** The OptimoRoute order identifier when returned. */
          id: string | null;
          /** The OptimoRoute orderNo when returned. */
          orderNo: string | null;
          /** The OptimoRoute per-order error code when present. */
          code: string | null;
          /** The OptimoRoute per-order error or warning message when present. */
          message: string | null;
          /** The raw OptimoRoute order object when retrieval succeeded. */
          data: Record<string, unknown> | null;
          /** The raw OptimoRoute result item. */
          raw: Record<string, unknown>;
        }>;
      };
    };
  }
}
