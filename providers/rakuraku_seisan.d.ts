import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Download the latest automatically generated Rakuraku Seisan journal file for an export configuration. Configure exports in Rakuraku Seisan first; historical files are unavailable through the API. Returns a temporary download URL, preserving CSV/TXT MS932 encoding or ZIP bytes. Connector download limit: 64 MiB. */
    "rakuraku_seisan.download_journal_file": {
      input: {
        /** The automatic file export configuration ID shown in the administration screen. */
        fileGenerateId: number;
      };
      output: {
        /** File in temporary connector storage. */
        file: {
          /** Export filename. */
          name: string;
          /** File MIME type. */
          mimetype: string;
          /**
           * Temporary download URL.
           * @format uri
           */
          s3url: string;
          /**
           * File size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
        };
      };
    };
    /** Get a Rakuraku Seisan CSV import result. A complete process may still contain failed records; inspect failureCount and download the error report from the Rakuraku Seisan CSV import status screen when needed. */
    "rakuraku_seisan.get_import_status": {
      input: {
        /**
         * Process ID returned by import_master_csv.
         * @minLength 1
         */
        processId: string;
      };
      output: {
        /** Provider process state: wait, active, complete, abort, or error. */
        processStatus: string;
        /**
         * Successfully imported record count, when supplied.
         * @minimum 0
         */
        successCount?: number;
        /**
         * Failed record count, when supplied.
         * @minimum 0
         */
        failureCount?: number;
        /** Original provider response, including additional fields. */
        raw: Record<string, unknown>;
      };
    };
    /** Schedule a Rakuraku Seisan master CSV import from a public file URL. The file must use MS932 encoding and official column names in its first row, at most 5 MB and 50,000 rows. Creates or updates records; does not delete them. Poll get_import_status to check completion and failed record counts. */
    "rakuraku_seisan.import_master_csv": {
      input: {
        /**
         * Public URL of the MS932 CSV file, including its header row.
         * @format uri
         */
        fileUrl: string;
        /** Official master ID: 0 employees, 1 departments, 2 positions, 3 payees, 4 projects, 18 approvers, 81-85 general masters. For other supported masters such as exchange rates, use the ID supplied by Rakuraku Seisan. */
        masterId: number;
        /** Duplicate record handling: 0 skip, 1 update. Defaults to 0, or 1 for approvers (masterId 18). */
        duplicateKey?: 0 | 1;
        /** Send password setup emails when importing employees. Defaults to false. */
        sendPasswordEmail?: boolean;
        /** Create missing categories for payees, projects, or general masters. Defaults to false. */
        createCategory?: boolean;
      };
      output: {
        /** Import process ID used to poll the result. */
        processId: string;
      };
    };
  }
}
