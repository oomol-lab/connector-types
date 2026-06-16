import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a branch in a Neon project. */
    "neon.create_branch": {
      input: {
        /**
         * The Neon project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The Neon branch name.
         * @minLength 1
         * @maxLength 256
         */
        name: string;
        /**
         * Parent branch ID used as the source for the new branch.
         * @minLength 1
         */
        parentId?: string;
        /**
         * Log Sequence Number on the parent branch used to create the new branch.
         * @minLength 1
         */
        parentLsn?: string;
        /**
         * Point-in-time timestamp on the parent branch used to create the new branch.
         * @minLength 1
         */
        parentTimestamp?: string;
        /** Whether the branch should be protected. */
        protected?: boolean;
        /** How the new branch should be initialized from the parent branch. */
        initSource?: "schema-only" | "parent-data";
      };
      output: {
        /** Branch snapshot returned by Neon. */
        branch: {
          /**
           * The Neon branch ID.
           * @minLength 1
           */
          id: string;
          /**
           * Project ID that owns the branch.
           * @minLength 1
           */
          projectId: string;
          /** Parent branch ID, when the branch has one. */
          parentId?: string;
          /** Parent Log Sequence Number, when present. */
          parentLsn?: string;
          /** Parent point-in-time timestamp used for the branch, when present. */
          parentTimestamp?: string;
          /** Branch name. */
          name: string;
          /** Current state reported by Neon for the branch. */
          currentState: string;
          /** Pending state reported by Neon for the branch, when present. */
          pendingState?: string;
          /** Timestamp when the current branch state began. */
          stateChangedAt: string;
          /** Logical size of the branch in bytes, when present. */
          logicalSize?: number;
          /** Source that created the branch. */
          creationSource: string;
          /** Whether the branch is the project's default branch. */
          default: boolean;
          /** Whether the branch is protected. */
          protected: boolean;
          /** Deprecated CPU seconds metric reported by Neon, when present. */
          cpuUsedSec?: number;
          /** Observed compute time in seconds for the branch. */
          computeTimeSeconds: number;
          /** Observed active time in seconds for the branch. */
          activeTimeSeconds: number;
          /** Write bytes measured for the branch. */
          writtenDataBytes: number;
          /** Data transfer bytes measured for the branch. */
          dataTransferBytes: number;
          /** Timestamp when the branch was created. */
          createdAt: string;
          /** Timestamp when the branch was last updated. */
          updatedAt: string;
          /** Initialization source used to create the branch, when present. */
          initSource?: string;
          /** Expiration timestamp for the branch, when present. */
          expiresAt?: string;
          /** Timestamp when the branch was last reset, when present. */
          lastResetAt?: string;
          /** Original time-to-live interval for the branch, when present. */
          ttlIntervalSeconds?: number;
          /** User or token summary that created the branch, when present. */
          createdBy?: Record<string, unknown>;
          /** Restore status reported by Neon, when present. */
          restoreStatus?: string;
          /** Snapshot ID used as the restore source, when present. */
          restoredFrom?: string;
          /** Branch ID replaced by this restore result, when present. */
          restoredAs?: string;
          /** Actions currently restricted for this branch, when present. */
          restrictedActions?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        /** Operations triggered by the branch mutation request. */
        operations: Array<{
          /**
           * The Neon operation ID.
           * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
           * @format uuid
           */
          id: string;
          /**
           * Project ID that owns the operation.
           * @minLength 1
           */
          projectId: string;
          /** Branch ID associated with the operation, when present. */
          branchId?: string;
          /** Endpoint ID associated with the operation, when present. */
          endpointId?: string;
          /** Action performed by the Neon operation. */
          action: string;
          /** Current status of the Neon operation. */
          status: string;
          /** Error message reported for the operation, when present. */
          error?: string;
          /** Number of failures recorded for the operation. */
          failuresCount: number;
          /** Timestamp when the operation will retry, when present. */
          retryAt?: string;
          /** Timestamp when the operation was created. */
          createdAt: string;
          /** Timestamp when the operation was last updated. */
          updatedAt: string;
          /** Total duration of the operation in milliseconds. */
          totalDurationMs: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Create a database in a Neon branch. */
    "neon.create_database": {
      input: {
        /**
         * The Neon project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The Neon branch ID.
         * @minLength 1
         */
        branchId: string;
        /**
         * Name of the database to create.
         * @minLength 1
         */
        name: string;
        /**
         * Role name that should own the new database.
         * @minLength 1
         */
        ownerName: string;
      };
      output: {
        /** Database snapshot returned by Neon. */
        database: {
          /** Unique identifier of the database. */
          id: number;
          /**
           * Branch ID that owns the database.
           * @minLength 1
           */
          branchId: string;
          /** Database name. */
          name: string;
          /** Role name that owns the database. */
          ownerName: string;
          /** Timestamp when the database was created. */
          createdAt: string;
          /** Timestamp when the database was last updated. */
          updatedAt: string;
          [key: string]: unknown;
        };
        /** Operations triggered by the database mutation request. */
        operations: Array<{
          /**
           * The Neon operation ID.
           * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
           * @format uuid
           */
          id: string;
          /**
           * Project ID that owns the operation.
           * @minLength 1
           */
          projectId: string;
          /** Branch ID associated with the operation, when present. */
          branchId?: string;
          /** Endpoint ID associated with the operation, when present. */
          endpointId?: string;
          /** Action performed by the Neon operation. */
          action: string;
          /** Current status of the Neon operation. */
          status: string;
          /** Error message reported for the operation, when present. */
          error?: string;
          /** Number of failures recorded for the operation. */
          failuresCount: number;
          /** Timestamp when the operation will retry, when present. */
          retryAt?: string;
          /** Timestamp when the operation was created. */
          createdAt: string;
          /** Timestamp when the operation was last updated. */
          updatedAt: string;
          /** Total duration of the operation in milliseconds. */
          totalDurationMs: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Create a Neon project with an optional default branch configuration. */
    "neon.create_project": {
      input: {
        /**
         * The Neon project name.
         * @minLength 1
         * @maxLength 256
         */
        name: string;
        /**
         * Organization ID used to scope project listing or creation.
         * @minLength 1
         */
        orgId?: string;
        /**
         * Region where Neon should create the project.
         * @minLength 1
         */
        regionId?: string;
        /**
         * Postgres major version to provision for the project.
         * @minimum 14
         * @maximum 18
         */
        pgVersion?: number;
        /**
         * Default branch name to create with the project.
         * @minLength 1
         * @maxLength 256
         */
        branchName?: string;
        /**
         * Default database name to create with the project.
         * @minLength 1
         */
        databaseName?: string;
        /**
         * Default role name to create with the project.
         * @minLength 1
         */
        roleName?: string;
        /** Whether Neon should store role passwords for the project. */
        storePasswords?: boolean;
        /**
         * Shared history retention period in seconds.
         * @minimum 0
         * @maximum 2592000
         */
        historyRetentionSeconds?: number;
      };
      output: {
        /** Neon project. */
        project: {
          /**
           * The Neon project ID.
           * @minLength 1
           */
          id: string;
          /** Cloud platform identifier for the project. */
          platformId: string;
          /** Cloud region identifier for the project. */
          regionId: string;
          /** Project name. */
          name: string;
          /** Neon provisioner used by the project. */
          provisioner: string;
          /** Postgres major version configured for the project. */
          pgVersion: number;
          /** Proxy host used to connect to the project. */
          proxyHost: string;
          /** Logical size limit per branch in MiB. */
          branchLogicalSizeLimit: number;
          /** Logical size limit per branch in bytes. */
          branchLogicalSizeLimitBytes: number;
          /** Whether role passwords are stored for the project. */
          storePasswords: boolean;
          /** Source that created the project. */
          creationSource: string;
          /** Shared history retention period in seconds. */
          historyRetentionSeconds: number;
          /** Timestamp when the project was created. */
          createdAt: string;
          /** Timestamp when the project was last updated. */
          updatedAt: string;
          /** User or organization owner ID for the project. */
          ownerId: string;
          /** Organization ID that owns the project, when present. */
          orgId?: string;
          /** Organization name that owns the project, when present. */
          orgName?: string;
          /** Observed active time in seconds for list responses, when present. */
          activeTime?: number;
          /** Observed active time in seconds for detailed responses, when present. */
          activeTimeSeconds?: number;
          /** Observed compute time in seconds for the project, when present. */
          computeTimeSeconds?: number;
          /** Egress bytes measured for the project, when present. */
          dataTransferBytes?: number;
          /** Write-ahead log bytes measured for the project, when present. */
          writtenDataBytes?: number;
          /** Accumulated storage consumption in bytes-hour, when present. */
          dataStorageBytesHour?: number;
          /** Timestamp when the current consumption period started, when present. */
          consumptionPeriodStart?: string;
          /** Timestamp when the current consumption period ends, when present. */
          consumptionPeriodEnd?: string;
          /** Most recent timestamp when any endpoint in the project was active. */
          computeLastActiveAt?: string;
          /** Timestamp when the project was deleted, when present. */
          deletedAt?: string;
          /** Timestamp until which the deleted project remains recoverable, when present. */
          recoverableUntil?: string;
          /** Default endpoint settings returned by Neon, when present. */
          defaultEndpointSettings?: Record<string, unknown>;
          /** Project settings returned by Neon, when present. */
          settings?: Record<string, unknown>;
          /** Owner summary returned by Neon, when present. */
          owner?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Default branch created together with the project, or null when Neon omits it. */
        branch: {
          /**
           * The Neon branch ID.
           * @minLength 1
           */
          id: string;
          /**
           * Project ID that owns the branch.
           * @minLength 1
           */
          projectId: string;
          /** Parent branch ID, when the branch has one. */
          parentId?: string;
          /** Parent Log Sequence Number, when present. */
          parentLsn?: string;
          /** Parent point-in-time timestamp used for the branch, when present. */
          parentTimestamp?: string;
          /** Branch name. */
          name: string;
          /** Current state reported by Neon for the branch. */
          currentState: string;
          /** Pending state reported by Neon for the branch, when present. */
          pendingState?: string;
          /** Timestamp when the current branch state began. */
          stateChangedAt: string;
          /** Logical size of the branch in bytes, when present. */
          logicalSize?: number;
          /** Source that created the branch. */
          creationSource: string;
          /** Whether the branch is the project's default branch. */
          default: boolean;
          /** Whether the branch is protected. */
          protected: boolean;
          /** Deprecated CPU seconds metric reported by Neon, when present. */
          cpuUsedSec?: number;
          /** Observed compute time in seconds for the branch. */
          computeTimeSeconds: number;
          /** Observed active time in seconds for the branch. */
          activeTimeSeconds: number;
          /** Write bytes measured for the branch. */
          writtenDataBytes: number;
          /** Data transfer bytes measured for the branch. */
          dataTransferBytes: number;
          /** Timestamp when the branch was created. */
          createdAt: string;
          /** Timestamp when the branch was last updated. */
          updatedAt: string;
          /** Initialization source used to create the branch, when present. */
          initSource?: string;
          /** Expiration timestamp for the branch, when present. */
          expiresAt?: string;
          /** Timestamp when the branch was last reset, when present. */
          lastResetAt?: string;
          /** Original time-to-live interval for the branch, when present. */
          ttlIntervalSeconds?: number;
          /** User or token summary that created the branch, when present. */
          createdBy?: Record<string, unknown>;
          /** Restore status reported by Neon, when present. */
          restoreStatus?: string;
          /** Snapshot ID used as the restore source, when present. */
          restoredFrom?: string;
          /** Branch ID replaced by this restore result, when present. */
          restoredAs?: string;
          /** Actions currently restricted for this branch, when present. */
          restrictedActions?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        } | null;
        /** Databases Neon returned as part of the project creation response. */
        databases: Array<{
          /** Unique identifier of the database. */
          id: number;
          /**
           * Branch ID that owns the database.
           * @minLength 1
           */
          branchId: string;
          /** Database name. */
          name: string;
          /** Role name that owns the database. */
          ownerName: string;
          /** Timestamp when the database was created. */
          createdAt: string;
          /** Timestamp when the database was last updated. */
          updatedAt: string;
          [key: string]: unknown;
        }>;
        /** Operations triggered by the project creation request. */
        operations: Array<{
          /**
           * The Neon operation ID.
           * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
           * @format uuid
           */
          id: string;
          /**
           * Project ID that owns the operation.
           * @minLength 1
           */
          projectId: string;
          /** Branch ID associated with the operation, when present. */
          branchId?: string;
          /** Endpoint ID associated with the operation, when present. */
          endpointId?: string;
          /** Action performed by the Neon operation. */
          action: string;
          /** Current status of the Neon operation. */
          status: string;
          /** Error message reported for the operation, when present. */
          error?: string;
          /** Number of failures recorded for the operation. */
          failuresCount: number;
          /** Timestamp when the operation will retry, when present. */
          retryAt?: string;
          /** Timestamp when the operation was created. */
          createdAt: string;
          /** Timestamp when the operation was last updated. */
          updatedAt: string;
          /** Total duration of the operation in milliseconds. */
          totalDurationMs: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Delete a branch from a Neon project. */
    "neon.delete_branch": {
      input: {
        /**
         * The Neon project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The Neon branch ID.
         * @minLength 1
         */
        branchId: string;
      };
      output: {
        /** Whether the delete branch request was accepted. */
        deleted: true;
        /** Deleted branch snapshot, or null when the branch no longer existed. */
        branch: {
          /**
           * The Neon branch ID.
           * @minLength 1
           */
          id: string;
          /**
           * Project ID that owns the branch.
           * @minLength 1
           */
          projectId: string;
          /** Parent branch ID, when the branch has one. */
          parentId?: string;
          /** Parent Log Sequence Number, when present. */
          parentLsn?: string;
          /** Parent point-in-time timestamp used for the branch, when present. */
          parentTimestamp?: string;
          /** Branch name. */
          name: string;
          /** Current state reported by Neon for the branch. */
          currentState: string;
          /** Pending state reported by Neon for the branch, when present. */
          pendingState?: string;
          /** Timestamp when the current branch state began. */
          stateChangedAt: string;
          /** Logical size of the branch in bytes, when present. */
          logicalSize?: number;
          /** Source that created the branch. */
          creationSource: string;
          /** Whether the branch is the project's default branch. */
          default: boolean;
          /** Whether the branch is protected. */
          protected: boolean;
          /** Deprecated CPU seconds metric reported by Neon, when present. */
          cpuUsedSec?: number;
          /** Observed compute time in seconds for the branch. */
          computeTimeSeconds: number;
          /** Observed active time in seconds for the branch. */
          activeTimeSeconds: number;
          /** Write bytes measured for the branch. */
          writtenDataBytes: number;
          /** Data transfer bytes measured for the branch. */
          dataTransferBytes: number;
          /** Timestamp when the branch was created. */
          createdAt: string;
          /** Timestamp when the branch was last updated. */
          updatedAt: string;
          /** Initialization source used to create the branch, when present. */
          initSource?: string;
          /** Expiration timestamp for the branch, when present. */
          expiresAt?: string;
          /** Timestamp when the branch was last reset, when present. */
          lastResetAt?: string;
          /** Original time-to-live interval for the branch, when present. */
          ttlIntervalSeconds?: number;
          /** User or token summary that created the branch, when present. */
          createdBy?: Record<string, unknown>;
          /** Restore status reported by Neon, when present. */
          restoreStatus?: string;
          /** Snapshot ID used as the restore source, when present. */
          restoredFrom?: string;
          /** Branch ID replaced by this restore result, when present. */
          restoredAs?: string;
          /** Actions currently restricted for this branch, when present. */
          restrictedActions?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        } | null;
        /** Operations triggered by the branch deletion request. */
        operations: Array<{
          /**
           * The Neon operation ID.
           * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
           * @format uuid
           */
          id: string;
          /**
           * Project ID that owns the operation.
           * @minLength 1
           */
          projectId: string;
          /** Branch ID associated with the operation, when present. */
          branchId?: string;
          /** Endpoint ID associated with the operation, when present. */
          endpointId?: string;
          /** Action performed by the Neon operation. */
          action: string;
          /** Current status of the Neon operation. */
          status: string;
          /** Error message reported for the operation, when present. */
          error?: string;
          /** Number of failures recorded for the operation. */
          failuresCount: number;
          /** Timestamp when the operation will retry, when present. */
          retryAt?: string;
          /** Timestamp when the operation was created. */
          createdAt: string;
          /** Timestamp when the operation was last updated. */
          updatedAt: string;
          /** Total duration of the operation in milliseconds. */
          totalDurationMs: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Delete a database from a Neon branch. */
    "neon.delete_database": {
      input: {
        /**
         * The Neon project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The Neon branch ID.
         * @minLength 1
         */
        branchId: string;
        /**
         * The Neon database name.
         * @minLength 1
         */
        databaseName: string;
      };
      output: {
        /** Whether the delete database request was accepted. */
        deleted: true;
        /** Deleted database snapshot, or null when the database no longer existed. */
        database: {
          /** Unique identifier of the database. */
          id: number;
          /**
           * Branch ID that owns the database.
           * @minLength 1
           */
          branchId: string;
          /** Database name. */
          name: string;
          /** Role name that owns the database. */
          ownerName: string;
          /** Timestamp when the database was created. */
          createdAt: string;
          /** Timestamp when the database was last updated. */
          updatedAt: string;
          [key: string]: unknown;
        } | null;
        /** Operations triggered by the database deletion request. */
        operations: Array<{
          /**
           * The Neon operation ID.
           * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
           * @format uuid
           */
          id: string;
          /**
           * Project ID that owns the operation.
           * @minLength 1
           */
          projectId: string;
          /** Branch ID associated with the operation, when present. */
          branchId?: string;
          /** Endpoint ID associated with the operation, when present. */
          endpointId?: string;
          /** Action performed by the Neon operation. */
          action: string;
          /** Current status of the Neon operation. */
          status: string;
          /** Error message reported for the operation, when present. */
          error?: string;
          /** Number of failures recorded for the operation. */
          failuresCount: number;
          /** Timestamp when the operation will retry, when present. */
          retryAt?: string;
          /** Timestamp when the operation was created. */
          createdAt: string;
          /** Timestamp when the operation was last updated. */
          updatedAt: string;
          /** Total duration of the operation in milliseconds. */
          totalDurationMs: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Delete a Neon project. */
    "neon.delete_project": {
      input: {
        /**
         * The Neon project ID.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** Whether the delete project request was accepted. */
        deleted: true;
        /** Deleted project snapshot returned by Neon. */
        project: {
          /**
           * The Neon project ID.
           * @minLength 1
           */
          id: string;
          /** Cloud platform identifier for the project. */
          platformId: string;
          /** Cloud region identifier for the project. */
          regionId: string;
          /** Project name. */
          name: string;
          /** Neon provisioner used by the project. */
          provisioner: string;
          /** Postgres major version configured for the project. */
          pgVersion: number;
          /** Proxy host used to connect to the project. */
          proxyHost: string;
          /** Logical size limit per branch in MiB. */
          branchLogicalSizeLimit: number;
          /** Logical size limit per branch in bytes. */
          branchLogicalSizeLimitBytes: number;
          /** Whether role passwords are stored for the project. */
          storePasswords: boolean;
          /** Source that created the project. */
          creationSource: string;
          /** Shared history retention period in seconds. */
          historyRetentionSeconds: number;
          /** Timestamp when the project was created. */
          createdAt: string;
          /** Timestamp when the project was last updated. */
          updatedAt: string;
          /** User or organization owner ID for the project. */
          ownerId: string;
          /** Organization ID that owns the project, when present. */
          orgId?: string;
          /** Organization name that owns the project, when present. */
          orgName?: string;
          /** Observed active time in seconds for list responses, when present. */
          activeTime?: number;
          /** Observed active time in seconds for detailed responses, when present. */
          activeTimeSeconds?: number;
          /** Observed compute time in seconds for the project, when present. */
          computeTimeSeconds?: number;
          /** Egress bytes measured for the project, when present. */
          dataTransferBytes?: number;
          /** Write-ahead log bytes measured for the project, when present. */
          writtenDataBytes?: number;
          /** Accumulated storage consumption in bytes-hour, when present. */
          dataStorageBytesHour?: number;
          /** Timestamp when the current consumption period started, when present. */
          consumptionPeriodStart?: string;
          /** Timestamp when the current consumption period ends, when present. */
          consumptionPeriodEnd?: string;
          /** Most recent timestamp when any endpoint in the project was active. */
          computeLastActiveAt?: string;
          /** Timestamp when the project was deleted, when present. */
          deletedAt?: string;
          /** Timestamp until which the deleted project remains recoverable, when present. */
          recoverableUntil?: string;
          /** Default endpoint settings returned by Neon, when present. */
          defaultEndpointSettings?: Record<string, unknown>;
          /** Project settings returned by Neon, when present. */
          settings?: Record<string, unknown>;
          /** Owner summary returned by Neon, when present. */
          owner?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get detailed metadata for a Neon branch. */
    "neon.get_branch": {
      input: {
        /**
         * The Neon project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The Neon branch ID.
         * @minLength 1
         */
        branchId: string;
      };
      output: {
        /** Neon branch. */
        branch: {
          /**
           * The Neon branch ID.
           * @minLength 1
           */
          id: string;
          /**
           * Project ID that owns the branch.
           * @minLength 1
           */
          projectId: string;
          /** Parent branch ID, when the branch has one. */
          parentId?: string;
          /** Parent Log Sequence Number, when present. */
          parentLsn?: string;
          /** Parent point-in-time timestamp used for the branch, when present. */
          parentTimestamp?: string;
          /** Branch name. */
          name: string;
          /** Current state reported by Neon for the branch. */
          currentState: string;
          /** Pending state reported by Neon for the branch, when present. */
          pendingState?: string;
          /** Timestamp when the current branch state began. */
          stateChangedAt: string;
          /** Logical size of the branch in bytes, when present. */
          logicalSize?: number;
          /** Source that created the branch. */
          creationSource: string;
          /** Whether the branch is the project's default branch. */
          default: boolean;
          /** Whether the branch is protected. */
          protected: boolean;
          /** Deprecated CPU seconds metric reported by Neon, when present. */
          cpuUsedSec?: number;
          /** Observed compute time in seconds for the branch. */
          computeTimeSeconds: number;
          /** Observed active time in seconds for the branch. */
          activeTimeSeconds: number;
          /** Write bytes measured for the branch. */
          writtenDataBytes: number;
          /** Data transfer bytes measured for the branch. */
          dataTransferBytes: number;
          /** Timestamp when the branch was created. */
          createdAt: string;
          /** Timestamp when the branch was last updated. */
          updatedAt: string;
          /** Initialization source used to create the branch, when present. */
          initSource?: string;
          /** Expiration timestamp for the branch, when present. */
          expiresAt?: string;
          /** Timestamp when the branch was last reset, when present. */
          lastResetAt?: string;
          /** Original time-to-live interval for the branch, when present. */
          ttlIntervalSeconds?: number;
          /** User or token summary that created the branch, when present. */
          createdBy?: Record<string, unknown>;
          /** Restore status reported by Neon, when present. */
          restoreStatus?: string;
          /** Snapshot ID used as the restore source, when present. */
          restoredFrom?: string;
          /** Branch ID replaced by this restore result, when present. */
          restoredAs?: string;
          /** Actions currently restricted for this branch, when present. */
          restrictedActions?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        /** Annotation attached to the branch, or null when Neon omits it. */
        annotation: {
          /** Annotated Neon object. */
          object: {
            /** Annotation object type. */
            type: string;
            /** Identifier of the annotated object. */
            id: string;
            [key: string]: unknown;
          };
          /** Annotation values attached to the Neon object. */
          value: Record<string, unknown>;
          /** Timestamp when the annotation was created. */
          createdAt?: string;
          /** Timestamp when the annotation was last updated. */
          updatedAt?: string;
          [key: string]: unknown;
        } | null;
      };
    };
    /** Get the currently authenticated Neon user profile. */
    "neon.get_current_user": {
      input: Record<string, never>;
      output: {
        /** Unique identifier of the authenticated Neon user. */
        id: string;
        /**
         * Email address of the authenticated Neon user.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        email: string;
        /** Deprecated login identifier reported by Neon. */
        login?: string;
        /** Given name of the authenticated Neon user. */
        name: string;
        /** Family name of the authenticated Neon user. */
        lastName: string;
        /** Avatar URL of the authenticated Neon user. */
        image: string;
        /** Active endpoint seconds available to the user plan. */
        activeSecondsLimit: number;
        /** Project limit of the authenticated Neon user. */
        projectsLimit: number;
        /** Branch limit of the authenticated Neon user. */
        branchesLimit: number;
        /** Maximum autoscaling limit in Compute Units for the user plan. */
        maxAutoscalingLimit: number;
        /** Compute seconds limit for the user plan, when present. */
        computeSecondsLimit?: number;
        /** Current plan name for the authenticated Neon user. */
        plan: string;
        /** Authentication accounts attached to the Neon user. */
        authAccounts: Array<Record<string, unknown>>;
        /** Billing account summary returned by Neon, when present. */
        billingAccount?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get detailed metadata for a Neon database. */
    "neon.get_database": {
      input: {
        /**
         * The Neon project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The Neon branch ID.
         * @minLength 1
         */
        branchId: string;
        /**
         * The Neon database name.
         * @minLength 1
         */
        databaseName: string;
      };
      output: {
        /** Neon database. */
        database: {
          /** Unique identifier of the database. */
          id: number;
          /**
           * Branch ID that owns the database.
           * @minLength 1
           */
          branchId: string;
          /** Database name. */
          name: string;
          /** Role name that owns the database. */
          ownerName: string;
          /** Timestamp when the database was created. */
          createdAt: string;
          /** Timestamp when the database was last updated. */
          updatedAt: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get detailed metadata for a Neon operation. */
    "neon.get_operation": {
      input: {
        /**
         * The Neon project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The Neon operation ID.
         * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
         * @format uuid
         */
        operationId: string;
      };
      output: {
        /** Neon operation. */
        operation: {
          /**
           * The Neon operation ID.
           * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
           * @format uuid
           */
          id: string;
          /**
           * Project ID that owns the operation.
           * @minLength 1
           */
          projectId: string;
          /** Branch ID associated with the operation, when present. */
          branchId?: string;
          /** Endpoint ID associated with the operation, when present. */
          endpointId?: string;
          /** Action performed by the Neon operation. */
          action: string;
          /** Current status of the Neon operation. */
          status: string;
          /** Error message reported for the operation, when present. */
          error?: string;
          /** Number of failures recorded for the operation. */
          failuresCount: number;
          /** Timestamp when the operation will retry, when present. */
          retryAt?: string;
          /** Timestamp when the operation was created. */
          createdAt: string;
          /** Timestamp when the operation was last updated. */
          updatedAt: string;
          /** Total duration of the operation in milliseconds. */
          totalDurationMs: number;
          [key: string]: unknown;
        };
      };
    };
    /** Get detailed metadata for a Neon project. */
    "neon.get_project": {
      input: {
        /**
         * The Neon project ID.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** Neon project. */
        project: {
          /**
           * The Neon project ID.
           * @minLength 1
           */
          id: string;
          /** Cloud platform identifier for the project. */
          platformId: string;
          /** Cloud region identifier for the project. */
          regionId: string;
          /** Project name. */
          name: string;
          /** Neon provisioner used by the project. */
          provisioner: string;
          /** Postgres major version configured for the project. */
          pgVersion: number;
          /** Proxy host used to connect to the project. */
          proxyHost: string;
          /** Logical size limit per branch in MiB. */
          branchLogicalSizeLimit: number;
          /** Logical size limit per branch in bytes. */
          branchLogicalSizeLimitBytes: number;
          /** Whether role passwords are stored for the project. */
          storePasswords: boolean;
          /** Source that created the project. */
          creationSource: string;
          /** Shared history retention period in seconds. */
          historyRetentionSeconds: number;
          /** Timestamp when the project was created. */
          createdAt: string;
          /** Timestamp when the project was last updated. */
          updatedAt: string;
          /** User or organization owner ID for the project. */
          ownerId: string;
          /** Organization ID that owns the project, when present. */
          orgId?: string;
          /** Organization name that owns the project, when present. */
          orgName?: string;
          /** Observed active time in seconds for list responses, when present. */
          activeTime?: number;
          /** Observed active time in seconds for detailed responses, when present. */
          activeTimeSeconds?: number;
          /** Observed compute time in seconds for the project, when present. */
          computeTimeSeconds?: number;
          /** Egress bytes measured for the project, when present. */
          dataTransferBytes?: number;
          /** Write-ahead log bytes measured for the project, when present. */
          writtenDataBytes?: number;
          /** Accumulated storage consumption in bytes-hour, when present. */
          dataStorageBytesHour?: number;
          /** Timestamp when the current consumption period started, when present. */
          consumptionPeriodStart?: string;
          /** Timestamp when the current consumption period ends, when present. */
          consumptionPeriodEnd?: string;
          /** Most recent timestamp when any endpoint in the project was active. */
          computeLastActiveAt?: string;
          /** Timestamp when the project was deleted, when present. */
          deletedAt?: string;
          /** Timestamp until which the deleted project remains recoverable, when present. */
          recoverableUntil?: string;
          /** Default endpoint settings returned by Neon, when present. */
          defaultEndpointSettings?: Record<string, unknown>;
          /** Project settings returned by Neon, when present. */
          settings?: Record<string, unknown>;
          /** Owner summary returned by Neon, when present. */
          owner?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List branches for a Neon project. */
    "neon.list_branches": {
      input: {
        /**
         * The Neon project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * Search string used to filter records by name or identifier.
         * @minLength 1
         */
        search?: string;
        /** Field used to sort Neon branches. */
        sortBy?: "name" | "created_at" | "updated_at";
        /** Sort order to apply to branch results. */
        sortOrder?: "asc" | "desc";
        /**
         * Pagination cursor returned by a previous Neon response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Maximum number of records to return.
         * @minimum 1
         * @maximum 10000
         */
        limit?: number;
      };
      output: {
        /** Branches returned by Neon. */
        branches: Array<{
          /**
           * The Neon branch ID.
           * @minLength 1
           */
          id: string;
          /**
           * Project ID that owns the branch.
           * @minLength 1
           */
          projectId: string;
          /** Parent branch ID, when the branch has one. */
          parentId?: string;
          /** Parent Log Sequence Number, when present. */
          parentLsn?: string;
          /** Parent point-in-time timestamp used for the branch, when present. */
          parentTimestamp?: string;
          /** Branch name. */
          name: string;
          /** Current state reported by Neon for the branch. */
          currentState: string;
          /** Pending state reported by Neon for the branch, when present. */
          pendingState?: string;
          /** Timestamp when the current branch state began. */
          stateChangedAt: string;
          /** Logical size of the branch in bytes, when present. */
          logicalSize?: number;
          /** Source that created the branch. */
          creationSource: string;
          /** Whether the branch is the project's default branch. */
          default: boolean;
          /** Whether the branch is protected. */
          protected: boolean;
          /** Deprecated CPU seconds metric reported by Neon, when present. */
          cpuUsedSec?: number;
          /** Observed compute time in seconds for the branch. */
          computeTimeSeconds: number;
          /** Observed active time in seconds for the branch. */
          activeTimeSeconds: number;
          /** Write bytes measured for the branch. */
          writtenDataBytes: number;
          /** Data transfer bytes measured for the branch. */
          dataTransferBytes: number;
          /** Timestamp when the branch was created. */
          createdAt: string;
          /** Timestamp when the branch was last updated. */
          updatedAt: string;
          /** Initialization source used to create the branch, when present. */
          initSource?: string;
          /** Expiration timestamp for the branch, when present. */
          expiresAt?: string;
          /** Timestamp when the branch was last reset, when present. */
          lastResetAt?: string;
          /** Original time-to-live interval for the branch, when present. */
          ttlIntervalSeconds?: number;
          /** User or token summary that created the branch, when present. */
          createdBy?: Record<string, unknown>;
          /** Restore status reported by Neon, when present. */
          restoreStatus?: string;
          /** Snapshot ID used as the restore source, when present. */
          restoredFrom?: string;
          /** Branch ID replaced by this restore result, when present. */
          restoredAs?: string;
          /** Actions currently restricted for this branch, when present. */
          restrictedActions?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** Branch annotations keyed by branch ID. */
        annotations: Record<string, {
            /** Annotated Neon object. */
            object: {
              /** Annotation object type. */
              type: string;
              /** Identifier of the annotated object. */
              id: string;
              [key: string]: unknown;
            };
            /** Annotation values attached to the Neon object. */
            value: Record<string, unknown>;
            /** Timestamp when the annotation was created. */
            createdAt?: string;
            /** Timestamp when the annotation was last updated. */
            updatedAt?: string;
            [key: string]: unknown;
          }>;
        /** Pagination metadata for the current branch page, or null when absent. */
        pagination: {
          /** Cursor token for the next page when Neon uses cursor pagination. */
          cursor?: string;
          /** Opaque cursor for the next page when Neon returns next-page pagination. */
          next?: string;
          /** Field Neon used to sort the current page, when present. */
          sortBy?: string;
          /** Sort order Neon used for the current page, when present. */
          sortOrder?: string;
          [key: string]: unknown;
        } | null;
      };
    };
    /** List databases for a Neon branch. */
    "neon.list_databases": {
      input: {
        /**
         * The Neon project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The Neon branch ID.
         * @minLength 1
         */
        branchId: string;
      };
      output: {
        /** Databases returned by Neon. */
        databases: Array<{
          /** Unique identifier of the database. */
          id: number;
          /**
           * Branch ID that owns the database.
           * @minLength 1
           */
          branchId: string;
          /** Database name. */
          name: string;
          /** Role name that owns the database. */
          ownerName: string;
          /** Timestamp when the database was created. */
          createdAt: string;
          /** Timestamp when the database was last updated. */
          updatedAt: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List operations for a Neon project. */
    "neon.list_operations": {
      input: {
        /**
         * The Neon project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * Pagination cursor returned by a previous Neon response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Maximum number of operations to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** Operations returned by Neon. */
        operations: Array<{
          /**
           * The Neon operation ID.
           * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
           * @format uuid
           */
          id: string;
          /**
           * Project ID that owns the operation.
           * @minLength 1
           */
          projectId: string;
          /** Branch ID associated with the operation, when present. */
          branchId?: string;
          /** Endpoint ID associated with the operation, when present. */
          endpointId?: string;
          /** Action performed by the Neon operation. */
          action: string;
          /** Current status of the Neon operation. */
          status: string;
          /** Error message reported for the operation, when present. */
          error?: string;
          /** Number of failures recorded for the operation. */
          failuresCount: number;
          /** Timestamp when the operation will retry, when present. */
          retryAt?: string;
          /** Timestamp when the operation was created. */
          createdAt: string;
          /** Timestamp when the operation was last updated. */
          updatedAt: string;
          /** Total duration of the operation in milliseconds. */
          totalDurationMs: number;
          [key: string]: unknown;
        }>;
        /** Pagination metadata for the current operation page, or null when absent. */
        pagination: {
          /** Cursor token for the next page when Neon uses cursor pagination. */
          cursor?: string;
          /** Opaque cursor for the next page when Neon returns next-page pagination. */
          next?: string;
          /** Field Neon used to sort the current page, when present. */
          sortBy?: string;
          /** Sort order Neon used for the current page, when present. */
          sortOrder?: string;
          [key: string]: unknown;
        } | null;
      };
    };
    /** List Neon projects available to the authenticated account. */
    "neon.list_projects": {
      input: {
        /**
         * Pagination cursor returned by a previous Neon response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Maximum number of projects to return.
         * @minimum 1
         * @maximum 400
         */
        limit?: number;
        /**
         * Search string used to filter records by name or identifier.
         * @minLength 1
         */
        search?: string;
        /**
         * Organization ID used to scope project listing or creation.
         * @minLength 1
         */
        orgId?: string;
        /** Whether to return only deleted projects within the recovery window. */
        recoverable?: boolean;
      };
      output: {
        /** Projects returned by Neon. */
        projects: Array<{
          /**
           * The Neon project ID.
           * @minLength 1
           */
          id: string;
          /** Cloud platform identifier for the project. */
          platformId: string;
          /** Cloud region identifier for the project. */
          regionId: string;
          /** Project name. */
          name: string;
          /** Neon provisioner used by the project. */
          provisioner: string;
          /** Postgres major version configured for the project. */
          pgVersion: number;
          /** Proxy host used to connect to the project. */
          proxyHost: string;
          /** Logical size limit per branch in MiB. */
          branchLogicalSizeLimit: number;
          /** Logical size limit per branch in bytes. */
          branchLogicalSizeLimitBytes: number;
          /** Whether role passwords are stored for the project. */
          storePasswords: boolean;
          /** Source that created the project. */
          creationSource: string;
          /** Shared history retention period in seconds. */
          historyRetentionSeconds: number;
          /** Timestamp when the project was created. */
          createdAt: string;
          /** Timestamp when the project was last updated. */
          updatedAt: string;
          /** User or organization owner ID for the project. */
          ownerId: string;
          /** Organization ID that owns the project, when present. */
          orgId?: string;
          /** Organization name that owns the project, when present. */
          orgName?: string;
          /** Observed active time in seconds for list responses, when present. */
          activeTime?: number;
          /** Observed active time in seconds for detailed responses, when present. */
          activeTimeSeconds?: number;
          /** Observed compute time in seconds for the project, when present. */
          computeTimeSeconds?: number;
          /** Egress bytes measured for the project, when present. */
          dataTransferBytes?: number;
          /** Write-ahead log bytes measured for the project, when present. */
          writtenDataBytes?: number;
          /** Accumulated storage consumption in bytes-hour, when present. */
          dataStorageBytesHour?: number;
          /** Timestamp when the current consumption period started, when present. */
          consumptionPeriodStart?: string;
          /** Timestamp when the current consumption period ends, when present. */
          consumptionPeriodEnd?: string;
          /** Most recent timestamp when any endpoint in the project was active. */
          computeLastActiveAt?: string;
          /** Timestamp when the project was deleted, when present. */
          deletedAt?: string;
          /** Timestamp until which the deleted project remains recoverable, when present. */
          recoverableUntil?: string;
          /** Default endpoint settings returned by Neon, when present. */
          defaultEndpointSettings?: Record<string, unknown>;
          /** Project settings returned by Neon, when present. */
          settings?: Record<string, unknown>;
          /** Owner summary returned by Neon, when present. */
          owner?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Project IDs Neon could not fully retrieve before the list timeout, if any. */
        unavailableProjectIds: Array<string>;
        /** Pagination metadata for the current result page, or null when absent. */
        pagination: {
          /** Cursor token for the next page when Neon uses cursor pagination. */
          cursor?: string;
          /** Opaque cursor for the next page when Neon returns next-page pagination. */
          next?: string;
          /** Field Neon used to sort the current page, when present. */
          sortBy?: string;
          /** Sort order Neon used for the current page, when present. */
          sortOrder?: string;
          [key: string]: unknown;
        } | null;
      };
    };
    /** Update a Neon branch name or protection status. */
    "neon.update_branch": {
      input: {
        /**
         * The Neon project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The Neon branch ID.
         * @minLength 1
         */
        branchId: string;
        /**
         * The Neon branch name.
         * @minLength 1
         * @maxLength 256
         */
        name?: string;
        /** Whether the branch should be protected. */
        protected?: boolean;
      };
      output: {
        /** Branch snapshot returned by Neon. */
        branch: {
          /**
           * The Neon branch ID.
           * @minLength 1
           */
          id: string;
          /**
           * Project ID that owns the branch.
           * @minLength 1
           */
          projectId: string;
          /** Parent branch ID, when the branch has one. */
          parentId?: string;
          /** Parent Log Sequence Number, when present. */
          parentLsn?: string;
          /** Parent point-in-time timestamp used for the branch, when present. */
          parentTimestamp?: string;
          /** Branch name. */
          name: string;
          /** Current state reported by Neon for the branch. */
          currentState: string;
          /** Pending state reported by Neon for the branch, when present. */
          pendingState?: string;
          /** Timestamp when the current branch state began. */
          stateChangedAt: string;
          /** Logical size of the branch in bytes, when present. */
          logicalSize?: number;
          /** Source that created the branch. */
          creationSource: string;
          /** Whether the branch is the project's default branch. */
          default: boolean;
          /** Whether the branch is protected. */
          protected: boolean;
          /** Deprecated CPU seconds metric reported by Neon, when present. */
          cpuUsedSec?: number;
          /** Observed compute time in seconds for the branch. */
          computeTimeSeconds: number;
          /** Observed active time in seconds for the branch. */
          activeTimeSeconds: number;
          /** Write bytes measured for the branch. */
          writtenDataBytes: number;
          /** Data transfer bytes measured for the branch. */
          dataTransferBytes: number;
          /** Timestamp when the branch was created. */
          createdAt: string;
          /** Timestamp when the branch was last updated. */
          updatedAt: string;
          /** Initialization source used to create the branch, when present. */
          initSource?: string;
          /** Expiration timestamp for the branch, when present. */
          expiresAt?: string;
          /** Timestamp when the branch was last reset, when present. */
          lastResetAt?: string;
          /** Original time-to-live interval for the branch, when present. */
          ttlIntervalSeconds?: number;
          /** User or token summary that created the branch, when present. */
          createdBy?: Record<string, unknown>;
          /** Restore status reported by Neon, when present. */
          restoreStatus?: string;
          /** Snapshot ID used as the restore source, when present. */
          restoredFrom?: string;
          /** Branch ID replaced by this restore result, when present. */
          restoredAs?: string;
          /** Actions currently restricted for this branch, when present. */
          restrictedActions?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        /** Operations triggered by the branch mutation request. */
        operations: Array<{
          /**
           * The Neon operation ID.
           * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
           * @format uuid
           */
          id: string;
          /**
           * Project ID that owns the operation.
           * @minLength 1
           */
          projectId: string;
          /** Branch ID associated with the operation, when present. */
          branchId?: string;
          /** Endpoint ID associated with the operation, when present. */
          endpointId?: string;
          /** Action performed by the Neon operation. */
          action: string;
          /** Current status of the Neon operation. */
          status: string;
          /** Error message reported for the operation, when present. */
          error?: string;
          /** Number of failures recorded for the operation. */
          failuresCount: number;
          /** Timestamp when the operation will retry, when present. */
          retryAt?: string;
          /** Timestamp when the operation was created. */
          createdAt: string;
          /** Timestamp when the operation was last updated. */
          updatedAt: string;
          /** Total duration of the operation in milliseconds. */
          totalDurationMs: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Update a Neon database name or owner. */
    "neon.update_database": {
      input: {
        /**
         * The Neon project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The Neon branch ID.
         * @minLength 1
         */
        branchId: string;
        /**
         * Current name of the database to update.
         * @minLength 1
         */
        databaseName: string;
        /**
         * New database name to assign, when renaming the database.
         * @minLength 1
         */
        newName?: string;
        /**
         * New role name that should own the database.
         * @minLength 1
         */
        ownerName?: string;
      };
      output: {
        /** Database snapshot returned by Neon. */
        database: {
          /** Unique identifier of the database. */
          id: number;
          /**
           * Branch ID that owns the database.
           * @minLength 1
           */
          branchId: string;
          /** Database name. */
          name: string;
          /** Role name that owns the database. */
          ownerName: string;
          /** Timestamp when the database was created. */
          createdAt: string;
          /** Timestamp when the database was last updated. */
          updatedAt: string;
          [key: string]: unknown;
        };
        /** Operations triggered by the database mutation request. */
        operations: Array<{
          /**
           * The Neon operation ID.
           * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
           * @format uuid
           */
          id: string;
          /**
           * Project ID that owns the operation.
           * @minLength 1
           */
          projectId: string;
          /** Branch ID associated with the operation, when present. */
          branchId?: string;
          /** Endpoint ID associated with the operation, when present. */
          endpointId?: string;
          /** Action performed by the Neon operation. */
          action: string;
          /** Current status of the Neon operation. */
          status: string;
          /** Error message reported for the operation, when present. */
          error?: string;
          /** Number of failures recorded for the operation. */
          failuresCount: number;
          /** Timestamp when the operation will retry, when present. */
          retryAt?: string;
          /** Timestamp when the operation was created. */
          createdAt: string;
          /** Timestamp when the operation was last updated. */
          updatedAt: string;
          /** Total duration of the operation in milliseconds. */
          totalDurationMs: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Update a Neon project name or history retention period. */
    "neon.update_project": {
      input: {
        /**
         * The Neon project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The Neon project name.
         * @minLength 1
         * @maxLength 256
         */
        name?: string;
        /**
         * Shared history retention period in seconds.
         * @minimum 0
         * @maximum 2592000
         */
        historyRetentionSeconds?: number;
      };
      output: {
        /** Neon project. */
        project: {
          /**
           * The Neon project ID.
           * @minLength 1
           */
          id: string;
          /** Cloud platform identifier for the project. */
          platformId: string;
          /** Cloud region identifier for the project. */
          regionId: string;
          /** Project name. */
          name: string;
          /** Neon provisioner used by the project. */
          provisioner: string;
          /** Postgres major version configured for the project. */
          pgVersion: number;
          /** Proxy host used to connect to the project. */
          proxyHost: string;
          /** Logical size limit per branch in MiB. */
          branchLogicalSizeLimit: number;
          /** Logical size limit per branch in bytes. */
          branchLogicalSizeLimitBytes: number;
          /** Whether role passwords are stored for the project. */
          storePasswords: boolean;
          /** Source that created the project. */
          creationSource: string;
          /** Shared history retention period in seconds. */
          historyRetentionSeconds: number;
          /** Timestamp when the project was created. */
          createdAt: string;
          /** Timestamp when the project was last updated. */
          updatedAt: string;
          /** User or organization owner ID for the project. */
          ownerId: string;
          /** Organization ID that owns the project, when present. */
          orgId?: string;
          /** Organization name that owns the project, when present. */
          orgName?: string;
          /** Observed active time in seconds for list responses, when present. */
          activeTime?: number;
          /** Observed active time in seconds for detailed responses, when present. */
          activeTimeSeconds?: number;
          /** Observed compute time in seconds for the project, when present. */
          computeTimeSeconds?: number;
          /** Egress bytes measured for the project, when present. */
          dataTransferBytes?: number;
          /** Write-ahead log bytes measured for the project, when present. */
          writtenDataBytes?: number;
          /** Accumulated storage consumption in bytes-hour, when present. */
          dataStorageBytesHour?: number;
          /** Timestamp when the current consumption period started, when present. */
          consumptionPeriodStart?: string;
          /** Timestamp when the current consumption period ends, when present. */
          consumptionPeriodEnd?: string;
          /** Most recent timestamp when any endpoint in the project was active. */
          computeLastActiveAt?: string;
          /** Timestamp when the project was deleted, when present. */
          deletedAt?: string;
          /** Timestamp until which the deleted project remains recoverable, when present. */
          recoverableUntil?: string;
          /** Default endpoint settings returned by Neon, when present. */
          defaultEndpointSettings?: Record<string, unknown>;
          /** Project settings returned by Neon, when present. */
          settings?: Record<string, unknown>;
          /** Owner summary returned by Neon, when present. */
          owner?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Operations triggered by the project update request. */
        operations: Array<{
          /**
           * The Neon operation ID.
           * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$
           * @format uuid
           */
          id: string;
          /**
           * Project ID that owns the operation.
           * @minLength 1
           */
          projectId: string;
          /** Branch ID associated with the operation, when present. */
          branchId?: string;
          /** Endpoint ID associated with the operation, when present. */
          endpointId?: string;
          /** Action performed by the Neon operation. */
          action: string;
          /** Current status of the Neon operation. */
          status: string;
          /** Error message reported for the operation, when present. */
          error?: string;
          /** Number of failures recorded for the operation. */
          failuresCount: number;
          /** Timestamp when the operation will retry, when present. */
          retryAt?: string;
          /** Timestamp when the operation was created. */
          createdAt: string;
          /** Timestamp when the operation was last updated. */
          updatedAt: string;
          /** Total duration of the operation in milliseconds. */
          totalDurationMs: number;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
