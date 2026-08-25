import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Clone an existing KoboToolbox asset into a new survey project. */
    "kobotoolbox.clone_project": {
      input: {
        /**
         * The UID of the asset to clone.
         * @minLength 1
         */
        sourceAssetUid: string;
        /**
         * The name for the cloned project.
         * @minLength 1
         * @maxLength 255
         */
        name: string;
      };
      output: {
        /** A KoboToolbox project or library asset with provider-defined nested content. */
        asset: {
          /**
           * The asset UID.
           * @minLength 1
           */
          uid: string;
          /** The asset name. */
          name: string;
          /** The KoboToolbox asset type. */
          asset_type: string;
          /**
           * When the asset was created.
           * @format date-time
           */
          date_created?: string;
          /**
           * When the asset was last modified.
           * @format date-time
           */
          date_modified?: string;
          /**
           * When the asset was last deployed.
           * @format date-time
           */
          date_deployed?: string | null;
          /** The current asset deployment status. */
          deployment_status?: string;
          /** Whether the asset has been deployed. */
          has_deployment?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Create a new draft KoboToolbox survey project. */
    "kobotoolbox.create_project": {
      input: {
        /**
         * The project name.
         * @minLength 1
         * @maxLength 255
         */
        name: string;
        /** The project description. */
        description?: string;
        /** The project sector value used by KoboToolbox. */
        sector?: string;
        /** The project country value used by KoboToolbox. */
        country?: string;
        /** Whether KoboToolbox may share the project metadata. */
        shareMetadata?: boolean;
      };
      output: {
        /** A KoboToolbox project or library asset with provider-defined nested content. */
        asset: {
          /**
           * The asset UID.
           * @minLength 1
           */
          uid: string;
          /** The asset name. */
          name: string;
          /** The KoboToolbox asset type. */
          asset_type: string;
          /**
           * When the asset was created.
           * @format date-time
           */
          date_created?: string;
          /**
           * When the asset was last modified.
           * @format date-time
           */
          date_modified?: string;
          /**
           * When the asset was last deployed.
           * @format date-time
           */
          date_deployed?: string | null;
          /** The current asset deployment status. */
          deployment_status?: string;
          /** Whether the asset has been deployed. */
          has_deployment?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Permanently delete one KoboToolbox form submission. */
    "kobotoolbox.delete_submission": {
      input: {
        /**
         * The KoboToolbox asset UID.
         * @minLength 1
         */
        assetUid: string;
        /**
         * The submission numeric ID, UUID, or root UUID accepted by KoboToolbox.
         * @minLength 1
         */
        submissionId: string;
      };
      output: {
        /** Whether KoboToolbox accepted the deletion. */
        deleted: boolean;
      };
    };
    /** Deploy or redeploy the current form version for a KoboToolbox project. */
    "kobotoolbox.deploy_project": {
      input: {
        /**
         * The KoboToolbox asset UID.
         * @minLength 1
         */
        assetUid: string;
      };
      output: {
        /** The deployed KoboToolbox form version. */
        deployment: {
          /** Whether the deployment is active. */
          active: boolean;
          /**
           * The deployed form version UID.
           * @minLength 1
           */
          version_id: string;
          /** A KoboToolbox project or library asset with provider-defined nested content. */
          asset: {
            /**
             * The asset UID.
             * @minLength 1
             */
            uid: string;
            /** The asset name. */
            name: string;
            /** The KoboToolbox asset type. */
            asset_type: string;
            /**
             * When the asset was created.
             * @format date-time
             */
            date_created?: string;
            /**
             * When the asset was last modified.
             * @format date-time
             */
            date_modified?: string;
            /**
             * When the asset was last deployed.
             * @format date-time
             */
            date_deployed?: string | null;
            /** The current asset deployment status. */
            deployment_status?: string;
            /** Whether the asset has been deployed. */
            has_deployment?: boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one KoboToolbox project or library asset by UID. */
    "kobotoolbox.get_asset": {
      input: {
        /**
         * The KoboToolbox asset UID.
         * @minLength 1
         */
        assetUid: string;
      };
      output: {
        /** A KoboToolbox project or library asset with provider-defined nested content. */
        asset: {
          /**
           * The asset UID.
           * @minLength 1
           */
          uid: string;
          /** The asset name. */
          name: string;
          /** The KoboToolbox asset type. */
          asset_type: string;
          /**
           * When the asset was created.
           * @format date-time
           */
          date_created?: string;
          /**
           * When the asset was last modified.
           * @format date-time
           */
          date_modified?: string;
          /**
           * When the asset was last deployed.
           * @format date-time
           */
          date_deployed?: string | null;
          /** The current asset deployment status. */
          deployment_status?: string;
          /** Whether the asset has been deployed. */
          has_deployment?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Get the status and download URL of a KoboToolbox export task. */
    "kobotoolbox.get_export": {
      input: {
        /**
         * The opaque handle returned by start_export.
         * @minLength 1
         */
        exportHandle: string;
      };
      output: {
        /** A KoboToolbox asynchronous export task. */
        export: {
          /**
           * The export task UID.
           * @minLength 1
           */
          uid: string;
          /**
           * The export task status.
           * @minLength 1
           */
          status: string;
          /** The generated export file URL when processing is complete. */
          result?: string | null;
          /**
           * When the export task was created.
           * @format date-time
           */
          date_created?: string;
          /**
           * The latest submission time included in the export.
           * @format date-time
           */
          last_submission_time?: string | null;
          /** Provider-defined export progress or error details. */
          message?: unknown;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one KoboToolbox form submission by ID or UUID. */
    "kobotoolbox.get_submission": {
      input: {
        /**
         * The KoboToolbox asset UID.
         * @minLength 1
         */
        assetUid: string;
        /**
         * The submission numeric ID, UUID, or root UUID accepted by KoboToolbox.
         * @minLength 1
         */
        submissionId: string;
      };
      output: {
        /** A KoboToolbox submission including form-defined answer fields. */
        submission: {
          /** The numeric submission ID. */
          _id?: number;
          /** The submission UUID. */
          _uuid?: string;
          /**
           * When the submission was received.
           * @format date-time
           */
          _submission_time?: string;
          /** The username that submitted the record, or null when anonymous. */
          _submitted_by?: string | null;
          /** The submission status. */
          _status?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List KoboToolbox projects and library assets visible to the connected account. */
    "kobotoolbox.list_assets": {
      input: {
        /**
         * A KoboToolbox asset search expression for the `q` parameter.
         * @minLength 1
         */
        query?: string;
        /**
         * The KoboToolbox field used to order assets, optionally prefixed with a minus sign.
         * @minLength 1
         */
        ordering?: string;
        /**
         * The maximum number of assets to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * The zero-based result index to start from.
         * @minimum 0
         */
        start?: number;
      };
      output: {
        /** Assets returned by KoboToolbox. */
        assets: Array<{
          /**
           * The asset UID.
           * @minLength 1
           */
          uid: string;
          /** The asset name. */
          name: string;
          /** The KoboToolbox asset type. */
          asset_type: string;
          /**
           * When the asset was created.
           * @format date-time
           */
          date_created?: string;
          /**
           * When the asset was last modified.
           * @format date-time
           */
          date_modified?: string;
          /**
           * When the asset was last deployed.
           * @format date-time
           */
          date_deployed?: string | null;
          /** The current asset deployment status. */
          deployment_status?: string;
          /** Whether the asset has been deployed. */
          has_deployment?: boolean;
          [key: string]: unknown;
        }>;
        /**
         * The total number of matching assets.
         * @minimum 0
         */
        count: number;
        /**
         * The next result page URL when available.
         * @format uri
         */
        nextUrl: string | null;
        /**
         * The previous result page URL when available.
         * @format uri
         */
        previousUrl: string | null;
      };
    };
    /** List form submissions for a KoboToolbox project. */
    "kobotoolbox.list_submissions": {
      input: {
        /**
         * The KoboToolbox asset UID.
         * @minLength 1
         */
        assetUid: string;
        /** A Mongo-style KoboToolbox query object. */
        query?: Record<string, unknown>;
        /** A KoboToolbox sort object such as `{"_id": -1}`. */
        sort?: Record<string, 1 | -1>;
        /** The form field names to include in each submission. */
        fields?: Array<string>;
        /**
         * The maximum number of submissions to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * The zero-based result index to start from.
         * @minimum 0
         */
        start?: number;
      };
      output: {
        /** Submissions returned by KoboToolbox. */
        submissions: Array<{
          /** The numeric submission ID. */
          _id?: number;
          /** The submission UUID. */
          _uuid?: string;
          /**
           * When the submission was received.
           * @format date-time
           */
          _submission_time?: string;
          /** The username that submitted the record, or null when anonymous. */
          _submitted_by?: string | null;
          /** The submission status. */
          _status?: string;
          [key: string]: unknown;
        }>;
        /**
         * The total number of matching submissions.
         * @minimum 0
         */
        count: number;
        /**
         * The next result page URL when available.
         * @format uri
         */
        nextUrl: string | null;
        /**
         * The previous result page URL when available.
         * @format uri
         */
        previousUrl: string | null;
      };
    };
    /** Replace the validation status of one KoboToolbox submission. */
    "kobotoolbox.set_submission_validation": {
      input: {
        /**
         * The KoboToolbox asset UID.
         * @minLength 1
         */
        assetUid: string;
        /**
         * The submission numeric ID, UUID, or root UUID accepted by KoboToolbox.
         * @minLength 1
         */
        submissionId: string;
        /** The new KoboToolbox validation status. */
        status: "validation_status_approved" | "validation_status_not_approved" | "validation_status_on_hold";
      };
      output: {
        /** The recorded validation status. */
        validation: {
          /**
           * The validation status UID.
           * @minLength 1
           */
          uid: string;
          /** The human-readable validation status label. */
          label: string;
          /**
           * When the validation status was updated.
           * @format date-time
           */
          timestamp: string;
          /** The KoboToolbox user that updated the status. */
          by_whom: string;
          [key: string]: unknown;
        };
      };
    };
    /** Start an asynchronous KoboToolbox submission data export. */
    "kobotoolbox.start_export": {
      input: {
        /**
         * The KoboToolbox asset UID.
         * @minLength 1
         */
        assetUid: string;
        /** The export file format. */
        format: "csv" | "geojson" | "spss_labels" | "xls";
        /** The XML field names to include, or an empty array for every field. */
        fields?: Array<string>;
        /** Whether to include fields from every deployed form version. */
        fieldsFromAllVersions?: boolean;
        /**
         * The separator used between nested group names.
         * @minLength 1
         */
        groupSeparator?: string;
        /** Whether labels include their group hierarchy. */
        hierarchyInLabels?: boolean;
        /** Whether CSV and XLS exports include hosted media URLs. */
        includeMediaUrls?: boolean;
        /**
         * The form translation label to export, or `_xml` for XML names and values.
         * @minLength 1
         */
        language?: string;
        /** How multiple-select answers are represented. */
        multipleSelect?: "both" | "summary" | "details";
        /** The numeric submission IDs to include, or an empty array for all submissions. */
        submissionIds?: Array<number>;
        /** A Mongo-style KoboToolbox query object. */
        query?: Record<string, unknown>;
        /** Whether GeoJSON output is flattened. */
        flatten?: boolean;
        /** Whether XLS values are exported as text. */
        xlsTypesAsText?: boolean;
      };
      output: {
        /** A KoboToolbox asynchronous export task. */
        export: {
          /**
           * The export task UID.
           * @minLength 1
           */
          uid: string;
          /**
           * The export task status.
           * @minLength 1
           */
          status: string;
          /** The generated export file URL when processing is complete. */
          result?: string | null;
          /**
           * When the export task was created.
           * @format date-time
           */
          date_created?: string;
          /**
           * The latest submission time included in the export.
           * @format date-time
           */
          last_submission_time?: string | null;
          /** Provider-defined export progress or error details. */
          message?: unknown;
          [key: string]: unknown;
        };
        /**
         * An opaque handle containing the project and export identifiers for status polling.
         * @minLength 1
         */
        exportHandle: string;
      };
    };
  }
}
