import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get recent historical observation records for an Ambient Weather device. */
    "ambient_weather.get_device_history": {
      input: {
        /**
         * The Ambient Weather device MAC address.
         * @minLength 1
         */
        macAddress?: string;
        /**
         * The maximum number of historical records to return.
         * @minimum 1
         * @maximum 288
         */
        limit?: number;
        /** The history end cursor as an ISO 8601 timestamp or Unix millisecond timestamp. */
        endDate?: string | number;
      };
      output: {
        /** The Ambient Weather device that was resolved. */
        device: {
          /** The Ambient Weather device MAC address. */
          macAddress: string;
          /** Ambient Weather device information. */
          info: {
            /** The Ambient Weather device name. */
            name: string;
            [key: string]: unknown;
          };
          /** The latest Ambient Weather observation record. */
          lastData: {
            /** The observation timestamp in Unix milliseconds. */
            dateutc: number;
            /** The observation local date string. */
            date: string;
            [key: string]: unknown;
          };
        };
        /** Ambient Weather historical observation records. */
        records: Array<{
          /** The observation timestamp in Unix milliseconds. */
          dateutc: number;
          /** The observation local date string. */
          date: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get the latest observation record for an Ambient Weather device. */
    "ambient_weather.get_latest_device_data": {
      input: {
        /**
         * The Ambient Weather device MAC address.
         * @minLength 1
         */
        macAddress?: string;
      };
      output: {
        /** The Ambient Weather device that was resolved. */
        device: {
          /** The Ambient Weather device MAC address. */
          macAddress: string;
          /** Ambient Weather device information. */
          info: {
            /** The Ambient Weather device name. */
            name: string;
            [key: string]: unknown;
          };
          /** The latest Ambient Weather observation record. */
          lastData: {
            /** The observation timestamp in Unix milliseconds. */
            dateutc: number;
            /** The observation local date string. */
            date: string;
            [key: string]: unknown;
          };
        };
        /** The latest Ambient Weather observation record. */
        record: {
          /** The observation timestamp in Unix milliseconds. */
          dateutc: number;
          /** The observation local date string. */
          date: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Ambient Weather devices linked to the connected account. */
    "ambient_weather.list_devices": {
      input: Record<string, never>;
      output: {
        /** Ambient Weather devices linked to the connected account. */
        devices: Array<{
          /** The Ambient Weather device MAC address. */
          macAddress: string;
          /** Ambient Weather device information. */
          info: {
            /** The Ambient Weather device name. */
            name: string;
            [key: string]: unknown;
          };
          /** The latest Ambient Weather observation record. */
          lastData: {
            /** The observation timestamp in Unix milliseconds. */
            dateutc: number;
            /** The observation local date string. */
            date: string;
            [key: string]: unknown;
          };
        }>;
      };
    };
  }
}
