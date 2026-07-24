import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the confirmed and pending tonnes of carbon emissions avoided by an Ecologi user. */
    "ecologi.get_carbon_offset_totals": {
      input: {
        /**
         * The Ecologi username used by the public reporting API.
         * @minLength 1
         */
        username: string;
      };
      output: {
        /** The confirmed impact total. */
        total: number;
        /** The impact total that is still pending payment. */
        pending: number;
        [key: string]: unknown;
      };
    };
    /** Get the confirmed and pending tonnes of carbon removed by an Ecologi user. */
    "ecologi.get_carbon_removal_totals": {
      input: {
        /**
         * The Ecologi username used by the public reporting API.
         * @minLength 1
         */
        username: string;
      };
      output: {
        /** The confirmed impact total. */
        total: number;
        /** The impact total that is still pending payment. */
        pending: number;
        [key: string]: unknown;
      };
    };
    /** Get the confirmed and pending square metres of habitat restored by an Ecologi user. */
    "ecologi.get_habitat_restoration_totals": {
      input: {
        /**
         * The Ecologi username used by the public reporting API.
         * @minLength 1
         */
        username: string;
      };
      output: {
        /** The confirmed impact total. */
        total: number;
        /** The impact total that is still pending payment. */
        pending: number;
        [key: string]: unknown;
      };
    };
    /** Get a combined view of an Ecologi user's confirmed and pending impact totals. */
    "ecologi.get_total_impact": {
      input: {
        /**
         * The Ecologi username used by the public reporting API.
         * @minLength 1
         */
        username: string;
      };
      output: {
        /** The confirmed number of trees funded. */
        trees: number;
        /** The confirmed tonnes of carbon emissions avoided. */
        carbonOffset: number;
        /** The confirmed tonnes of carbon removed. */
        carbonRemoval: number;
        /** The confirmed square metres of habitat restored. */
        habitatRestoration: number;
        /** The pending Ecologi impact totals. */
        pending: {
          /** The pending number of trees funded. */
          trees: number;
          /** The pending tonnes of carbon emissions avoided. */
          carbonOffset: number;
          /** The pending tonnes of carbon removed. */
          carbonRemoval: number;
          /** The pending square metres of habitat restored. */
          habitatRestoration: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get the confirmed and pending number of trees funded by an Ecologi user. */
    "ecologi.get_tree_totals": {
      input: {
        /**
         * The Ecologi username used by the public reporting API.
         * @minLength 1
         */
        username: string;
      };
      output: {
        /** The confirmed impact total. */
        total: number;
        /** The impact total that is still pending payment. */
        pending: number;
        [key: string]: unknown;
      };
    };
    /** Purchase Ecologi carbon avoidance by kilograms or tonnes. */
    "ecologi.purchase_carbon_avoidance": {
      input: {
        /**
         * The number of carbon avoidance units to purchase.
         * @exclusiveMinimum 0
         */
        number: number;
        /** The unit used for the carbon avoidance purchase. */
        units: "KG" | "Tonnes";
        /**
         * An optional funded-by name shown on the Ecologi profile. If the profile is public, obtain permission before sending personally identifiable information or use a non-identifying label.
         * @minLength 1
         */
        name?: string;
        /** Whether to simulate the purchase without charging or publishing impact. */
        test?: boolean;
        /**
         * An optional third-party recipient email for an Ecologi impact notification. The account-gated feature returns 403 when disabled; test mode validates and echoes the address without sending email.
         * @format email
         */
        recipientEmail?: string;
        /**
         * An optional Idempotency-Key header value used to retry a purchase safely.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** The purchase amount charged or simulated by Ecologi. */
        amount: number;
        /** The ISO currency code returned by Ecologi. */
        currency: string;
        /** The funded-by name returned by Ecologi. */
        name?: string;
        /**
         * The recipient email echoed by Ecologi.
         * @format email
         */
        recipientEmail?: string;
        /** The Ecologi projects funded by this purchase. */
        projectDetails: Array<{
          /** The project name. */
          name?: string;
          /**
           * The official Ecologi project URL.
           * @format uri
           */
          projectUrl?: string;
          /** The quantity allocated to this project. */
          quantity?: number;
          /** The percentage of the purchase allocated to this project. */
          splitPercentage?: number;
          /** The number of trees allocated to this project. */
          splitAmountTrees?: number;
          /** The tonnes of carbon allocated to this project. */
          splitAmountTonnes?: number;
          [key: string]: unknown;
        }>;
        /** The number of units purchased. */
        number: number;
        /** The unit used for the purchase. */
        units: "KG" | "Tonnes";
        /** The purchased amount normalized to tonnes. */
        numberInTonnes: number;
        [key: string]: unknown;
      };
    };
    /** Purchase permanent Ecologi carbon removal measured in kilograms. */
    "ecologi.purchase_carbon_removal": {
      input: {
        /**
         * The kilograms of carbon removal to purchase.
         * @minimum 1
         */
        number: number;
        /**
         * An optional funded-by name shown on the Ecologi profile. If the profile is public, obtain permission before sending personally identifiable information or use a non-identifying label.
         * @minLength 1
         */
        name?: string;
        /** Whether to simulate the purchase without charging or publishing impact. */
        test?: boolean;
        /**
         * An optional third-party recipient email for an Ecologi impact notification. The account-gated feature returns 403 when disabled; test mode validates and echoes the address without sending email.
         * @format email
         */
        recipientEmail?: string;
        /**
         * An optional Idempotency-Key header value used to retry a purchase safely.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** The purchase amount charged or simulated by Ecologi. */
        amount: number;
        /** The ISO currency code returned by Ecologi. */
        currency: string;
        /** The funded-by name returned by Ecologi. */
        name?: string;
        /**
         * The recipient email echoed by Ecologi.
         * @format email
         */
        recipientEmail?: string;
        /** The Ecologi projects funded by this purchase. */
        projectDetails: Array<{
          /** The project name. */
          name?: string;
          /**
           * The official Ecologi project URL.
           * @format uri
           */
          projectUrl?: string;
          /** The quantity allocated to this project. */
          quantity?: number;
          /** The percentage of the purchase allocated to this project. */
          splitPercentage?: number;
          /** The number of trees allocated to this project. */
          splitAmountTrees?: number;
          /** The tonnes of carbon allocated to this project. */
          splitAmountTonnes?: number;
          [key: string]: unknown;
        }>;
        /**
         * The Ecologi URL for the purchased impact tile.
         * @format uri
         */
        tileUrl: string;
        [key: string]: unknown;
      };
    };
    /** Purchase Ecologi habitat restoration measured in square metres. */
    "ecologi.purchase_habitat_restoration": {
      input: {
        /**
         * The square metres of habitat to restore, with one decimal place.
         * @minimum 0.1
         */
        number: number;
        /**
         * An optional funded-by name shown on the Ecologi profile. If the profile is public, obtain permission before sending personally identifiable information or use a non-identifying label.
         * @minLength 1
         */
        name?: string;
        /** Whether to simulate the purchase without charging or publishing impact. */
        test?: boolean;
        /**
         * An optional third-party recipient email for an Ecologi impact notification. The account-gated feature returns 403 when disabled; test mode validates and echoes the address without sending email.
         * @format email
         */
        recipientEmail?: string;
        /**
         * An optional Idempotency-Key header value used to retry a purchase safely.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** The purchase amount charged or simulated by Ecologi. */
        amount: number;
        /** The ISO currency code returned by Ecologi. */
        currency: string;
        /** The funded-by name returned by Ecologi. */
        name?: string;
        /**
         * The recipient email echoed by Ecologi.
         * @format email
         */
        recipientEmail?: string;
        /** The Ecologi projects funded by this purchase. */
        projectDetails: Array<{
          /** The project name. */
          name?: string;
          /**
           * The official Ecologi project URL.
           * @format uri
           */
          projectUrl?: string;
          /** The quantity allocated to this project. */
          quantity?: number;
          /** The percentage of the purchase allocated to this project. */
          splitPercentage?: number;
          /** The number of trees allocated to this project. */
          splitAmountTrees?: number;
          /** The tonnes of carbon allocated to this project. */
          splitAmountTonnes?: number;
          [key: string]: unknown;
        }>;
        /**
         * The Ecologi URL for the purchased impact tile.
         * @format uri
         */
        tileUrl: string;
        [key: string]: unknown;
      };
    };
    /** Purchase Ecologi tree planting in the UK, US, Australia, or Brazil. */
    "ecologi.purchase_local_trees": {
      input: {
        /**
         * The number of local trees to purchase.
         * @minimum 1
         */
        number: number;
        /** The country where Ecologi should plant the trees. */
        country: "UK" | "US" | "AU" | "BR";
        /**
         * An optional funded-by name shown on the Ecologi profile. If the profile is public, obtain permission before sending personally identifiable information or use a non-identifying label.
         * @minLength 1
         */
        name?: string;
        /** Whether to simulate the purchase without charging or publishing impact. */
        test?: boolean;
        /**
         * An optional third-party recipient email for an Ecologi impact notification. The account-gated feature returns 403 when disabled; test mode validates and echoes the address without sending email.
         * @format email
         */
        recipientEmail?: string;
        /**
         * An optional Idempotency-Key header value used to retry a purchase safely.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** The purchase amount charged or simulated by Ecologi. */
        amount: number;
        /** The ISO currency code returned by Ecologi. */
        currency: string;
        /** The funded-by name returned by Ecologi. */
        name?: string;
        /**
         * The recipient email echoed by Ecologi.
         * @format email
         */
        recipientEmail?: string;
        /** The Ecologi projects funded by this purchase. */
        projectDetails: Array<{
          /** The project name. */
          name?: string;
          /**
           * The official Ecologi project URL.
           * @format uri
           */
          projectUrl?: string;
          /** The quantity allocated to this project. */
          quantity?: number;
          /** The percentage of the purchase allocated to this project. */
          splitPercentage?: number;
          /** The number of trees allocated to this project. */
          splitAmountTrees?: number;
          /** The tonnes of carbon allocated to this project. */
          splitAmountTonnes?: number;
          [key: string]: unknown;
        }>;
        /**
         * The Ecologi URL for the purchased tree impact.
         * @format uri
         */
        treeUrl: string;
        [key: string]: unknown;
      };
    };
    /** Purchase Ecologi tree planting with optional test mode, attribution, notification, and idempotency. */
    "ecologi.purchase_trees": {
      input: {
        /**
         * The number of trees to purchase, from 1 through 250000.
         * @minimum 1
         * @maximum 250000
         */
        number: number;
        /**
         * An optional funded-by name shown on the Ecologi profile. If the profile is public, obtain permission before sending personally identifiable information or use a non-identifying label.
         * @minLength 1
         */
        name?: string;
        /** Whether to simulate the purchase without charging or publishing impact. */
        test?: boolean;
        /**
         * An optional third-party recipient email for an Ecologi impact notification. The account-gated feature returns 403 when disabled; test mode validates and echoes the address without sending email.
         * @format email
         */
        recipientEmail?: string;
        /**
         * An optional Idempotency-Key header value used to retry a purchase safely.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** The purchase amount charged or simulated by Ecologi. */
        amount: number;
        /** The ISO currency code returned by Ecologi. */
        currency: string;
        /** The funded-by name returned by Ecologi. */
        name?: string;
        /**
         * The recipient email echoed by Ecologi.
         * @format email
         */
        recipientEmail?: string;
        /** The Ecologi projects funded by this purchase. */
        projectDetails: Array<{
          /** The project name. */
          name?: string;
          /**
           * The official Ecologi project URL.
           * @format uri
           */
          projectUrl?: string;
          /** The quantity allocated to this project. */
          quantity?: number;
          /** The percentage of the purchase allocated to this project. */
          splitPercentage?: number;
          /** The number of trees allocated to this project. */
          splitAmountTrees?: number;
          /** The tonnes of carbon allocated to this project. */
          splitAmountTonnes?: number;
          [key: string]: unknown;
        }>;
        /**
         * The Ecologi URL for the purchased tree impact.
         * @format uri
         */
        treeUrl: string;
        [key: string]: unknown;
      };
    };
  }
}
