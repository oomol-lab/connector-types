import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Identify candidate carriers for a tracking number. Results are advisory; prefer a known carrier from the shipment source and do not automatically choose the first candidate. */
    "kuaidi100.detect_carriers": {
      input: {
        /**
         * Tracking number to identify, preserving leading zeros.
         * @minLength 1
         */
        num: string;
      };
      output: {
        /** Possible carriers for this tracking number. */
        candidates: Array<{
          /** Carrier code to pass as com to query_tracking or company when subscribing. */
          comCode?: string;
          /** Carrier display name. */
          name?: string;
          /** Tracking number length. */
          lengthPre?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Query current parcel tracking with Kuaidi100. Repeated queries for the same account, carrier, tracking number and phone reuse the first successful response for 30 minutes to avoid upstream locking. */
    "kuaidi100.query_tracking": {
      input: {
        /**
         * Lowercase carrier code, for example yunda, zhongtong, shentong or shunfeng.
         * @minLength 1
         */
        com: string;
        /**
         * Tracking number, 6 to 32 characters.
         * @minLength 6
         * @maxLength 32
         */
        num: string;
        /** Origin address in province, city and district format. */
        from?: string;
        /** Destination address; required when resultv2 is 8. */
        to?: string;
        /**
         * Sender or recipient phone; required for Shunfeng, Shunfeng Express Freight and Zhongtong. For virtual numbers use the last four digits after the hyphen.
         * @minLength 1
         */
        phone?: string;
        /** Tracking detail level: empty disables enrichment, 1 adds regions, 4 adds advanced states, 8 adds delivery predictions. */
        resultv2?: "" | "1" | "4" | "8";
        /** Checkpoint sort order; defaults to descending. */
        order?: "desc" | "asc";
        /** Response language. */
        lang?: "zh" | "en";
        /** Whether to extract courier names and phone numbers from tracking events. */
        needCourierInfo?: boolean;
      };
      output: {
        /** Response message. */
        message?: string;
        /** Query status code. */
        status?: string;
        /** Logistics state code; advanced codes are available with resultv2 4 or 8. */
        state?: string;
        /** Carrier code. */
        com?: string;
        /** Tracking number. */
        nu?: string;
        /** Legacy signature flag; prefer state for logistics status. */
        ischeck?: string;
        /** Legacy detail flag. */
        condition?: string;
        /** Tracking checkpoints in the requested order. */
        data?: Array<{
          /** Original checkpoint time. */
          time?: string;
          /** Formatted checkpoint time. */
          ftime?: string;
          /** Tracking event description. */
          context?: string;
          /** Logistics state name. */
          status?: string;
          /** Advanced logistics state code. */
          statusCode?: string;
          /** Administrative area code. */
          areaCode?: string;
          /** Administrative area name. */
          areaName?: string;
          /** Administrative area longitude and latitude. */
          areaCenter?: string;
          /** Current location. */
          location?: string;
          /** Administrative area pinyin. */
          areaPinYin?: string;
          [key: string]: unknown;
        }>;
        /** Origin, current and destination administrative regions. */
        routeInfo?: Record<string, unknown>;
        /** Whether the route contains a loop. */
        isLoop?: boolean;
        /** Predicted arrival date and hour. */
        arrivalTime?: string;
        /** Estimated total transit duration. */
        totalTime?: string;
        /** Estimated remaining transit duration. */
        remainTime?: string;
        /** Arrival prediction accuracy percentage. */
        probability?: string;
        /** Predicted route nodes. */
        predictedRoute?: Array<Record<string, unknown>>;
        /** Pickup and delivery courier names and phone numbers when requested. */
        courierInfo?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
  }
}
