import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Look up CallerAPI spam reputation, business details, complaints, and optional HLR carrier data for a phone number. */
    "callerapi.get_phone_number_information": {
      input: {
        /**
         * The phone number to look up. CallerAPI accepts E.164 input.
         * @minLength 1
         */
        phone: string;
        /** Whether to include HLR carrier data in the CallerAPI lookup. */
        hlr?: boolean;
      };
      output: {
        /** The request status returned by CallerAPI. */
        status: string;
        /** Detailed CallerAPI phone intelligence for a number. */
        data?: {
          /** The phone number returned by CallerAPI. */
          phone?: string;
          /** Whether the number is marked as spam. */
          is_spam?: boolean;
          /** The reputation label for the number. */
          reputation?: string;
          /**
           * The spam likelihood score from 0 to 100.
           * @minimum 0
           * @maximum 100
           */
          spam_score?: number;
          /** The entity type returned by CallerAPI. */
          entity_type?: string;
          /**
           * The total complaint count recorded for the number.
           * @minimum 0
           */
          total_complaints?: number;
          /** The complaints returned for the phone number. */
          complaints?: Array<{
            /** The date and time when the complaint was created. */
            CreatedDate?: string;
            /** The date and time when the reported violation occurred. */
            ViolationDate?: string;
            /** The consumer state associated with the complaint. */
            ConsumerState?: string;
            /** The complaint subject or category. */
            Subject?: string;
            /** Whether the complaint involved a robocall. */
            RecordedMessageOrRobocall?: string;
            /** Additional complaint details when provided. */
            Comment?: string;
            [key: string]: unknown;
          }>;
          /** Business details associated with the phone number. */
          business_info?: {
            /** The associated business name. */
            business_name?: string;
            /** The high-level business category. */
            category?: string;
            /** The business city. */
            city?: string;
            /** The business state or province. */
            state?: string;
            /** The business country code. */
            country?: string;
            /** The business industry. */
            industry?: string;
            /** Whether CallerAPI marks the business as verified. */
            verified?: boolean;
            [key: string]: unknown;
          };
          /** Carrier and HLR information returned by CallerAPI. */
          carrier_info?: {
            /** Country information returned with carrier details. */
            country?: {
              /** The ISO country code. */
              iso?: string;
              /** The country calling code. */
              code?: string;
              /** The full country name. */
              name?: string;
              [key: string]: unknown;
            };
            /** Network information returned with carrier details. */
            network?: {
              /** The current carrier name. */
              carrier?: string;
              /** The operating company number. */
              ocn?: string;
              /** The service provider ID. */
              spid?: string;
              /** The network type returned by CallerAPI. */
              type?: string;
              /** Original carrier information returned with carrier details. */
              original?: {
                /** The original carrier name. */
                carrier?: string;
                /** The original operating company number. */
                ocn?: string;
                /** The original service provider ID. */
                spid?: string;
                [key: string]: unknown;
              };
              [key: string]: unknown;
            };
            /** Number details returned with carrier information. */
            number?: {
              /** The location routing number. */
              lrn?: string;
              /** The number type returned by CallerAPI. */
              type?: string;
              /** The number validity status. */
              valid?: string;
              /** Whether CallerAPI reports the number as mobile. */
              mobile?: boolean;
              /** The phone number in MSISDN format. */
              msisdn?: string;
              /** Whether the number has been ported. */
              ported?: boolean;
              /** The date when the number was ported. */
              ported_date?: string;
              /** Whether CallerAPI reports the number as landline. */
              landline?: boolean;
              /** The number time zone. */
              timezone?: string;
              /** The number reachability status. */
              reachable?: string;
              /** The local number format. */
              local_format?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve the authenticated CallerAPI account email and credit balance. */
    "callerapi.get_user_information": {
      input: Record<string, never>;
      output: {
        /** The request status returned by CallerAPI. */
        status: string;
        /** The authenticated account email address. */
        email: string;
        /**
         * The number of credits spent by the account.
         * @minimum 0
         */
        credits_spent: number;
        /**
         * The monthly credit allocation for the account.
         * @minimum 0
         */
        credits_monthly: number;
        /**
         * The number of credits left in the account.
         * @minimum 0
         */
        credits_left: number;
      };
    };
  }
}
