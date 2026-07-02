import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one BlazeMeter Service Virtualization service mock template by template ID. */
    "blaze_meter_service_virtualization.get_service_mock_template": {
      input: {
        /**
         * The BlazeMeter workspace ID that contains service mock templates.
         * @exclusiveMinimum 0
         */
        workspaceId: number;
        /**
         * The BlazeMeter service mock template ID.
         * @exclusiveMinimum 0
         */
        templateId: number;
      };
      output: {
        /** The BlazeMeter API version returned by the endpoint. */
        apiVersion: number | null;
        /** The BlazeMeter request identifier. */
        requestId: string | null;
        /** The error object returned by BlazeMeter when a request fails. */
        error: {
          /** The numeric BlazeMeter error code. */
          code?: number | null;
          /** The BlazeMeter error message. */
          message?: string | null;
        } | null;
        /** The result payload returned by BlazeMeter. */
        result: unknown;
        /** The total number of matching records when returned. */
        total: number | null;
        /** The response limit when returned. */
        limit: number | null;
        /** The response offset when returned. */
        skip: number | null;
        /** The number of hidden records when returned. */
        hidden: number | null;
        /** The raw BlazeMeter response object. */
        raw: Record<string, unknown>;
      };
    };
    /** List BlazeMeter Service Virtualization service mock templates in a workspace. */
    "blaze_meter_service_virtualization.list_service_mock_templates": {
      input: {
        /**
         * The BlazeMeter workspace ID that contains service mock templates.
         * @exclusiveMinimum 0
         */
        workspaceId: number;
      };
      output: {
        /** The BlazeMeter API version returned by the endpoint. */
        apiVersion: number | null;
        /** The BlazeMeter request identifier. */
        requestId: string | null;
        /** The error object returned by BlazeMeter when a request fails. */
        error: {
          /** The numeric BlazeMeter error code. */
          code?: number | null;
          /** The BlazeMeter error message. */
          message?: string | null;
        } | null;
        /** The result payload returned by BlazeMeter. */
        result: unknown;
        /** The total number of matching records when returned. */
        total: number | null;
        /** The response limit when returned. */
        limit: number | null;
        /** The response offset when returned. */
        skip: number | null;
        /** The number of hidden records when returned. */
        hidden: number | null;
        /** The raw BlazeMeter response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Update JSON-safe configuration fields for one BlazeMeter service mock template. */
    "blaze_meter_service_virtualization.update_service_mock_template": {
      input: {
        /**
         * The BlazeMeter workspace ID that contains service mock templates.
         * @exclusiveMinimum 0
         */
        workspaceId: number;
        /**
         * The BlazeMeter service mock template ID.
         * @exclusiveMinimum 0
         */
        templateId: number;
        /**
         * The updated service mock template name.
         * @minLength 1
         */
        name?: string;
        /**
         * The updated service mock template description.
         * @minLength 1
         */
        description?: string;
        /**
         * The synthetic delay between test steps in milliseconds.
         * @minimum 0
         */
        thinkTime?: number;
        /**
         * The live system host URL to forward unmatched requests to.
         * @minLength 1
         */
        liveSystemHost?: string;
        /**
         * The live system port number.
         * @exclusiveMinimum 0
         */
        liveSystemPort?: number;
        /** The protocol preference for the virtual service endpoint. */
        endpointPreference?: "HTTP" | "HTTPS";
        /** The behavior BlazeMeter should use when no mock request matches. */
        noMatchingRequestPreference?: "return404" | "bypasslive";
      };
      output: {
        /** The BlazeMeter API version returned by the endpoint. */
        apiVersion: number | null;
        /** The BlazeMeter request identifier. */
        requestId: string | null;
        /** The error object returned by BlazeMeter when a request fails. */
        error: {
          /** The numeric BlazeMeter error code. */
          code?: number | null;
          /** The BlazeMeter error message. */
          message?: string | null;
        } | null;
        /** The result payload returned by BlazeMeter. */
        result: unknown;
        /** The total number of matching records when returned. */
        total: number | null;
        /** The response limit when returned. */
        limit: number | null;
        /** The response offset when returned. */
        skip: number | null;
        /** The number of hidden records when returned. */
        hidden: number | null;
        /** The raw BlazeMeter response object. */
        raw: Record<string, unknown>;
      };
    };
  }
}
