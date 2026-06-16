import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Submit Customer Match user identifiers to add users to or remove users from a Google Ads customer list. */
    "googleads.add_or_remove_to_customer_list": {
      input: {
        /**
         * The resource name of the customer list, for example customers/1234567890/userLists/999.
         * @minLength 1
         */
        resourceName: string;
        /**
         * The email addresses to add to or remove from the customer list.
         * @minItems 1
         */
        emails: Array<string>;
        /**
         * Whether to add new users to the list or remove existing users.
         * @default "create"
         */
        operation: "create" | "remove";
      };
      output: {
        /** The submission status returned by the connector. */
        status: string;
        /** The resource name of the created offline user data job. */
        offlineUserDataJobResourceName: string;
        /** The long-running operation resource name returned by the run request. */
        runOperationName?: string;
      };
    };
    /** Create a new Google Ads CRM-based customer list for Customer Match uploads. */
    "googleads.create_customer_list": {
      input: {
        /**
         * The name of the customer list to create.
         * @minLength 1
         */
        name: string;
        /**
         * The description of the customer list.
         * @minLength 1
         */
        description?: string;
      };
      output: {
        /** The resource name of the created customer list. */
        resourceName: string;
      };
    };
    /** Retrieve one Google Ads campaign by its campaign ID. */
    "googleads.get_campaign_by_id": {
      input: {
        /**
         * The Google Ads campaign ID to retrieve.
         * @minLength 1
         */
        campaignId: string;
      };
      output: {
        /** The matching campaign, or null when none matched. */
        campaign: {
          /** The resource name of the campaign. */
          resourceName: string;
          /** The Google Ads campaign ID. */
          id: string;
          /** The campaign name. */
          name: string;
          /** The campaign status. */
          status?: string;
          /** The high-level advertising channel type. */
          advertisingChannelType?: string;
          /** The advertising channel subtype. */
          advertisingChannelSubType?: string;
          /** The campaign start date in YYYY-MM-DD format. */
          startDate?: string;
          /** The campaign end date in YYYY-MM-DD format. */
          endDate?: string;
        } | null;
      };
    };
    /** Retrieve all Google Ads campaigns that exactly match a campaign name. */
    "googleads.get_campaign_by_name": {
      input: {
        /**
         * The exact campaign name to match.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** The campaigns that exactly matched the requested name. */
        campaigns: Array<{
          /** The resource name of the campaign. */
          resourceName: string;
          /** The Google Ads campaign ID. */
          id: string;
          /** The campaign name. */
          name: string;
          /** The campaign status. */
          status?: string;
          /** The high-level advertising channel type. */
          advertisingChannelType?: string;
          /** The advertising channel subtype. */
          advertisingChannelSubType?: string;
          /** The campaign start date in YYYY-MM-DD format. */
          startDate?: string;
          /** The campaign end date in YYYY-MM-DD format. */
          endDate?: string;
        }>;
      };
    };
    /** List Google Ads customer resource names accessible to the current OAuth credential. */
    "googleads.list_accessible_customers": {
      input: Record<string, never>;
      output: {
        /** The accessible customer resource names returned by Google Ads. */
        resourceNames: Array<string>;
      };
    };
    /** List Google Ads customer lists available under the specified customer account. */
    "googleads.list_customer_lists": {
      input: {
        /**
         * The nextPageToken returned by a previous call.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** The returned Google Ads customer lists. */
        customerLists: Array<{
          /** The resource name of the customer list. */
          resourceName: string;
          /** The Google Ads user list ID. */
          id: string;
          /** The customer list name. */
          name: string;
          /** The customer list description. */
          description?: string;
          /** The Google Ads user list type, such as CRM_BASED or RULE_BASED. */
          type?: string;
          /** Whether the user list is read-only and cannot be mutated. */
          readOnly?: boolean;
          /** The membership status of the customer list. */
          membershipStatus?: string;
          /** The estimated search list size reported by Google Ads. */
          sizeForSearch?: string;
          /** The estimated display list size reported by Google Ads. */
          sizeForDisplay?: string;
        }>;
        /** A pagination token for the next page, or null when no more results exist. */
        nextPageToken: string | null;
      };
    };
    /** Create, update, or remove Google Ads ad groups in a single mutate request. */
    "googleads.mutate_ad_groups": {
      input: {
        /**
         * The ad group operations to submit in one mutate request.
         * @minItems 1
         */
        operations: Array<{
          /** The ad group create payload. */
          create: {
            /**
             * The ad group name.
             * @minLength 1
             */
            name: string;
            /**
             * The resource name of the campaign that owns the ad group.
             * @minLength 1
             */
            campaign: string;
            /**
             * The ad group status.
             * @minLength 1
             */
            status?: string;
            /**
             * The ad group type.
             * @minLength 1
             */
            type?: string;
          };
        } | {
          /** The ad group update payload. */
          update: {
            /**
             * The resource name of the ad group to update.
             * @minLength 1
             */
            resourceName: string;
            /**
             * The updated ad group name.
             * @minLength 1
             */
            name?: string;
            /**
             * The updated ad group status.
             * @minLength 1
             */
            status?: string;
          };
        } | {
          /**
           * The resource name of the ad group to remove.
           * @minLength 1
           */
          remove: string;
        }>;
        /** Whether to validate the request without applying the mutation. */
        validateOnly?: boolean;
        /** Whether successful operations should continue when one operation fails. */
        partialFailure?: boolean;
      };
      output: {
        /** The successful ad group mutation results. */
        results: Array<{
          /** The resource name returned for a successful ad group mutation. */
          resourceName: string;
        }>;
        /** The partial failure payload returned by Google Ads, when present. */
        partialFailureError?: Record<string, unknown>;
      };
    };
    /** Create, update, or remove Google Ads campaigns in a single mutate request. */
    "googleads.mutate_campaigns": {
      input: {
        /**
         * The campaign operations to submit in one mutate request.
         * @minItems 1
         */
        operations: Array<{
          /** The mutate operation type. */
          operationType: "create";
          /** The campaign create payload. */
          create: {
            /**
             * The campaign name.
             * @minLength 1
             */
            name: string;
            /**
             * The campaign budget resource name to attach.
             * @minLength 1
             */
            campaignBudget: string;
            /**
             * The advertising channel type.
             * @minLength 1
             */
            advertisingChannelType?: string;
            /**
             * The campaign status.
             * @minLength 1
             */
            status?: string;
            /**
             * The campaign start date.
             * @minLength 1
             */
            startDate?: string;
            /**
             * The campaign end date.
             * @minLength 1
             */
            endDate?: string;
            /** The manual CPC payload. */
            manualCpc?: Record<string, unknown>;
            /**
             * The final URL suffix.
             * @minLength 1
             */
            finalUrlSuffix?: string;
            /** The campaign network settings. */
            networkSettings?: {
              /** Whether to target YouTube inventory. */
              targetYoutube?: boolean;
              /** Whether to target Google Search results. */
              targetGoogleSearch?: boolean;
              /** Whether to target Google Search partner inventory. */
              targetSearchNetwork?: boolean;
              /** Whether to target the Google Display Network. */
              targetContentNetwork?: boolean;
              /** Whether to target Google TV inventory. */
              targetGoogleTvNetwork?: boolean;
              /** Whether to target partner search inventory. */
              targetPartnerSearchNetwork?: boolean;
            };
            /**
             * The tracking URL template.
             * @minLength 1
             */
            trackingUrlTemplate?: string;
            /**
             * The custom URL parameters.
             * @minItems 1
             */
            urlCustomParameters?: Array<{
              /**
               * The custom parameter key.
               * @minLength 1
               */
              key: string;
              /**
               * The custom parameter value.
               * @minLength 1
               */
              value: string;
            }>;
            /** The campaign geo target type settings. */
            geoTargetTypeSetting?: {
              /**
               * The negative geo target type.
               * @minLength 1
               */
              negativeGeoTargetType?: string;
              /**
               * The positive geo target type.
               * @minLength 1
               */
              positiveGeoTargetType?: string;
            };
            /**
             * The campaign bidding strategy resource name.
             * @minLength 1
             */
            campaignBiddingStrategy?: string;
            /**
             * The EU political advertising status.
             * @minLength 1
             */
            containsEuPoliticalAdvertising?: string;
          };
        } | {
          /** The mutate operation type. */
          operationType: "update";
          /** The campaign update payload. */
          update: {
            /**
             * The resource name of the campaign to update.
             * @minLength 1
             */
            resourceName: string;
            /**
             * The updated campaign name.
             * @minLength 1
             */
            name?: string;
            /**
             * The updated campaign status.
             * @minLength 1
             */
            status?: string;
            /**
             * The updated campaign start date.
             * @minLength 1
             */
            startDate?: string;
            /**
             * The updated campaign end date.
             * @minLength 1
             */
            endDate?: string;
            /** The updated manual CPC payload. */
            manualCpc?: Record<string, unknown>;
            /**
             * The updated campaign budget resource name.
             * @minLength 1
             */
            campaignBudget?: string;
            /**
             * The updated final URL suffix.
             * @minLength 1
             */
            finalUrlSuffix?: string;
            /** The updated campaign network settings. */
            networkSettings?: {
              /** Whether to target YouTube inventory. */
              targetYoutube?: boolean;
              /** Whether to target Google Search results. */
              targetGoogleSearch?: boolean;
              /** Whether to target Google Search partner inventory. */
              targetSearchNetwork?: boolean;
              /** Whether to target the Google Display Network. */
              targetContentNetwork?: boolean;
              /** Whether to target Google TV inventory. */
              targetGoogleTvNetwork?: boolean;
              /** Whether to target partner search inventory. */
              targetPartnerSearchNetwork?: boolean;
            };
            /**
             * The updated tracking URL template.
             * @minLength 1
             */
            trackingUrlTemplate?: string;
            /**
             * The updated custom URL parameters.
             * @minItems 1
             */
            urlCustomParameters?: Array<{
              /**
               * The custom parameter key.
               * @minLength 1
               */
              key: string;
              /**
               * The custom parameter value.
               * @minLength 1
               */
              value: string;
            }>;
            /** The updated campaign geo target type settings. */
            geoTargetTypeSetting?: {
              /**
               * The negative geo target type.
               * @minLength 1
               */
              negativeGeoTargetType?: string;
              /**
               * The positive geo target type.
               * @minLength 1
               */
              positiveGeoTargetType?: string;
            };
            /**
             * The updated advertising channel type.
             * @minLength 1
             */
            advertisingChannelType?: string;
            /**
             * The updated campaign bidding strategy resource name.
             * @minLength 1
             */
            campaignBiddingStrategy?: string;
            /**
             * The updated EU political advertising status.
             * @minLength 1
             */
            containsEuPoliticalAdvertising?: string;
          };
        } | {
          /** The mutate operation type. */
          operationType: "remove";
          /**
           * The resource name of the campaign to remove.
           * @minLength 1
           */
          remove: string;
        }>;
        /** Whether to validate the request without applying the mutation. */
        validateOnly?: boolean;
        /** Whether successful operations should continue when one operation fails. */
        partialFailure?: boolean;
        /** Whether the API should return only resource names or mutable resources. */
        responseContentType?: "RESOURCE_NAME_ONLY" | "MUTABLE_RESOURCE";
      };
      output: {
        /** The successful campaign mutation results. */
        results: Array<{
          /** The resource name returned for a successful campaign mutation. */
          resourceName: string;
          /** The mutable campaign resource returned when requested by the API. */
          campaign?: Record<string, unknown>;
        }>;
        /** The number of campaign operations that succeeded. */
        successfulCount: number;
        /** The total number of campaign operations that were submitted. */
        totalOperationsCount: number;
        /** The partial failure payload returned by Google Ads, when present. */
        partialFailureError?: Record<string, unknown>;
      };
    };
    /** Execute a GAQL streaming query and return the aggregated result rows in one response. */
    "googleads.search_stream_gaql": {
      input: {
        /**
         * The GAQL query to execute.
         * @minLength 1
         */
        query: string;
        /** Whether to include a summary row in the streamed result. */
        summaryRowSetting?: "UNSPECIFIED" | "UNKNOWN" | "NO_SUMMARY_ROW" | "SUMMARY_ROW_WITH_RESULTS" | "SUMMARY_ROW_ONLY" | "DONOT_POST" | "GENERATE";
      };
      output: {
        /** The aggregated result rows returned by the GAQL stream. */
        results: Array<Record<string, unknown>>;
        /** The field mask returned by the GAQL stream. */
        fieldMask?: string;
        /** The request ID returned by the Google Ads API. */
        requestId?: string;
        /** The summary row returned by the GAQL stream, when requested. */
        summaryRow?: Record<string, unknown>;
        /** The query resource consumption reported by Google Ads. */
        queryResourceConsumption?: string;
      };
    };
  }
}
