import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add a community comment to a file, URL, domain, or IP address in VirusTotal. */
    "virustotal.add_comment": {
      input: {
        /**
         * File identifier such as a SHA-256 hash.
         * @minLength 1
         */
        fileId?: string;
        /**
         * Raw URL string that will be converted into a VirusTotal URL identifier.
         * @minLength 1
         */
        url?: string;
        /**
         * VirusTotal URL identifier encoded as unpadded base64url.
         * @minLength 1
         */
        urlId?: string;
        /**
         * Domain name to target.
         * @minLength 1
         */
        domain?: string;
        /**
         * IPv4 or IPv6 address to target.
         * @minLength 1
         */
        ipAddress?: string;
        /**
         * Comment text to submit for the resource.
         * @minLength 1
         */
        text: string;
      };
      output: {
        /** A VirusTotal comment object. */
        data: {
          /**
           * Unique identifier of the comment.
           * @minLength 1
           */
          id: string;
          /**
           * VirusTotal object type for the comment.
           * @minLength 1
           */
          type: string;
          /** Links related to this comment. */
          links?: {
            /**
             * Canonical API URL for this resource or collection.
             * @minLength 1
             */
            self?: string;
            /**
             * API URL for the next page of results.
             * @minLength 1
             */
            next?: string;
            /**
             * API URL for the previous page of results.
             * @minLength 1
             */
            prev?: string;
            /**
             * API URL for the related-resource view.
             * @minLength 1
             */
            related?: string;
            [key: string]: unknown;
          };
          /** Attributes of the VirusTotal comment object. */
          attributes: {
            /** Unix timestamp when the comment was created. */
            date: number;
            /** HTML-rendered representation of the comment text. */
            html?: string;
            /** Tags attached to the comment. */
            tags?: Array<string>;
            /**
             * Plain-text content of the comment.
             * @minLength 1
             */
            text: string;
            /** Vote counters attached to the comment. */
            votes?: {
              /** Number of abuse votes on the comment. */
              abuse?: number;
              /** Number of negative votes on the comment. */
              negative?: number;
              /** Number of positive votes on the comment. */
              positive?: number;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Additional metadata returned by VirusTotal. */
        meta?: Record<string, unknown>;
        /** Links returned alongside the response. */
        links?: {
          /**
           * Canonical API URL for this resource or collection.
           * @minLength 1
           */
          self?: string;
          /**
           * API URL for the next page of results.
           * @minLength 1
           */
          next?: string;
          /**
           * API URL for the previous page of results.
           * @minLength 1
           */
          prev?: string;
          /**
           * API URL for the related-resource view.
           * @minLength 1
           */
          related?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Submit a harmless or malicious vote for a VirusTotal file, URL, domain, or IP. */
    "virustotal.add_vote": {
      input: {
        /**
         * File identifier such as a SHA-256 hash.
         * @minLength 1
         */
        fileId?: string;
        /**
         * Raw URL string that will be converted into a VirusTotal URL identifier.
         * @minLength 1
         */
        url?: string;
        /**
         * VirusTotal URL identifier encoded as unpadded base64url.
         * @minLength 1
         */
        urlId?: string;
        /**
         * Domain name to target.
         * @minLength 1
         */
        domain?: string;
        /**
         * IPv4 or IPv6 address to target.
         * @minLength 1
         */
        ipAddress?: string;
        /** Verdict to submit for the resource. */
        verdict: "harmless" | "malicious";
      };
      output: {
        /** A VirusTotal vote object. */
        data: {
          /**
           * Unique identifier of the vote.
           * @minLength 1
           */
          id: string;
          /**
           * VirusTotal object type for the vote.
           * @minLength 1
           */
          type: string;
          /** Links related to this vote. */
          links?: {
            /**
             * Canonical API URL for this resource or collection.
             * @minLength 1
             */
            self?: string;
            /**
             * API URL for the next page of results.
             * @minLength 1
             */
            next?: string;
            /**
             * API URL for the previous page of results.
             * @minLength 1
             */
            prev?: string;
            /**
             * API URL for the related-resource view.
             * @minLength 1
             */
            related?: string;
            [key: string]: unknown;
          };
          /** Attributes of the VirusTotal vote object. */
          attributes: {
            /** Unix timestamp when the vote was recorded. */
            date: number;
            /** Verdict recorded for the vote. */
            verdict: "harmless" | "malicious" | "suspicious" | "undetected";
            /** Numeric value associated with the vote. */
            value?: number;
            /** Descriptor of the user who cast the vote. */
            user?: {
              /**
               * Identifier of the user who cast the vote.
               * @minLength 1
               */
              id: string;
              /**
               * VirusTotal object type for the user.
               * @minLength 1
               */
              type: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Additional metadata returned by VirusTotal. */
        meta?: Record<string, unknown>;
        /** Links returned alongside the response. */
        links?: {
          /**
           * Canonical API URL for this resource or collection.
           * @minLength 1
           */
          self?: string;
          /**
           * API URL for the next page of results.
           * @minLength 1
           */
          next?: string;
          /**
           * API URL for the previous page of results.
           * @minLength 1
           */
          prev?: string;
          /**
           * API URL for the related-resource view.
           * @minLength 1
           */
          related?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a VirusTotal analysis object by analysis ID. */
    "virustotal.get_analysis": {
      input: {
        /**
         * Identifier of the analysis to retrieve.
         * @minLength 1
         */
        analysisId: string;
      };
      output: {
        /** A VirusTotal analysis object. */
        data: {
          /**
           * Unique identifier of the analysis.
           * @minLength 1
           */
          id: string;
          /**
           * VirusTotal object type for the analysis.
           * @minLength 1
           */
          type: string;
          /** Links related to this analysis. */
          links?: {
            /**
             * Canonical API URL for this resource or collection.
             * @minLength 1
             */
            self?: string;
            /**
             * API URL for the next page of results.
             * @minLength 1
             */
            next?: string;
            /**
             * API URL for the previous page of results.
             * @minLength 1
             */
            prev?: string;
            /**
             * API URL for the related-resource view.
             * @minLength 1
             */
            related?: string;
            [key: string]: unknown;
          };
          /** Attributes of the VirusTotal analysis object. */
          attributes: {
            /** Unix timestamp when the analysis was created. */
            date: number;
            /**
             * Current status of the analysis.
             * @minLength 1
             */
            status: string;
            /** Aggregated verdict counts for the analysis. */
            stats: {
              /** Number of harmless verdicts. */
              harmless: number;
              /** Number of malicious verdicts. */
              malicious: number;
              /** Number of suspicious verdicts. */
              suspicious: number;
              /** Number of undetected verdicts. */
              undetected: number;
              /** Number of engines that timed out. */
              timeout: number;
              /** Number of engines that failed. */
              failure?: number;
              /** Number of engines with confirmed timeouts. */
              "confirmed-timeout"?: number;
              /** Number of engines that do not support the submitted type. */
              "type-unsupported"?: number;
              [key: string]: unknown;
            };
            /** Per-engine results for the analysis. */
            results: Record<string, {
                /**
                 * Verdict category assigned by the engine.
                 * @minLength 1
                 */
                category: string;
                /**
                 * Name of the security engine.
                 * @minLength 1
                 */
                engine_name: string;
                /**
                 * Version of the security engine.
                 * @minLength 1
                 */
                engine_version?: string | null;
                /**
                 * Last engine-update timestamp or version string.
                 * @minLength 1
                 */
                engine_update?: string | null;
                /**
                 * Detection method used by the engine.
                 * @minLength 1
                 */
                method: string;
                /** Detection label returned by the engine, or null when there is no label. */
                result?: string | null;
                [key: string]: unknown;
              }>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Additional metadata returned with the analysis response. */
        meta?: {
          /** File metadata returned for file analyses. */
          file_info?: {
            /**
             * MD5 hash of the submitted file.
             * @minLength 1
             */
            md5?: string;
            /**
             * SHA-1 hash of the submitted file.
             * @minLength 1
             */
            sha1?: string;
            /**
             * SHA-256 hash of the submitted file.
             * @minLength 1
             */
            sha256?: string;
            /** Size of the submitted file in bytes. */
            size?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Links returned alongside the analysis response. */
        links?: {
          /**
           * Canonical API URL for this resource or collection.
           * @minLength 1
           */
          self?: string;
          /**
           * API URL for the next page of results.
           * @minLength 1
           */
          next?: string;
          /**
           * API URL for the previous page of results.
           * @minLength 1
           */
          prev?: string;
          /**
           * API URL for the related-resource view.
           * @minLength 1
           */
          related?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve community comments for a file, URL, domain, or IP address in VirusTotal. */
    "virustotal.get_comments": {
      input: {
        /**
         * File identifier such as a SHA-256 hash.
         * @minLength 1
         */
        fileId?: string;
        /**
         * Raw URL string that will be converted into a VirusTotal URL identifier.
         * @minLength 1
         */
        url?: string;
        /**
         * VirusTotal URL identifier encoded as unpadded base64url.
         * @minLength 1
         */
        urlId?: string;
        /**
         * Domain name to target.
         * @minLength 1
         */
        domain?: string;
        /**
         * IPv4 or IPv6 address to target.
         * @minLength 1
         */
        ipAddress?: string;
        /**
         * Maximum number of comments to return.
         * @minimum 1
         * @maximum 40
         */
        limit?: number;
        /**
         * Pagination cursor returned by a previous response.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Items returned by the VirusTotal collection endpoint. */
        data: Array<{
          /**
           * Unique identifier of the comment.
           * @minLength 1
           */
          id: string;
          /**
           * VirusTotal object type for the comment.
           * @minLength 1
           */
          type: string;
          /** Links related to this comment. */
          links?: {
            /**
             * Canonical API URL for this resource or collection.
             * @minLength 1
             */
            self?: string;
            /**
             * API URL for the next page of results.
             * @minLength 1
             */
            next?: string;
            /**
             * API URL for the previous page of results.
             * @minLength 1
             */
            prev?: string;
            /**
             * API URL for the related-resource view.
             * @minLength 1
             */
            related?: string;
            [key: string]: unknown;
          };
          /** Attributes of the VirusTotal comment object. */
          attributes: {
            /** Unix timestamp when the comment was created. */
            date: number;
            /** HTML-rendered representation of the comment text. */
            html?: string;
            /** Tags attached to the comment. */
            tags?: Array<string>;
            /**
             * Plain-text content of the comment.
             * @minLength 1
             */
            text: string;
            /** Vote counters attached to the comment. */
            votes?: {
              /** Number of abuse votes on the comment. */
              abuse?: number;
              /** Number of negative votes on the comment. */
              negative?: number;
              /** Number of positive votes on the comment. */
              positive?: number;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by the collection endpoint. */
        meta?: {
          /** Number of items returned in the current response page. */
          count: number;
          /**
           * Cursor to request the next page of results.
           * @minLength 1
           */
          cursor?: string;
          [key: string]: unknown;
        };
        /** Links returned alongside the collection response. */
        links?: {
          /**
           * Canonical API URL for this resource or collection.
           * @minLength 1
           */
          self?: string;
          /**
           * API URL for the next page of results.
           * @minLength 1
           */
          next?: string;
          /**
           * API URL for the previous page of results.
           * @minLength 1
           */
          prev?: string;
          /**
           * API URL for the related-resource view.
           * @minLength 1
           */
          related?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve related VirusTotal objects for a domain, with an option to request descriptors only. */
    "virustotal.get_domain_relationships": {
      input: {
        /**
         * Domain name whose related objects should be retrieved.
         * @minLength 1
         */
        domain: string;
        /**
         * Relationship name documented by VirusTotal for the target object type.
         * @minLength 1
         */
        relationship: string;
        /**
         * Maximum number of related objects to return.
         * @minimum 1
         * @maximum 40
         */
        limit?: number;
        /**
         * Pagination cursor returned by a previous response.
         * @minLength 1
         */
        cursor?: string;
        /** Whether to return relationship descriptors instead of complete related objects. */
        descriptorsOnly?: boolean;
      };
      output: {
        /** Items returned by the VirusTotal collection endpoint. */
        data: Array<{
          /**
           * Unique identifier of the related object.
           * @minLength 1
           */
          id: string;
          /**
           * VirusTotal object type of the related object.
           * @minLength 1
           */
          type: string;
          /** Links related to the related object. */
          links?: {
            /**
             * Canonical API URL for this resource or collection.
             * @minLength 1
             */
            self?: string;
            /**
             * API URL for the next page of results.
             * @minLength 1
             */
            next?: string;
            /**
             * API URL for the previous page of results.
             * @minLength 1
             */
            prev?: string;
            /**
             * API URL for the related-resource view.
             * @minLength 1
             */
            related?: string;
            [key: string]: unknown;
          };
          /** Attributes of the related object when full objects are requested. */
          attributes?: Record<string, unknown>;
          /** Context attributes attached to the relationship. */
          context_attributes?: Record<string, unknown>;
          /** Error details when the related object is not present in the dataset. */
          error?: {
            /**
             * VirusTotal error code.
             * @minLength 1
             */
            code: string;
            /**
             * Human-readable explanation for the error.
             * @minLength 1
             */
            message: string;
          };
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by the collection endpoint. */
        meta?: {
          /** Number of items returned in the current response page. */
          count: number;
          /**
           * Cursor to request the next page of results.
           * @minLength 1
           */
          cursor?: string;
          [key: string]: unknown;
        };
        /** Links returned alongside the collection response. */
        links?: {
          /**
           * Canonical API URL for this resource or collection.
           * @minLength 1
           */
          self?: string;
          /**
           * API URL for the next page of results.
           * @minLength 1
           */
          next?: string;
          /**
           * API URL for the previous page of results.
           * @minLength 1
           */
          prev?: string;
          /**
           * API URL for the related-resource view.
           * @minLength 1
           */
          related?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve the latest VirusTotal report for a domain. */
    "virustotal.get_domain_report": {
      input: {
        /**
         * Domain name to retrieve.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        /** A VirusTotal domain object. */
        data: {
          /**
           * Domain name used as the VirusTotal object identifier.
           * @minLength 1
           */
          id: string;
          /**
           * VirusTotal object type for the domain.
           * @minLength 1
           */
          type: string;
          /** Links related to this domain. */
          links?: {
            /**
             * Canonical API URL for this resource or collection.
             * @minLength 1
             */
            self?: string;
            /**
             * API URL for the next page of results.
             * @minLength 1
             */
            next?: string;
            /**
             * API URL for the previous page of results.
             * @minLength 1
             */
            prev?: string;
            /**
             * API URL for the related-resource view.
             * @minLength 1
             */
            related?: string;
            [key: string]: unknown;
          };
          /** Attributes of the VirusTotal domain object. */
          attributes: {
            /** Unix timestamp of the latest VirusTotal analysis. */
            last_analysis_date?: number;
            /** Aggregated verdict counts for the latest analysis. */
            last_analysis_stats?: {
              /** Number of harmless verdicts. */
              harmless: number;
              /** Number of malicious verdicts. */
              malicious: number;
              /** Number of suspicious verdicts. */
              suspicious: number;
              /** Number of undetected verdicts. */
              undetected: number;
              /** Number of engines that timed out. */
              timeout: number;
              /** Number of engines that failed. */
              failure?: number;
              /** Number of engines with confirmed timeouts. */
              "confirmed-timeout"?: number;
              /** Number of engines that do not support the submitted type. */
              "type-unsupported"?: number;
              [key: string]: unknown;
            };
            /** Per-engine results for the latest analysis. */
            last_analysis_results?: Record<string, {
                /**
                 * Verdict category assigned by the engine.
                 * @minLength 1
                 */
                category: string;
                /**
                 * Name of the security engine.
                 * @minLength 1
                 */
                engine_name: string;
                /**
                 * Version of the security engine.
                 * @minLength 1
                 */
                engine_version?: string | null;
                /**
                 * Last engine-update timestamp or version string.
                 * @minLength 1
                 */
                engine_update?: string | null;
                /**
                 * Detection method used by the engine.
                 * @minLength 1
                 */
                method: string;
                /** Detection label returned by the engine, or null when there is no label. */
                result?: string | null;
                [key: string]: unknown;
              }>;
            /** Community reputation score for the object. */
            reputation?: number;
            /** Tags assigned to the object. */
            tags?: Array<string>;
            /**
             * Registrar name for the domain.
             * @minLength 1
             */
            registrar?: string;
            /** Unix timestamp when the domain was created. */
            creation_date?: number;
            /** Unix timestamp when the domain record was last updated. */
            last_update_date?: number;
            /** Unix timestamp when the WHOIS record was last fetched. */
            whois_date?: number;
            /** Unix timestamp when DNS records were last updated. */
            last_dns_records_date?: number;
            /** Domain categories keyed by provider name. */
            categories?: Record<string, string>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Additional metadata returned by VirusTotal. */
        meta?: Record<string, unknown>;
        /** Links returned alongside the response. */
        links?: {
          /**
           * Canonical API URL for this resource or collection.
           * @minLength 1
           */
          self?: string;
          /**
           * API URL for the next page of results.
           * @minLength 1
           */
          next?: string;
          /**
           * API URL for the previous page of results.
           * @minLength 1
           */
          prev?: string;
          /**
           * API URL for the related-resource view.
           * @minLength 1
           */
          related?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve the latest VirusTotal report for a file identifier. */
    "virustotal.get_file_report": {
      input: {
        /**
         * File identifier such as a SHA-256, SHA-1, or MD5 hash.
         * @minLength 1
         */
        fileId: string;
      };
      output: {
        /** A VirusTotal file object. */
        data: {
          /**
           * SHA-256 or canonical identifier of the file.
           * @minLength 1
           */
          id: string;
          /**
           * VirusTotal object type for the file.
           * @minLength 1
           */
          type: string;
          /** Links related to this file. */
          links?: {
            /**
             * Canonical API URL for this resource or collection.
             * @minLength 1
             */
            self?: string;
            /**
             * API URL for the next page of results.
             * @minLength 1
             */
            next?: string;
            /**
             * API URL for the previous page of results.
             * @minLength 1
             */
            prev?: string;
            /**
             * API URL for the related-resource view.
             * @minLength 1
             */
            related?: string;
            [key: string]: unknown;
          };
          /** Attributes of the VirusTotal file object. */
          attributes: {
            /** Unix timestamp of the latest VirusTotal analysis. */
            last_analysis_date?: number;
            /** Aggregated verdict counts for the latest analysis. */
            last_analysis_stats?: {
              /** Number of harmless verdicts. */
              harmless: number;
              /** Number of malicious verdicts. */
              malicious: number;
              /** Number of suspicious verdicts. */
              suspicious: number;
              /** Number of undetected verdicts. */
              undetected: number;
              /** Number of engines that timed out. */
              timeout: number;
              /** Number of engines that failed. */
              failure?: number;
              /** Number of engines with confirmed timeouts. */
              "confirmed-timeout"?: number;
              /** Number of engines that do not support the submitted type. */
              "type-unsupported"?: number;
              [key: string]: unknown;
            };
            /** Per-engine results for the latest analysis. */
            last_analysis_results?: Record<string, {
                /**
                 * Verdict category assigned by the engine.
                 * @minLength 1
                 */
                category: string;
                /**
                 * Name of the security engine.
                 * @minLength 1
                 */
                engine_name: string;
                /**
                 * Version of the security engine.
                 * @minLength 1
                 */
                engine_version?: string | null;
                /**
                 * Last engine-update timestamp or version string.
                 * @minLength 1
                 */
                engine_update?: string | null;
                /**
                 * Detection method used by the engine.
                 * @minLength 1
                 */
                method: string;
                /** Detection label returned by the engine, or null when there is no label. */
                result?: string | null;
                [key: string]: unknown;
              }>;
            /** Community reputation score for the object. */
            reputation?: number;
            /** Tags assigned to the object. */
            tags?: Array<string>;
            /**
             * MD5 hash of the file.
             * @minLength 1
             */
            md5?: string;
            /**
             * SHA-1 hash of the file.
             * @minLength 1
             */
            sha1?: string;
            /**
             * SHA-256 hash of the file.
             * @minLength 1
             */
            sha256?: string;
            /** File size in bytes. */
            size?: number;
            /**
             * VirusTotal type description for the file.
             * @minLength 1
             */
            type_description?: string;
            /**
             * VirusTotal type tag for the file.
             * @minLength 1
             */
            type_tag?: string;
            /** Observed filenames associated with the file. */
            names?: Array<string>;
            /** Unix timestamp when the file was first submitted. */
            first_submission_date?: number;
            /** Unix timestamp when the file was last submitted. */
            last_submission_date?: number;
            /** Unix timestamp when the file object was last modified. */
            last_modification_date?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Additional metadata returned by VirusTotal. */
        meta?: Record<string, unknown>;
        /** Links returned alongside the response. */
        links?: {
          /**
           * Canonical API URL for this resource or collection.
           * @minLength 1
           */
          self?: string;
          /**
           * API URL for the next page of results.
           * @minLength 1
           */
          next?: string;
          /**
           * API URL for the previous page of results.
           * @minLength 1
           */
          prev?: string;
          /**
           * API URL for the related-resource view.
           * @minLength 1
           */
          related?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve related VirusTotal objects for an IP address, with an option to request descriptors only. */
    "virustotal.get_ip_address_relationships": {
      input: {
        /**
         * IPv4 or IPv6 address whose related objects should be retrieved.
         * @minLength 1
         */
        ipAddress: string;
        /**
         * Relationship name documented by VirusTotal for the target object type.
         * @minLength 1
         */
        relationship: string;
        /**
         * Maximum number of related objects to return.
         * @minimum 1
         * @maximum 40
         */
        limit?: number;
        /**
         * Pagination cursor returned by a previous response.
         * @minLength 1
         */
        cursor?: string;
        /** Whether to return relationship descriptors instead of complete related objects. */
        descriptorsOnly?: boolean;
      };
      output: {
        /** Items returned by the VirusTotal collection endpoint. */
        data: Array<{
          /**
           * Unique identifier of the related object.
           * @minLength 1
           */
          id: string;
          /**
           * VirusTotal object type of the related object.
           * @minLength 1
           */
          type: string;
          /** Links related to the related object. */
          links?: {
            /**
             * Canonical API URL for this resource or collection.
             * @minLength 1
             */
            self?: string;
            /**
             * API URL for the next page of results.
             * @minLength 1
             */
            next?: string;
            /**
             * API URL for the previous page of results.
             * @minLength 1
             */
            prev?: string;
            /**
             * API URL for the related-resource view.
             * @minLength 1
             */
            related?: string;
            [key: string]: unknown;
          };
          /** Attributes of the related object when full objects are requested. */
          attributes?: Record<string, unknown>;
          /** Context attributes attached to the relationship. */
          context_attributes?: Record<string, unknown>;
          /** Error details when the related object is not present in the dataset. */
          error?: {
            /**
             * VirusTotal error code.
             * @minLength 1
             */
            code: string;
            /**
             * Human-readable explanation for the error.
             * @minLength 1
             */
            message: string;
          };
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by the collection endpoint. */
        meta?: {
          /** Number of items returned in the current response page. */
          count: number;
          /**
           * Cursor to request the next page of results.
           * @minLength 1
           */
          cursor?: string;
          [key: string]: unknown;
        };
        /** Links returned alongside the collection response. */
        links?: {
          /**
           * Canonical API URL for this resource or collection.
           * @minLength 1
           */
          self?: string;
          /**
           * API URL for the next page of results.
           * @minLength 1
           */
          next?: string;
          /**
           * API URL for the previous page of results.
           * @minLength 1
           */
          prev?: string;
          /**
           * API URL for the related-resource view.
           * @minLength 1
           */
          related?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve the latest VirusTotal report for an IP address. */
    "virustotal.get_ip_address_report": {
      input: {
        /**
         * IPv4 or IPv6 address to retrieve.
         * @minLength 1
         */
        ipAddress: string;
      };
      output: {
        /** A VirusTotal IP address object. */
        data: {
          /**
           * IP address used as the VirusTotal object identifier.
           * @minLength 1
           */
          id: string;
          /**
           * VirusTotal object type for the IP address.
           * @minLength 1
           */
          type: string;
          /** Links related to this IP address. */
          links?: {
            /**
             * Canonical API URL for this resource or collection.
             * @minLength 1
             */
            self?: string;
            /**
             * API URL for the next page of results.
             * @minLength 1
             */
            next?: string;
            /**
             * API URL for the previous page of results.
             * @minLength 1
             */
            prev?: string;
            /**
             * API URL for the related-resource view.
             * @minLength 1
             */
            related?: string;
            [key: string]: unknown;
          };
          /** Attributes of the VirusTotal IP address object. */
          attributes: {
            /** Unix timestamp of the latest VirusTotal analysis. */
            last_analysis_date?: number;
            /** Aggregated verdict counts for the latest analysis. */
            last_analysis_stats?: {
              /** Number of harmless verdicts. */
              harmless: number;
              /** Number of malicious verdicts. */
              malicious: number;
              /** Number of suspicious verdicts. */
              suspicious: number;
              /** Number of undetected verdicts. */
              undetected: number;
              /** Number of engines that timed out. */
              timeout: number;
              /** Number of engines that failed. */
              failure?: number;
              /** Number of engines with confirmed timeouts. */
              "confirmed-timeout"?: number;
              /** Number of engines that do not support the submitted type. */
              "type-unsupported"?: number;
              [key: string]: unknown;
            };
            /** Per-engine results for the latest analysis. */
            last_analysis_results?: Record<string, {
                /**
                 * Verdict category assigned by the engine.
                 * @minLength 1
                 */
                category: string;
                /**
                 * Name of the security engine.
                 * @minLength 1
                 */
                engine_name: string;
                /**
                 * Version of the security engine.
                 * @minLength 1
                 */
                engine_version?: string | null;
                /**
                 * Last engine-update timestamp or version string.
                 * @minLength 1
                 */
                engine_update?: string | null;
                /**
                 * Detection method used by the engine.
                 * @minLength 1
                 */
                method: string;
                /** Detection label returned by the engine, or null when there is no label. */
                result?: string | null;
                [key: string]: unknown;
              }>;
            /** Community reputation score for the object. */
            reputation?: number;
            /** Tags assigned to the object. */
            tags?: Array<string>;
            /**
             * Autonomous-system owner for the IP address.
             * @minLength 1
             */
            as_owner?: string;
            /** Autonomous-system number for the IP address. */
            asn?: number;
            /**
             * ISO continent code for the IP address.
             * @minLength 1
             */
            continent?: string;
            /**
             * ISO country code for the IP address.
             * @minLength 1
             */
            country?: string;
            /**
             * Network or CIDR associated with the IP address.
             * @minLength 1
             */
            network?: string;
            /**
             * JARM fingerprint for the IP address.
             * @minLength 1
             */
            jarm?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Additional metadata returned by VirusTotal. */
        meta?: Record<string, unknown>;
        /** Links returned alongside the response. */
        links?: {
          /**
           * Canonical API URL for this resource or collection.
           * @minLength 1
           */
          self?: string;
          /**
           * API URL for the next page of results.
           * @minLength 1
           */
          next?: string;
          /**
           * API URL for the previous page of results.
           * @minLength 1
           */
          prev?: string;
          /**
           * API URL for the related-resource view.
           * @minLength 1
           */
          related?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve VirusTotal metadata, including available privileges, engines, and relationship names. */
    "virustotal.get_metadata": {
      input: Record<string, never>;
      output: {
        /** Payload returned by the VirusTotal metadata endpoint. */
        data: {
          /** Mapping of engine name to engine metadata. */
          engines: Record<string, Record<string, unknown>>;
          /** Privileges granted to the current API key. */
          privileges: Array<string>;
          /** Available relationships grouped by object type. */
          relationships: Record<string, Array<{
              /**
               * Relationship name.
               * @minLength 1
               */
              name: string;
              /**
               * Human-readable explanation of the relationship.
               * @minLength 1
               */
              description: string;
            }>>;
          [key: string]: unknown;
        };
        /** Additional metadata returned by VirusTotal. */
        meta?: Record<string, unknown>;
        /** Links returned alongside the response. */
        links?: {
          /**
           * Canonical API URL for this resource or collection.
           * @minLength 1
           */
          self?: string;
          /**
           * API URL for the next page of results.
           * @minLength 1
           */
          next?: string;
          /**
           * API URL for the previous page of results.
           * @minLength 1
           */
          prev?: string;
          /**
           * API URL for the related-resource view.
           * @minLength 1
           */
          related?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve the latest VirusTotal report for a URL using either a raw URL or a VirusTotal URL identifier. */
    "virustotal.get_url_report": {
      input: {
        /**
         * Raw URL string that will be converted into a VirusTotal URL identifier.
         * @minLength 1
         */
        url?: string;
        /**
         * VirusTotal URL identifier encoded as unpadded base64url.
         * @minLength 1
         */
        urlId?: string;
      };
      output: {
        /** A VirusTotal URL object. */
        data: {
          /**
           * VirusTotal URL identifier.
           * @minLength 1
           */
          id: string;
          /**
           * VirusTotal object type for the URL.
           * @minLength 1
           */
          type: string;
          /** Links related to this URL. */
          links?: {
            /**
             * Canonical API URL for this resource or collection.
             * @minLength 1
             */
            self?: string;
            /**
             * API URL for the next page of results.
             * @minLength 1
             */
            next?: string;
            /**
             * API URL for the previous page of results.
             * @minLength 1
             */
            prev?: string;
            /**
             * API URL for the related-resource view.
             * @minLength 1
             */
            related?: string;
            [key: string]: unknown;
          };
          /** Attributes of the VirusTotal URL object. */
          attributes: {
            /** Unix timestamp of the latest VirusTotal analysis. */
            last_analysis_date?: number;
            /** Aggregated verdict counts for the latest analysis. */
            last_analysis_stats?: {
              /** Number of harmless verdicts. */
              harmless: number;
              /** Number of malicious verdicts. */
              malicious: number;
              /** Number of suspicious verdicts. */
              suspicious: number;
              /** Number of undetected verdicts. */
              undetected: number;
              /** Number of engines that timed out. */
              timeout: number;
              /** Number of engines that failed. */
              failure?: number;
              /** Number of engines with confirmed timeouts. */
              "confirmed-timeout"?: number;
              /** Number of engines that do not support the submitted type. */
              "type-unsupported"?: number;
              [key: string]: unknown;
            };
            /** Per-engine results for the latest analysis. */
            last_analysis_results?: Record<string, {
                /**
                 * Verdict category assigned by the engine.
                 * @minLength 1
                 */
                category: string;
                /**
                 * Name of the security engine.
                 * @minLength 1
                 */
                engine_name: string;
                /**
                 * Version of the security engine.
                 * @minLength 1
                 */
                engine_version?: string | null;
                /**
                 * Last engine-update timestamp or version string.
                 * @minLength 1
                 */
                engine_update?: string | null;
                /**
                 * Detection method used by the engine.
                 * @minLength 1
                 */
                method: string;
                /** Detection label returned by the engine, or null when there is no label. */
                result?: string | null;
                [key: string]: unknown;
              }>;
            /** Community reputation score for the object. */
            reputation?: number;
            /** Tags assigned to the object. */
            tags?: Array<string>;
            /**
             * Canonical URL string.
             * @minLength 1
             */
            url?: string;
            /**
             * Final URL reached after redirections.
             * @minLength 1
             */
            last_final_url?: string;
            /**
             * Title extracted from the URL response.
             * @minLength 1
             */
            title?: string;
            /** URL categories keyed by provider name. */
            categories?: Record<string, string>;
            /** Redirection chain observed for the URL. */
            redirection_chain?: Array<string>;
            /** Unix timestamp when the URL was first submitted. */
            first_submission_date?: number;
            /** Unix timestamp when the URL was last submitted. */
            last_submission_date?: number;
            /** Number of times the URL has been submitted. */
            times_submitted?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Additional metadata returned by VirusTotal. */
        meta?: Record<string, unknown>;
        /** Links returned alongside the response. */
        links?: {
          /**
           * Canonical API URL for this resource or collection.
           * @minLength 1
           */
          self?: string;
          /**
           * API URL for the next page of results.
           * @minLength 1
           */
          next?: string;
          /**
           * API URL for the previous page of results.
           * @minLength 1
           */
          prev?: string;
          /**
           * API URL for the related-resource view.
           * @minLength 1
           */
          related?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve community votes for a file, URL, domain, or IP address in VirusTotal. */
    "virustotal.get_votes": {
      input: {
        /**
         * File identifier such as a SHA-256 hash.
         * @minLength 1
         */
        fileId?: string;
        /**
         * Raw URL string that will be converted into a VirusTotal URL identifier.
         * @minLength 1
         */
        url?: string;
        /**
         * VirusTotal URL identifier encoded as unpadded base64url.
         * @minLength 1
         */
        urlId?: string;
        /**
         * Domain name to target.
         * @minLength 1
         */
        domain?: string;
        /**
         * IPv4 or IPv6 address to target.
         * @minLength 1
         */
        ipAddress?: string;
        /**
         * Maximum number of votes to return.
         * @minimum 1
         * @maximum 40
         */
        limit?: number;
        /**
         * Pagination cursor returned by a previous response.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Items returned by the VirusTotal collection endpoint. */
        data: Array<{
          /**
           * Unique identifier of the vote.
           * @minLength 1
           */
          id: string;
          /**
           * VirusTotal object type for the vote.
           * @minLength 1
           */
          type: string;
          /** Links related to this vote. */
          links?: {
            /**
             * Canonical API URL for this resource or collection.
             * @minLength 1
             */
            self?: string;
            /**
             * API URL for the next page of results.
             * @minLength 1
             */
            next?: string;
            /**
             * API URL for the previous page of results.
             * @minLength 1
             */
            prev?: string;
            /**
             * API URL for the related-resource view.
             * @minLength 1
             */
            related?: string;
            [key: string]: unknown;
          };
          /** Attributes of the VirusTotal vote object. */
          attributes: {
            /** Unix timestamp when the vote was recorded. */
            date: number;
            /** Verdict recorded for the vote. */
            verdict: "harmless" | "malicious" | "suspicious" | "undetected";
            /** Numeric value associated with the vote. */
            value?: number;
            /** Descriptor of the user who cast the vote. */
            user?: {
              /**
               * Identifier of the user who cast the vote.
               * @minLength 1
               */
              id: string;
              /**
               * VirusTotal object type for the user.
               * @minLength 1
               */
              type: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by the collection endpoint. */
        meta?: {
          /** Number of items returned in the current response page. */
          count: number;
          /**
           * Cursor to request the next page of results.
           * @minLength 1
           */
          cursor?: string;
          [key: string]: unknown;
        };
        /** Links returned alongside the collection response. */
        links?: {
          /**
           * Canonical API URL for this resource or collection.
           * @minLength 1
           */
          self?: string;
          /**
           * API URL for the next page of results.
           * @minLength 1
           */
          next?: string;
          /**
           * API URL for the previous page of results.
           * @minLength 1
           */
          prev?: string;
          /**
           * API URL for the related-resource view.
           * @minLength 1
           */
          related?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Request a fresh VirusTotal analysis for a previously submitted file. */
    "virustotal.rescan_file": {
      input: {
        /**
         * Identifier of the file to re-analyze.
         * @minLength 1
         */
        fileId: string;
      };
      output: {
        /** A VirusTotal object descriptor. */
        data: {
          /**
           * Unique identifier of the VirusTotal object.
           * @minLength 1
           */
          id: string;
          /**
           * VirusTotal object type.
           * @minLength 1
           */
          type: string;
          /** Links related to this VirusTotal object. */
          links?: {
            /**
             * Canonical API URL for this resource or collection.
             * @minLength 1
             */
            self?: string;
            /**
             * API URL for the next page of results.
             * @minLength 1
             */
            next?: string;
            /**
             * API URL for the previous page of results.
             * @minLength 1
             */
            prev?: string;
            /**
             * API URL for the related-resource view.
             * @minLength 1
             */
            related?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Additional metadata returned by VirusTotal. */
        meta?: Record<string, unknown>;
        /** Links returned alongside the response. */
        links?: {
          /**
           * Canonical API URL for this resource or collection.
           * @minLength 1
           */
          self?: string;
          /**
           * API URL for the next page of results.
           * @minLength 1
           */
          next?: string;
          /**
           * API URL for the previous page of results.
           * @minLength 1
           */
          prev?: string;
          /**
           * API URL for the related-resource view.
           * @minLength 1
           */
          related?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Submit a URL to VirusTotal for analysis. */
    "virustotal.scan_url": {
      input: {
        /**
         * Raw URL to submit for analysis.
         * @minLength 1
         */
        url: string;
      };
      output: {
        /** A VirusTotal object descriptor. */
        data: {
          /**
           * Unique identifier of the VirusTotal object.
           * @minLength 1
           */
          id: string;
          /**
           * VirusTotal object type.
           * @minLength 1
           */
          type: string;
          /** Links related to this VirusTotal object. */
          links?: {
            /**
             * Canonical API URL for this resource or collection.
             * @minLength 1
             */
            self?: string;
            /**
             * API URL for the next page of results.
             * @minLength 1
             */
            next?: string;
            /**
             * API URL for the previous page of results.
             * @minLength 1
             */
            prev?: string;
            /**
             * API URL for the related-resource view.
             * @minLength 1
             */
            related?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Additional metadata returned by VirusTotal. */
        meta?: Record<string, unknown>;
        /** Links returned alongside the response. */
        links?: {
          /**
           * Canonical API URL for this resource or collection.
           * @minLength 1
           */
          self?: string;
          /**
           * API URL for the next page of results.
           * @minLength 1
           */
          next?: string;
          /**
           * API URL for the previous page of results.
           * @minLength 1
           */
          prev?: string;
          /**
           * API URL for the related-resource view.
           * @minLength 1
           */
          related?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Search files, URLs, domains, IPs, and other objects in VirusTotal. */
    "virustotal.search": {
      input: {
        /**
         * Search query accepted by VirusTotal.
         * @minLength 1
         */
        query: string;
        /**
         * Maximum number of results to return.
         * @minimum 1
         * @maximum 40
         */
        limit?: number;
        /**
         * Pagination cursor returned by a previous response.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Items returned by the VirusTotal collection endpoint. */
        data: Array<{
          /**
           * Unique identifier of the returned object.
           * @minLength 1
           */
          id: string;
          /**
           * VirusTotal object type.
           * @minLength 1
           */
          type: string;
          /** Links related to the returned object. */
          links?: {
            /**
             * Canonical API URL for this resource or collection.
             * @minLength 1
             */
            self?: string;
            /**
             * API URL for the next page of results.
             * @minLength 1
             */
            next?: string;
            /**
             * API URL for the previous page of results.
             * @minLength 1
             */
            prev?: string;
            /**
             * API URL for the related-resource view.
             * @minLength 1
             */
            related?: string;
            [key: string]: unknown;
          };
          /** Object-specific attributes returned by VirusTotal. */
          attributes?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by the collection endpoint. */
        meta?: {
          /** Number of items returned in the current response page. */
          count: number;
          /**
           * Cursor to request the next page of results.
           * @minLength 1
           */
          cursor?: string;
          [key: string]: unknown;
        };
        /** Links returned alongside the collection response. */
        links?: {
          /**
           * Canonical API URL for this resource or collection.
           * @minLength 1
           */
          self?: string;
          /**
           * API URL for the next page of results.
           * @minLength 1
           */
          next?: string;
          /**
           * API URL for the previous page of results.
           * @minLength 1
           */
          prev?: string;
          /**
           * API URL for the related-resource view.
           * @minLength 1
           */
          related?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Upload a file to VirusTotal for analysis, automatically using the large-file upload URL when needed. */
    "virustotal.upload_file": {
      input: {
        /**
         * Base64-encoded file bytes to upload for analysis.
         * @minLength 1
         */
        contentBase64: string;
        /**
         * Filename to associate with the uploaded file.
         * @minLength 1
         */
        fileName?: string;
        /**
         * Password used to unpack a protected ZIP before analysis.
         * @minLength 1
         */
        password?: string;
      };
      output: {
        /** A VirusTotal object descriptor. */
        data: {
          /**
           * Unique identifier of the VirusTotal object.
           * @minLength 1
           */
          id: string;
          /**
           * VirusTotal object type.
           * @minLength 1
           */
          type: string;
          /** Links related to this VirusTotal object. */
          links?: {
            /**
             * Canonical API URL for this resource or collection.
             * @minLength 1
             */
            self?: string;
            /**
             * API URL for the next page of results.
             * @minLength 1
             */
            next?: string;
            /**
             * API URL for the previous page of results.
             * @minLength 1
             */
            prev?: string;
            /**
             * API URL for the related-resource view.
             * @minLength 1
             */
            related?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Additional metadata returned by VirusTotal. */
        meta?: Record<string, unknown>;
        /** Links returned alongside the response. */
        links?: {
          /**
           * Canonical API URL for this resource or collection.
           * @minLength 1
           */
          self?: string;
          /**
           * API URL for the next page of results.
           * @minLength 1
           */
          next?: string;
          /**
           * API URL for the previous page of results.
           * @minLength 1
           */
          prev?: string;
          /**
           * API URL for the related-resource view.
           * @minLength 1
           */
          related?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
