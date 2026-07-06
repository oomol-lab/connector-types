import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get Fiber AI organization credit balance and per-operation pricing metadata. */
    "fiber_ai.get_org_credits": {
      input: Record<string, never>;
      output: {
        /** Raw object returned by the Fiber AI API. */
        output: Record<string, unknown>;
        /** Fiber AI charge reconciliation object returned by the API. */
        chargeInfo: Record<string, unknown>;
        /** Warnings returned by Fiber AI, when present. */
        warnings: Array<Record<string, unknown>> | null;
        /** Advice strings returned by Fiber AI. */
        advice: Array<string>;
        /** Raw object returned by the Fiber AI API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Fiber AI rate limits for the current organization. */
    "fiber_ai.get_rate_limits": {
      input: Record<string, never>;
      output: {
        /** Raw object returned by the Fiber AI API. */
        output: Record<string, unknown>;
        /** Fiber AI charge reconciliation object returned by the API. */
        chargeInfo: Record<string, unknown>;
        /** Warnings returned by Fiber AI, when present. */
        warnings: Array<Record<string, unknown>> | null;
        /** Advice strings returned by Fiber AI. */
        advice: Array<string>;
        /** Raw object returned by the Fiber AI API. */
        raw: Record<string, unknown>;
      };
    };
    /** List a free Fiber AI enum or reference dataset such as regions or industries. */
    "fiber_ai.list_enum_values": {
      input: {
        /** The Fiber AI enum dataset to retrieve. */
        enumType: "accelerators" | "flight_regions" | "industries" | "languages" | "metro_areas" | "naics_codes" | "regions" | "skills" | "subdivisions" | "tags" | "technologies" | "time_zones";
        /**
         * ISO 3166-1 alpha-2 or alpha-3 country code required only when enumType is subdivisions.
         * @minLength 2
         * @maxLength 3
         */
        countryCode?: string;
      };
      output: {
        /** Raw object returned by the Fiber AI API. */
        output: Record<string, unknown>;
        /** Fiber AI charge reconciliation object returned by the API. */
        chargeInfo: Record<string, unknown>;
        /** Warnings returned by Fiber AI, when present. */
        warnings: Array<Record<string, unknown>> | null;
        /** Advice strings returned by Fiber AI. */
        advice: Array<string>;
        /** Raw object returned by the Fiber AI API. */
        raw: Record<string, unknown>;
      };
    };
  }
}
