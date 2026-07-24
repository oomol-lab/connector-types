import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Activate a LIFX scene by UUID, optionally overriding or ignoring state fields. */
    "lifx.activate_scene": {
      input: {
        /**
         * The UUID of the LIFX scene to activate.
         * @format uuid
         */
        sceneUuid: string;
        /**
         * The transition duration in seconds.
         * @minimum 0
         */
        duration?: number;
        /** Scene state fields LIFX should not change when applying the scene. */
        ignore?: Array<"power" | "infrared" | "duration" | "intensity" | "hue" | "saturation" | "brightness" | "kelvin">;
        /** A LIFX state object to apply to all devices in the scene, overriding the scene configuration. */
        overrides?: Record<string, unknown>;
        /** Whether to use LIFX fast mode and return as soon as the request is accepted. */
        fast?: boolean;
      };
      output: {
        /** Whether LIFX accepted the request without returning per-light results. */
        accepted: boolean;
        /** The per-light operation results returned by LIFX. */
        results: Array<{
          /** The LIFX light id. */
          id?: string;
          /** The LIFX light label. */
          label?: string;
          /** The operation status returned by LIFX. */
          status?: string;
        }>;
      };
    };
    /** List LIFX lights visible to the API token, optionally limited by a selector. */
    "lifx.list_lights": {
      input: {
        /**
         * The LIFX selector to address lights, such as `all`, `id:d073d5141876`, `group:Kitchen`, or a comma-separated selector list.
         * @minLength 1
         */
        selector?: string;
      };
      output: {
        /** The matching LIFX lights. */
        lights: Array<{
          /** The LIFX light id. */
          id?: string;
          /** The LIFX light UUID. */
          uuid?: string;
          /** The user-visible light label. */
          label?: string;
          /** Whether the light is connected. */
          connected?: boolean;
          /** The light power state. */
          power?: string;
          /** The color state returned by LIFX. */
          color?: {
            /** The color hue value. */
            hue?: number;
            /** The color saturation value. */
            saturation?: number;
            /** The color temperature in kelvin. */
            kelvin?: number;
            [key: string]: unknown;
          };
          /** The light brightness from 0.0 to 1.0. */
          brightness?: number;
          /** The active firmware effect name, or OFF. */
          effect?: string;
          /** The LIFX group object for the light. */
          group?: Record<string, unknown>;
          /** The LIFX location object for the light. */
          location?: Record<string, unknown>;
          /** The LIFX product object for the light. */
          product?: Record<string, unknown>;
          /** The last time LIFX saw the device. */
          last_seen?: string;
          /** The seconds since LIFX last saw the device. */
          seconds_since_seen?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** List scenes available to the authenticated LIFX account. */
    "lifx.list_scenes": {
      input: Record<string, never>;
      output: {
        /** The available LIFX scenes. */
        scenes: Array<{
          /** The LIFX scene UUID. */
          uuid?: string;
          /** The scene name. */
          name?: string;
          /** The LIFX account object for the scene. */
          account?: Record<string, unknown>;
          /** The light states configured in the scene. */
          states?: Array<Record<string, unknown>>;
          /** The Unix timestamp when the scene was created. */
          created_at?: number;
          /** The Unix timestamp when the scene was last updated. */
          updated_at?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Set power, color, brightness, infrared, or transition duration for LIFX lights matching a selector. */
    "lifx.set_state": {
      input: {
        /**
         * The LIFX selector to address lights, such as `all`, `id:d073d5141876`, `group:Kitchen`, or a comma-separated selector list.
         * @minLength 1
         */
        selector: string;
        /** The target power state. */
        power?: "on" | "off";
        /**
         * The LIFX color string to set, such as `blue saturation:0.5`.
         * @minLength 1
         */
        color?: string;
        /**
         * The brightness level from 0.0 to 1.0.
         * @minimum 0
         * @maximum 1
         */
        brightness?: number;
        /**
         * The transition duration in seconds.
         * @minimum 0
         */
        duration?: number;
        /**
         * The maximum brightness of the infrared channel from 0.0 to 1.0.
         * @minimum 0
         * @maximum 1
         */
        infrared?: number;
        /** Whether to use LIFX fast mode and return as soon as the request is accepted. */
        fast?: boolean;
      };
      output: {
        /** Whether LIFX accepted the request without returning per-light results. */
        accepted: boolean;
        /** The per-light operation results returned by LIFX. */
        results: Array<{
          /** The LIFX light id. */
          id?: string;
          /** The LIFX light label. */
          label?: string;
          /** The operation status returned by LIFX. */
          status?: string;
        }>;
      };
    };
    /** Toggle the power state for LIFX lights matching a selector. */
    "lifx.toggle_power": {
      input: {
        /**
         * The LIFX selector to address lights, such as `all`, `id:d073d5141876`, `group:Kitchen`, or a comma-separated selector list.
         * @minLength 1
         */
        selector: string;
        /**
         * The transition duration in seconds.
         * @minimum 0
         */
        duration?: number;
      };
      output: {
        /** Whether LIFX accepted the request without returning per-light results. */
        accepted: boolean;
        /** The per-light operation results returned by LIFX. */
        results: Array<{
          /** The LIFX light id. */
          id?: string;
          /** The LIFX light label. */
          label?: string;
          /** The operation status returned by LIFX. */
          status?: string;
        }>;
      };
    };
    /** Turn off running LIFX effects for lights matching a selector, optionally powering the lights off. */
    "lifx.turn_effects_off": {
      input: {
        /**
         * The LIFX selector to address lights, such as `all`, `id:d073d5141876`, `group:Kitchen`, or a comma-separated selector list.
         * @minLength 1
         */
        selector: string;
        /** Whether LIFX should also power the devices off. */
        powerOff?: boolean;
      };
      output: {
        /** Whether LIFX accepted the request without returning per-light results. */
        accepted: boolean;
        /** The per-light operation results returned by LIFX. */
        results: Array<{
          /** The LIFX light id. */
          id?: string;
          /** The LIFX light label. */
          label?: string;
          /** The operation status returned by LIFX. */
          status?: string;
        }>;
      };
    };
    /** Validate a LIFX color string and return the hue, saturation, brightness, and kelvin values LIFX will use. */
    "lifx.validate_color": {
      input: {
        /**
         * The LIFX color string to validate, such as `red` or `kelvin:2700`.
         * @minLength 1
         */
        color: string;
      };
      output: {
        /** The parsed hue value. */
        hue: number | null;
        /** The parsed saturation value. */
        saturation: number | null;
        /** The parsed brightness value. */
        brightness: number | null;
        /** The parsed kelvin value. */
        kelvin: number | null;
      };
    };
  }
}
