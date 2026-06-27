import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get details for a specific Kaleido consortium. */
    "kaleido.get_consortium": {
      input: {
        /**
         * The Kaleido consortium identifier.
         * @minLength 1
         */
        consortia_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get details for a specific Kaleido environment. */
    "kaleido.get_environment": {
      input: {
        /**
         * The Kaleido consortium identifier.
         * @minLength 1
         */
        consortia_id: string;
        /**
         * The Kaleido environment identifier.
         * @minLength 1
         */
        environment_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get runtime status for a specific Kaleido environment. */
    "kaleido.get_environment_status": {
      input: {
        /**
         * The Kaleido consortium identifier.
         * @minLength 1
         */
        consortia_id: string;
        /**
         * The Kaleido environment identifier.
         * @minLength 1
         */
        environment_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get details for a specific Kaleido node. */
    "kaleido.get_node": {
      input: {
        /**
         * The Kaleido consortium identifier.
         * @minLength 1
         */
        consortia_id: string;
        /**
         * The Kaleido environment identifier.
         * @minLength 1
         */
        environment_id: string;
        /**
         * The Kaleido node identifier.
         * @minLength 1
         */
        node_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get runtime status for a specific Kaleido node. */
    "kaleido.get_node_status": {
      input: {
        /**
         * The Kaleido consortium identifier.
         * @minLength 1
         */
        consortia_id: string;
        /**
         * The Kaleido environment identifier.
         * @minLength 1
         */
        environment_id: string;
        /**
         * The Kaleido node identifier.
         * @minLength 1
         */
        node_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get details for a specific Kaleido service. */
    "kaleido.get_service": {
      input: {
        /**
         * The Kaleido consortium identifier.
         * @minLength 1
         */
        consortia_id: string;
        /**
         * The Kaleido environment identifier.
         * @minLength 1
         */
        environment_id: string;
        /**
         * The Kaleido service identifier.
         * @minLength 1
         */
        service_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get runtime status for a specific Kaleido service. */
    "kaleido.get_service_status": {
      input: {
        /**
         * The Kaleido consortium identifier.
         * @minLength 1
         */
        consortia_id: string;
        /**
         * The Kaleido environment identifier.
         * @minLength 1
         */
        environment_id: string;
        /**
         * The Kaleido service identifier.
         * @minLength 1
         */
        service_id: string;
      };
      output: Record<string, unknown>;
    };
    /** List Kaleido consortia available to the current membership. */
    "kaleido.list_consortia": {
      input: Record<string, never>;
      output: Array<Record<string, unknown>>;
    };
    /** List environments in a specific Kaleido consortium. */
    "kaleido.list_environments": {
      input: {
        /**
         * The Kaleido consortium identifier.
         * @minLength 1
         */
        consortia_id: string;
      };
      output: Array<Record<string, unknown>>;
    };
    /** List memberships available to the current Kaleido API key. */
    "kaleido.list_memberships": {
      input: Record<string, never>;
      output: Array<Record<string, unknown>>;
    };
    /** List nodes in a specific Kaleido environment. */
    "kaleido.list_nodes": {
      input: {
        /**
         * The Kaleido consortium identifier.
         * @minLength 1
         */
        consortia_id: string;
        /**
         * The Kaleido environment identifier.
         * @minLength 1
         */
        environment_id: string;
      };
      output: Array<Record<string, unknown>>;
    };
    /** List services in a specific Kaleido environment. */
    "kaleido.list_services": {
      input: {
        /**
         * The Kaleido consortium identifier.
         * @minLength 1
         */
        consortia_id: string;
        /**
         * The Kaleido environment identifier.
         * @minLength 1
         */
        environment_id: string;
      };
      output: Array<Record<string, unknown>>;
    };
  }
}
