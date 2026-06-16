import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get current and previous AC states for one Sensibo device. */
    "sensibo.get_ac_states": {
      input: {
        /**
         * The unique Sensibo device identifier.
         * @minLength 1
         */
        device_id: string;
        /**
         * The number of state entries to retrieve, up to 20.
         * @minimum 1
         * @maximum 20
         */
        limit?: number;
      };
      output: {
        /** The AC state history entries returned by Sensibo. */
        states: Array<{
          /** The state transition status label. */
          status?: string;
          /** The reason for the state transition when provided. */
          reason?: string;
          /** The AC state currently reported by Sensibo. */
          acState: {
            /** Whether the AC is currently on. */
            on: boolean;
            /** The operating mode, such as cool, heat, fan, auto, or dry. */
            mode: string;
            /** The current fan level. */
            fanLevel: string;
            /** The configured target temperature. */
            targetTemperature: number;
            /** The temperature unit, such as C or F. */
            temperatureUnit?: string;
            /** The swing mode when the remote supports it. */
            swing?: string;
          };
          /** The AC state properties changed in this history entry. */
          changedProperties?: Array<string>;
          /** Timestamp information for the history entry. */
          time?: {
            /** The history entry timestamp. */
            time?: string;
            /** How many seconds ago the history entry occurred. */
            secondsAgo?: number;
          };
        }>;
      };
    };
    /** Get detailed information for one Sensibo device. */
    "sensibo.get_device": {
      input: {
        /**
         * The unique Sensibo device identifier.
         * @minLength 1
         */
        device_id: string;
        /**
         * Comma-separated fields to retrieve, or * to request all available fields.
         * @minLength 1
         */
        fields?: string;
      };
      output: {
        /** A Sensibo device. */
        device: {
          /** The device identifier. */
          id: string;
          /** The device name. */
          name?: string;
          /** Room information associated with the Sensibo device. */
          room?: {
            /** The room identifier. */
            id: string;
            /** The room name. */
            name?: string;
          };
          /** A measurement snapshot reported by the Sensibo device. */
          measurements?: {
            /** The measured ambient temperature. */
            temperature?: number;
            /** The measured relative humidity percentage. */
            humidity?: number;
            /** Timestamp information for the measurement snapshot. */
            time?: {
              /** The measurement timestamp. */
              time?: string;
              /** How many seconds ago the measurement was captured. */
              secondsAgo?: number;
            };
          };
          /** The AC state currently reported by Sensibo. */
          acState?: {
            /** Whether the AC is currently on. */
            on: boolean;
            /** The operating mode, such as cool, heat, fan, auto, or dry. */
            mode: string;
            /** The current fan level. */
            fanLevel: string;
            /** The configured target temperature. */
            targetTemperature: number;
            /** The temperature unit, such as C or F. */
            temperatureUnit?: string;
            /** The swing mode when the remote supports it. */
            swing?: string;
          };
          /** Connectivity information for the device. */
          connectionStatus?: {
            /** Whether the device is currently reachable. */
            isAlive?: boolean;
            /** Last seen timestamp information. */
            lastSeen?: {
              /** The last seen timestamp. */
              time?: string;
              /** How many seconds ago the device was last seen. */
              secondsAgo?: number;
            };
          };
          /** The Sensibo product model. */
          productModel?: string;
          /** Remote capabilities reported for the Sensibo device. */
          remoteCapabilities?: {
            /** Mapping of supported AC modes to their capabilities. */
            modes?: Record<string, {
                /** Temperature capability metadata for the mode. */
                temperatures?: {
                  /** Supported Celsius temperature range. */
                  C?: {
                    /** The supported Celsius target temperatures. */
                    values: Array<number>;
                  };
                  /** Supported Fahrenheit temperature range. */
                  F?: {
                    /** The supported Fahrenheit target temperatures. */
                    values: Array<number>;
                  };
                };
                /** The fan levels supported in the selected mode. */
                fanLevels?: Array<string>;
                /** The swing states supported in the selected mode. */
                swing?: Array<string>;
              }>;
          };
        };
      };
    };
    /** List Sensibo devices linked to the authenticated user. */
    "sensibo.list_devices": {
      input: {
        /**
         * Comma-separated fields to retrieve, or * to request all available fields.
         * @minLength 1
         */
        fields?: string;
      };
      output: {
        /** The devices returned by Sensibo. */
        devices: Array<{
          /** The device identifier. */
          id: string;
          /** The device name. */
          name?: string;
          /** Room information associated with the Sensibo device. */
          room?: {
            /** The room identifier. */
            id: string;
            /** The room name. */
            name?: string;
          };
          /** A measurement snapshot reported by the Sensibo device. */
          measurements?: {
            /** The measured ambient temperature. */
            temperature?: number;
            /** The measured relative humidity percentage. */
            humidity?: number;
            /** Timestamp information for the measurement snapshot. */
            time?: {
              /** The measurement timestamp. */
              time?: string;
              /** How many seconds ago the measurement was captured. */
              secondsAgo?: number;
            };
          };
          /** The AC state currently reported by Sensibo. */
          acState?: {
            /** Whether the AC is currently on. */
            on: boolean;
            /** The operating mode, such as cool, heat, fan, auto, or dry. */
            mode: string;
            /** The current fan level. */
            fanLevel: string;
            /** The configured target temperature. */
            targetTemperature: number;
            /** The temperature unit, such as C or F. */
            temperatureUnit?: string;
            /** The swing mode when the remote supports it. */
            swing?: string;
          };
          /** Connectivity information for the device. */
          connectionStatus?: {
            /** Whether the device is currently reachable. */
            isAlive?: boolean;
            /** Last seen timestamp information. */
            lastSeen?: {
              /** The last seen timestamp. */
              time?: string;
              /** How many seconds ago the device was last seen. */
              secondsAgo?: number;
            };
          };
          /** The Sensibo product model. */
          productModel?: string;
          /** Remote capabilities reported for the Sensibo device. */
          remoteCapabilities?: {
            /** Mapping of supported AC modes to their capabilities. */
            modes?: Record<string, {
                /** Temperature capability metadata for the mode. */
                temperatures?: {
                  /** Supported Celsius temperature range. */
                  C?: {
                    /** The supported Celsius target temperatures. */
                    values: Array<number>;
                  };
                  /** Supported Fahrenheit temperature range. */
                  F?: {
                    /** The supported Fahrenheit target temperatures. */
                    values: Array<number>;
                  };
                };
                /** The fan levels supported in the selected mode. */
                fanLevels?: Array<string>;
                /** The swing states supported in the selected mode. */
                swing?: Array<string>;
              }>;
          };
        }>;
      };
    };
    /** Set the full AC state for one Sensibo device. */
    "sensibo.set_ac_state": {
      input: {
        /**
         * The unique Sensibo device identifier.
         * @minLength 1
         */
        device_id: string;
        /** The AC state currently reported by Sensibo. */
        acState: {
          /** Whether the AC is currently on. */
          on: boolean;
          /** The operating mode, such as cool, heat, fan, auto, or dry. */
          mode: string;
          /** The current fan level. */
          fanLevel: string;
          /** The configured target temperature. */
          targetTemperature: number;
          /** The temperature unit, such as C or F. */
          temperatureUnit?: string;
          /** The swing mode when the remote supports it. */
          swing?: string;
        };
      };
      output: {
        /** Whether Sensibo accepted the AC state update. */
        success: boolean;
      };
    };
  }
}
