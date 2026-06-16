import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Exchange the connected OOMOL OIDC token with Google Cloud Workload Identity Federation and return a Google Cloud access token. */
    "gcloud_sts.get_federated_access_token": {
      input: {
        /**
         * The Google OAuth scopes requested for the access token. Defaults to https://www.googleapis.com/auth/cloud-platform.
         * @minLength 1
         */
        access_token_scopes?: string;
        /**
         * The Google Cloud service account email to impersonate after STS token exchange. Required when the connection has no saved Service Account and the action needs service account impersonation; otherwise a direct federated access token is returned.
         * @minLength 1
         */
        service_account?: string;
        /**
         * The optional service account access token lifetime, such as 3600s. Google Cloud defaults to 3600s.
         * @minLength 1
         */
        access_token_lifetime?: string;
      };
      output: {
        /** The Google Cloud OAuth 2.0 access token. */
        accessToken: string;
        /** The token type returned by Google Cloud, usually Bearer. */
        tokenType: string;
        /** The ISO timestamp when the access token expires. */
        expiration: string;
        /** The scopes attached to the returned access token. */
        scope: string | null;
        /** The issued token type returned by Google STS. */
        issuedTokenType: string | null;
        /** The impersonated Google Cloud service account email, if impersonation was used. */
        serviceAccountEmail: string | null;
        /** The raw credential response returned by Google Cloud STS or IAM Credentials. */
        raw: Record<string, unknown>;
      };
    };
  }
}
