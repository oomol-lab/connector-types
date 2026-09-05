import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get current positions for multiple trucks. Only query vehicles that the caller is authorized to track. HaiGuanJia may charge for this request. */
    "hgj.batch_get_truck_positions": {
      input: {
        /**
         * The trucks to query, limited to 100 per Connector request.
         * @minItems 1
         * @maxItems 100
         */
        trucks: Array<{
          /**
           * The truck plate number.
           * @minLength 1
           * @pattern \S
           */
          plateNumber: string;
          /**
           * The HaiGuanJia truck plate color code.
           * @minLength 1
           * @pattern \S
           */
          plateColorCode: string;
        }>;
        /**
         * The optional nearby time range in hours.
         * @exclusiveMinimum 0
         */
        nearbyHours?: number;
        /** A WGS84 longitude and latitude pair. */
        startLocation?: {
          /**
           * The WGS84 longitude.
           * @minimum -180
           * @maximum 180
           */
          longitude: number;
          /**
           * The WGS84 latitude.
           * @minimum -90
           * @maximum 90
           */
          latitude: number;
        };
        /** A WGS84 longitude and latitude pair. */
        endLocation?: {
          /**
           * The WGS84 longitude.
           * @minimum -180
           * @maximum 180
           */
          longitude: number;
          /**
           * The WGS84 latitude.
           * @minimum -90
           * @maximum 90
           */
          latitude: number;
        };
        /**
         * The optional origin county-level area code.
         * @minLength 1
         * @pattern \S
         */
        startAreaCode?: string;
        /**
         * The optional destination county-level area code.
         * @minLength 1
         * @pattern \S
         */
        endAreaCode?: string;
      };
      output: {
        /** The current truck position records. */
        positions: Array<{
          /** The truck sequence number in the batch result. */
          sequenceNumber: number | null;
          /** The truck plate number. */
          plateNumber: string | null;
          /** The truck plate color code. */
          plateColorCode: string | null;
          /** The provider status code for this truck's returned data. */
          dataStatusCode: string | null;
          /** The provider's original 60w longitude value. */
          longitude60w: string | null;
          /** The provider's original 60w latitude value. */
          latitude60w: string | null;
          /** The truck location description. */
          locationDescription: string | null;
          /** The provider-formatted truck location time. */
          locatedAt: string | null;
          /** The truck speed in the provider-defined unit. */
          speed: number | null;
          /** The truck direction in the provider-defined unit. */
          direction: number | null;
          /** The truck mileage in the provider-defined unit. */
          mileage: number | null;
          /** The province containing the truck location. */
          province: string | null;
          /** The city containing the truck location. */
          city: string | null;
          /** The county containing the truck location. */
          county: string | null;
          /** The distance already travelled in the provider-defined unit. */
          travelledDistance: number | null;
          /** The remaining distance in the provider-defined unit. */
          remainingDistance: number | null;
          /** The provider-formatted estimated arrival time. */
          estimatedArrivalAt: string | null;
        }>;
        /**
         * The number of billable consumptions reported by HaiGuanJia for this request, or null when omitted.
         * @minimum 0
         */
        usageCount: number | null;
      };
    };
    /** Bind a Ningbo bill to an explicit vessel schedule. */
    "hgj.bind_ningbo_schedule": {
      input: {
        /**
         * The bill of lading number.
         * @minLength 1
         * @pattern \S
         */
        billNumber: string;
        /**
         * The vessel English name.
         * @minLength 1
         * @pattern \S
         */
        vesselName: string;
        /**
         * The vessel voyage number.
         * @minLength 1
         * @pattern \S
         */
        voyageNumber: string;
        /** The HaiGuanJia import or export marker. */
        orderType: "I" | "E";
        /**
         * The Ningbo terminal code.
         * @minLength 1
         * @pattern \S
         */
        dockCode: string;
        /**
         * The vessel IMO identifier.
         * @minLength 1
         * @pattern \S
         */
        vesselImo: string;
      };
      output: {
        /** Whether HaiGuanJia accepted the schedule binding. */
        bound: boolean;
      };
    };
    /** Bind a Shanghai bill to an explicit HaiGuanJia vessel schedule. */
    "hgj.bind_shanghai_schedule": {
      input: {
        /**
         * The bill of lading number.
         * @minLength 1
         * @pattern \S
         */
        billNumber: string;
        /** The HaiGuanJia import or export marker. */
        orderType: "I" | "E";
        /**
         * The HaiGuanJia Shanghai vessel schedule identifier.
         * @minLength 1
         * @pattern \S
         */
        scheduleId: string;
        /**
         * The vessel English name.
         * @minLength 1
         * @pattern \S
         */
        vesselName: string;
        /**
         * The vessel voyage number.
         * @minLength 1
         * @pattern \S
         */
        voyageNumber: string;
      };
      output: {
        /** Whether HaiGuanJia accepted the schedule binding. */
        bound: boolean;
      };
    };
    /** Cancel EM Close for a full 8000-code house bill. */
    "hgj.cancel_em_manifest_close": {
      input: {
        /** Whether to use HaiGuanJia agency filing or the customer's own Canadian 8000-code channel. */
        channel: "agency" | "customer";
        /**
         * The house bill number including its Canadian 8000 code.
         * @minLength 1
         * @pattern \S
         */
        fullHouseBillNumber: string;
      };
      output: {
        /** Whether HaiGuanJia accepted the EM Close cancellation. */
        completed: boolean;
      };
    };
    /** Check whether an ACI 8000-code and house-bill combination is available. */
    "hgj.check_aci_bill_availability": {
      input: {
        /** Whether to use HaiGuanJia agency filing or the customer's own Canadian 8000-code channel. */
        channel: "agency" | "customer";
        /**
         * The EM/ACI house freight forwarder 8000 code.
         * @minLength 1
         * @pattern \S
         */
        house8000Code: string;
        /**
         * The house bill number without the 8000-code prefix.
         * @minLength 1
         * @pattern \S
         */
        houseBillNumber: string;
      };
      output: {
        /** The provider-defined availability records. */
        records: Array<Record<string, unknown>>;
      };
    };
    /** Check whether an EM 8000-code and house-bill combination is available. */
    "hgj.check_em_bill_availability": {
      input: {
        /** Whether to use HaiGuanJia agency filing or the customer's own Canadian 8000-code channel. */
        channel: "agency" | "customer";
        /**
         * The EM/ACI house freight forwarder 8000 code.
         * @minLength 1
         * @pattern \S
         */
        house8000Code: string;
        /**
         * The house bill number without the 8000-code prefix.
         * @minLength 1
         * @pattern \S
         */
        houseBillNumber: string;
      };
      output: {
        /** The provider-defined availability records. */
        records: Array<Record<string, unknown>>;
      };
    };
    /** Submit EM Close for a full 8000-code house bill. The official page has conflicting free/consumption wording, so Connector treats it as potentially chargeable and never retries automatically. */
    "hgj.close_em_manifest": {
      input: {
        /** Whether to use HaiGuanJia agency filing or the customer's own Canadian 8000-code channel. */
        channel: "agency" | "customer";
        /**
         * The house bill number including its Canadian 8000 code.
         * @minLength 1
         * @pattern \S
         */
        fullHouseBillNumber: string;
        /**
         * The EM Close modification reason code when required.
         * @minLength 1
         * @pattern \S
         */
        reasonCode?: string;
      };
      output: {
        /** Whether HaiGuanJia accepted the EM Close submission. */
        completed: boolean;
      };
    };
    /** Delete an ACI house bill through the selected agency or customer channel. */
    "hgj.delete_aci_manifest": {
      input: {
        /** Whether to use HaiGuanJia agency filing or the customer's own Canadian 8000-code channel. */
        channel: "agency" | "customer";
        /**
         * The house bill number including its Canadian 8000 code.
         * @minLength 1
         * @pattern \S
         */
        fullHouseBillNumber: string;
      };
      output: {
        /** Whether HaiGuanJia accepted the ACI deletion. */
        completed: boolean;
      };
    };
    /** Delete an AFR house bill with the required cancellation reason. */
    "hgj.delete_afr_manifest": {
      input: {
        /**
         * The house bill number to delete.
         * @minLength 1
         * @pattern \S
         */
        houseBillNumber: string;
        /**
         * The AFR cancellation reason.
         * @minLength 1
         * @pattern \S
         */
        reason: string;
      };
      output: {
        /** Whether HaiGuanJia accepted the AFR deletion. */
        deleted: boolean;
      };
    };
    /** Delete an AMS house bill through the selected agency or customer SCAC channel. */
    "hgj.delete_ams_manifest": {
      input: {
        /** Whether to use HaiGuanJia agency sending or the customer's own SCAC channel. */
        channel: "agency" | "customer";
        /**
         * The AMS house bill number to delete.
         * @minLength 1
         * @pattern \S
         */
        houseBillNumber: string;
        /**
         * The house freight forwarder's SCAC code when supplied.
         * @minLength 1
         * @pattern \S
         */
        houseScacCode?: string;
      };
      output: {
        /** Whether HaiGuanJia accepted the AMS deletion. */
        deleted: boolean;
      };
    };
    /** Delete an EM house bill through the selected agency or customer channel. */
    "hgj.delete_em_manifest": {
      input: {
        /** Whether to use HaiGuanJia agency filing or the customer's own Canadian 8000-code channel. */
        channel: "agency" | "customer";
        /**
         * The house bill number including its Canadian 8000 code.
         * @minLength 1
         * @pattern \S
         */
        fullHouseBillNumber: string;
      };
      output: {
        /** Whether HaiGuanJia accepted the EM deletion. */
        completed: boolean;
      };
    };
    /** Delete an ICS2 manifest through the shared endpoint while preserving the selected F14, F15, F16, or F17 product API ID. */
    "hgj.delete_ics2_manifest": {
      input: {
        /** The ICS2 filing message type and corresponding HaiGuanJia product. */
        messageType: "F14" | "F15" | "F16" | "F17";
        /**
         * The HaiGuanJia ICS2 bill identifier.
         * @minLength 1
         * @pattern \S
         */
        billId: string;
      };
      output: {
        /** Whether HaiGuanJia accepted the ICS2 deletion. */
        deleted: boolean;
      };
    };
    /** Delete an ISF-10 AMS bill through the selected agency or customer FILER CODE channel. */
    "hgj.delete_isf10_manifest": {
      input: {
        /** Whether to use HaiGuanJia agency filing or the customer's own FILER CODE channel. */
        channel: "agency" | "customer";
        /**
         * The AMS bill number to delete.
         * @minLength 1
         * @pattern \S
         */
        amsBillNumber: string;
        /**
         * The FILER CODE when supplied for the selected filing channel.
         * @minLength 1
         * @pattern \S
         */
        filerCode?: string;
      };
      output: {
        /** Whether HaiGuanJia accepted the ISF-10 deletion. */
        deleted: boolean;
      };
    };
    /** Delete an ISF-5 AMS bill through the selected agency or customer FILER CODE channel. */
    "hgj.delete_isf5_manifest": {
      input: {
        /** Whether to use HaiGuanJia agency filing or the customer's own FILER CODE channel. */
        channel: "agency" | "customer";
        /**
         * The AMS bill number to delete.
         * @minLength 1
         * @pattern \S
         */
        amsBillNumber: string;
        /**
         * The FILER CODE when supplied for the selected filing channel.
         * @minLength 1
         * @pattern \S
         */
        filerCode?: string;
      };
      output: {
        /** Whether HaiGuanJia accepted the ISF-5 deletion. */
        deleted: boolean;
      };
    };
    /** Delete one or more Qingdao manifest declaration groups and return the declarations that HaiGuanJia could not delete. */
    "hgj.delete_qingdao_manifest": {
      input: {
        /**
         * The manifest deletion groups.
         * @minItems 1
         */
        deletions: Array<{
          /**
           * The HaiGuanJia manifest identifier.
           * @minLength 1
           * @pattern \S
           */
          manifestId: string;
          /**
           * The customs declaration numbers to delete.
           * @minItems 1
           */
          customNoList: Array<string>;
          /**
           * The deletion reasons aligned by index with customNoList.
           * @minItems 1
           */
          manifestDeleteReasonList: Array<string>;
        }>;
      };
      output: {
        /** The customs declaration numbers that were not deleted. */
        failedCustomNumbers: Array<string>;
      };
    };
    /** Delete selected customs declarations from an existing Shanghai manifest. HaiGuanJia charges once per declaration, so Connector never retries this request automatically. */
    "hgj.delete_shanghai_manifest": {
      input: {
        /**
         * The HaiGuanJia manifest identifier.
         * @minLength 1
         * @pattern \S
         */
        manifestId: string;
        /**
         * The customs declaration numbers to delete.
         * @minItems 1
         */
        customNoList: Array<string>;
      };
      output: {
        /** The provider-defined Shanghai manifest result containing the relevant manifest, send, resend, update, or deletion identifiers and timestamps plus the affected customs declaration numbers. */
        result: Record<string, unknown>;
        /**
         * The number of billable consumptions reported by HaiGuanJia for this request, or null when omitted.
         * @minimum 0
         */
        usageCount: number | null;
      };
    };
    /** Get the raw HaiGuanJia AI customs-intake status. Automatic wait semantics are unavailable because the official status enum is not documented. */
    "hgj.get_ai_customs_intake_status": {
      input: {
        /**
         * The unique customer document number.
         * @minLength 1
         * @pattern \S
         */
        customerDocNo: string;
      };
      output: {
        /** The provider-defined result containing billNo, customerDocNo, numeric status, and statusDesc. */
        result: Record<string, unknown>;
      };
    };
    /** Get the current export customs-recognition task state and structured or customs-XML result. */
    "hgj.get_export_customs_recognition_result": {
      input: {
        /**
         * The HaiGuanJia recognition business identifier.
         * @minLength 1
         * @pattern \S
         */
        bizId: string;
        /** The recognition result representation. */
        resultFormat: "structured" | "customs_xml";
      };
      output: {
        /** The normalized recognition task state. */
        state: "running" | "succeeded" | "failed";
        /** The complete provider-defined recognition result, including task flags and either structured declaration data with source coordinates/confidence or customs XML and file name. */
        result: Record<string, unknown>;
      };
    };
    /** Get carrier full-journey data for a subscription previously created by the connected HaiGuanJia account. Use this as a fallback when a callback was not received. */
    "hgj.get_full_journey_tracking": {
      input: {
        /**
         * The HaiGuanJia carrier tracking subscription identifier.
         * @minLength 1
         * @pattern \S
         */
        subscriptionId: string;
      };
      output: {
        /** A normalized HaiGuanJia carrier full-journey tracking result. */
        tracking: {
          /** The HaiGuanJia full-journey data status code. */
          dataStatusCode: string | null;
          /** The carrier code reported by HaiGuanJia. */
          shippingCompanyCode: string | null;
          /** The provider-defined loading, receipt, destination, and delivery location record. */
          billLocation: Record<string, unknown>;
          /** The containers included in the tracked shipment. */
          containers: Array<Record<string, unknown>>;
          /** The provider-defined container milestone groups. */
          containerEvents: Array<Record<string, unknown>>;
          /** The provider-defined vessel schedule and arrival milestone groups. */
          vesselEvents: Array<Record<string, unknown>>;
          /** The provider-defined customs, terminal, arrival-message, and carrier-release milestone groups. */
          documentEvents: Array<Record<string, unknown>>;
          /** The provider-defined route segments for the tracked shipment. */
          routeSegments: Array<Record<string, unknown>>;
          /** The provider-defined subscription type and number that produced this tracking result. */
          subscription: Record<string, unknown>;
        };
        /**
         * The number of billable consumptions reported by HaiGuanJia for this request, or null when omitted.
         * @minimum 0
         */
        usageCount: number | null;
      };
    };
    /** Get the current import customs-recognition task state and structured or customs-XML result. */
    "hgj.get_import_customs_recognition_result": {
      input: {
        /**
         * The HaiGuanJia recognition business identifier.
         * @minLength 1
         * @pattern \S
         */
        bizId: string;
        /** The recognition result representation. */
        resultFormat: "structured" | "customs_xml";
      };
      output: {
        /** The normalized recognition task state. */
        state: "running" | "succeeded" | "failed";
        /** The complete provider-defined recognition result, including task flags and either structured declaration data with source coordinates/confidence or customs XML and file name. */
        result: Record<string, unknown>;
      };
    };
    /** Get the complete new US customs result for a prior HaiGuanJia query, including BOL, air, importer-bond, and in-bond data when present. */
    "hgj.get_new_us_customs": {
      input: {
        /**
         * The non-negative HaiGuanJia customs query identifier.
         * @minLength 1
         * @pattern \S
         */
        queryId: string;
      };
      output: {
        /** The complete provider-defined BOL, air, importer-bond, and in-bond result groups. */
        data: Record<string, unknown>;
      };
    };
    /** Resolve Ningbo master and house bill relationships without requiring the caller to identify whether the supplied bill is a master or house bill. */
    "hgj.get_ningbo_master_house_bills": {
      input: {
        /**
         * A master or house bill number.
         * @minLength 1
         * @pattern \S
         */
        billNumber: string;
        /** The HaiGuanJia import or export marker. */
        orderType?: "I" | "E";
      };
      output: {
        /** The provider-defined relationship containing billNo, customNoList, and orderType. */
        result: Record<string, unknown>;
      };
    };
    /** Get current Ningbo, Shanghai, Shenzhen, or Qingdao container/cargo data. HaiGuanJia automatically subscribes missing data, so this operation may create a billed callback workflow and Connector never retries it automatically. */
    "hgj.get_port_container": {
      input: {
        /** The HaiGuanJia port whose container, cargo, or schedule data should be used. */
        port: "ningbo" | "shanghai" | "shenzhen" | "qingdao";
        /**
         * The bill of lading number used by Ningbo, Shanghai, or Qingdao.
         * @minLength 1
         * @pattern \S
         */
        billNumber?: string;
        /**
         * The booking number used by Shenzhen.
         * @minLength 1
         * @pattern \S
         */
        bookingNumber?: string;
        /**
         * The container number required by Shenzhen queries.
         * @minLength 1
         * @pattern \S
         */
        containerNumber?: string;
        /** The HaiGuanJia import or export marker. */
        orderType?: "I" | "E";
        /**
         * The Qingdao station code.
         * @minLength 1
         * @pattern \S
         */
        stationCode?: string;
        /** Whether HaiGuanJia should also send its own WeChat notification. */
        receiveWechatPush?: boolean;
        /**
         * The optional vessel English name supported by Ningbo and Shanghai.
         * @minLength 1
         * @pattern \S
         */
        vesselName?: string;
        /**
         * The optional vessel voyage number supported by Ningbo.
         * @minLength 1
         * @pattern \S
         */
        voyageNumber?: string;
        /**
         * The integration-side correlation identifier sent in the unencrypted HaiGuanJia envelope.
         * @minLength 1
         * @pattern \S
         */
        jobNumber?: string;
      };
      output: {
        /** The complete provider-defined port records. */
        records: Array<Record<string, unknown>>;
        /** The integration-side correlation identifier returned by HaiGuanJia, or null when omitted. */
        jobNumber: string | null;
      };
    };
    /** Get current Ningbo, Shanghai, Shenzhen, or Qingdao vessel schedule data. HaiGuanJia automatically subscribes missing or expired schedules, so Connector never retries this request automatically. */
    "hgj.get_port_schedule": {
      input: {
        /** The HaiGuanJia port whose container, cargo, or schedule data should be used. */
        port: "ningbo" | "shanghai" | "shenzhen" | "qingdao";
        /**
         * The vessel English name.
         * @minLength 1
         * @pattern \S
         */
        vesselName: string;
        /**
         * The vessel voyage number.
         * @minLength 1
         * @pattern \S
         */
        voyageNumber: string;
        /** The HaiGuanJia import or export marker. */
        orderType?: "I" | "E";
        /**
         * The integration-side correlation identifier sent in the unencrypted HaiGuanJia envelope.
         * @minLength 1
         * @pattern \S
         */
        jobNumber?: string;
      };
      output: {
        /** The complete provider-defined port records. */
        records: Array<Record<string, unknown>>;
        /** The integration-side correlation identifier returned by HaiGuanJia, or null when omitted. */
        jobNumber: string | null;
      };
    };
    /** Get the Qingdao shipping agent for a bill, carrier, vessel, and voyage. */
    "hgj.get_qingdao_shipping_agent": {
      input: {
        /**
         * The bill of lading number.
         * @minLength 1
         * @pattern \S
         */
        billNumber: string;
        /**
         * The carrier code.
         * @minLength 1
         * @pattern \S
         */
        shippingCompanyCode: string;
        /**
         * The vessel English name.
         * @minLength 1
         * @pattern \S
         */
        vesselName: string;
        /**
         * The vessel voyage number.
         * @minLength 1
         * @pattern \S
         */
        voyageNumber: string;
      };
      output: {
        /** The provider-defined shipAgentName and shipCompanyCode result. */
        result: Record<string, unknown>;
      };
    };
    /** Get the receipt status for a Shanghai manifest deletion submitted through the connected HaiGuanJia account. */
    "hgj.get_shanghai_manifest_deletion_status": {
      input: {
        /**
         * The HaiGuanJia manifest deletion identifier.
         * @minLength 1
         * @pattern \S
         */
        manifestDeleteId: string;
      };
      output: {
        /** A Shanghai manifest update or deletion receipt containing the operation and manifest identifiers, bill and vessel context, affected customs declarations, receipt status, timestamps, and summary. */
        receipt: Record<string, unknown>;
      };
    };
    /** Get send receipts for a customs declaration submitted through the connected HaiGuanJia account. */
    "hgj.get_shanghai_manifest_status": {
      input: {
        /**
         * The customs declaration number.
         * @minLength 1
         * @pattern \S
         */
        customNo: string;
      };
      output: {
        /** The matching manifest send receipts. */
        receipts: Array<Record<string, unknown>>;
      };
    };
    /** Get the receipt status for a Shanghai manifest update submitted through the connected HaiGuanJia account. */
    "hgj.get_shanghai_manifest_update_status": {
      input: {
        /**
         * The HaiGuanJia manifest update identifier.
         * @minLength 1
         * @pattern \S
         */
        manifestModifyId: string;
      };
      output: {
        /** A Shanghai manifest update or deletion receipt containing the operation and manifest identifiers, bill and vessel context, affected customs declarations, receipt status, timestamps, and summary. */
        receipt: Record<string, unknown>;
      };
    };
    /** Query Shenzhen or Nansha vessel schedules using the selected product API ID and the shared official endpoint. */
    "hgj.get_shenzhen_nansha_schedule": {
      input: {
        /** The product and port used for the query. */
        port: "shenzhen" | "nansha";
        /**
         * The optional vessel IMO identifier.
         * @minLength 1
         * @pattern \S
         */
        vesselImo?: string;
        /**
         * The port five-character code.
         * @minLength 1
         * @pattern \S
         */
        portNameCode: string;
        /**
         * The terminal code.
         * @minLength 1
         * @pattern \S
         */
        dockCode: string;
        /**
         * The vessel name.
         * @minLength 1
         * @pattern \S
         */
        vesselName: string;
        /**
         * The vessel voyage number.
         * @minLength 1
         * @pattern \S
         */
        voyageNumber: string;
      };
      output: {
        /** The provider-defined vessel schedule records. */
        schedules: Array<Record<string, unknown>>;
      };
    };
    /** Get the latest HaiGuanJia position and identity data for a vessel. */
    "hgj.get_ship_position": {
      input: {
        /**
         * The MMSI identifier of the vessel to query.
         * @minLength 1
         * @pattern \S
         */
        shipMmsi: string;
      };
      output: {
        /** A normalized HaiGuanJia vessel position record. */
        ship: {
          /** The vessel MMSI identifier. */
          mmsi: string | null;
          /** The vessel IMO identifier. */
          imo: string | null;
          /** The vessel English name. */
          englishName: string | null;
          /** The vessel radio call sign. */
          callSign: string | null;
          /** The vessel length in the provider-defined unit. */
          length: number | null;
          /** The vessel width in the provider-defined unit. */
          width: number | null;
          /** The vessel port-side distance in the provider-defined unit. */
          portDistance: number | null;
          /** The vessel stern distance in the provider-defined unit. */
          sternDistance: number | null;
          /** The vessel draught in the provider-defined unit. */
          draught: number | null;
          /** The destination port name. */
          destination: string | null;
          /** The destination port code. */
          destinationPortCode: string | null;
          /** The provider-formatted estimated arrival time. */
          estimatedArrivalAt: string | null;
          /** The vessel sailing status code. */
          sailingStatusCode: string | null;
          /** The vessel sailing status label. */
          sailingStatus: string | null;
          /** The vessel latitude as returned by HaiGuanJia. */
          latitude: string | null;
          /** The vessel longitude as returned by HaiGuanJia. */
          longitude: string | null;
          /** The vessel heading in the provider-defined unit. */
          heading: number | null;
          /** The vessel course over ground in the provider-defined unit. */
          course: number | null;
          /** The vessel speed in the provider-defined unit. */
          speed: number | null;
          /** The vessel rate of turn in the provider-defined unit. */
          turnRate: number | null;
          /** The provider-formatted vessel position update time. */
          updatedAt: string | null;
        };
      };
    };
    /** List candidate Shanghai shipping agent names for a bill, carrier, vessel, and voyage. HaiGuanJia documents the result as reference data only. */
    "hgj.list_shanghai_shipping_agents": {
      input: {
        /**
         * The master bill of lading number.
         * @minLength 1
         * @pattern \S
         */
        mainBillNo: string;
        /**
         * The carrier code.
         * @minLength 1
         * @pattern \S
         */
        shipCompanyCode: string;
        /**
         * The vessel English name.
         * @minLength 1
         * @pattern \S
         */
        shipEnName: string;
        /**
         * The vessel voyage number.
         * @minLength 1
         * @pattern \S
         */
        shipVoyNo: string;
      };
      output: {
        /** The candidate shipping agent names. */
        shippingAgentNames: Array<string>;
      };
    };
    /** List HaiGuanJia track points for a previously subscribed vessel within a time range. */
    "hgj.list_ship_track_points": {
      input: {
        /**
         * The MMSI identifier of the vessel to query.
         * @minLength 1
         * @pattern \S
         */
        shipMmsi: string;
        /**
         * A HaiGuanJia date-time value in yyyyMMddHHmmss format.
         * @minLength 14
         * @maxLength 14
         */
        startTime: string;
        /**
         * A HaiGuanJia date-time value in yyyyMMddHHmmss format.
         * @minLength 14
         * @maxLength 14
         */
        endTime: string;
      };
      output: {
        /** The vessel track points. */
        trackPoints: Array<{
          /** The vessel MMSI identifier. */
          mmsi: string | null;
          /** The vessel IMO identifier. */
          imo: string | null;
          /** The vessel English name. */
          englishName: string | null;
          /** The vessel radio call sign. */
          callSign: string | null;
          /** The vessel length in the provider-defined unit. */
          length: number | null;
          /** The vessel width in the provider-defined unit. */
          width: number | null;
          /** The vessel port-side distance in the provider-defined unit. */
          portDistance: number | null;
          /** The vessel stern distance in the provider-defined unit. */
          sternDistance: number | null;
          /** The vessel draught in the provider-defined unit. */
          draught: number | null;
          /** The destination port name. */
          destination: string | null;
          /** The destination port code. */
          destinationPortCode: string | null;
          /** The provider-formatted estimated arrival time. */
          estimatedArrivalAt: string | null;
          /** The vessel sailing status code. */
          sailingStatusCode: string | null;
          /** The vessel sailing status label. */
          sailingStatus: string | null;
          /** The vessel latitude as returned by HaiGuanJia. */
          latitude: string | null;
          /** The vessel longitude as returned by HaiGuanJia. */
          longitude: string | null;
          /** The vessel heading in the provider-defined unit. */
          heading: number | null;
          /** The vessel course over ground in the provider-defined unit. */
          course: number | null;
          /** The vessel speed in the provider-defined unit. */
          speed: number | null;
          /** The vessel rate of turn in the provider-defined unit. */
          turnRate: number | null;
          /** The provider-formatted vessel position update time. */
          updatedAt: string | null;
          /** The provider-formatted track point creation time. */
          createdAt: string | null;
        }>;
      };
    };
    /** List a truck's historical track and parking events. Only query vehicles that the caller is authorized to track. HaiGuanJia documents this query as chargeable on every request. */
    "hgj.list_truck_track_points": {
      input: {
        /**
         * The truck plate number.
         * @minLength 1
         * @pattern \S
         */
        plateNumber: string;
        /**
         * The HaiGuanJia truck plate color code.
         * @minLength 1
         * @pattern \S
         */
        plateColorCode: string;
        /**
         * A HaiGuanJia date-time value in yyyyMMddHHmmss format.
         * @minLength 14
         * @maxLength 14
         */
        startTime: string;
        /**
         * A HaiGuanJia date-time value in yyyyMMddHHmmss format.
         * @minLength 14
         * @maxLength 14
         */
        endTime: string;
        /**
         * The optional parking duration threshold in the provider-defined unit.
         * @minimum 0
         */
        parkingDuration?: number;
      };
      output: {
        /**
         * The number of billable consumptions reported by HaiGuanJia for this request, or null when omitted.
         * @minimum 0
         */
        usageCount: number | null;
        /** The historical truck track points. */
        trackPoints: Array<{
          /** The provider's original 60w longitude value. */
          longitude60w: string | null;
          /** The provider's original 60w latitude value. */
          latitude60w: string | null;
          /** The provider-formatted truck location time. */
          locatedAt: string | null;
          /** The truck speed in the provider-defined unit. */
          speed: number | null;
          /** The truck direction in the provider-defined unit. */
          direction: number | null;
          /** The truck mileage in the provider-defined unit. */
          mileage: number | null;
          /** The truck altitude in the provider-defined unit. */
          altitude: number | null;
        }>;
        /** The truck parking events. */
        parkingEvents: Array<{
          /** The parking location description. */
          address: string | null;
          /** The provider-formatted parking start time. */
          startedAt: string | null;
          /** The provider-formatted parking end time. */
          endedAt: string | null;
          /** The provider's original 60w parking latitude value. */
          latitude60w: string | null;
          /** The provider's original 60w parking longitude value. */
          longitude60w: string | null;
          /** The parking duration in the provider-defined unit. */
          duration: number | null;
        }>;
        /** The number of parking events reported by HaiGuanJia. */
        parkingCount: number | null;
        /** The total mileage in the provider-defined unit. */
        totalMileage: number | null;
      };
    };
    /** Reallocate a Qingdao manifest to another vessel and voyage. The official page has conflicting billing labels, so Connector treats it as potentially chargeable and never retries automatically. */
    "hgj.reallocate_qingdao_manifest": {
      input: {
        /**
         * The HaiGuanJia manifest identifier.
         * @minLength 1
         * @pattern \S
         */
        manifestId: string;
        /**
         * The optional bill of lading number.
         * @minLength 1
         * @pattern \S
         */
        billNumber?: string;
        /**
         * The replacement vessel English name.
         * @minLength 1
         * @pattern \S
         */
        vesselName: string;
        /**
         * The replacement voyage number.
         * @minLength 1
         * @pattern \S
         */
        voyageNumber: string;
      };
      output: {
        /** The provider-defined Qingdao result containing manifest, bill, customs declaration, and container identifiers. */
        result: Record<string, unknown>;
        /** The HaiGuanJia coin amount consumed by the request, or null when omitted. */
        seaCoinCount: number | null;
      };
    };
    /** Recognize one or more documents with a promptCode maintained in HaiGuanJia's external Storybrooke console. This business-side billed request requires the connection's separate secondaryApiKey and is never retried automatically. */
    "hgj.recognize_custom_document": {
      input: {
        /** The official HaiGuanJia product code supported by custom recognition. */
        productCode: "product_cangdan" | "product_qd_cangdan" | "product_tc_original_cangdan" | "product_tc_cangdan" | "product_vgm" | "product_ams" | "product_isf" | "product_afr" | "product_aci:ACI" | "product_aci:EM" | "product_ics" | "product_mpci" | "product_storybrooke_manifest:CNTNJ" | "product_storybrooke_manifest:CNSNZ" | "product_storybrooke_manifest:CNNSA";
        /**
         * The caller-defined non-negative business identifier encoded as a safe JSON integer for HaiGuanJia.
         * @minLength 1
         * @pattern \S
         */
        businessId: string;
        /**
         * The documents to recognize.
         * @minItems 1
         */
        attachments: Array<{
          /**
           * The attachment file name including its extension.
           * @minLength 1
           * @pattern \S
           */
          attachmentName: string;
          /**
           * A publicly reachable attachment URL that HaiGuanJia should fetch. Provide exactly one attachment source.
           * @format uri
           */
          attachmentUrl?: string;
          /**
           * The Base64-encoded attachment bytes. Provide exactly one attachment source and keep the complete request within Connector's request budget.
           * @minLength 1
           * @pattern \S
           */
          attachmentBase64?: string;
        }>;
        /**
         * The custom prompt code maintained for this account in HaiGuanJia's Storybrooke console.
         * @minLength 1
         * @pattern \S
         */
        promptCode: string;
      };
      output: {
        /** The complete provider-defined JSON result for the selected product or custom prompt. */
        result: unknown;
        /**
         * The number of billable consumptions reported by HaiGuanJia for this request, or null when omitted.
         * @minimum 0
         */
        usageCount: number | null;
      };
    };
    /** Recognize one or more documents with a fixed HaiGuanJia product template. This business-side billed request requires the connection's separate secondaryApiKey and is never retried automatically. */
    "hgj.recognize_document": {
      input: {
        /** The official HaiGuanJia document product code that determines the recognition contract. */
        productCode: "product_cangdan" | "product_qd_cangdan" | "product_tc_original_cangdan" | "product_tc_cangdan" | "product_vgm" | "product_ams" | "product_isf" | "product_afr" | "product_aci:ACI" | "product_aci:EM" | "product_ics" | "product_mpci" | "product_ams_mexico" | "product_booking" | "product_exchange_platform" | "product_storybrooke_manifest:CNTNJ" | "product_storybrooke_manifest:CNSNZ" | "product_storybrooke_manifest:CNNSA";
        /**
         * The caller-defined non-negative business identifier encoded as a safe JSON integer for HaiGuanJia.
         * @minLength 1
         * @pattern \S
         */
        businessId: string;
        /**
         * The documents to recognize.
         * @minItems 1
         */
        attachments: Array<{
          /**
           * The attachment file name including its extension.
           * @minLength 1
           * @pattern \S
           */
          attachmentName: string;
          /**
           * A publicly reachable attachment URL that HaiGuanJia should fetch. Provide exactly one attachment source.
           * @format uri
           */
          attachmentUrl?: string;
          /**
           * The Base64-encoded attachment bytes. Provide exactly one attachment source and keep the complete request within Connector's request budget.
           * @minLength 1
           * @pattern \S
           */
          attachmentBase64?: string;
        }>;
      };
      output: {
        /** The complete provider-defined JSON result for the selected product or custom prompt. */
        result: unknown;
        /**
         * The number of billable consumptions reported by HaiGuanJia for this request, or null when omitted.
         * @minimum 0
         */
        usageCount: number | null;
      };
    };
    /** Resend the rejected original Qingdao manifest. Connector sends the operation once and never retries automatically. */
    "hgj.resend_qingdao_manifest": {
      input: {
        /** The official Qingdao update or resend header. It includes manifestId plus the documented Qingdao manifest header fields and their conditional payment, frozen-cargo, dangerous-goods, and entrustment values. */
        manifestSendRecord: Record<string, unknown>;
        /** The official Qingdao shipper, consignee, and notify-party names, addresses, country codes, and telephone numbers. */
        manifestAddrList: Record<string, unknown>;
        /**
         * The Qingdao update or resend cargo records.
         * @minItems 1
         */
        manifestGoodsDetailList: Array<Record<string, unknown>>;
      };
      output: {
        /** The provider-defined Qingdao result containing manifest, bill, customs declaration, and container identifiers. */
        result: Record<string, unknown>;
        /** The HaiGuanJia coin amount consumed by the request, or null when omitted. */
        seaCoinCount: number | null;
      };
    };
    /** Resend an original Shanghai manifest that HaiGuanJia has rejected. This endpoint only accepts the rejected original manifest and Connector never retries it automatically. */
    "hgj.resend_shanghai_manifest": {
      input: {
        /** The official Shanghai manifest header for update or resend. Required fields are manifestId, shipCompanyCode, goodsTypeCode, paymentModeCode, billTypeCode, portOfDischargeCode, portOfShippingCode, and portOfDestinationCode. paymentPortCode is conditionally required and entrustInfo is optional. */
        manifestSendRecord: Record<string, unknown>;
        /** The official Shanghai manifest party record. It requires the name, address, country code, and telephone fields for shipper, consignee, and notify party. */
        manifestAddrList: Record<string, unknown>;
        /**
         * The Shanghai manifest cargo records included in the operation.
         * @minItems 1
         */
        manifestGoodsDetailList: Array<Record<string, unknown>>;
      };
      output: {
        /** The provider-defined Shanghai manifest result containing the relevant manifest, send, resend, update, or deletion identifiers and timestamps plus the affected customs declaration numbers. */
        result: Record<string, unknown>;
        /**
         * The number of billable consumptions reported by HaiGuanJia for this request, or null when omitted.
         * @minimum 0
         */
        usageCount: number | null;
      };
    };
    /** Send an ACI manifest through agency filing or the customer's own 8000-code channel. Each house bill is chargeable and Connector never retries automatically. */
    "hgj.send_aci_manifest": {
      input: {
        /** Whether to use HaiGuanJia agency filing or the customer's own Canadian 8000-code channel. */
        channel: "agency" | "customer";
        /** The complete official ACI payload with the 8000-code and house/master bills, delivery place, carrier 9000 code, delivery type, shipper, consignee, cargo, containers, weights, and optional dangerous-goods records. */
        manifest: Record<string, unknown>;
      };
      output: {
        /** Whether HaiGuanJia accepted the ACI manifest. */
        sent: boolean;
        /**
         * The number of billable consumptions reported by HaiGuanJia for this request, or null when omitted.
         * @minimum 0
         */
        usageCount: number | null;
      };
    };
    /** Send an AFR manifest. HaiGuanJia charges once per house bill, so Connector never retries automatically. */
    "hgj.send_afr_manifest": {
      input: {
        /**
         * The carrier's Japan customs registration code.
         * @minLength 1
         * @pattern \S
         */
        shippingCompanyJapanCustomsCode: string;
        /**
         * The master bill of lading number.
         * @minLength 1
         * @pattern \S
         */
        masterBillNumber: string;
        /**
         * The vessel English name.
         * @minLength 1
         * @pattern \S
         */
        vesselName: string;
        /**
         * The vessel call sign.
         * @minLength 1
         * @pattern \S
         */
        vesselCallSign: string;
        /**
         * The vessel flag-country code.
         * @minLength 1
         * @pattern \S
         */
        vesselFlagCountryCode: string;
        /**
         * The vessel voyage number.
         * @minLength 1
         * @pattern \S
         */
        voyageNumber: string;
        /**
         * The loading port code.
         * @minLength 1
         * @pattern \S
         */
        loadingPortCode: string;
        /**
         * The provider-formatted estimated departure time.
         * @minLength 1
         * @pattern \S
         */
        estimatedDepartureAt: string;
        /**
         * The discharge port code.
         * @minLength 1
         * @pattern \S
         */
        dischargePortCode: string;
        /**
         * The provider-formatted estimated arrival date.
         * @minLength 1
         * @pattern \S
         */
        estimatedArrivalDate: string;
        /**
         * The delivery place code.
         * @minLength 1
         * @pattern \S
         */
        deliveryPlaceCode: string;
        /**
         * The AFR house bills.
         * @minItems 1
         */
        houseBills: Array<{
          /** The house-bill sequence number. */
          billHouseNumber: number;
          /**
           * The house bill of lading number.
           * @minLength 1
           * @pattern \S
           */
          billHouseNo: string;
          /**
           * The shipper name.
           * @minLength 1
           * @pattern \S
           */
          shipperName: string;
          /**
           * The shipper address.
           * @minLength 1
           * @pattern \S
           */
          shipperAddress: string;
          /**
           * The shipper telephone number.
           * @minLength 1
           * @pattern \S
           */
          shipperTelephone: string;
          /**
           * The shipper country code.
           * @minLength 1
           * @pattern \S
           */
          shipperCountryCode: string;
          /**
           * The consignee name.
           * @minLength 1
           * @pattern \S
           */
          consigneeName: string;
          /**
           * The consignee address.
           * @minLength 1
           * @pattern \S
           */
          consigneeAddress: string;
          /**
           * The consignee telephone number.
           * @minLength 1
           * @pattern \S
           */
          consigneeTelephone: string;
          /**
           * The consignee country code.
           * @minLength 1
           * @pattern \S
           */
          consigneeCountryCode: string;
          /**
           * The notify-party name.
           * @minLength 1
           * @pattern \S
           */
          notifyName: string;
          /**
           * The notify-party address.
           * @minLength 1
           * @pattern \S
           */
          notifyAddress: string;
          /**
           * The notify-party telephone number.
           * @minLength 1
           * @pattern \S
           */
          notifyTelephone: string;
          /**
           * The notify-party country code.
           * @minLength 1
           * @pattern \S
           */
          notifyCountryCode: string;
          /**
           * The required AFR container and cargo records.
           * @minItems 1
           */
          containersList: Array<{
            /** The container sequence number. */
            boxNumber: number;
            /**
             * The container number.
             * @minLength 1
             * @pattern \S
             */
            boxNo: string;
            /**
             * The container seal number.
             * @minLength 1
             * @pattern \S
             */
            boxSealNo: string;
            /**
             * The container type code.
             * @minLength 1
             * @pattern \S
             */
            boxTypeCode: string;
            /**
             * The carrier-owned or shipper-owned container marker.
             * @minLength 1
             * @pattern \S
             */
            boxOwnerSign: string;
            /**
             * The cargo customs HS code.
             * @minLength 1
             * @pattern \S
             */
            goodsHSCode: string;
            /**
             * The cargo English product name.
             * @minLength 1
             * @pattern \S
             */
            goodsProductEnName: string;
            /**
             * The cargo marks and numbers.
             * @minLength 1
             * @pattern \S
             */
            goodsMarks: string;
            /** The total cargo package count. */
            goodsTotalNumber: number;
            /**
             * The cargo package type code.
             * @minLength 1
             * @pattern \S
             */
            goodsPackageTypeCode: string;
            /** The cargo gross weight. */
            goodsGrossWeight: number;
            /** The cargo volume. */
            goodsVolume: number;
            /** The optional dangerous-goods records. */
            dangersList?: Array<{
              /** The dangerous-goods record sequence number. */
              dangerNumber?: number;
              /**
               * The dangerous-goods classification.
               * @minLength 1
               * @pattern \S
               */
              dangerType?: string;
              /**
               * The United Nations dangerous-goods code.
               * @minLength 1
               * @pattern \S
               */
              dangerUnCode?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
      output: {
        /** Whether HaiGuanJia accepted the AFR manifest. */
        sent: boolean;
        /**
         * The number of billable consumptions reported by HaiGuanJia for this request, or null when omitted.
         * @minimum 0
         */
        usageCount: number | null;
      };
    };
    /** Send an AMS manifest through HaiGuanJia agency service or the customer's own SCAC channel. Each house bill is chargeable and Connector never retries automatically. */
    "hgj.send_ams_manifest": {
      input: {
        /** Whether to use HaiGuanJia agency sending or the customer's own SCAC channel. */
        channel: "agency" | "customer";
        /** The complete official AMS payload, including SCAC/carrier and master-bill fields, vessel and voyage, delivery type, US customs port codes and locations, departure/arrival dates, house bills, parties, containers, cargo, and optional dangerous-goods records. */
        manifest: Record<string, unknown>;
      };
      output: {
        /** Whether HaiGuanJia accepted the AMS manifest. */
        sent: boolean;
        /**
         * The number of billable consumptions reported by HaiGuanJia for this request, or null when omitted.
         * @minimum 0
         */
        usageCount: number | null;
      };
    };
    /** Send an EM manifest through agency filing or the customer's own 8000-code channel. Each house bill is chargeable and Connector never retries automatically. */
    "hgj.send_em_manifest": {
      input: {
        /** Whether to use HaiGuanJia agency filing or the customer's own Canadian 8000-code channel. */
        channel: "agency" | "customer";
        /** The complete official EM payload with the 8000-code and house/master bills, previous bill, Canadian destination/discharge customs and warehouse codes, delivery mode/type, weight and volume, dangerous-goods contacts, shipper, consignee, consolidation location, cargo, and optional SNP records. Updates may include EMModifyReasonCode. */
        manifest: Record<string, unknown>;
      };
      output: {
        /** Whether HaiGuanJia accepted the EM manifest. */
        sent: boolean;
        /**
         * The number of billable consumptions reported by HaiGuanJia for this request, or null when omitted.
         * @minimum 0
         */
        usageCount: number | null;
      };
    };
    /** Send an ICS2 F14, F15, F16, or F17 manifest. HaiGuanJia bills the submission on the business side, so Connector never retries automatically. */
    "hgj.send_ics2_manifest": {
      input: {
        /** The ICS2 filing message type and corresponding HaiGuanJia product. */
        messageType: "F14" | "F15" | "F16" | "F17";
        /** The complete official payload for the selected ICS2 message type. F14 includes parties and container cargo; F15 adds buyer/seller parties; F16 focuses on master/house bill buyer/seller data; F17 includes delivery type, EORI parties, and buyer/seller data. Update payloads include billId. */
        manifest: Record<string, unknown>;
      };
      output: {
        /**
         * The HaiGuanJia ICS2 bill identifier.
         * @minLength 1
         * @pattern \S
         */
        billId: string;
        /** The HaiGuanJia coin amount consumed by the request, or null when omitted. */
        seaCoinCount: number | null;
      };
    };
    /** Send an ISF-10 manifest through HaiGuanJia agency filing or the customer's own FILER CODE channel. Each AMS bill is chargeable and Connector never retries automatically. */
    "hgj.send_isf10_manifest": {
      input: {
        /** Whether to use HaiGuanJia agency filing or the customer's own FILER CODE channel. */
        channel: "agency" | "customer";
        /** The complete official ISF-10 payload with optional filerCode, cargo and bond types, conditional bond/importer/consignee identifiers, seller, buyer, delivery, manufacturer, loading and consolidator companies, AMS bill list, and cargo list. Preserve the official buyerCompanyrCity spelling. */
        manifest: Record<string, unknown>;
      };
      output: {
        /** Whether HaiGuanJia accepted the ISF-10 manifest. */
        sent: boolean;
        /**
         * The number of billable consumptions reported by HaiGuanJia for this request, or null when omitted.
         * @minimum 0
         */
        usageCount: number | null;
      };
    };
    /** Send an ISF-5 manifest through HaiGuanJia agency filing or the customer's own FILER CODE channel. Each AMS bill is chargeable and Connector never retries automatically. */
    "hgj.send_isf5_manifest": {
      input: {
        /** Whether to use HaiGuanJia agency filing or the customer's own FILER CODE channel. */
        channel: "agency" | "customer";
        /** The complete official ISF-5 payload with optional filerCode, discharge and delivery locations, delivery company, booking party, AMS bill list, and cargo list. */
        manifest: Record<string, unknown>;
      };
      output: {
        /** Whether HaiGuanJia accepted the ISF-5 manifest. */
        sent: boolean;
        /**
         * The number of billable consumptions reported by HaiGuanJia for this request, or null when omitted.
         * @minimum 0
         */
        usageCount: number | null;
      };
    };
    /** Send a complete Nansha manifest. HaiGuanJia documents the request as chargeable, so Connector never retries automatically. */
    "hgj.send_nansha_manifest": {
      input: {
        /** Whether the submitted manifest contains customs inspection data. */
        containInspectionIndicator: boolean;
        /** The port-specific official manifest header, including bill, vessel, carrier, port, payment, cargo, VGM-consent, customs, and conditional refrigerated or dangerous-goods fields documented for the selected product. */
        manifestSendRecord: Record<string, unknown>;
        /** The port-specific official shipper, consignee, and notify-party identity, address, country, contact, company, and AEO fields. */
        manifestAddrList: Record<string, unknown>;
        /**
         * The port-specific customs declaration and container cargo records.
         * @minItems 1
         */
        manifestGoodsDetailList: Array<Record<string, unknown>>;
      };
      output: {
        /** The provider-defined manifest result containing the HaiGuanJia manifest identifier and any additional operation data. */
        result: Record<string, unknown>;
        /**
         * The number of billable consumptions reported by HaiGuanJia for this request, or null when omitted.
         * @minimum 0
         */
        usageCount: number | null;
        /** The HaiGuanJia coin amount consumed by the request, or null when omitted. */
        seaCoinCount: number | null;
      };
    };
    /** Send a Qingdao manifest using HaiGuanJia coins. The request is chargeable and Connector never retries it automatically. */
    "hgj.send_qingdao_manifest": {
      input: {
        /** The official Qingdao manifest header. It requires billNo, billOriginalNumber, billTypeCode, destination and discharge port codes, goodsTypeCode, paymentModeCode, placeOfReceiptCode, shipCompanyCode, shipAgentCode, placeOfIssueBillCode, deliveryItem, shipEnName, and shipVoyNo; payment, frozen-cargo, dangerous-goods, terminal, departure-date, and entrustment fields follow the documented conditional rules. */
        manifestSendRecord: Record<string, unknown>;
        /** The official Qingdao shipper, consignee, and notify-party names, addresses, country codes, and telephone numbers. */
        manifestAddrList: Record<string, unknown>;
        /**
         * The Qingdao manifest cargo records.
         * @minItems 1
         */
        manifestGoodsDetailList: Array<Record<string, unknown>>;
      };
      output: {
        /** The provider-defined Qingdao result containing manifest, bill, customs declaration, and container identifiers. */
        result: Record<string, unknown>;
        /** The HaiGuanJia coin amount consumed by the request, or null when omitted. */
        seaCoinCount: number | null;
      };
    };
    /** Send a complete Shanghai port manifest through HaiGuanJia. HaiGuanJia charges once per customs declaration number, so Connector never retries this request automatically. */
    "hgj.send_shanghai_manifest": {
      input: {
        /** The official HaiGuanJia Shanghai manifest header. Required fields are billNo, shipCompanyCode, goodsTypeCode, paymentModeCode, billTypeCode, shipEnName, shipVoyNo, shipAgentName, portOfDischargeCode, portOfShippingCode, and portOfDestinationCode. paymentPortCode is conditionally required and entrustInfo is optional. */
        manifestSendRecord: Record<string, unknown>;
        /** The official Shanghai manifest party record. It requires the name, address, country code, and telephone fields for shipper, consignee, and notify party. */
        manifestAddrList: Record<string, unknown>;
        /**
         * The Shanghai manifest cargo records.
         * @minItems 1
         */
        manifestGoodsDetailList: Array<Record<string, unknown>>;
      };
      output: {
        /** The provider-defined Shanghai manifest result containing the relevant manifest, send, resend, update, or deletion identifiers and timestamps plus the affected customs declaration numbers. */
        result: Record<string, unknown>;
        /**
         * The number of billable consumptions reported by HaiGuanJia for this request, or null when omitted.
         * @minimum 0
         */
        usageCount: number | null;
      };
    };
    /** Send a complete Shenzhen manifest. HaiGuanJia documents the request as chargeable, so Connector never retries automatically. */
    "hgj.send_shenzhen_manifest": {
      input: {
        /** Whether the submitted manifest contains customs inspection data. */
        containInspectionIndicator: boolean;
        /** The port-specific official manifest header, including bill, vessel, carrier, port, payment, cargo, VGM-consent, customs, and conditional refrigerated or dangerous-goods fields documented for the selected product. */
        manifestSendRecord: Record<string, unknown>;
        /** The port-specific official shipper, consignee, and notify-party identity, address, country, contact, company, and AEO fields. */
        manifestAddrList: Record<string, unknown>;
        /**
         * The port-specific customs declaration and container cargo records.
         * @minItems 1
         */
        manifestGoodsDetailList: Array<Record<string, unknown>>;
      };
      output: {
        /** The provider-defined manifest result containing the HaiGuanJia manifest identifier and any additional operation data. */
        result: Record<string, unknown>;
        /**
         * The number of billable consumptions reported by HaiGuanJia for this request, or null when omitted.
         * @minimum 0
         */
        usageCount: number | null;
        /** The HaiGuanJia coin amount consumed by the request, or null when omitted. */
        seaCoinCount: number | null;
      };
    };
    /** Send a complete Tianjin manifest including VGM and attachments. The workflow is chargeable, so Connector never retries automatically. */
    "hgj.send_tianjin_manifest": {
      input: {
        /** The port-specific official manifest header, including bill, vessel, carrier, port, payment, cargo, VGM-consent, customs, and conditional refrigerated or dangerous-goods fields documented for the selected product. */
        manifestSendRecord: Record<string, unknown>;
        /** The port-specific official shipper, consignee, and notify-party identity, address, country, contact, company, and AEO fields. */
        manifestAddrList: Record<string, unknown>;
        /**
         * The Tianjin cargo records.
         * @minItems 1
         */
        manifestGoodsDetailList: Array<Record<string, unknown>>;
        /**
         * The Tianjin VGM records.
         * @minItems 1
         */
        vgmRecordList: Array<Record<string, unknown>>;
        /**
         * The Tianjin manifest attachments whose URLs are fetched by HaiGuanJia.
         * @minItems 1
         */
        manifestAttachmentList: Array<Record<string, unknown>>;
      };
      output: {
        /** The provider-defined manifest result containing the HaiGuanJia manifest identifier and any additional operation data. */
        result: Record<string, unknown>;
        /**
         * The number of billable consumptions reported by HaiGuanJia for this request, or null when omitted.
         * @minimum 0
         */
        usageCount: number | null;
        /** The HaiGuanJia coin amount consumed by the request, or null when omitted. */
        seaCoinCount: number | null;
      };
    };
    /** Send a Tianjin pickup order. HaiGuanJia documents this sub-interface as free, but the required attachment URLs and all business data remain redacted from execution logs. */
    "hgj.send_tianjin_pickup_order": {
      input: {
        /** The port-specific official manifest header, including bill, vessel, carrier, port, payment, cargo, VGM-consent, customs, and conditional refrigerated or dangerous-goods fields documented for the selected product. */
        manifestSendRecord: Record<string, unknown>;
        /** The port-specific official shipper, consignee, and notify-party identity, address, country, contact, company, and AEO fields. */
        manifestAddrList?: Record<string, unknown>;
        /** The optional Tianjin cargo records. */
        manifestGoodsDetailList?: Array<Record<string, unknown>>;
        /** The optional Tianjin VGM records. */
        vgmRecordList?: Array<Record<string, unknown>>;
        /**
         * The required Tianjin pickup-order attachments whose URLs are fetched by HaiGuanJia.
         * @minItems 1
         */
        manifestAttachmentList: Array<Record<string, unknown>>;
      };
      output: {
        /** The provider-defined manifest result containing the HaiGuanJia manifest identifier and any additional operation data. */
        result: Record<string, unknown>;
        /**
         * The number of billable consumptions reported by HaiGuanJia for this request, or null when omitted.
         * @minimum 0
         */
        usageCount: number | null;
        /** The HaiGuanJia coin amount consumed by the request, or null when omitted. */
        seaCoinCount: number | null;
      };
    };
    /** Send or resend multi-port VGM data. HaiGuanJia charges for every container on every call, including resends, so Connector never retries automatically. */
    "hgj.send_vgm": {
      input: {
        /**
         * The port-area code when required by the selected VGM port.
         * @minLength 1
         * @pattern \S
         */
        portAreaCode?: string;
        /**
         * The carrier code.
         * @minLength 1
         * @pattern \S
         */
        shipCompanyCode: string;
        /**
         * The bill of lading number.
         * @minLength 1
         * @pattern \S
         */
        billNo: string;
        /**
         * The VGM port name.
         * @minLength 1
         * @pattern \S
         */
        vgmPort: string;
        /**
         * The shipper-owned or carrier-owned container marker.
         * @minLength 1
         * @pattern \S
         */
        boxOwnerSign: string;
        /**
         * The station code when required by the selected VGM port.
         * @minLength 1
         * @pattern \S
         */
        stationCode?: string;
        /**
         * The VGM sender type when required by the selected VGM port.
         * @minLength 1
         * @pattern \S
         */
        vgmSendType?: string;
        /**
         * The vessel English name when required.
         * @minLength 1
         * @pattern \S
         */
        shipEnName?: string;
        /**
         * The voyage number when required.
         * @minLength 1
         * @pattern \S
         */
        shipVoyNo?: string;
        /**
         * The terminal code when required.
         * @minLength 1
         * @pattern \S
         */
        dockCode?: string;
        /**
         * The booking number when required.
         * @minLength 1
         * @pattern \S
         */
        bookingNo?: string;
        /**
         * The provider-formatted VGM deadline when required.
         * @minLength 1
         * @pattern \S
         */
        vgmDeadline?: string;
        /**
         * The containers and VGM measurements to send.
         * @minItems 1
         */
        containerList: Array<Record<string, unknown>>;
      };
      output: {
        /** Whether HaiGuanJia accepted the VGM submission. */
        sent: boolean;
        /**
         * The number of billable consumptions reported by HaiGuanJia for this request, or null when omitted.
         * @minimum 0
         */
        usageCount: number | null;
      };
    };
    /** Submit a new AI customs-intake request. Connector fixes isModify to false and HaiGuanJia fetches each attachment URL. */
    "hgj.submit_ai_customs_intake": {
      input: {
        /**
         * The caller-defined unique customer document number.
         * @minLength 1
         * @pattern \S
         */
        customerDocNo: string;
        /**
         * The optional bill of lading number.
         * @minLength 1
         * @pattern \S
         */
        billNumber?: string;
        /**
         * The optional vessel name.
         * @minLength 1
         * @pattern \S
         */
        vesselName?: string;
        /**
         * The optional voyage number.
         * @minLength 1
         * @pattern \S
         */
        voyageNumber?: string;
        /** Optional customs-intake remarks. */
        remark?: string;
        /** Optional container records. */
        containers?: Array<Record<string, unknown>>;
        /**
         * The required attachment files.
         * @minItems 1
         */
        attachments: Array<{
          /**
           * The publicly reachable attachment URL that HaiGuanJia should fetch.
           * @minLength 1
           * @pattern \S
           */
          fileUrl: string;
          /**
           * The attachment file name including its extension.
           * @minLength 1
           * @pattern \S
           */
          fileName: string;
        }>;
      };
      output: {
        /** The customer document number used for status queries. */
        customerDocNo: string;
      };
    };
    /** Submit a chargeable export customs-recognition task. HaiGuanJia fetches each fileUrl and Connector never retries automatically. */
    "hgj.submit_export_customs_recognition": {
      input: {
        /**
         * The caller-defined HaiGuanJia recognition business identifier.
         * @minLength 1
         * @pattern \S
         */
        bizId: string;
        /**
         * The files to recognize.
         * @minItems 1
         */
        files: Array<{
          /**
           * The original file name including its extension.
           * @minLength 1
           * @pattern \S
           */
          fileName: string;
          /**
           * The publicly reachable file URL that HaiGuanJia should fetch.
           * @minLength 1
           * @pattern \S
           */
          fileUrl: string;
          /** Optional small-file Base64 data; an empty string is sent when omitted. */
          base64Data?: string;
        }>;
      };
      output: {
        /** The HaiGuanJia recognition business identifier used for polling. */
        bizId: string;
      };
    };
    /** Submit a chargeable import customs-recognition task. HaiGuanJia fetches each fileUrl and Connector never retries automatically. */
    "hgj.submit_import_customs_recognition": {
      input: {
        /**
         * The caller-defined HaiGuanJia recognition business identifier.
         * @minLength 1
         * @pattern \S
         */
        bizId: string;
        /**
         * The files to recognize.
         * @minItems 1
         */
        files: Array<{
          /**
           * The original file name including its extension.
           * @minLength 1
           * @pattern \S
           */
          fileName: string;
          /**
           * The publicly reachable file URL that HaiGuanJia should fetch.
           * @minLength 1
           * @pattern \S
           */
          fileUrl: string;
          /** Optional small-file Base64 data; an empty string is sent when omitted. */
          base64Data?: string;
        }>;
      };
      output: {
        /** The HaiGuanJia recognition business identifier used for polling. */
        bizId: string;
      };
    };
    /** Subscribe a bill, booking/SO number, or container for HaiGuanJia carrier full-journey tracking. Subscription submission is free, but delivered callback data is billed per returned container, so Connector never retries this request automatically. */
    "hgj.subscribe_full_journey_tracking": {
      input: {
        /**
         * The optional bill of lading or booking/SO number accepted by HaiGuanJia.
         * @minLength 1
         * @pattern \S
         */
        billNumber?: string;
        /**
         * The optional container number to track.
         * @minLength 1
         * @pattern \S
         */
        containerNumber?: string;
        /**
         * The HaiGuanJia carrier code for the tracked bill, booking, or container.
         * @minLength 1
         * @pattern \S
         */
        shippingCompanyCode: string;
      };
      output: {
        /** The HaiGuanJia carrier tracking subscription identifier. */
        subscriptionId: string;
        /**
         * The number of billable consumptions reported by HaiGuanJia for this request, or null when omitted.
         * @minimum 0
         */
        usageCount: number | null;
      };
    };
    /** Submit a new US customs-data subscription. HaiGuanJia bills this workflow on the business side, so Connector never retries automatically. */
    "hgj.subscribe_new_us_customs": {
      input: {
        /**
         * The customs document number.
         * @minLength 1
         * @pattern \S
         */
        documentNumber: string;
        /**
         * The official HaiGuanJia business-data type.
         * @minLength 1
         * @pattern \S
         */
        dataType: string;
        /**
         * The carrier SCAC when required by the selected data type.
         * @minLength 1
         * @pattern \S
         */
        scac?: string;
      };
      output: {
        /** The HaiGuanJia customs query identifier. */
        queryId: string;
        /**
         * The number of billable consumptions reported by HaiGuanJia for this request, or null when omitted.
         * @minimum 0
         */
        usageCount: number | null;
      };
    };
    /** Subscribe Ningbo, Shanghai, Shenzhen, or Qingdao container/cargo data. Submission is free but callbacks are billed per returned bill or booking number, so Connector never retries automatically. */
    "hgj.subscribe_port_container": {
      input: {
        /** The HaiGuanJia port whose container, cargo, or schedule data should be used. */
        port: "ningbo" | "shanghai" | "shenzhen" | "qingdao";
        /**
         * The bill of lading number used by Ningbo, Shanghai, or Qingdao.
         * @minLength 1
         * @pattern \S
         */
        billNumber?: string;
        /**
         * The booking number used by Shenzhen.
         * @minLength 1
         * @pattern \S
         */
        bookingNumber?: string;
        /**
         * The container number required by Shenzhen queries.
         * @minLength 1
         * @pattern \S
         */
        containerNumber?: string;
        /** The HaiGuanJia import or export marker. */
        orderType?: "I" | "E";
        /**
         * The Qingdao station code.
         * @minLength 1
         * @pattern \S
         */
        stationCode?: string;
        /** Whether HaiGuanJia should also send its own WeChat notification. */
        receiveWechatPush?: boolean;
        /**
         * The optional vessel English name supported by Ningbo and Shanghai.
         * @minLength 1
         * @pattern \S
         */
        vesselName?: string;
        /**
         * The optional vessel voyage number supported by Ningbo.
         * @minLength 1
         * @pattern \S
         */
        voyageNumber?: string;
        /**
         * The integration-side correlation identifier sent in the unencrypted HaiGuanJia envelope.
         * @minLength 1
         * @pattern \S
         */
        jobNumber?: string;
      };
      output: {
        /** Whether HaiGuanJia accepted the subscription. */
        subscribed: boolean;
        /**
         * The number of billable consumptions reported by HaiGuanJia for this request, or null when omitted.
         * @minimum 0
         */
        usageCount: number | null;
      };
    };
    /** Subscribe Ningbo, Shanghai, Shenzhen, or Qingdao vessel schedule data. Submission is free but callbacks are billed per returned vessel and voyage, subscriptions expire after 45 days, and Connector never retries automatically. */
    "hgj.subscribe_port_schedule": {
      input: {
        /** The HaiGuanJia port whose container, cargo, or schedule data should be used. */
        port: "ningbo" | "shanghai" | "shenzhen" | "qingdao";
        /**
         * The vessel English name.
         * @minLength 1
         * @pattern \S
         */
        vesselName: string;
        /**
         * The vessel voyage number.
         * @minLength 1
         * @pattern \S
         */
        voyageNumber: string;
        /** The HaiGuanJia import or export marker. */
        orderType?: "I" | "E";
        /**
         * The integration-side correlation identifier sent in the unencrypted HaiGuanJia envelope.
         * @minLength 1
         * @pattern \S
         */
        jobNumber?: string;
      };
      output: {
        /** Whether HaiGuanJia accepted the subscription. */
        subscribed: boolean;
        /** The HaiGuanJia port data subscription identifier, or null when the endpoint omits it. */
        subscriptionId: string | null;
        /**
         * The number of billable consumptions reported by HaiGuanJia for this request, or null when omitted.
         * @minimum 0
         */
        usageCount: number | null;
      };
    };
    /** Subscribe a vessel in HaiGuanJia so its track information can be queried. */
    "hgj.subscribe_ship": {
      input: {
        /**
         * The MMSI identifier of the vessel to query.
         * @minLength 1
         * @pattern \S
         */
        shipMmsi: string;
      };
      output: {
        /** Whether HaiGuanJia accepted the vessel subscription. */
        subscribed: boolean;
      };
    };
    /** Subscribe US destination customs data for a bill and carrier. HaiGuanJia documents this request as chargeable, so Connector never retries automatically. */
    "hgj.subscribe_us_customs_data": {
      input: {
        /**
         * The bill of lading number.
         * @minLength 1
         * @pattern \S
         */
        billNumber: string;
        /**
         * The carrier code.
         * @minLength 1
         * @pattern \S
         */
        shippingCompanyCode: string;
      };
      output: {
        /** The HaiGuanJia customs-data subscription identifier. */
        subscriptionId: string;
        /**
         * The number of billable consumptions reported by HaiGuanJia for this request, or null when omitted.
         * @minimum 0
         */
        usageCount: number | null;
      };
    };
    /** Subscribe US terminal data for a container and port. HaiGuanJia documents this request as chargeable, so Connector never retries automatically. */
    "hgj.subscribe_us_terminal_data": {
      input: {
        /** The HaiGuanJia import or export marker. */
        orderType: "I" | "E";
        /**
         * The US terminal port code.
         * @minLength 1
         * @pattern \S
         */
        portCode: string;
        /**
         * The container number.
         * @minLength 1
         * @pattern \S
         */
        containerNumber: string;
      };
      output: {
        /** The provider-defined subscription record containing the subscription ID, order type, bill, terminal, port, and container identifiers. */
        result: Record<string, unknown>;
      };
    };
    /** Overwrite an ACI manifest through the selected agency or customer channel. */
    "hgj.update_aci_manifest": {
      input: {
        /** Whether to use HaiGuanJia agency filing or the customer's own Canadian 8000-code channel. */
        channel: "agency" | "customer";
        /** The complete official ACI payload with the 8000-code and house/master bills, delivery place, carrier 9000 code, delivery type, shipper, consignee, cargo, containers, weights, and optional dangerous-goods records. */
        manifest: Record<string, unknown>;
      };
      output: {
        /** Whether HaiGuanJia accepted the ACI update. */
        completed: boolean;
      };
    };
    /** Overwrite an existing AFR house bill and its complete container data. */
    "hgj.update_afr_manifest": {
      input: {
        /**
         * The carrier's Japan customs registration code when required.
         * @minLength 1
         * @pattern \S
         */
        shippingCompanyJapanCustomsCode: string;
        /**
         * The master bill of lading number.
         * @minLength 1
         * @pattern \S
         */
        masterBillNumber: string;
        /**
         * The house bill number to update.
         * @minLength 1
         * @pattern \S
         */
        houseBillNumber: string;
        /**
         * The provider-formatted estimated departure time.
         * @minLength 1
         * @pattern \S
         */
        estimatedDepartureAt: string;
        /**
         * The provider-formatted estimated arrival date.
         * @minLength 1
         * @pattern \S
         */
        estimatedArrivalDate: string;
        /**
         * The discharge port code.
         * @minLength 1
         * @pattern \S
         */
        dischargePortCode: string;
        /**
         * The delivery place code.
         * @minLength 1
         * @pattern \S
         */
        deliveryPlaceCode: string;
        /**
         * The shipper name.
         * @minLength 1
         * @pattern \S
         */
        shipperName: string;
        /**
         * The shipper address.
         * @minLength 1
         * @pattern \S
         */
        shipperAddress: string;
        /**
         * The shipper telephone number.
         * @minLength 1
         * @pattern \S
         */
        shipperTelephone: string;
        /**
         * The shipper country code.
         * @minLength 1
         * @pattern \S
         */
        shipperCountryCode: string;
        /**
         * The consignee name.
         * @minLength 1
         * @pattern \S
         */
        consigneeName: string;
        /**
         * The consignee address.
         * @minLength 1
         * @pattern \S
         */
        consigneeAddress: string;
        /**
         * The consignee telephone number.
         * @minLength 1
         * @pattern \S
         */
        consigneeTelephone: string;
        /**
         * The consignee country code.
         * @minLength 1
         * @pattern \S
         */
        consigneeCountryCode: string;
        /**
         * The notify-party name.
         * @minLength 1
         * @pattern \S
         */
        notifyName: string;
        /**
         * The notify-party address.
         * @minLength 1
         * @pattern \S
         */
        notifyAddress: string;
        /**
         * The notify-party telephone number.
         * @minLength 1
         * @pattern \S
         */
        notifyTelephone: string;
        /**
         * The notify-party country code.
         * @minLength 1
         * @pattern \S
         */
        notifyCountryCode: string;
        /**
         * The replacement AFR container records.
         * @minItems 1
         */
        containers: Array<{
          /** The container sequence number. */
          boxNumber: number;
          /**
           * The container number.
           * @minLength 1
           * @pattern \S
           */
          boxNo: string;
          /**
           * The container seal number.
           * @minLength 1
           * @pattern \S
           */
          boxSealNo: string;
          /**
           * The container type code.
           * @minLength 1
           * @pattern \S
           */
          boxTypeCode: string;
          /**
           * The carrier-owned or shipper-owned container marker.
           * @minLength 1
           * @pattern \S
           */
          boxOwnerSign: string;
          /**
           * The cargo customs HS code.
           * @minLength 1
           * @pattern \S
           */
          goodsHSCode: string;
          /**
           * The cargo English product name.
           * @minLength 1
           * @pattern \S
           */
          goodsProductEnName: string;
          /**
           * The cargo marks and numbers.
           * @minLength 1
           * @pattern \S
           */
          goodsMarks: string;
          /** The total cargo package count. */
          goodsTotalNumber: number;
          /**
           * The cargo package type code.
           * @minLength 1
           * @pattern \S
           */
          goodsPackageTypeCode: string;
          /** The cargo gross weight. */
          goodsGrossWeight: number;
          /** The cargo volume. */
          goodsVolume: number;
          /** The optional dangerous-goods records. */
          dangersList?: Array<{
            /** The dangerous-goods record sequence number. */
            dangerNumber?: number;
            /**
             * The dangerous-goods classification.
             * @minLength 1
             * @pattern \S
             */
            dangerType?: string;
            /**
             * The United Nations dangerous-goods code.
             * @minLength 1
             * @pattern \S
             */
            dangerUnCode?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
      output: {
        /** Whether HaiGuanJia accepted the AFR update. */
        updated: boolean;
      };
    };
    /** Overwrite an existing AI customs-intake request. Connector fixes isModify to true and HaiGuanJia fetches each attachment URL. */
    "hgj.update_ai_customs_intake": {
      input: {
        /**
         * The caller-defined unique customer document number.
         * @minLength 1
         * @pattern \S
         */
        customerDocNo: string;
        /**
         * The optional bill of lading number.
         * @minLength 1
         * @pattern \S
         */
        billNumber?: string;
        /**
         * The optional vessel name.
         * @minLength 1
         * @pattern \S
         */
        vesselName?: string;
        /**
         * The optional voyage number.
         * @minLength 1
         * @pattern \S
         */
        voyageNumber?: string;
        /** Optional customs-intake remarks. */
        remark?: string;
        /** Optional container records. */
        containers?: Array<Record<string, unknown>>;
        /**
         * The required attachment files.
         * @minItems 1
         */
        attachments: Array<{
          /**
           * The publicly reachable attachment URL that HaiGuanJia should fetch.
           * @minLength 1
           * @pattern \S
           */
          fileUrl: string;
          /**
           * The attachment file name including its extension.
           * @minLength 1
           * @pattern \S
           */
          fileName: string;
        }>;
      };
      output: {
        /** The customer document number used for status queries. */
        customerDocNo: string;
      };
    };
    /** Overwrite an AMS manifest through the selected agency or customer SCAC channel. */
    "hgj.update_ams_manifest": {
      input: {
        /** Whether to use HaiGuanJia agency sending or the customer's own SCAC channel. */
        channel: "agency" | "customer";
        /** The complete official AMS payload, including SCAC/carrier and master-bill fields, vessel and voyage, delivery type, US customs port codes and locations, departure/arrival dates, house bills, parties, containers, cargo, and optional dangerous-goods records. */
        manifest: Record<string, unknown>;
      };
      output: {
        /** Whether HaiGuanJia accepted the AMS update. */
        updated: boolean;
      };
    };
    /** Overwrite an EM manifest through the selected agency or customer channel. */
    "hgj.update_em_manifest": {
      input: {
        /** Whether to use HaiGuanJia agency filing or the customer's own Canadian 8000-code channel. */
        channel: "agency" | "customer";
        /** The complete official EM payload with the 8000-code and house/master bills, previous bill, Canadian destination/discharge customs and warehouse codes, delivery mode/type, weight and volume, dangerous-goods contacts, shipper, consignee, consolidation location, cargo, and optional SNP records. Updates may include EMModifyReasonCode. */
        manifest: Record<string, unknown>;
      };
      output: {
        /** Whether HaiGuanJia accepted the EM update. */
        completed: boolean;
      };
    };
    /** Overwrite an ICS2 F14, F15, F16, or F17 manifest identified by billId. */
    "hgj.update_ics2_manifest": {
      input: {
        /** The ICS2 filing message type and corresponding HaiGuanJia product. */
        messageType: "F14" | "F15" | "F16" | "F17";
        /** The complete official payload for the selected ICS2 message type. F14 includes parties and container cargo; F15 adds buyer/seller parties; F16 focuses on master/house bill buyer/seller data; F17 includes delivery type, EORI parties, and buyer/seller data. Update payloads include billId. */
        manifest: Record<string, unknown>;
      };
      output: {
        /** Whether HaiGuanJia accepted the ICS2 update. */
        updated: boolean;
        /** The HaiGuanJia coin amount reported for the update, or null when omitted. */
        seaCoinCount: number | null;
      };
    };
    /** Overwrite an ISF-10 manifest through the selected agency or customer FILER CODE channel. */
    "hgj.update_isf10_manifest": {
      input: {
        /** Whether to use HaiGuanJia agency filing or the customer's own FILER CODE channel. */
        channel: "agency" | "customer";
        /** The complete official ISF-10 payload with optional filerCode, cargo and bond types, conditional bond/importer/consignee identifiers, seller, buyer, delivery, manufacturer, loading and consolidator companies, AMS bill list, and cargo list. Preserve the official buyerCompanyrCity spelling. */
        manifest: Record<string, unknown>;
      };
      output: {
        /** Whether HaiGuanJia accepted the ISF-10 update. */
        updated: boolean;
      };
    };
    /** Overwrite an ISF-5 manifest through the selected agency or customer FILER CODE channel. */
    "hgj.update_isf5_manifest": {
      input: {
        /** Whether to use HaiGuanJia agency filing or the customer's own FILER CODE channel. */
        channel: "agency" | "customer";
        /** The complete official ISF-5 payload with optional filerCode, discharge and delivery locations, delivery company, booking party, AMS bill list, and cargo list. */
        manifest: Record<string, unknown>;
      };
      output: {
        /** Whether HaiGuanJia accepted the ISF-5 update. */
        updated: boolean;
      };
    };
    /** Overwrite a Qingdao manifest. HaiGuanJia charges for affected master and house bills, so Connector never retries automatically. */
    "hgj.update_qingdao_manifest": {
      input: {
        /** The official Qingdao update or resend header. It includes manifestId plus the documented Qingdao manifest header fields and their conditional payment, frozen-cargo, dangerous-goods, and entrustment values. */
        manifestSendRecord: Record<string, unknown>;
        /** The official Qingdao shipper, consignee, and notify-party names, addresses, country codes, and telephone numbers. */
        manifestAddrList: Record<string, unknown>;
        /**
         * The Qingdao update or resend cargo records.
         * @minItems 1
         */
        manifestGoodsDetailList: Array<Record<string, unknown>>;
      };
      output: {
        /** The provider-defined Qingdao result containing manifest, bill, customs declaration, and container identifiers. */
        result: Record<string, unknown>;
        /** The HaiGuanJia coin amount consumed by the request, or null when omitted. */
        seaCoinCount: number | null;
      };
    };
    /** Overwrite selected customs declarations in an existing Shanghai manifest. HaiGuanJia charges for each modified customs declaration, so Connector never retries this request automatically. */
    "hgj.update_shanghai_manifest": {
      input: {
        /** The official Shanghai manifest header for update or resend. Required fields are manifestId, shipCompanyCode, goodsTypeCode, paymentModeCode, billTypeCode, portOfDischargeCode, portOfShippingCode, and portOfDestinationCode. paymentPortCode is conditionally required and entrustInfo is optional. */
        manifestSendRecord: Record<string, unknown>;
        /** The official Shanghai manifest party record. It requires the name, address, country code, and telephone fields for shipper, consignee, and notify party. */
        manifestAddrList: Record<string, unknown>;
        /**
         * The Shanghai manifest cargo records included in the operation.
         * @minItems 1
         */
        manifestGoodsDetailList: Array<Record<string, unknown>>;
      };
      output: {
        /** The provider-defined Shanghai manifest result containing the relevant manifest, send, resend, update, or deletion identifiers and timestamps plus the affected customs declaration numbers. */
        result: Record<string, unknown>;
        /**
         * The number of billable consumptions reported by HaiGuanJia for this request, or null when omitted.
         * @minimum 0
         */
        usageCount: number | null;
      };
    };
    /** Validate a Qingdao vessel and voyage using the product API ID rather than the conflicting example ID. */
    "hgj.validate_qingdao_voyage": {
      input: {
        /**
         * The vessel name accepted by HaiGuanJia.
         * @minLength 1
         * @pattern \S
         */
        vessel: string;
        /**
         * The voyage number accepted by HaiGuanJia.
         * @minLength 1
         * @pattern \S
         */
        voyage: string;
      };
      output: {
        /** Whether HaiGuanJia found a matching vessel and voyage. */
        matching: boolean;
        /** The provider-defined matching Qingdao voyage records. */
        records: Array<Record<string, unknown>>;
      };
    };
    /** Validate a Shanghai vessel and voyage and return its port calls and current planned timing. */
    "hgj.validate_shanghai_voyage": {
      input: {
        /**
         * The vessel name accepted by HaiGuanJia.
         * @minLength 1
         * @pattern \S
         */
        vessel: string;
        /**
         * The voyage number accepted by HaiGuanJia.
         * @minLength 1
         * @pattern \S
         */
        voyage: string;
      };
      output: {
        /** The provider-defined validated voyage record. */
        voyage: {
          /** The port-call English names. */
          portOfCallEn?: Array<string>;
          /** The port-call codes. */
          portOfCall?: Array<string>;
          /** The port-call Chinese names. */
          portOfCallCn?: Array<string>;
          /** The provider-formatted container-gate opening time. */
          eta?: string;
          /** The provider-formatted planned berthing time. */
          planArrivalPortTime?: string;
          /** The provider-formatted planned departure time. */
          planLeavePortTime?: string;
          /** The terminal code and label. */
          dockCode?: string;
          /** The confirmed outbound voyage number. */
          leaveVoyNo?: string;
          /** The confirmed vessel English name. */
          englishVessel?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Withdraw a rejected Qingdao manifest and request the documented refund. */
    "hgj.withdraw_qingdao_manifest": {
      input: {
        /**
         * The HaiGuanJia manifest identifier.
         * @minLength 1
         * @pattern \S
         */
        manifestId: string;
      };
      output: {
        /** Whether HaiGuanJia accepted the withdrawal. */
        withdrawn: boolean;
        /** The provider-defined Qingdao result containing manifest, bill, customs declaration, and container identifiers. */
        result: Record<string, unknown>;
      };
    };
    /** Withdraw a rejected Shanghai manifest submission. A successful withdrawal refunds the documented balance or usage count. */
    "hgj.withdraw_shanghai_manifest": {
      input: {
        /**
         * The HaiGuanJia manifest identifier.
         * @minLength 1
         * @pattern \S
         */
        manifestId: string;
      };
      output: {
        /** Whether HaiGuanJia accepted the withdrawal. */
        withdrawn: boolean;
        /** The refunded HaiGuanJia coin balance, when reported. */
        returnedSeaCoins: number | null;
        /** The refunded API usage count, when reported. */
        returnedUsageCount: number | null;
      };
    };
  }
}
