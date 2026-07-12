import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the ConfigCat user authenticated by the Public API credentials. */
    "configcat.get_me": {
      input: Record<string, never>;
      output: {
        /** The authenticated ConfigCat user. */
        user: {
          /** The authenticated user's email address. */
          email: string;
          /** The authenticated user's full name. */
          fullName: string;
        };
      };
    };
    /** Get a ConfigCat Feature Flag or Setting value for an Environment. */
    "configcat.get_setting_value": {
      input: {
        /**
         * The ConfigCat Environment identifier.
         * @format uuid
         */
        environmentId: string;
        /** The ConfigCat Feature Flag or Setting identifier. */
        settingId: number;
      };
      output: {
        /** A normalized ConfigCat Setting value response. */
        settingValue: {
          /** The ConfigCat Feature Flag or Setting identifier. */
          settingId: number;
          /** The Feature Flag or Setting key. */
          settingKey: string;
          /** The Feature Flag or Setting name. */
          settingName: string;
          /** The ConfigCat Feature Flag or Setting type. */
          settingType: "boolean" | "string" | "int" | "double";
          /** The served value returned by ConfigCat. */
          value: boolean | string | number | null;
          /**
           * The last update timestamp when returned.
           * @format date-time
           */
          updatedAt: string | null;
          /** The email of the last updater when returned. */
          lastUpdaterUserEmail: string | null;
          /** The name of the last updater when returned. */
          lastUpdaterUserFullName: string | null;
          /** Whether the Setting value is read-only for the current credentials. */
          readOnly: boolean;
          /**
           * The ConfigCat Config identifier.
           * @format uuid
           */
          configId: string;
          /** The Config name. */
          configName: string;
          /**
           * The ConfigCat Environment identifier.
           * @format uuid
           */
          environmentId: string;
          /** The Environment name. */
          environmentName: string;
          /** The raw Setting value object returned by ConfigCat. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List ConfigCat Configs in a Product. */
    "configcat.list_configs": {
      input: {
        /**
         * The ConfigCat Product identifier.
         * @format uuid
         */
        productId: string;
      };
      output: {
        /** The Configs returned by ConfigCat. */
        configs: Array<{
          /**
           * The ConfigCat Config identifier.
           * @format uuid
           */
          configId: string;
          /** The Config name. */
          name: string;
          /** The Config description when configured. */
          description: string | null;
          /** The Config order on the ConfigCat Dashboard. */
          order: number;
          /**
           * The ConfigCat Product identifier.
           * @format uuid
           */
          productId: string;
          /** The parent Product name. */
          productName: string;
          /** The Config evaluation version when returned. */
          evaluationVersion: string | null;
          /** The raw Config object returned by ConfigCat. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List ConfigCat Environments in a Product. */
    "configcat.list_environments": {
      input: {
        /**
         * The ConfigCat Product identifier.
         * @format uuid
         */
        productId: string;
      };
      output: {
        /** The Environments returned by ConfigCat. */
        environments: Array<{
          /**
           * The ConfigCat Environment identifier.
           * @format uuid
           */
          environmentId: string;
          /** The Environment name. */
          name: string;
          /** The Environment color when configured. */
          color: string | null;
          /** The Environment description when configured. */
          description: string | null;
          /** The Environment order on the ConfigCat Dashboard. */
          order: number;
          /** Whether change reasons are required in this Environment. */
          reasonRequired: boolean;
          /** Whether changes require approval in this Environment. */
          approveRequired: boolean;
          /**
           * The ConfigCat Product identifier.
           * @format uuid
           */
          productId: string;
          /** The parent Product name. */
          productName: string;
          /** The raw Environment object returned by ConfigCat. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List ConfigCat Products available to the authenticated Public API credentials. */
    "configcat.list_products": {
      input: Record<string, never>;
      output: {
        /** The Products returned by ConfigCat. */
        products: Array<{
          /**
           * The ConfigCat Product identifier.
           * @format uuid
           */
          productId: string;
          /** The Product name. */
          name: string;
          /** The Product description when configured. */
          description: string | null;
          /** The Product order on the ConfigCat Dashboard. */
          order: number;
          /** Whether change reasons are required in this Product. */
          reasonRequired: boolean;
          /** Whether changes require approval in this Product. */
          approveRequired: boolean;
          /** The ConfigCat organization summary. */
          organization: {
            /**
             * The ConfigCat UUID identifier.
             * @format uuid
             */
            organizationId: string;
            /** The organization name. */
            name: string;
          };
          /** The raw Product object returned by ConfigCat. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List ConfigCat Feature Flag and Setting values for a Config and Environment. */
    "configcat.list_setting_values": {
      input: {
        /**
         * The ConfigCat Config identifier.
         * @format uuid
         */
        configId: string;
        /**
         * The ConfigCat Environment identifier.
         * @format uuid
         */
        environmentId: string;
      };
      output: {
        /** A normalized ConfigCat Config. */
        config: {
          /**
           * The ConfigCat Config identifier.
           * @format uuid
           */
          configId: string;
          /** The Config name. */
          name: string;
          /** The Config description when configured. */
          description: string | null;
          /** The Config order on the ConfigCat Dashboard. */
          order: number;
          /**
           * The ConfigCat Product identifier.
           * @format uuid
           */
          productId: string;
          /** The parent Product name. */
          productName: string;
          /** The Config evaluation version when returned. */
          evaluationVersion: string | null;
          /** The raw Config object returned by ConfigCat. */
          raw: Record<string, unknown>;
        };
        /** A normalized ConfigCat Environment. */
        environment: {
          /**
           * The ConfigCat Environment identifier.
           * @format uuid
           */
          environmentId: string;
          /** The Environment name. */
          name: string;
          /** The Environment color when configured. */
          color: string | null;
          /** The Environment description when configured. */
          description: string | null;
          /** The Environment order on the ConfigCat Dashboard. */
          order: number;
          /** Whether change reasons are required in this Environment. */
          reasonRequired: boolean;
          /** Whether changes require approval in this Environment. */
          approveRequired: boolean;
          /**
           * The ConfigCat Product identifier.
           * @format uuid
           */
          productId: string;
          /** The parent Product name. */
          productName: string;
          /** The raw Environment object returned by ConfigCat. */
          raw: Record<string, unknown>;
        };
        /** Whether the returned Setting values are read-only. */
        readOnly: boolean;
        /** The Setting value descriptors returned by ConfigCat. */
        settingValues: Array<{
          /** The ConfigCat Feature Flag or Setting identifier. */
          settingId: number;
          /** The Feature Flag or Setting key. */
          settingKey: string;
          /** The Feature Flag or Setting name. */
          settingName: string;
          /** The ConfigCat Feature Flag or Setting type. */
          settingType: "boolean" | "string" | "int" | "double";
          /** The ConfigCat default value object for this Setting. */
          defaultValue: Record<string, unknown>;
          /**
           * The last update timestamp when returned.
           * @format date-time
           */
          updatedAt: string | null;
          /** The email of the last updater when returned. */
          lastUpdaterUserEmail: string | null;
          /** The name of the last updater when returned. */
          lastUpdaterUserFullName: string | null;
          /** The raw bulk Setting value item returned by ConfigCat. */
          raw: Record<string, unknown>;
        }>;
        /** The raw bulk Setting values response returned by ConfigCat. */
        raw: Record<string, unknown>;
      };
    };
    /** List ConfigCat Feature Flags and Settings in a Config. */
    "configcat.list_settings": {
      input: {
        /**
         * The ConfigCat Config identifier.
         * @format uuid
         */
        configId: string;
      };
      output: {
        /** The Feature Flags and Settings returned by ConfigCat. */
        settings: Array<{
          /** The ConfigCat Feature Flag or Setting identifier. */
          settingId: number;
          /** The Feature Flag or Setting key. */
          key: string;
          /** The Feature Flag or Setting name. */
          name: string;
          /** The Feature Flag or Setting description when configured. */
          hint: string | null;
          /** The Feature Flag or Setting order on the ConfigCat Dashboard. */
          order: number;
          /** The ConfigCat Feature Flag or Setting type. */
          settingType: "boolean" | "string" | "int" | "double";
          /** Whether string values are validated as JSON values. */
          isJson: boolean;
          /**
           * The ConfigCat Config identifier.
           * @format uuid
           */
          configId: string;
          /** The parent Config name. */
          configName: string;
          /**
           * The Feature Flag or Setting creation timestamp.
           * @format date-time
           */
          createdAt: string | null;
          /** The raw Feature Flag or Setting object returned by ConfigCat. */
          raw: Record<string, unknown>;
        }>;
      };
    };
  }
}
