import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Check a VIN against the stolen-vehicle sources available through Vincario. */
    "vincario.check_stolen": {
      input: {
        /**
         * The 17-character vehicle identification number to look up.
         * @minLength 17
         * @maxLength 17
         */
        vin: string;
      };
      output: {
        /** The number of credits charged for the request. */
        price?: number;
        /** The currency or credit unit reported for the request price. */
        price_currency?: string;
        /** Remaining credits grouped by Vincario service. */
        balance?: Record<string, unknown>;
        /** The VIN checked by Vincario. */
        vin?: string;
        /** Stolen-vehicle checks returned by each available source. */
        stolen?: Array<{
          /** The country or Vincario database source code. */
          code?: string;
          /** The stolen-vehicle status reported by the source. */
          status?: "stolen" | "not-stolen" | "could-not-verify";
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Decode a VIN into detailed vehicle specifications with Vincario. */
    "vincario.decode_vin": {
      input: {
        /**
         * The 17-character vehicle identification number to look up.
         * @minLength 17
         * @maxLength 17
         */
        vin: string;
      };
      output: {
        /** The number of credits charged for the request. */
        price?: number;
        /** The currency or credit unit reported for the request price. */
        price_currency?: string;
        /** Remaining credits grouped by Vincario service. */
        balance?: Record<string, unknown>;
        /** Decoded vehicle attributes. */
        decode?: Array<{
          /** The vehicle attribute label. */
          label?: string;
          /** The decoded value, whose type depends on the attribute. */
          value?: unknown;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get the remaining Vincario credits for each API service. */
    "vincario.get_balance": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** Estimate a vehicle's market price and odometer statistics from its VIN. */
    "vincario.get_vehicle_market_value": {
      input: {
        /**
         * The 17-character vehicle identification number to look up.
         * @minLength 17
         * @maxLength 17
         */
        vin: string;
        /**
         * Optional odometer reading used for the price-adjusted estimate.
         * @minimum 0
         */
        odometer?: number;
        /** Unit of the odometer reading. */
        odometerUnit?: "km" | "mi";
      };
      output: {
        /** The number of credits charged for the request. */
        price?: number;
        /** The currency or credit unit reported for the request price. */
        price_currency?: string;
        /** Remaining credits grouped by Vincario service. */
        balance?: Record<string, unknown>;
        /** The VIN evaluated by Vincario. */
        vin?: string;
        /** Decoded vehicle details used for the estimate. */
        vehicle?: Record<string, unknown>;
        /** The market-data period used for the estimate. */
        period?: Record<string, unknown>;
        /** Market price statistics grouped by region. */
        market_price?: Record<string, unknown>;
        /** Market odometer statistics grouped by region. */
        market_odometer?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List the vehicle fields Vincario can decode for a VIN without charging credits. */
    "vincario.get_vin_decode_info": {
      input: {
        /**
         * The 17-character vehicle identification number to look up.
         * @minLength 17
         * @maxLength 17
         */
        vin: string;
      };
      output: {
        /** The number of credits charged for the request. */
        price?: number;
        /** The currency or credit unit reported for the request price. */
        price_currency?: string;
        /** Remaining credits grouped by Vincario service. */
        balance?: Record<string, unknown>;
        /** Decode field labels available for the VIN. */
        decode?: Array<string>;
        [key: string]: unknown;
      };
    };
  }
}
