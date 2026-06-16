import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch the available Linguapop placement test languages and their stable language codes. */
    "linguapop.list_available_languages": {
      input: Record<string, never>;
      output: {
        /** The list of available placement test languages returned by Linguapop. */
        languages: Array<{
          /** Human-readable name of the language supported by Linguapop. */
          name: string;
          /** Stable Linguapop language code to use when creating placement test invitations. */
          code: string;
        }>;
      };
    };
    /** Create a Linguapop placement test invitation for a candidate, optionally send an email, generate a kiosk code, and configure callback or return URLs. */
    "linguapop.send_invitation": {
      input: {
        /**
         * Optional CRM, LMS, or website identifier used to track the candidate.
         * @minLength 1
         * @maxLength 500
         */
        externalIdentifier?: string;
        /**
         * Optional candidate name to include on the invitation.
         * @minLength 1
         */
        name?: string;
        /**
         * Candidate email address for the placement test.
         * @format email
         */
        email: string;
        /**
         * Linguapop language code for the placement test, such as eng, ita, spa, ger, or fra.
         * @minLength 1
         */
        languageCode: string;
        /** Whether Linguapop should send an invitation email to the candidate. */
        sendEmail: boolean;
        /** Whether Linguapop should generate and return a kiosk code for the candidate. */
        generateKioskCode?: boolean;
        /** Whether the placement test should include a reading section. */
        testReading?: boolean;
        /** Whether the placement test should include a listening section. */
        testListening?: boolean;
        /**
         * Callback URL where Linguapop should POST placement test results when the test is completed.
         * @maxLength 1000
         * @format uri
         */
        callbackUrl?: string;
        /**
         * URL where the candidate should be redirected after completing the placement test.
         * @maxLength 1000
         * @format uri
         */
        returnUrl?: string;
      };
      output: {
        /** Unique Linguapop invitation identifier for tracking the placement test. */
        invitationId: number;
        /** The external identifier echoed by Linguapop, or null when none was supplied. */
        externalIdentifier: string | null;
        /**
         * Direct URL to the Linguapop placement test invitation.
         * @format uri
         */
        url: string;
        /** Whether Linguapop successfully sent the invitation email. */
        emailSent: boolean;
        /** Generated kiosk code for the candidate, or null when no kiosk code was requested. */
        kioskCode: string | null;
      };
    };
  }
}
