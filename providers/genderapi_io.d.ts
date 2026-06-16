import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Infer the likely gender for one email address after GenderAPI.io extracts a name from it. */
    "genderapi_io.get_gender_by_email_address": {
      input: {
        /**
         * The email address to classify with GenderAPI.io.
         * @format email
         */
        emailAddress: string;
        /**
         * The optional ISO 3166-1 alpha-2 country code used to localize the request.
         * @minLength 2
         * @maxLength 2
         */
        country?: string;
        /** Whether GenderAPI.io should ask its AI model when the extracted name is missing from the database. */
        askToAI?: boolean;
      };
      output: {
        /** Indicates that GenderAPI.io processed the request successfully. */
        status: true;
        /**
         * The original query value echoed back by GenderAPI.io.
         * @minLength 1
         */
        q: string;
        /** The matched or extracted first name returned by GenderAPI.io. */
        name?: string;
        /** The inferred gender value returned by GenderAPI.io. */
        gender?: "male" | "female" | null;
        /**
         * The country code used or inferred by GenderAPI.io.
         * @minLength 2
         * @maxLength 2
         */
        country?: string;
        /**
         * The confidence score from 0 to 100 returned by GenderAPI.io.
         * @minimum 0
         * @maximum 100
         */
        probability: number;
        /**
         * The number of matching name samples used by GenderAPI.io.
         * @minimum 0
         */
        total_names: number;
        /**
         * The number of credits consumed by this request.
         * @minimum 0
         */
        used_credits: number;
        /**
         * The credits remaining after this request.
         * @minimum 0
         */
        remaining_credits: number;
        /**
         * The Unix timestamp when the current package expires.
         * @minimum 0
         */
        expires: number;
        /**
         * The server-side processing time returned by GenderAPI.io.
         * @minLength 1
         */
        duration: string;
      };
    };
    /** Infer the likely gender for one first name with optional country and AI fallback hints. */
    "genderapi_io.get_gender_by_first_name": {
      input: {
        /**
         * The first name to classify with GenderAPI.io.
         * @minLength 1
         */
        firstName: string;
        /**
         * The optional ISO 3166-1 alpha-2 country code used to localize the request.
         * @minLength 2
         * @maxLength 2
         */
        country?: string;
        /** Whether GenderAPI.io should ask its AI model when the name is missing from the database. */
        askToAI?: boolean;
        /** Whether GenderAPI.io should still guess a gender for unusual or non-human-looking names. */
        forceToGenderize?: boolean;
      };
      output: {
        /** Indicates that GenderAPI.io processed the request successfully. */
        status: true;
        /**
         * The original query value echoed back by GenderAPI.io.
         * @minLength 1
         */
        q: string;
        /** The matched or extracted first name returned by GenderAPI.io. */
        name?: string;
        /** The inferred gender value returned by GenderAPI.io. */
        gender?: "male" | "female" | null;
        /**
         * The country code used or inferred by GenderAPI.io.
         * @minLength 2
         * @maxLength 2
         */
        country?: string;
        /**
         * The confidence score from 0 to 100 returned by GenderAPI.io.
         * @minimum 0
         * @maximum 100
         */
        probability: number;
        /**
         * The number of matching name samples used by GenderAPI.io.
         * @minimum 0
         */
        total_names: number;
        /**
         * The number of credits consumed by this request.
         * @minimum 0
         */
        used_credits: number;
        /**
         * The credits remaining after this request.
         * @minimum 0
         */
        remaining_credits: number;
        /**
         * The Unix timestamp when the current package expires.
         * @minimum 0
         */
        expires: number;
        /**
         * The server-side processing time returned by GenderAPI.io.
         * @minLength 1
         */
        duration: string;
      };
    };
    /** Infer the likely gender for one username or nickname with optional country and AI fallback hints. */
    "genderapi_io.get_gender_by_username": {
      input: {
        /**
         * The username or nickname to classify with GenderAPI.io.
         * @minLength 1
         */
        username: string;
        /**
         * The optional ISO 3166-1 alpha-2 country code used to localize the request.
         * @minLength 2
         * @maxLength 2
         */
        country?: string;
        /** Whether GenderAPI.io should ask its AI model when the username cannot be resolved from the database. */
        askToAI?: boolean;
        /** Whether GenderAPI.io should still guess a gender for unusual usernames. */
        forceToGenderize?: boolean;
      };
      output: {
        /** Indicates that GenderAPI.io processed the request successfully. */
        status: true;
        /**
         * The original query value echoed back by GenderAPI.io.
         * @minLength 1
         */
        q: string;
        /** The matched or extracted first name returned by GenderAPI.io. */
        name?: string;
        /** The inferred gender value returned by GenderAPI.io. */
        gender?: "male" | "female" | null;
        /**
         * The country code used or inferred by GenderAPI.io.
         * @minLength 2
         * @maxLength 2
         */
        country?: string;
        /**
         * The confidence score from 0 to 100 returned by GenderAPI.io.
         * @minimum 0
         * @maximum 100
         */
        probability: number;
        /**
         * The number of matching name samples used by GenderAPI.io.
         * @minimum 0
         */
        total_names: number;
        /**
         * The number of credits consumed by this request.
         * @minimum 0
         */
        used_credits: number;
        /**
         * The credits remaining after this request.
         * @minimum 0
         */
        remaining_credits: number;
        /**
         * The Unix timestamp when the current package expires.
         * @minimum 0
         */
        expires: number;
        /**
         * The server-side processing time returned by GenderAPI.io.
         * @minLength 1
         */
        duration: string;
      };
    };
  }
}
