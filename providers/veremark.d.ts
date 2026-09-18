import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Veremark background-check request for a candidate. */
    "veremark.create_request": {
      input: {
        /**
         * The criterion identifier selected for the candidate.
         * @format uuid
         */
        criteriaGuid: string;
        /** The candidate who will complete the background checks. */
        candidate: {
          /**
           * The candidate's first name.
           * @minLength 1
           * @maxLength 255
           */
          firstName: string;
          /**
           * The candidate's last name.
           * @minLength 1
           * @maxLength 255
           */
          lastName: string;
          /**
           * The candidate's email address.
           * @format email
           */
          email: string;
          /**
           * The candidate's ISO 3166-1 alpha-2 country code.
           * @minLength 2
           * @maxLength 2
           */
          countryCode?: string;
          /**
           * The candidate's phone number.
           * @maxLength 255
           */
          phoneNumber?: string;
        };
        /** The job associated with the background-check request. */
        job: {
          /**
           * The role for which the candidate is being screened.
           * @minLength 1
           * @maxLength 255
           */
          role: string;
          /** A caller-defined identifier used to track the request. */
          externalId?: string;
          /** The client name when screening on behalf of another organization. */
          client?: string;
          /** Additional information such as a cost code. */
          additionalInformation?: string;
        };
        /** The webhook Veremark should call when the request status changes. */
        webhook?: {
          /**
           * The webhook URL that Veremark should call.
           * @format uri
           */
          url: string;
          /** The HTTP method Veremark should use for webhook delivery. */
          method: "patch" | "put" | "post" | "get";
          /** The webhook authentication method. */
          authenticationType?: "Basic";
          /** The optional Basic authentication credentials for the webhook. */
          credentials?: string;
        };
        /** Whether Veremark should send its initial information-request email to the candidate. */
        sendInitialCandidateEmail?: boolean;
        /**
         * The Veremark organization user to assign to the new request.
         * @format uuid
         */
        assignedUserGuid?: string;
      };
      output: {
        /** A normalized Veremark background-check request. */
        request: {
          /**
           * The background-check request identifier.
           * @format uuid
           */
          guid: string;
          /** The current request status. */
          status: string | null;
          /** The candidate request page URL when available. */
          requestUrl: string | null;
          /** The caller-defined tracking identifier when available. */
          externalId: string | null;
          /** The candidate identifier when available. */
          candidateGuid: string | null;
          /** The individual background checks attached to the request. */
          checks: Array<Record<string, unknown>>;
          /** The raw request returned by Veremark. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get the current status and results of one Veremark background-check request. */
    "veremark.get_request": {
      input: {
        /**
         * The background-check request identifier.
         * @format uuid
         */
        guid: string;
      };
      output: {
        /** A normalized Veremark background-check request. */
        request: {
          /**
           * The background-check request identifier.
           * @format uuid
           */
          guid: string;
          /** The current request status. */
          status: string | null;
          /** The candidate request page URL when available. */
          requestUrl: string | null;
          /** The caller-defined tracking identifier when available. */
          externalId: string | null;
          /** The candidate identifier when available. */
          candidateGuid: string | null;
          /** The individual background checks attached to the request. */
          checks: Array<Record<string, unknown>>;
          /** The raw request returned by Veremark. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List background-check criteria available to the Veremark organization. */
    "veremark.list_criteria": {
      input: Record<string, never>;
      output: {
        /** The available Veremark criteria. */
        criteria: Array<{
          /**
           * The criterion identifier.
           * @format uuid
           */
          guid: string;
          /** The criterion name. */
          name: string;
          /** The ISO country code associated with the criterion. */
          country: string | null;
          /** The checks included in the criterion. */
          checks: Array<Record<string, unknown>>;
          /** The raw criterion returned by Veremark. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List Veremark background-check requests, optionally filtered by status-change date. */
    "veremark.list_requests": {
      input: {
        /**
         * Only return requests whose status changed on or after this YYYY-MM-DD date.
         * @format date
         */
        statusChangeDateFrom?: string;
      };
      output: {
        /** The matching Veremark requests. */
        requests: Array<{
          /**
           * The background-check request identifier.
           * @format uuid
           */
          guid: string;
          /** The current request status. */
          status: string | null;
          /** The candidate request page URL when available. */
          requestUrl: string | null;
          /** The caller-defined tracking identifier when available. */
          externalId: string | null;
          /** The candidate identifier when available. */
          candidateGuid: string | null;
          /** The individual background checks attached to the request. */
          checks: Array<Record<string, unknown>>;
          /** The raw request returned by Veremark. */
          raw: Record<string, unknown>;
        }>;
      };
    };
  }
}
