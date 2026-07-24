import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Wallet pass from a PassSlot template using JSON placeholder values and return its installation URL. */
    "passslot.create_pass_from_template": {
      input: {
        /**
         * The numeric PassSlot template identifier.
         * @exclusiveMinimum 0
         */
        templateId: number;
        /** The template placeholder names and JSON values to apply to the Wallet pass. */
        values?: Record<string, unknown>;
      };
      output: {
        /** A Wallet pass created by PassSlot. */
        pass: {
          /**
           * The unique serial number of the Wallet pass.
           * @minLength 1
           * @pattern \S
           */
          serialNumber: string;
          /**
           * The Apple Wallet pass type identifier, such as pass.example.membership.
           * @minLength 1
           * @pattern \S
           */
          passTypeIdentifier: string;
          /**
           * The short distribution URL for installing the Wallet pass.
           * @format uri
           */
          url: string;
          [key: string]: unknown;
        };
      };
    };
    /** Permanently delete a PassSlot Wallet pass. */
    "passslot.delete_pass": {
      input: {
        /**
         * The Apple Wallet pass type identifier, such as pass.example.membership.
         * @minLength 1
         * @pattern \S
         */
        passTypeIdentifier: string;
        /**
         * The unique serial number of the Wallet pass.
         * @minLength 1
         * @pattern \S
         */
        serialNumber: string;
      };
      output: {
        /** Whether the Wallet pass was deleted. */
        deleted: true;
        /**
         * The Apple Wallet pass type identifier, such as pass.example.membership.
         * @minLength 1
         * @pattern \S
         */
        passTypeIdentifier: string;
        /**
         * The unique serial number of the Wallet pass.
         * @minLength 1
         * @pattern \S
         */
        serialNumber: string;
      };
    };
    /** Get the short installation URL for an existing PassSlot Wallet pass. */
    "passslot.get_pass_url": {
      input: {
        /**
         * The Apple Wallet pass type identifier, such as pass.example.membership.
         * @minLength 1
         * @pattern \S
         */
        passTypeIdentifier: string;
        /**
         * The unique serial number of the Wallet pass.
         * @minLength 1
         * @pattern \S
         */
        serialNumber: string;
      };
      output: {
        /**
         * The short distribution URL for installing the Wallet pass.
         * @format uri
         */
        url: string;
      };
    };
    /** Get the current placeholder values of an existing PassSlot Wallet pass. */
    "passslot.get_pass_values": {
      input: {
        /**
         * The Apple Wallet pass type identifier, such as pass.example.membership.
         * @minLength 1
         * @pattern \S
         */
        passTypeIdentifier: string;
        /**
         * The unique serial number of the Wallet pass.
         * @minLength 1
         * @pattern \S
         */
        serialNumber: string;
      };
      output: {
        /** The template placeholder names and JSON values to apply to the Wallet pass. */
        values: Record<string, unknown>;
      };
    };
    /** List Apple Wallet pass type identifiers available in PassSlot. */
    "passslot.list_pass_types": {
      input: Record<string, never>;
      output: {
        /** The available pass type records. */
        passTypes: Array<{
          /**
           * The Apple Wallet pass type identifier, such as pass.example.membership.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /**
           * The organization name from the pass certificate.
           * @minLength 1
           * @pattern \S
           */
          organizationName: string;
          /**
           * The Apple Developer team identifier.
           * @minLength 1
           * @pattern \S
           */
          teamIdentifier: string;
          /** The ISO 8601 expiration timestamp of the pass certificate. */
          certificateExpirationDate: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List PassSlot Wallet passes, optionally limited to one pass type identifier. */
    "passslot.list_passes": {
      input: {
        /**
         * The Apple Wallet pass type identifier, such as pass.example.membership.
         * @minLength 1
         * @pattern \S
         */
        passTypeIdentifier?: string;
      };
      output: {
        /** The matching Wallet pass references. */
        passes: Array<{
          /**
           * The unique serial number of the Wallet pass.
           * @minLength 1
           * @pattern \S
           */
          serialNumber: string;
          /**
           * The Apple Wallet pass type identifier, such as pass.example.membership.
           * @minLength 1
           * @pattern \S
           */
          passType: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List PassSlot pass templates available to the connected App Key. */
    "passslot.list_templates": {
      input: Record<string, never>;
      output: {
        /** The pass templates available to the App Key. */
        templates: Array<{
          /**
           * The numeric PassSlot template identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The display name of the pass template.
           * @minLength 1
           * @pattern \S
           */
          name: string;
          /**
           * The Apple Wallet pass format version.
           * @exclusiveMinimum 0
           */
          formatVersion: number;
          /**
           * The Apple Wallet pass type identifier, such as pass.example.membership.
           * @minLength 1
           * @pattern \S
           */
          passType: string;
          /** The Apple Wallet template description and field layout. */
          description: Record<string, unknown>;
          /** The placeholder names accepted when creating a pass from this template. */
          placeholder: Array<string>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Update the placeholder values of an existing PassSlot Wallet pass. */
    "passslot.update_pass_values": {
      input: {
        /**
         * The Apple Wallet pass type identifier, such as pass.example.membership.
         * @minLength 1
         * @pattern \S
         */
        passTypeIdentifier: string;
        /**
         * The unique serial number of the Wallet pass.
         * @minLength 1
         * @pattern \S
         */
        serialNumber: string;
        /** The template placeholder names and JSON values to apply to the Wallet pass. */
        values: Record<string, unknown>;
      };
      output: {
        /** The template placeholder names and JSON values to apply to the Wallet pass. */
        values: Record<string, unknown>;
      };
    };
  }
}
