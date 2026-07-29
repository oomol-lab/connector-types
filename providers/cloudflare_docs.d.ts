import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the guide and instructions for migrating Cloudflare Pages projects to Cloudflare Workers. */
    "cloudflare_docs.get_pages_to_workers_migration_guide": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** Search Cloudflare documentation for Workers, Pages, R2, Images, Stream, D1, Durable Objects, KV, Workflows, Hyperdrive, Queues, AI Search, Workers AI, Vectorize, AI Gateway, Browser Run, Zero Trust, Access, Tunnel, Gateway, Browser Isolation, WARP, DDOS, Magic Transit, Magic WAN, CDN, Cache, DNS, Zaraz, Argo, Rulesets, Terraform, Account and Billing. */
    "cloudflare_docs.search_cloudflare_documentation": {
      input: {
        /**
         * Search query for Cloudflare documentation.
         * @minLength 1
         */
        query: string;
      };
      output: Record<string, unknown>;
    };
  }
}
