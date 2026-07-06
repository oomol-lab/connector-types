import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one Fern customer by ID. */
    "fern.get_customer": {
      input: {
        /**
         * Unique identifier of the customer.
         * @format uuid
         */
        customerId: string;
        /** Whether to include verification details. */
        includeVerification?: boolean;
        /** Whether to include available payment methods in the response. */
        includePaymentMethods?: boolean;
      };
      output: {
        /** Unique identifier of the customer. */
        customerId: string;
        /** Current status of the customer. */
        customerStatus: string;
        /** Customer type returned by Fern. */
        customerType?: string;
        /**
         * Email address of the customer.
         * @format email
         */
        email?: string;
        /** Full name of the customer or business. */
        name?: string;
        /**
         * URL for the KYC or KYB verification process.
         * @format uri
         */
        verificationLink?: string;
        /**
         * An ISO 8601 timestamp returned by Fern.
         * @format date-time
         */
        updatedAt?: string;
        /** Organization identifier. */
        organizationId?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve Fern exchange rate and fee details for source and destination currencies. */
    "fern.get_exchange_rate": {
      input: {
        /**
         * Currency label or contract address for the source currency.
         * @minLength 1
         */
        sourceCurrency: string;
        /**
         * Payment method for the source exchange rate.
         * @minLength 1
         */
        sourcePaymentMethod: string;
        /**
         * Amount to be sent. When provided, Fern returns fees and destination amount.
         * @minLength 1
         */
        sourceAmount?: string;
        /**
         * Payment method for the destination exchange rate.
         * @minLength 1
         */
        destinationPaymentMethod: string;
        /**
         * Currency label or contract address for the destination currency.
         * @minLength 1
         */
        destinationCurrency: string;
      };
      output: {
        /** The rate at which the source currency is multiplied to obtain the destination currency. */
        exchangeRate: string;
        /** Destination amount excluding Fern fees. */
        destinationAmount?: string;
        /** Fee components returned by Fern. */
        feeComponents: Array<{
          /** The type of fee component. */
          feeType: string;
          /** A fiat or crypto currency returned by Fern. */
          feeCurrency?: {
            /** Currency label or contract address returned by Fern. */
            label?: string;
            [key: string]: unknown;
          };
          /** Amount of the fee component. */
          feeAmount: string;
          [key: string]: unknown;
        }>;
        /** Fee summary returned by Fern. */
        fees?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Retrieve one Fern payment account by ID. */
    "fern.get_payment_account": {
      input: {
        /**
         * Unique identifier of the payment account.
         * @format uuid
         */
        paymentAccountId: string;
      };
      output: {
        /** Identifier of the payment account returned by Fern. */
        paymentAccountId: string;
        /** Type of payment account. */
        paymentAccountType: string;
        /** Status of the payment account. */
        paymentAccountStatus: string;
        /** Customer ID that owns the payment account. */
        customerId?: string;
        /** Nickname for the payment account. */
        nickname?: string | null;
        /**
         * An ISO 8601 timestamp returned by Fern.
         * @format date-time
         */
        createdAt?: string;
        /** Whether the payment account is a third-party account. */
        isThirdParty?: boolean;
        [key: string]: unknown;
      };
    };
    /** Retrieve one Fern transaction by ID. */
    "fern.get_transaction": {
      input: {
        /**
         * Unique identifier of the transaction.
         * @format uuid
         */
        transactionId: string;
      };
      output: {
        /** Unique identifier of the transaction. */
        transactionId: string;
        /** Customer ID associated with the transaction. */
        customerId: string;
        /** Quote ID used for the transaction. */
        quoteId?: string;
        /** Current status of the transaction. */
        transactionStatus: string;
        /** Optional caller-provided correlation ID. */
        correlationId?: string;
        /** Source transaction details returned by Fern. */
        source?: {
          /** A fiat or crypto currency returned by Fern. */
          sourceCurrency?: {
            /** Currency label or contract address returned by Fern. */
            label?: string;
            [key: string]: unknown;
          };
          /** Payment method for the source transaction. */
          sourcePaymentMethod?: string;
          /** The amount sent from the source. */
          sourceAmount?: string;
          [key: string]: unknown;
        };
        /** Destination transaction details returned by Fern. */
        destination?: {
          /** A fiat or crypto currency returned by Fern. */
          destinationCurrency?: {
            /** Currency label or contract address returned by Fern. */
            label?: string;
            [key: string]: unknown;
          };
          /** Payment method for the destination transaction. */
          destinationPaymentMethod?: string;
          /** Exchange rate used for the transaction. */
          exchangeRate?: string;
          [key: string]: unknown;
        };
        /** Fee structure returned by Fern. */
        fees?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List Fern customers with optional organization filtering and cursor pagination. */
    "fern.list_customers": {
      input: {
        /**
         * Token for forward pagination.
         * @minLength 1
         */
        pageToken?: string;
        /**
         * Number of items per page, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * Organization ID to filter customers.
         * @format uuid
         */
        organizationId?: string;
      };
      output: {
        /** Customers returned for the requested page. */
        customers: Array<{
          /** Unique identifier of the customer. */
          customerId: string;
          /** Current status of the customer. */
          customerStatus: string;
          /** Customer type returned by Fern. */
          customerType?: string;
          /**
           * Email address of the customer.
           * @format email
           */
          email?: string;
          /** Full name of the customer or business. */
          name?: string;
          /**
           * URL for the KYC or KYB verification process.
           * @format uri
           */
          verificationLink?: string;
          /**
           * An ISO 8601 timestamp returned by Fern.
           * @format date-time
           */
          updatedAt?: string;
          /** Organization identifier. */
          organizationId?: string;
          [key: string]: unknown;
        }>;
        /**
         * Token for forward pagination.
         * @minLength 1
         */
        nextPageToken?: string;
      };
    };
    /** List Fern payment accounts for a customer with cursor pagination. */
    "fern.list_payment_accounts": {
      input: {
        /**
         * Customer to list payment accounts for.
         * @format uuid
         */
        customerId: string;
        /**
         * Token for forward pagination.
         * @minLength 1
         */
        pageToken?: string;
        /**
         * Number of items per page, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** Payment accounts returned for the requested page. */
        paymentAccounts: Array<{
          /** Identifier of the payment account returned by Fern. */
          paymentAccountId: string;
          /** Type of payment account. */
          paymentAccountType: string;
          /** Status of the payment account. */
          paymentAccountStatus: string;
          /** Customer ID that owns the payment account. */
          customerId?: string;
          /** Nickname for the payment account. */
          nickname?: string | null;
          /**
           * An ISO 8601 timestamp returned by Fern.
           * @format date-time
           */
          createdAt?: string;
          /** Whether the payment account is a third-party account. */
          isThirdParty?: boolean;
          [key: string]: unknown;
        }>;
        /**
         * Token for forward pagination.
         * @minLength 1
         */
        nextPageToken?: string;
      };
    };
    /** List Fern transactions with optional customer, payment account, and organization filters. */
    "fern.list_transactions": {
      input: {
        /**
         * Token for forward pagination.
         * @minLength 1
         */
        pageToken?: string;
        /**
         * Number of items per page, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * Customer to list transactions for.
         * @format uuid
         */
        customerId?: string;
        /**
         * Payment account to list transactions for.
         * @format uuid
         */
        paymentAccountId?: string;
        /**
         * Organization to list transactions for.
         * @format uuid
         */
        organizationId?: string;
      };
      output: {
        /** Transactions returned for the requested page. */
        transactions: Array<{
          /** Unique identifier of the transaction. */
          transactionId: string;
          /** Customer ID associated with the transaction. */
          customerId: string;
          /** Quote ID used for the transaction. */
          quoteId?: string;
          /** Current status of the transaction. */
          transactionStatus: string;
          /** Optional caller-provided correlation ID. */
          correlationId?: string;
          /** Source transaction details returned by Fern. */
          source?: {
            /** A fiat or crypto currency returned by Fern. */
            sourceCurrency?: {
              /** Currency label or contract address returned by Fern. */
              label?: string;
              [key: string]: unknown;
            };
            /** Payment method for the source transaction. */
            sourcePaymentMethod?: string;
            /** The amount sent from the source. */
            sourceAmount?: string;
            [key: string]: unknown;
          };
          /** Destination transaction details returned by Fern. */
          destination?: {
            /** A fiat or crypto currency returned by Fern. */
            destinationCurrency?: {
              /** Currency label or contract address returned by Fern. */
              label?: string;
              [key: string]: unknown;
            };
            /** Payment method for the destination transaction. */
            destinationPaymentMethod?: string;
            /** Exchange rate used for the transaction. */
            exchangeRate?: string;
            [key: string]: unknown;
          };
          /** Fee structure returned by Fern. */
          fees?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /**
         * Token for forward pagination.
         * @minLength 1
         */
        nextPageToken?: string;
      };
    };
  }
}
