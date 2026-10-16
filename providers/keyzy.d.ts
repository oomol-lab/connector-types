import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Delete a license and all its activations. The supplied type must match the license type. */
    "keyzy.delete_license": {
      input: {
        /**
         * The license serial number.
         * @minLength 1
         */
        serial: string;
        /** The actual license type, required to confirm deletion. */
        type: "perpetual" | "subscription" | "trial";
      };
      output: {
        /** The operation result message. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Get license details by serial number. */
    "keyzy.get_license": {
      input: {
        /**
         * The license serial number.
         * @minLength 1
         */
        serial: string;
      };
      output: {
        /** License details returned by KEYZY. */
        data?: {
          /** The license serial number. */
          serial?: string;
          /** The licensee name. */
          name?: string;
          /** The licensee email address. */
          email?: string;
          /** The license type. */
          type?: string;
          /** The associated SKU number. */
          sku_number?: string;
          /** The associated SKU name. */
          sku_name?: string;
          /** The license start time as a Unix timestamp. */
          start_at?: number | null;
          /** The license end time as a Unix timestamp. */
          end_at?: number | null;
          /** Whether the license has been registered. */
          registered?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Register a customer to a license. SKU settings control whether KEYZY emails the license. */
    "keyzy.register_license": {
      input: (unknown);
      output: {
        /** Registration result. */
        message?: {
          /** The registered license serial number. */
          serial?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Change the SKU associated with a license. */
    "keyzy.update_license_sku": {
      input: {
        /**
         * The license serial number.
         * @minLength 1
         */
        serial: string;
        /**
         * The current SKU number.
         * @minLength 1
         */
        current_sku_number: string;
        /**
         * The new SKU number. Its type replaces the license type; trial or subscription may also need update_license_time.
         * @minLength 1
         */
        new_sku_number: string;
      };
      output: {
        /** The operation result message. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Update the end time and optional start time of a subscription or trial license. */
    "keyzy.update_license_time": {
      input: {
        /**
         * The license serial number.
         * @minLength 1
         */
        serial: string;
        /** The license start time as a Unix timestamp. */
        start_at?: number;
        /** The license end time as a Unix timestamp. */
        end_at: number;
      };
      output: {
        /** The operation result message. */
        message?: string;
        [key: string]: unknown;
      };
    };
  }
}
