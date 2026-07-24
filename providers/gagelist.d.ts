import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a manufacturer record in the connected GageList account. */
    "gagelist.create_manufacturer": {
      input: {
        /**
         * The manufacturer name.
         * @minLength 1
         */
        name: string;
        /** The manufacturer address. */
        address?: string;
        /** The manufacturer phone number. */
        phone?: string;
        /** The manufacturer fax number. */
        fax?: string;
        /** The manufacturer website. */
        website?: string;
      };
      output: {
        /** The identifier returned for the created manufacturer. */
        id: number | null;
        /** Whether GageList reported the operation as successful. */
        success: boolean;
        /** The message returned by GageList when present. */
        message: string | null;
        /** The raw object returned by GageList. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a manufacturer record from the connected GageList account. */
    "gagelist.delete_manufacturer": {
      input: {
        /**
         * The GageList record identifier.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The identifier returned for the deleted manufacturer. */
        id: number | null;
        /** Whether GageList reported the operation as successful. */
        success: boolean;
        /** The message returned by GageList when present. */
        message: string | null;
        /** The raw object returned by GageList. */
        raw: Record<string, unknown>;
      };
    };
    /** Get configurable account settings for the connected GageList account. */
    "gagelist.get_account_settings": {
      input: Record<string, never>;
      output: {
        /** Whether GageList reported the operation as successful. */
        success: boolean;
        /** The message returned by GageList when present. */
        message: string | null;
        /** The raw object returned by GageList. */
        settings: Record<string, unknown>;
        /** The raw object returned by GageList. */
        raw: Record<string, unknown>;
      };
    };
    /** Get general status and usage information for the connected GageList account. */
    "gagelist.get_account_status": {
      input: Record<string, never>;
      output: {
        /** Whether GageList reported the operation as successful. */
        success: boolean;
        /** The message returned by GageList when present. */
        message: string | null;
        /** The requested site name returned by GageList. */
        siteName: string | null;
        /** The enterprise name returned by GageList. */
        enterpriseName: string | null;
        /** The role names returned for the connected account. */
        roles: Array<string>;
        /** The raw object returned by GageList. */
        accountStatus: Record<string, unknown>;
        /** The raw object returned by GageList. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one calibration record by identifier from the connected GageList account. */
    "gagelist.get_calibration_record": {
      input: {
        /**
         * The GageList record identifier.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** A normalized GageList calibration record. */
        calibrationRecord: {
          /** The calibration record identifier. */
          id: number | null;
          /** The calibration record number. */
          recordNumber: string | null;
          /** The related gage equipment identifier. */
          equipmentRefId: number | null;
          /** The related equipment serial number. */
          serialNumber: string | null;
          /** The related equipment control number. */
          controlNumber: string | null;
          /** The calibration timestamp. */
          calibrationDate: string | null;
          /** The next calibration due timestamp. */
          nextCalibrationDue: string | null;
          /** The raw object returned by GageList. */
          raw: Record<string, unknown>;
        };
        /** Whether GageList reported the operation as successful. */
        success: boolean;
        /** The message returned by GageList when present. */
        message: string | null;
        /** The raw object returned by GageList. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one gage record by identifier from the connected GageList account. */
    "gagelist.get_gage_record": {
      input: {
        /**
         * The GageList record identifier.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** A normalized GageList gage record. */
        gageRecord: {
          /** The gage record identifier. */
          id: number | null;
          /** The gage serial number. */
          serialNumber: string | null;
          /** The gage control number. */
          controlNumber: string | null;
          /** The gage status. */
          status: string | null;
          /** The gage manufacturer name. */
          manufacturer: string | null;
          /** The gage model. */
          model: string | null;
          /** The next calibration due timestamp. */
          calibrationDueDate: string | null;
          /** The raw object returned by GageList. */
          raw: Record<string, unknown>;
        };
        /** Whether GageList reported the operation as successful. */
        success: boolean;
        /** The message returned by GageList when present. */
        message: string | null;
        /** The raw object returned by GageList. */
        raw: Record<string, unknown>;
      };
    };
    /** List calibration records in the connected GageList account. */
    "gagelist.list_calibration_records": {
      input: {
        /**
         * The zero-based record offset for a GageList list query.
         * @minimum 0
         */
        start?: number;
        /**
         * The number of records to return from GageList.
         * @exclusiveMinimum 0
         */
        recordNumber?: number;
      };
      output: {
        /** The total number of matching calibration records reported by GageList. */
        total: number | null;
        /** The number of calibration records returned in this response. */
        count: number | null;
        /** The calibration records returned by GageList. */
        calibrationRecords: Array<{
          /** The calibration record identifier. */
          id: number | null;
          /** The calibration record number. */
          recordNumber: string | null;
          /** The related gage equipment identifier. */
          equipmentRefId: number | null;
          /** The related equipment serial number. */
          serialNumber: string | null;
          /** The related equipment control number. */
          controlNumber: string | null;
          /** The calibration timestamp. */
          calibrationDate: string | null;
          /** The next calibration due timestamp. */
          nextCalibrationDue: string | null;
          /** The raw object returned by GageList. */
          raw: Record<string, unknown>;
        }>;
        /** Whether GageList reported the operation as successful. */
        success: boolean;
        /** The message returned by GageList when present. */
        message: string | null;
        /** The raw object returned by GageList. */
        raw: Record<string, unknown>;
      };
    };
    /** List gage records in the connected GageList account. */
    "gagelist.list_gage_records": {
      input: {
        /**
         * The zero-based record offset for a GageList list query.
         * @minimum 0
         */
        start?: number;
        /**
         * The number of records to return from GageList.
         * @exclusiveMinimum 0
         */
        recordNumber?: number;
      };
      output: {
        /** The total number of matching gage records reported by GageList. */
        total: number | null;
        /** The number of gage records returned in this response. */
        count: number | null;
        /** The gage records returned by GageList. */
        gageRecords: Array<{
          /** The gage record identifier. */
          id: number | null;
          /** The gage serial number. */
          serialNumber: string | null;
          /** The gage control number. */
          controlNumber: string | null;
          /** The gage status. */
          status: string | null;
          /** The gage manufacturer name. */
          manufacturer: string | null;
          /** The gage model. */
          model: string | null;
          /** The next calibration due timestamp. */
          calibrationDueDate: string | null;
          /** The raw object returned by GageList. */
          raw: Record<string, unknown>;
        }>;
        /** Whether GageList reported the operation as successful. */
        success: boolean;
        /** The message returned by GageList when present. */
        message: string | null;
        /** The raw object returned by GageList. */
        raw: Record<string, unknown>;
      };
    };
    /** List manufacturers configured in the connected GageList account. */
    "gagelist.list_manufacturers": {
      input: Record<string, never>;
      output: {
        /** The total number of matching manufacturers reported by GageList. */
        total: number | null;
        /** The number of manufacturers returned in this response. */
        count: number | null;
        /** The manufacturers returned by GageList. */
        manufacturers: Array<{
          /** The manufacturer identifier. */
          id: number | null;
          /** The manufacturer name. */
          name: string | null;
          /** The manufacturer address. */
          address: string | null;
          /** The manufacturer phone number. */
          phone: string | null;
          /** The manufacturer fax number. */
          fax: string | null;
          /** The manufacturer website. */
          website: string | null;
          /** Whether GageList marks this manufacturer as deleted. */
          isDeleted: boolean | null;
          /** The manufacturer update timestamp returned by GageList. */
          updatedDate: string | null;
          /** The raw object returned by GageList. */
          raw: Record<string, unknown>;
        }>;
        /** Whether GageList reported the operation as successful. */
        success: boolean;
        /** The message returned by GageList when present. */
        message: string | null;
        /** The raw object returned by GageList. */
        raw: Record<string, unknown>;
      };
    };
    /** Update a manufacturer record in the connected GageList account. */
    "gagelist.update_manufacturer": {
      input: {
        /**
         * The GageList record identifier.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * The manufacturer name.
         * @minLength 1
         */
        name: string;
        /** The manufacturer address. */
        address?: string;
        /** The manufacturer phone number. */
        phone?: string;
        /** The manufacturer fax number. */
        fax?: string;
        /** The manufacturer website. */
        website?: string;
      };
      output: {
        /** The identifier returned for the updated manufacturer. */
        id: number | null;
        /** Whether GageList reported the operation as successful. */
        success: boolean;
        /** The message returned by GageList when present. */
        message: string | null;
        /** The raw object returned by GageList. */
        raw: Record<string, unknown>;
      };
    };
  }
}
