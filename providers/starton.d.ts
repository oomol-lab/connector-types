import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Upload JSON content to Starton IPFS and create a new pin. */
    "starton.create_json_pin": {
      input: {
        /**
         * The name recorded for the uploaded JSON file.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /** The JSON content that Starton should upload. */
        content: Record<string, unknown>;
        /** Optional metadata stored alongside the uploaded JSON file. */
        metadata?: Record<string, unknown>;
      };
      output: {
        /** A Starton IPFS pin resource. */
        pin: {
          /**
           * The unique Starton pin identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /**
           * The Starton project identifier that owns the pin.
           * @minLength 1
           * @pattern \S
           */
          projectId: string;
          /** The Starton pin status returned by the API. */
          status: "queued" | "pinning" | "pinned" | "failed" | "deleted";
          /**
           * The CID assigned to the pinned content.
           * @minLength 1
           * @pattern \S
           */
          cid?: string | null;
          /**
           * The display name recorded for the pin.
           * @minLength 1
           * @pattern \S
           */
          name?: string | null;
          /** The Starton pin type returned by the API. */
          type?: "directory" | "file" | null;
          /** The size in bytes of the pinned content. */
          size?: number | null;
          /**
           * When Starton created this pin.
           * @format date-time
           */
          createdAt?: string | null;
          /**
           * When Starton last updated this pin.
           * @format date-time
           */
          updatedAt?: string | null;
          /** The delegate nodes attached to this pin. */
          delegates?: Array<string> | null;
          /** The origin nodes attached to this pin. */
          origins?: Array<string> | null;
          /** Arbitrary metadata attached to the Starton pin. */
          metadata?: Record<string, unknown> | null;
          /** The nested directory content returned for a directory pin. */
          directoryContent?: Array<{
            /**
             * The CID of the nested directory entry.
             * @minLength 1
             * @pattern \S
             */
            cid: string;
            /**
             * The file or directory name of the nested entry.
             * @minLength 1
             * @pattern \S
             */
            name: string;
            /** The size in bytes of the nested directory entry. */
            size: number;
            /** The Starton directory entry type returned by the API. */
            type: "directory" | "file";
          }> | null;
        };
      };
    };
    /** Delete a Starton pin by pin identifier. */
    "starton.delete_pin": {
      input: {
        /**
         * The unique Starton pin identifier.
         * @minLength 1
         * @pattern \S
         */
        id: string;
      };
      output: {
        /** Whether Starton confirmed the pin deletion request. */
        deleted: boolean;
      };
    };
    /** Read one IPFS pin from Starton by pin identifier. */
    "starton.get_pin": {
      input: {
        /**
         * The unique Starton pin identifier.
         * @minLength 1
         * @pattern \S
         */
        id: string;
        /** Whether Starton should include nested directory content in the response. */
        includeDirectoryContent?: boolean;
      };
      output: {
        /** A Starton IPFS pin resource. */
        pin: {
          /**
           * The unique Starton pin identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /**
           * The Starton project identifier that owns the pin.
           * @minLength 1
           * @pattern \S
           */
          projectId: string;
          /** The Starton pin status returned by the API. */
          status: "queued" | "pinning" | "pinned" | "failed" | "deleted";
          /**
           * The CID assigned to the pinned content.
           * @minLength 1
           * @pattern \S
           */
          cid?: string | null;
          /**
           * The display name recorded for the pin.
           * @minLength 1
           * @pattern \S
           */
          name?: string | null;
          /** The Starton pin type returned by the API. */
          type?: "directory" | "file" | null;
          /** The size in bytes of the pinned content. */
          size?: number | null;
          /**
           * When Starton created this pin.
           * @format date-time
           */
          createdAt?: string | null;
          /**
           * When Starton last updated this pin.
           * @format date-time
           */
          updatedAt?: string | null;
          /** The delegate nodes attached to this pin. */
          delegates?: Array<string> | null;
          /** The origin nodes attached to this pin. */
          origins?: Array<string> | null;
          /** Arbitrary metadata attached to the Starton pin. */
          metadata?: Record<string, unknown> | null;
          /** The nested directory content returned for a directory pin. */
          directoryContent?: Array<{
            /**
             * The CID of the nested directory entry.
             * @minLength 1
             * @pattern \S
             */
            cid: string;
            /**
             * The file or directory name of the nested entry.
             * @minLength 1
             * @pattern \S
             */
            name: string;
            /** The size in bytes of the nested directory entry. */
            size: number;
            /** The Starton directory entry type returned by the API. */
            type: "directory" | "file";
          }> | null;
        };
      };
    };
    /** List IPFS pins from the current Starton project. */
    "starton.list_pins": {
      input: {
        /**
         * Filter pins by CID.
         * @minLength 1
         * @pattern \S
         */
        cid?: string;
        /** Whether Starton should include directory entries inside directory pin results. */
        includeDirectoryContent?: boolean;
        /**
         * The number of entities returned on each page.
         * @minimum 0
         */
        limit?: number;
        /**
         * Filter pins by pin name.
         * @minLength 1
         * @pattern \S
         */
        name?: string;
        /**
         * The zero-based page number returned by Starton.
         * @minimum 0
         */
        page?: number;
        /** The Starton pin status returned by the API. */
        status?: "queued" | "pinning" | "pinned" | "failed" | "deleted";
      };
      output: {
        /** The pins returned by Starton for this page. */
        pins: Array<{
          /**
           * The unique Starton pin identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /**
           * The Starton project identifier that owns the pin.
           * @minLength 1
           * @pattern \S
           */
          projectId: string;
          /** The Starton pin status returned by the API. */
          status: "queued" | "pinning" | "pinned" | "failed" | "deleted";
          /**
           * The CID assigned to the pinned content.
           * @minLength 1
           * @pattern \S
           */
          cid?: string | null;
          /**
           * The display name recorded for the pin.
           * @minLength 1
           * @pattern \S
           */
          name?: string | null;
          /** The Starton pin type returned by the API. */
          type?: "directory" | "file" | null;
          /** The size in bytes of the pinned content. */
          size?: number | null;
          /**
           * When Starton created this pin.
           * @format date-time
           */
          createdAt?: string | null;
          /**
           * When Starton last updated this pin.
           * @format date-time
           */
          updatedAt?: string | null;
          /** The delegate nodes attached to this pin. */
          delegates?: Array<string> | null;
          /** The origin nodes attached to this pin. */
          origins?: Array<string> | null;
          /** Arbitrary metadata attached to the Starton pin. */
          metadata?: Record<string, unknown> | null;
          /** The nested directory content returned for a directory pin. */
          directoryContent?: Array<{
            /**
             * The CID of the nested directory entry.
             * @minLength 1
             * @pattern \S
             */
            cid: string;
            /**
             * The file or directory name of the nested entry.
             * @minLength 1
             * @pattern \S
             */
            name: string;
            /** The size in bytes of the nested directory entry. */
            size: number;
            /** The Starton directory entry type returned by the API. */
            type: "directory" | "file";
          }> | null;
        }>;
        /** Pagination data returned by Starton list endpoints. */
        pagination: {
          /** The current result page returned by Starton. */
          currentPage: number;
          /** The number of items returned in this page. */
          itemCount: number;
          /** The configured page size used by Starton. */
          itemsPerPage: number;
          /** The total number of matching items across all pages. */
          totalItems: number;
          /** The total number of available pages. */
          totalPages: number;
        };
      };
    };
    /** Create a Starton pin for an existing IPFS CID. */
    "starton.pin_existing_file": {
      input: {
        /**
         * The existing IPFS CID that Starton should pin.
         * @minLength 1
         * @pattern \S
         */
        cid: string;
        /**
         * An optional display name recorded for the new pin.
         * @minLength 1
         * @pattern \S
         */
        name?: string;
        /** Optional metadata stored alongside the new pin. */
        metadata?: Record<string, unknown>;
      };
      output: {
        /** A Starton IPFS pin resource. */
        pin: {
          /**
           * The unique Starton pin identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /**
           * The Starton project identifier that owns the pin.
           * @minLength 1
           * @pattern \S
           */
          projectId: string;
          /** The Starton pin status returned by the API. */
          status: "queued" | "pinning" | "pinned" | "failed" | "deleted";
          /**
           * The CID assigned to the pinned content.
           * @minLength 1
           * @pattern \S
           */
          cid?: string | null;
          /**
           * The display name recorded for the pin.
           * @minLength 1
           * @pattern \S
           */
          name?: string | null;
          /** The Starton pin type returned by the API. */
          type?: "directory" | "file" | null;
          /** The size in bytes of the pinned content. */
          size?: number | null;
          /**
           * When Starton created this pin.
           * @format date-time
           */
          createdAt?: string | null;
          /**
           * When Starton last updated this pin.
           * @format date-time
           */
          updatedAt?: string | null;
          /** The delegate nodes attached to this pin. */
          delegates?: Array<string> | null;
          /** The origin nodes attached to this pin. */
          origins?: Array<string> | null;
          /** Arbitrary metadata attached to the Starton pin. */
          metadata?: Record<string, unknown> | null;
          /** The nested directory content returned for a directory pin. */
          directoryContent?: Array<{
            /**
             * The CID of the nested directory entry.
             * @minLength 1
             * @pattern \S
             */
            cid: string;
            /**
             * The file or directory name of the nested entry.
             * @minLength 1
             * @pattern \S
             */
            name: string;
            /** The size in bytes of the nested directory entry. */
            size: number;
            /** The Starton directory entry type returned by the API. */
            type: "directory" | "file";
          }> | null;
        };
      };
    };
  }
}
