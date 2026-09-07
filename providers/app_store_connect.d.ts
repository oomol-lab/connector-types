import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add existing TestFlight testers to one group so they receive the builds that group can install. */
    "app_store_connect.add_beta_testers_to_group": {
      input: {
        /**
         * App Store Connect identifier of the TestFlight group.
         * @minLength 1
         * @pattern \S
         */
        betaGroupId: string;
        /**
         * Identifiers of the testers to add.
         * @minItems 1
         */
        betaTesterIds: Array<string>;
      };
      output: {
        /** The TestFlight group the testers were added to. */
        betaGroupId: string;
        /** Identifiers of the testers that were added. */
        betaTesterIds: Array<string>;
        /** Always true once App Store Connect confirmed the change. */
        added: boolean;
      };
    };
    /** Make one build available to TestFlight groups so their testers can install it. */
    "app_store_connect.add_build_to_beta_groups": {
      input: {
        /**
         * App Store Connect identifier of the build.
         * @minLength 1
         * @pattern \S
         */
        buildId: string;
        /**
         * Identifiers of the TestFlight groups to add the build to.
         * @minItems 1
         */
        betaGroupIds: Array<string>;
      };
      output: {
        /** The build that was distributed. */
        buildId: string;
        /** Identifiers of the groups the build was added to. */
        betaGroupIds: Array<string>;
        /** Always true once App Store Connect confirmed the change. */
        added: boolean;
      };
    };
    /** Create a TestFlight group for an app, optionally enabling its public invitation link. */
    "app_store_connect.create_beta_group": {
      input: {
        /**
         * App Store Connect identifier of the app the group belongs to.
         * @minLength 1
         * @pattern \S
         */
        appId: string;
        /**
         * Group name shown in TestFlight.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /** Enable a public TestFlight invitation link for the group. */
        publicLinkEnabled?: boolean;
        /** Enforce a maximum number of testers joining through the public link. */
        publicLinkLimitEnabled?: boolean;
        /**
         * Maximum number of testers allowed to join through the public link, from 1 to 10,000.
         * @minimum 1
         * @maximum 10000
         */
        publicLinkLimit?: number;
        /** Let testers send feedback from TestFlight. */
        feedbackEnabled?: boolean;
        /** Automatically give the group every new build of the app. */
        hasAccessToAllBuilds?: boolean;
      };
      output: {
        /** A TestFlight beta group. An attribute App Store Connect has no value for is returned as null, and older records may leave it out entirely. */
        betaGroup: {
          /** App Store Connect identifier for the beta group. */
          id: string;
          /** Group name shown in TestFlight. */
          name?: string | null;
          /** When the group was created, as an ISO 8601 timestamp. */
          createdDate?: string | null;
          /** Whether the group is an internal group of team members. */
          isInternalGroup?: boolean | null;
          /** Whether the group automatically receives every new build. */
          hasAccessToAllBuilds?: boolean | null;
          /** Whether a public TestFlight link is enabled for the group. */
          publicLinkEnabled?: boolean | null;
          /** Identifier segment of the public TestFlight link. */
          publicLinkId?: string | null;
          /** Full public TestFlight invitation link. */
          publicLink?: string | null;
          /** Whether the public link enforces a tester limit. */
          publicLinkLimitEnabled?: boolean | null;
          /** Maximum number of testers who may join through the public link. */
          publicLinkLimit?: number | null;
          /** Whether testers can send feedback from TestFlight. */
          feedbackEnabled?: boolean | null;
          /** Whether iOS builds are offered to Apple silicon Macs. */
          iosBuildsAvailableForAppleSiliconMac?: boolean | null;
          /** Whether iOS builds are offered to Apple Vision Pro. */
          iosBuildsAvailableForAppleVision?: boolean | null;
          [key: string]: unknown;
        };
      };
    };
    /** Invite a TestFlight tester by email. App Store Connect only creates a tester that is assigned to something, so pass at least one of betaGroupIds or buildIds. */
    "app_store_connect.create_beta_tester": {
      input: {
        /**
         * Email address the TestFlight invitation is sent to.
         * @format email
         */
        email: string;
        /**
         * Tester first name.
         * @minLength 1
         * @pattern \S
         */
        firstName?: string;
        /**
         * Tester last name.
         * @minLength 1
         * @pattern \S
         */
        lastName?: string;
        /**
         * TestFlight groups to add the tester to. Required unless buildIds is given.
         * @minItems 1
         */
        betaGroupIds?: Array<string>;
        /**
         * Builds to assign to the tester individually. Required unless betaGroupIds is given.
         * @minItems 1
         */
        buildIds?: Array<string>;
      };
      output: {
        /** A TestFlight beta tester. An attribute App Store Connect has no value for is returned as null, and older records may leave it out entirely. */
        betaTester: {
          /** App Store Connect identifier for the beta tester. */
          id: string;
          /** Email address the invitation was sent to. */
          email?: string | null;
          /** Tester first name. */
          firstName?: string | null;
          /** Tester last name. */
          lastName?: string | null;
          /** How the tester was invited. */
          inviteType?: "EMAIL" | "PUBLIC_LINK" | null;
          /** Where the tester stands in the invitation flow. */
          state?: "NOT_INVITED" | "INVITED" | "ACCEPTED" | "INSTALLED" | "REVOKED" | null;
          /** Devices the tester has installed the app on. */
          appDevices?: Array<{
            /** Device model name. */
            model?: string;
            /** Platform of the device. */
            platform?: "IOS" | "MAC_OS" | "TV_OS" | "WATCH_OS" | "VISION_OS";
            /** Operating system version on the device. */
            osVersion?: string;
            /** Build number installed on the device. */
            appBuildVersion?: string;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a TestFlight group. Testers who only belonged to that group lose access to its builds. */
    "app_store_connect.delete_beta_group": {
      input: {
        /**
         * App Store Connect identifier of the TestFlight group.
         * @minLength 1
         * @pattern \S
         */
        betaGroupId: string;
      };
      output: {
        /** App Store Connect identifier of the deleted TestFlight group. */
        id: string;
        /** Always true once App Store Connect confirmed the deletion. */
        deleted: boolean;
      };
    };
    /** Remove a TestFlight tester from the team, revoking their access to every build and group. */
    "app_store_connect.delete_beta_tester": {
      input: {
        /**
         * App Store Connect identifier of the TestFlight tester.
         * @minLength 1
         * @pattern \S
         */
        betaTesterId: string;
      };
      output: {
        /** App Store Connect identifier of the removed TestFlight tester. */
        id: string;
        /** Always true once App Store Connect confirmed the deletion. */
        deleted: boolean;
      };
    };
    /** Remove a published developer response from an App Store review. */
    "app_store_connect.delete_customer_review_response": {
      input: {
        /**
         * App Store Connect identifier of the developer response.
         * @minLength 1
         * @pattern \S
         */
        customerReviewResponseId: string;
      };
      output: {
        /** App Store Connect identifier of the removed developer response. */
        id: string;
        /** Always true once App Store Connect confirmed the deletion. */
        deleted: boolean;
      };
    };
    /** Read one app record by its App Store Connect identifier. */
    "app_store_connect.get_app": {
      input: {
        /**
         * App Store Connect identifier of the app.
         * @minLength 1
         * @pattern \S
         */
        appId: string;
      };
      output: {
        /** An app registered in App Store Connect. An attribute App Store Connect has no value for is returned as null, and older records may leave it out entirely. */
        app: {
          /** App Store Connect identifier for the app. */
          id: string;
          /** App name shown on the App Store. */
          name?: string | null;
          /** Bundle identifier registered for the app. */
          bundleId?: string | null;
          /** SKU chosen when the app record was created. */
          sku?: string | null;
          /** Primary App Store locale, such as en-US. */
          primaryLocale?: string | null;
          /** Whether the app is or has ever been part of the Kids category. */
          isOrEverWasMadeForKids?: boolean | null;
          /** Third-party content rights declared for the app. */
          contentRightsDeclaration?: "DOES_NOT_USE_THIRD_PARTY_CONTENT" | "USES_THIRD_PARTY_CONTENT" | null;
          /** Whether streamlined purchasing is enabled for the app. */
          streamlinedPurchasingEnabled?: boolean | null;
          /** Accessibility information URL published with the app. */
          accessibilityUrl?: string | null;
          /** Production server-to-server subscription status URL. */
          subscriptionStatusUrl?: string | null;
          /** Version of the production subscription status URL. */
          subscriptionStatusUrlVersion?: "V1" | "V2" | null;
          /** Sandbox server-to-server subscription status URL. */
          subscriptionStatusUrlForSandbox?: string | null;
          /** Version of the sandbox subscription status URL. */
          subscriptionStatusUrlVersionForSandbox?: "V1" | "V2" | null;
          [key: string]: unknown;
        };
      };
    };
    /** Read one App Store version by its App Store Connect identifier. */
    "app_store_connect.get_app_store_version": {
      input: {
        /**
         * App Store Connect identifier of the version.
         * @minLength 1
         * @pattern \S
         */
        appStoreVersionId: string;
      };
      output: {
        /** An App Store version of an app. An attribute App Store Connect has no value for is returned as null, and older records may leave it out entirely. */
        appStoreVersion: {
          /** App Store Connect identifier for the version. */
          id: string;
          /** Content platform the version targets. */
          platform?: "IOS" | "MAC_OS" | "TV_OS" | "VISION_OS" | null;
          /** Version string shown on the App Store, such as 1.4.0. */
          versionString?: string | null;
          /** Current review and release state. */
          appVersionState?: "ACCEPTED" | "DEVELOPER_REJECTED" | "IN_REVIEW" | "INVALID_BINARY" | "METADATA_REJECTED" | "PENDING_APPLE_RELEASE" | "PENDING_DEVELOPER_RELEASE" | "PREPARE_FOR_SUBMISSION" | "PROCESSING_FOR_DISTRIBUTION" | "READY_FOR_DISTRIBUTION" | "READY_FOR_REVIEW" | "REJECTED" | "REPLACED_WITH_NEW_VERSION" | "WAITING_FOR_EXPORT_COMPLIANCE" | "WAITING_FOR_REVIEW" | null;
          /** Copyright line published with the version. */
          copyright?: string | null;
          /** Review track the version goes through. */
          reviewType?: "APP_STORE" | "NOTARIZATION" | null;
          /** Release behavior after approval. */
          releaseType?: "MANUAL" | "AFTER_APPROVAL" | "SCHEDULED" | null;
          /** Earliest scheduled release time, as an ISO 8601 timestamp. */
          earliestReleaseDate?: string | null;
          /** Whether the version is downloadable. */
          downloadable?: boolean | null;
          /** When the version record was created, as an ISO 8601 timestamp. */
          createdDate?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Read one build together with its prerelease version, its TestFlight review submission, and the app it belongs to. */
    "app_store_connect.get_build": {
      input: {
        /**
         * App Store Connect identifier of the build.
         * @minLength 1
         * @pattern \S
         */
        buildId: string;
      };
      output: {
        /** A build with the related records requested alongside it. An attribute App Store Connect has no value for is returned as null, and older records may leave it out entirely. */
        build: {
          /** App Store Connect identifier for the build. */
          id: string;
          /** Build number, such as 42. */
          version?: string | null;
          /** When the build finished uploading, as an ISO 8601 timestamp. */
          uploadedDate?: string | null;
          /** When the build stops being installable by testers. */
          expirationDate?: string | null;
          /** Whether the build has expired for TestFlight. */
          expired?: boolean | null;
          /** Processing state of the uploaded build. */
          processingState?: "PROCESSING" | "FAILED" | "INVALID" | "VALID" | null;
          /** Distribution audience the build was uploaded for. */
          buildAudienceType?: "INTERNAL_ONLY" | "APP_STORE_ELIGIBLE" | null;
          /** The prerelease version a build belongs to, or null when it was not returned. */
          preReleaseVersion: {
            /** App Store Connect identifier for the prerelease version. */
            id: string;
            /** Marketing version string, such as 1.4.0. */
            version?: string | null;
            /** Content platform the version targets. */
            platform?: "IOS" | "MAC_OS" | "TV_OS" | "VISION_OS" | null;
            [key: string]: unknown;
          } | null;
          /** The TestFlight beta review submission for a build, or null when there is none. */
          betaAppReviewSubmission: {
            /** App Store Connect identifier for the beta app review submission. */
            id: string;
            /** State of the TestFlight beta review. */
            betaReviewState?: "WAITING_FOR_REVIEW" | "IN_REVIEW" | "REJECTED" | "APPROVED" | null;
            /** When the build was submitted for beta review, as an ISO 8601 timestamp. */
            submittedDate?: string | null;
            [key: string]: unknown;
          } | null;
          /** The app a record belongs to, or null when App Store Connect did not return it. */
          app: {
            /** App Store Connect identifier for the app. */
            id: string;
            /** App name shown on the App Store. */
            name?: string | null;
            /** Bundle identifier registered for the app. */
            bundleId?: string | null;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        };
      };
    };
    /** Read one App Store review together with the developer response published for it. */
    "app_store_connect.get_customer_review": {
      input: {
        /**
         * App Store Connect identifier of the review.
         * @minLength 1
         * @pattern \S
         */
        customerReviewId: string;
      };
      output: {
        /** A customer review left on the App Store. An attribute App Store Connect has no value for is returned as null, and older records may leave it out entirely. */
        customerReview: {
          /** App Store Connect identifier for the review. */
          id: string;
          /** Star rating from 1 to 5. */
          rating?: number | null;
          /** Review title. */
          title?: string | null;
          /** Review text. */
          body?: string | null;
          /** Nickname the reviewer publishes under. */
          reviewerNickname?: string | null;
          /** When the review was written, as an ISO 8601 timestamp. */
          createdDate?: string | null;
          /** ISO 3166-1 alpha-3 storefront the review was written in, such as USA. */
          territory?: string | null;
          /** The developer response published for a review, or null when there is none. */
          response: {
            /** App Store Connect identifier for the response. */
            id: string;
            /** Text of the developer response. */
            responseBody?: string | null;
            /** When the response was last changed, as an ISO 8601 timestamp. */
            lastModifiedDate?: string | null;
            /** Publication state of the response. */
            state?: "PUBLISHED" | "PENDING_PUBLISH" | null;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        };
      };
    };
    /** Read one App Store Connect team member by identifier. */
    "app_store_connect.get_user": {
      input: {
        /**
         * App Store Connect identifier of the team member.
         * @minLength 1
         * @pattern \S
         */
        userId: string;
      };
      output: {
        /** A member of the App Store Connect team. An attribute App Store Connect has no value for is returned as null, and older records may leave it out entirely. */
        user: {
          /** App Store Connect identifier for the user. */
          id: string;
          /** Apple Account email the user signs in with. */
          username?: string | null;
          /** User first name. */
          firstName?: string | null;
          /** User last name. */
          lastName?: string | null;
          /** Roles granted to the user. */
          roles?: Array<"ADMIN" | "FINANCE" | "ACCOUNT_HOLDER" | "SALES" | "MARKETING" | "APP_MANAGER" | "DEVELOPER" | "ACCESS_TO_REPORTS" | "CUSTOMER_SUPPORT" | "CREATE_APPS" | "CLOUD_MANAGED_DEVELOPER_ID" | "CLOUD_MANAGED_APP_DISTRIBUTION" | "GENERATE_INDIVIDUAL_KEYS"> | null;
          /** Whether the user can see every app on the team. */
          allAppsVisible?: boolean | null;
          /** Whether the user may manage certificates, identifiers, and profiles. */
          provisioningAllowed?: boolean | null;
          [key: string]: unknown;
        };
      };
    };
    /** List the App Store versions of one app, with the review and release state of each version. */
    "app_store_connect.list_app_store_versions": {
      input: {
        /**
         * App Store Connect identifier of the app.
         * @minLength 1
         * @pattern \S
         */
        appId: string;
        /** Return only versions for this content platform. */
        platform?: "IOS" | "MAC_OS" | "TV_OS" | "VISION_OS";
        /**
         * Return only the version with this exact version string.
         * @minLength 1
         * @pattern \S
         */
        versionString?: string;
        /** Return only versions in this review and release state. */
        appVersionState?: "ACCEPTED" | "DEVELOPER_REJECTED" | "IN_REVIEW" | "INVALID_BINARY" | "METADATA_REJECTED" | "PENDING_APPLE_RELEASE" | "PENDING_DEVELOPER_RELEASE" | "PREPARE_FOR_SUBMISSION" | "PROCESSING_FOR_DISTRIBUTION" | "READY_FOR_DISTRIBUTION" | "READY_FOR_REVIEW" | "REJECTED" | "REPLACED_WITH_NEW_VERSION" | "WAITING_FOR_EXPORT_COMPLIANCE" | "WAITING_FOR_REVIEW";
        /**
         * Maximum number of records to return on this page. App Store Connect allows up to 200.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * Opaque page cursor taken from the nextCursor value of a previous response for the same query.
         * @minLength 1
         * @pattern \S
         */
        cursor?: string;
      };
      output: {
        /** App Store versions returned for this page. */
        appStoreVersions: Array<{
          /** App Store Connect identifier for the version. */
          id: string;
          /** Content platform the version targets. */
          platform?: "IOS" | "MAC_OS" | "TV_OS" | "VISION_OS" | null;
          /** Version string shown on the App Store, such as 1.4.0. */
          versionString?: string | null;
          /** Current review and release state. */
          appVersionState?: "ACCEPTED" | "DEVELOPER_REJECTED" | "IN_REVIEW" | "INVALID_BINARY" | "METADATA_REJECTED" | "PENDING_APPLE_RELEASE" | "PENDING_DEVELOPER_RELEASE" | "PREPARE_FOR_SUBMISSION" | "PROCESSING_FOR_DISTRIBUTION" | "READY_FOR_DISTRIBUTION" | "READY_FOR_REVIEW" | "REJECTED" | "REPLACED_WITH_NEW_VERSION" | "WAITING_FOR_EXPORT_COMPLIANCE" | "WAITING_FOR_REVIEW" | null;
          /** Copyright line published with the version. */
          copyright?: string | null;
          /** Review track the version goes through. */
          reviewType?: "APP_STORE" | "NOTARIZATION" | null;
          /** Release behavior after approval. */
          releaseType?: "MANUAL" | "AFTER_APPROVAL" | "SCHEDULED" | null;
          /** Earliest scheduled release time, as an ISO 8601 timestamp. */
          earliestReleaseDate?: string | null;
          /** Whether the version is downloadable. */
          downloadable?: boolean | null;
          /** When the version record was created, as an ISO 8601 timestamp. */
          createdDate?: string | null;
          [key: string]: unknown;
        }>;
        /** Cursor to pass back as cursor for the next page, or null when this was the last page. */
        nextCursor: string | null;
        /** Total number of records matching the query when App Store Connect reports one, otherwise null. */
        total: number | null;
      };
    };
    /** List the apps the API key can see, optionally filtered by bundle identifier, name, or SKU. */
    "app_store_connect.list_apps": {
      input: {
        /**
         * Return only the app with this exact bundle identifier.
         * @minLength 1
         * @pattern \S
         */
        bundleId?: string;
        /**
         * Return only apps with this exact name.
         * @minLength 1
         * @pattern \S
         */
        name?: string;
        /**
         * Return only the app with this exact SKU.
         * @minLength 1
         * @pattern \S
         */
        sku?: string;
        /** Sort order for the returned apps. */
        sort?: "name" | "-name" | "bundleId" | "-bundleId" | "sku" | "-sku";
        /**
         * Maximum number of records to return on this page. App Store Connect allows up to 200.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * Opaque page cursor taken from the nextCursor value of a previous response for the same query.
         * @minLength 1
         * @pattern \S
         */
        cursor?: string;
      };
      output: {
        /** Apps returned for this page. */
        apps: Array<{
          /** App Store Connect identifier for the app. */
          id: string;
          /** App name shown on the App Store. */
          name?: string | null;
          /** Bundle identifier registered for the app. */
          bundleId?: string | null;
          /** SKU chosen when the app record was created. */
          sku?: string | null;
          /** Primary App Store locale, such as en-US. */
          primaryLocale?: string | null;
          /** Whether the app is or has ever been part of the Kids category. */
          isOrEverWasMadeForKids?: boolean | null;
          /** Third-party content rights declared for the app. */
          contentRightsDeclaration?: "DOES_NOT_USE_THIRD_PARTY_CONTENT" | "USES_THIRD_PARTY_CONTENT" | null;
          /** Whether streamlined purchasing is enabled for the app. */
          streamlinedPurchasingEnabled?: boolean | null;
          /** Accessibility information URL published with the app. */
          accessibilityUrl?: string | null;
          /** Production server-to-server subscription status URL. */
          subscriptionStatusUrl?: string | null;
          /** Version of the production subscription status URL. */
          subscriptionStatusUrlVersion?: "V1" | "V2" | null;
          /** Sandbox server-to-server subscription status URL. */
          subscriptionStatusUrlForSandbox?: string | null;
          /** Version of the sandbox subscription status URL. */
          subscriptionStatusUrlVersionForSandbox?: "V1" | "V2" | null;
          [key: string]: unknown;
        }>;
        /** Cursor to pass back as cursor for the next page, or null when this was the last page. */
        nextCursor: string | null;
        /** Total number of records matching the query when App Store Connect reports one, otherwise null. */
        total: number | null;
      };
    };
    /** List the TestFlight groups of one app, including the public invitation link of each group. */
    "app_store_connect.list_beta_groups": {
      input: {
        /**
         * App Store Connect identifier of the app.
         * @minLength 1
         * @pattern \S
         */
        appId: string;
        /**
         * Return only the group with this exact name.
         * @minLength 1
         * @pattern \S
         */
        name?: string;
        /** Return only internal groups when true, or only external groups when false. */
        isInternalGroup?: boolean;
        /** Return only groups whose public link is enabled or disabled. */
        publicLinkEnabled?: boolean;
        /**
         * Maximum number of records to return on this page. App Store Connect allows up to 200.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * Opaque page cursor taken from the nextCursor value of a previous response for the same query.
         * @minLength 1
         * @pattern \S
         */
        cursor?: string;
      };
      output: {
        /** TestFlight groups returned for this page. */
        betaGroups: Array<{
          /** App Store Connect identifier for the beta group. */
          id: string;
          /** Group name shown in TestFlight. */
          name?: string | null;
          /** When the group was created, as an ISO 8601 timestamp. */
          createdDate?: string | null;
          /** Whether the group is an internal group of team members. */
          isInternalGroup?: boolean | null;
          /** Whether the group automatically receives every new build. */
          hasAccessToAllBuilds?: boolean | null;
          /** Whether a public TestFlight link is enabled for the group. */
          publicLinkEnabled?: boolean | null;
          /** Identifier segment of the public TestFlight link. */
          publicLinkId?: string | null;
          /** Full public TestFlight invitation link. */
          publicLink?: string | null;
          /** Whether the public link enforces a tester limit. */
          publicLinkLimitEnabled?: boolean | null;
          /** Maximum number of testers who may join through the public link. */
          publicLinkLimit?: number | null;
          /** Whether testers can send feedback from TestFlight. */
          feedbackEnabled?: boolean | null;
          /** Whether iOS builds are offered to Apple silicon Macs. */
          iosBuildsAvailableForAppleSiliconMac?: boolean | null;
          /** Whether iOS builds are offered to Apple Vision Pro. */
          iosBuildsAvailableForAppleVision?: boolean | null;
          [key: string]: unknown;
        }>;
        /** Cursor to pass back as cursor for the next page, or null when this was the last page. */
        nextCursor: string | null;
        /** Total number of records matching the query when App Store Connect reports one, otherwise null. */
        total: number | null;
      };
    };
    /** List TestFlight testers, optionally narrowed to one app, group, or build. */
    "app_store_connect.list_beta_testers": {
      input: {
        /**
         * Return only the tester with this exact email address.
         * @format email
         */
        email?: string;
        /**
         * Return only testers with this exact first name.
         * @minLength 1
         * @pattern \S
         */
        firstName?: string;
        /**
         * Return only testers with this exact last name.
         * @minLength 1
         * @pattern \S
         */
        lastName?: string;
        /** Return only testers invited this way. */
        inviteType?: "EMAIL" | "PUBLIC_LINK";
        /**
         * Return only testers who have access to this app.
         * @minLength 1
         * @pattern \S
         */
        appId?: string;
        /**
         * Return only testers who belong to this TestFlight group.
         * @minLength 1
         * @pattern \S
         */
        betaGroupId?: string;
        /**
         * Return only testers who were assigned this build individually.
         * @minLength 1
         * @pattern \S
         */
        buildId?: string;
        /** Sort order for the returned testers. */
        sort?: "firstName" | "-firstName" | "lastName" | "-lastName" | "email" | "-email" | "inviteType" | "-inviteType" | "state" | "-state";
        /**
         * Maximum number of records to return on this page. App Store Connect allows up to 200.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * Opaque page cursor taken from the nextCursor value of a previous response for the same query.
         * @minLength 1
         * @pattern \S
         */
        cursor?: string;
      };
      output: {
        /** TestFlight testers returned for this page. */
        betaTesters: Array<{
          /** App Store Connect identifier for the beta tester. */
          id: string;
          /** Email address the invitation was sent to. */
          email?: string | null;
          /** Tester first name. */
          firstName?: string | null;
          /** Tester last name. */
          lastName?: string | null;
          /** How the tester was invited. */
          inviteType?: "EMAIL" | "PUBLIC_LINK" | null;
          /** Where the tester stands in the invitation flow. */
          state?: "NOT_INVITED" | "INVITED" | "ACCEPTED" | "INSTALLED" | "REVOKED" | null;
          /** Devices the tester has installed the app on. */
          appDevices?: Array<{
            /** Device model name. */
            model?: string;
            /** Platform of the device. */
            platform?: "IOS" | "MAC_OS" | "TV_OS" | "WATCH_OS" | "VISION_OS";
            /** Operating system version on the device. */
            osVersion?: string;
            /** Build number installed on the device. */
            appBuildVersion?: string;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        }>;
        /** Cursor to pass back as cursor for the next page, or null when this was the last page. */
        nextCursor: string | null;
        /** Total number of records matching the query when App Store Connect reports one, otherwise null. */
        total: number | null;
      };
    };
    /** List builds uploaded for one app, with the prerelease version each build belongs to. Filter by version, platform, processing state, or TestFlight review state. */
    "app_store_connect.list_builds": {
      input: {
        /**
         * App Store Connect identifier of the app whose builds to list.
         * @minLength 1
         * @pattern \S
         */
        appId: string;
        /**
         * Return only builds with this build number, such as 42.
         * @minLength 1
         * @pattern \S
         */
        version?: string;
        /**
         * Return only builds under this marketing version, such as 1.4.0.
         * @minLength 1
         * @pattern \S
         */
        preReleaseVersion?: string;
        /** Return only builds for this content platform. */
        platform?: "IOS" | "MAC_OS" | "TV_OS" | "VISION_OS";
        /** Return only builds in this processing state. */
        processingState?: "PROCESSING" | "FAILED" | "INVALID" | "VALID";
        /** Return only builds whose beta review submission is in this state. */
        betaReviewState?: "WAITING_FOR_REVIEW" | "IN_REVIEW" | "REJECTED" | "APPROVED";
        /** Return only expired builds when true, or only unexpired builds when false. */
        expired?: boolean;
        /** Sort order for the returned builds. */
        sort?: "version" | "-version" | "uploadedDate" | "-uploadedDate" | "preReleaseVersion" | "-preReleaseVersion";
        /**
         * Maximum number of records to return on this page. App Store Connect allows up to 200.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * Opaque page cursor taken from the nextCursor value of a previous response for the same query.
         * @minLength 1
         * @pattern \S
         */
        cursor?: string;
      };
      output: {
        /** Builds returned for this page. */
        builds: Array<{
          /** App Store Connect identifier for the build. */
          id: string;
          /** Build number, such as 42. */
          version?: string | null;
          /** When the build finished uploading, as an ISO 8601 timestamp. */
          uploadedDate?: string | null;
          /** When the build stops being installable by testers. */
          expirationDate?: string | null;
          /** Whether the build has expired for TestFlight. */
          expired?: boolean | null;
          /** Processing state of the uploaded build. */
          processingState?: "PROCESSING" | "FAILED" | "INVALID" | "VALID" | null;
          /** Distribution audience the build was uploaded for. */
          buildAudienceType?: "INTERNAL_ONLY" | "APP_STORE_ELIGIBLE" | null;
          /** The prerelease version a build belongs to, or null when it was not returned. */
          preReleaseVersion: {
            /** App Store Connect identifier for the prerelease version. */
            id: string;
            /** Marketing version string, such as 1.4.0. */
            version?: string | null;
            /** Content platform the version targets. */
            platform?: "IOS" | "MAC_OS" | "TV_OS" | "VISION_OS" | null;
            [key: string]: unknown;
          } | null;
          /** Minimum OS version the build supports. */
          minOsVersion?: string | null;
          /** Minimum macOS system version declared by the build. */
          lsMinimumSystemVersion?: string | null;
          /** Minimum macOS version App Store Connect computed for the build. */
          computedMinMacOsVersion?: string | null;
          /** Minimum visionOS version App Store Connect computed for the build. */
          computedMinVisionOsVersion?: string | null;
          /** Whether the build declares non-exempt encryption. */
          usesNonExemptEncryption?: boolean | null;
          /** Template URL and pixel size of the build icon asset. */
          iconAssetToken?: {
            /** Template URL with width, height, and format placeholders. */
            templateUrl?: string;
            /** Icon width in pixels. */
            width?: number;
            /** Icon height in pixels. */
            height?: number;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        }>;
        /** Cursor to pass back as cursor for the next page, or null when this was the last page. */
        nextCursor: string | null;
        /** Total number of records matching the query when App Store Connect reports one, otherwise null. */
        total: number | null;
      };
    };
    /** List the App Store reviews of one app together with the developer response published for each review. */
    "app_store_connect.list_customer_reviews": {
      input: {
        /**
         * App Store Connect identifier of the app.
         * @minLength 1
         * @pattern \S
         */
        appId: string;
        /**
         * Return only reviews with this star rating.
         * @minimum 1
         * @maximum 5
         */
        rating?: number;
        /**
         * Return only reviews written in this storefront, as an ISO 3166-1 alpha-3 code such as USA or DEU.
         * @minLength 1
         * @pattern ^[A-Z]{3}$
         */
        territory?: string;
        /** Return only reviews that already have a developer response, or only those without. */
        hasResponse?: boolean;
        /** Sort order for the returned reviews. */
        sort?: "rating" | "-rating" | "createdDate" | "-createdDate";
        /**
         * Maximum number of records to return on this page. App Store Connect allows up to 200.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * Opaque page cursor taken from the nextCursor value of a previous response for the same query.
         * @minLength 1
         * @pattern \S
         */
        cursor?: string;
      };
      output: {
        /** Reviews returned for this page. */
        customerReviews: Array<{
          /** App Store Connect identifier for the review. */
          id: string;
          /** Star rating from 1 to 5. */
          rating?: number | null;
          /** Review title. */
          title?: string | null;
          /** Review text. */
          body?: string | null;
          /** Nickname the reviewer publishes under. */
          reviewerNickname?: string | null;
          /** When the review was written, as an ISO 8601 timestamp. */
          createdDate?: string | null;
          /** ISO 3166-1 alpha-3 storefront the review was written in, such as USA. */
          territory?: string | null;
          /** The developer response published for a review, or null when there is none. */
          response: {
            /** App Store Connect identifier for the response. */
            id: string;
            /** Text of the developer response. */
            responseBody?: string | null;
            /** When the response was last changed, as an ISO 8601 timestamp. */
            lastModifiedDate?: string | null;
            /** Publication state of the response. */
            state?: "PUBLISHED" | "PENDING_PUBLISH" | null;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        }>;
        /** Cursor to pass back as cursor for the next page, or null when this was the last page. */
        nextCursor: string | null;
        /** Total number of records matching the query when App Store Connect reports one, otherwise null. */
        total: number | null;
      };
    };
    /** List the prerelease versions of one app, which group its TestFlight builds by marketing version. */
    "app_store_connect.list_pre_release_versions": {
      input: {
        /**
         * App Store Connect identifier of the app.
         * @minLength 1
         * @pattern \S
         */
        appId: string;
        /** Return only prerelease versions for this content platform. */
        platform?: "IOS" | "MAC_OS" | "TV_OS" | "VISION_OS";
        /**
         * Return only the prerelease version with this exact version string.
         * @minLength 1
         * @pattern \S
         */
        version?: string;
        /** Sort order for the returned prerelease versions. */
        sort?: "version" | "-version";
        /**
         * Maximum number of records to return on this page. App Store Connect allows up to 200.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * Opaque page cursor taken from the nextCursor value of a previous response for the same query.
         * @minLength 1
         * @pattern \S
         */
        cursor?: string;
      };
      output: {
        /** Prerelease versions returned for this page. */
        preReleaseVersions: Array<{
          /** App Store Connect identifier for the prerelease version. */
          id: string;
          /** Marketing version string, such as 1.4.0. */
          version?: string | null;
          /** Content platform the version targets. */
          platform?: "IOS" | "MAC_OS" | "TV_OS" | "VISION_OS" | null;
          [key: string]: unknown;
        }>;
        /** Cursor to pass back as cursor for the next page, or null when this was the last page. */
        nextCursor: string | null;
        /** Total number of records matching the query when App Store Connect reports one, otherwise null. */
        total: number | null;
      };
    };
    /** List the members of the App Store Connect team, with the roles granted to each of them. */
    "app_store_connect.list_users": {
      input: {
        /**
         * Return only users holding at least one of these roles.
         * @minItems 1
         */
        roles?: Array<"ADMIN" | "FINANCE" | "ACCOUNT_HOLDER" | "SALES" | "MARKETING" | "APP_MANAGER" | "DEVELOPER" | "ACCESS_TO_REPORTS" | "CUSTOMER_SUPPORT" | "CREATE_APPS" | "CLOUD_MANAGED_DEVELOPER_ID" | "CLOUD_MANAGED_APP_DISTRIBUTION" | "GENERATE_INDIVIDUAL_KEYS">;
        /**
         * Return only the user with this exact Apple Account email.
         * @minLength 1
         * @pattern \S
         */
        username?: string;
        /**
         * Return only users who can see this app.
         * @minLength 1
         * @pattern \S
         */
        visibleAppId?: string;
        /** Sort order for the returned users. */
        sort?: "username" | "-username" | "lastName" | "-lastName";
        /**
         * Maximum number of records to return on this page. App Store Connect allows up to 200.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * Opaque page cursor taken from the nextCursor value of a previous response for the same query.
         * @minLength 1
         * @pattern \S
         */
        cursor?: string;
      };
      output: {
        /** Team members returned for this page. */
        users: Array<{
          /** App Store Connect identifier for the user. */
          id: string;
          /** Apple Account email the user signs in with. */
          username?: string | null;
          /** User first name. */
          firstName?: string | null;
          /** User last name. */
          lastName?: string | null;
          /** Roles granted to the user. */
          roles?: Array<"ADMIN" | "FINANCE" | "ACCOUNT_HOLDER" | "SALES" | "MARKETING" | "APP_MANAGER" | "DEVELOPER" | "ACCESS_TO_REPORTS" | "CUSTOMER_SUPPORT" | "CREATE_APPS" | "CLOUD_MANAGED_DEVELOPER_ID" | "CLOUD_MANAGED_APP_DISTRIBUTION" | "GENERATE_INDIVIDUAL_KEYS"> | null;
          /** Whether the user can see every app on the team. */
          allAppsVisible?: boolean | null;
          /** Whether the user may manage certificates, identifiers, and profiles. */
          provisioningAllowed?: boolean | null;
          [key: string]: unknown;
        }>;
        /** Cursor to pass back as cursor for the next page, or null when this was the last page. */
        nextCursor: string | null;
        /** Total number of records matching the query when App Store Connect reports one, otherwise null. */
        total: number | null;
      };
    };
    /** Remove testers from one TestFlight group. The testers stay on the team and keep access through their other groups. */
    "app_store_connect.remove_beta_testers_from_group": {
      input: {
        /**
         * App Store Connect identifier of the TestFlight group.
         * @minLength 1
         * @pattern \S
         */
        betaGroupId: string;
        /**
         * Identifiers of the testers to remove.
         * @minItems 1
         */
        betaTesterIds: Array<string>;
      };
      output: {
        /** The TestFlight group the testers were removed from. */
        betaGroupId: string;
        /** Identifiers of the testers that were removed. */
        betaTesterIds: Array<string>;
        /** Always true once App Store Connect confirmed the change. */
        removed: boolean;
      };
    };
    /** Publish a developer response to an App Store review. App Store Connect treats this as an upsert: an existing response for the same review is replaced, and publication is asynchronous. */
    "app_store_connect.respond_to_customer_review": {
      input: {
        /**
         * App Store Connect identifier of the review to respond to.
         * @minLength 1
         * @pattern \S
         */
        customerReviewId: string;
        /**
         * Text of the developer response.
         * @minLength 1
         * @pattern \S
         */
        responseBody: string;
      };
      output: {
        /** The stored developer response. */
        customerReviewResponse: {
          /** App Store Connect identifier for the response. */
          id: string;
          /** Text of the developer response. */
          responseBody?: string | null;
          /** When the response was last changed, as an ISO 8601 timestamp. */
          lastModifiedDate?: string | null;
          /** Publication state of the response. */
          state?: "PUBLISHED" | "PENDING_PUBLISH" | null;
          [key: string]: unknown;
        };
      };
    };
    /** Submit a build for TestFlight beta review, which external groups require before they can install it. */
    "app_store_connect.submit_build_for_beta_review": {
      input: {
        /**
         * App Store Connect identifier of the build to submit.
         * @minLength 1
         * @pattern \S
         */
        buildId: string;
      };
      output: {
        /** App Store Connect identifier for the beta app review submission. */
        id: string;
        /** State of the TestFlight beta review. */
        betaReviewState: "WAITING_FOR_REVIEW" | "IN_REVIEW" | "REJECTED" | "APPROVED" | null;
        /** When the build was submitted for beta review, as an ISO 8601 timestamp. */
        submittedDate: string | null;
      };
    };
    /** Set the "What to Test" notes a build shows testers in one locale. Updates the existing notes for that locale, or creates them when the locale has none yet. */
    "app_store_connect.update_build_test_notes": {
      input: {
        /**
         * App Store Connect identifier of the build.
         * @minLength 1
         * @pattern \S
         */
        buildId: string;
        /**
         * TestFlight locale the notes are written in, such as en-US.
         * @minLength 1
         * @pattern \S
         */
        locale: string;
        /**
         * Test notes shown to testers in that locale.
         * @minLength 1
         * @pattern \S
         */
        whatsNew: string;
      };
      output: {
        /** App Store Connect identifier for the beta build localization. */
        id: string;
        /** Locale the test notes belong to, such as en-US. */
        locale: string | null;
        /** Test notes shown to testers for this locale. */
        whatsNew: string | null;
        /** True when the locale had no notes yet and they were created. */
        created: boolean;
      };
    };
  }
}
