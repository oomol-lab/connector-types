import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Send one documented Govee capability value to a device, such as power, brightness, color, mode, or temperature. */
    "govee.control_capability": {
      input: {
        /**
         * The Govee product model, such as `H605C`.
         * @minLength 1
         */
        sku: string;
        /**
         * The Govee device id returned by list_devices.
         * @minLength 1
         */
        device: string;
        /**
         * The Govee capability type, such as `devices.capabilities.on_off`.
         * @minLength 1
         */
        type: string;
        /**
         * The Govee capability instance, such as `powerSwitch`.
         * @minLength 1
         */
        instance: string;
        /** The value to send for this capability, as documented in list_devices. */
        value: unknown;
        /**
         * A caller-supplied request id. When omitted, the provider generates a UUID v7.
         * @format uuid
         */
        requestId?: string;
      };
      output: {
        /** The normalized Govee API response envelope. */
        result: {
          /** The request id echoed by Govee, when returned. */
          requestId: string | null;
          /** The numeric Govee response code. */
          code: number;
          /** The Govee response message. */
          message: string;
        };
        /** The raw Govee response envelope. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the current state for one Govee device by sku and device id. */
    "govee.get_device_state": {
      input: {
        /**
         * The Govee product model, such as `H605C`.
         * @minLength 1
         */
        sku: string;
        /**
         * The Govee device id returned by list_devices.
         * @minLength 1
         */
        device: string;
      };
      output: {
        /** The Govee device state payload. */
        state: {
          /** The Govee product model. */
          sku?: string;
          /** The Govee device id. */
          device?: string;
          /** The capability states returned by Govee. */
          capabilities?: Array<{
            /** The Govee capability type. */
            type?: string;
            /** The Govee capability instance. */
            instance?: string;
            /** The current state for the capability. */
            state?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** The raw Govee response envelope. */
        raw: Record<string, unknown>;
      };
    };
    /** List Govee devices visible to the API key, including each device's supported capabilities. */
    "govee.list_devices": {
      input: Record<string, never>;
      output: {
        /** The discovered Govee devices. */
        devices: Array<{
          /** The Govee product model. */
          sku?: string;
          /** The Govee device id. */
          device?: string;
          /** The user-visible Govee device name. */
          deviceName?: string;
          /** The Govee device type. */
          type?: string;
          /** The capabilities supported by the device. */
          capabilities?: Array<{
            /** The Govee capability type. */
            type?: string;
            /** The Govee capability instance. */
            instance?: string;
            /** The Govee capability parameters that describe valid values for this capability. */
            parameters?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** The raw Govee response envelope. */
        raw: Record<string, unknown>;
      };
    };
    /** List dynamic DIY scenes available for one Govee device. */
    "govee.list_diy_scenes": {
      input: {
        /**
         * The Govee product model, such as `H605C`.
         * @minLength 1
         */
        sku: string;
        /**
         * The Govee device id returned by list_devices.
         * @minLength 1
         */
        device: string;
      };
      output: {
        /** The Govee dynamic scene payload. */
        scenes: {
          /** The Govee product model. */
          sku?: string;
          /** The Govee device id. */
          device?: string;
          /** The dynamic scene capabilities returned by Govee. */
          capabilities?: Array<{
            /** The Govee capability type. */
            type?: string;
            /** The Govee capability instance. */
            instance?: string;
            /** The scene capability parameters. */
            parameters?: {
              /** The parameter data type returned by Govee. */
              dataType?: string;
              /** The available dynamic scene options. */
              options?: Array<{
                /** The scene name. */
                name?: string;
                /** The value Govee expects when activating this scene capability. */
                value?: unknown;
                [key: string]: unknown;
              }>;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** The raw Govee response envelope. */
        raw: Record<string, unknown>;
      };
    };
    /** List dynamic light scenes available for one Govee device. */
    "govee.list_light_scenes": {
      input: {
        /**
         * The Govee product model, such as `H605C`.
         * @minLength 1
         */
        sku: string;
        /**
         * The Govee device id returned by list_devices.
         * @minLength 1
         */
        device: string;
      };
      output: {
        /** The Govee dynamic scene payload. */
        scenes: {
          /** The Govee product model. */
          sku?: string;
          /** The Govee device id. */
          device?: string;
          /** The dynamic scene capabilities returned by Govee. */
          capabilities?: Array<{
            /** The Govee capability type. */
            type?: string;
            /** The Govee capability instance. */
            instance?: string;
            /** The scene capability parameters. */
            parameters?: {
              /** The parameter data type returned by Govee. */
              dataType?: string;
              /** The available dynamic scene options. */
              options?: Array<{
                /** The scene name. */
                name?: string;
                /** The value Govee expects when activating this scene capability. */
                value?: unknown;
                [key: string]: unknown;
              }>;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** The raw Govee response envelope. */
        raw: Record<string, unknown>;
      };
    };
  }
}
