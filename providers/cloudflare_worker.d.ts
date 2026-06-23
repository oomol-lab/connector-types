import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Cloudflare Worker using the Workers beta API. */
    "cloudflare_worker.create_worker": {
      input: {
        /**
         * The Worker name.
         * @minLength 1
         */
        name: string;
        /** Whether logpush should be enabled for the Worker. */
        logpush?: boolean;
        /** A free-form object accepted by the Cloudflare API. */
        observability?: Record<string, unknown>;
        /** A free-form object accepted by the Cloudflare API. */
        subdomain?: Record<string, unknown>;
        /** Tags to set on the Worker. */
        tags?: Array<string>;
        /** Tail consumer definitions to set on the Worker. */
        tailConsumers?: Array<Record<string, unknown>>;
      };
      output: {
        /** A Cloudflare Worker managed by the Workers beta API. */
        worker: {
          /** The immutable Worker ID. */
          id: string;
          /** The Worker name. */
          name: string;
          /** The Worker creation timestamp. */
          createdOn?: string;
          /** The last Worker update timestamp. */
          updatedOn?: string;
          /** The latest deployment timestamp, or null when undeployed. */
          deployedOn?: string | null;
          /** Whether logpush is enabled for the Worker. */
          logpush?: boolean;
          /** A free-form object accepted by the Cloudflare API. */
          observability?: Record<string, unknown>;
          /** A free-form object accepted by the Cloudflare API. */
          references?: Record<string, unknown>;
          /** A free-form object accepted by the Cloudflare API. */
          subdomain?: Record<string, unknown>;
          /** Tags associated with the Worker. */
          tags?: Array<string>;
          /** Other Workers that should consume logs from the Worker. */
          tailConsumers?: Array<Record<string, unknown>>;
        };
      };
    };
    /** Delete a Cloudflare Worker and its associated resources using the Workers beta API. */
    "cloudflare_worker.delete_worker": {
      input: {
        /**
         * The Cloudflare Worker ID.
         * @minLength 1
         */
        workerId: string;
      };
      output: {
        /** The deleted Worker ID. */
        id: string;
        /** Whether the delete request succeeded. */
        deleted: boolean;
      };
    };
    /** Delete a Cloudflare Worker script. */
    "cloudflare_worker.delete_worker_script": {
      input: {
        /**
         * The Cloudflare Worker script name.
         * @minLength 1
         */
        scriptName: string;
        /** Whether to force deletion of associated service bindings, Durable Objects, or other bindings. */
        force?: boolean;
      };
      output: {
        /** The deleted Worker script name. */
        scriptName: string;
        /** Whether the delete request succeeded. */
        deleted: boolean;
      };
    };
    /** Delete a secret binding from a Cloudflare Worker script. */
    "cloudflare_worker.delete_worker_script_secret": {
      input: {
        /**
         * The Cloudflare Worker script name.
         * @minLength 1
         */
        scriptName: string;
        /**
         * The Cloudflare Worker secret name.
         * @minLength 1
         */
        secretName: string;
      };
      output: {
        /** The deleted secret binding name. */
        name: string;
        /** Whether the delete request succeeded. */
        deleted: boolean;
      };
    };
    /** Partially update a Cloudflare Worker using the Workers beta API while leaving omitted fields unchanged. */
    "cloudflare_worker.edit_worker": {
      input: {
        /**
         * The Cloudflare Worker ID.
         * @minLength 1
         */
        workerId: string;
        /**
         * The Worker name.
         * @minLength 1
         */
        name?: string;
        /** Whether logpush should be enabled for the Worker. */
        logpush?: boolean;
        /** A free-form object accepted by the Cloudflare API. */
        observability?: Record<string, unknown>;
        /** A free-form object accepted by the Cloudflare API. */
        subdomain?: Record<string, unknown>;
        /** Tags to set on the Worker. */
        tags?: Array<string>;
        /** Tail consumer definitions to set on the Worker. */
        tailConsumers?: Array<Record<string, unknown>>;
      };
      output: {
        /** A Cloudflare Worker managed by the Workers beta API. */
        worker: {
          /** The immutable Worker ID. */
          id: string;
          /** The Worker name. */
          name: string;
          /** The Worker creation timestamp. */
          createdOn?: string;
          /** The last Worker update timestamp. */
          updatedOn?: string;
          /** The latest deployment timestamp, or null when undeployed. */
          deployedOn?: string | null;
          /** Whether logpush is enabled for the Worker. */
          logpush?: boolean;
          /** A free-form object accepted by the Cloudflare API. */
          observability?: Record<string, unknown>;
          /** A free-form object accepted by the Cloudflare API. */
          references?: Record<string, unknown>;
          /** A free-form object accepted by the Cloudflare API. */
          subdomain?: Record<string, unknown>;
          /** Tags associated with the Worker. */
          tags?: Array<string>;
          /** Other Workers that should consume logs from the Worker. */
          tailConsumers?: Array<Record<string, unknown>>;
        };
      };
    };
    /** Get one Worker by Worker ID using the Workers beta API. */
    "cloudflare_worker.get_worker": {
      input: {
        /**
         * The Cloudflare Worker ID.
         * @minLength 1
         */
        workerId: string;
      };
      output: {
        /** A Cloudflare Worker managed by the Workers beta API. */
        worker: {
          /** The immutable Worker ID. */
          id: string;
          /** The Worker name. */
          name: string;
          /** The Worker creation timestamp. */
          createdOn?: string;
          /** The last Worker update timestamp. */
          updatedOn?: string;
          /** The latest deployment timestamp, or null when undeployed. */
          deployedOn?: string | null;
          /** Whether logpush is enabled for the Worker. */
          logpush?: boolean;
          /** A free-form object accepted by the Cloudflare API. */
          observability?: Record<string, unknown>;
          /** A free-form object accepted by the Cloudflare API. */
          references?: Record<string, unknown>;
          /** A free-form object accepted by the Cloudflare API. */
          subdomain?: Record<string, unknown>;
          /** Tags associated with the Worker. */
          tags?: Array<string>;
          /** Other Workers that should consume logs from the Worker. */
          tailConsumers?: Array<Record<string, unknown>>;
        };
      };
    };
    /** Fetch the raw source content for a Cloudflare Worker script. */
    "cloudflare_worker.get_worker_script_content": {
      input: {
        /**
         * The Cloudflare Worker script name.
         * @minLength 1
         */
        scriptName: string;
      };
      output: {
        /** The raw Worker script content. */
        content: string;
        contentType: string | null;
      };
    };
    /** Get one secret binding attached to a Cloudflare Worker script. */
    "cloudflare_worker.get_worker_script_secret": {
      input: {
        /**
         * The Cloudflare Worker script name.
         * @minLength 1
         */
        scriptName: string;
        /**
         * The Cloudflare Worker secret name.
         * @minLength 1
         */
        secretName: string;
      };
      output: {
        /** A Cloudflare Worker secret binding. */
        secret: {
          /** The secret binding name. */
          name: string;
          /** The secret binding type. */
          type?: string;
          text?: string | null;
          /** The key algorithm for key secrets. */
          algorithm?: string;
          /** The key format for key secrets. */
          format?: string;
          /** The public key for key secrets. */
          publicKey?: string;
          /** The initialization vector for key secrets. */
          iv?: string;
        };
      };
    };
    /** Get Worker metadata and configuration for a Cloudflare Worker script. */
    "cloudflare_worker.get_worker_script_settings": {
      input: {
        /**
         * The Cloudflare Worker script name.
         * @minLength 1
         */
        scriptName: string;
      };
      output: {
        /** Cloudflare Worker script settings. */
        settings: {
          /** The script bindings. */
          bindings?: Array<Record<string, unknown>>;
          /** The compatibility date. */
          compatibilityDate?: string;
          /** The compatibility flags. */
          compatibilityFlags?: Array<string>;
          /** Whether logpush is enabled. */
          logpush?: boolean;
          /** The observability configuration. */
          observability?: Record<string, unknown>;
          /** The placement mode. */
          placementMode?: string;
          /** The script tags. */
          tags?: Array<string>;
          /** Tail consumer definitions. */
          tailConsumers?: Array<Record<string, unknown>>;
          /** The usage model. */
          usageModel?: string;
          /** Execution limit settings. */
          limits?: Record<string, unknown>;
          /** Durable Object migration metadata. */
          migrations?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List Cloudflare accounts visible to the current credential. */
    "cloudflare_worker.list_accounts": {
      input: {
        /**
         * The result page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The page size.
         * @exclusiveMinimum 0
         */
        perPage?: number;
      };
      output: {
        /** The visible Cloudflare accounts. */
        accounts: Array<{
          /** The Cloudflare account ID. */
          id: string;
          /** The Cloudflare account name. */
          name?: string;
          /** The Cloudflare account type. */
          type?: string;
        }>;
        /** Cloudflare pagination metadata. */
        resultInfo?: {
          /** The current page number. */
          page?: number;
          /** The page size. */
          perPage?: number;
          /** The number of items in the current page. */
          count?: number;
          /** The total number of matching items. */
          totalCount?: number;
          /** The total number of pages. */
          totalPages?: number;
        };
      };
    };
    /** List secret bindings attached to a Cloudflare Worker script. */
    "cloudflare_worker.list_worker_script_secrets": {
      input: {
        /**
         * The Cloudflare Worker script name.
         * @minLength 1
         */
        scriptName: string;
      };
      output: {
        /** The list of Worker secrets. */
        secrets: Array<{
          /** The secret binding name. */
          name: string;
          /** The secret binding type. */
          type?: string;
          text?: string | null;
          /** The key algorithm for key secrets. */
          algorithm?: string;
          /** The key format for key secrets. */
          format?: string;
          /** The public key for key secrets. */
          publicKey?: string;
          /** The initialization vector for key secrets. */
          iv?: string;
        }>;
        /** Cloudflare pagination metadata. */
        resultInfo?: {
          /** The current page number. */
          page?: number;
          /** The page size. */
          perPage?: number;
          /** The number of items in the current page. */
          count?: number;
          /** The total number of matching items. */
          totalCount?: number;
          /** The total number of pages. */
          totalPages?: number;
        };
      };
    };
    /** List Worker scripts in a Cloudflare account. */
    "cloudflare_worker.list_worker_scripts": {
      input: {
        /**
         * The result page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The page size.
         * @exclusiveMinimum 0
         */
        perPage?: number;
      };
      output: {
        /** The list of Worker scripts. */
        scripts: Array<{
          /** The Worker script name. */
          name?: string;
          /** The Worker script tag identifier. */
          scriptTag?: string;
          /** The script creation timestamp. */
          createdOn?: string;
          /** The last script update timestamp. */
          modifiedOn?: string;
          /** The compatibility date. */
          compatibilityDate?: string;
          /** The compatibility flags. */
          compatibilityFlags?: Array<string>;
          /** The entrypoint module. */
          entrypoint?: string;
          /** The Worker handlers. */
          handlers?: Array<string>;
          /** The Worker usage model. */
          usageModel?: string;
          /** The placement mode. */
          placementMode?: string;
          /** Whether logpush is enabled. */
          logpush?: boolean;
          /** The environment name. */
          environmentName?: string;
          /** Whether the environment is the default environment. */
          environmentIsDefault?: boolean;
          /** The Worker service name. */
          serviceName?: string;
          /** The Worker tags. */
          tags?: Array<string>;
          /** Worker observability configuration. */
          observability?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Cloudflare pagination metadata. */
        resultInfo?: {
          /** The current page number. */
          page?: number;
          /** The page size. */
          perPage?: number;
          /** The number of items in the current page. */
          count?: number;
          /** The total number of matching items. */
          totalCount?: number;
          /** The total number of pages. */
          totalPages?: number;
        };
      };
    };
    /** List Workers in a Cloudflare account using the Workers beta API. */
    "cloudflare_worker.list_workers": {
      input: {
        /**
         * The result page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The page size.
         * @exclusiveMinimum 0
         */
        perPage?: number;
        /** The sort direction. */
        order?: "asc" | "desc";
        /**
         * The field to order by.
         * @minLength 1
         */
        orderBy?: string;
      };
      output: {
        /** The list of Workers. */
        workers: Array<{
          /** The immutable Worker ID. */
          id: string;
          /** The Worker name. */
          name: string;
          /** The Worker creation timestamp. */
          createdOn?: string;
          /** The last Worker update timestamp. */
          updatedOn?: string;
          /** The latest deployment timestamp, or null when undeployed. */
          deployedOn?: string | null;
          /** Whether logpush is enabled for the Worker. */
          logpush?: boolean;
          /** A free-form object accepted by the Cloudflare API. */
          observability?: Record<string, unknown>;
          /** A free-form object accepted by the Cloudflare API. */
          references?: Record<string, unknown>;
          /** A free-form object accepted by the Cloudflare API. */
          subdomain?: Record<string, unknown>;
          /** Tags associated with the Worker. */
          tags?: Array<string>;
          /** Other Workers that should consume logs from the Worker. */
          tailConsumers?: Array<Record<string, unknown>>;
        }>;
        /** Cloudflare pagination metadata. */
        resultInfo: {
          /** The current page number. */
          page?: number;
          /** The page size. */
          perPage?: number;
          /** The number of items in the current page. */
          count?: number;
          /** The total number of matching items. */
          totalCount?: number;
          /** The total number of pages. */
          totalPages?: number;
        } | null;
      };
    };
    /** Patch Worker metadata and configuration for a Cloudflare Worker script. */
    "cloudflare_worker.patch_worker_script_settings": {
      input: {
        /**
         * The Cloudflare Worker script name.
         * @minLength 1
         */
        scriptName: string;
        /** The full bindings array to set on the script. */
        bindings?: Array<Record<string, unknown>>;
        /** The compatibility date. */
        compatibilityDate?: string;
        /** The compatibility flags. */
        compatibilityFlags?: Array<string>;
        /** Whether logpush should be enabled. */
        logpush?: boolean;
        /** The observability configuration. */
        observability?: Record<string, unknown>;
        /** The placement mode. */
        placementMode?: string;
        /** The script tags. */
        tags?: Array<string>;
        /** Tail consumer definitions. */
        tailConsumers?: Array<Record<string, unknown>>;
        /** The usage model. */
        usageModel?: string;
        /** Execution limit settings. */
        limits?: Record<string, unknown>;
        /** Durable Object migration metadata. */
        migrations?: Record<string, unknown>;
      };
      output: {
        /** Cloudflare Worker script settings. */
        settings: {
          /** The script bindings. */
          bindings?: Array<Record<string, unknown>>;
          /** The compatibility date. */
          compatibilityDate?: string;
          /** The compatibility flags. */
          compatibilityFlags?: Array<string>;
          /** Whether logpush is enabled. */
          logpush?: boolean;
          /** The observability configuration. */
          observability?: Record<string, unknown>;
          /** The placement mode. */
          placementMode?: string;
          /** The script tags. */
          tags?: Array<string>;
          /** Tail consumer definitions. */
          tailConsumers?: Array<Record<string, unknown>>;
          /** The usage model. */
          usageModel?: string;
          /** Execution limit settings. */
          limits?: Record<string, unknown>;
          /** Durable Object migration metadata. */
          migrations?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Replace only the content of a Cloudflare Worker script without changing metadata. */
    "cloudflare_worker.put_worker_script_content": {
      input: {
        /**
         * The Cloudflare Worker script name.
         * @minLength 1
         */
        scriptName: string;
        /**
         * The multipart part name and file name for the Worker entry module.
         * @minLength 1
         * @default "main.js"
         */
        mainModuleName?: string;
        /** The raw Worker script content. */
        content: string;
        /**
         * The MIME type for the Worker entry module part.
         * @default "application/javascript+module"
         */
        contentType?: string;
      };
      output: {
        /** A Cloudflare Worker script summary. */
        script: {
          /** The Worker script name. */
          name?: string;
          /** The Worker script tag identifier. */
          scriptTag?: string;
          /** The script creation timestamp. */
          createdOn?: string;
          /** The last script update timestamp. */
          modifiedOn?: string;
          /** The compatibility date. */
          compatibilityDate?: string;
          /** The compatibility flags. */
          compatibilityFlags?: Array<string>;
          /** The entrypoint module. */
          entrypoint?: string;
          /** The Worker handlers. */
          handlers?: Array<string>;
          /** The Worker usage model. */
          usageModel?: string;
          /** The placement mode. */
          placementMode?: string;
          /** Whether logpush is enabled. */
          logpush?: boolean;
          /** The environment name. */
          environmentName?: string;
          /** Whether the environment is the default environment. */
          environmentIsDefault?: boolean;
          /** The Worker service name. */
          serviceName?: string;
          /** The Worker tags. */
          tags?: Array<string>;
          /** A free-form object accepted by the Cloudflare API. */
          observability?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Add or replace a secret_text binding on a Cloudflare Worker script. */
    "cloudflare_worker.put_worker_script_secret": {
      input: {
        /**
         * The Cloudflare Worker script name.
         * @minLength 1
         */
        scriptName: string;
        /**
         * The Cloudflare Worker secret name.
         * @minLength 1
         */
        name: string;
        /** The secret text value. */
        text: string;
        /** The Worker secret binding type. */
        type?: "secret_text";
      };
      output: {
        /** A Cloudflare Worker secret binding. */
        secret: {
          /** The secret binding name. */
          name: string;
          /** The secret binding type. */
          type?: string;
          text?: string | null;
          /** The key algorithm for key secrets. */
          algorithm?: string;
          /** The key format for key secrets. */
          format?: string;
          /** The public key for key secrets. */
          publicKey?: string;
          /** The initialization vector for key secrets. */
          iv?: string;
        };
      };
    };
    /** Search Worker scripts in a Cloudflare account by name or script tag. */
    "cloudflare_worker.search_worker_scripts": {
      input: {
        /**
         * Search by exact Worker script tag.
         * @minLength 1
         */
        id?: string;
        /**
         * Search by Worker script name.
         * @minLength 1
         */
        name?: string;
        /** The search sort field. */
        orderBy?: "created_on" | "modified_on" | "name";
        /**
         * The result page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The page size.
         * @exclusiveMinimum 0
         */
        perPage?: number;
      };
      output: {
        /** The matching Worker scripts. */
        scripts: Array<{
          /** The Worker script name. */
          name?: string;
          /** The Worker script tag identifier. */
          scriptTag?: string;
          /** The script creation timestamp. */
          createdOn?: string;
          /** The last script update timestamp. */
          modifiedOn?: string;
          /** The compatibility date. */
          compatibilityDate?: string;
          /** The compatibility flags. */
          compatibilityFlags?: Array<string>;
          /** The entrypoint module. */
          entrypoint?: string;
          /** The Worker handlers. */
          handlers?: Array<string>;
          /** The Worker usage model. */
          usageModel?: string;
          /** The placement mode. */
          placementMode?: string;
          /** Whether logpush is enabled. */
          logpush?: boolean;
          /** The environment name. */
          environmentName?: string;
          /** Whether the environment is the default environment. */
          environmentIsDefault?: boolean;
          /** The Worker service name. */
          serviceName?: string;
          /** The Worker tags. */
          tags?: Array<string>;
          /** Worker observability configuration. */
          observability?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Cloudflare pagination metadata. */
        resultInfo?: {
          /** The current page number. */
          page?: number;
          /** The page size. */
          perPage?: number;
          /** The number of items in the current page. */
          count?: number;
          /** The total number of matching items. */
          totalCount?: number;
          /** The total number of pages. */
          totalPages?: number;
        };
      };
    };
    /** Replace a Cloudflare Worker using the Workers beta API, setting omitted fields to API defaults. */
    "cloudflare_worker.update_worker": {
      input: {
        /**
         * The Cloudflare Worker ID.
         * @minLength 1
         */
        workerId: string;
        /**
         * The Worker name.
         * @minLength 1
         */
        name: string;
        /** Whether logpush should be enabled for the Worker. */
        logpush?: boolean;
        /** A free-form object accepted by the Cloudflare API. */
        observability?: Record<string, unknown>;
        /** A free-form object accepted by the Cloudflare API. */
        subdomain?: Record<string, unknown>;
        /** Tags to set on the Worker. */
        tags?: Array<string>;
        /** Tail consumer definitions to set on the Worker. */
        tailConsumers?: Array<Record<string, unknown>>;
      };
      output: {
        /** A Cloudflare Worker managed by the Workers beta API. */
        worker: {
          /** The immutable Worker ID. */
          id: string;
          /** The Worker name. */
          name: string;
          /** The Worker creation timestamp. */
          createdOn?: string;
          /** The last Worker update timestamp. */
          updatedOn?: string;
          /** The latest deployment timestamp, or null when undeployed. */
          deployedOn?: string | null;
          /** Whether logpush is enabled for the Worker. */
          logpush?: boolean;
          /** A free-form object accepted by the Cloudflare API. */
          observability?: Record<string, unknown>;
          /** A free-form object accepted by the Cloudflare API. */
          references?: Record<string, unknown>;
          /** A free-form object accepted by the Cloudflare API. */
          subdomain?: Record<string, unknown>;
          /** Tags associated with the Worker. */
          tags?: Array<string>;
          /** Other Workers that should consume logs from the Worker. */
          tailConsumers?: Array<Record<string, unknown>>;
        };
      };
    };
    /** Create or replace a Cloudflare Worker script by uploading a module bundle as multipart/form-data. */
    "cloudflare_worker.upload_worker_script": {
      input: {
        /**
         * The Cloudflare Worker script name.
         * @minLength 1
         */
        scriptName: string;
        /**
         * The multipart part name and file name for the Worker entry module.
         * @minLength 1
         * @default "main.js"
         */
        mainModuleName?: string;
        /** The source content for the Worker entry module. */
        mainModuleContent: string;
        /**
         * The MIME type for the Worker entry module part.
         * @default "application/javascript+module"
         */
        mainModuleContentType?: string;
        /** Require inherited bindings to resolve against the previous Worker version. */
        bindingsInherit?: "strict";
        /** Additional module files to upload with the Worker script. */
        modules?: Array<{
          /**
           * The multipart part name and file name for this Worker module.
           * @minLength 1
           */
          name: string;
          /** The source content for this Worker module. */
          content: string;
          /** The MIME type for this Worker module part. */
          contentType?: string;
        }>;
        /** Bindings to expose in the Worker. */
        bindings?: Array<Record<string, unknown>>;
        /** The compatibility date. */
        compatibilityDate?: string;
        /** The compatibility flags. */
        compatibilityFlags?: Array<string>;
        /** Whether logpush should be enabled for the Worker. */
        logpush?: boolean;
        /** A free-form object accepted by the Cloudflare API. */
        placement?: Record<string, unknown>;
        /** Tags to attach to the Worker. */
        tags?: Array<string>;
        /** Tail consumer definitions. */
        tailConsumers?: Array<Record<string, unknown>>;
        /** Durable Object migrations to apply. */
        migrations?: Array<Record<string, unknown>>;
        /** A free-form object accepted by the Cloudflare API. */
        annotations?: Record<string, unknown>;
        /** A free-form object accepted by the Cloudflare API. */
        assets?: Record<string, unknown>;
        /** Whether to retain assets from the previously uploaded Worker version. */
        keepAssets?: boolean;
      };
      output: {
        /** A Cloudflare Worker script summary. */
        script: {
          /** The Worker script name. */
          name?: string;
          /** The Worker script tag identifier. */
          scriptTag?: string;
          /** The script creation timestamp. */
          createdOn?: string;
          /** The last script update timestamp. */
          modifiedOn?: string;
          /** The compatibility date. */
          compatibilityDate?: string;
          /** The compatibility flags. */
          compatibilityFlags?: Array<string>;
          /** The entrypoint module. */
          entrypoint?: string;
          /** The Worker handlers. */
          handlers?: Array<string>;
          /** The Worker usage model. */
          usageModel?: string;
          /** The placement mode. */
          placementMode?: string;
          /** Whether logpush is enabled. */
          logpush?: boolean;
          /** The environment name. */
          environmentName?: string;
          /** Whether the environment is the default environment. */
          environmentIsDefault?: boolean;
          /** The Worker service name. */
          serviceName?: string;
          /** The Worker tags. */
          tags?: Array<string>;
          /** A free-form object accepted by the Cloudflare API. */
          observability?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
  }
}
