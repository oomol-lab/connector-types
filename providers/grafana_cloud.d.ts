import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get Grafana Cloud billed usage for the connected organization by month. */
    "grafana_cloud.get_billed_usage": {
      input: {
        /**
         * The billing month to retrieve, from 1 to 12.
         * @minimum 1
         * @maximum 12
         */
        month: number;
        /**
         * The billing year to retrieve.
         * @minimum 2000
         */
        year: number;
      };
      output: {
        /** Billed usage items returned by Grafana Cloud. */
        usage: Array<{
          /** The Grafana Cloud billed usage item ID. */
          id: number | null;
          /** The billed usage dimension ID. */
          dimensionId: string | null;
          /** The billed usage dimension name. */
          dimensionName: string | null;
          /** The usage unit. */
          unit: string | null;
          /** The included usage quantity. */
          includedUsage: number | null;
          /** The total usage quantity. */
          totalUsage: number | null;
          /** The overage quantity. */
          overage: number | null;
          /** The amount due for this usage item. */
          amountDue: number | null;
          /** The raw Grafana Cloud API object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Grafana Cloud API object. */
        raw: Record<string, unknown>;
      };
    };
    /** Get private connectivity information for a Grafana Cloud stack. */
    "grafana_cloud.get_stack_connectivity": {
      input: {
        /**
         * The Grafana Cloud stack slug.
         * @minLength 1
         */
        stackSlug: string;
      };
      output: {
        /** The raw Grafana Cloud API object. */
        connectivity: Record<string, unknown>;
      };
    };
    /** List Grafana Cloud stack regions that can host Grafana Cloud stacks. */
    "grafana_cloud.list_regions": {
      input: Record<string, never>;
      output: {
        /** Regions returned by Grafana Cloud. */
        regions: Array<{
          /** The Grafana Cloud region ID. */
          id: number | null;
          /** The Grafana Cloud region slug. */
          slug: string | null;
          /** The Grafana Cloud region name. */
          name: string | null;
          /** The Grafana Cloud region status. */
          status: string | null;
          /** The infrastructure provider for the region. */
          provider: string | null;
          /** The region description. */
          description: string | null;
          /** The raw Grafana Cloud API object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Grafana Cloud API object. */
        raw: Record<string, unknown>;
      };
    };
    /** List Grafana Cloud stacks in the connected organization. */
    "grafana_cloud.list_stacks": {
      input: {
        /**
         * The number of records to request from Grafana Cloud.
         * @minimum 1
         */
        pageSize?: number;
        /**
         * The Grafana Cloud pagination cursor from a previous response.
         * @minLength 1
         */
        pageCursor?: string;
      };
      output: {
        /** Stacks returned by Grafana Cloud. */
        stacks: Array<{
          /** The Grafana Cloud stack ID. */
          id: number | null;
          /** The Grafana Cloud stack slug. */
          slug: string | null;
          /** The Grafana Cloud stack name. */
          name: string | null;
          /** The Grafana Cloud stack URL. */
          url: string | null;
          /** The Grafana Cloud stack status. */
          status: string | null;
          /** The Grafana Cloud organization slug. */
          orgSlug: string | null;
          /** The Grafana Cloud organization name. */
          orgName: string | null;
          /** The Grafana Cloud region slug for the stack. */
          regionSlug: string | null;
          /** The Grafana Cloud plan name for the stack. */
          planName: string | null;
          /** The raw Grafana Cloud API object. */
          raw: Record<string, unknown>;
        }>;
        /** The cursor to pass as pageCursor for the next Grafana Cloud stacks request. */
        nextPageCursor: string | null;
        /** The next page URL returned by Grafana Cloud, if present. */
        nextPage: string | null;
        /** The raw Grafana Cloud API object. */
        raw: Record<string, unknown>;
      };
    };
  }
}
