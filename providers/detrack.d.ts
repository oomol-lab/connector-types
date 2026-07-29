import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a delivery or collection job in Detrack API V2. */
    "detrack.create_job": {
      input: {
        /** The Detrack job type. */
        type?: "Delivery" | "Collection";
        /**
         * The D.O. number for the job. Detrack may allow automatic generation when configured, but this action requires an explicit stable identifier.
         * @minLength 1
         */
        doNumber: string;
        /**
         * The date when the job is performed in YYYY-MM-DD format.
         * @format date
         */
        date: string;
        /**
         * The address where the job is performed.
         * @minLength 1
         */
        address?: string;
        /**
         * The date when the job starts in YYYY-MM-DD format.
         * @format date
         */
        startDate?: string;
        /** The beginning of the requested job time window. */
        timeWindowFrom?: string;
        /** The end of the requested job time window. */
        timeWindowTo?: string;
        /** The estimated duration needed to complete the job. */
        jobTime?: string;
        /** The tracking number associated with the job. */
        trackingNumber?: string;
        /** The customer order number associated with the job. */
        orderNumber?: string;
        /** The latitude of the job address. */
        addressLatitude?: number;
        /** The longitude of the job address. */
        addressLongitude?: number;
        /** The company name at the job address. */
        companyName?: string;
        /** The first structured address line. */
        addressLine1?: string;
        /** The second structured address line. */
        addressLine2?: string;
        /** The third structured address line. */
        addressLine3?: string;
        /** The postal code of the job address. */
        postalCode?: string;
        /** The city of the job address. */
        city?: string;
        /** The state or province of the job address. */
        state?: string;
        /** The country of the job address. */
        country?: string;
        /** The person receiving the delivery or providing the collection. */
        contactName?: string;
        /** The contact phone number for the job. */
        phoneNumber?: string;
        /** Instructions for the assigned driver. */
        instructions?: string;
        /** The driver or vehicle assignment name. */
        assignTo?: string;
        /**
         * One notification email address or multiple addresses separated by semicolons.
         * @minLength 1
         */
        notifyEmail?: string;
        /**
         * The webhook URL associated with this job.
         * @format uri
         */
        webhookUrl?: string;
        /** The operational zone assigned to the job. */
        zone?: string;
        /** The customer name associated with the job. */
        customer?: string;
        /** The customer account number associated with the job. */
        accountNumber?: string;
        /** The invoice number associated with the job. */
        invoiceNumber?: string;
        /** The invoice amount associated with the job. */
        invoiceAmount?: number;
        /** The Detrack group assigned to the job. */
        groupName?: string;
        /** The planned total job weight. */
        weight?: number;
        /** A description of the boxes for the job. */
        boxes?: string;
        /** The planned number of cartons. */
        cartons?: number;
        /** The planned number of pieces. */
        pieces?: number;
        /** The planned number of pallets. */
        pallets?: number;
        /** The run number assigned to the job. */
        runNumber?: string;
        /** Free-form remarks associated with the job. */
        remarks?: string;
        /** The service type assigned to the job. */
        serviceType?: string;
        /** The vehicle type required for the job. */
        vehicleType?: string;
        /** Items attached to the job. */
        items?: Array<{
          /**
           * The stock keeping unit of the item.
           * @minLength 1
           */
          sku?: string;
          /** The purchase order number of the item. */
          purchaseOrderNumber?: string;
          /** The batch number of the item. */
          batchNumber?: string;
          /**
           * The item expiry date in YYYY-MM-DD format.
           * @format date
           */
          expiryDate?: string;
          /** A description of the item. */
          description?: string;
          /** Free-form comments about the item. */
          comments?: string;
          /** The planned quantity of the item. */
          quantity?: number;
          /** The unit of measure for the item. */
          unitOfMeasure?: string;
          /** The planned weight of the item. */
          weight?: number;
          /** Serial numbers assigned to the item. */
          serialNumbers?: Array<string>;
        }>;
      };
      output: {
        /** A Detrack V2 job. Stable identity fields are declared and additional documented fields are preserved. */
        job: {
          /**
           * The unique Detrack identifier of the job.
           * @minLength 1
           */
          id: string;
          /** The Detrack job type. */
          type: "Delivery" | "Collection";
          /** The D.O. number of the job. */
          do_number: string;
          /**
           * The date when the job is performed.
           * @format date
           */
          date: string;
          /** The address where the job is performed. */
          address: string;
          /** The primary operational job status. */
          primary_job_status?: string | null;
          /** The detailed job status. */
          status?: string | null;
          /** The customer-facing tracking status. */
          tracking_status?: string | null;
          /** The tracking number associated with the job. */
          tracking_number?: string | null;
          /** The customer order number associated with the job. */
          order_number?: string | null;
          /** The driver or vehicle assignment name. */
          assign_to?: string | null;
          /** The delivery recipient or collection contact name. */
          deliver_to_collect_from?: string | null;
          /** The contact phone number for the job. */
          phone_number?: string | null;
          /** The notification email address for the job. */
          notify_email?: string | null;
          /** Items attached to the job. */
          items?: Array<Record<string, unknown>>;
          /** Operational milestones recorded for the job. */
          milestones?: Array<Record<string, unknown>>;
          /** The timestamp when Detrack created the job. */
          created_at?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Delete one Detrack job identified by D.O. number and date. */
    "detrack.delete_job": {
      input: {
        /**
         * The D.O. number of the job.
         * @minLength 1
         */
        doNumber: string;
        /**
         * The job date in YYYY-MM-DD format.
         * @format date
         */
        date: string;
        /** The Detrack job type. */
        type?: "Delivery" | "Collection";
      };
      output: {
        /** Whether Detrack accepted the job deletion. */
        deleted: boolean;
      };
    };
    /** Retrieve one Detrack job by D.O. number and date. */
    "detrack.get_job": {
      input: {
        /**
         * The D.O. number of the job.
         * @minLength 1
         */
        doNumber: string;
        /**
         * The job date in YYYY-MM-DD format.
         * @format date
         */
        date: string;
        /** The Detrack job type. */
        type?: "Delivery" | "Collection";
      };
      output: {
        /** A Detrack V2 job. Stable identity fields are declared and additional documented fields are preserved. */
        job: {
          /**
           * The unique Detrack identifier of the job.
           * @minLength 1
           */
          id: string;
          /** The Detrack job type. */
          type: "Delivery" | "Collection";
          /** The D.O. number of the job. */
          do_number: string;
          /**
           * The date when the job is performed.
           * @format date
           */
          date: string;
          /** The address where the job is performed. */
          address: string;
          /** The primary operational job status. */
          primary_job_status?: string | null;
          /** The detailed job status. */
          status?: string | null;
          /** The customer-facing tracking status. */
          tracking_status?: string | null;
          /** The tracking number associated with the job. */
          tracking_number?: string | null;
          /** The customer order number associated with the job. */
          order_number?: string | null;
          /** The driver or vehicle assignment name. */
          assign_to?: string | null;
          /** The delivery recipient or collection contact name. */
          deliver_to_collect_from?: string | null;
          /** The contact phone number for the job. */
          phone_number?: string | null;
          /** The notification email address for the job. */
          notify_email?: string | null;
          /** Items attached to the job. */
          items?: Array<Record<string, unknown>>;
          /** Operational milestones recorded for the job. */
          milestones?: Array<Record<string, unknown>>;
          /** The timestamp when Detrack created the job. */
          created_at?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** List depots available in the connected Detrack account. */
    "detrack.list_depots": {
      input: {
        /**
         * The one-based result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of depots per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** Depots returned by Detrack. */
        depots: Array<{
          /**
           * The unique Detrack identifier of the depot.
           * @minLength 1
           */
          id: string;
          /**
           * The display name of the depot.
           * @minLength 1
           */
          name: string;
          /** The depot address. */
          address: string;
          /** The depot latitude. */
          address_lat?: number | null;
          /** The depot longitude. */
          address_lng?: number | null;
          /**
           * The depot coordinates as longitude followed by latitude.
           * @minItems 2
           * @maxItems 2
           */
          location?: [number, number] | null;
          [key: string]: unknown;
        }>;
        /** Pagination links returned by Detrack. */
        links: {
          /**
           * URL of the first result page.
           * @format uri
           */
          first?: string | null;
          /**
           * URL of the last result page.
           * @format uri
           */
          last?: string | null;
          /**
           * URL of the next result page.
           * @format uri
           */
          next?: string | null;
          /**
           * URL of the previous result page.
           * @format uri
           */
          prev?: string | null;
          [key: string]: unknown;
        };
        /** The total number of depots matching the request. */
        totalCount: number;
      };
    };
    /** List and filter delivery or collection jobs from Detrack API V2. */
    "detrack.list_jobs": {
      input: {
        /**
         * The one-based result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of jobs per page, up to the documented maximum of 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** The upstream field to sort by, prefixed with a minus sign for descending order. */
        sort?: string;
        /** The Detrack job type. */
        type?: "Delivery" | "Collection";
        /**
         * The job date to filter by in YYYY-MM-DD format.
         * @format date
         */
        date?: string;
        /** The driver or vehicle assignment name to filter by. */
        assignTo?: string;
        /** One status or a comma-separated list of Detrack job statuses to filter by. */
        status?: string;
        /** The D.O. number to filter by. */
        doNumber?: string;
        /** Text to search across D.O. number, address, contact, email, assignment, tracking number, and zone. */
        query?: string;
      };
      output: {
        /** Jobs returned by Detrack. */
        jobs: Array<{
          /**
           * The unique Detrack identifier of the job.
           * @minLength 1
           */
          id: string;
          /** The Detrack job type. */
          type: "Delivery" | "Collection";
          /** The D.O. number of the job. */
          do_number: string;
          /**
           * The date when the job is performed.
           * @format date
           */
          date: string;
          /** The address where the job is performed. */
          address: string;
          /** The primary operational job status. */
          primary_job_status?: string | null;
          /** The detailed job status. */
          status?: string | null;
          /** The customer-facing tracking status. */
          tracking_status?: string | null;
          /** The tracking number associated with the job. */
          tracking_number?: string | null;
          /** The customer order number associated with the job. */
          order_number?: string | null;
          /** The driver or vehicle assignment name. */
          assign_to?: string | null;
          /** The delivery recipient or collection contact name. */
          deliver_to_collect_from?: string | null;
          /** The contact phone number for the job. */
          phone_number?: string | null;
          /** The notification email address for the job. */
          notify_email?: string | null;
          /** Items attached to the job. */
          items?: Array<Record<string, unknown>>;
          /** Operational milestones recorded for the job. */
          milestones?: Array<Record<string, unknown>>;
          /** The timestamp when Detrack created the job. */
          created_at?: string | null;
          [key: string]: unknown;
        }>;
        /** Pagination links returned by Detrack. */
        links: {
          /**
           * URL of the first result page.
           * @format uri
           */
          first?: string | null;
          /**
           * URL of the last result page.
           * @format uri
           */
          last?: string | null;
          /**
           * URL of the next result page.
           * @format uri
           */
          next?: string | null;
          /**
           * URL of the previous result page.
           * @format uri
           */
          prev?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Search Detrack jobs with structured operational and customer filters. */
    "detrack.search_jobs": {
      input: {
        /** The Detrack job type. */
        type?: "Delivery" | "Collection";
        /** One D.O. number to match. */
        doNumber?: string;
        /**
         * D.O. numbers to match.
         * @minItems 1
         */
        doNumbers?: Array<string>;
        /**
         * The first job date to include in YYYY-MM-DD format.
         * @format date
         */
        dateFrom?: string;
        /**
         * The last job date to include in YYYY-MM-DD format.
         * @format date
         */
        dateTo?: string;
        /**
         * The first job start date to include in YYYY-MM-DD format.
         * @format date
         */
        startDateFrom?: string;
        /**
         * The last job start date to include in YYYY-MM-DD format.
         * @format date
         */
        startDateTo?: string;
        /**
         * Job statuses to include.
         * @minItems 1
         */
        statuses?: Array<string>;
        /**
         * Groups to include.
         * @minItems 1
         */
        groups?: Array<{
          /**
           * The exact Detrack group or vehicle name.
           * @minLength 1
           */
          name: string;
        }>;
        /**
         * Vehicles to include.
         * @minItems 1
         */
        vehicles?: Array<{
          /**
           * The exact Detrack group or vehicle name.
           * @minLength 1
           */
          name: string;
        }>;
        /** The account number to match. */
        accountNumber?: string;
        /** Address text to match. */
        address?: string;
        /** Contact name to match. */
        contactName?: string;
        /** Customer name to match. */
        customer?: string;
        /** Department to match. */
        department?: string;
        /** Invoice number to match. */
        invoiceNumber?: string;
        /** Custom job type to match. */
        jobType?: string;
        /** Whether to match jobs open to the marketplace. */
        openToMarketplace?: boolean;
        /** Order number to match. */
        orderNumber?: string;
        /** Run number to match. */
        runNumber?: string;
        /** Tracking number to match. */
        trackingNumber?: string;
        /** Zone to match. */
        zone?: string;
        /**
         * The one-based result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of jobs per page, up to the documented maximum of 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** Jobs returned by Detrack. */
        jobs: Array<{
          /**
           * The unique Detrack identifier of the job.
           * @minLength 1
           */
          id: string;
          /** The Detrack job type. */
          type: "Delivery" | "Collection";
          /** The D.O. number of the job. */
          do_number: string;
          /**
           * The date when the job is performed.
           * @format date
           */
          date: string;
          /** The address where the job is performed. */
          address: string;
          /** The primary operational job status. */
          primary_job_status?: string | null;
          /** The detailed job status. */
          status?: string | null;
          /** The customer-facing tracking status. */
          tracking_status?: string | null;
          /** The tracking number associated with the job. */
          tracking_number?: string | null;
          /** The customer order number associated with the job. */
          order_number?: string | null;
          /** The driver or vehicle assignment name. */
          assign_to?: string | null;
          /** The delivery recipient or collection contact name. */
          deliver_to_collect_from?: string | null;
          /** The contact phone number for the job. */
          phone_number?: string | null;
          /** The notification email address for the job. */
          notify_email?: string | null;
          /** Items attached to the job. */
          items?: Array<Record<string, unknown>>;
          /** Operational milestones recorded for the job. */
          milestones?: Array<Record<string, unknown>>;
          /** The timestamp when Detrack created the job. */
          created_at?: string | null;
          [key: string]: unknown;
        }>;
        /** Pagination links returned by Detrack. */
        links: {
          /**
           * URL of the first result page.
           * @format uri
           */
          first?: string | null;
          /**
           * URL of the last result page.
           * @format uri
           */
          last?: string | null;
          /**
           * URL of the next result page.
           * @format uri
           */
          next?: string | null;
          /**
           * URL of the previous result page.
           * @format uri
           */
          prev?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Update selected fields on one Detrack job identified by D.O. number and date. */
    "detrack.update_job": {
      input: {
        /**
         * The D.O. number of the job.
         * @minLength 1
         */
        doNumber: string;
        /**
         * The current job date in YYYY-MM-DD format.
         * @format date
         */
        date: string;
        /** The Detrack job type. */
        type?: "Delivery" | "Collection";
        /**
         * The address where the job is performed.
         * @minLength 1
         */
        address?: string;
        /**
         * The date when the job starts in YYYY-MM-DD format.
         * @format date
         */
        startDate?: string;
        /** The beginning of the requested job time window. */
        timeWindowFrom?: string;
        /** The end of the requested job time window. */
        timeWindowTo?: string;
        /** The estimated duration needed to complete the job. */
        jobTime?: string;
        /** The tracking number associated with the job. */
        trackingNumber?: string;
        /** The customer order number associated with the job. */
        orderNumber?: string;
        /** The latitude of the job address. */
        addressLatitude?: number;
        /** The longitude of the job address. */
        addressLongitude?: number;
        /** The company name at the job address. */
        companyName?: string;
        /** The first structured address line. */
        addressLine1?: string;
        /** The second structured address line. */
        addressLine2?: string;
        /** The third structured address line. */
        addressLine3?: string;
        /** The postal code of the job address. */
        postalCode?: string;
        /** The city of the job address. */
        city?: string;
        /** The state or province of the job address. */
        state?: string;
        /** The country of the job address. */
        country?: string;
        /** The person receiving the delivery or providing the collection. */
        contactName?: string;
        /** The contact phone number for the job. */
        phoneNumber?: string;
        /** Instructions for the assigned driver. */
        instructions?: string;
        /** The driver or vehicle assignment name. */
        assignTo?: string;
        /**
         * One notification email address or multiple addresses separated by semicolons.
         * @minLength 1
         */
        notifyEmail?: string;
        /**
         * The webhook URL associated with this job.
         * @format uri
         */
        webhookUrl?: string;
        /** The operational zone assigned to the job. */
        zone?: string;
        /** The customer name associated with the job. */
        customer?: string;
        /** The customer account number associated with the job. */
        accountNumber?: string;
        /** The invoice number associated with the job. */
        invoiceNumber?: string;
        /** The invoice amount associated with the job. */
        invoiceAmount?: number;
        /** The Detrack group assigned to the job. */
        groupName?: string;
        /** The planned total job weight. */
        weight?: number;
        /** A description of the boxes for the job. */
        boxes?: string;
        /** The planned number of cartons. */
        cartons?: number;
        /** The planned number of pieces. */
        pieces?: number;
        /** The planned number of pallets. */
        pallets?: number;
        /** The run number assigned to the job. */
        runNumber?: string;
        /** Free-form remarks associated with the job. */
        remarks?: string;
        /** The service type assigned to the job. */
        serviceType?: string;
        /** The vehicle type required for the job. */
        vehicleType?: string;
        /** Items attached to the job. */
        items?: Array<{
          /**
           * The stock keeping unit of the item.
           * @minLength 1
           */
          sku?: string;
          /** The purchase order number of the item. */
          purchaseOrderNumber?: string;
          /** The batch number of the item. */
          batchNumber?: string;
          /**
           * The item expiry date in YYYY-MM-DD format.
           * @format date
           */
          expiryDate?: string;
          /** A description of the item. */
          description?: string;
          /** Free-form comments about the item. */
          comments?: string;
          /** The planned quantity of the item. */
          quantity?: number;
          /** The unit of measure for the item. */
          unitOfMeasure?: string;
          /** The planned weight of the item. */
          weight?: number;
          /** Serial numbers assigned to the item. */
          serialNumbers?: Array<string>;
        }>;
      };
      output: {
        /** A Detrack V2 job. Stable identity fields are declared and additional documented fields are preserved. */
        job: {
          /**
           * The unique Detrack identifier of the job.
           * @minLength 1
           */
          id: string;
          /** The Detrack job type. */
          type: "Delivery" | "Collection";
          /** The D.O. number of the job. */
          do_number: string;
          /**
           * The date when the job is performed.
           * @format date
           */
          date: string;
          /** The address where the job is performed. */
          address: string;
          /** The primary operational job status. */
          primary_job_status?: string | null;
          /** The detailed job status. */
          status?: string | null;
          /** The customer-facing tracking status. */
          tracking_status?: string | null;
          /** The tracking number associated with the job. */
          tracking_number?: string | null;
          /** The customer order number associated with the job. */
          order_number?: string | null;
          /** The driver or vehicle assignment name. */
          assign_to?: string | null;
          /** The delivery recipient or collection contact name. */
          deliver_to_collect_from?: string | null;
          /** The contact phone number for the job. */
          phone_number?: string | null;
          /** The notification email address for the job. */
          notify_email?: string | null;
          /** Items attached to the job. */
          items?: Array<Record<string, unknown>>;
          /** Operational milestones recorded for the job. */
          milestones?: Array<Record<string, unknown>>;
          /** The timestamp when Detrack created the job. */
          created_at?: string | null;
          [key: string]: unknown;
        };
      };
    };
  }
}
