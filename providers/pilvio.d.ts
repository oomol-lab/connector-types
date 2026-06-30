import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Pilvio billing account by numeric identifier. */
    "pilvio.get_billing_account": {
      input: {
        /**
         * The Pilvio billing account identifier.
         * @minimum 1
         */
        billingAccountId: number;
      };
      output: {
        /** A normalized Pilvio billing account. */
        billingAccount: {
          /** The billing account identifier when returned. */
          id: number | null;
          /** The billing account title when returned. */
          title: string | null;
          /** The billing account email address when returned. */
          email: string | null;
          /** The billing account company name when returned. */
          companyName: string | null;
          /** The billing account credit amount when returned. */
          creditAmount: number | null;
          /** Whether the billing account is active when returned. */
          isActive: boolean | null;
          /** Whether this is the default billing account when returned. */
          isDefault: boolean | null;
          /** The raw object returned by Pilvio. */
          raw: Record<string, unknown>;
        };
        /** The raw top-level payload returned by Pilvio. */
        raw: unknown;
      };
    };
    /** Get the authenticated Pilvio user profile. */
    "pilvio.get_current_user": {
      input: Record<string, never>;
      output: {
        /** A normalized Pilvio user profile. */
        user: {
          /** The Pilvio user identifier when returned. */
          id: number | null;
          /** The user name when returned, often the account email address. */
          name: string | null;
          /** The email address from the nested profile data when returned. */
          email: string | null;
          /** The first name from the nested profile data when returned. */
          firstName: string | null;
          /** The last name from the nested profile data when returned. */
          lastName: string | null;
          /** The raw object returned by Pilvio. */
          raw: Record<string, unknown>;
        };
        /** The raw top-level payload returned by Pilvio. */
        raw: unknown;
      };
    };
    /** List Pilvio billing accounts attached to the authenticated user. */
    "pilvio.list_billing_accounts": {
      input: {
        /** Whether to request deleted billing accounts with show_shadow. */
        showShadow?: boolean;
      };
      output: {
        /** The billing accounts returned by Pilvio. */
        billingAccounts: Array<{
          /** The billing account identifier when returned. */
          id: number | null;
          /** The billing account title when returned. */
          title: string | null;
          /** The billing account email address when returned. */
          email: string | null;
          /** The billing account company name when returned. */
          companyName: string | null;
          /** The billing account credit amount when returned. */
          creditAmount: number | null;
          /** Whether the billing account is active when returned. */
          isActive: boolean | null;
          /** Whether this is the default billing account when returned. */
          isDefault: boolean | null;
          /** The raw object returned by Pilvio. */
          raw: Record<string, unknown>;
        }>;
        /** The raw top-level payload returned by Pilvio. */
        raw: unknown;
      };
    };
    /** List Pilvio data center locations available for resource operations. */
    "pilvio.list_locations": {
      input: Record<string, never>;
      output: {
        /** The Pilvio locations returned by the API. */
        locations: Array<{
          /** The location slug used in location-specific Pilvio API URLs. */
          slug: string;
          /** The human-readable location name when returned. */
          displayName: string | null;
          /** The location description when returned. */
          description: string | null;
          /** The location country code when returned. */
          countryCode: string | null;
          /** The location ordering number when returned. */
          orderNumber: number | null;
          /** Whether this is the default location when returned. */
          isDefault: boolean | null;
          /** Whether this is the preferred location when returned. */
          isPreferred: boolean | null;
          /** The raw object returned by Pilvio. */
          raw: Record<string, unknown>;
        }>;
        /** The raw top-level payload returned by Pilvio. */
        raw: unknown;
      };
    };
    /** List Pilvio virtual machines, optionally scoped to a documented location slug. */
    "pilvio.list_virtual_machines": {
      input: {
        /**
         * The optional Pilvio location slug to use after /v1 in the API URL.
         * @minLength 1
         */
        locationSlug?: string;
      };
      output: {
        /** The virtual machines returned by Pilvio. */
        virtualMachines: Array<{
          /** The numeric virtual machine identifier when returned. */
          id: number | null;
          /** The virtual machine UUID when returned. */
          uuid: string | null;
          /** The virtual machine name when returned. */
          name: string | null;
          /** The virtual machine hostname when returned. */
          hostname: string | null;
          /** The virtual machine status when returned. */
          status: string | null;
          /** The billing account identifier attached to the VM. */
          billingAccountId: number | null;
          /** The number of vCPUs assigned to the VM when returned. */
          vcpus: number | null;
          /** The amount of VM memory in MiB when returned. */
          memoryMb: number | null;
          /** The operating system name when returned. */
          osName: string | null;
          /** The operating system version when returned. */
          osVersion: string | null;
          /** The private IPv4 address when returned. */
          privateIpv4: string | null;
          /** The public IPv4 address when returned. */
          publicIpv4: string | null;
          /** The public IPv6 address when returned. */
          publicIpv6: string | null;
          /** The VM creation timestamp when returned. */
          createdAt: string | null;
          /** The VM last update timestamp when returned. */
          updatedAt: string | null;
          /** The raw object returned by Pilvio. */
          raw: Record<string, unknown>;
        }>;
        /** The raw top-level payload returned by Pilvio. */
        raw: unknown;
      };
    };
  }
}
