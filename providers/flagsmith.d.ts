import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one feature flag by feature name from the connected environment. */
    "flagsmith.get_feature_flag": {
      input: {
        /**
         * The Flagsmith feature name.
         * @minLength 1
         */
        feature: string;
      };
      output: {
        /** A Flagsmith feature flag state. */
        flag: {
          /** The Flagsmith feature metadata. */
          feature?: {
            /** The Flagsmith feature id. */
            id?: number;
            /**
             * The Flagsmith feature name.
             * @minLength 1
             */
            name: string;
            /**
             * The Flagsmith feature type.
             * @minLength 1
             */
            type?: string;
            [key: string]: unknown;
          };
          /** Whether the feature is enabled. */
          enabled?: boolean;
          /** The value attached to a Flagsmith feature state. */
          feature_state_value?: string | number | boolean | Record<string, unknown> | Array<unknown> | null;
          /**
           * The Flagsmith feature state UUID.
           * @minLength 1
           */
          featurestate_uuid?: string;
          /** Multivariate feature values returned by Flagsmith. */
          multivariate_feature_state_values?: Array<Record<string, unknown>>;
          /** Flagsmith metadata attached to this feature state. */
          metadata?: Record<string, unknown>;
          /** The raw Flagsmith feature state object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The raw Flagsmith feature state object. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve evaluated flags and traits for a Flagsmith identity. */
    "flagsmith.get_identity_flags": {
      input: {
        /**
         * The Flagsmith identity identifier.
         * @minLength 1
         */
        identifier: string;
      };
      output: {
        /** A Flagsmith identity response. */
        identity: {
          /**
           * The Flagsmith identity identifier.
           * @minLength 1
           */
          identifier?: string;
          /**
           * The Flagsmith identity UUID.
           * @minLength 1
           */
          identity_uuid?: string;
          /** The Flagsmith identity database id. */
          django_id?: number;
          /** Flags evaluated for this identity. */
          flags?: Array<{
            /** The Flagsmith feature metadata. */
            feature?: {
              /** The Flagsmith feature id. */
              id?: number;
              /**
               * The Flagsmith feature name.
               * @minLength 1
               */
              name: string;
              /**
               * The Flagsmith feature type.
               * @minLength 1
               */
              type?: string;
              [key: string]: unknown;
            };
            /** Whether the feature is enabled. */
            enabled?: boolean;
            /** The value attached to a Flagsmith feature state. */
            feature_state_value?: string | number | boolean | Record<string, unknown> | Array<unknown> | null;
            /**
             * The Flagsmith feature state UUID.
             * @minLength 1
             */
            featurestate_uuid?: string;
            /** Multivariate feature values returned by Flagsmith. */
            multivariate_feature_state_values?: Array<Record<string, unknown>>;
            /** Flagsmith metadata attached to this feature state. */
            metadata?: Record<string, unknown>;
            /** The raw Flagsmith feature state object. */
            raw?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          /** Traits returned for this identity. */
          traits?: Array<{
            /**
             * The Flagsmith trait key.
             * @minLength 1
             */
            trait_key?: string;
            /** A Flagsmith trait value. */
            trait_value?: string | number | boolean | null;
            /** The raw Flagsmith trait object. */
            raw?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          /** The raw Flagsmith identity response. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The raw Flagsmith identity response. */
        raw: Record<string, unknown>;
      };
    };
    /** Identify a Flagsmith user, optionally set traits, and return evaluated flags. */
    "flagsmith.identify_identity": {
      input: {
        /**
         * The Flagsmith identity identifier.
         * @minLength 1
         */
        identifier: string;
        /** Traits to set for this identity. */
        traits?: Array<{
          /**
           * The Flagsmith trait key.
           * @minLength 1
           */
          trait_key: string;
          /** A Flagsmith trait value. */
          trait_value: string | number | boolean | null;
        }>;
      };
      output: {
        /** A Flagsmith identity response. */
        identity: {
          /**
           * The Flagsmith identity identifier.
           * @minLength 1
           */
          identifier?: string;
          /**
           * The Flagsmith identity UUID.
           * @minLength 1
           */
          identity_uuid?: string;
          /** The Flagsmith identity database id. */
          django_id?: number;
          /** Flags evaluated for this identity. */
          flags?: Array<{
            /** The Flagsmith feature metadata. */
            feature?: {
              /** The Flagsmith feature id. */
              id?: number;
              /**
               * The Flagsmith feature name.
               * @minLength 1
               */
              name: string;
              /**
               * The Flagsmith feature type.
               * @minLength 1
               */
              type?: string;
              [key: string]: unknown;
            };
            /** Whether the feature is enabled. */
            enabled?: boolean;
            /** The value attached to a Flagsmith feature state. */
            feature_state_value?: string | number | boolean | Record<string, unknown> | Array<unknown> | null;
            /**
             * The Flagsmith feature state UUID.
             * @minLength 1
             */
            featurestate_uuid?: string;
            /** Multivariate feature values returned by Flagsmith. */
            multivariate_feature_state_values?: Array<Record<string, unknown>>;
            /** Flagsmith metadata attached to this feature state. */
            metadata?: Record<string, unknown>;
            /** The raw Flagsmith feature state object. */
            raw?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          /** Traits returned for this identity. */
          traits?: Array<{
            /**
             * The Flagsmith trait key.
             * @minLength 1
             */
            trait_key?: string;
            /** A Flagsmith trait value. */
            trait_value?: string | number | boolean | null;
            /** The raw Flagsmith trait object. */
            raw?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          /** The raw Flagsmith identity response. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The raw Flagsmith identity response. */
        raw: Record<string, unknown>;
      };
    };
    /** List feature flags for the connected Flagsmith environment. */
    "flagsmith.list_flags": {
      input: {
        /**
         * The Flagsmith feature name.
         * @minLength 1
         */
        feature?: string;
      };
      output: {
        /** Feature flags returned by Flagsmith. */
        flags: Array<{
          /** The Flagsmith feature metadata. */
          feature?: {
            /** The Flagsmith feature id. */
            id?: number;
            /**
             * The Flagsmith feature name.
             * @minLength 1
             */
            name: string;
            /**
             * The Flagsmith feature type.
             * @minLength 1
             */
            type?: string;
            [key: string]: unknown;
          };
          /** Whether the feature is enabled. */
          enabled?: boolean;
          /** The value attached to a Flagsmith feature state. */
          feature_state_value?: string | number | boolean | Record<string, unknown> | Array<unknown> | null;
          /**
           * The Flagsmith feature state UUID.
           * @minLength 1
           */
          featurestate_uuid?: string;
          /** Multivariate feature values returned by Flagsmith. */
          multivariate_feature_state_values?: Array<Record<string, unknown>>;
          /** Flagsmith metadata attached to this feature state. */
          metadata?: Record<string, unknown>;
          /** The raw Flagsmith feature state object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Raw Flagsmith feature state objects. */
        raw: Array<Record<string, unknown>>;
      };
    };
  }
}
