import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the remaining credit balance for the connected KIE.AI account. */
    "kie_ai.get_account_credits": {
      input: Record<string, never>;
      output: {
        /** The response status code returned by KIE.AI. */
        code: number;
        /** The response message returned by KIE.AI. */
        message: string;
        /** The remaining credit quantity reported by KIE.AI. */
        credits: number;
      };
    };
    /** Convert a KIE.AI generated file URL into a temporary direct download URL. */
    "kie_ai.get_download_url": {
      input: {
        /**
         * The KIE.AI generated file URL to convert into a download URL.
         * @minLength 1
         * @format uri
         */
        url: string;
      };
      output: {
        /** The response status code returned by KIE.AI. */
        code: number;
        /** The response message returned by KIE.AI. */
        message: string;
        /**
         * The temporary downloadable URL returned by KIE.AI.
         * @format uri
         */
        downloadUrl: string;
        /** The documented validity window for the download URL in seconds. */
        expiresInSeconds: number;
      };
    };
  }
}
