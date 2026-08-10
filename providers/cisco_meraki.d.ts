import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one Meraki device by serial number. */
    "cisco_meraki.get_device": {
      input: {
        /**
         * The Meraki device serial number.
         * @minLength 1
         */
        serial: string;
      };
      output: {
        /** One Meraki device. */
        device: {
          /** Name of the device. */
          name?: string;
          /** Latitude of the device. */
          lat?: number;
          /** Longitude of the device. */
          lng?: number;
          /** Physical address of the device. */
          address?: string;
          /** Notes for the device. */
          notes?: string;
          /** Device tags. */
          tags?: Array<string>;
          /** Network ID of the device. */
          networkId?: string;
          /** Serial number of the device. */
          serial?: string;
          /** Model of the device. */
          model?: string;
          /** MAC address of the device. */
          mac?: string;
          /** LAN IP address of the device. */
          lanIp?: string;
          /** Firmware version of the device. */
          firmware?: string;
          /** Floor plan ID associated with the device. */
          floorPlanId?: string | null;
          /** Device Dashboard URL. */
          url?: string;
          /** Additional device details. */
          details?: Array<{
            /** Additional detail name. */
            name?: string;
            /** Additional detail value. */
            value?: string;
            [key: string]: unknown;
          }>;
          /** A JSON object returned by the Meraki Dashboard API. */
          beaconIdParams?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** One Meraki device. */
        raw: {
          /** Name of the device. */
          name?: string;
          /** Latitude of the device. */
          lat?: number;
          /** Longitude of the device. */
          lng?: number;
          /** Physical address of the device. */
          address?: string;
          /** Notes for the device. */
          notes?: string;
          /** Device tags. */
          tags?: Array<string>;
          /** Network ID of the device. */
          networkId?: string;
          /** Serial number of the device. */
          serial?: string;
          /** Model of the device. */
          model?: string;
          /** MAC address of the device. */
          mac?: string;
          /** LAN IP address of the device. */
          lanIp?: string;
          /** Firmware version of the device. */
          firmware?: string;
          /** Floor plan ID associated with the device. */
          floorPlanId?: string | null;
          /** Device Dashboard URL. */
          url?: string;
          /** Additional device details. */
          details?: Array<{
            /** Additional detail name. */
            name?: string;
            /** Additional detail value. */
            value?: string;
            [key: string]: unknown;
          }>;
          /** A JSON object returned by the Meraki Dashboard API. */
          beaconIdParams?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List inventory devices in a Meraki organization with simple search filters. */
    "cisco_meraki.list_organization_inventory_devices": {
      input: {
        /**
         * The Meraki organization ID.
         * @minLength 1
         */
        organizationId: string;
        /**
         * The number of inventory devices to return on each page.
         * @minimum 3
         * @maximum 1000
         */
        perPage?: number;
        /**
         * The pagination token that starts the page after this value.
         * @minLength 1
         */
        startingAfter?: string;
        /**
         * The pagination token that ends the page before this value.
         * @minLength 1
         */
        endingBefore?: string;
        /** Filter inventory by used or unused state. */
        usedState?: "used" | "unused";
        /**
         * Search by serial number, MAC address, or model.
         * @minLength 1
         */
        search?: string;
        /**
         * MAC addresses to search for.
         * @minItems 1
         */
        macs?: Array<string>;
        /**
         * Network IDs to search for. Use the string value 'null' to find available devices.
         * @minItems 1
         */
        networkIds?: Array<string>;
        /**
         * Serial numbers to search for.
         * @minItems 1
         */
        serials?: Array<string>;
        /**
         * Device models to search for.
         * @minItems 1
         */
        models?: Array<string>;
        /**
         * Order numbers to search for.
         * @minItems 1
         */
        orderNumbers?: Array<string>;
        /**
         * Case-sensitive tags used to filter devices.
         * @minItems 1
         */
        tags?: Array<string>;
        /** How tag filters are matched. */
        tagsFilterType?: "withAllTags" | "withAnyTags";
        /**
         * Product types used to filter devices.
         * @minItems 1
         */
        productTypes?: Array<"appliance" | "camera" | "campusGateway" | "cellularGateway" | "secureConnect" | "sensor" | "switch" | "systemsManager" | "wireless" | "wirelessController">;
        /**
         * End-of-sale or end-of-support states used to filter devices.
         * @minItems 1
         */
        eoxStatuses?: Array<"endOfSale" | "endOfSupport" | "nearEndOfSupport" | "null">;
      };
      output: {
        /** Inventory devices returned by Meraki. */
        devices: Array<{
          /** MAC address of the device. */
          mac?: string;
          /** Serial number of the device. */
          serial?: string;
          /** Name of the device. */
          name?: string;
          /** Model type of the device. */
          model?: string;
          /** Full product model SKU of the device. */
          sku?: string;
          /** Network ID of the device. */
          networkId?: string;
          /** Order number of the device. */
          orderNumber?: string;
          /**
           * Claimed time of the device.
           * @format date-time
           */
          claimedAt?: string;
          /**
           * License expiration date of the device.
           * @format date-time
           */
          licenseExpirationDate?: string;
          /** Device tags. */
          tags?: Array<string>;
          /** Product type of the device. */
          productType?: string;
          /** Country or region code for the device. */
          countryCode?: string;
          /** Additional device details. */
          details?: Array<{
            /** Additional detail name. */
            name?: string;
            /** Additional detail value. */
            value?: string;
            [key: string]: unknown;
          }>;
          /** A JSON object returned by the Meraki Dashboard API. */
          eox?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The raw Meraki Link response header for cursor pagination. */
        link: string | null;
        /** The raw Meraki inventory device records. */
        raw: Array<{
          /** MAC address of the device. */
          mac?: string;
          /** Serial number of the device. */
          serial?: string;
          /** Name of the device. */
          name?: string;
          /** Model type of the device. */
          model?: string;
          /** Full product model SKU of the device. */
          sku?: string;
          /** Network ID of the device. */
          networkId?: string;
          /** Order number of the device. */
          orderNumber?: string;
          /**
           * Claimed time of the device.
           * @format date-time
           */
          claimedAt?: string;
          /**
           * License expiration date of the device.
           * @format date-time
           */
          licenseExpirationDate?: string;
          /** Device tags. */
          tags?: Array<string>;
          /** Product type of the device. */
          productType?: string;
          /** Country or region code for the device. */
          countryCode?: string;
          /** Additional device details. */
          details?: Array<{
            /** Additional detail name. */
            name?: string;
            /** Additional detail value. */
            value?: string;
            [key: string]: unknown;
          }>;
          /** A JSON object returned by the Meraki Dashboard API. */
          eox?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List networks that the API key can access in a Meraki organization. */
    "cisco_meraki.list_organization_networks": {
      input: {
        /**
         * The Meraki organization ID.
         * @minLength 1
         */
        organizationId: string;
        /**
         * Only return networks bound to this config template ID.
         * @minLength 1
         */
        configTemplateId?: string;
        /** Only return networks by config-template binding state. */
        isBoundToConfigTemplate?: boolean;
        /**
         * Case-sensitive tags used to filter networks.
         * @minItems 1
         */
        tags?: Array<string>;
        /** How tag filters are matched. */
        tagsFilterType?: "withAllTags" | "withAnyTags";
        /**
         * Product types used to filter networks.
         * @minItems 1
         */
        productTypes?: Array<"appliance" | "camera" | "campusGateway" | "cellularGateway" | "secureConnect" | "sensor" | "switch" | "systemsManager" | "wireless" | "wirelessController">;
        /**
         * The number of networks to return on each page.
         * @minimum 3
         * @maximum 100000
         */
        perPage?: number;
        /**
         * The pagination token that starts the page after this value.
         * @minLength 1
         */
        startingAfter?: string;
        /**
         * The pagination token that ends the page before this value.
         * @minLength 1
         */
        endingBefore?: string;
      };
      output: {
        /** Networks returned by Meraki. */
        networks: Array<{
          /** Network ID. */
          id?: string;
          /** Organization ID. */
          organizationId?: string;
          /** Network name. */
          name?: string;
          /** Product types enabled for this network. */
          productTypes?: Array<string>;
          /** Network time zone. */
          timeZone?: string;
          /** Network tags. */
          tags?: Array<string>;
          /** Enrollment string for this network. */
          enrollmentString?: string;
          /** Network Dashboard URL. */
          url?: string;
          /** Network notes. */
          notes?: string;
          /** Whether this network is bound to a config template. */
          isBoundToConfigTemplate?: boolean;
          [key: string]: unknown;
        }>;
        /** The raw Meraki Link response header for cursor pagination. */
        link: string | null;
        /** The raw Meraki network records. */
        raw: Array<{
          /** Network ID. */
          id?: string;
          /** Organization ID. */
          organizationId?: string;
          /** Network name. */
          name?: string;
          /** Product types enabled for this network. */
          productTypes?: Array<string>;
          /** Network time zone. */
          timeZone?: string;
          /** Network tags. */
          tags?: Array<string>;
          /** Enrollment string for this network. */
          enrollmentString?: string;
          /** Network Dashboard URL. */
          url?: string;
          /** Network notes. */
          notes?: string;
          /** Whether this network is bound to a config template. */
          isBoundToConfigTemplate?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the Meraki organizations available to the connected API key. */
    "cisco_meraki.list_organizations": {
      input: {
        /**
         * The number of organizations to return on each page.
         * @minimum 3
         * @maximum 9000
         */
        perPage?: number;
        /**
         * The pagination token that starts the page after this value.
         * @minLength 1
         */
        startingAfter?: string;
        /**
         * The pagination token that ends the page before this value.
         * @minLength 1
         */
        endingBefore?: string;
      };
      output: {
        /** Organizations returned by Meraki. */
        organizations: Array<{
          /** Organization ID. */
          id?: string;
          /** Organization name. */
          name?: string;
          /** Organization Dashboard URL. */
          url?: string;
          /** A JSON object returned by the Meraki Dashboard API. */
          api?: Record<string, unknown>;
          /** A JSON object returned by the Meraki Dashboard API. */
          licensing?: Record<string, unknown>;
          /** A JSON object returned by the Meraki Dashboard API. */
          cloud?: Record<string, unknown>;
          /** A JSON object returned by the Meraki Dashboard API. */
          management?: Record<string, unknown>;
          /** A JSON object returned by the Meraki Dashboard API. */
          privacy?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The raw Meraki Link response header for cursor pagination. */
        link: string | null;
        /** The raw Meraki organization records. */
        raw: Array<{
          /** Organization ID. */
          id?: string;
          /** Organization name. */
          name?: string;
          /** Organization Dashboard URL. */
          url?: string;
          /** A JSON object returned by the Meraki Dashboard API. */
          api?: Record<string, unknown>;
          /** A JSON object returned by the Meraki Dashboard API. */
          licensing?: Record<string, unknown>;
          /** A JSON object returned by the Meraki Dashboard API. */
          cloud?: Record<string, unknown>;
          /** A JSON object returned by the Meraki Dashboard API. */
          management?: Record<string, unknown>;
          /** A JSON object returned by the Meraki Dashboard API. */
          privacy?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
