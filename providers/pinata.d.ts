import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add a Pinata file to a Pinata group. */
    "pinata.add_file_to_group": {
      input: {
        /** The Pinata IPFS network to target. */
        network: "public" | "private";
        /**
         * The Pinata file or group identifier.
         * @minLength 1
         */
        groupId: string;
        /**
         * The Pinata file or group identifier.
         * @minLength 1
         */
        fileId: string;
      };
      output: {
        /** Whether the Pinata operation completed successfully. */
        ok: boolean;
        /** The raw object returned by the Pinata API. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a Pinata file group on the public or private IPFS network. */
    "pinata.create_group": {
      input: {
        /** The Pinata IPFS network to target. */
        network: "public" | "private";
        /**
         * The group name.
         * @minLength 1
         */
        name: string;
        /** Whether Pinata should make the group public. */
        isPublic?: boolean;
      };
      output: {
        /** A normalized Pinata group record. */
        group: {
          /** The Pinata group identifier. */
          id: string;
          /** The Pinata group name. */
          name: string;
          /** Whether Pinata reports the group as public. */
          isPublic: boolean | null;
          /** The creation timestamp returned by Pinata. */
          createdAt: string | null;
          /** The raw object returned by the Pinata API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Delete one Pinata file by ID from the public or private IPFS network. */
    "pinata.delete_file": {
      input: {
        /** The Pinata IPFS network to target. */
        network: "public" | "private";
        /**
         * The Pinata file or group identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether the Pinata operation completed successfully. */
        ok: boolean;
        /** The raw object returned by the Pinata API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Pinata file by ID from the public or private IPFS network. */
    "pinata.get_file": {
      input: {
        /** The Pinata IPFS network to target. */
        network: "public" | "private";
        /**
         * The Pinata file or group identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A normalized Pinata file record. */
        file: {
          /** The Pinata file identifier. */
          id: string;
          /** The Pinata file name. */
          name: string;
          /** The IPFS CID, or null when Pinata has not assigned one yet. */
          cid: string | null;
          /** The file size in bytes when Pinata returns it. */
          size: number | null;
          /** The number of files represented by this record. */
          numberOfFiles: number | null;
          /** The MIME type returned by Pinata. */
          mimeType: string | null;
          /** The group identifier assigned to the file, or null when absent. */
          groupId: string | null;
          /** The raw object returned by the Pinata API. */
          keyvalues: Record<string, unknown> | null;
          /** The creation timestamp returned by Pinata. */
          createdAt: string | null;
          /** The raw object returned by the Pinata API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get one Pinata group by ID from the public or private IPFS network. */
    "pinata.get_group": {
      input: {
        /** The Pinata IPFS network to target. */
        network: "public" | "private";
        /**
         * The Pinata file or group identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A normalized Pinata group record. */
        group: {
          /** The Pinata group identifier. */
          id: string;
          /** The Pinata group name. */
          name: string;
          /** Whether Pinata reports the group as public. */
          isPublic: boolean | null;
          /** The creation timestamp returned by Pinata. */
          createdAt: string | null;
          /** The raw object returned by the Pinata API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Pinata files from the public or private IPFS network with optional filters. */
    "pinata.list_files": {
      input: {
        /** The Pinata IPFS network to target. */
        network: "public" | "private";
        /** Filter files by name. */
        name?: string;
        /** Filter files by group ID. Use the string null to show files outside groups. */
        group?: string;
        /** Filter files by MIME type. */
        mimeType?: string;
        /** Filter files by CID. */
        cid?: string;
        /** Return only files that are still waiting for a CID. */
        cidPending?: boolean;
        /** Pinata key-value metadata. Values are sent as strings. */
        metadata?: Record<string, string>;
        /**
         * Limit the number of results returned by Pinata.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /** Sort results by creation date. */
        order?: "ASC" | "DESC";
        /** Pagination token returned by a previous Pinata response. */
        pageToken?: string;
      };
      output: {
        /** Files returned by Pinata. */
        files: Array<{
          /** The Pinata file identifier. */
          id: string;
          /** The Pinata file name. */
          name: string;
          /** The IPFS CID, or null when Pinata has not assigned one yet. */
          cid: string | null;
          /** The file size in bytes when Pinata returns it. */
          size: number | null;
          /** The number of files represented by this record. */
          numberOfFiles: number | null;
          /** The MIME type returned by Pinata. */
          mimeType: string | null;
          /** The group identifier assigned to the file, or null when absent. */
          groupId: string | null;
          /** The raw object returned by the Pinata API. */
          keyvalues: Record<string, unknown> | null;
          /** The creation timestamp returned by Pinata. */
          createdAt: string | null;
          /** The raw object returned by the Pinata API. */
          raw: Record<string, unknown>;
        }>;
        /** The token to fetch the next page, or null when there is none. */
        nextPageToken: string | null;
        /** The raw object returned by the Pinata API. */
        raw: Record<string, unknown>;
      };
    };
    /** List Pinata file groups from the public or private IPFS network. */
    "pinata.list_groups": {
      input: {
        /** The Pinata IPFS network to target. */
        network: "public" | "private";
        /** Filter groups by name. */
        name?: string;
        /** Filter groups by public visibility. */
        isPublic?: boolean;
        /**
         * Limit the number of groups returned by Pinata.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /** Pagination token returned by a previous Pinata response. */
        pageToken?: string;
      };
      output: {
        /** Groups returned by Pinata. */
        groups: Array<{
          /** The Pinata group identifier. */
          id: string;
          /** The Pinata group name. */
          name: string;
          /** Whether Pinata reports the group as public. */
          isPublic: boolean | null;
          /** The creation timestamp returned by Pinata. */
          createdAt: string | null;
          /** The raw object returned by the Pinata API. */
          raw: Record<string, unknown>;
        }>;
        /** The token to fetch the next page, or null when there is none. */
        nextPageToken: string | null;
        /** The raw object returned by the Pinata API. */
        raw: Record<string, unknown>;
      };
    };
    /** Ask Pinata to pin an existing public IPFS CID. */
    "pinata.pin_by_cid": {
      input: {
        /**
         * The IPFS CID.
         * @minLength 1
         */
        cid: string;
        /** Optional custom name for the pinned CID. */
        name?: string;
        /** Optional Pinata group ID to assign to the pinned CID. */
        groupId?: string;
        /** Pinata key-value metadata. Values are sent as strings. */
        keyvalues?: Record<string, string>;
        /** Optional IPFS host node IDs. */
        hostNodes?: Array<string>;
      };
      output: {
        /** A normalized Pinata pin-by-CID request record. */
        pinRequest: {
          /** The Pinata pin request identifier. */
          id: string;
          /** The IPFS CID queued for pinning. */
          cid: string;
          /** The optional name assigned to the pin request. */
          name: string | null;
          /** The current Pinata pin request status. */
          status: string | null;
          /** The raw object returned by the Pinata API. */
          keyvalues: Record<string, unknown> | null;
          /** The group identifier assigned to the pin request, or null when absent. */
          groupId: string | null;
          /** Host node IDs returned by Pinata. */
          hostNodes: Array<string>;
          /** The timestamp when Pinata queued the pin request. */
          dateQueued: string | null;
          /** The raw object returned by the Pinata API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Query Pinata pin-by-CID requests with optional filters and pagination. */
    "pinata.query_pin_requests": {
      input: {
        /** Sort results by queue time. */
        order?: "ASC" | "DESC";
        /** Filter pin requests by Pinata status. */
        status?: "prechecking" | "backfilled" | "retreiving" | "expired" | "searching" | "over_free_limit" | "over_max_size" | "invalid_object" | "bad_host_node";
        /** Filter pin requests by CID. */
        cid?: string;
        /**
         * Limit the number of results returned by Pinata.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /** Pagination token returned by a previous Pinata response. */
        pageToken?: string;
      };
      output: {
        /** Pin-by-CID requests returned by Pinata. */
        pinRequests: Array<{
          /** The Pinata pin request identifier. */
          id: string;
          /** The IPFS CID queued for pinning. */
          cid: string;
          /** The optional name assigned to the pin request. */
          name: string | null;
          /** The current Pinata pin request status. */
          status: string | null;
          /** The raw object returned by the Pinata API. */
          keyvalues: Record<string, unknown> | null;
          /** The group identifier assigned to the pin request, or null when absent. */
          groupId: string | null;
          /** Host node IDs returned by Pinata. */
          hostNodes: Array<string>;
          /** The timestamp when Pinata queued the pin request. */
          dateQueued: string | null;
          /** The raw object returned by the Pinata API. */
          raw: Record<string, unknown>;
        }>;
        /** The token to fetch the next page, or null when there is none. */
        nextPageToken: string | null;
        /** The raw object returned by the Pinata API. */
        raw: Record<string, unknown>;
      };
    };
    /** Remove a Pinata file from a Pinata group. */
    "pinata.remove_file_from_group": {
      input: {
        /** The Pinata IPFS network to target. */
        network: "public" | "private";
        /**
         * The Pinata file or group identifier.
         * @minLength 1
         */
        groupId: string;
        /**
         * The Pinata file or group identifier.
         * @minLength 1
         */
        fileId: string;
      };
      output: {
        /** Whether the Pinata operation completed successfully. */
        ok: boolean;
        /** The raw object returned by the Pinata API. */
        raw: Record<string, unknown>;
      };
    };
    /** Update a Pinata file name or key-value metadata. */
    "pinata.update_file": {
      input: {
        /** The Pinata IPFS network to target. */
        network: "public" | "private";
        /**
         * The Pinata file or group identifier.
         * @minLength 1
         */
        id: string;
        /** The updated file name. */
        name?: string;
        /** Pinata key-value metadata. Values are sent as strings. */
        keyvalues?: Record<string, string>;
      };
      output: {
        /** A normalized Pinata file record. */
        file: {
          /** The Pinata file identifier. */
          id: string;
          /** The Pinata file name. */
          name: string;
          /** The IPFS CID, or null when Pinata has not assigned one yet. */
          cid: string | null;
          /** The file size in bytes when Pinata returns it. */
          size: number | null;
          /** The number of files represented by this record. */
          numberOfFiles: number | null;
          /** The MIME type returned by Pinata. */
          mimeType: string | null;
          /** The group identifier assigned to the file, or null when absent. */
          groupId: string | null;
          /** The raw object returned by the Pinata API. */
          keyvalues: Record<string, unknown> | null;
          /** The creation timestamp returned by Pinata. */
          createdAt: string | null;
          /** The raw object returned by the Pinata API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Update a Pinata group name or public visibility setting. */
    "pinata.update_group": {
      input: {
        /** The Pinata IPFS network to target. */
        network: "public" | "private";
        /**
         * The Pinata file or group identifier.
         * @minLength 1
         */
        id: string;
        /** The updated group name. */
        name?: string;
        /** Whether Pinata should make the group public. */
        isPublic?: boolean;
      };
      output: {
        /** A normalized Pinata group record. */
        group: {
          /** The Pinata group identifier. */
          id: string;
          /** The Pinata group name. */
          name: string;
          /** Whether Pinata reports the group as public. */
          isPublic: boolean | null;
          /** The creation timestamp returned by Pinata. */
          createdAt: string | null;
          /** The raw object returned by the Pinata API. */
          raw: Record<string, unknown>;
        };
      };
    };
  }
}
