import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Set the default retention message the App Store shows for one subscription product in one locale, replacing any default configured before. Only text-based messages, with or without an image, can be defaults, and both the message and its image must be APPROVED. Products without a default in a locale show no retention message there, and the default is also the fallback when your real-time endpoint fails. Apple grants Retention Messaging API access per developer account; without it these endpoints answer 404 with no error body. */
    "app_store_server.configure_default_retention_message": {
      input: {
        /**
         * Product identifier of the auto-renewable subscription, as created in App Store Connect.
         * @minLength 1
         * @pattern \S
         */
        productId: string;
        /**
         * App Store locale short code the default message applies to, such as en-US or zh-Hans. The value is case-sensitive.
         * @minLength 1
         * @pattern \S
         */
        locale: string;
        /**
         * Identifier of the APPROVED message to use as the default.
         * @format uuid
         */
        messageIdentifier: string;
      };
      output: {
        /** Product identifier the default applies to. */
        productId: string;
        /** Locale the default applies to. */
        locale: string;
        /** Message now configured as the default. */
        messageIdentifier: string;
        /** Always true once Apple confirmed the configuration. */
        configured: boolean;
      };
    };
    /** Register the URL of your Get Retention Message endpoint for the environment of this connection, replacing any URL registered before. Once set, the App Store calls it whenever a subscriber opens the cancellation flow and shows the message you pick. A production URL is accepted only after your endpoint passed the sandbox performance test (Apple answers 403 otherwise). Apple grants Retention Messaging API access per developer account; without it these endpoints answer 404 with no error body. */
    "app_store_server.configure_retention_realtime_url": {
      input: {
        /**
         * URL of your Get Retention Message endpoint, reachable by Apple's servers. Use different URLs for sandbox and production.
         * @format uri
         */
        realtimeUrl: string;
      };
      output: {
        /** Environment the URL was registered for, production or sandbox. */
        environment: string;
        /** URL now registered. */
        realtimeUrl: string;
        /** Always true once Apple confirmed the configuration. */
        configured: boolean;
      };
    };
    /** Remove the default retention message of one subscription product in one locale, so the App Store shows no retention message there. Succeeds even when no default was configured. Apple grants Retention Messaging API access per developer account; without it these endpoints answer 404 with no error body. */
    "app_store_server.delete_default_retention_message": {
      input: {
        /**
         * Product identifier of the auto-renewable subscription, as created in App Store Connect.
         * @minLength 1
         * @pattern \S
         */
        productId: string;
        /**
         * App Store locale short code the default message applies to, such as en-US or zh-Hans. The value is case-sensitive.
         * @minLength 1
         * @pattern \S
         */
        locale: string;
      };
      output: {
        /** Product identifier whose default was removed. */
        productId: string;
        /** Locale whose default was removed. */
        locale: string;
        /** Always true once Apple confirmed the deletion. */
        deleted: boolean;
      };
    };
    /** Delete an uploaded retention image. Apple refuses with 403 while a message still references the image, so delete the message first; a missing image answers 404. Apple grants Retention Messaging API access per developer account; without it these endpoints answer 404 with no error body. */
    "app_store_server.delete_retention_image": {
      input: {
        /**
         * UUID that identifies the image. You choose it when you upload the image and use it everywhere the image is referenced afterwards.
         * @format uuid
         */
        imageIdentifier: string;
      };
      output: {
        /** Identifier of the deleted image. */
        imageIdentifier: string;
        /** Always true once Apple confirmed the deletion. */
        deleted: boolean;
      };
    };
    /** Delete an uploaded retention message. A missing message answers 404. Stop returning the identifier from your Get Retention Message endpoint first, and delete any image it used afterwards with delete_retention_image. Apple grants Retention Messaging API access per developer account; without it these endpoints answer 404 with no error body. */
    "app_store_server.delete_retention_message": {
      input: {
        /**
         * UUID that identifies the message. You choose it when you upload the message and use it everywhere the message is referenced afterwards.
         * @format uuid
         */
        messageIdentifier: string;
      };
      output: {
        /** Identifier of the deleted message. */
        messageIdentifier: string;
        /** Always true once Apple confirmed the deletion. */
        deleted: boolean;
      };
    };
    /** Unregister the Get Retention Message endpoint URL for the environment of this connection. Afterwards the App Store shows only default messages in that environment until a URL is registered again. Apple grants Retention Messaging API access per developer account; without it these endpoints answer 404 with no error body. */
    "app_store_server.delete_retention_realtime_url": {
      input: Record<string, never>;
      output: {
        /** Environment whose URL was removed, production or sandbox. */
        environment: string;
        /** Always true once Apple confirmed the deletion. */
        deleted: boolean;
      };
    };
    /** Extend the renewal date of every active subscription to one product, optionally limited to some storefronts. The App Store processes the request asynchronously; poll get_subscription_renewal_date_extension_status for the outcome. The extension cannot be reversed. */
    "app_store_server.extend_renewal_date_for_all_active_subscribers": {
      input: {
        /**
         * Product identifier of the subscription whose active subscribers to extend.
         * @minLength 1
         * @pattern \S
         */
        productId: string;
        /**
         * Number of days to extend the renewal date by, from 1 to 90. The extension does not count toward the year of paid service that determines your commission rate.
         * @minimum 1
         * @maximum 90
         */
        extendByDays: number;
        /**
         * Reason for the renewal date extension: 0 undeclared, 1 customer satisfaction, 2 other, 3 service issue or outage.
         * @minimum 0
         * @maximum 3
         */
        extendReasonCode: number;
        /**
         * UUID you generate to track this extension request. Apple requires the UUID form on this endpoint. Reuse the same value when you retry a request that timed out; use a new one for a different request.
         * @format uuid
         */
        requestIdentifier: string;
        /**
         * Limit the extension to these storefronts. Omit to extend in every storefront.
         * @minItems 1
         */
        storefrontCountryCodes?: Array<string>;
      };
      output: {
        /** The request identifier the App Store echoes back. Pass it to get_subscription_renewal_date_extension_status to follow the outcome. */
        requestIdentifier: string | null;
      };
    };
    /** Extend the renewal date of one customer's active auto-renewable subscription, to compensate for a service outage or a cancelled event. The extension cannot be reversed, and Apple emails the customer about the new renewal date. */
    "app_store_server.extend_subscription_renewal_date": {
      input: {
        /**
         * Original transaction identifier of the subscription to extend. Family Sharing members are extended automatically and cannot be targeted directly.
         * @minLength 1
         * @pattern \S
         */
        originalTransactionId: string;
        /**
         * Number of days to extend the renewal date by, from 1 to 90. The extension does not count toward the year of paid service that determines your commission rate.
         * @minimum 1
         * @maximum 90
         */
        extendByDays: number;
        /**
         * Reason for the renewal date extension: 0 undeclared, 1 customer satisfaction, 2 other, 3 service issue or outage.
         * @minimum 0
         * @maximum 3
         */
        extendReasonCode: number;
        /**
         * Identifier you generate to track this extension request, at most 128 characters. Reuse the same value when you retry a request that timed out; use a new one for a different request.
         * @minLength 1
         * @maxLength 128
         * @pattern \S
         */
        requestIdentifier: string;
      };
      output: {
        /** Original transaction identifier that was acted on. */
        originalTransactionId: string | null;
        /** Identifier of the subscription purchase event the extension applies to. */
        webOrderLineItemId: string | null;
        /** Whether the App Store extended the renewal date. */
        success: boolean | null;
        /** New renewal date after the extension, as UNIX time in milliseconds. */
        effectiveDate: number | null;
      };
    };
    /** Tell the App Store that your server finished delivering the content for a transaction. Call it only after the customer has the content; it cannot be undone. Apple still returns a finished transaction from get_transaction_history, so do not treat its disappearance as confirmation. */
    "app_store_server.finish_transaction": {
      input: {
        /**
         * Identifier of the transaction to mark as finished.
         * @minLength 1
         * @pattern \S
         */
        transactionId: string;
      };
      output: {
        /** Identifier of the transaction that was finished. */
        transactionId: string;
        /** Always true once Apple confirmed the transaction is finished. */
        finished: boolean;
      };
    };
    /** Read the status of every auto-renewable subscription a customer has for your app, grouped by subscription group, with the latest transaction and renewal information of each decoded from the signed payloads Apple returns. */
    "app_store_server.get_all_subscription_statuses": {
      input: {
        /**
         * Any transaction identifier that belongs to the customer for your app: a transactionId, an originalTransactionId or an appTransactionId.
         * @minLength 1
         * @pattern \S
         */
        transactionId: string;
        /**
         * Return only subscriptions in these statuses. Omit to return every status.
         * @minItems 1
         */
        statuses?: Array<number>;
      };
      output: {
        /** One entry per subscription group the customer has a subscription in. */
        subscriptionGroups: Array<{
          /** Identifier of the subscription group. */
          subscriptionGroupIdentifier: string | null;
          /** The most recent transaction of each subscription in the group, one per original transaction identifier. */
          lastTransactions: Array<{
            /** Transaction identifier of the original subscription purchase. */
            originalTransactionId: string | null;
            /** Subscription status: 1 active, 2 expired, 3 in a billing retry period, 4 in a billing grace period, 5 revoked. */
            status: number | null;
            /** One in-app purchase transaction, decoded from the JWS the App Store Server API returns. The App Store Server API omits a field entirely when it has no value for it, so any field can be missing. */
            transaction: {
              /** Unique identifier of this transaction. */
              transactionId?: string;
              /** Transaction identifier of the original purchase, shared by every transaction in a subscription or restore chain. */
              originalTransactionId?: string;
              /** Unique identifier of the subscription purchase event, which changes on every renewal. */
              webOrderLineItemId?: string;
              /** Bundle identifier of the app the purchase belongs to. */
              bundleId?: string;
              /** Product identifier of the in-app purchase. */
              productId?: string;
              /** Identifier of the subscription group the product belongs to. */
              subscriptionGroupIdentifier?: string;
              /** When the App Store charged the customer. Expressed as UNIX time in milliseconds. */
              purchaseDate?: number;
              /** When the original purchase happened. Expressed as UNIX time in milliseconds. */
              originalPurchaseDate?: number;
              /** When the subscription expires or renews. Expressed as UNIX time in milliseconds. */
              expiresDate?: number;
              /** Number of consumable products purchased in this transaction. */
              quantity?: number;
              /** Type of the in-app purchase. */
              type?: "Auto-Renewable Subscription" | "Non-Consumable" | "Consumable" | "Non-Renewing Subscription";
              /** UUID your app associated with the purchase, or that was set through Set App Account Token. */
              appAccountToken?: string;
              /** Whether the customer purchased the product or received it through Family Sharing. */
              inAppOwnershipType?: "FAMILY_SHARED" | "PURCHASED";
              /** When the App Store signed this transaction payload. Expressed as UNIX time in milliseconds. */
              signedDate?: number;
              /** Why the App Store refunded or revoked the transaction: 0 refunded for another reason, 1 refunded because of an issue with the app. */
              revocationReason?: number;
              /** When the App Store refunded or revoked the transaction. Expressed as UNIX time in milliseconds. */
              revocationDate?: number;
              /** Whether the transaction was replaced because the customer upgraded to a higher level subscription. */
              isUpgraded?: boolean;
              /** Type of subscription offer applied: 1 introductory offer, 2 promotional offer, 3 offer code, 4 win-back offer. */
              offerType?: number;
              /** Identifier of the promotional offer, offer code or win-back offer. */
              offerIdentifier?: string;
              /** Payment mode of the offer. */
              offerDiscountType?: "FREE_TRIAL" | "PAY_AS_YOU_GO" | "PAY_UP_FRONT" | "ONE_TIME";
              /** Duration of the offer, as an ISO 8601 duration such as P1M or P3D. */
              offerPeriod?: string;
              /** Server environment the transaction belongs to. */
              environment?: "Sandbox" | "Production" | "Xcode" | "LocalTesting";
              /** Three-letter ISO 3166-1 alpha-3 code of the storefront the purchase was made in, such as USA. */
              storefront?: string;
              /** Apple identifier of that storefront. */
              storefrontId?: string;
              /** Whether the customer purchased the product or the App Store renewed it automatically. */
              transactionReason?: "PURCHASE" | "RENEWAL";
              /** Three-letter ISO 4217 code of the currency the price is expressed in. */
              currency?: string;
              /** Price recorded for the transaction, in milliunits of the currency. One unit equals 1000 milliunits. */
              price?: number;
              /** How much of the transaction was revoked. */
              revocationType?: "REFUND_FULL" | "REFUND_PRORATED" | "FAMILY_REVOKE";
              /** Share of the transaction the App Store refunded or revoked, in milliunits, where 100000 is the full amount. */
              revocationPercentage?: number;
              /** Billing plan the subscription was purchased on. */
              billingPlanType?: "BILLED_UPFRONT" | "MONTHLY";
              /** Unique identifier of the app download transaction. */
              appTransactionId?: string;
              /** Billing commitment terms recorded on the transaction, for subscriptions sold with a commitment. The App Store Server API omits a field entirely when it has no value for it, so any field can be missing. */
              commitmentInfo?: {
                /** Position of this billing period within the commitment. */
                billingPeriodNumber?: number;
                /** When the commitment ends. Expressed as UNIX time in milliseconds. */
                commitmentExpiresDate?: number;
                /** Price of the commitment, in milliunits of the currency. */
                commitmentPrice?: number;
                /** Number of billing periods the commitment covers. */
                totalBillingPeriods?: number;
                [key: string]: unknown;
              };
              /** Advanced Commerce API details Apple attaches to transactions and renewal information created through that API. Passed through as returned; this provider does not model the Advanced Commerce contract. */
              advancedCommerceInfo?: Record<string, unknown>;
              [key: string]: unknown;
            } | null;
            /** Renewal information for one auto-renewable subscription, decoded from the JWS the App Store Server API returns. The App Store Server API omits a field entirely when it has no value for it, so any field can be missing. */
            renewalInfo: {
              /** Transaction identifier of the original subscription purchase. */
              originalTransactionId?: string;
              /** Product identifier of the subscription in effect now. */
              productId?: string;
              /** Product identifier that renews at the next billing period. */
              autoRenewProductId?: string;
              /** Renewal status of the subscription: 0 off, 1 on. */
              autoRenewStatus?: number;
              /** Why an expired subscription expired: 1 the customer cancelled, 2 a billing error, 3 the customer did not consent to a price increase, 4 the product was unavailable, 5 another reason. */
              expirationIntent?: number;
              /** Whether the App Store is still trying to renew an expired subscription. */
              isInBillingRetryPeriod?: boolean;
              /** When the billing grace period ends. Expressed as UNIX time in milliseconds. */
              gracePeriodExpiresDate?: number;
              /** Where the customer stands on a pending price increase: 0 has not responded, 1 consented or was notified without needing to consent. */
              priceIncreaseStatus?: number;
              /** Type of subscription offer in effect for the renewal: 1 introductory offer, 2 promotional offer, 3 offer code, 4 win-back offer. */
              offerType?: number;
              /** Identifier of the offer in effect for the renewal. */
              offerIdentifier?: string;
              /** Payment mode of that offer. */
              offerDiscountType?: "FREE_TRIAL" | "PAY_AS_YOU_GO" | "PAY_UP_FRONT" | "ONE_TIME";
              /** Duration of that offer, as an ISO 8601 duration such as P1M. */
              offerPeriod?: string;
              /** When the App Store signed this renewal payload. Expressed as UNIX time in milliseconds. */
              signedDate?: number;
              /** Server environment the subscription belongs to. */
              environment?: "Sandbox" | "Production" | "Xcode" | "LocalTesting";
              /** Start of the most recent uninterrupted period of subscription. Expressed as UNIX time in milliseconds. */
              recentSubscriptionStartDate?: number;
              /** When the most recent subscription period renews. Expressed as UNIX time in milliseconds. */
              renewalDate?: number;
              /** Three-letter ISO 4217 code of the currency the renewal price is in. */
              currency?: string;
              /** Renewal price, in milliunits of the currency. */
              renewalPrice?: number;
              /** Billing plan the subscription renews on. */
              renewalBillingPlanType?: "BILLED_UPFRONT" | "MONTHLY";
              /** Win-back offer identifiers the customer is eligible for, in the order Apple ranks them. */
              eligibleWinBackOfferIds?: Array<string>;
              /** UUID associated with the upcoming renewal transaction. */
              appAccountToken?: string;
              /** Unique identifier of the app download transaction. */
              appTransactionId?: string;
              /** Billing commitment terms that apply to the upcoming renewal. The App Store Server API omits a field entirely when it has no value for it, so any field can be missing. */
              commitmentInfo?: {
                /** Product identifier that renews under the commitment. */
                commitmentAutoRenewProductId?: string;
                /** Renewal status under the commitment: 0 off, 1 on. Auto renewal status of the commitment. */
                commitmentAutoRenewStatus?: number;
                /** Billing plan the commitment renews on. */
                commitmentRenewalBillingPlanType?: "BILLED_UPFRONT" | "MONTHLY";
                /** When the commitment renews. Expressed as UNIX time in milliseconds. */
                commitmentRenewalDate?: number;
                /** Renewal price under the commitment, in milliunits of the currency. */
                commitmentRenewalPrice?: number;
                [key: string]: unknown;
              };
              /** Advanced Commerce API details Apple attaches to transactions and renewal information created through that API. Passed through as returned; this provider does not model the Advanced Commerce contract. */
              advancedCommerceInfo?: Record<string, unknown>;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** Server environment the statuses come from. */
        environment: "Sandbox" | "Production" | "Xcode" | "LocalTesting" | null;
        /** Bundle identifier of the app. */
        bundleId: string | null;
        /** Apple identifier of the app, present for production apps. */
        appAppleId: number | null;
      };
    };
    /** Read the app download transaction for a customer, decoded from the signed payload Apple returns. It records when and on which platform the customer first acquired the app. */
    "app_store_server.get_app_transaction_info": {
      input: {
        /**
         * Any transaction identifier that belongs to the customer for your app: a transactionId, an originalTransactionId or an appTransactionId.
         * @minLength 1
         * @pattern \S
         */
        transactionId: string;
      };
      output: {
        /** The app download transaction, decoded from the JWS the App Store Server API returns. The App Store Server API omits a field entirely when it has no value for it, so any field can be missing. */
        appTransaction: {
          /** Unique identifier of the app download transaction. */
          appTransactionId?: string;
          /** Bundle identifier of the app. */
          bundleId?: string;
          /** Apple identifier of the app, present for production apps. */
          appAppleId?: number;
          /** Version of the app the customer downloaded. */
          applicationVersion?: string;
          /** Version of the app the customer originally purchased. */
          originalApplicationVersion?: string;
          /** Apple identifier of that app version. */
          versionExternalIdentifier?: number;
          /** Server environment the app transaction belongs to. */
          receiptType?: "Sandbox" | "Production" | "Xcode" | "LocalTesting";
          /** When the App Store signed the app transaction. Expressed as UNIX time in milliseconds. */
          receiptCreationDate?: number;
          /** When the customer originally acquired the app. Expressed as UNIX time in milliseconds. */
          originalPurchaseDate?: number;
          /** When the customer placed a pre-order for the app. Expressed as UNIX time in milliseconds. */
          preorderDate?: number;
          /** Platform the customer originally acquired the app on. */
          originalPlatform?: "iOS" | "macOS" | "tvOS" | "visionOS";
          /** Value your app uses to verify that the app transaction belongs to the device it runs on. */
          deviceVerification?: string;
          /** UUID that pairs with deviceVerification. */
          deviceVerificationNonce?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Read which message is configured as the default retention message for one subscription product in one locale. Returns a null messageIdentifier when no default is configured there. Apple grants Retention Messaging API access per developer account; without it these endpoints answer 404 with no error body. */
    "app_store_server.get_default_retention_message": {
      input: {
        /**
         * Product identifier of the auto-renewable subscription, as created in App Store Connect.
         * @minLength 1
         * @pattern \S
         */
        productId: string;
        /**
         * App Store locale short code the default message applies to, such as en-US or zh-Hans. The value is case-sensitive.
         * @minLength 1
         * @pattern \S
         */
        locale: string;
      };
      output: {
        /** Product identifier that was looked up. */
        productId: string;
        /** Locale that was looked up. */
        locale: string;
        /** Message configured as the default, or null when the product has no default message in this locale. */
        messageIdentifier: string | null;
      };
    };
    /** List the App Store Server Notifications the App Store tried to deliver to your server in a time span, with each notification payload decoded. History covers the past 180 days in production and the past 30 days in sandbox, and returns up to 20 records per page. */
    "app_store_server.get_notification_history": {
      input: {
        /** Start of the time span. Must be within the past 180 days in production, or the past 30 days in sandbox. Expressed as UNIX time in milliseconds. */
        startDate: number;
        /** End of the time span, later than startDate. Apple uses the current time when this is in the future. Expressed as UNIX time in milliseconds. */
        endDate: number;
        /** Return only notifications of this type. Cannot be combined with transactionId. */
        notificationType?: "SUBSCRIBED" | "DID_CHANGE_RENEWAL_PREF" | "DID_CHANGE_RENEWAL_STATUS" | "OFFER_REDEEMED" | "DID_RENEW" | "EXPIRED" | "DID_FAIL_TO_RENEW" | "GRACE_PERIOD_EXPIRED" | "PRICE_INCREASE" | "REFUND" | "REFUND_DECLINED" | "CONSUMPTION_REQUEST" | "RENEWAL_EXTENDED" | "REVOKE" | "TEST" | "RENEWAL_EXTENSION" | "REFUND_REVERSED" | "EXTERNAL_PURCHASE_TOKEN" | "ONE_TIME_CHARGE" | "RESCIND_CONSENT" | "METADATA_UPDATE" | "MIGRATION" | "PRICE_CHANGE";
        /** Return only notifications with this subtype. Requires notificationType, and the pair has to be a combination Apple sends. */
        notificationSubtype?: "INITIAL_BUY" | "RESUBSCRIBE" | "DOWNGRADE" | "UPGRADE" | "AUTO_RENEW_ENABLED" | "AUTO_RENEW_DISABLED" | "VOLUNTARY" | "BILLING_RETRY" | "PRICE_INCREASE" | "GRACE_PERIOD" | "PENDING" | "ACCEPTED" | "BILLING_RECOVERY" | "PRODUCT_NOT_FOR_SALE" | "SUMMARY" | "FAILURE" | "UNREPORTED" | "ACTIVE_TOKEN_REMINDER" | "CREATED";
        /**
         * Return only notifications about this customer, given any of their transaction identifiers. Cannot be combined with notificationType.
         * @minLength 1
         * @pattern \S
         */
        transactionId?: string;
        /** Set to true to return only notifications that have not reached your server, including the ones Apple is still retrying. */
        onlyFailures?: boolean;
        /**
         * Page token taken from the paginationToken value of a previous response. Repeat every other filter unchanged when you page.
         * @minLength 1
         * @pattern \S
         */
        paginationToken?: string;
      };
      output: {
        /** Notification history records returned for this page. */
        notifications: Array<{
          /** One App Store Server Notification, decoded from the JWS the App Store Server API returns. The transaction, renewal and app transaction payloads nested inside it are decoded as well. The App Store Server API omits a field entirely when it has no value for it, so any field can be missing. */
          notification: {
            /** Type of the notification. */
            notificationType?: "SUBSCRIBED" | "DID_CHANGE_RENEWAL_PREF" | "DID_CHANGE_RENEWAL_STATUS" | "OFFER_REDEEMED" | "DID_RENEW" | "EXPIRED" | "DID_FAIL_TO_RENEW" | "GRACE_PERIOD_EXPIRED" | "PRICE_INCREASE" | "REFUND" | "REFUND_DECLINED" | "CONSUMPTION_REQUEST" | "RENEWAL_EXTENDED" | "REVOKE" | "TEST" | "RENEWAL_EXTENSION" | "REFUND_REVERSED" | "EXTERNAL_PURCHASE_TOKEN" | "ONE_TIME_CHARGE" | "RESCIND_CONSENT" | "METADATA_UPDATE" | "MIGRATION" | "PRICE_CHANGE";
            /** Subtype that further describes the notification. */
            subtype?: "INITIAL_BUY" | "RESUBSCRIBE" | "DOWNGRADE" | "UPGRADE" | "AUTO_RENEW_ENABLED" | "AUTO_RENEW_DISABLED" | "VOLUNTARY" | "BILLING_RETRY" | "PRICE_INCREASE" | "GRACE_PERIOD" | "PENDING" | "ACCEPTED" | "BILLING_RECOVERY" | "PRODUCT_NOT_FOR_SALE" | "SUMMARY" | "FAILURE" | "UNREPORTED" | "ACTIVE_TOKEN_REMINDER" | "CREATED";
            /** Unique identifier of this notification. */
            notificationUUID?: string;
            /** Version of the notification payload, such as 2.0. */
            version?: string;
            /** When the App Store signed the notification. Expressed as UNIX time in milliseconds. */
            signedDate?: number;
            /** Details of the app and the transaction the notification is about. Present on every notification except the renewal date extension summary and external purchase token notifications. The App Store Server API omits a field entirely when it has no value for it, so any field can be missing. */
            data?: {
              /** Server environment the notification is about. */
              environment?: "Sandbox" | "Production" | "Xcode" | "LocalTesting";
              /** Apple identifier of the app, present for production apps. */
              appAppleId?: number;
              /** Bundle identifier of the app. */
              bundleId?: string;
              /** Version of the app the transaction belongs to. */
              bundleVersion?: string;
              /** Subscription status: 1 active, 2 expired, 3 in a billing retry period, 4 in a billing grace period, 5 revoked. */
              status?: number;
              /** Reason the customer gave for requesting a refund, on CONSUMPTION_REQUEST notifications. */
              consumptionRequestReason?: "UNINTENDED_PURCHASE" | "FULFILLMENT_ISSUE" | "UNSATISFIED_WITH_PURCHASE" | "LEGAL" | "OTHER";
              /** One in-app purchase transaction, decoded from the JWS the App Store Server API returns. The App Store Server API omits a field entirely when it has no value for it, so any field can be missing. */
              transactionInfo?: {
                /** Unique identifier of this transaction. */
                transactionId?: string;
                /** Transaction identifier of the original purchase, shared by every transaction in a subscription or restore chain. */
                originalTransactionId?: string;
                /** Unique identifier of the subscription purchase event, which changes on every renewal. */
                webOrderLineItemId?: string;
                /** Bundle identifier of the app the purchase belongs to. */
                bundleId?: string;
                /** Product identifier of the in-app purchase. */
                productId?: string;
                /** Identifier of the subscription group the product belongs to. */
                subscriptionGroupIdentifier?: string;
                /** When the App Store charged the customer. Expressed as UNIX time in milliseconds. */
                purchaseDate?: number;
                /** When the original purchase happened. Expressed as UNIX time in milliseconds. */
                originalPurchaseDate?: number;
                /** When the subscription expires or renews. Expressed as UNIX time in milliseconds. */
                expiresDate?: number;
                /** Number of consumable products purchased in this transaction. */
                quantity?: number;
                /** Type of the in-app purchase. */
                type?: "Auto-Renewable Subscription" | "Non-Consumable" | "Consumable" | "Non-Renewing Subscription";
                /** UUID your app associated with the purchase, or that was set through Set App Account Token. */
                appAccountToken?: string;
                /** Whether the customer purchased the product or received it through Family Sharing. */
                inAppOwnershipType?: "FAMILY_SHARED" | "PURCHASED";
                /** When the App Store signed this transaction payload. Expressed as UNIX time in milliseconds. */
                signedDate?: number;
                /** Why the App Store refunded or revoked the transaction: 0 refunded for another reason, 1 refunded because of an issue with the app. */
                revocationReason?: number;
                /** When the App Store refunded or revoked the transaction. Expressed as UNIX time in milliseconds. */
                revocationDate?: number;
                /** Whether the transaction was replaced because the customer upgraded to a higher level subscription. */
                isUpgraded?: boolean;
                /** Type of subscription offer applied: 1 introductory offer, 2 promotional offer, 3 offer code, 4 win-back offer. */
                offerType?: number;
                /** Identifier of the promotional offer, offer code or win-back offer. */
                offerIdentifier?: string;
                /** Payment mode of the offer. */
                offerDiscountType?: "FREE_TRIAL" | "PAY_AS_YOU_GO" | "PAY_UP_FRONT" | "ONE_TIME";
                /** Duration of the offer, as an ISO 8601 duration such as P1M or P3D. */
                offerPeriod?: string;
                /** Server environment the transaction belongs to. */
                environment?: "Sandbox" | "Production" | "Xcode" | "LocalTesting";
                /** Three-letter ISO 3166-1 alpha-3 code of the storefront the purchase was made in, such as USA. */
                storefront?: string;
                /** Apple identifier of that storefront. */
                storefrontId?: string;
                /** Whether the customer purchased the product or the App Store renewed it automatically. */
                transactionReason?: "PURCHASE" | "RENEWAL";
                /** Three-letter ISO 4217 code of the currency the price is expressed in. */
                currency?: string;
                /** Price recorded for the transaction, in milliunits of the currency. One unit equals 1000 milliunits. */
                price?: number;
                /** How much of the transaction was revoked. */
                revocationType?: "REFUND_FULL" | "REFUND_PRORATED" | "FAMILY_REVOKE";
                /** Share of the transaction the App Store refunded or revoked, in milliunits, where 100000 is the full amount. */
                revocationPercentage?: number;
                /** Billing plan the subscription was purchased on. */
                billingPlanType?: "BILLED_UPFRONT" | "MONTHLY";
                /** Unique identifier of the app download transaction. */
                appTransactionId?: string;
                /** Billing commitment terms recorded on the transaction, for subscriptions sold with a commitment. The App Store Server API omits a field entirely when it has no value for it, so any field can be missing. */
                commitmentInfo?: {
                  /** Position of this billing period within the commitment. */
                  billingPeriodNumber?: number;
                  /** When the commitment ends. Expressed as UNIX time in milliseconds. */
                  commitmentExpiresDate?: number;
                  /** Price of the commitment, in milliunits of the currency. */
                  commitmentPrice?: number;
                  /** Number of billing periods the commitment covers. */
                  totalBillingPeriods?: number;
                  [key: string]: unknown;
                };
                /** Advanced Commerce API details Apple attaches to transactions and renewal information created through that API. Passed through as returned; this provider does not model the Advanced Commerce contract. */
                advancedCommerceInfo?: Record<string, unknown>;
                [key: string]: unknown;
              } | null;
              /** Renewal information for one auto-renewable subscription, decoded from the JWS the App Store Server API returns. The App Store Server API omits a field entirely when it has no value for it, so any field can be missing. */
              renewalInfo?: {
                /** Transaction identifier of the original subscription purchase. */
                originalTransactionId?: string;
                /** Product identifier of the subscription in effect now. */
                productId?: string;
                /** Product identifier that renews at the next billing period. */
                autoRenewProductId?: string;
                /** Renewal status of the subscription: 0 off, 1 on. */
                autoRenewStatus?: number;
                /** Why an expired subscription expired: 1 the customer cancelled, 2 a billing error, 3 the customer did not consent to a price increase, 4 the product was unavailable, 5 another reason. */
                expirationIntent?: number;
                /** Whether the App Store is still trying to renew an expired subscription. */
                isInBillingRetryPeriod?: boolean;
                /** When the billing grace period ends. Expressed as UNIX time in milliseconds. */
                gracePeriodExpiresDate?: number;
                /** Where the customer stands on a pending price increase: 0 has not responded, 1 consented or was notified without needing to consent. */
                priceIncreaseStatus?: number;
                /** Type of subscription offer in effect for the renewal: 1 introductory offer, 2 promotional offer, 3 offer code, 4 win-back offer. */
                offerType?: number;
                /** Identifier of the offer in effect for the renewal. */
                offerIdentifier?: string;
                /** Payment mode of that offer. */
                offerDiscountType?: "FREE_TRIAL" | "PAY_AS_YOU_GO" | "PAY_UP_FRONT" | "ONE_TIME";
                /** Duration of that offer, as an ISO 8601 duration such as P1M. */
                offerPeriod?: string;
                /** When the App Store signed this renewal payload. Expressed as UNIX time in milliseconds. */
                signedDate?: number;
                /** Server environment the subscription belongs to. */
                environment?: "Sandbox" | "Production" | "Xcode" | "LocalTesting";
                /** Start of the most recent uninterrupted period of subscription. Expressed as UNIX time in milliseconds. */
                recentSubscriptionStartDate?: number;
                /** When the most recent subscription period renews. Expressed as UNIX time in milliseconds. */
                renewalDate?: number;
                /** Three-letter ISO 4217 code of the currency the renewal price is in. */
                currency?: string;
                /** Renewal price, in milliunits of the currency. */
                renewalPrice?: number;
                /** Billing plan the subscription renews on. */
                renewalBillingPlanType?: "BILLED_UPFRONT" | "MONTHLY";
                /** Win-back offer identifiers the customer is eligible for, in the order Apple ranks them. */
                eligibleWinBackOfferIds?: Array<string>;
                /** UUID associated with the upcoming renewal transaction. */
                appAccountToken?: string;
                /** Unique identifier of the app download transaction. */
                appTransactionId?: string;
                /** Billing commitment terms that apply to the upcoming renewal. The App Store Server API omits a field entirely when it has no value for it, so any field can be missing. */
                commitmentInfo?: {
                  /** Product identifier that renews under the commitment. */
                  commitmentAutoRenewProductId?: string;
                  /** Renewal status under the commitment: 0 off, 1 on. Auto renewal status of the commitment. */
                  commitmentAutoRenewStatus?: number;
                  /** Billing plan the commitment renews on. */
                  commitmentRenewalBillingPlanType?: "BILLED_UPFRONT" | "MONTHLY";
                  /** When the commitment renews. Expressed as UNIX time in milliseconds. */
                  commitmentRenewalDate?: number;
                  /** Renewal price under the commitment, in milliunits of the currency. */
                  commitmentRenewalPrice?: number;
                  [key: string]: unknown;
                };
                /** Advanced Commerce API details Apple attaches to transactions and renewal information created through that API. Passed through as returned; this provider does not model the Advanced Commerce contract. */
                advancedCommerceInfo?: Record<string, unknown>;
                [key: string]: unknown;
              } | null;
              [key: string]: unknown;
            };
            /** Outcome of a renewal date extension that ran for all active subscribers, on RENEWAL_EXTENSION notifications with the SUMMARY subtype. The App Store Server API omits a field entirely when it has no value for it, so any field can be missing. */
            summary?: {
              /** Server environment the extension ran in. */
              environment?: "Sandbox" | "Production" | "Xcode" | "LocalTesting";
              /** Apple identifier of the app. */
              appAppleId?: number;
              /** Bundle identifier of the app. */
              bundleId?: string;
              /** Product identifier the extension applied to. */
              productId?: string;
              /** Identifier you supplied when requesting the extension. */
              requestIdentifier?: string;
              /** Storefronts the extension was limited to, empty when it applied everywhere. */
              storefrontCountryCodes?: Array<string>;
              /** Number of subscriptions the extension succeeded for. */
              succeededCount?: number;
              /** Number of subscriptions the extension failed for. */
              failedCount?: number;
              [key: string]: unknown;
            };
            /** External purchase token details, on EXTERNAL_PURCHASE_TOKEN notifications. The App Store Server API omits a field entirely when it has no value for it, so any field can be missing. */
            externalPurchaseToken?: {
              /** Unique identifier of the external purchase token. */
              externalPurchaseId?: string;
              /** When the App Store created the token. Expressed as UNIX time in milliseconds. */
              tokenCreationDate?: number;
              /** Apple identifier of the app. */
              appAppleId?: number;
              /** Bundle identifier of the app. */
              bundleId?: string;
              /** Type of the external purchase token. */
              tokenType?: "SERVICES" | "ACQUISITION";
              /** When the token expires. Expressed as UNIX time in milliseconds. */
              tokenExpirationDate?: number;
              [key: string]: unknown;
            };
            /** App download details, on notifications that carry them. The App Store Server API omits a field entirely when it has no value for it, so any field can be missing. */
            appData?: {
              /** Apple identifier of the app. */
              appAppleId?: number;
              /** Bundle identifier of the app. */
              bundleId?: string;
              /** Server environment the app transaction belongs to. */
              environment?: "Sandbox" | "Production" | "Xcode" | "LocalTesting";
              /** The app download transaction, decoded from the JWS the App Store Server API returns. The App Store Server API omits a field entirely when it has no value for it, so any field can be missing. */
              appTransactionInfo?: {
                /** Unique identifier of the app download transaction. */
                appTransactionId?: string;
                /** Bundle identifier of the app. */
                bundleId?: string;
                /** Apple identifier of the app, present for production apps. */
                appAppleId?: number;
                /** Version of the app the customer downloaded. */
                applicationVersion?: string;
                /** Version of the app the customer originally purchased. */
                originalApplicationVersion?: string;
                /** Apple identifier of that app version. */
                versionExternalIdentifier?: number;
                /** Server environment the app transaction belongs to. */
                receiptType?: "Sandbox" | "Production" | "Xcode" | "LocalTesting";
                /** When the App Store signed the app transaction. Expressed as UNIX time in milliseconds. */
                receiptCreationDate?: number;
                /** When the customer originally acquired the app. Expressed as UNIX time in milliseconds. */
                originalPurchaseDate?: number;
                /** When the customer placed a pre-order for the app. Expressed as UNIX time in milliseconds. */
                preorderDate?: number;
                /** Platform the customer originally acquired the app on. */
                originalPlatform?: "iOS" | "macOS" | "tvOS" | "visionOS";
                /** Value your app uses to verify that the app transaction belongs to the device it runs on. */
                deviceVerification?: string;
                /** UUID that pairs with deviceVerification. */
                deviceVerificationNonce?: string;
                [key: string]: unknown;
              } | null;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          } | null;
          /** Delivery attempts the App Store made for this notification, most recent first. The App Store retries a failed notification up to five times over the following hours. */
          sendAttempts: Array<{
            /** When the App Store made this attempt. Expressed as UNIX time in milliseconds. */
            attemptDate?: number;
            /** Outcome of the attempt. */
            sendAttemptResult?: "SUCCESS" | "TIMED_OUT" | "TLS_ISSUE" | "CIRCULAR_REDIRECT" | "NO_RESPONSE" | "SOCKET_ISSUE" | "UNSUPPORTED_CHARSET" | "INVALID_RESPONSE" | "PREMATURE_CLOSE" | "UNSUCCESSFUL_HTTP_RESPONSE_CODE" | "OTHER";
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** Token to pass back as paginationToken to read the next page, or null when this was the last page. */
        paginationToken: string | null;
        /** Whether more pages are available for this query. */
        hasMore: boolean | null;
      };
    };
    /** List the in-app purchase transactions the App Store refunded for a customer in your app, newest first, decoded from the signed payloads Apple returns. Returns up to 20 transactions per page. */
    "app_store_server.get_refund_history": {
      input: {
        /**
         * Any transaction identifier that belongs to the customer for your app: a transactionId, an originalTransactionId or an appTransactionId.
         * @minLength 1
         * @pattern \S
         */
        transactionId: string;
        /**
         * Page token taken from the revision value of a previous response for the same customer.
         * @minLength 1
         * @pattern \S
         */
        revision?: string;
      };
      output: {
        /** Refunded transactions returned for this page. */
        transactions: Array<{
          /** Unique identifier of this transaction. */
          transactionId?: string;
          /** Transaction identifier of the original purchase, shared by every transaction in a subscription or restore chain. */
          originalTransactionId?: string;
          /** Unique identifier of the subscription purchase event, which changes on every renewal. */
          webOrderLineItemId?: string;
          /** Bundle identifier of the app the purchase belongs to. */
          bundleId?: string;
          /** Product identifier of the in-app purchase. */
          productId?: string;
          /** Identifier of the subscription group the product belongs to. */
          subscriptionGroupIdentifier?: string;
          /** When the App Store charged the customer. Expressed as UNIX time in milliseconds. */
          purchaseDate?: number;
          /** When the original purchase happened. Expressed as UNIX time in milliseconds. */
          originalPurchaseDate?: number;
          /** When the subscription expires or renews. Expressed as UNIX time in milliseconds. */
          expiresDate?: number;
          /** Number of consumable products purchased in this transaction. */
          quantity?: number;
          /** Type of the in-app purchase. */
          type?: "Auto-Renewable Subscription" | "Non-Consumable" | "Consumable" | "Non-Renewing Subscription";
          /** UUID your app associated with the purchase, or that was set through Set App Account Token. */
          appAccountToken?: string;
          /** Whether the customer purchased the product or received it through Family Sharing. */
          inAppOwnershipType?: "FAMILY_SHARED" | "PURCHASED";
          /** When the App Store signed this transaction payload. Expressed as UNIX time in milliseconds. */
          signedDate?: number;
          /** Why the App Store refunded or revoked the transaction: 0 refunded for another reason, 1 refunded because of an issue with the app. */
          revocationReason?: number;
          /** When the App Store refunded or revoked the transaction. Expressed as UNIX time in milliseconds. */
          revocationDate?: number;
          /** Whether the transaction was replaced because the customer upgraded to a higher level subscription. */
          isUpgraded?: boolean;
          /** Type of subscription offer applied: 1 introductory offer, 2 promotional offer, 3 offer code, 4 win-back offer. */
          offerType?: number;
          /** Identifier of the promotional offer, offer code or win-back offer. */
          offerIdentifier?: string;
          /** Payment mode of the offer. */
          offerDiscountType?: "FREE_TRIAL" | "PAY_AS_YOU_GO" | "PAY_UP_FRONT" | "ONE_TIME";
          /** Duration of the offer, as an ISO 8601 duration such as P1M or P3D. */
          offerPeriod?: string;
          /** Server environment the transaction belongs to. */
          environment?: "Sandbox" | "Production" | "Xcode" | "LocalTesting";
          /** Three-letter ISO 3166-1 alpha-3 code of the storefront the purchase was made in, such as USA. */
          storefront?: string;
          /** Apple identifier of that storefront. */
          storefrontId?: string;
          /** Whether the customer purchased the product or the App Store renewed it automatically. */
          transactionReason?: "PURCHASE" | "RENEWAL";
          /** Three-letter ISO 4217 code of the currency the price is expressed in. */
          currency?: string;
          /** Price recorded for the transaction, in milliunits of the currency. One unit equals 1000 milliunits. */
          price?: number;
          /** How much of the transaction was revoked. */
          revocationType?: "REFUND_FULL" | "REFUND_PRORATED" | "FAMILY_REVOKE";
          /** Share of the transaction the App Store refunded or revoked, in milliunits, where 100000 is the full amount. */
          revocationPercentage?: number;
          /** Billing plan the subscription was purchased on. */
          billingPlanType?: "BILLED_UPFRONT" | "MONTHLY";
          /** Unique identifier of the app download transaction. */
          appTransactionId?: string;
          /** Billing commitment terms recorded on the transaction, for subscriptions sold with a commitment. The App Store Server API omits a field entirely when it has no value for it, so any field can be missing. */
          commitmentInfo?: {
            /** Position of this billing period within the commitment. */
            billingPeriodNumber?: number;
            /** When the commitment ends. Expressed as UNIX time in milliseconds. */
            commitmentExpiresDate?: number;
            /** Price of the commitment, in milliunits of the currency. */
            commitmentPrice?: number;
            /** Number of billing periods the commitment covers. */
            totalBillingPeriods?: number;
            [key: string]: unknown;
          };
          /** Advanced Commerce API details Apple attaches to transactions and renewal information created through that API. Passed through as returned; this provider does not model the Advanced Commerce contract. */
          advancedCommerceInfo?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Token to pass back as revision to read the next page. Apple returns one on every page; keep the last one to resume the query later. */
        revision: string | null;
        /** Whether more pages are available for this query. Apple returns pages of up to 20 transactions. */
        hasMore: boolean | null;
      };
    };
    /** List every image uploaded for retention messaging in this app and environment, with its size slot and approval state. Only images and messages in the APPROVED state are shown to customers; the sandbox approves uploads immediately. Apple grants Retention Messaging API access per developer account; without it these endpoints answer 404 with no error body. */
    "app_store_server.get_retention_image_list": {
      input: Record<string, never>;
      output: {
        /** All uploaded images. */
        images: Array<{
          /** Identifier of the image. */
          imageIdentifier?: string | null;
          /** Slot the image was uploaded for. One of FULL_SIZE, BULLET_POINT. */
          imageSize?: string | null;
          /** Approval state of the image. One of PENDING, APPROVED, REJECTED. */
          imageState?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List every message uploaded for retention messaging in this app and environment, with its approval state. A message that carries an image also needs that image to be APPROVED; check it with get_retention_image_list. Apple grants Retention Messaging API access per developer account; without it these endpoints answer 404 with no error body. */
    "app_store_server.get_retention_message_list": {
      input: Record<string, never>;
      output: {
        /** All uploaded messages. */
        messages: Array<{
          /** Identifier of the message. */
          messageIdentifier?: string | null;
          /** Approval state of the message. One of PENDING, APPROVED, REJECTED. */
          messageState?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Read the outcome of a sandbox performance test started with initiate_retention_performance_test: PENDING while it runs, then PASS or FAIL together with the measured response times, success rate and failure counts. Available only on a connection whose environment is sandbox; Apple serves the performance test endpoints on the sandbox host alone. Apple grants Retention Messaging API access per developer account; without it these endpoints answer 404 with no error body. */
    "app_store_server.get_retention_performance_test_results": {
      input: {
        /**
         * Identifier of the test run, returned by initiate_retention_performance_test.
         * @format uuid
         */
        requestId: string;
      };
      output: {
        /** Identifier of the test run that was read. */
        requestId: string;
        /** Overall outcome. One of PENDING, PASS, FAIL. */
        result: string | null;
        /** URL the test called. */
        target: string | null;
        /** Percentage of requests your endpoint answered in time. */
        successRate: number | null;
        /** Number of test requests still outstanding. */
        numPending: number | null;
        /** Response times measured during the test. Apple may omit a field, in which case it is null. */
        responseTimes: {
          /** Average response time, in milliseconds. */
          average?: number | null;
          /** 50th percentile response time, in milliseconds. */
          p50?: number | null;
          /** 90th percentile response time, in milliseconds. */
          p90?: number | null;
          /** 95th percentile response time, in milliseconds. */
          p95?: number | null;
          /** 99th percentile response time, in milliseconds. */
          p99?: number | null;
          [key: string]: unknown;
        };
        /** Failure counts keyed by Apple's send attempt result, such as TIMED_OUT or UNSUCCESSFUL_HTTP_RESPONSE_CODE. Empty when every request succeeded. */
        failures: Record<string, number>;
        /** Parameters Apple uses for the performance test. Apple may omit a field, in which case it is null. */
        config: {
          /** Maximum number of concurrent requests the test sends to your endpoint. */
          maxConcurrentRequests?: number | null;
          /** Maximum time in milliseconds your endpoint has to answer each request for it to count as a success. */
          responseTimeThreshold?: number | null;
          /** Percentage of requests that must succeed for the test to pass. */
          successRateThreshold?: number | null;
          /** Total duration of the test in milliseconds. Add it to the time you initiated the test to know when results are final. */
          totalDuration?: number | null;
          /** Total number of requests the test sends. */
          totalRequests?: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Read the URL of the Get Retention Message endpoint registered for the environment of this connection. Returns a null realtimeUrl when none is registered. Apple grants Retention Messaging API access per developer account; without it these endpoints answer 404 with no error body. */
    "app_store_server.get_retention_realtime_url": {
      input: Record<string, never>;
      output: {
        /** Environment that was looked up, production or sandbox. */
        environment: string;
        /** Registered endpoint URL, or null when no URL is registered for this environment. */
        realtimeUrl: string | null;
      };
    };
    /** Check how far the App Store has got with a renewal date extension that was requested for all active subscribers of a product. */
    "app_store_server.get_subscription_renewal_date_extension_status": {
      input: {
        /**
         * Product identifier the extension was requested for.
         * @minLength 1
         * @pattern \S
         */
        productId: string;
        /**
         * UUID you supplied when requesting the extension for all active subscribers.
         * @format uuid
         */
        requestIdentifier: string;
      };
      output: {
        /** Request identifier the status belongs to. */
        requestIdentifier: string | null;
        /** Whether the App Store finished processing the request. */
        complete: boolean | null;
        /** When the App Store finished processing the request, as UNIX time in milliseconds. */
        completeDate: number | null;
        /** Number of subscriptions extended so far. */
        succeededCount: number | null;
        /** Number of subscriptions the extension failed for. */
        failedCount: number | null;
      };
    };
    /** Read the delivery result of a test notification, with the notification payload decoded from the signed payload Apple returns. Apple answers 404 until it has finished the first delivery attempt. */
    "app_store_server.get_test_notification_status": {
      input: {
        /**
         * Token returned by request_test_notification for the attempt to check.
         * @minLength 1
         * @pattern \S
         */
        testNotificationToken: string;
      };
      output: {
        /** One App Store Server Notification, decoded from the JWS the App Store Server API returns. The transaction, renewal and app transaction payloads nested inside it are decoded as well. The App Store Server API omits a field entirely when it has no value for it, so any field can be missing. */
        notification: {
          /** Type of the notification. */
          notificationType?: "SUBSCRIBED" | "DID_CHANGE_RENEWAL_PREF" | "DID_CHANGE_RENEWAL_STATUS" | "OFFER_REDEEMED" | "DID_RENEW" | "EXPIRED" | "DID_FAIL_TO_RENEW" | "GRACE_PERIOD_EXPIRED" | "PRICE_INCREASE" | "REFUND" | "REFUND_DECLINED" | "CONSUMPTION_REQUEST" | "RENEWAL_EXTENDED" | "REVOKE" | "TEST" | "RENEWAL_EXTENSION" | "REFUND_REVERSED" | "EXTERNAL_PURCHASE_TOKEN" | "ONE_TIME_CHARGE" | "RESCIND_CONSENT" | "METADATA_UPDATE" | "MIGRATION" | "PRICE_CHANGE";
          /** Subtype that further describes the notification. */
          subtype?: "INITIAL_BUY" | "RESUBSCRIBE" | "DOWNGRADE" | "UPGRADE" | "AUTO_RENEW_ENABLED" | "AUTO_RENEW_DISABLED" | "VOLUNTARY" | "BILLING_RETRY" | "PRICE_INCREASE" | "GRACE_PERIOD" | "PENDING" | "ACCEPTED" | "BILLING_RECOVERY" | "PRODUCT_NOT_FOR_SALE" | "SUMMARY" | "FAILURE" | "UNREPORTED" | "ACTIVE_TOKEN_REMINDER" | "CREATED";
          /** Unique identifier of this notification. */
          notificationUUID?: string;
          /** Version of the notification payload, such as 2.0. */
          version?: string;
          /** When the App Store signed the notification. Expressed as UNIX time in milliseconds. */
          signedDate?: number;
          /** Details of the app and the transaction the notification is about. Present on every notification except the renewal date extension summary and external purchase token notifications. The App Store Server API omits a field entirely when it has no value for it, so any field can be missing. */
          data?: {
            /** Server environment the notification is about. */
            environment?: "Sandbox" | "Production" | "Xcode" | "LocalTesting";
            /** Apple identifier of the app, present for production apps. */
            appAppleId?: number;
            /** Bundle identifier of the app. */
            bundleId?: string;
            /** Version of the app the transaction belongs to. */
            bundleVersion?: string;
            /** Subscription status: 1 active, 2 expired, 3 in a billing retry period, 4 in a billing grace period, 5 revoked. */
            status?: number;
            /** Reason the customer gave for requesting a refund, on CONSUMPTION_REQUEST notifications. */
            consumptionRequestReason?: "UNINTENDED_PURCHASE" | "FULFILLMENT_ISSUE" | "UNSATISFIED_WITH_PURCHASE" | "LEGAL" | "OTHER";
            /** One in-app purchase transaction, decoded from the JWS the App Store Server API returns. The App Store Server API omits a field entirely when it has no value for it, so any field can be missing. */
            transactionInfo?: {
              /** Unique identifier of this transaction. */
              transactionId?: string;
              /** Transaction identifier of the original purchase, shared by every transaction in a subscription or restore chain. */
              originalTransactionId?: string;
              /** Unique identifier of the subscription purchase event, which changes on every renewal. */
              webOrderLineItemId?: string;
              /** Bundle identifier of the app the purchase belongs to. */
              bundleId?: string;
              /** Product identifier of the in-app purchase. */
              productId?: string;
              /** Identifier of the subscription group the product belongs to. */
              subscriptionGroupIdentifier?: string;
              /** When the App Store charged the customer. Expressed as UNIX time in milliseconds. */
              purchaseDate?: number;
              /** When the original purchase happened. Expressed as UNIX time in milliseconds. */
              originalPurchaseDate?: number;
              /** When the subscription expires or renews. Expressed as UNIX time in milliseconds. */
              expiresDate?: number;
              /** Number of consumable products purchased in this transaction. */
              quantity?: number;
              /** Type of the in-app purchase. */
              type?: "Auto-Renewable Subscription" | "Non-Consumable" | "Consumable" | "Non-Renewing Subscription";
              /** UUID your app associated with the purchase, or that was set through Set App Account Token. */
              appAccountToken?: string;
              /** Whether the customer purchased the product or received it through Family Sharing. */
              inAppOwnershipType?: "FAMILY_SHARED" | "PURCHASED";
              /** When the App Store signed this transaction payload. Expressed as UNIX time in milliseconds. */
              signedDate?: number;
              /** Why the App Store refunded or revoked the transaction: 0 refunded for another reason, 1 refunded because of an issue with the app. */
              revocationReason?: number;
              /** When the App Store refunded or revoked the transaction. Expressed as UNIX time in milliseconds. */
              revocationDate?: number;
              /** Whether the transaction was replaced because the customer upgraded to a higher level subscription. */
              isUpgraded?: boolean;
              /** Type of subscription offer applied: 1 introductory offer, 2 promotional offer, 3 offer code, 4 win-back offer. */
              offerType?: number;
              /** Identifier of the promotional offer, offer code or win-back offer. */
              offerIdentifier?: string;
              /** Payment mode of the offer. */
              offerDiscountType?: "FREE_TRIAL" | "PAY_AS_YOU_GO" | "PAY_UP_FRONT" | "ONE_TIME";
              /** Duration of the offer, as an ISO 8601 duration such as P1M or P3D. */
              offerPeriod?: string;
              /** Server environment the transaction belongs to. */
              environment?: "Sandbox" | "Production" | "Xcode" | "LocalTesting";
              /** Three-letter ISO 3166-1 alpha-3 code of the storefront the purchase was made in, such as USA. */
              storefront?: string;
              /** Apple identifier of that storefront. */
              storefrontId?: string;
              /** Whether the customer purchased the product or the App Store renewed it automatically. */
              transactionReason?: "PURCHASE" | "RENEWAL";
              /** Three-letter ISO 4217 code of the currency the price is expressed in. */
              currency?: string;
              /** Price recorded for the transaction, in milliunits of the currency. One unit equals 1000 milliunits. */
              price?: number;
              /** How much of the transaction was revoked. */
              revocationType?: "REFUND_FULL" | "REFUND_PRORATED" | "FAMILY_REVOKE";
              /** Share of the transaction the App Store refunded or revoked, in milliunits, where 100000 is the full amount. */
              revocationPercentage?: number;
              /** Billing plan the subscription was purchased on. */
              billingPlanType?: "BILLED_UPFRONT" | "MONTHLY";
              /** Unique identifier of the app download transaction. */
              appTransactionId?: string;
              /** Billing commitment terms recorded on the transaction, for subscriptions sold with a commitment. The App Store Server API omits a field entirely when it has no value for it, so any field can be missing. */
              commitmentInfo?: {
                /** Position of this billing period within the commitment. */
                billingPeriodNumber?: number;
                /** When the commitment ends. Expressed as UNIX time in milliseconds. */
                commitmentExpiresDate?: number;
                /** Price of the commitment, in milliunits of the currency. */
                commitmentPrice?: number;
                /** Number of billing periods the commitment covers. */
                totalBillingPeriods?: number;
                [key: string]: unknown;
              };
              /** Advanced Commerce API details Apple attaches to transactions and renewal information created through that API. Passed through as returned; this provider does not model the Advanced Commerce contract. */
              advancedCommerceInfo?: Record<string, unknown>;
              [key: string]: unknown;
            } | null;
            /** Renewal information for one auto-renewable subscription, decoded from the JWS the App Store Server API returns. The App Store Server API omits a field entirely when it has no value for it, so any field can be missing. */
            renewalInfo?: {
              /** Transaction identifier of the original subscription purchase. */
              originalTransactionId?: string;
              /** Product identifier of the subscription in effect now. */
              productId?: string;
              /** Product identifier that renews at the next billing period. */
              autoRenewProductId?: string;
              /** Renewal status of the subscription: 0 off, 1 on. */
              autoRenewStatus?: number;
              /** Why an expired subscription expired: 1 the customer cancelled, 2 a billing error, 3 the customer did not consent to a price increase, 4 the product was unavailable, 5 another reason. */
              expirationIntent?: number;
              /** Whether the App Store is still trying to renew an expired subscription. */
              isInBillingRetryPeriod?: boolean;
              /** When the billing grace period ends. Expressed as UNIX time in milliseconds. */
              gracePeriodExpiresDate?: number;
              /** Where the customer stands on a pending price increase: 0 has not responded, 1 consented or was notified without needing to consent. */
              priceIncreaseStatus?: number;
              /** Type of subscription offer in effect for the renewal: 1 introductory offer, 2 promotional offer, 3 offer code, 4 win-back offer. */
              offerType?: number;
              /** Identifier of the offer in effect for the renewal. */
              offerIdentifier?: string;
              /** Payment mode of that offer. */
              offerDiscountType?: "FREE_TRIAL" | "PAY_AS_YOU_GO" | "PAY_UP_FRONT" | "ONE_TIME";
              /** Duration of that offer, as an ISO 8601 duration such as P1M. */
              offerPeriod?: string;
              /** When the App Store signed this renewal payload. Expressed as UNIX time in milliseconds. */
              signedDate?: number;
              /** Server environment the subscription belongs to. */
              environment?: "Sandbox" | "Production" | "Xcode" | "LocalTesting";
              /** Start of the most recent uninterrupted period of subscription. Expressed as UNIX time in milliseconds. */
              recentSubscriptionStartDate?: number;
              /** When the most recent subscription period renews. Expressed as UNIX time in milliseconds. */
              renewalDate?: number;
              /** Three-letter ISO 4217 code of the currency the renewal price is in. */
              currency?: string;
              /** Renewal price, in milliunits of the currency. */
              renewalPrice?: number;
              /** Billing plan the subscription renews on. */
              renewalBillingPlanType?: "BILLED_UPFRONT" | "MONTHLY";
              /** Win-back offer identifiers the customer is eligible for, in the order Apple ranks them. */
              eligibleWinBackOfferIds?: Array<string>;
              /** UUID associated with the upcoming renewal transaction. */
              appAccountToken?: string;
              /** Unique identifier of the app download transaction. */
              appTransactionId?: string;
              /** Billing commitment terms that apply to the upcoming renewal. The App Store Server API omits a field entirely when it has no value for it, so any field can be missing. */
              commitmentInfo?: {
                /** Product identifier that renews under the commitment. */
                commitmentAutoRenewProductId?: string;
                /** Renewal status under the commitment: 0 off, 1 on. Auto renewal status of the commitment. */
                commitmentAutoRenewStatus?: number;
                /** Billing plan the commitment renews on. */
                commitmentRenewalBillingPlanType?: "BILLED_UPFRONT" | "MONTHLY";
                /** When the commitment renews. Expressed as UNIX time in milliseconds. */
                commitmentRenewalDate?: number;
                /** Renewal price under the commitment, in milliunits of the currency. */
                commitmentRenewalPrice?: number;
                [key: string]: unknown;
              };
              /** Advanced Commerce API details Apple attaches to transactions and renewal information created through that API. Passed through as returned; this provider does not model the Advanced Commerce contract. */
              advancedCommerceInfo?: Record<string, unknown>;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          };
          /** Outcome of a renewal date extension that ran for all active subscribers, on RENEWAL_EXTENSION notifications with the SUMMARY subtype. The App Store Server API omits a field entirely when it has no value for it, so any field can be missing. */
          summary?: {
            /** Server environment the extension ran in. */
            environment?: "Sandbox" | "Production" | "Xcode" | "LocalTesting";
            /** Apple identifier of the app. */
            appAppleId?: number;
            /** Bundle identifier of the app. */
            bundleId?: string;
            /** Product identifier the extension applied to. */
            productId?: string;
            /** Identifier you supplied when requesting the extension. */
            requestIdentifier?: string;
            /** Storefronts the extension was limited to, empty when it applied everywhere. */
            storefrontCountryCodes?: Array<string>;
            /** Number of subscriptions the extension succeeded for. */
            succeededCount?: number;
            /** Number of subscriptions the extension failed for. */
            failedCount?: number;
            [key: string]: unknown;
          };
          /** External purchase token details, on EXTERNAL_PURCHASE_TOKEN notifications. The App Store Server API omits a field entirely when it has no value for it, so any field can be missing. */
          externalPurchaseToken?: {
            /** Unique identifier of the external purchase token. */
            externalPurchaseId?: string;
            /** When the App Store created the token. Expressed as UNIX time in milliseconds. */
            tokenCreationDate?: number;
            /** Apple identifier of the app. */
            appAppleId?: number;
            /** Bundle identifier of the app. */
            bundleId?: string;
            /** Type of the external purchase token. */
            tokenType?: "SERVICES" | "ACQUISITION";
            /** When the token expires. Expressed as UNIX time in milliseconds. */
            tokenExpirationDate?: number;
            [key: string]: unknown;
          };
          /** App download details, on notifications that carry them. The App Store Server API omits a field entirely when it has no value for it, so any field can be missing. */
          appData?: {
            /** Apple identifier of the app. */
            appAppleId?: number;
            /** Bundle identifier of the app. */
            bundleId?: string;
            /** Server environment the app transaction belongs to. */
            environment?: "Sandbox" | "Production" | "Xcode" | "LocalTesting";
            /** The app download transaction, decoded from the JWS the App Store Server API returns. The App Store Server API omits a field entirely when it has no value for it, so any field can be missing. */
            appTransactionInfo?: {
              /** Unique identifier of the app download transaction. */
              appTransactionId?: string;
              /** Bundle identifier of the app. */
              bundleId?: string;
              /** Apple identifier of the app, present for production apps. */
              appAppleId?: number;
              /** Version of the app the customer downloaded. */
              applicationVersion?: string;
              /** Version of the app the customer originally purchased. */
              originalApplicationVersion?: string;
              /** Apple identifier of that app version. */
              versionExternalIdentifier?: number;
              /** Server environment the app transaction belongs to. */
              receiptType?: "Sandbox" | "Production" | "Xcode" | "LocalTesting";
              /** When the App Store signed the app transaction. Expressed as UNIX time in milliseconds. */
              receiptCreationDate?: number;
              /** When the customer originally acquired the app. Expressed as UNIX time in milliseconds. */
              originalPurchaseDate?: number;
              /** When the customer placed a pre-order for the app. Expressed as UNIX time in milliseconds. */
              preorderDate?: number;
              /** Platform the customer originally acquired the app on. */
              originalPlatform?: "iOS" | "macOS" | "tvOS" | "visionOS";
              /** Value your app uses to verify that the app transaction belongs to the device it runs on. */
              deviceVerification?: string;
              /** UUID that pairs with deviceVerification. */
              deviceVerificationNonce?: string;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        } | null;
        /** Delivery attempts the App Store made for this notification, most recent first. The App Store retries a failed notification up to five times over the following hours. */
        sendAttempts: Array<{
          /** When the App Store made this attempt. Expressed as UNIX time in milliseconds. */
          attemptDate?: number;
          /** Outcome of the attempt. */
          sendAttemptResult?: "SUCCESS" | "TIMED_OUT" | "TLS_ISSUE" | "CIRCULAR_REDIRECT" | "NO_RESPONSE" | "SOCKET_ISSUE" | "UNSUPPORTED_CHARSET" | "INVALID_RESPONSE" | "PREMATURE_CLOSE" | "UNSUCCESSFUL_HTTP_RESPONSE_CODE" | "OTHER";
          [key: string]: unknown;
        }>;
      };
    };
    /** List a customer's in-app purchase transactions for your app, oldest first by default, decoded from the signed payloads Apple returns. Pass sort DESCENDING to get the most recent transactions first. Returns up to 20 transactions per page. */
    "app_store_server.get_transaction_history": {
      input: {
        /**
         * Any transaction identifier that belongs to the customer for your app: a transactionId, an originalTransactionId or an appTransactionId.
         * @minLength 1
         * @pattern \S
         */
        transactionId: string;
        /**
         * Page token taken from the revision value of a previous response. Repeat every other filter unchanged when you page.
         * @minLength 1
         * @pattern \S
         */
        revision?: string;
        /** Return only transactions purchased at or after this time. Expressed as UNIX time in milliseconds. */
        startDate?: number;
        /** Return only transactions purchased before this time. Expressed as UNIX time in milliseconds. */
        endDate?: number;
        /**
         * Return only transactions for these products.
         * @minItems 1
         */
        productIds?: Array<string>;
        /**
         * Return only transactions of these product types.
         * @minItems 1
         */
        productTypes?: Array<"AUTO_RENEWABLE" | "NON_RENEWABLE" | "CONSUMABLE" | "NON_CONSUMABLE">;
        /**
         * Return only transactions for subscriptions in these groups.
         * @minItems 1
         */
        subscriptionGroupIdentifiers?: Array<string>;
        /** Return only transactions with this ownership type. */
        inAppOwnershipType?: "FAMILY_SHARED" | "PURCHASED";
        /** Set to true to return only revoked transactions, or false to exclude them. Omit to return both. */
        revoked?: boolean;
        /** Order the transactions by their recently modified date, not their purchase date. Apple sorts ASCENDING when this is omitted, so you get the oldest first. Apple refreshes the modified date when a subscription is upgraded or a purchase is revoked, so a transaction changed while you page can appear again on a later page under ASCENDING. */
        sort?: "ASCENDING" | "DESCENDING";
      };
      output: {
        /** Transactions returned for this page. */
        transactions: Array<{
          /** Unique identifier of this transaction. */
          transactionId?: string;
          /** Transaction identifier of the original purchase, shared by every transaction in a subscription or restore chain. */
          originalTransactionId?: string;
          /** Unique identifier of the subscription purchase event, which changes on every renewal. */
          webOrderLineItemId?: string;
          /** Bundle identifier of the app the purchase belongs to. */
          bundleId?: string;
          /** Product identifier of the in-app purchase. */
          productId?: string;
          /** Identifier of the subscription group the product belongs to. */
          subscriptionGroupIdentifier?: string;
          /** When the App Store charged the customer. Expressed as UNIX time in milliseconds. */
          purchaseDate?: number;
          /** When the original purchase happened. Expressed as UNIX time in milliseconds. */
          originalPurchaseDate?: number;
          /** When the subscription expires or renews. Expressed as UNIX time in milliseconds. */
          expiresDate?: number;
          /** Number of consumable products purchased in this transaction. */
          quantity?: number;
          /** Type of the in-app purchase. */
          type?: "Auto-Renewable Subscription" | "Non-Consumable" | "Consumable" | "Non-Renewing Subscription";
          /** UUID your app associated with the purchase, or that was set through Set App Account Token. */
          appAccountToken?: string;
          /** Whether the customer purchased the product or received it through Family Sharing. */
          inAppOwnershipType?: "FAMILY_SHARED" | "PURCHASED";
          /** When the App Store signed this transaction payload. Expressed as UNIX time in milliseconds. */
          signedDate?: number;
          /** Why the App Store refunded or revoked the transaction: 0 refunded for another reason, 1 refunded because of an issue with the app. */
          revocationReason?: number;
          /** When the App Store refunded or revoked the transaction. Expressed as UNIX time in milliseconds. */
          revocationDate?: number;
          /** Whether the transaction was replaced because the customer upgraded to a higher level subscription. */
          isUpgraded?: boolean;
          /** Type of subscription offer applied: 1 introductory offer, 2 promotional offer, 3 offer code, 4 win-back offer. */
          offerType?: number;
          /** Identifier of the promotional offer, offer code or win-back offer. */
          offerIdentifier?: string;
          /** Payment mode of the offer. */
          offerDiscountType?: "FREE_TRIAL" | "PAY_AS_YOU_GO" | "PAY_UP_FRONT" | "ONE_TIME";
          /** Duration of the offer, as an ISO 8601 duration such as P1M or P3D. */
          offerPeriod?: string;
          /** Server environment the transaction belongs to. */
          environment?: "Sandbox" | "Production" | "Xcode" | "LocalTesting";
          /** Three-letter ISO 3166-1 alpha-3 code of the storefront the purchase was made in, such as USA. */
          storefront?: string;
          /** Apple identifier of that storefront. */
          storefrontId?: string;
          /** Whether the customer purchased the product or the App Store renewed it automatically. */
          transactionReason?: "PURCHASE" | "RENEWAL";
          /** Three-letter ISO 4217 code of the currency the price is expressed in. */
          currency?: string;
          /** Price recorded for the transaction, in milliunits of the currency. One unit equals 1000 milliunits. */
          price?: number;
          /** How much of the transaction was revoked. */
          revocationType?: "REFUND_FULL" | "REFUND_PRORATED" | "FAMILY_REVOKE";
          /** Share of the transaction the App Store refunded or revoked, in milliunits, where 100000 is the full amount. */
          revocationPercentage?: number;
          /** Billing plan the subscription was purchased on. */
          billingPlanType?: "BILLED_UPFRONT" | "MONTHLY";
          /** Unique identifier of the app download transaction. */
          appTransactionId?: string;
          /** Billing commitment terms recorded on the transaction, for subscriptions sold with a commitment. The App Store Server API omits a field entirely when it has no value for it, so any field can be missing. */
          commitmentInfo?: {
            /** Position of this billing period within the commitment. */
            billingPeriodNumber?: number;
            /** When the commitment ends. Expressed as UNIX time in milliseconds. */
            commitmentExpiresDate?: number;
            /** Price of the commitment, in milliunits of the currency. */
            commitmentPrice?: number;
            /** Number of billing periods the commitment covers. */
            totalBillingPeriods?: number;
            [key: string]: unknown;
          };
          /** Advanced Commerce API details Apple attaches to transactions and renewal information created through that API. Passed through as returned; this provider does not model the Advanced Commerce contract. */
          advancedCommerceInfo?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Token to pass back as revision to read the next page. Apple returns one on every page; keep the last one to resume the query later. */
        revision: string | null;
        /** Whether more pages are available for this query. Apple returns pages of up to 20 transactions. */
        hasMore: boolean | null;
        /** Bundle identifier of the app the transactions belong to. */
        bundleId: string | null;
        /** Apple identifier of the app, present for production apps. */
        appAppleId: number | null;
        /** Server environment the transactions come from. */
        environment: "Sandbox" | "Production" | "Xcode" | "LocalTesting" | null;
      };
    };
    /** Read one in-app purchase transaction by identifier, decoded from the signed payload Apple returns. */
    "app_store_server.get_transaction_info": {
      input: {
        /**
         * Identifier of the transaction to read: a transactionId or an originalTransactionId. This endpoint does not accept an appTransactionId.
         * @minLength 1
         * @pattern \S
         */
        transactionId: string;
      };
      output: {
        /** One in-app purchase transaction, decoded from the JWS the App Store Server API returns. The App Store Server API omits a field entirely when it has no value for it, so any field can be missing. */
        transaction: {
          /** Unique identifier of this transaction. */
          transactionId?: string;
          /** Transaction identifier of the original purchase, shared by every transaction in a subscription or restore chain. */
          originalTransactionId?: string;
          /** Unique identifier of the subscription purchase event, which changes on every renewal. */
          webOrderLineItemId?: string;
          /** Bundle identifier of the app the purchase belongs to. */
          bundleId?: string;
          /** Product identifier of the in-app purchase. */
          productId?: string;
          /** Identifier of the subscription group the product belongs to. */
          subscriptionGroupIdentifier?: string;
          /** When the App Store charged the customer. Expressed as UNIX time in milliseconds. */
          purchaseDate?: number;
          /** When the original purchase happened. Expressed as UNIX time in milliseconds. */
          originalPurchaseDate?: number;
          /** When the subscription expires or renews. Expressed as UNIX time in milliseconds. */
          expiresDate?: number;
          /** Number of consumable products purchased in this transaction. */
          quantity?: number;
          /** Type of the in-app purchase. */
          type?: "Auto-Renewable Subscription" | "Non-Consumable" | "Consumable" | "Non-Renewing Subscription";
          /** UUID your app associated with the purchase, or that was set through Set App Account Token. */
          appAccountToken?: string;
          /** Whether the customer purchased the product or received it through Family Sharing. */
          inAppOwnershipType?: "FAMILY_SHARED" | "PURCHASED";
          /** When the App Store signed this transaction payload. Expressed as UNIX time in milliseconds. */
          signedDate?: number;
          /** Why the App Store refunded or revoked the transaction: 0 refunded for another reason, 1 refunded because of an issue with the app. */
          revocationReason?: number;
          /** When the App Store refunded or revoked the transaction. Expressed as UNIX time in milliseconds. */
          revocationDate?: number;
          /** Whether the transaction was replaced because the customer upgraded to a higher level subscription. */
          isUpgraded?: boolean;
          /** Type of subscription offer applied: 1 introductory offer, 2 promotional offer, 3 offer code, 4 win-back offer. */
          offerType?: number;
          /** Identifier of the promotional offer, offer code or win-back offer. */
          offerIdentifier?: string;
          /** Payment mode of the offer. */
          offerDiscountType?: "FREE_TRIAL" | "PAY_AS_YOU_GO" | "PAY_UP_FRONT" | "ONE_TIME";
          /** Duration of the offer, as an ISO 8601 duration such as P1M or P3D. */
          offerPeriod?: string;
          /** Server environment the transaction belongs to. */
          environment?: "Sandbox" | "Production" | "Xcode" | "LocalTesting";
          /** Three-letter ISO 3166-1 alpha-3 code of the storefront the purchase was made in, such as USA. */
          storefront?: string;
          /** Apple identifier of that storefront. */
          storefrontId?: string;
          /** Whether the customer purchased the product or the App Store renewed it automatically. */
          transactionReason?: "PURCHASE" | "RENEWAL";
          /** Three-letter ISO 4217 code of the currency the price is expressed in. */
          currency?: string;
          /** Price recorded for the transaction, in milliunits of the currency. One unit equals 1000 milliunits. */
          price?: number;
          /** How much of the transaction was revoked. */
          revocationType?: "REFUND_FULL" | "REFUND_PRORATED" | "FAMILY_REVOKE";
          /** Share of the transaction the App Store refunded or revoked, in milliunits, where 100000 is the full amount. */
          revocationPercentage?: number;
          /** Billing plan the subscription was purchased on. */
          billingPlanType?: "BILLED_UPFRONT" | "MONTHLY";
          /** Unique identifier of the app download transaction. */
          appTransactionId?: string;
          /** Billing commitment terms recorded on the transaction, for subscriptions sold with a commitment. The App Store Server API omits a field entirely when it has no value for it, so any field can be missing. */
          commitmentInfo?: {
            /** Position of this billing period within the commitment. */
            billingPeriodNumber?: number;
            /** When the commitment ends. Expressed as UNIX time in milliseconds. */
            commitmentExpiresDate?: number;
            /** Price of the commitment, in milliunits of the currency. */
            commitmentPrice?: number;
            /** Number of billing periods the commitment covers. */
            totalBillingPeriods?: number;
            [key: string]: unknown;
          };
          /** Advanced Commerce API details Apple attaches to transactions and renewal information created through that API. Passed through as returned; this provider does not model the Advanced Commerce contract. */
          advancedCommerceInfo?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Start Apple's performance test of the Get Retention Message endpoint registered in the sandbox, using an active sandbox subscription as the sample purchase. Passing the test is required before configure_retention_realtime_url accepts a production URL. Returns the request identifier and the test parameters; the test runs for the returned totalDuration. Available only on a connection whose environment is sandbox; Apple serves the performance test endpoints on the sandbox host alone. Apple grants Retention Messaging API access per developer account; without it these endpoints answer 404 with no error body. */
    "app_store_server.initiate_retention_performance_test": {
      input: {
        /**
         * Original transaction identifier of an active auto-renewable subscription purchased in the sandbox environment. Family Sharing transactions are not accepted.
         * @minLength 1
         * @pattern \S
         */
        originalTransactionId: string;
      };
      output: {
        /** Identifier of the test run. Pass it to get_retention_performance_test_results. */
        requestId: string;
        /** Parameters Apple uses for the performance test. Apple may omit a field, in which case it is null. */
        config: {
          /** Maximum number of concurrent requests the test sends to your endpoint. */
          maxConcurrentRequests?: number | null;
          /** Maximum time in milliseconds your endpoint has to answer each request for it to count as a success. */
          responseTimeThreshold?: number | null;
          /** Percentage of requests that must succeed for the test to pass. */
          successRateThreshold?: number | null;
          /** Total duration of the test in milliseconds. Add it to the time you initiated the test to know when results are final. */
          totalDuration?: number | null;
          /** Total number of requests the test sends. */
          totalRequests?: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Look up the in-app purchase transactions behind an order ID from a customer's App Store receipt, to check that the order is genuine and belongs to your app. Apple serves this endpoint only in the production environment, so it fails on a sandbox connection. */
    "app_store_server.look_up_order_id": {
      input: {
        /**
         * Order ID from the customer's App Store receipt, such as FAKE-ORDER-ID.
         * @minLength 1
         * @pattern \S
         */
        orderId: string;
      };
      output: {
        /** Whether the order ID is valid: 0 valid, 1 invalid. Apple returns no transactions for an invalid order ID. */
        status: number | null;
        /** Transactions the order ID covers. */
        transactions: Array<{
          /** Unique identifier of this transaction. */
          transactionId?: string;
          /** Transaction identifier of the original purchase, shared by every transaction in a subscription or restore chain. */
          originalTransactionId?: string;
          /** Unique identifier of the subscription purchase event, which changes on every renewal. */
          webOrderLineItemId?: string;
          /** Bundle identifier of the app the purchase belongs to. */
          bundleId?: string;
          /** Product identifier of the in-app purchase. */
          productId?: string;
          /** Identifier of the subscription group the product belongs to. */
          subscriptionGroupIdentifier?: string;
          /** When the App Store charged the customer. Expressed as UNIX time in milliseconds. */
          purchaseDate?: number;
          /** When the original purchase happened. Expressed as UNIX time in milliseconds. */
          originalPurchaseDate?: number;
          /** When the subscription expires or renews. Expressed as UNIX time in milliseconds. */
          expiresDate?: number;
          /** Number of consumable products purchased in this transaction. */
          quantity?: number;
          /** Type of the in-app purchase. */
          type?: "Auto-Renewable Subscription" | "Non-Consumable" | "Consumable" | "Non-Renewing Subscription";
          /** UUID your app associated with the purchase, or that was set through Set App Account Token. */
          appAccountToken?: string;
          /** Whether the customer purchased the product or received it through Family Sharing. */
          inAppOwnershipType?: "FAMILY_SHARED" | "PURCHASED";
          /** When the App Store signed this transaction payload. Expressed as UNIX time in milliseconds. */
          signedDate?: number;
          /** Why the App Store refunded or revoked the transaction: 0 refunded for another reason, 1 refunded because of an issue with the app. */
          revocationReason?: number;
          /** When the App Store refunded or revoked the transaction. Expressed as UNIX time in milliseconds. */
          revocationDate?: number;
          /** Whether the transaction was replaced because the customer upgraded to a higher level subscription. */
          isUpgraded?: boolean;
          /** Type of subscription offer applied: 1 introductory offer, 2 promotional offer, 3 offer code, 4 win-back offer. */
          offerType?: number;
          /** Identifier of the promotional offer, offer code or win-back offer. */
          offerIdentifier?: string;
          /** Payment mode of the offer. */
          offerDiscountType?: "FREE_TRIAL" | "PAY_AS_YOU_GO" | "PAY_UP_FRONT" | "ONE_TIME";
          /** Duration of the offer, as an ISO 8601 duration such as P1M or P3D. */
          offerPeriod?: string;
          /** Server environment the transaction belongs to. */
          environment?: "Sandbox" | "Production" | "Xcode" | "LocalTesting";
          /** Three-letter ISO 3166-1 alpha-3 code of the storefront the purchase was made in, such as USA. */
          storefront?: string;
          /** Apple identifier of that storefront. */
          storefrontId?: string;
          /** Whether the customer purchased the product or the App Store renewed it automatically. */
          transactionReason?: "PURCHASE" | "RENEWAL";
          /** Three-letter ISO 4217 code of the currency the price is expressed in. */
          currency?: string;
          /** Price recorded for the transaction, in milliunits of the currency. One unit equals 1000 milliunits. */
          price?: number;
          /** How much of the transaction was revoked. */
          revocationType?: "REFUND_FULL" | "REFUND_PRORATED" | "FAMILY_REVOKE";
          /** Share of the transaction the App Store refunded or revoked, in milliunits, where 100000 is the full amount. */
          revocationPercentage?: number;
          /** Billing plan the subscription was purchased on. */
          billingPlanType?: "BILLED_UPFRONT" | "MONTHLY";
          /** Unique identifier of the app download transaction. */
          appTransactionId?: string;
          /** Billing commitment terms recorded on the transaction, for subscriptions sold with a commitment. The App Store Server API omits a field entirely when it has no value for it, so any field can be missing. */
          commitmentInfo?: {
            /** Position of this billing period within the commitment. */
            billingPeriodNumber?: number;
            /** When the commitment ends. Expressed as UNIX time in milliseconds. */
            commitmentExpiresDate?: number;
            /** Price of the commitment, in milliunits of the currency. */
            commitmentPrice?: number;
            /** Number of billing periods the commitment covers. */
            totalBillingPeriods?: number;
            [key: string]: unknown;
          };
          /** Advanced Commerce API details Apple attaches to transactions and renewal information created through that API. Passed through as returned; this provider does not model the Advanced Commerce contract. */
          advancedCommerceInfo?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Ask the App Store to send a TEST notification to the App Store Server Notifications URL configured for your app, and get back the token that identifies the attempt. Fails when no notification URL is configured for the selected environment. */
    "app_store_server.request_test_notification": {
      input: Record<string, never>;
      output: {
        /** Token that identifies the test notification. Pass it to get_test_notification_status to see what the App Store delivered. */
        testNotificationToken: string | null;
      };
    };
    /** Send consumption information for an in-app purchase after a CONSUMPTION_REQUEST notification, so the App Store can decide on the customer's refund request. Apple expects an answer within 12 hours of the notification. Use this for App Store in-app purchases that do not go through the Advanced Commerce API. */
    "app_store_server.send_consumption_information": {
      input: {
        /**
         * Identifier of the transaction the refund request is about, taken from the CONSUMPTION_REQUEST notification.
         * @minLength 1
         * @pattern \S
         */
        transactionId: string;
        /** Whether the customer consented to share consumption data with Apple. The App Store rejects the request unless this is true, and you are responsible for obtaining that consent. */
        customerConsented: boolean;
        /** Whether your app delivered a working product to the customer, and if not, why. */
        deliveryStatus: "DELIVERED" | "UNDELIVERED_QUALITY_ISSUE" | "UNDELIVERED_WRONG_ITEM" | "UNDELIVERED_SERVER_OUTAGE" | "UNDELIVERED_OTHER";
        /** Whether you offered a free sample, a trial, or information about how the content works before the customer bought it. */
        sampleContentProvided: boolean;
        /**
         * Share of the product the customer consumed, in milliunits, where 100000 is all of it. Send it only for consumable and non-consumable in-app purchases and non-renewing subscriptions: omit it entirely for an auto-renewable subscription, where the App Store calculates it from elapsed time and any value fails the request with HTTP 400 ConsumptionPercentageAutoRenewableSubscriptionError. Must be 0 when deliveryStatus is not DELIVERED, and greater than 0 and less than 100000 when refundPreference is GRANT_PRORATED.
         * @minimum 0
         * @maximum 100000
         */
        consumptionPercentage?: number;
        /** Whether you would like the App Store to grant the refund. All three values apply to every product type; GRANT_PRORATED only changes what consumptionPercentage must be, which the consumptionPercentage field describes. The App Store makes the final decision either way. */
        refundPreference?: "DECLINE" | "GRANT_FULL" | "GRANT_PRORATED";
      };
      output: {
        /** Identifier of the transaction the information was sent for. */
        transactionId: string;
        /** Always true once the App Store accepted the consumption information. */
        submitted: boolean;
      };
    };
    /** Send the version 1 consumption information for an in-app purchase after a CONSUMPTION_REQUEST notification. Apple documents this shape for purchases made through the Advanced Commerce API; use send_consumption_information for ordinary App Store in-app purchases. */
    "app_store_server.send_consumption_information_v1": {
      input: {
        /**
         * Identifier of the transaction the refund request is about, taken from the CONSUMPTION_REQUEST notification.
         * @minLength 1
         * @pattern \S
         */
        transactionId: string;
        /** Whether the customer consented to share consumption data with Apple. The App Store rejects the request unless this is true, and you are responsible for obtaining that consent. */
        customerConsented: boolean;
        /** Whether you offered a free sample, a trial, or information about how the content works before the customer bought it. */
        sampleContentProvided: boolean;
        /** The appAccountToken of the transaction, taken from the CONSUMPTION_REQUEST notification. Send an empty string if your app does not use app account tokens. */
        appAccountToken: unknown | "";
        /**
         * How long the customer has had an account with you: 0 undeclared, 1 up to 3 days, 2 3 to 10 days, 3 10 to 30 days, 4 30 to 90 days, 5 90 to 180 days, 6 180 to 365 days, 7 more than 365 days.
         * @minimum 0
         * @maximum 7
         */
        accountTenure: number;
        /**
         * How much of the purchase the customer consumed: 0 undeclared, 1 not consumed, 2 partially consumed, 3 fully consumed.
         * @minimum 0
         * @maximum 3
         */
        consumptionStatus: number;
        /**
         * Whether your app delivered a working product: 0 delivered and working properly, 1 not delivered because of a quality issue, 2 delivered the wrong item, 3 not delivered because of a server outage, 4 not delivered because of a change to the in-game currency, 5 not delivered for another reason.
         * @minimum 0
         * @maximum 5
         */
        deliveryStatus: number;
        /**
         * Total the customer has spent in your app across all platforms, in USD: 0 undeclared, 1 nothing, 2 0.01 to 49.99, 3 50 to 99.99, 4 100 to 499.99, 5 500 to 999.99, 6 1000 to 1999.99, 7 2000 or more.
         * @minimum 0
         * @maximum 7
         */
        lifetimeDollarsPurchased: number;
        /**
         * Total the customer has been refunded in your app across all platforms, in USD, on the same scale as lifetimeDollarsPurchased.
         * @minimum 0
         * @maximum 7
         */
        lifetimeDollarsRefunded: number;
        /**
         * Platform the customer consumed the purchase on: 0 undeclared, 1 an Apple platform, 2 a non-Apple platform.
         * @minimum 0
         * @maximum 2
         */
        platform: number;
        /**
         * How long the customer used the app: 0 undeclared, 1 up to 5 minutes, 2 5 to 60 minutes, 3 1 to 6 hours, 4 6 to 24 hours, 5 1 to 4 days, 6 4 to 16 days, 7 more than 16 days.
         * @minimum 0
         * @maximum 7
         */
        playTime: number;
        /**
         * Status of the customer's account with you: 0 undeclared, 1 active, 2 suspended, 3 terminated, 4 has limited access.
         * @minimum 0
         * @maximum 4
         */
        userStatus: number;
        /**
         * Whether you would like the App Store to grant the refund: 0 undeclared, 1 prefer that it is granted, 2 prefer that it is declined, 3 no preference.
         * @minimum 0
         * @maximum 3
         */
        refundPreference?: number;
      };
      output: {
        /** Identifier of the transaction the information was sent for. */
        transactionId: string;
        /** Always true once the App Store accepted the consumption information. */
        submitted: boolean;
      };
    };
    /** Set or replace the app account token on a transaction, to associate a purchase made outside your app with a customer on your own service. Overwrites any token already set. */
    "app_store_server.set_app_account_token": {
      input: {
        /**
         * Original transaction identifier of the transaction to update. Apple rejects a transaction identifier that is not the original one.
         * @minLength 1
         * @pattern \S
         */
        originalTransactionId: string;
        /**
         * UUID that identifies the customer on your own service. Generate it yourself; Apple returns it on every transaction and renewal of the chain.
         * @format uuid
         */
        appAccountToken: string;
      };
      output: {
        /** Original transaction identifier that was updated. */
        originalTransactionId: string;
        /** Token now stored on the transaction. */
        appAccountToken: string;
        /** Always true once Apple confirmed the update. */
        updated: boolean;
      };
    };
    /** Upload a PNG image for retention messages, either a FULL_SIZE image shown above the message body or a BULLET_POINT icon. The image starts in the PENDING state and Apple reviews it before it can be displayed; check the state with get_retention_image_list. Each app can hold up to 2000 images and an identifier can be uploaded only once. Only images and messages in the APPROVED state are shown to customers; the sandbox approves uploads immediately. Apple grants Retention Messaging API access per developer account; without it these endpoints answer 404 with no error body. */
    "app_store_server.upload_retention_image": {
      input: {
        /**
         * UUID that identifies the image. You choose it when you upload the image and use it everywhere the image is referenced afterwards.
         * @format uuid
         */
        imageIdentifier: string;
        /** Which slot the image is for. FULL_SIZE images must be 3840 pixels wide and 160 to 2160 pixels tall; BULLET_POINT images must be 1024 by 1024 pixels. Defaults to FULL_SIZE. */
        imageSize?: "FULL_SIZE" | "BULLET_POINT";
        /**
         * Publicly reachable HTTP or HTTPS URL of the PNG file. The connector downloads it (up to 20 MB) and forwards the bytes to Apple.
         * @format uri
         */
        sourceUrl?: string;
        /**
         * Base64-encoded bytes of the PNG file, up to 20 MB decoded.
         * @minLength 1
         * @pattern \S
         */
        contentBase64?: string;
      };
      output: {
        /** Identifier the image was filed under. */
        imageIdentifier: string;
        /** Slot the image was uploaded for. */
        imageSize: "FULL_SIZE" | "BULLET_POINT";
        /** Number of PNG bytes sent to Apple. */
        byteLength: number;
        /** Always true once Apple accepted the upload. */
        uploaded: boolean;
      };
    };
    /** Upload the text of a retention message: a header, a body, optionally a full-size image and bullet points with icons. The message starts in the PENDING state and Apple reviews it; check the state with get_retention_message_list. Leave out image and bulletPoints for messages you will use as switch-plan or promotional-offer messages. Each app can hold up to 2000 messages and an identifier can be uploaded only once. Only images and messages in the APPROVED state are shown to customers; the sandbox approves uploads immediately. Apple grants Retention Messaging API access per developer account; without it these endpoints answer 404 with no error body. */
    "app_store_server.upload_retention_message": {
      input: {
        /**
         * UUID that identifies the message. You choose it when you upload the message and use it everywhere the message is referenced afterwards.
         * @format uuid
         */
        messageIdentifier: string;
        /**
         * Header text, up to 66 characters. Shown above the body, or above the image when headerPosition is ABOVE_IMAGE.
         * @minLength 1
         * @maxLength 66
         * @pattern \S
         */
        header: string;
        /**
         * Body text, up to 144 characters.
         * @minLength 1
         * @maxLength 144
         * @pattern \S
         */
        body: string;
        /** Full-size image to show with the message. Omit it for messages you plan to use as switch-plan or promotional-offer messages, which cannot carry an image. */
        image?: {
          /**
           * UUID that identifies the image. You choose it when you upload the image and use it everywhere the image is referenced afterwards.
           * @format uuid
           */
          imageIdentifier: string;
          /**
           * Alternative text for the image, up to 150 characters.
           * @minLength 1
           * @maxLength 150
           * @pattern \S
           */
          altText: string;
        };
        /**
         * Bullet points to list under the body, each with a BULLET_POINT sized icon. Apple limits how many a message can carry.
         * @minItems 1
         */
        bulletPoints?: Array<{
          /**
           * Text of the bullet point, up to 66 characters.
           * @minLength 1
           * @maxLength 66
           * @pattern \S
           */
          text: string;
          /**
           * Identifier of a BULLET_POINT sized image (1024 by 1024 pixels) to use as the icon of this bullet point.
           * @format uuid
           */
          imageIdentifier: string;
          /**
           * Alternative text for the image, up to 150 characters.
           * @minLength 1
           * @maxLength 150
           * @pattern \S
           */
          altText: string;
        }>;
        /** Where the header goes: ABOVE_BODY (the default) or ABOVE_IMAGE, which requires an image. */
        headerPosition?: "ABOVE_BODY" | "ABOVE_IMAGE";
      };
      output: {
        /** Identifier the message was filed under. */
        messageIdentifier: string;
        /** Always true once Apple accepted the upload. */
        uploaded: boolean;
      };
    };
  }
}
