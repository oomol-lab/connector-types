import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch the visible HelloLeads web form definition for the connected Web Form Key and report whether reCAPTCHA v2 is enabled. */
    "helloleads.get_web_form_definition": {
      input: Record<string, never>;
      output: {
        /** The HelloLeads organization ID returned by the form definition API. */
        organizationId: string | null;
        /** The HelloLeads event ID returned by the form definition API. */
        eventId: string | null;
        /** The default country returned by HelloLeads when present. */
        country: string | null;
        /** The default mobile country code returned by HelloLeads when present. */
        mobileCode: string | null;
        /** Whether HelloLeads reports reCAPTCHA v2 for this web form. */
        requiresRecaptcha: boolean;
        /** The visible HelloLeads fields that callers may fill. */
        fields: Array<{
          /** The field identifier expected by HelloLeads. */
          name: string;
          /** The field label shown in HelloLeads. */
          label: string;
          /** The normalized HelloLeads field type. */
          type: "text" | "textarea" | "dropdown" | "multiselect" | "date" | "file" | "unknown";
          /** Whether HelloLeads marks the field as required. */
          required: boolean;
          /** The placeholder configured for the field when present. */
          placeholder: string | null;
          /** Whether the field accepts multiple submitted values. */
          acceptsMultiple: boolean;
          /** Whether the field requires or accepts file uploads. */
          allowsFileUpload: boolean;
          /** Whether HelloLeads marks the field as a custom field. */
          custom: boolean;
          /** The configured option values for dropdown-like fields. */
          options: Array<string>;
        }>;
      };
    };
    /** Submit one HelloLeads web form lead with JSON field values, excluding reCAPTCHA and file-upload workflows. */
    "helloleads.submit_web_form": {
      input: {
        /**
         * Optional mobile country code such as +91. When provided with a mobile field, it is prepended unless the mobile value already starts with the same code.
         * @minLength 1
         */
        countryCode?: string;
        /** Field values keyed by the HelloLeads form field names returned by get_web_form_definition. */
        values: Record<string, string | number | boolean | Array<string>>;
      };
      output: {
        /** Whether HelloLeads reported a successful form submission. */
        successful: boolean;
        /** The raw HelloLeads status string. */
        status: string;
        /** The human-readable HelloLeads submission message. */
        message: string;
        /** The HelloLeads submissionAction value when returned. */
        submissionAction: string | null;
        /** The full lead name returned by HelloLeads when present. */
        leadFullName: string | null;
        /** The HelloLeads visitor ID returned after submission. */
        visitorId: string | null;
        /** The HelloLeads user ID returned after submission. */
        userId: string | null;
        /** The HelloLeads event ID returned after submission. */
        eventId: string | null;
        /** The raw HelloLeads submission payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
