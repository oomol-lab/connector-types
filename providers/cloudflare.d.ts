import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Attach a custom domain from a Cloudflare zone to an R2 bucket. */
    "cloudflare.add_custom_domain": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /**
         * The custom domain name.
         * @minLength 1
         */
        domain: string;
        /**
         * The Cloudflare zone ID that owns the domain.
         * @minLength 1
         */
        zoneId: string;
        /** Whether to enable public bucket access at the custom domain. Defaults to true. */
        enabled?: boolean;
        /** The minimum TLS version accepted for incoming connections. */
        minTLS?: "1.0" | "1.1" | "1.2" | "1.3";
        /** An allowlist of TLS ciphers in BoringSSL format. */
        ciphers?: Array<string>;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** A custom domain attached to an R2 bucket. */
        domain: {
          /** The custom domain name. */
          domain: string;
          /** Whether the bucket is publicly accessible at this custom domain. */
          enabled: boolean;
          /** The Cloudflare zone ID the domain resides in. */
          zoneId?: string;
          /** The Cloudflare zone name the domain resides in. */
          zoneName?: string;
          /** The minimum TLS version accepted for incoming connections. */
          minTLS?: "1.0" | "1.1" | "1.2" | "1.3";
          /** An allowlist of TLS ciphers in BoringSSL format. */
          ciphers?: Array<string>;
          /** The provisioning status of the custom domain. */
          status?: {
            /** The domain ownership status. */
            ownership: string;
            /** The SSL certificate status. */
            ssl: string;
          };
        };
      };
    };
    /** Attach a custom domain to a Worker service. */
    "cloudflare.attach_worker_domain": {
      input: {
        /** The account ID. Defaults to the connection account, or the only accessible account. */
        accountId?: string;
        /**
         * The zone ID.
         * @minLength 1
         */
        zoneId?: string;
        /**
         * The custom domain hostname.
         * @minLength 1
         */
        hostname: string;
        /**
         * The Worker service name.
         * @minLength 1
         */
        service: string;
        /**
         * The name of the zone containing the hostname.
         * @minLength 1
         */
        zoneName?: string;
        /** Whether the hostname routes to the Worker. */
        enabled?: boolean;
        /** Whether preview subdomains route to Worker previews. */
        previewsEnabled?: boolean;
      };
      output: {
        /** The Cloudflare resource, including additional upstream fields. */
        result: Record<string, unknown>;
      };
    };
    /** Cancel a queued or running Workers Builds job. */
    "cloudflare.cancel_build": {
      input: {
        /**
         * The Cloudflare account ID. Omit it when the connection uniquely identifies one account. Multi-account OAuth connections must pass an ID returned by list_accounts.
         * @minLength 1
         */
        accountId?: string;
        /**
         * The build UUID.
         * @format uuid
         */
        buildUuid: string;
      };
      output: {
        /**
         * The cancelled build UUID.
         * @format uuid
         */
        buildUuid: string;
        /** The build outcome returned after cancellation. */
        buildOutcome?: string;
        /** The build stop timestamp. */
        stoppedOn?: string | null;
      };
    };
    /** Create an R2 bucket in a Cloudflare account. */
    "cloudflare.create_bucket": {
      input: {
        /**
         * The bucket name to create.
         * @minLength 3
         * @maxLength 64
         */
        name: string;
        /** The location hint for the new bucket. */
        locationHint?: "apac" | "eeur" | "enam" | "weur" | "wnam" | "oc";
        /** The default storage class for newly uploaded objects. */
        storageClass?: "Standard" | "InfrequentAccess";
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** A Cloudflare R2 bucket. */
        bucket: {
          /** The bucket name. */
          name: string;
          /** The bucket creation timestamp. */
          creationDate?: string;
          /** The bucket location. */
          location?: "apac" | "eeur" | "enam" | "weur" | "wnam" | "oc";
          /** The bucket jurisdiction. */
          jurisdiction?: "default" | "eu" | "fedramp" | "us";
          /** The bucket default storage class. */
          storageClass?: "Standard" | "InfrequentAccess";
        };
      };
    };
    /** Create a D1 database. */
    "cloudflare.create_d1_database": {
      input: {
        /**
         * The D1 database name.
         * @minLength 1
         */
        name: string;
        /** The required data jurisdiction. */
        jurisdiction?: "eu" | "fedramp" | "us";
        /** The preferred primary region when no jurisdiction is supplied. */
        primaryLocationHint?: "wnam" | "enam" | "weur" | "eeur" | "apac" | "oc";
        /** The D1 read replication mode. */
        replicationMode?: "auto" | "disabled";
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** The Cloudflare resource, including additional upstream fields. */
        result: Record<string, unknown>;
      };
    };
    /** Create a DNS record inside a Cloudflare zone. */
    "cloudflare.create_dns_record": {
      input: {
        /**
         * The Cloudflare zone ID.
         * @minLength 1
         */
        zoneId: string;
        /** The DNS record type. */
        type: "A" | "AAAA" | "CAA" | "CERT" | "CNAME" | "DNSKEY" | "DS" | "HTTPS" | "LOC" | "MX" | "NAPTR" | "NS" | "OPENPGPKEY" | "PTR" | "SMIMEA" | "SRV" | "SSHFP" | "SVCB" | "TLSA" | "TXT" | "URI";
        /**
         * The DNS record name.
         * @minLength 1
         */
        name: string;
        /** The DNS record content. */
        content?: string;
        /** Structured record data for advanced record types. */
        data?: Record<string, unknown>;
        /**
         * The DNS TTL in seconds. Use 1 for automatic TTL.
         * @minimum 1
         */
        ttl?: number;
        /** Whether Cloudflare proxying should be enabled. */
        proxied?: boolean;
        /** The DNS record priority. */
        priority?: number;
        /** The DNS record comment. */
        comment?: string;
        /** The DNS record tags. */
        tags?: Array<string>;
        /** Cloudflare DNS record settings. */
        settings?: Record<string, unknown>;
      };
      output: {
        /** A Cloudflare DNS record. */
        record: {
          /** The DNS record ID. */
          id: string;
          /** The parent zone ID. */
          zoneId?: string;
          /** The parent zone name. */
          zoneName?: string;
          /** The DNS record type. */
          type: string;
          /** The record name. */
          name: string;
          /** The record content. */
          content?: string | null;
          /** The DNS TTL in seconds. */
          ttl?: number;
          /** Whether Cloudflare proxying is enabled. */
          proxied?: boolean;
          /** Whether the record can be proxied. */
          proxiable?: boolean;
          /** The record priority. */
          priority?: number;
          /** The record comment. */
          comment?: string | null;
          /** The record tags. */
          tags?: Array<string>;
          /** The record creation timestamp. */
          createdOn?: string;
          /** The last record update timestamp. */
          modifiedOn?: string;
          /** The comment update timestamp. */
          commentModifiedOn?: string;
          /** The tag update timestamp. */
          tagsModifiedOn?: string;
          /** Structured record data for advanced record types. */
          data?: Record<string, unknown>;
          /** Cloudflare record metadata. */
          meta?: Record<string, unknown>;
          /** Cloudflare record settings. */
          settings?: Record<string, unknown>;
        };
      };
    };
    /** Add event notification rules that send R2 bucket events to a Cloudflare Queue. */
    "cloudflare.create_event_notification_rules": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /**
         * The Cloudflare Queue ID.
         * @minLength 1
         */
        queueId: string;
        /**
         * The rules to add.
         * @minItems 1
         */
        rules: Array<{
          /**
           * The object actions that trigger notifications.
           * @minItems 1
           */
          actions: Array<"PutObject" | "CopyObject" | "DeleteObject" | "CompleteMultipartUpload" | "LifecycleDeletion">;
          /** A description that identifies the rule. */
          description?: string;
          /** Only send notifications for objects with this key prefix. */
          prefix?: string;
          /** Only send notifications for objects with this key suffix. */
          suffix?: string;
        }>;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** The bucket the rules were added to. */
        bucketName: string;
        /** The queue the rules send events to. */
        queueId: string;
        /** Whether the create request succeeded. */
        created: boolean;
      };
    };
    /** Create a Workers KV namespace for application data. */
    "cloudflare.create_kv_namespace": {
      input: {
        /** The account ID. Defaults to the connection account, or the only accessible account. */
        accountId?: string;
        /**
         * The namespace title.
         * @minLength 1
         */
        title: string;
        /** The namespace data jurisdiction. */
        jurisdiction?: "eu" | "fedramp" | "us";
        /** The namespace mode. Instant requires Cloudflare access to the feature. */
        mode?: "instant";
      };
      output: {
        /** The Cloudflare resource, including additional upstream fields. */
        result: Record<string, unknown>;
      };
    };
    /** Start a Workers Builds job from a configured trigger and branch or commit. */
    "cloudflare.create_manual_build": {
      input: {
        /**
         * The Cloudflare account ID. Omit it when the connection uniquely identifies one account. Multi-account OAuth connections must pass an ID returned by list_accounts.
         * @minLength 1
         */
        accountId?: string;
        /**
         * The build trigger UUID.
         * @format uuid
         */
        triggerUuid: string;
        /**
         * The Git branch to build.
         * @minLength 1
         */
        branch?: string;
        /**
         * The Git commit hash to build.
         * @minLength 1
         */
        commitHash?: string;
      };
      output: {
        /**
         * The queued build UUID.
         * @format uuid
         */
        buildUuid: string;
        /** The build creation timestamp. */
        createdOn?: string;
      };
    };
    /** Attach a custom domain to a Pages project. Inspect its validation status and configure the required DNS records separately. */
    "cloudflare.create_pages_domain": {
      input: {
        /** The account ID. Defaults to the connection account, or the only accessible account. */
        accountId?: string;
        /**
         * The Pages project name.
         * @minLength 1
         */
        projectName: string;
        /**
         * The custom domain hostname.
         * @minLength 1
         */
        domainName: string;
      };
      output: {
        /** The Cloudflare resource, including additional upstream fields. */
        result: Record<string, unknown>;
      };
    };
    /** Create a Pages project. Omit source for Direct Upload; use official project configuration fields for Git integration and Functions bindings. */
    "cloudflare.create_pages_project": {
      input: {
        /** The account ID. Defaults to the connection account, or the only accessible account. */
        accountId?: string;
        /**
         * The Pages project name.
         * @minLength 1
         */
        projectName: string;
        /**
         * The production branch. Defaults to main.
         * @minLength 1
         */
        productionBranch?: string;
        /** Additional official Pages project fields, such as source, build_config, and deployment_configs. Name and production branch use the dedicated inputs. */
        configuration?: Record<string, unknown>;
      };
      output: {
        /** The Cloudflare resource, including additional upstream fields. */
        result: Record<string, unknown>;
      };
    };
    /** Create a Cloudflare Email Routing rule in a zone. Forward actions require verified destination addresses. */
    "cloudflare.create_routing_rule": {
      input: {
        /**
         * The Cloudflare zone ID.
         * @minLength 1
         */
        zoneId: string;
        /**
         * Actions applied to matching email.
         * @minItems 1
         */
        actions: Array<{
          /** The action type. */
          type: "drop" | "forward" | "worker";
          /**
           * Destination email addresses or Worker names used by the action.
           * @minItems 1
           */
          value?: Array<string>;
        }>;
        /**
         * Conditions matching incoming email.
         * @minItems 1
         */
        matchers: Array<{
          /** The matcher type. */
          type: "all" | "literal";
          /** The email field to match. */
          field?: "to";
          /**
           * The literal email address to match.
           * @maxLength 90
           */
          value?: string;
        }>;
        /** Whether the rule is enabled. */
        enabled?: boolean;
        /**
         * The rule name.
         * @maxLength 256
         */
        name?: string;
        /**
         * The rule priority.
         * @minimum 0
         */
        priority?: number;
        /** Who manages the rule. */
        source?: "api" | "wrangler";
        /**
         * The public script tag required when source is wrangler.
         * @maxLength 32
         */
        ownerWorkerTag?: string;
      };
      output: {
        /** A Cloudflare Email Routing rule. */
        rule: {
          /** The routing rule ID. */
          id: string;
          /** Actions applied to matching email. */
          actions?: Array<{
            /** The action type. */
            type: "drop" | "forward" | "worker";
            /**
             * Destination email addresses or Worker names used by the action.
             * @minItems 1
             */
            value?: Array<string>;
          }>;
          /** Whether the rule is enabled. */
          enabled?: boolean;
          /** Conditions matching incoming email. */
          matchers?: Array<{
            /** The matcher type. */
            type: "all" | "literal";
            /** The email field to match. */
            field?: "to";
            /**
             * The literal email address to match.
             * @maxLength 90
             */
            value?: string;
          }>;
          /** The rule name. */
          name?: string;
          /**
           * The rule priority.
           * @minimum 0
           */
          priority?: number;
          /** Who manages the rule. */
          source?: "api" | "wrangler";
          /**
           * The public script tag of the Worker that owns a Wrangler-managed rule.
           * @maxLength 32
           */
          ownerWorkerTag?: string;
          /** Zone information returned for account rule listings. */
          zone?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Create short-lived S3-compatible credentials scoped to one R2 bucket and optionally to prefixes or objects. */
    "cloudflare.create_temporary_access_credentials": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /** The permissions granted to the temporary credentials. */
        permission: "admin-read-write" | "admin-read-only" | "object-read-write" | "object-read-only";
        /**
         * How long the credentials stay valid, in seconds. Defaults to 900.
         * @minimum 1
         * @maximum 604800
         */
        ttlSeconds?: number;
        /**
         * The Access Key ID of the R2 API token used to sign the credentials. Defaults to the connected API token.
         * @minLength 1
         */
        parentAccessKeyId?: string;
        /** Key prefixes the credentials are limited to. */
        prefixes?: Array<string>;
        /** Object keys the credentials are limited to. */
        objects?: Array<string>;
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** The temporary Access Key ID. */
        accessKeyId: string;
        /** The temporary Secret Access Key. */
        secretAccessKey: string;
        /** The session token that must accompany the credentials. */
        sessionToken: string;
        /**
         * A local estimate of when the credentials expire, computed from the request time plus ttlSeconds. Cloudflare starts the TTL when it issues the credentials, so the real expiry is slightly later, and revoking the parent token expires them early.
         * @format date-time
         */
        estimatedExpiresAt: string;
      };
    };
    /** Create a Cloudflare Worker using the Workers beta API. */
    "cloudflare.create_worker": {
      input: {
        /**
         * The Cloudflare account ID. Omit it when the connection uniquely identifies one account. Multi-account OAuth connections must pass an ID returned by list_accounts.
         * @minLength 1
         */
        accountId?: string;
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
    /** Attach a Worker to a zone route pattern, or create an exclusion route by omitting scriptName. */
    "cloudflare.create_worker_route": {
      input: {
        /**
         * The zone ID.
         * @minLength 1
         */
        zoneId: string;
        /**
         * The route pattern, such as example.com/api/*.
         * @minLength 1
         */
        pattern: string;
        /** The Worker script name. Omit to exclude the pattern from Workers. */
        scriptName?: string;
      };
      output: {
        /** The Cloudflare resource, including additional upstream fields. */
        result: Record<string, unknown>;
      };
    };
    /** Create a Cloudflare zone and return its assigned nameservers. Registrar nameserver changes are a separate step. */
    "cloudflare.create_zone": {
      input: {
        /** The account ID. Defaults to the connection account, or the only accessible account. */
        accountId?: string;
        /**
         * The domain name.
         * @minLength 1
         */
        name: string;
        /** The zone setup type. */
        type?: "full" | "partial" | "secondary" | "internal";
        /** Whether Cloudflare should attempt to scan existing DNS records. */
        jumpStart?: boolean;
      };
      output: {
        /** The Cloudflare resource, including additional upstream fields. */
        result: Record<string, unknown>;
      };
    };
    /** Delete an R2 bucket by name. */
    "cloudflare.delete_bucket": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** The deleted bucket name. */
        bucketName: string;
        /** Whether the bucket delete request succeeded. */
        deleted: boolean;
      };
    };
    /** Delete the bucket-level CORS policy for an R2 bucket. */
    "cloudflare.delete_bucket_cors_policy": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** The bucket whose CORS policy was removed. */
        bucketName: string;
        /** Whether the delete request succeeded. */
        deleted: boolean;
      };
    };
    /** Detach a custom domain from an R2 bucket. */
    "cloudflare.delete_custom_domain": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /**
         * The custom domain name.
         * @minLength 1
         */
        domain: string;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** The detached custom domain name. */
        domain: string;
        /** Whether the detach request succeeded. */
        deleted: boolean;
      };
    };
    /** Delete a D1 database. */
    "cloudflare.delete_d1_database": {
      input: {
        /**
         * The D1 database ID.
         * @minLength 1
         */
        databaseId: string;
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** The Cloudflare resource, including additional upstream fields. */
        result: Record<string, unknown>;
      };
    };
    /** Delete one DNS record from a Cloudflare zone. */
    "cloudflare.delete_dns_record": {
      input: {
        /**
         * The Cloudflare zone ID.
         * @minLength 1
         */
        zoneId: string;
        /**
         * The Cloudflare DNS record ID.
         * @minLength 1
         */
        dnsRecordId: string;
      };
      output: {
        /** The deleted DNS record ID. */
        id: string;
        /** Whether the delete request succeeded. */
        deleted: boolean;
      };
    };
    /** Delete event notification rules bound to one queue. Deletes every rule for the queue when ruleIds is omitted. */
    "cloudflare.delete_event_notification_rules": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /**
         * The Cloudflare Queue ID.
         * @minLength 1
         */
        queueId: string;
        /**
         * The rule IDs to delete. Omit to delete every rule for the queue.
         * @minItems 1
         */
        ruleIds?: Array<string>;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** The bucket the rules were removed from. */
        bucketName: string;
        /** The queue whose rules were removed. */
        queueId: string;
        /** Whether the delete request succeeded. */
        deleted: boolean;
      };
    };
    /** Delete a Workers KV namespace and all its keys. */
    "cloudflare.delete_kv_namespace": {
      input: {
        /** The account ID. Defaults to the connection account, or the only accessible account. */
        accountId?: string;
        /**
         * The KV namespace ID.
         * @minLength 1
         */
        namespaceId: string;
      };
      output: {
        /** The Cloudflare resource, including additional upstream fields. */
        result: Record<string, unknown>;
      };
    };
    /** Delete one key from a Workers KV namespace. */
    "cloudflare.delete_kv_value": {
      input: {
        /** The account ID. Defaults to the connection account, or the only accessible account. */
        accountId?: string;
        /**
         * The KV namespace ID.
         * @minLength 1
         */
        namespaceId: string;
        /**
         * The KV key name.
         * @minLength 1
         */
        key: string;
      };
      output: {
        /** The Cloudflare resource, including additional upstream fields. */
        result: Record<string, unknown>;
      };
    };
    /** Delete one R2 object by key. */
    "cloudflare.delete_object": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /**
         * The complete R2 object key. Slashes are preserved as key delimiters.
         * @minLength 1
         */
        objectKey: string;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** The bucket the object was deleted from. */
        bucketName: string;
        /** The deleted object key. */
        objectKey: string;
        /** Whether the delete request succeeded. */
        deleted: boolean;
      };
    };
    /** Delete a list of R2 objects by key in one request. */
    "cloudflare.delete_objects": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /**
         * The object keys to delete.
         * @minItems 1
         */
        objectKeys: Array<string>;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** The bucket the objects were deleted from. */
        bucketName: string;
        /** Per-key delete results returned by R2, including any per-key error details. */
        results: Array<{
          /** The object key. */
          key?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Start a background job that deletes every object under a key prefix, or empties the whole bucket. */
    "cloudflare.delete_objects_by_prefix": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /**
         * The key prefix to delete. Must end with a slash. Omit and set emptyBucket to delete everything.
         * @minLength 1
         */
        prefix?: string;
        /** Set to true to delete every object in the bucket instead of a prefix. */
        emptyBucket?: boolean;
        /** Reject the job when R2 Data Catalog is enabled for the bucket. */
        rejectWhenDataCatalogEnabled?: boolean;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** The job identifier used to poll the job. */
        jobId: string;
        /** The job kind, currently always prefixDelete. */
        jobType: string;
        /** The job lifecycle status. */
        status: "ENQUEUED" | "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED";
        /** When the job was created. */
        startTime?: string;
        /** When the job finished. Absent while the job is still enqueued or running. */
        endTime?: string;
        /** The key prefix matched by the job. An empty string means the entire bucket. */
        prefix?: string;
        /** The number of objects deleted by the job so far. */
        deletedObjects?: number;
        /** Whether the job was created to clear the entire bucket. */
        isBucketClear?: boolean;
      };
    };
    /** Delete a Pages deployment. */
    "cloudflare.delete_pages_deployment": {
      input: {
        /** The account ID. Defaults to the connection account, or the only accessible account. */
        accountId?: string;
        /**
         * The Pages project name.
         * @minLength 1
         */
        projectName: string;
        /**
         * The Pages deployment ID.
         * @minLength 1
         */
        deploymentId: string;
        /** Whether to force deletion of an aliased deployment. */
        force?: boolean;
      };
      output: {
        /** The Cloudflare resource, including additional upstream fields. */
        result: Record<string, unknown>;
      };
    };
    /** Detach a Pages custom domain. */
    "cloudflare.delete_pages_domain": {
      input: {
        /** The account ID. Defaults to the connection account, or the only accessible account. */
        accountId?: string;
        /**
         * The Pages project name.
         * @minLength 1
         */
        projectName: string;
        /**
         * The custom domain hostname.
         * @minLength 1
         */
        domainName: string;
      };
      output: {
        /** The Cloudflare resource, including additional upstream fields. */
        result: Record<string, unknown>;
      };
    };
    /** Delete a Pages project. */
    "cloudflare.delete_pages_project": {
      input: {
        /** The account ID. Defaults to the connection account, or the only accessible account. */
        accountId?: string;
        /**
         * The Pages project name.
         * @minLength 1
         */
        projectName: string;
      };
      output: {
        /** The Cloudflare resource, including additional upstream fields. */
        result: Record<string, unknown>;
      };
    };
    /** Delete a Cloudflare Email Routing rule from a zone. */
    "cloudflare.delete_routing_rule": {
      input: {
        /**
         * The Cloudflare zone ID.
         * @minLength 1
         */
        zoneId: string;
        /**
         * The Cloudflare routing rule ID.
         * @minLength 1
         */
        ruleId: string;
      };
      output: {
        /**
         * The Cloudflare routing rule ID.
         * @minLength 1
         */
        id: string;
        /** Whether the rule was deleted. */
        deleted: true;
      };
    };
    /** Delete a Cloudflare Worker and its associated resources using the Workers beta API. */
    "cloudflare.delete_worker": {
      input: {
        /**
         * The Cloudflare account ID. Omit it when the connection uniquely identifies one account. Multi-account OAuth connections must pass an ID returned by list_accounts.
         * @minLength 1
         */
        accountId?: string;
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
    /** Detach a Worker custom domain. */
    "cloudflare.delete_worker_domain": {
      input: {
        /** The account ID. Defaults to the connection account, or the only accessible account. */
        accountId?: string;
        /**
         * The Worker custom domain ID.
         * @minLength 1
         */
        domainId: string;
      };
      output: {
        /** The Cloudflare resource, including additional upstream fields. */
        result: Record<string, unknown>;
      };
    };
    /** Delete a Worker route from a zone. */
    "cloudflare.delete_worker_route": {
      input: {
        /**
         * The zone ID.
         * @minLength 1
         */
        zoneId: string;
        /**
         * The Worker route ID.
         * @minLength 1
         */
        routeId: string;
      };
      output: {
        /** The Cloudflare resource, including additional upstream fields. */
        result: Record<string, unknown>;
      };
    };
    /** Delete a Cloudflare Worker script. */
    "cloudflare.delete_worker_script": {
      input: {
        /**
         * The Cloudflare account ID. Omit it when the connection uniquely identifies one account. Multi-account OAuth connections must pass an ID returned by list_accounts.
         * @minLength 1
         */
        accountId?: string;
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
    "cloudflare.delete_worker_script_secret": {
      input: {
        /**
         * The Cloudflare account ID. Omit it when the connection uniquely identifies one account. Multi-account OAuth connections must pass an ID returned by list_accounts.
         * @minLength 1
         */
        accountId?: string;
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
    /** Deploy a prebuilt Pages site from a public ZIP URL. The archive root is the site root. Uploads assets in batches and submits the deployment; use get_pages_deployment to wait for completion. Connector limits: 512 MiB compressed and expanded, 20,000 files, 25 MiB per file. Include compiled _worker.js or _worker.bundle for Pages Functions. */
    "cloudflare.deploy_pages_site": {
      input: {
        /** The account ID. Defaults to the connection account, or the only accessible account. */
        accountId?: string;
        /**
         * The Pages project name.
         * @minLength 1
         */
        projectName: string;
        /**
         * The public URL of the prebuilt ZIP archive.
         * @format uri
         */
        archiveUrl: string;
        /** The target branch. Defaults to the project's production branch. */
        branch?: string;
        /** The associated commit hash. */
        commitHash?: string;
        /** The deployment commit message. */
        commitMessage?: string;
        /** Whether the source has uncommitted changes. */
        commitDirty?: boolean;
      };
      output: {
        /** The deployment account ID. */
        accountId: string;
        /**
         * The Pages project name.
         * @minLength 1
         */
        projectName: string;
        /**
         * The Pages deployment ID.
         * @minLength 1
         */
        deploymentId: string;
        /** The latest deployment stage status. */
        state: string;
        /** The deployment URL. */
        url: string;
        /** The Cloudflare resource, including additional upstream fields. */
        deployment: Record<string, unknown>;
      };
    };
    /** Disable Sippy on an R2 bucket. */
    "cloudflare.disable_sippy": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** The bucket Sippy was disabled on. */
        bucketName: string;
        /** The Sippy state after the request, always false. */
        enabled: boolean;
      };
    };
    /** Download one R2 object and upload it to connector transit storage. */
    "cloudflare.download_object": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /**
         * The exact R2 object key, including path separators.
         * @minLength 1
         */
        objectKey: string;
        /**
         * The filename used for the transit file.
         * @minLength 1
         */
        fileName?: string;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /**
         * The R2 object key.
         * @minLength 1
         */
        fileId: string;
        /**
         * The transit file name.
         * @minLength 1
         */
        name: string;
        /**
         * The downloaded object MIME type.
         * @minLength 1
         */
        mimeType: string;
        /**
         * The object size, or null when unavailable.
         * @minimum 0
         */
        sizeBytes: number | null;
        /**
         * The temporary transit URL for downloading the object.
         * @format uri
         */
        transitUrl: string;
      };
    };
    /** Partially update a Cloudflare Worker using the Workers beta API while leaving omitted fields unchanged. */
    "cloudflare.edit_worker": {
      input: {
        /**
         * The Cloudflare account ID. Omit it when the connection uniquely identifies one account. Multi-account OAuth connections must pass an ID returned by list_accounts.
         * @minLength 1
         */
        accountId?: string;
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
    /** Enable Sippy so that objects missing from the R2 bucket are copied on demand from a source bucket on AWS S3, Google Cloud Storage, an S3-compatible service, or Azure Blob Storage. */
    "cloudflare.enable_sippy": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /** The source bucket Sippy copies objects from. */
        source: {
          /** The source provider. */
          provider: "aws";
          /**
           * The AWS S3 bucket name.
           * @minLength 1
           */
          bucket: string;
          /**
           * The AWS region of the bucket.
           * @minLength 1
           */
          region: string;
          /**
           * The Access Key ID of an IAM credential scoped to the bucket.
           * @minLength 1
           */
          accessKeyId: string;
          /**
           * The Secret Access Key of the same IAM credential.
           * @minLength 1
           */
          secretAccessKey: string;
        } | {
          /** The source provider. */
          provider: "gcs";
          /**
           * The GCS bucket name.
           * @minLength 1
           */
          bucket: string;
          /**
           * The client email of a service account scoped to the bucket.
           * @minLength 1
           */
          clientEmail: string;
          /**
           * The private key of the same service account.
           * @minLength 1
           */
          privateKey: string;
        } | {
          /** The source provider. */
          provider: "s3";
          /**
           * The URL of the S3-compatible API endpoint for the bucket.
           * @format uri
           */
          bucketUrl: string;
          /**
           * The Access Key ID of a credential scoped to the bucket.
           * @minLength 1
           */
          accessKeyId: string;
          /**
           * The Secret Access Key of the same credential.
           * @minLength 1
           */
          secretAccessKey: string;
        } | {
          /** The source provider. */
          provider: "azure";
          /**
           * The Azure Storage account name.
           * @minLength 1
           */
          accountName: string;
          /**
           * The Azure Blob Storage container name.
           * @minLength 1
           */
          container: string;
          /**
           * The access key of the storage account.
           * @minLength 1
           */
          accountKey?: string;
          /**
           * A Shared Access Signature token for the storage account.
           * @minLength 1
           */
          sasToken?: string;
        };
        /** The R2 credentials Sippy uses to write objects into this bucket. Defaults to the connected API token when omitted. */
        destination?: {
          /**
           * The Access Key ID of an R2 API token scoped to this bucket.
           * @minLength 1
           */
          accessKeyId: string;
          /**
           * The Secret Access Key of the same R2 API token.
           * @minLength 1
           */
          secretAccessKey: string;
        };
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** Whether Sippy is enabled for the bucket. */
        enabled: boolean;
        /** The configured source bucket. */
        source?: {
          /** The source provider: aws, gcs, s3, or azure. */
          provider: string;
          /** The source bucket name for AWS and GCS. */
          bucket?: string | null;
          /** The S3-compatible endpoint URL for generic S3 sources. */
          bucketUrl?: string | null;
          /** The Azure Blob Storage container name. */
          container?: string | null;
          /** The AWS region of the source bucket. */
          region?: string | null;
        };
        /** The configured R2 destination. */
        destination?: {
          /** The destination provider, always r2. */
          provider: string;
          /** The Cloudflare account ID. */
          account?: string;
          /** The destination bucket name. */
          bucket?: string;
          /** The Access Key ID of the R2 API token Sippy writes with. */
          accessKeyId?: string;
        };
      };
    };
    /** Generate a pre-signed R2 URL for one GET, PUT, or HEAD request using a custom API token credential. */
    "cloudflare.generate_presigned_url": {
      input: {
        /**
         * The Cloudflare account ID.
         * @minLength 1
         */
        accountId?: string;
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /**
         * The complete R2 object key. Slashes are preserved as key delimiters.
         * @minLength 1
         */
        objectKey: string;
        /** The HTTP method that the signed URL should allow. */
        method?: "GET" | "PUT" | "HEAD";
        /**
         * How long the signed URL remains valid, in seconds.
         * @minimum 1
         * @maximum 604800
         */
        expiresSeconds?: number;
        /** The Content-Type required for a signed PUT request. */
        contentType?: string;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
      };
      output: {
        /** The bucket used to build the signed URL. */
        bucketName: string;
        /** The object key used to build the signed URL. */
        objectKey: string;
        /** The signed HTTP method. */
        method: string;
        /** The URL validity duration in seconds. */
        expiresSeconds: number;
        /**
         * The timestamp when the signed URL expires.
         * @format date-time
         */
        expiresAt: string;
        /** The generated pre-signed URL. */
        url: string;
        /** HTTP headers included in the signature that must be sent with the request. */
        requiredHeaders: Record<string, string>;
      };
    };
    /** Get object count and storage usage metrics across all R2 buckets in the account. Metrics may lag behind the latest data. */
    "cloudflare.get_account_metrics": {
      input: {
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** Metrics for one storage class, split by whether objects are uploaded or published. */
        standard?: {
          /** Object count and storage usage for one object state. */
          uploaded?: {
            /** The number of objects stored. */
            objects?: number;
            /** The storage used by object data, in bytes. */
            payloadSize?: number;
            /** The storage used by object metadata, in bytes. */
            metadataSize?: number;
          };
          /** Object count and storage usage for one object state. */
          published?: {
            /** The number of objects stored. */
            objects?: number;
            /** The storage used by object data, in bytes. */
            payloadSize?: number;
            /** The storage used by object metadata, in bytes. */
            metadataSize?: number;
          };
        };
        /** Metrics for one storage class, split by whether objects are uploaded or published. */
        infrequentAccess?: {
          /** Object count and storage usage for one object state. */
          uploaded?: {
            /** The number of objects stored. */
            objects?: number;
            /** The storage used by object data, in bytes. */
            payloadSize?: number;
            /** The storage used by object metadata, in bytes. */
            metadataSize?: number;
          };
          /** Object count and storage usage for one object state. */
          published?: {
            /** The number of objects stored. */
            objects?: number;
            /** The storage used by object data, in bytes. */
            payloadSize?: number;
            /** The storage used by object metadata, in bytes. */
            metadataSize?: number;
          };
        };
      };
    };
    /** Get one R2 bucket by name. */
    "cloudflare.get_bucket": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** A Cloudflare R2 bucket. */
        bucket: {
          /** The bucket name. */
          name: string;
          /** The bucket creation timestamp. */
          creationDate?: string;
          /** The bucket location. */
          location?: "apac" | "eeur" | "enam" | "weur" | "wnam" | "oc";
          /** The bucket jurisdiction. */
          jurisdiction?: "default" | "eu" | "fedramp" | "us";
          /** The bucket default storage class. */
          storageClass?: "Standard" | "InfrequentAccess";
        };
      };
    };
    /** Fetch the bucket-level CORS policy for an R2 bucket. */
    "cloudflare.get_bucket_cors_policy": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** The bucket CORS rules. */
        rules?: Array<{
          /** The allowed origins, methods, and headers for this CORS rule. */
          allowed: {
            /**
             * The methods allowed by this CORS rule.
             * @minItems 1
             */
            methods: Array<"GET" | "PUT" | "POST" | "DELETE" | "HEAD">;
            /**
             * The allowed origins for this CORS rule.
             * @minItems 1
             */
            origins: Array<string>;
            /** The allowed request headers for this CORS rule. */
            headers?: Array<string>;
          };
          /** The optional identifier for this CORS rule. */
          id?: string;
          /** The response headers exposed to browser clients. */
          exposeHeaders?: Array<string>;
          /**
           * The browser preflight cache duration in seconds.
           * @minimum 0
           */
          maxAgeSeconds?: number;
        }>;
      };
    };
    /** Get the current status of one R2 bucket background job. */
    "cloudflare.get_bucket_job": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /**
         * The job identifier returned when the job was submitted.
         * @minLength 1
         */
        jobId: string;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** The job identifier used to poll the job. */
        jobId: string;
        /** The job kind, currently always prefixDelete. */
        jobType: string;
        /** The job lifecycle status. */
        status: "ENQUEUED" | "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED";
        /** When the job was created. */
        startTime?: string;
        /** When the job finished. Absent while the job is still enqueued or running. */
        endTime?: string;
        /** The key prefix matched by the job. An empty string means the entire bucket. */
        prefix?: string;
        /** The number of objects deleted by the job so far. */
        deletedObjects?: number;
        /** Whether the job was created to clear the entire bucket. */
        isBucketClear?: boolean;
      };
    };
    /** Get the object lifecycle rules of an R2 bucket. */
    "cloudflare.get_bucket_lifecycle": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** The configured lifecycle rules. */
        rules: Array<{
          /**
           * The unique identifier of the rule.
           * @minLength 1
           */
          id: string;
          /** Whether the rule is in effect. */
          enabled: boolean;
          /** Conditions that apply to every transition of this rule. */
          conditions: {
            /** Only objects and uploads whose keys start with this prefix are affected. Use an empty prefix to match everything. */
            prefix: string;
          };
          /** Transition that deletes matching objects. */
          deleteObjectsTransition?: {
            /** The condition that triggers the transition. */
            condition: {
              /** The condition type. */
              type: "Age";
              /**
               * The object age in seconds after which the transition applies.
               * @minimum 0
               */
              maxAge: number;
            } | {
              /** The condition type. */
              type: "Date";
              /**
               * The date and time when the transition applies.
               * @format date-time
               */
              date: string;
            };
          };
          /** Transition that aborts ongoing multipart uploads. */
          abortMultipartUploadsTransition?: {
            /** Abort multipart uploads older than this age. */
            condition: {
              /** The condition type. */
              type: "Age";
              /**
               * The object age in seconds after which the transition applies.
               * @minimum 0
               */
              maxAge: number;
            };
          };
          /** Transitions that change the storage class of matching objects. */
          storageClassTransitions?: Array<{
            /** The condition that triggers the transition. */
            condition: {
              /** The condition type. */
              type: "Age";
              /**
               * The object age in seconds after which the transition applies.
               * @minimum 0
               */
              maxAge: number;
            } | {
              /** The condition type. */
              type: "Date";
              /**
               * The date and time when the transition applies.
               * @format date-time
               */
              date: string;
            };
            /** The target storage class. */
            storageClass: "InfrequentAccess";
          }>;
        }>;
      };
    };
    /** Get whether local uploads are enabled, which writes objects to the nearest region before replicating to the primary region. */
    "cloudflare.get_bucket_local_uploads": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** Whether local uploads are enabled for the bucket. */
        enabled: boolean;
      };
    };
    /** Get the object lock rules of an R2 bucket. */
    "cloudflare.get_bucket_lock": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** The configured lock rules. */
        rules: Array<{
          /**
           * The unique identifier of the rule.
           * @minLength 1
           */
          id: string;
          /** Whether the rule is in effect. */
          enabled: boolean;
          /** Only objects and uploads whose keys start with this prefix are affected. Use an empty prefix to match everything. */
          prefix?: string;
          /** The condition that defines the lock duration. */
          condition: {
            /** The condition type. */
            type: "Age";
            /**
             * The lock duration in seconds.
             * @minimum 0
             */
            maxAgeSeconds: number;
          } | {
            /** The condition type. */
            type: "Date";
            /**
             * The date and time until which objects stay locked.
             * @format date-time
             */
            date: string;
          } | {
            /** The condition type. */
            type: "Indefinite";
          };
        }>;
      };
    };
    /** Get the current status and outcome of one Workers Builds job. */
    "cloudflare.get_build": {
      input: {
        /**
         * The Cloudflare account ID. Omit it when the connection uniquely identifies one account. Multi-account OAuth connections must pass an ID returned by list_accounts.
         * @minLength 1
         */
        accountId?: string;
        /**
         * The build UUID.
         * @format uuid
         */
        buildUuid: string;
      };
      output: {
        /** A Cloudflare Workers Builds job. */
        build: {
          /**
           * The build UUID.
           * @format uuid
           */
          buildUuid: string;
          /** The normalized build lifecycle state. */
          state: "queued" | "initializing" | "running" | "succeeded" | "failed" | "stopped";
          /** The Cloudflare build status. */
          status?: "queued" | "initializing" | "running" | "stopped";
          /** The Cloudflare build outcome. */
          buildOutcome?: "success" | "fail" | "skipped" | "cancelled" | "terminated";
          /** The build creation timestamp. */
          createdOn?: string;
          /** The build initialization timestamp. */
          initializingOn?: string | null;
          /** The build start timestamp. */
          runningOn?: string | null;
          /** The build stop timestamp. */
          stoppedOn?: string | null;
          /** The last build update timestamp. */
          modifiedOn?: string;
          /** The source revision and build configuration that triggered a Workers Builds job. */
          triggerMetadata?: {
            /** The source revision author. */
            author?: string;
            /** The source branch name. */
            branch?: string;
            /** The build command used by the job. */
            buildCommand?: string;
            /** The deploy command used by the job. */
            deployCommand?: string;
            /** The build token name. */
            buildTokenName?: string;
            /**
             * The build token UUID.
             * @format uuid
             */
            buildTokenUuid?: string;
            /** The event source that triggered the build. */
            buildTriggerSource?: string;
            /** The source commit hash. */
            commitHash?: string;
            /** The source commit message. */
            commitMessage?: string;
            /** A free-form object accepted by the Cloudflare API. */
            environmentVariables?: Record<string, unknown>;
            /** The source provider account name. */
            providerAccountName?: string;
            /** The source repository provider type. */
            providerType?: string;
            /** The source repository name. */
            repoName?: string;
            /** The repository directory where the build ran. */
            rootDirectory?: string;
          };
          /** A Cloudflare Workers Builds trigger. */
          trigger?: {
            /**
             * The build trigger UUID.
             * @format uuid
             */
            triggerUuid: string;
            /** The build trigger name. */
            triggerName?: string;
            /** The immutable Worker script tag. */
            externalScriptId?: string;
            /** The command that builds the Worker. */
            buildCommand?: string;
            /** The command that deploys the Worker. */
            deployCommand?: string;
            /** The repository directory where the build runs. */
            rootDirectory?: string;
            /** Branches that can trigger builds. */
            branchIncludes?: Array<string>;
            /** Branches excluded from builds. */
            branchExcludes?: Array<string>;
            /** Repository paths that can trigger builds. */
            pathIncludes?: Array<string>;
            /** Repository paths excluded from builds. */
            pathExcludes?: Array<string>;
            /** Whether build caching is enabled. */
            buildCachingEnabled?: boolean;
            /** The UUID of the build token used by this trigger. */
            buildTokenUuid?: string;
            /** The name of the build token used by this trigger. */
            buildTokenName?: string;
            /** The trigger creation timestamp. */
            createdOn?: string;
            /** The last trigger update timestamp. */
            modifiedOn?: string;
            /** The trigger deletion timestamp, or null when active. */
            deletedOn?: string | null;
            /** The source repository connected to a Workers Builds trigger. */
            repoConnection?: {
              /** The source provider account identifier. */
              providerAccountId?: string;
              /** The source provider account name. */
              providerAccountName?: string;
              /** The source repository provider type. */
              providerType?: string;
              /**
               * The repository connection UUID.
               * @format uuid
               */
              repoConnectionUuid?: string;
              /** The source repository identifier. */
              repoId?: string;
              /** The source repository name. */
              repoName?: string;
              /** The repository connection creation timestamp. */
              createdOn?: string;
              /** The repository connection modification timestamp. */
              modifiedOn?: string;
              /** The repository connection deletion timestamp, or null when active. */
              deletedOn?: string | null;
            };
          };
          /** The pull request that triggered a Workers Builds job. */
          pullRequest?: {
            /** The pull request creation timestamp. */
            createdOn?: string;
            /**
             * The pull request URL.
             * @format uri
             */
            pullRequestUrl?: string;
          };
        };
      };
    };
    /** Get one page of log lines for a Workers Builds job. */
    "cloudflare.get_build_logs": {
      input: {
        /**
         * The Cloudflare account ID. Omit it when the connection uniquely identifies one account. Multi-account OAuth connections must pass an ID returned by list_accounts.
         * @minLength 1
         */
        accountId?: string;
        /**
         * The build UUID.
         * @format uuid
         */
        buildUuid: string;
        /**
         * The cursor returned by the previous log page.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The build log lines. */
        lines: Array<{
          /** The log timestamp supplied by Cloudflare. */
          timestamp: number;
          /** The log message. */
          message: string;
        }>;
        /** The cursor for the next log page. */
        cursor?: string;
        /** Whether Cloudflare truncated the returned log page. */
        truncated?: boolean;
      };
    };
    /** Get the settings of one custom domain attached to an R2 bucket. */
    "cloudflare.get_custom_domain": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /**
         * The custom domain name.
         * @minLength 1
         */
        domain: string;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** A custom domain attached to an R2 bucket. */
        domain: {
          /** The custom domain name. */
          domain: string;
          /** Whether the bucket is publicly accessible at this custom domain. */
          enabled: boolean;
          /** The Cloudflare zone ID the domain resides in. */
          zoneId?: string;
          /** The Cloudflare zone name the domain resides in. */
          zoneName?: string;
          /** The minimum TLS version accepted for incoming connections. */
          minTLS?: "1.0" | "1.1" | "1.2" | "1.3";
          /** An allowlist of TLS ciphers in BoringSSL format. */
          ciphers?: Array<string>;
          /** The provisioning status of the custom domain. */
          status?: {
            /** The domain ownership status. */
            ownership: string;
            /** The SSL certificate status. */
            ssl: string;
          };
        };
      };
    };
    /** Read D1 database settings and metadata. */
    "cloudflare.get_d1_database": {
      input: {
        /**
         * The D1 database ID.
         * @minLength 1
         */
        databaseId: string;
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** The Cloudflare resource, including additional upstream fields. */
        result: Record<string, unknown>;
      };
    };
    /** Get one DNS record from a Cloudflare zone. */
    "cloudflare.get_dns_record": {
      input: {
        /**
         * The Cloudflare zone ID.
         * @minLength 1
         */
        zoneId: string;
        /**
         * The Cloudflare DNS record ID.
         * @minLength 1
         */
        dnsRecordId: string;
      };
      output: {
        /** A Cloudflare DNS record. */
        record: {
          /** The DNS record ID. */
          id: string;
          /** The parent zone ID. */
          zoneId?: string;
          /** The parent zone name. */
          zoneName?: string;
          /** The DNS record type. */
          type: string;
          /** The record name. */
          name: string;
          /** The record content. */
          content?: string | null;
          /** The DNS TTL in seconds. */
          ttl?: number;
          /** Whether Cloudflare proxying is enabled. */
          proxied?: boolean;
          /** Whether the record can be proxied. */
          proxiable?: boolean;
          /** The record priority. */
          priority?: number;
          /** The record comment. */
          comment?: string | null;
          /** The record tags. */
          tags?: Array<string>;
          /** The record creation timestamp. */
          createdOn?: string;
          /** The last record update timestamp. */
          modifiedOn?: string;
          /** The comment update timestamp. */
          commentModifiedOn?: string;
          /** The tag update timestamp. */
          tagsModifiedOn?: string;
          /** Structured record data for advanced record types. */
          data?: Record<string, unknown>;
          /** Cloudflare record metadata. */
          meta?: Record<string, unknown>;
          /** Cloudflare record settings. */
          settings?: Record<string, unknown>;
        };
      };
    };
    /** Get the event notification rules that send R2 bucket events to one queue. */
    "cloudflare.get_event_notification_rules": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /**
         * The Cloudflare Queue ID.
         * @minLength 1
         */
        queueId: string;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** The queue ID. */
        queueId: string;
        /** The queue name. */
        queueName?: string;
        /** The rules bound to the queue. */
        rules: Array<{
          /** The rule ID. */
          ruleId?: string;
          /** When the rule was created. */
          createdAt?: string;
          /** A description that identifies the rule. */
          description?: string;
          /** The object actions that trigger notifications. */
          actions: Array<"PutObject" | "CopyObject" | "DeleteObject" | "CompleteMultipartUpload" | "LifecycleDeletion">;
          /** Notifications are only sent for objects with this key prefix. */
          prefix?: string;
          /** Notifications are only sent for objects with this key suffix. */
          suffix?: string;
        }>;
      };
    };
    /** Render a URL or raw HTML with Cloudflare Browser Run and return the fully rendered HTML content. */
    "cloudflare.get_html_content": {
      input: {
        /**
         * The Cloudflare account ID. OAuth connections that can access multiple accounts must provide this value.
         * @minLength 1
         */
        accountId?: string;
        /**
         * The URL Cloudflare Browser Run should navigate to.
         * @minLength 1
         * @format uri
         */
        url?: string;
        /**
         * Raw HTML content Cloudflare Browser Run should render.
         * @minLength 1
         */
        html?: string;
        /**
         * The Cloudflare Browser Run cache TTL in seconds. Set to 0 to disable caching.
         * @minimum 0
         */
        cacheTtl?: number;
        /**
         * The maximum duration in milliseconds allowed for the browser action after page load.
         * @minimum 0
         */
        actionTimeout?: number;
        /** Whether Cloudflare should proceed when awaited events fail or timeout. */
        bestAttempt?: boolean;
        /** Puppeteer navigation options forwarded to Cloudflare Browser Run. */
        gotoOptions?: {
          /**
           * The Referer header value used for navigation.
           * @minLength 1
           */
          referer?: string;
          /**
           * The referrer policy used for navigation.
           * @minLength 1
           */
          referrerPolicy?: string;
          /**
           * The navigation timeout in milliseconds.
           * @minimum 0
           */
          timeout?: number;
          /** The page load event or events Cloudflare should wait for. */
          waitUntil?: "load" | "domcontentloaded" | "networkidle0" | "networkidle2" | Array<"load" | "domcontentloaded" | "networkidle0" | "networkidle2">;
        };
        /** Whether JavaScript should be enabled on the page. */
        setJavaScriptEnabled?: boolean;
        /**
         * The user agent string used by the browser page.
         * @minLength 1
         */
        userAgent?: string;
        /** Browser viewport options forwarded to Cloudflare Browser Run. */
        viewport?: {
          /**
           * The viewport width in pixels.
           * @exclusiveMinimum 0
           */
          width: number;
          /**
           * The viewport height in pixels.
           * @exclusiveMinimum 0
           */
          height: number;
          /** The device scale factor. */
          deviceScaleFactor?: number;
          /** Whether the viewport supports touch events. */
          hasTouch?: boolean;
          /** Whether the viewport should emulate landscape orientation. */
          isLandscape?: boolean;
          /** Whether the viewport should emulate a mobile device. */
          isMobile?: boolean;
        };
        /** Selector wait options forwarded to Cloudflare Browser Run. */
        waitForSelector?: {
          /**
           * The selector Cloudflare should wait for.
           * @minLength 1
           */
          selector: string;
          /** Whether Cloudflare should wait for the selector to be hidden. */
          hidden?: boolean;
          /**
           * The selector wait timeout in milliseconds.
           * @minimum 0
           */
          timeout?: number;
          /** Whether Cloudflare should wait for the selector to be visible. */
          visible?: boolean;
        };
        /**
         * The fixed wait time in milliseconds before extraction.
         * @minimum 0
         */
        waitForTimeout?: number;
      };
      output: {
        /** The rendered HTML content. */
        content: string;
        /** Cloudflare Browser Run response metadata. */
        meta?: {
          /** The HTTP status reported by the rendered page. */
          status?: number;
          /** The title reported by the rendered page. */
          title?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Render a URL or raw HTML with Cloudflare Browser Run and extract structured JSON from the page. */
    "cloudflare.get_json": {
      input: {
        /**
         * The Cloudflare account ID. OAuth connections that can access multiple accounts must provide this value.
         * @minLength 1
         */
        accountId?: string;
        /**
         * The URL Cloudflare Browser Run should navigate to.
         * @minLength 1
         * @format uri
         */
        url?: string;
        /**
         * Raw HTML content Cloudflare Browser Run should render.
         * @minLength 1
         */
        html?: string;
        /**
         * The Cloudflare Browser Run cache TTL in seconds. Set to 0 to disable caching.
         * @minimum 0
         */
        cacheTtl?: number;
        /**
         * The maximum duration in milliseconds allowed for the browser action after page load.
         * @minimum 0
         */
        actionTimeout?: number;
        /** Whether Cloudflare should proceed when awaited events fail or timeout. */
        bestAttempt?: boolean;
        /** Puppeteer navigation options forwarded to Cloudflare Browser Run. */
        gotoOptions?: {
          /**
           * The Referer header value used for navigation.
           * @minLength 1
           */
          referer?: string;
          /**
           * The referrer policy used for navigation.
           * @minLength 1
           */
          referrerPolicy?: string;
          /**
           * The navigation timeout in milliseconds.
           * @minimum 0
           */
          timeout?: number;
          /** The page load event or events Cloudflare should wait for. */
          waitUntil?: "load" | "domcontentloaded" | "networkidle0" | "networkidle2" | Array<"load" | "domcontentloaded" | "networkidle0" | "networkidle2">;
        };
        /** Whether JavaScript should be enabled on the page. */
        setJavaScriptEnabled?: boolean;
        /**
         * The user agent string used by the browser page.
         * @minLength 1
         */
        userAgent?: string;
        /** Browser viewport options forwarded to Cloudflare Browser Run. */
        viewport?: {
          /**
           * The viewport width in pixels.
           * @exclusiveMinimum 0
           */
          width: number;
          /**
           * The viewport height in pixels.
           * @exclusiveMinimum 0
           */
          height: number;
          /** The device scale factor. */
          deviceScaleFactor?: number;
          /** Whether the viewport supports touch events. */
          hasTouch?: boolean;
          /** Whether the viewport should emulate landscape orientation. */
          isLandscape?: boolean;
          /** Whether the viewport should emulate a mobile device. */
          isMobile?: boolean;
        };
        /** Selector wait options forwarded to Cloudflare Browser Run. */
        waitForSelector?: {
          /**
           * The selector Cloudflare should wait for.
           * @minLength 1
           */
          selector: string;
          /** Whether Cloudflare should wait for the selector to be hidden. */
          hidden?: boolean;
          /**
           * The selector wait timeout in milliseconds.
           * @minimum 0
           */
          timeout?: number;
          /** Whether Cloudflare should wait for the selector to be visible. */
          visible?: boolean;
        };
        /**
         * The fixed wait time in milliseconds before extraction.
         * @minimum 0
         */
        waitForTimeout?: number;
        /**
         * The natural language prompt for extracting structured data.
         * @minLength 1
         */
        prompt?: string;
        /** Structured JSON response format options forwarded to Cloudflare Browser Run. */
        responseFormat?: {
          /**
           * The response format type accepted by Cloudflare Browser Run.
           * @minLength 1
           */
          type: string;
          /** The JSON schema Cloudflare should use for the structured result. */
          jsonSchema?: Record<string, unknown>;
        };
      };
      output: {
        /** The structured JSON result returned by Cloudflare Browser Run. */
        data: unknown;
      };
    };
    /** Read a Workers KV value as text or base64 for binary data. */
    "cloudflare.get_kv_value": {
      input: {
        /** The account ID. Defaults to the connection account, or the only accessible account. */
        accountId?: string;
        /**
         * The KV namespace ID.
         * @minLength 1
         */
        namespaceId: string;
        /**
         * The KV key name.
         * @minLength 1
         */
        key: string;
        /** The output encoding. Defaults to text. */
        encoding?: "text" | "base64";
      };
      output: {
        /** The stored value encoded as requested. */
        value: string;
      };
    };
    /** Render a URL or raw HTML with Cloudflare Browser Run and return links discovered on the page. */
    "cloudflare.get_links": {
      input: {
        /**
         * The Cloudflare account ID. OAuth connections that can access multiple accounts must provide this value.
         * @minLength 1
         */
        accountId?: string;
        /**
         * The URL Cloudflare Browser Run should navigate to.
         * @minLength 1
         * @format uri
         */
        url?: string;
        /**
         * Raw HTML content Cloudflare Browser Run should render.
         * @minLength 1
         */
        html?: string;
        /**
         * The Cloudflare Browser Run cache TTL in seconds. Set to 0 to disable caching.
         * @minimum 0
         */
        cacheTtl?: number;
        /**
         * The maximum duration in milliseconds allowed for the browser action after page load.
         * @minimum 0
         */
        actionTimeout?: number;
        /** Whether Cloudflare should proceed when awaited events fail or timeout. */
        bestAttempt?: boolean;
        /** Puppeteer navigation options forwarded to Cloudflare Browser Run. */
        gotoOptions?: {
          /**
           * The Referer header value used for navigation.
           * @minLength 1
           */
          referer?: string;
          /**
           * The referrer policy used for navigation.
           * @minLength 1
           */
          referrerPolicy?: string;
          /**
           * The navigation timeout in milliseconds.
           * @minimum 0
           */
          timeout?: number;
          /** The page load event or events Cloudflare should wait for. */
          waitUntil?: "load" | "domcontentloaded" | "networkidle0" | "networkidle2" | Array<"load" | "domcontentloaded" | "networkidle0" | "networkidle2">;
        };
        /** Whether JavaScript should be enabled on the page. */
        setJavaScriptEnabled?: boolean;
        /**
         * The user agent string used by the browser page.
         * @minLength 1
         */
        userAgent?: string;
        /** Browser viewport options forwarded to Cloudflare Browser Run. */
        viewport?: {
          /**
           * The viewport width in pixels.
           * @exclusiveMinimum 0
           */
          width: number;
          /**
           * The viewport height in pixels.
           * @exclusiveMinimum 0
           */
          height: number;
          /** The device scale factor. */
          deviceScaleFactor?: number;
          /** Whether the viewport supports touch events. */
          hasTouch?: boolean;
          /** Whether the viewport should emulate landscape orientation. */
          isLandscape?: boolean;
          /** Whether the viewport should emulate a mobile device. */
          isMobile?: boolean;
        };
        /** Selector wait options forwarded to Cloudflare Browser Run. */
        waitForSelector?: {
          /**
           * The selector Cloudflare should wait for.
           * @minLength 1
           */
          selector: string;
          /** Whether Cloudflare should wait for the selector to be hidden. */
          hidden?: boolean;
          /**
           * The selector wait timeout in milliseconds.
           * @minimum 0
           */
          timeout?: number;
          /** Whether Cloudflare should wait for the selector to be visible. */
          visible?: boolean;
        };
        /**
         * The fixed wait time in milliseconds before extraction.
         * @minimum 0
         */
        waitForTimeout?: number;
        /** Whether Cloudflare should exclude external links. */
        excludeExternalLinks?: boolean;
        /** Whether Cloudflare should return only visible links. */
        visibleLinksOnly?: boolean;
      };
      output: {
        /** The extracted links. */
        links: Array<string>;
      };
    };
    /** Get the r2.dev managed domain and its public access state for an R2 bucket. */
    "cloudflare.get_managed_domain": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** The bucket ID. */
        bucketId: string;
        /** The r2.dev domain name of the bucket. */
        domain: string;
        /** Whether the bucket is publicly accessible at the r2.dev domain. */
        enabled: boolean;
      };
    };
    /** Render a URL or raw HTML with Cloudflare Browser Run and return the page content as Markdown. */
    "cloudflare.get_markdown": {
      input: {
        /**
         * The Cloudflare account ID. OAuth connections that can access multiple accounts must provide this value.
         * @minLength 1
         */
        accountId?: string;
        /**
         * The URL Cloudflare Browser Run should navigate to.
         * @minLength 1
         * @format uri
         */
        url?: string;
        /**
         * Raw HTML content Cloudflare Browser Run should render.
         * @minLength 1
         */
        html?: string;
        /**
         * The Cloudflare Browser Run cache TTL in seconds. Set to 0 to disable caching.
         * @minimum 0
         */
        cacheTtl?: number;
        /**
         * The maximum duration in milliseconds allowed for the browser action after page load.
         * @minimum 0
         */
        actionTimeout?: number;
        /** Whether Cloudflare should proceed when awaited events fail or timeout. */
        bestAttempt?: boolean;
        /** Puppeteer navigation options forwarded to Cloudflare Browser Run. */
        gotoOptions?: {
          /**
           * The Referer header value used for navigation.
           * @minLength 1
           */
          referer?: string;
          /**
           * The referrer policy used for navigation.
           * @minLength 1
           */
          referrerPolicy?: string;
          /**
           * The navigation timeout in milliseconds.
           * @minimum 0
           */
          timeout?: number;
          /** The page load event or events Cloudflare should wait for. */
          waitUntil?: "load" | "domcontentloaded" | "networkidle0" | "networkidle2" | Array<"load" | "domcontentloaded" | "networkidle0" | "networkidle2">;
        };
        /** Whether JavaScript should be enabled on the page. */
        setJavaScriptEnabled?: boolean;
        /**
         * The user agent string used by the browser page.
         * @minLength 1
         */
        userAgent?: string;
        /** Browser viewport options forwarded to Cloudflare Browser Run. */
        viewport?: {
          /**
           * The viewport width in pixels.
           * @exclusiveMinimum 0
           */
          width: number;
          /**
           * The viewport height in pixels.
           * @exclusiveMinimum 0
           */
          height: number;
          /** The device scale factor. */
          deviceScaleFactor?: number;
          /** Whether the viewport supports touch events. */
          hasTouch?: boolean;
          /** Whether the viewport should emulate landscape orientation. */
          isLandscape?: boolean;
          /** Whether the viewport should emulate a mobile device. */
          isMobile?: boolean;
        };
        /** Selector wait options forwarded to Cloudflare Browser Run. */
        waitForSelector?: {
          /**
           * The selector Cloudflare should wait for.
           * @minLength 1
           */
          selector: string;
          /** Whether Cloudflare should wait for the selector to be hidden. */
          hidden?: boolean;
          /**
           * The selector wait timeout in milliseconds.
           * @minimum 0
           */
          timeout?: number;
          /** Whether Cloudflare should wait for the selector to be visible. */
          visible?: boolean;
        };
        /**
         * The fixed wait time in milliseconds before extraction.
         * @minimum 0
         */
        waitForTimeout?: number;
      };
      output: {
        /** The extracted Markdown content. */
        markdown: string;
      };
    };
    /** Get a Pages deployment and its current processing status. */
    "cloudflare.get_pages_deployment": {
      input: {
        /** The account ID. Defaults to the connection account, or the only accessible account. */
        accountId?: string;
        /**
         * The Pages project name.
         * @minLength 1
         */
        projectName: string;
        /**
         * The Pages deployment ID.
         * @minLength 1
         */
        deploymentId: string;
      };
      output: {
        /** The deployment account ID. */
        accountId: string;
        /**
         * The Pages project name.
         * @minLength 1
         */
        projectName: string;
        /**
         * The Pages deployment ID.
         * @minLength 1
         */
        deploymentId: string;
        /** The latest deployment stage status. */
        state: string;
        /** The deployment URL. */
        url: string;
        /** The Cloudflare resource, including additional upstream fields. */
        deployment: Record<string, unknown>;
      };
    };
    /** Read Pages custom domain validation and certificate status. */
    "cloudflare.get_pages_domain": {
      input: {
        /** The account ID. Defaults to the connection account, or the only accessible account. */
        accountId?: string;
        /**
         * The Pages project name.
         * @minLength 1
         */
        projectName: string;
        /**
         * The custom domain hostname.
         * @minLength 1
         */
        domainName: string;
      };
      output: {
        /** The Cloudflare resource, including additional upstream fields. */
        result: Record<string, unknown>;
      };
    };
    /** Read a Pages project and its deployment configuration. */
    "cloudflare.get_pages_project": {
      input: {
        /** The account ID. Defaults to the connection account, or the only accessible account. */
        accountId?: string;
        /**
         * The Pages project name.
         * @minLength 1
         */
        projectName: string;
      };
      output: {
        /** The Cloudflare resource, including additional upstream fields. */
        result: Record<string, unknown>;
      };
    };
    /** Get the Sippy incremental migration configuration of an R2 bucket. */
    "cloudflare.get_sippy_config": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** Whether Sippy is enabled for the bucket. */
        enabled: boolean;
        /** The configured source bucket. */
        source?: {
          /** The source provider: aws, gcs, s3, or azure. */
          provider: string;
          /** The source bucket name for AWS and GCS. */
          bucket?: string | null;
          /** The S3-compatible endpoint URL for generic S3 sources. */
          bucketUrl?: string | null;
          /** The Azure Blob Storage container name. */
          container?: string | null;
          /** The AWS region of the source bucket. */
          region?: string | null;
        };
        /** The configured R2 destination. */
        destination?: {
          /** The destination provider, always r2. */
          provider: string;
          /** The Cloudflare account ID. */
          account?: string;
          /** The destination bucket name. */
          bucket?: string;
          /** The Access Key ID of the R2 API token Sippy writes with. */
          accessKeyId?: string;
        };
      };
    };
    /** Get one Worker by Worker ID using the Workers beta API. */
    "cloudflare.get_worker": {
      input: {
        /**
         * The Cloudflare account ID. Omit it when the connection uniquely identifies one account. Multi-account OAuth connections must pass an ID returned by list_accounts.
         * @minLength 1
         */
        accountId?: string;
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
    "cloudflare.get_worker_script_content": {
      input: {
        /**
         * The Cloudflare account ID. Omit it when the connection uniquely identifies one account. Multi-account OAuth connections must pass an ID returned by list_accounts.
         * @minLength 1
         */
        accountId?: string;
        /**
         * The Cloudflare Worker script name.
         * @minLength 1
         */
        scriptName: string;
      };
      output: {
        /** The raw Worker script content. */
        content: string;
        /** The HTTP content type returned by Cloudflare. */
        contentType: string | null;
      };
    };
    /** Get one secret binding attached to a Cloudflare Worker script. */
    "cloudflare.get_worker_script_secret": {
      input: {
        /**
         * The Cloudflare account ID. Omit it when the connection uniquely identifies one account. Multi-account OAuth connections must pass an ID returned by list_accounts.
         * @minLength 1
         */
        accountId?: string;
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
          /** The redacted secret text field. */
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
    "cloudflare.get_worker_script_settings": {
      input: {
        /**
         * The Cloudflare account ID. Omit it when the connection uniquely identifies one account. Multi-account OAuth connections must pass an ID returned by list_accounts.
         * @minLength 1
         */
        accountId?: string;
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
    /** Get one Cloudflare zone by zone ID. */
    "cloudflare.get_zone": {
      input: {
        /**
         * The Cloudflare zone ID.
         * @minLength 1
         */
        zoneId: string;
      };
      output: {
        /** A Cloudflare zone summary. */
        zone: {
          /** The zone ID. */
          id: string;
          /** The zone name. */
          name: string;
          /** The zone status. */
          status?: string;
          /** The zone type. */
          type?: string;
          /** Whether the zone is paused. */
          paused?: boolean;
          /** The zone creation timestamp. */
          createdOn?: string;
          /** The last zone update timestamp. */
          modifiedOn?: string;
          /** The assigned name servers. */
          nameServers?: Array<string>;
          /** The original name servers reported by Cloudflare. */
          originalNameServers?: Array<string>;
          /** The Cloudflare account summary. */
          account?: {
            /** The Cloudflare account ID. */
            id?: string;
            /** The Cloudflare account name. */
            name?: string;
            /** The Cloudflare account type. */
            type?: string;
          };
          /** Additional Cloudflare zone metadata. */
          meta?: Record<string, unknown>;
        };
      };
    };
    /** Read the DNS settings of a Cloudflare zone. */
    "cloudflare.get_zone_dns_settings": {
      input: {
        /**
         * The zone ID.
         * @minLength 1
         */
        zoneId: string;
      };
      output: {
        /** The Cloudflare resource, including additional upstream fields. */
        result: Record<string, unknown>;
      };
    };
    /** Read one Cloudflare zone setting, such as SSL mode or cache configuration. */
    "cloudflare.get_zone_setting": {
      input: {
        /**
         * The zone ID.
         * @minLength 1
         */
        zoneId: string;
        /**
         * The official zone setting identifier, such as ssl.
         * @minLength 1
         */
        settingId: string;
      };
      output: {
        /** The Cloudflare resource, including additional upstream fields. */
        result: Record<string, unknown>;
      };
    };
    /** List Cloudflare accounts visible to the current credential. */
    "cloudflare.list_accounts": {
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
    /** List background jobs for an R2 bucket, such as prefix delete jobs. */
    "cloudflare.list_bucket_jobs": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /** The bucket job kind. */
        jobType?: "prefixDelete";
        /** Only return jobs with this status. Requires jobType. */
        status?: "ENQUEUED" | "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED";
        /**
         * The maximum number of jobs to return.
         * @exclusiveMinimum 0
         */
        maxKeys?: number;
        /** Pagination token returned as nextContinuationToken by a previous call. */
        continuationToken?: string;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** The jobs in the current page. */
        jobs: Array<{
          /** The job identifier used to poll the job. */
          jobId: string;
          /** The job kind, currently always prefixDelete. */
          jobType: string;
          /** The job lifecycle status. */
          status: "ENQUEUED" | "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED";
          /** When the job was created. */
          startTime?: string;
          /** When the job finished. Absent while the job is still enqueued or running. */
          endTime?: string;
          /** The key prefix matched by the job. An empty string means the entire bucket. */
          prefix?: string;
          /** The number of objects deleted by the job so far. */
          deletedObjects?: number;
          /** Whether the job was created to clear the entire bucket. */
          isBucketClear?: boolean;
        }>;
        /** The token to pass as continuationToken for the next page. */
        nextContinuationToken?: string;
      };
    };
    /** List the R2 buckets in a Cloudflare account. */
    "cloudflare.list_buckets": {
      input: {
        /** Pagination cursor returned by a previous list_buckets call. */
        cursor?: string;
        /** The sort direction. */
        direction?: "asc" | "desc";
        /** Filters buckets whose names contain this phrase. */
        nameContains?: string;
        /** The field used to order results. */
        order?: "name";
        /**
         * The maximum number of buckets to return.
         * @minimum 1
         * @maximum 1000
         */
        perPage?: number;
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** The returned R2 buckets. */
        buckets: Array<{
          /** The bucket name. */
          name: string;
          /** The bucket creation timestamp. */
          creationDate?: string;
          /** The bucket location. */
          location?: "apac" | "eeur" | "enam" | "weur" | "wnam" | "oc";
          /** The bucket jurisdiction. */
          jurisdiction?: "default" | "eu" | "fedramp" | "us";
          /** The bucket default storage class. */
          storageClass?: "Standard" | "InfrequentAccess";
        }>;
        /** The pagination cursor for the next page, if the response is truncated. */
        cursor?: string;
      };
    };
    /** List Workers Builds triggers configured for one Worker script tag. */
    "cloudflare.list_build_triggers": {
      input: {
        /**
         * The Cloudflare account ID. Omit it when the connection uniquely identifies one account. Multi-account OAuth connections must pass an ID returned by list_accounts.
         * @minLength 1
         */
        accountId?: string;
        /**
         * The immutable Worker script tag.
         * @minLength 1
         */
        scriptTag: string;
      };
      output: {
        /** The configured Workers Builds triggers. */
        triggers: Array<{
          /**
           * The build trigger UUID.
           * @format uuid
           */
          triggerUuid: string;
          /** The build trigger name. */
          triggerName?: string;
          /** The immutable Worker script tag. */
          externalScriptId?: string;
          /** The command that builds the Worker. */
          buildCommand?: string;
          /** The command that deploys the Worker. */
          deployCommand?: string;
          /** The repository directory where the build runs. */
          rootDirectory?: string;
          /** Branches that can trigger builds. */
          branchIncludes?: Array<string>;
          /** Branches excluded from builds. */
          branchExcludes?: Array<string>;
          /** Repository paths that can trigger builds. */
          pathIncludes?: Array<string>;
          /** Repository paths excluded from builds. */
          pathExcludes?: Array<string>;
          /** Whether build caching is enabled. */
          buildCachingEnabled?: boolean;
          /** The UUID of the build token used by this trigger. */
          buildTokenUuid?: string;
          /** The name of the build token used by this trigger. */
          buildTokenName?: string;
          /** The trigger creation timestamp. */
          createdOn?: string;
          /** The last trigger update timestamp. */
          modifiedOn?: string;
          /** The trigger deletion timestamp, or null when active. */
          deletedOn?: string | null;
          /** The source repository connected to a Workers Builds trigger. */
          repoConnection?: {
            /** The source provider account identifier. */
            providerAccountId?: string;
            /** The source provider account name. */
            providerAccountName?: string;
            /** The source repository provider type. */
            providerType?: string;
            /**
             * The repository connection UUID.
             * @format uuid
             */
            repoConnectionUuid?: string;
            /** The source repository identifier. */
            repoId?: string;
            /** The source repository name. */
            repoName?: string;
            /** The repository connection creation timestamp. */
            createdOn?: string;
            /** The repository connection modification timestamp. */
            modifiedOn?: string;
            /** The repository connection deletion timestamp, or null when active. */
            deletedOn?: string | null;
          };
        }>;
      };
    };
    /** List Workers Builds jobs for one Worker script tag. */
    "cloudflare.list_builds": {
      input: {
        /**
         * The Cloudflare account ID. Omit it when the connection uniquely identifies one account. Multi-account OAuth connections must pass an ID returned by list_accounts.
         * @minLength 1
         */
        accountId?: string;
        /**
         * The immutable Worker script tag.
         * @minLength 1
         */
        scriptTag: string;
        /**
         * The result page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The page size, up to 200.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
      };
      output: {
        /** The Workers Builds jobs. */
        builds: Array<{
          /**
           * The build UUID.
           * @format uuid
           */
          buildUuid: string;
          /** The normalized build lifecycle state. */
          state: "queued" | "initializing" | "running" | "succeeded" | "failed" | "stopped";
          /** The Cloudflare build status. */
          status?: "queued" | "initializing" | "running" | "stopped";
          /** The Cloudflare build outcome. */
          buildOutcome?: "success" | "fail" | "skipped" | "cancelled" | "terminated";
          /** The build creation timestamp. */
          createdOn?: string;
          /** The build initialization timestamp. */
          initializingOn?: string | null;
          /** The build start timestamp. */
          runningOn?: string | null;
          /** The build stop timestamp. */
          stoppedOn?: string | null;
          /** The last build update timestamp. */
          modifiedOn?: string;
          /** The source revision and build configuration that triggered a Workers Builds job. */
          triggerMetadata?: {
            /** The source revision author. */
            author?: string;
            /** The source branch name. */
            branch?: string;
            /** The build command used by the job. */
            buildCommand?: string;
            /** The deploy command used by the job. */
            deployCommand?: string;
            /** The build token name. */
            buildTokenName?: string;
            /**
             * The build token UUID.
             * @format uuid
             */
            buildTokenUuid?: string;
            /** The event source that triggered the build. */
            buildTriggerSource?: string;
            /** The source commit hash. */
            commitHash?: string;
            /** The source commit message. */
            commitMessage?: string;
            /** A free-form object accepted by the Cloudflare API. */
            environmentVariables?: Record<string, unknown>;
            /** The source provider account name. */
            providerAccountName?: string;
            /** The source repository provider type. */
            providerType?: string;
            /** The source repository name. */
            repoName?: string;
            /** The repository directory where the build ran. */
            rootDirectory?: string;
          };
          /** A Cloudflare Workers Builds trigger. */
          trigger?: {
            /**
             * The build trigger UUID.
             * @format uuid
             */
            triggerUuid: string;
            /** The build trigger name. */
            triggerName?: string;
            /** The immutable Worker script tag. */
            externalScriptId?: string;
            /** The command that builds the Worker. */
            buildCommand?: string;
            /** The command that deploys the Worker. */
            deployCommand?: string;
            /** The repository directory where the build runs. */
            rootDirectory?: string;
            /** Branches that can trigger builds. */
            branchIncludes?: Array<string>;
            /** Branches excluded from builds. */
            branchExcludes?: Array<string>;
            /** Repository paths that can trigger builds. */
            pathIncludes?: Array<string>;
            /** Repository paths excluded from builds. */
            pathExcludes?: Array<string>;
            /** Whether build caching is enabled. */
            buildCachingEnabled?: boolean;
            /** The UUID of the build token used by this trigger. */
            buildTokenUuid?: string;
            /** The name of the build token used by this trigger. */
            buildTokenName?: string;
            /** The trigger creation timestamp. */
            createdOn?: string;
            /** The last trigger update timestamp. */
            modifiedOn?: string;
            /** The trigger deletion timestamp, or null when active. */
            deletedOn?: string | null;
            /** The source repository connected to a Workers Builds trigger. */
            repoConnection?: {
              /** The source provider account identifier. */
              providerAccountId?: string;
              /** The source provider account name. */
              providerAccountName?: string;
              /** The source repository provider type. */
              providerType?: string;
              /**
               * The repository connection UUID.
               * @format uuid
               */
              repoConnectionUuid?: string;
              /** The source repository identifier. */
              repoId?: string;
              /** The source repository name. */
              repoName?: string;
              /** The repository connection creation timestamp. */
              createdOn?: string;
              /** The repository connection modification timestamp. */
              modifiedOn?: string;
              /** The repository connection deletion timestamp, or null when active. */
              deletedOn?: string | null;
            };
          };
          /** The pull request that triggered a Workers Builds job. */
          pullRequest?: {
            /** The pull request creation timestamp. */
            createdOn?: string;
            /**
             * The pull request URL.
             * @format uri
             */
            pullRequestUrl?: string;
          };
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
    /** List the custom domains attached to an R2 bucket. */
    "cloudflare.list_custom_domains": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** The attached custom domains. */
        domains: Array<{
          /** The custom domain name. */
          domain: string;
          /** Whether the bucket is publicly accessible at this custom domain. */
          enabled: boolean;
          /** The Cloudflare zone ID the domain resides in. */
          zoneId?: string;
          /** The Cloudflare zone name the domain resides in. */
          zoneName?: string;
          /** The minimum TLS version accepted for incoming connections. */
          minTLS?: "1.0" | "1.1" | "1.2" | "1.3";
          /** An allowlist of TLS ciphers in BoringSSL format. */
          ciphers?: Array<string>;
          /** The provisioning status of the custom domain. */
          status?: {
            /** The domain ownership status. */
            ownership: string;
            /** The SSL certificate status. */
            ssl: string;
          };
        }>;
      };
    };
    /** List D1 databases in an account. */
    "cloudflare.list_d1_databases": {
      input: {
        /**
         * The D1 database name.
         * @minLength 1
         */
        name?: string;
        /**
         * The result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results per page.
         * @minimum 10
         * @maximum 10000
         */
        perPage?: number;
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** The returned resources. */
        items: Array<Record<string, unknown>>;
        /** Upstream pagination metadata, including cursors. */
        resultInfo: Record<string, unknown>;
      };
    };
    /** List Cloudflare Email Routing destination addresses and their verification status. */
    "cloudflare.list_destination_addresses": {
      input: {
        /**
         * The Cloudflare account ID.
         * @minLength 1
         */
        accountId?: string;
        /** The result sort direction. */
        direction?: "asc" | "desc";
        /** Filter by destination address verification status. */
        verified?: boolean;
        /**
         * The result page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The page size.
         * @minimum 5
         * @maximum 50
         */
        perPage?: number;
      };
      output: {
        /** The returned destination addresses. */
        addresses: Array<{
          /** The destination address ID. */
          id: string;
          /**
           * The destination email address.
           * @format email
           */
          email: string;
          /**
           * When the address was created.
           * @format date-time
           */
          created?: string;
          /**
           * When the address was last modified.
           * @format date-time
           */
          modified?: string;
          /**
           * When the address was verified; null means not verified.
           * @format date-time
           */
          verified?: string | null;
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
    /** List DNS records inside one Cloudflare zone. */
    "cloudflare.list_dns_records": {
      input: {
        /**
         * The Cloudflare zone ID.
         * @minLength 1
         */
        zoneId: string;
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
        /** The DNS record type. */
        type?: "A" | "AAAA" | "CAA" | "CERT" | "CNAME" | "DNSKEY" | "DS" | "HTTPS" | "LOC" | "MX" | "NAPTR" | "NS" | "OPENPGPKEY" | "PTR" | "SMIMEA" | "SRV" | "SSHFP" | "SVCB" | "TLSA" | "TXT" | "URI";
        /** Filter by record name. */
        name?: string;
        /** Filter by record content. */
        content?: string;
        /** Filter by proxy status. */
        proxied?: boolean;
        /** Whether all or any query filters must match. */
        match?: "all" | "any";
        /** The field to order by. */
        order?: string;
        /** The sort direction. */
        direction?: "asc" | "desc";
      };
      output: {
        /** The list of DNS records. */
        records: Array<{
          /** The DNS record ID. */
          id: string;
          /** The parent zone ID. */
          zoneId?: string;
          /** The parent zone name. */
          zoneName?: string;
          /** The DNS record type. */
          type: string;
          /** The record name. */
          name: string;
          /** The record content. */
          content?: string | null;
          /** The DNS TTL in seconds. */
          ttl?: number;
          /** Whether Cloudflare proxying is enabled. */
          proxied?: boolean;
          /** Whether the record can be proxied. */
          proxiable?: boolean;
          /** The record priority. */
          priority?: number;
          /** The record comment. */
          comment?: string | null;
          /** The record tags. */
          tags?: Array<string>;
          /** The record creation timestamp. */
          createdOn?: string;
          /** The last record update timestamp. */
          modifiedOn?: string;
          /** The comment update timestamp. */
          commentModifiedOn?: string;
          /** The tag update timestamp. */
          tagsModifiedOn?: string;
          /** Structured record data for advanced record types. */
          data?: Record<string, unknown>;
          /** Cloudflare record metadata. */
          meta?: Record<string, unknown>;
          /** Cloudflare record settings. */
          settings?: Record<string, unknown>;
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
    /** List every event notification rule of an R2 bucket grouped by target queue. */
    "cloudflare.list_event_notification_rules": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** The bucket name. */
        bucketName: string;
        /** The queues receiving notifications and their rules. */
        queues: Array<{
          /** The queue ID. */
          queueId: string;
          /** The queue name. */
          queueName?: string;
          /** The rules bound to the queue. */
          rules: Array<{
            /** The rule ID. */
            ruleId?: string;
            /** When the rule was created. */
            createdAt?: string;
            /** A description that identifies the rule. */
            description?: string;
            /** The object actions that trigger notifications. */
            actions: Array<"PutObject" | "CopyObject" | "DeleteObject" | "CompleteMultipartUpload" | "LifecycleDeletion">;
            /** Notifications are only sent for objects with this key prefix. */
            prefix?: string;
            /** Notifications are only sent for objects with this key suffix. */
            suffix?: string;
          }>;
        }>;
      };
    };
    /** List keys and metadata in a Workers KV namespace. */
    "cloudflare.list_kv_keys": {
      input: {
        /** The account ID. Defaults to the connection account, or the only accessible account. */
        accountId?: string;
        /**
         * The KV namespace ID.
         * @minLength 1
         */
        namespaceId: string;
        /** Filter by key prefix. */
        prefix?: string;
        /** The cursor returned by a previous request. */
        cursor?: string;
        /**
         * Maximum keys to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** The returned resources. */
        items: Array<Record<string, unknown>>;
        /** Upstream pagination metadata, including cursors. */
        resultInfo: Record<string, unknown>;
      };
    };
    /** List Workers KV namespaces in an account. */
    "cloudflare.list_kv_namespaces": {
      input: {
        /** The account ID. Defaults to the connection account, or the only accessible account. */
        accountId?: string;
        /**
         * The result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results per page.
         * @minimum 1
         */
        perPage?: number;
      };
      output: {
        /** The returned resources. */
        items: Array<Record<string, unknown>>;
        /** Upstream pagination metadata, including cursors. */
        resultInfo: Record<string, unknown>;
      };
    };
    /** List objects in an R2 bucket with optional prefix, delimiter grouping, and cursor pagination. */
    "cloudflare.list_objects": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /** Only return objects whose keys begin with this prefix. */
        prefix?: string;
        /**
         * A single character used to group keys. Keys sharing the same prefix up to the delimiter are returned as common prefixes.
         * @minLength 1
         * @maxLength 1
         */
        delimiter?: string;
        /** Only return objects whose keys sort after this key in lexicographic order. */
        startAfter?: string;
        /** Pagination cursor returned by a previous list_objects call. */
        cursor?: string;
        /**
         * The maximum number of objects to return per page.
         * @minimum 1
         * @maximum 1000
         */
        perPage?: number;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** The objects in the current page. */
        objects: Array<{
          /** The object key. */
          key: string;
          /** The object size in bytes. */
          size?: number;
          /** The object entity tag as a raw hex digest without quotes. */
          etag?: string;
          /** When the object was last modified. */
          lastModified?: string;
          /** The object storage class. */
          storageClass?: "Standard" | "InfrequentAccess";
          /** Whether the object is encrypted with a customer-supplied encryption key. */
          ssec?: boolean;
          /** HTTP metadata stored with an R2 object. */
          httpMetadata?: {
            /** The object MIME type. */
            contentType?: string;
            /** The language of the object content. */
            contentLanguage?: string;
            /** Presentational information for the object. */
            contentDisposition?: string;
            /** The content encoding applied to the object. */
            contentEncoding?: string;
            /** The caching behavior for the object. */
            cacheControl?: string;
            /** When the object cache entry expires. */
            cacheExpiry?: string;
          };
          /** Custom metadata key-value pairs stored with the object. */
          customMetadata?: Record<string, string>;
        }>;
        /** Common prefixes grouped by the delimiter, equivalent to S3 CommonPrefixes. */
        commonPrefixes: Array<string>;
        /** Whether more objects remain after this page. */
        isTruncated: boolean;
        /** The pagination cursor for the next page, when truncated. */
        cursor?: string;
      };
    };
    /** List deployments for a Pages project. */
    "cloudflare.list_pages_deployments": {
      input: {
        /** The account ID. Defaults to the connection account, or the only accessible account. */
        accountId?: string;
        /**
         * The Pages project name.
         * @minLength 1
         */
        projectName: string;
        /**
         * The result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results per page.
         * @minimum 1
         */
        perPage?: number;
        /** Filter deployments by environment. */
        environment?: "production" | "preview";
      };
      output: {
        /** The returned resources. */
        items: Array<Record<string, unknown>>;
        /** Upstream pagination metadata, including cursors. */
        resultInfo: Record<string, unknown>;
      };
    };
    /** List custom domains attached to a Pages project. */
    "cloudflare.list_pages_domains": {
      input: {
        /** The account ID. Defaults to the connection account, or the only accessible account. */
        accountId?: string;
        /**
         * The Pages project name.
         * @minLength 1
         */
        projectName: string;
        /**
         * The result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results per page.
         * @minimum 1
         */
        perPage?: number;
      };
      output: {
        /** The returned resources. */
        items: Array<Record<string, unknown>>;
        /** Upstream pagination metadata, including cursors. */
        resultInfo: Record<string, unknown>;
      };
    };
    /** List Cloudflare Pages projects. */
    "cloudflare.list_pages_projects": {
      input: {
        /** The account ID. Defaults to the connection account, or the only accessible account. */
        accountId?: string;
        /**
         * The result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results per page.
         * @minimum 1
         */
        perPage?: number;
      };
      output: {
        /** The returned resources. */
        items: Array<Record<string, unknown>>;
        /** Upstream pagination metadata, including cursors. */
        resultInfo: Record<string, unknown>;
      };
    };
    /** List Cloudflare Email Routing rules for a zone or account. */
    "cloudflare.list_routing_rules": {
      input: {
        /**
         * The Cloudflare zone ID.
         * @minLength 1
         */
        zoneId?: string;
        /**
         * The Cloudflare account ID.
         * @minLength 1
         */
        accountId?: string;
        /** Filter by enabled routing rules. */
        enabled?: boolean;
        /**
         * The result page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The page size.
         * @minimum 5
         * @maximum 50
         */
        perPage?: number;
      };
      output: {
        /** The returned routing rules. */
        rules: Array<{
          /** The routing rule ID. */
          id: string;
          /** Actions applied to matching email. */
          actions?: Array<{
            /** The action type. */
            type: "drop" | "forward" | "worker";
            /**
             * Destination email addresses or Worker names used by the action.
             * @minItems 1
             */
            value?: Array<string>;
          }>;
          /** Whether the rule is enabled. */
          enabled?: boolean;
          /** Conditions matching incoming email. */
          matchers?: Array<{
            /** The matcher type. */
            type: "all" | "literal";
            /** The email field to match. */
            field?: "to";
            /**
             * The literal email address to match.
             * @maxLength 90
             */
            value?: string;
          }>;
          /** The rule name. */
          name?: string;
          /**
           * The rule priority.
           * @minimum 0
           */
          priority?: number;
          /** Who manages the rule. */
          source?: "api" | "wrangler";
          /**
           * The public script tag of the Worker that owns a Wrangler-managed rule.
           * @maxLength 32
           */
          ownerWorkerTag?: string;
          /** Zone information returned for account rule listings. */
          zone?: Record<string, unknown>;
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
    /** List Worker custom domains in an account. */
    "cloudflare.list_worker_domains": {
      input: {
        /** The account ID. Defaults to the connection account, or the only accessible account. */
        accountId?: string;
        /**
         * The zone ID.
         * @minLength 1
         */
        zoneId?: string;
        /**
         * The custom domain hostname.
         * @minLength 1
         */
        hostname?: string;
        /** Filter by Worker service name. */
        service?: string;
      };
      output: {
        /** The returned resources. */
        items: Array<Record<string, unknown>>;
        /** Upstream pagination metadata, including cursors. */
        resultInfo: Record<string, unknown>;
      };
    };
    /** List Worker routes for a zone. */
    "cloudflare.list_worker_routes": {
      input: {
        /**
         * The zone ID.
         * @minLength 1
         */
        zoneId: string;
      };
      output: {
        /** The returned resources. */
        items: Array<Record<string, unknown>>;
        /** Upstream pagination metadata, including cursors. */
        resultInfo: Record<string, unknown>;
      };
    };
    /** List secret bindings attached to a Cloudflare Worker script. */
    "cloudflare.list_worker_script_secrets": {
      input: {
        /**
         * The Cloudflare account ID. Omit it when the connection uniquely identifies one account. Multi-account OAuth connections must pass an ID returned by list_accounts.
         * @minLength 1
         */
        accountId?: string;
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
          /** The redacted secret text field. */
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
    "cloudflare.list_worker_scripts": {
      input: {
        /**
         * The Cloudflare account ID. Omit it when the connection uniquely identifies one account. Multi-account OAuth connections must pass an ID returned by list_accounts.
         * @minLength 1
         */
        accountId?: string;
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
    "cloudflare.list_workers": {
      input: {
        /**
         * The Cloudflare account ID. Omit it when the connection uniquely identifies one account. Multi-account OAuth connections must pass an ID returned by list_accounts.
         * @minLength 1
         */
        accountId?: string;
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
        /** The field to order by. */
        orderBy?: "deployed_on" | "updated_on" | "created_on" | "name";
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
    /** List the Cloudflare zones visible to the current API token. */
    "cloudflare.list_zones": {
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
        /** Filter zones by exact zone name. */
        name?: string;
        /** Filter zones by zone status. */
        status?: string;
        /** Filter zones by Cloudflare account ID. */
        accountId?: string;
        /** Whether all or any query filters must match. */
        match?: "all" | "any";
        /** The field to order by. */
        order?: string;
        /** The sort direction. */
        direction?: "asc" | "desc";
      };
      output: {
        /** The list of matching zones. */
        zones: Array<{
          /** The zone ID. */
          id: string;
          /** The zone name. */
          name: string;
          /** The zone status. */
          status?: string;
          /** The zone type. */
          type?: string;
          /** Whether the zone is paused. */
          paused?: boolean;
          /** The zone creation timestamp. */
          createdOn?: string;
          /** The last zone update timestamp. */
          modifiedOn?: string;
          /** The assigned name servers. */
          nameServers?: Array<string>;
          /** The original name servers reported by Cloudflare. */
          originalNameServers?: Array<string>;
          /** The Cloudflare account summary. */
          account?: {
            /** The Cloudflare account ID. */
            id?: string;
            /** The Cloudflare account name. */
            name?: string;
            /** The Cloudflare account type. */
            type?: string;
          };
          /** Additional Cloudflare zone metadata. */
          meta?: Record<string, unknown>;
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
    /** Patch Worker metadata and configuration for a Cloudflare Worker script. */
    "cloudflare.patch_worker_script_settings": {
      input: {
        /**
         * The Cloudflare account ID. Omit it when the connection uniquely identifies one account. Multi-account OAuth connections must pass an ID returned by list_accounts.
         * @minLength 1
         */
        accountId?: string;
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
    /** Write a Workers KV value with optional expiration and metadata. */
    "cloudflare.put_kv_value": {
      input: {
        /** The account ID. Defaults to the connection account, or the only accessible account. */
        accountId?: string;
        /**
         * The KV namespace ID.
         * @minLength 1
         */
        namespaceId: string;
        /**
         * The KV key name.
         * @minLength 1
         */
        key: string;
        /** The value to store. */
        value: string;
        /** The input value encoding. Defaults to text. */
        encoding?: "text" | "base64";
        /** Absolute expiration as Unix seconds. */
        expiration?: number;
        /**
         * Expiration in seconds from now, at least 60.
         * @minimum 60
         */
        expirationTtl?: number;
        /** JSON metadata associated with the key. */
        metadata?: Record<string, unknown>;
      };
      output: {
        /** The Cloudflare resource, including additional upstream fields. */
        result: Record<string, unknown>;
      };
    };
    /** Upload one R2 object from a public URL, plain text, or base64-encoded content. */
    "cloudflare.put_object": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /**
         * The complete R2 object key. Slashes are preserved as key delimiters.
         * @minLength 1
         */
        objectKey: string;
        /**
         * A public HTTP or HTTPS URL containing the object bytes.
         * @format uri
         */
        sourceUrl?: string;
        /** Plain UTF-8 text to upload as the object body. */
        contentText?: string;
        /**
         * Base64-encoded object bytes.
         * @minLength 1
         */
        contentBase64?: string;
        /**
         * The object Content-Type.
         * @minLength 1
         */
        contentType?: string;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** The destination bucket name. */
        bucketName: string;
        /** The uploaded object key. */
        objectKey: string;
        /** The uploaded object ETag, or null when unavailable. */
        etag: string | null;
      };
    };
    /** Replace only the content of a Cloudflare Worker script without changing metadata. */
    "cloudflare.put_worker_script_content": {
      input: {
        /**
         * The Cloudflare account ID. Omit it when the connection uniquely identifies one account. Multi-account OAuth connections must pass an ID returned by list_accounts.
         * @minLength 1
         */
        accountId?: string;
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
    "cloudflare.put_worker_script_secret": {
      input: {
        /**
         * The Cloudflare account ID. Omit it when the connection uniquely identifies one account. Multi-account OAuth connections must pass an ID returned by list_accounts.
         * @minLength 1
         */
        accountId?: string;
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
          /** The redacted secret text field. */
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
    /** Execute an ordered batch of one or more SQL statements on D1. */
    "cloudflare.query_d1_database": {
      input: {
        /**
         * The D1 database ID.
         * @minLength 1
         */
        databaseId: string;
        /**
         * SQL statements in execution order.
         * @minItems 1
         */
        batch: Array<{
          /**
           * SQL to execute.
           * @minLength 1
           */
          sql: string;
          /** Positional parameters in binding order. */
          params?: Array<string>;
        }>;
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** D1 results for the submitted statements. */
        results: Array<Record<string, unknown>>;
      };
    };
    /** Rename a Workers KV namespace. */
    "cloudflare.rename_kv_namespace": {
      input: {
        /** The account ID. Defaults to the connection account, or the only accessible account. */
        accountId?: string;
        /**
         * The KV namespace ID.
         * @minLength 1
         */
        namespaceId: string;
        /**
         * The new namespace title.
         * @minLength 1
         */
        title: string;
      };
      output: {
        /** The Cloudflare resource, including additional upstream fields. */
        result: Record<string, unknown>;
      };
    };
    /** Roll back a Pages project to a previous production deployment. */
    "cloudflare.rollback_pages_deployment": {
      input: {
        /** The account ID. Defaults to the connection account, or the only accessible account. */
        accountId?: string;
        /**
         * The Pages project name.
         * @minLength 1
         */
        projectName: string;
        /**
         * The Pages deployment ID.
         * @minLength 1
         */
        deploymentId: string;
      };
      output: {
        /** The Cloudflare resource, including additional upstream fields. */
        result: Record<string, unknown>;
      };
    };
    /** Render a URL or raw HTML with Cloudflare Browser Run and scrape selected HTML elements. */
    "cloudflare.scrape_elements": {
      input: {
        /**
         * The Cloudflare account ID. OAuth connections that can access multiple accounts must provide this value.
         * @minLength 1
         */
        accountId?: string;
        /**
         * The URL Cloudflare Browser Run should navigate to.
         * @minLength 1
         * @format uri
         */
        url?: string;
        /**
         * Raw HTML content Cloudflare Browser Run should render.
         * @minLength 1
         */
        html?: string;
        /**
         * The Cloudflare Browser Run cache TTL in seconds. Set to 0 to disable caching.
         * @minimum 0
         */
        cacheTtl?: number;
        /**
         * The maximum duration in milliseconds allowed for the browser action after page load.
         * @minimum 0
         */
        actionTimeout?: number;
        /** Whether Cloudflare should proceed when awaited events fail or timeout. */
        bestAttempt?: boolean;
        /** Puppeteer navigation options forwarded to Cloudflare Browser Run. */
        gotoOptions?: {
          /**
           * The Referer header value used for navigation.
           * @minLength 1
           */
          referer?: string;
          /**
           * The referrer policy used for navigation.
           * @minLength 1
           */
          referrerPolicy?: string;
          /**
           * The navigation timeout in milliseconds.
           * @minimum 0
           */
          timeout?: number;
          /** The page load event or events Cloudflare should wait for. */
          waitUntil?: "load" | "domcontentloaded" | "networkidle0" | "networkidle2" | Array<"load" | "domcontentloaded" | "networkidle0" | "networkidle2">;
        };
        /** Whether JavaScript should be enabled on the page. */
        setJavaScriptEnabled?: boolean;
        /**
         * The user agent string used by the browser page.
         * @minLength 1
         */
        userAgent?: string;
        /** Browser viewport options forwarded to Cloudflare Browser Run. */
        viewport?: {
          /**
           * The viewport width in pixels.
           * @exclusiveMinimum 0
           */
          width: number;
          /**
           * The viewport height in pixels.
           * @exclusiveMinimum 0
           */
          height: number;
          /** The device scale factor. */
          deviceScaleFactor?: number;
          /** Whether the viewport supports touch events. */
          hasTouch?: boolean;
          /** Whether the viewport should emulate landscape orientation. */
          isLandscape?: boolean;
          /** Whether the viewport should emulate a mobile device. */
          isMobile?: boolean;
        };
        /** Selector wait options forwarded to Cloudflare Browser Run. */
        waitForSelector?: {
          /**
           * The selector Cloudflare should wait for.
           * @minLength 1
           */
          selector: string;
          /** Whether Cloudflare should wait for the selector to be hidden. */
          hidden?: boolean;
          /**
           * The selector wait timeout in milliseconds.
           * @minimum 0
           */
          timeout?: number;
          /** Whether Cloudflare should wait for the selector to be visible. */
          visible?: boolean;
        };
        /**
         * The fixed wait time in milliseconds before extraction.
         * @minimum 0
         */
        waitForTimeout?: number;
        /**
         * The CSS selectors to scrape after rendering.
         * @minItems 1
         */
        elements: Array<{
          /**
           * The CSS selector Cloudflare Browser Run should scrape.
           * @minLength 1
           */
          selector: string;
        }>;
      };
      output: {
        /** The scrape results by selector. */
        elements: Array<{
          /** The CSS selector used for this result. */
          selector: string;
          /** The element result or result array returned by Cloudflare for this selector. */
          results: unknown;
        }>;
      };
    };
    /** Search Worker scripts in a Cloudflare account by name or script tag. */
    "cloudflare.search_worker_scripts": {
      input: {
        /**
         * The Cloudflare account ID. Omit it when the connection uniquely identifies one account. Multi-account OAuth connections must pass an ID returned by list_accounts.
         * @minLength 1
         */
        accountId?: string;
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
    /** Update mutable R2 bucket properties such as default storage class or jurisdiction. */
    "cloudflare.update_bucket": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /** The default storage class for newly uploaded objects. */
        storageClass?: "Standard" | "InfrequentAccess";
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** A Cloudflare R2 bucket. */
        bucket: {
          /** The bucket name. */
          name: string;
          /** The bucket creation timestamp. */
          creationDate?: string;
          /** The bucket location. */
          location?: "apac" | "eeur" | "enam" | "weur" | "wnam" | "oc";
          /** The bucket jurisdiction. */
          jurisdiction?: "default" | "eu" | "fedramp" | "us";
          /** The bucket default storage class. */
          storageClass?: "Standard" | "InfrequentAccess";
        };
      };
    };
    /** Replace the bucket-level CORS policy for an R2 bucket. */
    "cloudflare.update_bucket_cors_policy": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /** The full CORS rule set to store. */
        rules: Array<{
          /** The allowed origins, methods, and headers for this CORS rule. */
          allowed: {
            /**
             * The methods allowed by this CORS rule.
             * @minItems 1
             */
            methods: Array<"GET" | "PUT" | "POST" | "DELETE" | "HEAD">;
            /**
             * The allowed origins for this CORS rule.
             * @minItems 1
             */
            origins: Array<string>;
            /** The allowed request headers for this CORS rule. */
            headers?: Array<string>;
          };
          /** The optional identifier for this CORS rule. */
          id?: string;
          /** The response headers exposed to browser clients. */
          exposeHeaders?: Array<string>;
          /**
           * The browser preflight cache duration in seconds.
           * @minimum 0
           */
          maxAgeSeconds?: number;
        }>;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** The bucket whose CORS policy was updated. */
        bucketName: string;
        /** Whether the update request succeeded. */
        updated: boolean;
      };
    };
    /** Replace the object lifecycle rules of an R2 bucket with the given rule set. */
    "cloudflare.update_bucket_lifecycle": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /** The full lifecycle rule set to store. An empty array removes all rules. */
        rules: Array<{
          /**
           * The unique identifier of the rule.
           * @minLength 1
           */
          id: string;
          /** Whether the rule is in effect. */
          enabled: boolean;
          /** Conditions that apply to every transition of this rule. */
          conditions: {
            /** Only objects and uploads whose keys start with this prefix are affected. Use an empty prefix to match everything. */
            prefix: string;
          };
          /** Transition that deletes matching objects. */
          deleteObjectsTransition?: {
            /** The condition that triggers the transition. */
            condition: {
              /** The condition type. */
              type: "Age";
              /**
               * The object age in seconds after which the transition applies.
               * @minimum 0
               */
              maxAge: number;
            } | {
              /** The condition type. */
              type: "Date";
              /**
               * The date and time when the transition applies.
               * @format date-time
               */
              date: string;
            };
          };
          /** Transition that aborts ongoing multipart uploads. */
          abortMultipartUploadsTransition?: {
            /** Abort multipart uploads older than this age. */
            condition: {
              /** The condition type. */
              type: "Age";
              /**
               * The object age in seconds after which the transition applies.
               * @minimum 0
               */
              maxAge: number;
            };
          };
          /** Transitions that change the storage class of matching objects. */
          storageClassTransitions?: Array<{
            /** The condition that triggers the transition. */
            condition: {
              /** The condition type. */
              type: "Age";
              /**
               * The object age in seconds after which the transition applies.
               * @minimum 0
               */
              maxAge: number;
            } | {
              /** The condition type. */
              type: "Date";
              /**
               * The date and time when the transition applies.
               * @format date-time
               */
              date: string;
            };
            /** The target storage class. */
            storageClass: "InfrequentAccess";
          }>;
        }>;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** The bucket whose lifecycle rules were replaced. */
        bucketName: string;
        /** Whether the update request succeeded. */
        updated: boolean;
      };
    };
    /** Enable or disable local uploads for an R2 bucket. */
    "cloudflare.update_bucket_local_uploads": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /** Whether to enable local uploads for the bucket. */
        enabled: boolean;
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** The bucket whose setting was updated. */
        bucketName: string;
        /** The stored local uploads setting. */
        enabled: boolean;
      };
    };
    /** Replace the object lock rules of an R2 bucket with the given rule set. */
    "cloudflare.update_bucket_lock": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /** The full lock rule set to store. An empty array removes all rules. */
        rules: Array<{
          /**
           * The unique identifier of the rule.
           * @minLength 1
           */
          id: string;
          /** Whether the rule is in effect. */
          enabled: boolean;
          /** Only objects and uploads whose keys start with this prefix are affected. Use an empty prefix to match everything. */
          prefix?: string;
          /** The condition that defines the lock duration. */
          condition: {
            /** The condition type. */
            type: "Age";
            /**
             * The lock duration in seconds.
             * @minimum 0
             */
            maxAgeSeconds: number;
          } | {
            /** The condition type. */
            type: "Date";
            /**
             * The date and time until which objects stay locked.
             * @format date-time
             */
            date: string;
          } | {
            /** The condition type. */
            type: "Indefinite";
          };
        }>;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** The bucket whose lock rules were replaced. */
        bucketName: string;
        /** Whether the update request succeeded. */
        updated: boolean;
      };
    };
    /** Update the public access, TLS version, or cipher settings of a custom domain. */
    "cloudflare.update_custom_domain": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /**
         * The custom domain name.
         * @minLength 1
         */
        domain: string;
        /** Whether to enable public bucket access at the custom domain. */
        enabled?: boolean;
        /** The minimum TLS version accepted for incoming connections. */
        minTLS?: "1.0" | "1.1" | "1.2" | "1.3";
        /** An allowlist of TLS ciphers in BoringSSL format. */
        ciphers?: Array<string>;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** A custom domain after an update. Fields the upstream response omits are left out. */
        domain: {
          /** The custom domain name. */
          domain: string;
          /** Whether the bucket is publicly accessible at this custom domain. Omitted when the upstream response does not report it. */
          enabled?: boolean;
          /** The minimum TLS version accepted for incoming connections. */
          minTLS?: "1.0" | "1.1" | "1.2" | "1.3";
          /** An allowlist of TLS ciphers in BoringSSL format. */
          ciphers?: Array<string>;
        };
      };
    };
    /** Configure read replication for a D1 database. */
    "cloudflare.update_d1_database": {
      input: {
        /**
         * The D1 database ID.
         * @minLength 1
         */
        databaseId: string;
        /** The D1 read replication mode. */
        replicationMode: "auto" | "disabled";
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** The Cloudflare resource, including additional upstream fields. */
        result: Record<string, unknown>;
      };
    };
    /** Patch one DNS record inside a Cloudflare zone. */
    "cloudflare.update_dns_record": {
      input: {
        /**
         * The Cloudflare zone ID.
         * @minLength 1
         */
        zoneId: string;
        /**
         * The Cloudflare DNS record ID.
         * @minLength 1
         */
        dnsRecordId: string;
        /** The DNS record type. */
        type?: "A" | "AAAA" | "CAA" | "CERT" | "CNAME" | "DNSKEY" | "DS" | "HTTPS" | "LOC" | "MX" | "NAPTR" | "NS" | "OPENPGPKEY" | "PTR" | "SMIMEA" | "SRV" | "SSHFP" | "SVCB" | "TLSA" | "TXT" | "URI";
        /**
         * The DNS record name.
         * @minLength 1
         */
        name?: string;
        /** The DNS record content. */
        content?: string;
        /** Structured record data for advanced record types. */
        data?: Record<string, unknown>;
        /**
         * The DNS TTL in seconds. Use 1 for automatic TTL.
         * @minimum 1
         */
        ttl?: number;
        /** Whether Cloudflare proxying should be enabled. */
        proxied?: boolean;
        /** The DNS record priority. */
        priority?: number;
        /** The DNS record comment. */
        comment?: string;
        /** The DNS record tags. */
        tags?: Array<string>;
        /** Cloudflare DNS record settings. */
        settings?: Record<string, unknown>;
      };
      output: {
        /** A Cloudflare DNS record. */
        record: {
          /** The DNS record ID. */
          id: string;
          /** The parent zone ID. */
          zoneId?: string;
          /** The parent zone name. */
          zoneName?: string;
          /** The DNS record type. */
          type: string;
          /** The record name. */
          name: string;
          /** The record content. */
          content?: string | null;
          /** The DNS TTL in seconds. */
          ttl?: number;
          /** Whether Cloudflare proxying is enabled. */
          proxied?: boolean;
          /** Whether the record can be proxied. */
          proxiable?: boolean;
          /** The record priority. */
          priority?: number;
          /** The record comment. */
          comment?: string | null;
          /** The record tags. */
          tags?: Array<string>;
          /** The record creation timestamp. */
          createdOn?: string;
          /** The last record update timestamp. */
          modifiedOn?: string;
          /** The comment update timestamp. */
          commentModifiedOn?: string;
          /** The tag update timestamp. */
          tagsModifiedOn?: string;
          /** Structured record data for advanced record types. */
          data?: Record<string, unknown>;
          /** Cloudflare record metadata. */
          meta?: Record<string, unknown>;
          /** Cloudflare record settings. */
          settings?: Record<string, unknown>;
        };
      };
    };
    /** Enable or disable public access to an R2 bucket through its r2.dev domain. */
    "cloudflare.update_managed_domain": {
      input: {
        /**
         * The R2 bucket name.
         * @minLength 3
         * @maxLength 64
         */
        bucketName: string;
        /** Whether to enable public bucket access at the r2.dev domain. */
        enabled: boolean;
        /** The jurisdiction where objects in the bucket are guaranteed to be stored. */
        jurisdiction?: "default" | "eu" | "fedramp" | "us";
        /** The Cloudflare account ID. Defaults to the connection account. */
        accountId?: string;
      };
      output: {
        /** The bucket ID. */
        bucketId: string;
        /** The r2.dev domain name of the bucket. */
        domain: string;
        /** Whether the bucket is publicly accessible at the r2.dev domain. */
        enabled: boolean;
      };
    };
    /** Update Pages project configuration using official API fields, including deployment_configs for environment variables and bindings. */
    "cloudflare.update_pages_project": {
      input: {
        /** The account ID. Defaults to the connection account, or the only accessible account. */
        accountId?: string;
        /**
         * The Pages project name.
         * @minLength 1
         */
        projectName: string;
        /** Official Pages project update fields. Environment variables belong under deployment_configs.production.env_vars or deployment_configs.preview.env_vars. */
        configuration: Record<string, unknown>;
      };
      output: {
        /** The Cloudflare resource, including additional upstream fields. */
        result: Record<string, unknown>;
      };
    };
    /** Replace a Cloudflare Email Routing rule in a zone. */
    "cloudflare.update_routing_rule": {
      input: {
        /**
         * The Cloudflare zone ID.
         * @minLength 1
         */
        zoneId: string;
        /**
         * The Cloudflare routing rule ID.
         * @minLength 1
         */
        ruleId: string;
        /**
         * Actions applied to matching email.
         * @minItems 1
         */
        actions: Array<{
          /** The action type. */
          type: "drop" | "forward" | "worker";
          /**
           * Destination email addresses or Worker names used by the action.
           * @minItems 1
           */
          value?: Array<string>;
        }>;
        /**
         * Conditions matching incoming email.
         * @minItems 1
         */
        matchers: Array<{
          /** The matcher type. */
          type: "all" | "literal";
          /** The email field to match. */
          field?: "to";
          /**
           * The literal email address to match.
           * @maxLength 90
           */
          value?: string;
        }>;
        /** Whether the rule is enabled. */
        enabled?: boolean;
        /**
         * The rule name.
         * @maxLength 256
         */
        name?: string;
        /**
         * The rule priority.
         * @minimum 0
         */
        priority?: number;
        /** Who manages the rule. */
        source?: "api" | "wrangler";
        /**
         * The public script tag required when source is wrangler.
         * @maxLength 32
         */
        ownerWorkerTag?: string;
      };
      output: {
        /** A Cloudflare Email Routing rule. */
        rule: {
          /** The routing rule ID. */
          id: string;
          /** Actions applied to matching email. */
          actions?: Array<{
            /** The action type. */
            type: "drop" | "forward" | "worker";
            /**
             * Destination email addresses or Worker names used by the action.
             * @minItems 1
             */
            value?: Array<string>;
          }>;
          /** Whether the rule is enabled. */
          enabled?: boolean;
          /** Conditions matching incoming email. */
          matchers?: Array<{
            /** The matcher type. */
            type: "all" | "literal";
            /** The email field to match. */
            field?: "to";
            /**
             * The literal email address to match.
             * @maxLength 90
             */
            value?: string;
          }>;
          /** The rule name. */
          name?: string;
          /**
           * The rule priority.
           * @minimum 0
           */
          priority?: number;
          /** Who manages the rule. */
          source?: "api" | "wrangler";
          /**
           * The public script tag of the Worker that owns a Wrangler-managed rule.
           * @maxLength 32
           */
          ownerWorkerTag?: string;
          /** Zone information returned for account rule listings. */
          zone?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Replace a Cloudflare Worker using the Workers beta API, setting omitted fields to API defaults. */
    "cloudflare.update_worker": {
      input: {
        /**
         * The Cloudflare account ID. Omit it when the connection uniquely identifies one account. Multi-account OAuth connections must pass an ID returned by list_accounts.
         * @minLength 1
         */
        accountId?: string;
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
    /** Update the pattern and Worker for a zone route. */
    "cloudflare.update_worker_route": {
      input: {
        /**
         * The zone ID.
         * @minLength 1
         */
        zoneId: string;
        /**
         * The Worker route ID.
         * @minLength 1
         */
        routeId: string;
        /**
         * The route pattern.
         * @minLength 1
         */
        pattern: string;
        /** The Worker script name. Omit to exclude the pattern from Workers. */
        scriptName?: string;
      };
      output: {
        /** The Cloudflare resource, including additional upstream fields. */
        result: Record<string, unknown>;
      };
    };
    /** Create or replace a Cloudflare Worker script by uploading a module bundle as multipart/form-data. */
    "cloudflare.upload_worker_script": {
      input: {
        /**
         * The Cloudflare account ID. Omit it when the connection uniquely identifies one account. Multi-account OAuth connections must pass an ID returned by list_accounts.
         * @minLength 1
         */
        accountId?: string;
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
