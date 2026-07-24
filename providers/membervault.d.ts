import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add a user to MemberVault and optionally grant access to one product or course. */
    "membervault.add_user": {
      input: {
        /**
         * The email address of the user to add or enroll.
         * @format email
         */
        email: string;
        /**
         * The MemberVault product or course ID. Use -1 to create the user without granting product access.
         * @minimum -1
         */
        courseId: number;
        /**
         * The user's optional first name.
         * @minLength 1
         */
        firstName?: string;
        /**
         * The user's optional last name.
         * @minLength 1
         */
        lastName?: string;
      };
      output: {
        /** The MemberVault user identifier when returned. */
        userId: number | string | null;
        /** A message returned by MemberVault when available. */
        message: string | null;
        /** The raw MemberVault API response payload. */
        raw: unknown;
      };
    };
    /** Permanently delete a MemberVault user and their data, progress, and quiz answers. */
    "membervault.delete_user": {
      input: {
        /**
         * The email address of the user to permanently delete.
         * @format email
         */
        email: string;
      };
      output: {
        /** A message returned by MemberVault when available. */
        message: string | null;
        /** The raw MemberVault API response payload. */
        raw: unknown;
      };
    };
    /** List products or courses in the connected MemberVault account. */
    "membervault.list_courses": {
      input: Record<string, never>;
      output: {
        /** The MemberVault products or courses returned by the API. */
        courses: Array<{
          /** The MemberVault course identifier when available. */
          courseId?: number | string | null;
          /** The MemberVault product or course name when available. */
          courseName?: string | null;
          /** The raw course object returned by MemberVault. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The raw MemberVault API response payload. */
        raw: unknown;
      };
    };
    /** Remove a user's access to one MemberVault product without deleting the user account. */
    "membervault.remove_user": {
      input: {
        /**
         * The email address of the user whose product access should be removed.
         * @format email
         */
        email: string;
        /**
         * The MemberVault product or course ID to remove access from.
         * @exclusiveMinimum 0
         */
        courseId: number;
      };
      output: {
        /** A message returned by MemberVault when available. */
        message: string | null;
        /** The raw MemberVault API response payload. */
        raw: unknown;
      };
    };
  }
}
