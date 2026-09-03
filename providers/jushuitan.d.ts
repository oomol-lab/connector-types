import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add unique package serial numbers in batches. */
    "jushuitan.add_package_serial_numbers": {
      input: {
        /** The pack sn list value accepted by the Jushuitan API. */
        pack_sn_list: Array<{
          /** The merchant SKU identifier in Jushuitan. */
          sku_id: string;
          /** The sn value accepted by the Jushuitan API. */
          sn: string;
          /** The pack sku sn list value accepted by the Jushuitan API. */
          pack_sku_sn_list: Array<string>;
        }>;
        /** The package status: 1 for pending receipt, 2 for received, or 3 for shipped. Other values and omission query pending-receipt records. */
        status?: number;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: boolean;
        /** The response message value returned by the Jushuitan API. */
        msg?: unknown;
        /** The request identifier assigned by Jushuitan. */
        request_id?: unknown;
        [key: string]: unknown;
      };
    };
    /** Add unique product serial numbers in batches. */
    "jushuitan.add_product_serial_numbers": {
      input: {
        /**
         * The product serial numbers to add; at most 500 records are accepted.
         * @maxItems 500
         */
        sku_sn_list: Array<{
          /** The merchant SKU identifier in Jushuitan. */
          sku_id: string;
          /** The sn value accepted by the Jushuitan API. */
          sn: string;
        }>;
        /** The serial-number status: 0 for pending receipt or 1 for received. */
        status?: number;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: boolean;
        /** The response message value returned by the Jushuitan API. */
        msg?: unknown;
        /** The request identifier assigned by Jushuitan. */
        request_id?: unknown;
        [key: string]: unknown;
      };
    };
    /** Adjust product inventory through an inventory count operation. */
    "jushuitan.adjust_inventory_by_count": {
      input: {
        /** The warehouse-company identifier. Defaults to the main warehouse. */
        wms_co_id?: number;
        /** The count mode. adjust, the default, applies quantity deltas; check replaces the supplied products. With fine-grained bin management, check also sets omitted products in the bin to zero, while adjust changes only supplied products. */
        type?: string;
        /** Whether to confirm the document automatically. Defaults to false. */
        is_confirm?: boolean;
        /** A caller-defined unique external identifier. Reusing it keeps the result from the first successful request. */
        so_id: string;
        /** The warehouse identifier: 1 for main, 2 for sales returns, 3 for purchasing, 4 for defective goods, or 6 through 8 for custom warehouses. */
        warehouse: string;
        /** The lock wh id value accepted by the Jushuitan API. */
        lock_wh_id?: number;
        /** The lock wh name value accepted by the Jushuitan API. */
        lock_wh_name?: string;
        /** The remark value accepted by the Jushuitan API. */
        remark?: string;
        /** The bin identifier, effective and required when fine-grained warehouse management is enabled. */
        bin?: string;
        /** The staging-bin type, effective and required under fine-grained warehouse management: Default, Pick, or None. */
        default_type?: string;
        /**
         * The items value accepted by the Jushuitan API.
         * @maxItems 500
         */
        items: Array<{
          /** The qty value accepted by the Jushuitan API. */
          qty: number;
          /** The unique serial numbers. They are not supported when type is adjust. */
          sku_sns?: Array<string>;
          /** The merchant SKU identifier in Jushuitan. */
          sku_id: string;
          /** The supplier id value accepted by the Jushuitan API. */
          supplier_id?: number;
          /** The production batch identifier. Batch information is required when product batch management is enabled. */
          batch_id?: string;
          /** The production date, between 1970-01-01 00:00:00 and 3000-01-01 00:00:00. */
          produced_date?: string;
          /** The expiration date, between 1970-01-01 00:00:00 and 3000-01-01 00:00:00. */
          expiration_date?: string;
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: number;
        /** The issuccess value returned by the Jushuitan API. */
        issuccess?: boolean;
        /** The response message returned by Jushuitan. */
        msg: string;
        /** The data value returned by the Jushuitan API. */
        data: {
          /** The data value returned by the Jushuitan API. */
          data: {
            /** The response message returned by Jushuitan. */
            msg: string;
            /** The online sales-order identifier. */
            so_id: string;
            /** The Jushuitan inbound or outbound document identifier. */
            io_id: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Append a WMS workload record. */
    "jushuitan.append_wms_workload": {
      input: {
        /** The wave id value accepted by the Jushuitan API. */
        wave_id?: number;
        /** The lid value accepted by the Jushuitan API. */
        lid?: string;
        /** The last lid value accepted by the Jushuitan API. */
        last_lid?: string;
        /** The po id value accepted by the Jushuitan API. */
        po_id?: number;
        /** The sku sn po id value accepted by the Jushuitan API. */
        sku_sn_po_id?: number;
        /** The oid value accepted by the Jushuitan API. */
        oid?: number;
        /** The packer value accepted by the Jushuitan API. */
        packer: string;
        /** The packer name value accepted by the Jushuitan API. */
        packer_name: string;
        /** The package sku id value accepted by the Jushuitan API. */
        package_sku_id?: string;
        /** The is unlimited express value accepted by the Jushuitan API. */
        is_unlimited_express?: boolean;
        /** The merchant SKU identifier in Jushuitan. */
        sku_id?: string;
        /** The sku sn value accepted by the Jushuitan API. */
        sku_sn?: string;
        /** The sku num value accepted by the Jushuitan API. */
        sku_num?: number;
        /** The is combine value accepted by the Jushuitan API. */
        is_combine?: boolean;
        /** The workload-entry type: 0 or 1 packing, 2 picking, 3 checking, 5 shipment quality inspection, or a value above 5 for a custom type. Defaults to 0. */
        action_type: number;
        /** The area value accepted by the Jushuitan API. */
        area?: string;
        /** The ioid value accepted by the Jushuitan API. */
        ioid?: number;
        /** The is only checked inout value accepted by the Jushuitan API. */
        is_only_checked_inout?: boolean;
        /** The tpw selected co id value accepted by the Jushuitan API. */
        tpw_selected_co_id?: number;
        /** The is allow pack before deliver value accepted by the Jushuitan API. */
        is_allow_pack_before_deliver?: boolean;
        /** The is cross border value accepted by the Jushuitan API. */
        is_cross_border?: boolean;
        /** The is write log qty by machining in qty value accepted by the Jushuitan API. */
        is_write_log_qty_by_machining_in_qty?: boolean;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: number;
        /** The response message returned by Jushuitan. */
        msg: string;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The response message returned by Jushuitan. */
          message?: string;
          /** The success value returned by the Jushuitan API. */
          success?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Assign a shipping warehouse to an order. */
    "jushuitan.assign_order_shipping_warehouse": {
      input: {
        /**
         * The business parameters used to assign a shipping warehouse to an order.
         * @minItems 1
         */
        items: Array<{
          /** The internal Jushuitan order identifier. */
          o_id: number;
          /** The Jushuitan warehouse-company identifier. */
          wms_co_id: number;
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: string;
        /** The issuccess value returned by the Jushuitan API. */
        issuccess: string;
        /** The response message returned by Jushuitan. */
        msg: string;
        [key: string]: unknown;
      };
    };
    /** Assign a picking wave to a specified warehouse robot. */
    "jushuitan.assign_wave_to_robot": {
      input: {
        /** The wave id value accepted by the Jushuitan API. */
        wave_id: number;
        /** The robot name value accepted by the Jushuitan API. */
        robot_name: string;
        /** The bin value accepted by the Jushuitan API. */
        bin?: string;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The issuccess value returned by the Jushuitan API. */
        issuccess?: boolean;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The wave id value returned by the Jushuitan API. */
          wave_id?: number;
          /** The status value returned by the Jushuitan API. */
          status?: string;
          /** The type value returned by the Jushuitan API. */
          type?: string;
          /** The bin value returned by the Jushuitan API. */
          bin?: string;
          /** The pick finish value returned by the Jushuitan API. */
          pick_finish?: boolean;
          /** The is agv pick value returned by the Jushuitan API. */
          is_agv_pick?: boolean;
          /** The remark value returned by the Jushuitan API. */
          remark?: string;
          /** The filter value returned by the Jushuitan API. */
          filter?: string;
          /** The user id value returned by the Jushuitan API. */
          user_id?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Move products off warehouse shelves in batches. */
    "jushuitan.batch_off_shelf_products": {
      input: {
        /** The warehouse-company identifier. Pass 0 for the main warehouse. */
        wms_co_id: number;
        /** The warehouse type: 1 main, 2 sales return, 3 purchasing, 4 defective goods, 5 store, or 6 through 15 for custom warehouses 1 through 10. */
        warehouse_id: number;
        /** The temporary-bin type: 0 warehouse default or 3 picking. The main warehouse accepts 0 or 3; other warehouses accept only 0. */
        default_pack_type?: number;
        /** The items value accepted by the Jushuitan API. */
        items: Array<{
          /** The merchant SKU identifier in Jushuitan. */
          sku_id: string;
          /** The bin name value accepted by the Jushuitan API. */
          bin_name: string;
          /** The qty value accepted by the Jushuitan API. */
          qty: number;
          /** The sku sns value accepted by the Jushuitan API. */
          sku_sns: Array<string>;
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: number;
        /** The response message returned by Jushuitan. */
        msg: string;
        /** The data value returned by the Jushuitan API. */
        data: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Place products onto warehouse shelves in batches. */
    "jushuitan.batch_shelve_products": {
      input: {
        /** The warehouse-company identifier. Pass 0 for the main warehouse. */
        wms_co_id?: number;
        /** The warehouse type: 1 main, 2 sales return, 3 purchasing, 4 defective goods, 5 store, or 6 through 15 for custom warehouses 1 through 10. */
        warehouse_id?: number;
        /** The temporary-bin type: 0 warehouse default, 3 picking, or 4 replenishment. Defaults to 0; the main warehouse accepts all three values, while other warehouses accept only 0. */
        default_pack_type?: number;
        /** The items value accepted by the Jushuitan API. */
        items: Array<{
          /** The merchant SKU identifier in Jushuitan. */
          sku_id: string;
          /** The bin name value accepted by the Jushuitan API. */
          bin_name: string;
          /** The qty value accepted by the Jushuitan API. */
          qty: number;
          /** The sku sns value accepted by the Jushuitan API. */
          sku_sns?: Array<string>;
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: number;
        /** The response message returned by Jushuitan. */
        msg: string;
        /** The data value returned by the Jushuitan API. */
        data: boolean;
        [key: string]: unknown;
      };
    };
    /** Bind a seeding cabinet identifier to a seeding cart. */
    "jushuitan.bind_seeding_bin_to_cart": {
      input: {
        /** The wave id value accepted by the Jushuitan API. */
        wave_id: string;
        /** The carry id value accepted by the Jushuitan API. */
        carry_id?: string;
        /** The Jushuitan warehouse-company identifier. */
        wms_co_id: string;
        /** The bind bin id carry ids value accepted by the Jushuitan API. */
        bind_bin_id_carry_ids: Array<{
          /** The key value accepted by the Jushuitan API. */
          key: {
            /** The Jushuitan inbound or outbound document identifier. */
            io_id: number;
            /** The extend flag value accepted by the Jushuitan API. */
            extend_flag?: {
              /** The lock wh id value accepted by the Jushuitan API. */
              lock_wh_id?: number;
              /** The outer lock whId value accepted by the Jushuitan API. */
              outer_lock_whId?: number;
              /** The is lock success value accepted by the Jushuitan API. */
              is_lock_success?: string;
              /** The outer sync status value accepted by the Jushuitan API. */
              outer_sync_status?: string;
              /** The push orders status value accepted by the Jushuitan API. */
              push_orders_status?: string;
              /** The print no value accepted by the Jushuitan API. */
              print_no?: number;
              /** The link bu id value accepted by the Jushuitan API. */
              link_bu_id?: string;
              /** The fast-moving purchase type: 0 for none, 1 for external purchase, 2 for reserved allocation, or 3 for single-item picking. */
              p2d_purchase_type?: number;
              /** The lock percentages value accepted by the Jushuitan API. */
              lock_percentages?: Array<{
                /** The l wh id value accepted by the Jushuitan API. */
                l_wh_id?: number;
                /** The percentage value accepted by the Jushuitan API. */
                percentage?: number;
              }>;
            };
          };
          /** The seeding-cabinet identifier, equivalent to bin_id. */
          value: number;
        }>;
      };
      output: {
        /** The data value returned by the Jushuitan API. */
        data: boolean;
        /** The Jushuitan response code; zero indicates a successful request. */
        code: string;
        /** The issuccess value returned by the Jushuitan API. */
        issuccess: string;
        /** The response message returned by Jushuitan. */
        msg: string;
        [key: string]: unknown;
      };
    };
    /** Bind a seeding cart to a warehouse picking or seeding workflow. */
    "jushuitan.bind_seeding_cart": {
      input: {
        /** The io ids value accepted by the Jushuitan API. */
        io_ids: Array<{
          /** The Jushuitan inbound or outbound document identifier. */
          io_id: string;
          /** The bin id value accepted by the Jushuitan API. */
          bin_id: string;
        }>;
        /** The wave id value accepted by the Jushuitan API. */
        wave_id: string;
        /** The carry id value accepted by the Jushuitan API. */
        carry_id: string;
      };
      output: {
        /** The data value returned by the Jushuitan API. */
        data?: boolean;
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The request identifier assigned by Jushuitan. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Cancel an inventory allocation document. */
    "jushuitan.cancel_allocation": {
      input: {
        /** The Jushuitan inbound or outbound document identifier. */
        io_id: number;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The issuccess value returned by the Jushuitan API. */
        issuccess?: boolean;
        /** The response message returned by Jushuitan. */
        msg?: string;
        [key: string]: unknown;
      };
    };
    /** Cancel a profitability data upload batch. */
    "jushuitan.cancel_cost_upload_batch": {
      input: {
        /** The upload batch identifier. */
        task_id: string;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: number;
        /** The response message returned by Jushuitan. */
        msg: string;
        /** Whether the batch was cancelled successfully. */
        data: boolean;
        [key: string]: unknown;
      };
    };
    /** Cancel an order by its Jushuitan internal order number. */
    "jushuitan.cancel_order_by_internal_id": {
      input: {
        /**
         * The o ids value accepted by the Jushuitan API.
         * @maxItems 50
         */
        o_ids: Array<number>;
        /** The cancel type value accepted by the Jushuitan API. */
        cancel_type: string;
        /** The remark value accepted by the Jushuitan API. */
        remark?: string;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Cancel a purchase receipt document. */
    "jushuitan.cancel_purchase_receipt": {
      input: {
        /**
         * The purchase-receipt identifiers. Either io_ids or so_ids is required; when both are present, io_ids takes precedence. At most 20 are accepted.
         * @maxItems 20
         */
        io_ids?: Array<number>;
        /**
         * The online sales-order identifiers. Either so_ids or io_ids is required; when both are present, io_ids takes precedence. At most 20 are accepted.
         * @maxItems 20
         */
        so_ids?: Array<string>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: string;
        /** The issuccess value returned by the Jushuitan API. */
        issuccess: string;
        /** The response message returned by Jushuitan. */
        msg: string;
        [key: string]: unknown;
      };
    };
    /** Cancel a purchase return outbound document. */
    "jushuitan.cancel_purchase_return": {
      input: {
        /**
         * Outbound document identifiers. Supply io_ids or so_ids; if both are present, io_ids takes precedence. At most 20 values are accepted.
         * @maxItems 20
         */
        io_ids?: Array<number>;
        /**
         * Online order numbers. Supply so_ids or io_ids; if both are present, io_ids takes precedence. At most 20 values are accepted.
         * @maxItems 20
         */
        so_ids?: Array<string>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The issuccess value returned by the Jushuitan API. */
        issuccess?: boolean;
        /** The response message returned by Jushuitan. */
        msg?: string;
        [key: string]: unknown;
      };
    };
    /** Check whether a seeding cart is currently available for use. */
    "jushuitan.check_seeding_cart_availability": {
      input: {
        /** The carry ids value accepted by the Jushuitan API. */
        carry_ids: Array<string>;
        /** The Jushuitan warehouse-company identifier. */
        wms_co_id?: number;
      };
      output: {
        /** The data value returned by the Jushuitan API. */
        data: boolean;
        /** The Jushuitan response code; zero indicates a successful request. */
        code: string;
        /** The issuccess value returned by the Jushuitan API. */
        issuccess: string;
        /** The response message returned by Jushuitan. */
        msg: string;
        [key: string]: unknown;
      };
    };
    /** Submit seeding results and complete the associated stock-out operation. */
    "jushuitan.complete_seeding_with_stock_out": {
      input: {
        /** The wave id value accepted by the Jushuitan API. */
        wave_id: string;
        /** The Jushuitan warehouse-company identifier. */
        wms_co_id?: number;
        /** The business records submitted to Jushuitan. */
        datas: Array<{
          /** The Jushuitan inbound or outbound document identifier. */
          io_id: number;
          /** The items value accepted by the Jushuitan API. */
          items: Array<{
            /** The skuid value accepted by the Jushuitan API. */
            skuid: string;
            /** The skusn value accepted by the Jushuitan API. */
            skusn?: string;
            /** The ioi id value accepted by the Jushuitan API. */
            ioi_id: string;
            /** The qty value accepted by the Jushuitan API. */
            qty: string;
            /** The seed qty value accepted by the Jushuitan API. */
            seed_qty: string;
          }>;
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: string;
        /** The issuccess value returned by the Jushuitan API. */
        issuccess?: boolean;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: Array<{
          /** The wave id value returned by the Jushuitan API. */
          wave_id?: string;
          /** The Jushuitan inbound or outbound document identifier. */
          io_id?: number;
          /** The ioi id value returned by the Jushuitan API. */
          ioi_id?: number;
          /** The issuccess value returned by the Jushuitan API. */
          issuccess?: string;
          /** The response message returned by Jushuitan. */
          msg?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Submit seeding results without completing a stock-out operation. */
    "jushuitan.complete_seeding_without_stock_out": {
      input: {
        /** The wave id value accepted by the Jushuitan API. */
        wave_id: number;
        /** The Jushuitan warehouse-company identifier. */
        wms_co_id?: number;
        /** The business records submitted to Jushuitan. */
        datas: Array<{
          /** The Jushuitan inbound or outbound document identifier. */
          io_id: number;
          /** The items value accepted by the Jushuitan API. */
          items: Array<{
            /** The skuid value accepted by the Jushuitan API. */
            skuid: string;
            /** The skusn value accepted by the Jushuitan API. */
            skusn?: string;
            /** The ioi id value accepted by the Jushuitan API. */
            ioi_id: string;
            /** The qty value accepted by the Jushuitan API. */
            qty: number;
            /** The seed qty value accepted by the Jushuitan API. */
            seed_qty: number;
          }>;
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: string;
        /** The issuccess value returned by the Jushuitan API. */
        issuccess: string;
        /** The response message returned by Jushuitan. */
        msg: string;
        [key: string]: unknown;
      };
    };
    /** Confirm an after-sale document. */
    "jushuitan.confirm_after_sale": {
      input: {
        /** The as ids value accepted by the Jushuitan API. */
        as_ids: Array<number>;
        /** The exchange force value accepted by the Jushuitan API. */
        exchange_force: boolean;
        /** The confirm refund value accepted by the Jushuitan API. */
        confirm_refund: boolean;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The success value returned by the Jushuitan API. */
          success?: Array<{
            /** The as id value returned by the Jushuitan API. */
            as_id: number;
            /** The outer as id value returned by the Jushuitan API. */
            outer_as_id: string;
            /** The response message returned by Jushuitan. */
            message: string;
            /** The details value returned by the Jushuitan API. */
            details: string;
            /** The is success value returned by the Jushuitan API. */
            is_success: boolean;
            /** The new o id value returned by the Jushuitan API. */
            new_o_id: string;
            [key: string]: unknown;
          }>;
          /** The fail value returned by the Jushuitan API. */
          fail?: Array<{
            /** The as id value returned by the Jushuitan API. */
            as_id: number;
            /** The outer as id value returned by the Jushuitan API. */
            outer_as_id: string;
            /** The response message returned by Jushuitan. */
            message: string;
            /** The details value returned by the Jushuitan API. */
            details: string;
            /** The is success value returned by the Jushuitan API. */
            is_success: boolean;
            [key: string]: unknown;
          }>;
          /** The success count value returned by the Jushuitan API. */
          success_count?: number;
          /** The fail count value returned by the Jushuitan API. */
          fail_count?: number;
          [key: string]: unknown;
        };
        /** The response message returned by Jushuitan. */
        msg?: string;
        [key: string]: unknown;
      };
    };
    /** Confirm receipt of after-sale goods, including partial confirmations. */
    "jushuitan.confirm_after_sale_goods_received": {
      input: {
        /**
         * The business parameters used to confirm receipt of after-sale goods, including partial confirmations.
         * @minItems 1
         */
        items: Array<{
          /** The as id value accepted by the Jushuitan API. */
          as_id: number;
          /** The logistics company value accepted by the Jushuitan API. */
          logistics_company: string;
          /** The l id value accepted by the Jushuitan API. */
          l_id: string;
          /** The remark value accepted by the Jushuitan API. */
          remark?: string;
          /** The items value accepted by the Jushuitan API. */
          items: Array<{
            /** The merchant SKU identifier in Jushuitan. */
            sku_id: string;
            /** The quantity warehouse: 0 for sellable, 4 for defective, or 6 through 8 for custom warehouses. Defaults to the sales-return warehouse when omitted. */
            qty_type?: number;
            /** The qty value accepted by the Jushuitan API. */
            qty: number;
            /** The batch id value accepted by the Jushuitan API. */
            batch_id?: string;
            /** The production date in YYYY-MM-DD format. */
            produced_date?: string;
            /** The expiration date in YYYY-MM-DD format. */
            expiration_date?: string;
          }>;
          /** The Jushuitan warehouse-company identifier. */
          wms_co_id?: number;
          /** The receiving warehouse identifier: 1 for main or 2 for sales returns. */
          wh_id?: number;
          /** The return id value accepted by the Jushuitan API. */
          return_id: string;
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: string;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The success value returned by the Jushuitan API. */
          success?: Array<{
            /** The as id value returned by the Jushuitan API. */
            as_id?: number;
            /** The outer as id value returned by the Jushuitan API. */
            outer_as_id?: string;
            /** The response message returned by Jushuitan. */
            message?: string;
            /** The details value returned by the Jushuitan API. */
            details?: string;
            /** The is success value returned by the Jushuitan API. */
            is_success?: boolean;
            [key: string]: unknown;
          }>;
          /** The fail value returned by the Jushuitan API. */
          fail?: Array<{
            /** The as id value returned by the Jushuitan API. */
            as_id?: string;
            /** The outer as id value returned by the Jushuitan API. */
            outer_as_id?: string;
            /** The response message returned by Jushuitan. */
            message?: string;
            /** The details value returned by the Jushuitan API. */
            details?: string;
            /** The is success value returned by the Jushuitan API. */
            is_success?: string;
            [key: string]: unknown;
          }>;
          /** The success count value returned by the Jushuitan API. */
          success_count?: number;
          /** The fail count value returned by the Jushuitan API. */
          fail_count?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Confirm after-sale goods receipt in batches by product serial number. */
    "jushuitan.confirm_after_sale_receipt_by_serial_numbers": {
      input: {
        /**
         * The business parameters used to confirm after-sale goods receipt in batches by product serial number.
         * @minItems 1
         */
        items: Array<{
          /** The sku sn value accepted by the Jushuitan API. */
          sku_sn: string;
          /** The remark value accepted by the Jushuitan API. */
          remark?: string;
          /** The Jushuitan warehouse-company identifier. */
          wms_co_id?: number;
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The response message value returned by the Jushuitan API. */
        msg?: unknown;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The success value returned by the Jushuitan API. */
          success?: Array<{
            /** The as id value returned by the Jushuitan API. */
            as_id: string;
            /** The outer as id value returned by the Jushuitan API. */
            outer_as_id: string;
            /** The sku sns value returned by the Jushuitan API. */
            sku_sns: string;
            /** The Jushuitan response code; zero indicates a successful request. */
            code: string;
            /** The response message returned by Jushuitan. */
            message: string;
            /** The details value returned by the Jushuitan API. */
            details: string;
            /** The is success value returned by the Jushuitan API. */
            is_success: string;
            [key: string]: unknown;
          }>;
          /** The fail value returned by the Jushuitan API. */
          fail?: Array<{
            /** The as id value returned by the Jushuitan API. */
            as_id: string;
            /** The outer as id value returned by the Jushuitan API. */
            outer_as_id: string;
            /** The sku sns value returned by the Jushuitan API. */
            sku_sns: string;
            /** The Jushuitan response code; zero indicates a successful request. */
            code: string;
            /** The response message returned by Jushuitan. */
            message: string;
            /** The details value returned by the Jushuitan API. */
            details: string;
            /** The is success value returned by the Jushuitan API. */
            is_success: string;
            [key: string]: unknown;
          }>;
          /** The success count value returned by the Jushuitan API. */
          success_count?: number;
          /** The fail count value returned by the Jushuitan API. */
          fail_count?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Confirm an inventory allocation document. */
    "jushuitan.confirm_allocation": {
      input: {
        /** The Jushuitan inbound or outbound document identifier. */
        io_id: number;
        /** The branch identifier. It is required when confirming a branch allocation document. */
        wms_co_id?: number;
        /** The remark value accepted by the Jushuitan API. */
        remark?: string;
        /** The is force value accepted by the Jushuitan API. */
        is_force?: boolean;
        /** The items value accepted by the Jushuitan API. */
        items?: Array<{
          /** The merchant SKU identifier in Jushuitan. */
          sku_id?: string;
          /** The qty value accepted by the Jushuitan API. */
          qty?: number;
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The issuccess value returned by the Jushuitan API. */
        issuccess?: boolean;
        /** The response message returned by Jushuitan. */
        msg?: string;
        [key: string]: unknown;
      };
    };
    /** Create an allocation difference document. */
    "jushuitan.create_allocation_difference": {
      input: {
        /** The Jushuitan inbound or outbound document identifier. */
        io_id: string;
        /**
         * The items value accepted by the Jushuitan API.
         * @maxItems 100
         */
        items: Array<{
          /** The merchant SKU identifier in Jushuitan; at most 100 items are accepted. */
          sku_id: string;
          /** The qty value accepted by the Jushuitan API. */
          qty: number;
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: number;
        /** The issuccess value returned by the Jushuitan API. */
        issuccess: boolean;
        /** The response message returned by Jushuitan. */
        msg: string;
        /** The data value returned by the Jushuitan API. */
        data: Array<{
          /** The Jushuitan inbound or outbound document identifier. */
          io_id: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Create a batch identifier for profitability data uploads. */
    "jushuitan.create_cost_upload_batch": {
      input: {
        /** The Jushuitan shop identifier. */
        shop_id?: string;
        /** The upload type: 1 for multi-cost data, 2 for custom order costs, or 7 for order expenses. */
        task_type: string;
        /** The execution mode. Use 1 for multi-cost uploads and 0 for other upload types. */
        run_type: number;
        /** The number of records in the batch, up to 100,000 across all upload requests. */
        data_count: string;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: number;
        /** The response message returned by Jushuitan. */
        msg: string;
        /** The data value returned by the Jushuitan API. */
        data: string;
        [key: string]: unknown;
      };
    };
    /** Create a first-leg cross-border logistics document. */
    "jushuitan.create_cross_border_first_leg": {
      input: {
        /** The out wms value accepted by the Jushuitan API. */
        out_wms: number;
        /** The destination wms value accepted by the Jushuitan API. */
        destination_wms: number;
        /** The first-leg type. Jushuitan currently supports OverseasWms; FBA is documented but not currently supported by this endpoint. */
        first_trip_type: string;
        /** The origin-country code selected from Jushuitan's cross-border country table. */
        out_country?: string;
        /** The destination-country code selected from Jushuitan's cross-border country table. */
        destination_country?: string;
        /** The departure port value accepted by the Jushuitan API. */
        departure_port?: string;
        /** The destination port value accepted by the Jushuitan API. */
        destination_port?: string;
        /** The delivery model value accepted by the Jushuitan API. */
        delivery_model?: string;
        /** The estimated shipment time value accepted by the Jushuitan API. */
        estimated_shipment_time?: string;
        /** The estimateInstock date value accepted by the Jushuitan API. */
        estimateInstock_date?: string;
        /** The pack num value accepted by the Jushuitan API. */
        pack_num?: number;
        /** The pack volume total value accepted by the Jushuitan API. */
        pack_volume_total?: number;
        /** The pack weight total value accepted by the Jushuitan API. */
        pack_weight_total?: number;
        /** The pack volume weight value accepted by the Jushuitan API. */
        pack_volume_weight?: number;
        /** The loading method: 0 for default, 1 for full-container load, 2 for less-than-container load, or 3 for return. */
        pack_type?: number;
        /** The container type: 0 default, 1 40HQ, 2 20HQ, 3 40GP, 4 20GP, 5 loose cargo, 6 pallet, 7 45HQ, 8 53HQ, or 9 45GP. */
        pack_size?: number;
        /** The pallet number value accepted by the Jushuitan API. */
        pallet_number?: string;
        /** The cabinet no value accepted by the Jushuitan API. */
        cabinet_no?: string;
        /** The declaration company value accepted by the Jushuitan API. */
        declaration_company?: string;
        /**
         * Up to three attachment URLs for the first-leg document.
         * @maxItems 3
         */
        attachment_urls?: Array<string>;
        /** The remark value accepted by the Jushuitan API. */
        remark?: string;
        /** The remark2 value accepted by the Jushuitan API. */
        remark2?: string;
        /** The remark3 value accepted by the Jushuitan API. */
        remark3?: string;
        /** The remark4 value accepted by the Jushuitan API. */
        remark4?: string;
        /** The remark5 value accepted by the Jushuitan API. */
        remark5?: string;
        /** The items value accepted by the Jushuitan API. */
        items: Array<{
          /** The merchant SKU identifier in Jushuitan. */
          sku_id: string;
          /** The qty value accepted by the Jushuitan API. */
          qty: number;
        }>;
        /** Whether to confirm the first-leg plan automatically. Defaults to true. */
        auto_cfm?: boolean;
        /** Whether to create an allocation automatically. This applies only when auto_cfm is true. */
        is_auto_create_allocate?: boolean;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The first trip code value returned by the Jushuitan API. */
          first_trip_code?: string;
          /** The response message returned by Jushuitan. */
          message?: string;
          /** The is cfmed value returned by the Jushuitan API. */
          is_cfmed?: boolean;
          /** The allocation document identifier, returned only when the allocation document was created successfully. */
          io_id?: number;
          [key: string]: unknown;
        };
        /** The response message value returned by the Jushuitan API. */
        msg?: unknown;
        /** The request identifier assigned by Jushuitan. */
        request_id?: unknown;
        [key: string]: unknown;
      };
    };
    /** Create a cross-warehouse inventory allocation. */
    "jushuitan.create_cross_warehouse_allocation": {
      input: {
        /**
         * The business parameters used to create a cross-warehouse inventory allocation.
         * @minItems 1
         */
        items: Array<{
          /** The online sales-order identifier. */
          so_id: string;
          /** The io date value accepted by the Jushuitan API. */
          io_date: string;
          /** The price value accepted by the Jushuitan API. */
          price?: number;
          /** The source warehouse-company identifier configured as a third-party logistics provider or branch in ERP. */
          go_co_id: number;
          /** The source warehouse identifier: 1 for main, 2 for sales returns, 3 for purchasing, 4 for defective goods, or 6 through 15 for custom warehouses 1 through 10. */
          warehouse?: number;
          /** The destination warehouse-company identifier configured as a third-party logistics provider or branch in ERP. */
          link_co_id: number;
          /** The destination warehouse identifier: 1 for main, 2 for sales returns, 3 for purchasing, 4 for defective goods, or 6 through 15 for custom warehouses 1 through 10. */
          link_warehouse?: number;
          /** The remark value accepted by the Jushuitan API. */
          remark?: string;
          /** The l id value accepted by the Jushuitan API. */
          l_id?: string;
          /** The lc id value accepted by the Jushuitan API. */
          lc_id?: string;
          /** The items value accepted by the Jushuitan API. */
          items: Array<{
            /** The merchant SKU identifier in Jushuitan. */
            sku_id: string;
            /** The qty value accepted by the Jushuitan API. */
            qty: number;
            /** The unique serial numbers. They are recorded only when unique-code tracking is enabled and is_confirm is true. */
            sku_sns?: Array<string>;
            /** The batch id value accepted by the Jushuitan API. */
            batch_id?: string;
            /** The produced date value accepted by the Jushuitan API. */
            produced_date?: string;
            /** The expiration date value accepted by the Jushuitan API. */
            expiration_date?: string;
            /** The remark value accepted by the Jushuitan API. */
            remark?: string;
            /** The cost price, rounded to four decimal places. When omitted, Jushuitan uses the product master cost price. */
            cost_price?: number;
          }>;
          /** The receiver name value accepted by the Jushuitan API. */
          receiver_name?: string;
          /** The receiver mobile value accepted by the Jushuitan API. */
          receiver_mobile?: string;
          /** The receiver state value accepted by the Jushuitan API. */
          receiver_state?: string;
          /** The receiver city value accepted by the Jushuitan API. */
          receiver_city?: string;
          /** The receiver district value accepted by the Jushuitan API. */
          receiver_district?: string;
          /** The receiver address value accepted by the Jushuitan API. */
          receiver_address?: string;
          /** The is confirm value accepted by the Jushuitan API. */
          is_confirm?: boolean;
          /** Whether to approve the document; for inventory not reserved by sales, true confirms it. */
          is_confirming?: boolean;
          /** The labels value accepted by the Jushuitan API. */
          labels?: Array<string>;
          /** The lock wh id value accepted by the Jushuitan API. */
          lock_wh_id?: number;
          /** The link lock wh id value accepted by the Jushuitan API. */
          link_lock_wh_id?: number;
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data: {
          /** The business records returned in this response. */
          datas: Array<{
            /** The online sales-order identifier. */
            so_id: string;
            /** The Jushuitan inbound or outbound document identifier. */
            io_id: string;
            /** The inbound allocation identifier, returned when is_confirm is true. */
            allocateIn_io_id?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Create an inventory allocation within a warehouse. */
    "jushuitan.create_intra_warehouse_allocation": {
      input: {
        /** The io date value accepted by the Jushuitan API. */
        io_date: string;
        /** The destination warehouse identifier: 1 for main, 2 for sales returns, 3 for purchasing, 4 for defective goods, or 6 through 15 for custom warehouses 1 through 10. */
        link_warehouse: number;
        /** The remark value accepted by the Jushuitan API. */
        remark: string;
        /**
         * The unique external allocation identifier, shown as the online order number after creation.
         * @maxLength 50
         */
        so_id: string;
        /** The source warehouse identifier: 1 for main, 2 for sales returns, 3 for purchasing, 4 for defective goods, or 6 through 15 for custom warehouses 1 through 10. */
        warehouse: number;
        /** The branch identifier configured as a third-party logistics provider or branch in ERP. */
        wms_co_id?: number;
        /** The l id value accepted by the Jushuitan API. */
        l_id?: string;
        /** The lc id value accepted by the Jushuitan API. */
        lc_id?: string;
        /** The items value accepted by the Jushuitan API. */
        items: Array<{
          /** The qty value accepted by the Jushuitan API. */
          qty: number;
          /** The merchant SKU identifier in Jushuitan. */
          sku_id: string;
          /** The batch id value accepted by the Jushuitan API. */
          batch_id?: string;
          /** The produced date value accepted by the Jushuitan API. */
          produced_date?: string;
          /** The expiration date value accepted by the Jushuitan API. */
          expiration_date?: string;
          /** The remark value accepted by the Jushuitan API. */
          remark?: string;
          /** The unique serial numbers. They are recorded only when unique-code tracking is enabled for the account and product and is_confirm is true. */
          sku_sns?: Array<string>;
          /** The cost price, rounded to four decimal places. When omitted, Jushuitan uses the product master cost price. */
          cost_print?: number;
        }>;
        /** The labels value accepted by the Jushuitan API. */
        labels?: Array<string>;
        /** The is confirm value accepted by the Jushuitan API. */
        is_confirm?: boolean;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The data value returned by the Jushuitan API. */
          data?: {
            /** The Jushuitan inbound or outbound document identifier. */
            io_id?: number;
            /** The online sales-order identifier. */
            so_id?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Create a miscellaneous inbound or outbound stock document. */
    "jushuitan.create_other_stock_movement": {
      input: {
        /** Whether to confirm the document. Defaults to false. */
        is_confirm: boolean;
        /** Whether to approve the document. Defaults to false. */
        excute_confirming?: boolean;
        /** The Jushuitan warehouse-company identifier. */
        wms_co_id?: number;
        /** The movement direction: in for miscellaneous inbound or out for miscellaneous outbound. When type is in and is_return is false, the document is a miscellaneous receipt. */
        type: string;
        /** The external id value accepted by the Jushuitan API. */
        external_id: string;
        /** The warehouse identifier. Defaults to 1; 1 is main, 2 sales returns, 3 purchasing, 4 defective goods, and 6 through 15 custom warehouses 1 through 10. */
        warehouse?: number;
        /** The document remark; it cannot be empty. */
        remark?: string;
        /** The drp co name value accepted by the Jushuitan API. */
        drp_co_name?: string;
        /**
         * The stock-movement line items; at most 1,000 are accepted.
         * @maxItems 1000
         */
        items: Array<{
          /** The merchant SKU identifier in Jushuitan. */
          sku_id: string;
          /** The sku sns value accepted by the Jushuitan API. */
          sku_sns?: Array<string>;
          /** The quantity, which must be greater than zero. */
          qty: number;
          /** The supplier id value accepted by the Jushuitan API. */
          supplier_id?: number;
          /** The production batch identifier, available when production batch management is enabled for the company and branch. */
          batch_id?: string;
          /** The production date, available when production batch management is enabled for the company and branch. */
          produced_date?: string;
          /** The expiration date, available when production batch management is enabled for the company and branch. */
          expiration_date?: string;
          /** The remark value accepted by the Jushuitan API. */
          remark?: string;
          /** The sale price value accepted by the Jushuitan API. */
          sale_price?: number;
          /**
           * The cost price, rounded to four decimal places. When omitted, Jushuitan uses the product master cost price; the maximum is 99999999.
           * @maximum 99999999
           */
          cost_price?: number;
        }>;
        /** The receiver name value accepted by the Jushuitan API. */
        receiver_name?: string;
        /** The receiver mobile value accepted by the Jushuitan API. */
        receiver_mobile?: string;
        /** The receiver state value accepted by the Jushuitan API. */
        receiver_state?: string;
        /** The receiver city value accepted by the Jushuitan API. */
        receiver_city?: string;
        /** The receiver district value accepted by the Jushuitan API. */
        receiver_district?: string;
        /** The receiver address value accepted by the Jushuitan API. */
        receiver_address?: string;
        /** The document labels, whose combined length cannot exceed 200 characters. */
        labels?: Array<string>;
        /** The lock wh id value accepted by the Jushuitan API. */
        lock_wh_id?: number;
        /** The lock wh name value accepted by the Jushuitan API. */
        lock_wh_name?: string;
        /** The lc id value accepted by the Jushuitan API. */
        lc_id?: string;
        /** The l id value accepted by the Jushuitan API. */
        l_id?: string;
        /** The logistics company value accepted by the Jushuitan API. */
        logistics_company?: string;
        /** Whether an inbound movement is a miscellaneous return. It applies only when type is in and defaults to true; false creates a miscellaneous receipt. */
        is_return?: boolean;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The data value returned by the Jushuitan API. */
          data?: {
            /** The external id value returned by the Jushuitan API. */
            external_id?: string;
            /** The Jushuitan inbound or outbound document identifier. */
            io_id?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Create a production batch management record. */
    "jushuitan.create_production_batch": {
      input: {
        /** The items value accepted by the Jushuitan API. */
        items: Array<{
          /** The merchant SKU identifier in Jushuitan. */
          sku_id: string;
          /** The batch id value accepted by the Jushuitan API. */
          batch_id: string;
          /** The produced date value accepted by the Jushuitan API. */
          produced_date: string;
          /** The expiration date value accepted by the Jushuitan API. */
          expiration_date: string;
          /** The supplier id value accepted by the Jushuitan API. */
          supplier_id?: number;
          /** The udi value accepted by the Jushuitan API. */
          udi?: string;
          /** The remark value accepted by the Jushuitan API. */
          remark?: string;
          /** The is enable value accepted by the Jushuitan API. */
          is_enable?: boolean;
        }>;
        /** The Jushuitan warehouse-company identifier. */
        wms_co_id?: number;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: boolean;
        /** The response message value returned by the Jushuitan API. */
        msg?: unknown;
        /** The request identifier assigned by Jushuitan. */
        request_id?: unknown;
        [key: string]: unknown;
      };
    };
    /** Create purchase receipt documents in batches. */
    "jushuitan.create_purchase_receipts": {
      input: {
        /**
         * The business parameters used to create purchase receipt documents in batches.
         * @minItems 1
         */
        items: Array<{
          /** Whether to confirm the document automatically. Defaults to false, leaving it pending confirmation. */
          is_confirm: boolean;
          /** The unique external purchase-receipt identifier. */
          external_id: string;
          /** The internal supplier identifier. When po_id is provided, this field is optional and the supplier from that purchase order is used. */
          supplier_id: number;
          /** The po id value accepted by the Jushuitan API. */
          po_id?: number;
          /** The bio id value accepted by the Jushuitan API. */
          bio_id?: number;
          /** The outer po id value accepted by the Jushuitan API. */
          outer_po_id?: number;
          /** The Jushuitan warehouse-company identifier. */
          wms_co_id?: number;
          /** The warehouse identifier: 1 for main, 2 for sales returns, 3 for purchasing, 4 for defective goods, or 6 and above for custom warehouses. */
          warehouse?: number;
          /** The remark value accepted by the Jushuitan API. */
          remark?: string;
          /** The tax rate value accepted by the Jushuitan API. */
          tax_rate?: number;
          /** The Jushuitan ERP company identifier. */
          co_id?: string;
          /** The lock wh name value accepted by the Jushuitan API. */
          lock_wh_name?: string;
          /** The lock wh id value accepted by the Jushuitan API. */
          lock_wh_id?: string;
          /** The ERP user identifier. Defaults to 0 when omitted and affects report attribution. */
          user_id?: string;
          /** The creator name. Defaults to @open when omitted. */
          channel?: string;
          /** The is in by pack value accepted by the Jushuitan API. */
          is_in_by_pack?: boolean;
          /** The is create pack by item value accepted by the Jushuitan API. */
          is_create_pack_by_item?: boolean;
          /** An existing package identifier, effective when is_in_by_pack is true. */
          old_pack_id?: string;
          /** Whether to reject mixed packages. It applies when is_in_by_pack is true and is_bulk_pack is false; true also rejects an existing mixed package. */
          is_check_mix_pack?: boolean;
          /** Whether to use counted bulk packing, effective when is_in_by_pack is true. */
          is_bulk_pack?: boolean;
          /** The number of packages, effective when is_in_by_pack is true and is_bulk_pack is false. */
          pack_qty?: number;
          /** The labels value accepted by the Jushuitan API. */
          labels?: string;
          /**
           * The purchase-receipt line items; at most 1,000 are accepted.
           * @maxItems 1000
           */
          items: Array<{
            /** The qty value accepted by the Jushuitan API. */
            qty: number;
            /** The tax rate value accepted by the Jushuitan API. */
            tax_rate?: number;
            /** The merchant SKU identifier in Jushuitan. */
            sku_id: string;
            /** The pack id value accepted by the Jushuitan API. */
            pack_id?: string;
            /** The unique serial numbers for non-Gold Edition ERP; they are saved only when unique-code tracking is enabled for the product. */
            sku_sn?: Array<string>;
            /** The sku sn list value accepted by the Jushuitan API. */
            sku_sn_list?: Array<{
              /** The sku sn value accepted by the Jushuitan API. */
              sku_sn: string;
              /** The cost price value accepted by the Jushuitan API. */
              cost_price?: number;
              /** The remark value accepted by the Jushuitan API. */
              remark?: string;
              /** The weight value accepted by the Jushuitan API. */
              weight?: number;
              /** The certificate no value accepted by the Jushuitan API. */
              certificate_no?: string;
              /** The processing charges value accepted by the Jushuitan API. */
              processing_charges?: number;
              /** The processing price value accepted by the Jushuitan API. */
              processing_price?: number;
              /** The raw material price value accepted by the Jushuitan API. */
              raw_material_price?: number;
              /** The raw material amount value accepted by the Jushuitan API. */
              raw_material_amount?: number;
              /** The surcharge value accepted by the Jushuitan API. */
              surcharge?: number;
              /** The Gold Edition pricing method: 0 for fixed price, 1 for material settlement plus processing fee, or 2 for price settlement plus processing fee. */
              pricing_method?: number;
              /** The in ext model value accepted by the Jushuitan API. */
              in_ext_model?: {
                /** The other1 value accepted by the Jushuitan API. */
                other1?: string;
                /** The other2 value accepted by the Jushuitan API. */
                other2?: string;
                /** The other3 value accepted by the Jushuitan API. */
                other3?: string;
                /** The other weight1 value accepted by the Jushuitan API. */
                other_weight1?: number;
                /** The other weight2 value accepted by the Jushuitan API. */
                other_weight2?: number;
                /** The other weight3 value accepted by the Jushuitan API. */
                other_weight3?: number;
                /** The other costPrice1 value accepted by the Jushuitan API. */
                other_costPrice1?: number;
                /** The other costPrice2 value accepted by the Jushuitan API. */
                other_costPrice2?: number;
                /** The other costPrice3 value accepted by the Jushuitan API. */
                other_costPrice3?: number;
                /** The other processing charges1 value accepted by the Jushuitan API. */
                other_processing_charges1?: number;
                /** The other processing charges2 value accepted by the Jushuitan API. */
                other_processing_charges2?: number;
                /** The other processing charges3 value accepted by the Jushuitan API. */
                other_processing_charges3?: number;
              };
            }>;
            /** The price value accepted by the Jushuitan API. */
            price?: string;
            /** The production batch identifier, available when the corresponding ERP feature is enabled. */
            batch_id?: string;
            /** The production date, available when the corresponding ERP feature is enabled. */
            produced_date?: string;
            /** The expiration date, available when the corresponding ERP feature is enabled. */
            expiration_date?: string;
            /** The remark value accepted by the Jushuitan API. */
            remark?: string;
            /** The unique package serial number. The package-serial-number flow is independent from and incompatible with the packing flow. */
            pack_sn?: string;
          }>;
          /** Whether to parse child serial numbers after receipt. When true, is_confirm must also be true and the corresponding ERP setting must be enabled. */
          is_need_parse_code?: boolean;
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: string;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The request identifier assigned by Jushuitan. */
        request_id?: string;
        /** The data value returned by the Jushuitan API. */
        data?: Array<{
          /** The response message returned by Jushuitan. */
          msg: string;
          /** The is success value returned by the Jushuitan API. */
          is_success: string;
          /** The external  id value returned by the Jushuitan API. */
          external__id: string;
          /** The Jushuitan inbound or outbound document identifier. */
          io_id: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Create purchase return documents in batches. */
    "jushuitan.create_purchase_returns": {
      input: {
        /**
         * The business parameters used to create purchase return documents in batches.
         * @minItems 1
         */
        items: Array<{
          /** The is confirm value accepted by the Jushuitan API. */
          is_confirm?: boolean;
          /** The return type: 0 for ordinary, 1 for quality-inspection, or 2 for repair. Defaults to 0. */
          type?: number;
          /** The external id value accepted by the Jushuitan API. */
          external_id: string;
          /** The supplier id value accepted by the Jushuitan API. */
          supplier_id: number;
          /** The purchase-order identifier. When it is greater than 0 and type is 0, Jushuitan forces type to 1. */
          po_id?: number;
          /** The Jushuitan warehouse-company identifier. */
          wms_co_id?: number;
          /** Whether a third-party warehouse creates the document for the owner. Defaults to false and cannot be true together with is_confirm. */
          create_in_owner?: boolean;
          /** The warehouse type: 1 main, 2 sales return, 3 purchasing, 4 defective goods, or 6 through 15 for custom warehouses 1 through 10. Defaults to the purchasing warehouse. */
          warehouse?: number;
          /** The labels value accepted by the Jushuitan API. */
          labels?: Array<string>;
          /** The receiver mobile value accepted by the Jushuitan API. */
          receiver_mobile?: number;
          /** The receiver state value accepted by the Jushuitan API. */
          receiver_state?: string;
          /** The receiver city value accepted by the Jushuitan API. */
          receiver_city?: string;
          /** The Jushuitan ERP company identifier. */
          co_id?: number;
          /** The receiver name value accepted by the Jushuitan API. */
          receiver_name?: string;
          /** The receiver district value accepted by the Jushuitan API. */
          receiver_district?: string;
          /** The receiver address value accepted by the Jushuitan API. */
          receiver_address?: string;
          /** The lc id value accepted by the Jushuitan API. */
          lc_id?: string;
          /** The l id value accepted by the Jushuitan API. */
          l_id?: string;
          /** The lock wh id value accepted by the Jushuitan API. */
          lock_wh_id?: number;
          /** The remark value accepted by the Jushuitan API. */
          remark?: string;
          /** The items value accepted by the Jushuitan API. */
          items: Array<{
            /** The merchant SKU identifier in Jushuitan. */
            sku_id: string;
            /** The sku sn value accepted by the Jushuitan API. */
            sku_sn?: Array<string>;
            /** The qty value accepted by the Jushuitan API. */
            qty: number;
            /** The price value accepted by the Jushuitan API. */
            price?: number;
            /** The supplier id value accepted by the Jushuitan API. */
            supplier_id?: number;
            /** The production batch identifier. Production-batch management must be enabled for the merchant and, for branch data, for the branch warehouse. */
            batch_id?: string;
            /** The production date. Production-batch management must be enabled for the merchant and, for branch data, for the branch warehouse. */
            produced_date?: string;
            /** The remark value accepted by the Jushuitan API. */
            remark?: string;
            /** The tax rate value accepted by the Jushuitan API. */
            tax_rate?: number;
          }>;
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: string;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The request identifier assigned by Jushuitan. */
        request_id?: string;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The external id value returned by the Jushuitan API. */
          external_id?: string;
          /** The Jushuitan inbound or outbound document identifier. */
          io_id?: number;
          /** The is success value returned by the Jushuitan API. */
          is_success?: boolean;
          /** The response message returned by Jushuitan. */
          msg?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Create a virtual-warehouse inventory allocation document. */
    "jushuitan.create_virtual_warehouse_allocation": {
      input: {
        /** The out lwh id value accepted by the Jushuitan API. */
        out_lwh_id: number;
        /** Whether to approve and activate the document. Defaults to false. */
        examine?: boolean;
        /** The in lwh id value accepted by the Jushuitan API. */
        in_lwh_id: number;
        /** The Jushuitan warehouse-company identifier. */
        wms_co_id: number;
        /** The online sales-order identifier. */
        so_id: string;
        /** The remark value accepted by the Jushuitan API. */
        remark: string;
        /** The items value accepted by the Jushuitan API. */
        items: Array<{
          /** The merchant SKU identifier in Jushuitan. */
          sku_id: string;
          /** The qty value accepted by the Jushuitan API. */
          qty?: number;
          /** Unique serial-number data. Enable the wms.buid.checkout unified feature before supplying this field. */
          sku_sns?: Array<{
            /** The merchant SKU identifier in Jushuitan. */
            sku_id: string;
            /** The sku sn value accepted by the Jushuitan API. */
            sku_sn: string;
          }>;
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The Jushuitan inbound or outbound document identifier. */
          io_id?: number;
          /** The response message returned by Jushuitan. */
          msg?: string;
          /** The Jushuitan response code; zero indicates a successful request. */
          code?: number;
          [key: string]: unknown;
        };
        /** The response message value returned by the Jushuitan API. */
        msg?: unknown;
        /** The request identifier assigned by Jushuitan. */
        request_id?: unknown;
        [key: string]: unknown;
      };
    };
    /** Create a virtual-warehouse allocation or return document. */
    "jushuitan.create_virtual_warehouse_operation": {
      input: {
        /** The lwh id value accepted by the Jushuitan API. */
        lwh_id: number;
        /** Whether to approve and activate the document. Defaults to false. */
        examine?: boolean;
        /** The warehouse-company identifier, required when using a branch virtual warehouse. */
        wms_co_id: number;
        /** The online sales-order identifier. */
        so_id: string;
        /** The type value accepted by the Jushuitan API. */
        type: string;
        /** The items value accepted by the Jushuitan API. */
        items: Array<{
          /** The merchant SKU identifier in Jushuitan. */
          sku_id: string;
          /** The quantity to lock. When omitted or zero, Jushuitan uses the available quantity. */
          qty?: number;
        }>;
        /** Whether to allow locking beyond available stock. It applies only when examine is true and defaults to false. */
        isIgnore_check_stock?: boolean;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The Jushuitan inbound or outbound document identifier. */
          io_id?: number;
          /** The response message returned by Jushuitan. */
          msg?: string;
          /** The Jushuitan response code; zero indicates a successful request. */
          code?: number;
          [key: string]: unknown;
        };
        /** The response message value returned by the Jushuitan API. */
        msg?: unknown;
        /** The request identifier assigned by Jushuitan. */
        request_id?: unknown;
        [key: string]: unknown;
      };
    };
    /** Force-confirm a single-item shortage order and receive it into inventory. */
    "jushuitan.force_confirm_and_stock_in_shortage_order": {
      input: {
        /** The supplier id value accepted by the Jushuitan API. */
        supplier_id?: number;
        /** The external id value accepted by the Jushuitan API. */
        external_id: string;
        /** The Jushuitan warehouse-company identifier. */
        wms_co_id?: number;
        /** The po id value accepted by the Jushuitan API. */
        po_id?: number;
        /** The remark value accepted by the Jushuitan API. */
        remark?: string;
        /** The tax rate value accepted by the Jushuitan API. */
        tax_rate?: number;
        /** The Jushuitan ERP company identifier. */
        co_id?: number;
        /** The lc id value accepted by the Jushuitan API. */
        lc_id?: string;
        /** The items value accepted by the Jushuitan API. */
        items: Array<{
          /** The merchant SKU identifier in Jushuitan. */
          sku_id: string;
          /** The product quantity. Defaults to 1 when omitted. */
          qty?: number;
          /** The sku sn value accepted by the Jushuitan API. */
          sku_sn?: Array<string>;
          /** The price value accepted by the Jushuitan API. */
          price?: number;
          /** The batch identifier, required when production-batch tracking is enabled. */
          batch_id?: string;
          /** The production date, required when production-batch tracking is enabled. */
          produced_date?: string;
          /** The expiration date, required when production-batch tracking is enabled. */
          expiration_date?: string;
          /** The remark value accepted by the Jushuitan API. */
          remark?: string;
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: Array<{
          /** The external id value returned by the Jushuitan API. */
          external_id?: string;
          /** The Jushuitan inbound or outbound document identifier. */
          io_id?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Force-confirm single-item shortage orders for shipment. */
    "jushuitan.force_confirm_shortage_order_for_shipping": {
      input: {
        /** The lc id value accepted by the Jushuitan API. */
        lc_id?: string;
        /** The is single value accepted by the Jushuitan API. */
        is_single?: boolean;
        /** The items value accepted by the Jushuitan API. */
        items: Array<{
          /** The batch id value accepted by the Jushuitan API. */
          batch_id?: string;
          /** The pack id value accepted by the Jushuitan API. */
          pack_id?: string;
          /** The qty value accepted by the Jushuitan API. */
          qty: number;
          /** The merchant SKU identifier in Jushuitan. */
          sku_id: string;
          /** The sku sn value accepted by the Jushuitan API. */
          sku_sn?: Array<string>;
          /** The price value accepted by the Jushuitan API. */
          price?: number;
          /** The plan arrive date value accepted by the Jushuitan API. */
          plan_arrive_date?: string;
          /** The produced date value accepted by the Jushuitan API. */
          produced_date?: string;
          /** The remark value accepted by the Jushuitan API. */
          remark?: string;
          /** The expiration date value accepted by the Jushuitan API. */
          expiration_date?: string;
          /** The tax rate value accepted by the Jushuitan API. */
          tax_rate?: number;
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: number;
        /** The response message returned by Jushuitan. */
        message: string;
        /** The data value returned by the Jushuitan API. */
        data: {
          /** The success value returned by the Jushuitan API. */
          success: string;
          /** The response message returned by Jushuitan. */
          message: string;
          /** The sku data value returned by the Jushuitan API. */
          sku_data: {
            /** The merchant SKU identifier in Jushuitan. */
            sku_id: string;
            /** The qty value returned by the Jushuitan API. */
            qty: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Generate unique labels for fast-moving products. */
    "jushuitan.generate_fast_moving_labels": {
      input: {
        /** The order ids value accepted by the Jushuitan API. */
        order_ids: Array<number>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: number;
        /** The response message returned by Jushuitan. */
        msg: string;
        /** The data value returned by the Jushuitan API. */
        data: {
          /** The generation status: 0 generating, 1 completed successfully, or -1 failed and stopped. */
          status: number;
          /** The sku sn num value returned by the Jushuitan API. */
          sku_sn_num: number;
          /** The messages value returned by the Jushuitan API. */
          messages: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get first-leg logistics fees for an allocation document. */
    "jushuitan.get_allocation_first_leg_fee": {
      input: {
        /** The end of the modification-time range. Provide a complete modification-time range, io_ids, or first_trip_codes. */
        modify_end_time?: string;
        /**
         * The one-based page number.
         * @minimum 1
         */
        page_num: number;
        /** The start of the modification-time range. Provide a complete modification-time range, io_ids, or first_trip_codes. */
        modify_start_time?: string;
        /** Allocation document identifiers. Provide a complete modification-time range, io_ids, or first_trip_codes. */
        io_ids?: Array<number>;
        /** First-leg document codes. Provide a complete modification-time range, io_ids, or first_trip_codes. */
        first_trip_codes?: Array<string>;
        /**
         * The number of records requested or returned in one page.
         * @minimum 1
         */
        page_size: number;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The allocatefee detail list value returned by the Jushuitan API. */
          allocatefee_detail_list?: Array<{
            /** The first trip code value returned by the Jushuitan API. */
            first_trip_code?: string;
            /** The modify time value returned by the Jushuitan API. */
            modify_time?: string;
            /** The real sent date value returned by the Jushuitan API. */
            real_sent_date?: string;
            /** The io ids value returned by the Jushuitan API. */
            io_ids?: Array<number>;
            /** The logistics info value returned by the Jushuitan API. */
            logistics_info?: Array<{
              /** The logistics name value returned by the Jushuitan API. */
              logistics_name: string;
              /** The freight price value returned by the Jushuitan API. */
              freight_price: number;
              /** The freight currency value returned by the Jushuitan API. */
              freight_currency: string;
              /** The freight cny rate value returned by the Jushuitan API. */
              freight_cny_rate: number;
              /** The tariff price value returned by the Jushuitan API. */
              tariff_price: number;
              /** The tariff currency value returned by the Jushuitan API. */
              tariff_currency: string;
              /** The tariff cny rate value returned by the Jushuitan API. */
              tariff_cny_rate: number;
              /** The other cost price value returned by the Jushuitan API. */
              other_cost_price: number;
              /** The other cost currency value returned by the Jushuitan API. */
              other_cost_currency: string;
              /** The other cost cny rate value returned by the Jushuitan API. */
              other_cost_cny_rate: number;
              /** The sku fees value returned by the Jushuitan API. */
              sku_fees: Array<{
                /** The merchant SKU identifier in Jushuitan. */
                sku_id: string;
                /** The freight price value returned by the Jushuitan API. */
                freight_price: number;
                /** The tariff price value returned by the Jushuitan API. */
                tariff_price: number;
                /** The other cost price value returned by the Jushuitan API. */
                other_cost_price: number;
                /** The share qty value returned by the Jushuitan API. */
                share_qty: number;
                [key: string]: unknown;
              }>;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** The response message value returned by the Jushuitan API. */
        msg?: unknown;
        /** The request identifier assigned by Jushuitan. */
        request_id?: unknown;
        [key: string]: unknown;
      };
    };
    /** Get status information for a profitability data upload batch. */
    "jushuitan.get_cost_upload_batch_status": {
      input: {
        /** The upload batch identifier. */
        task_id: string;
        /** The task type: 1 for multi-cost data, 2 for custom order costs, 3 for distribution costs, or 4 for style-code costs. */
        task_type: number;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: number;
        /** The response message returned by Jushuitan. */
        msg: string;
        /** The data value returned by the Jushuitan API. */
        data: {
          /** The task id value returned by the Jushuitan API. */
          task_id: string;
          /** The name value returned by the Jushuitan API. */
          name: string;
          /** The Jushuitan ERP company identifier. */
          co_id: number;
          /** The upload start time value returned by the Jushuitan API. */
          upload_start_time: string;
          /** The upload end time value returned by the Jushuitan API. */
          upload_end_time: string;
          /** The batch status: pending upload, pending execution, running, failed, succeeded, partially succeeded, or voided. */
          status: string;
          /** The err msg value returned by the Jushuitan API. */
          err_msg: string;
          /** The task detail list value returned by the Jushuitan API. */
          task_detail_list: Array<{
            /** The task detail id value returned by the Jushuitan API. */
            task_detail_id: string;
            /** The Jushuitan ERP company identifier. */
            co_id: string;
            /** The batch-detail status: pending upload, pending execution, running, failed, succeeded, partially succeeded, or voided. */
            status: string;
            /** The err msg value returned by the Jushuitan API. */
            err_msg: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get the number of orders eligible for expedited shipment. */
    "jushuitan.get_fast_delivery_order_count": {
      input: {
        /** The merchant SKU identifier in Jushuitan. */
        sku_id: string;
        /**
         * The requested match quantity. Defaults to 1 and is capped at 500.
         * @maximum 500
         */
        qty?: number;
        /** The platform selector; pass the fixed value 1. */
        platform: number;
        /** The Jushuitan warehouse-company identifier. */
        wms_co_id?: number;
        /** The owner co id value accepted by the Jushuitan API. */
        owner_co_id?: number;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The order count value returned by the Jushuitan API. */
          order_count?: string;
          /** The order info value returned by the Jushuitan API. */
          order_info?: Array<{
            /** The internal Jushuitan order identifier. */
            o_id?: number;
            /** The Jushuitan inbound or outbound document identifier. */
            io_id?: number;
            /** The logistics company value returned by the Jushuitan API. */
            logistics_company?: unknown;
            /** The pay date value returned by the Jushuitan API. */
            pay_date?: string;
            /** The plan delivery date value returned by the Jushuitan API. */
            plan_delivery_date?: string;
            /** The is multi value returned by the Jushuitan API. */
            is_multi?: boolean;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** The response message value returned by the Jushuitan API. */
        msg?: unknown;
        /** The request identifier assigned by Jushuitan. */
        request_id?: unknown;
        [key: string]: unknown;
      };
    };
    /** Get unique serial-number information for a fast-moving product. */
    "jushuitan.get_fast_moving_serial_number": {
      input: {
        /**
         * The one-based page number.
         * @minimum 1
         */
        page_index: number;
        /**
         * The number of records per page. Defaults to 30 and cannot exceed 500.
         * @minimum 1
         * @maximum 500
         */
        page_size: number;
        /** The start time value accepted by the Jushuitan API. */
        start_time?: string;
        /** The end time value accepted by the Jushuitan API. */
        end_time?: string;
        /** The last max id value accepted by the Jushuitan API. */
        last_max_id?: number;
        /** Source order identifiers. This selector and the time range cannot both be empty. */
        from_o_id?: Array<number>;
        /**
         * Online sales-order identifiers, up to 100 per request.
         * @maxItems 100
         */
        so_id?: Array<string>;
        /** Fast-moving labels. This selector and the time range cannot both be empty. */
        sku_sn?: Array<string>;
        /** The except status value accepted by the Jushuitan API. */
        except_status?: Array<string>;
      };
      output: {
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The HasNext value returned by the Jushuitan API. */
          HasNext?: boolean;
          /** The Items value returned by the Jushuitan API. */
          Items?: Array<{
            /** The SkuSn value returned by the Jushuitan API. */
            SkuSn?: string;
            /** The source type: 0 not compared, 1 purchasing, 2 picking, or 3 awaiting warehouse inspection. */
            SourceType?: string;
            /** The Gifts value returned by the Jushuitan API. */
            Gifts?: Array<{
              /** The SkuId value returned by the Jushuitan API. */
              SkuId?: string;
              /** The Qty value returned by the Jushuitan API. */
              Qty?: number;
              [key: string]: unknown;
            }>;
            /** The arrival time, empty until the product arrives. */
            ArrivalDate?: string;
            /** The shipment time, empty until the related order ships. */
            SendDate?: string;
            /** The Area value returned by the Jushuitan API. */
            Area?: string;
            /** The AreaBin value returned by the Jushuitan API. */
            AreaBin?: string;
            /** The PKey value returned by the Jushuitan API. */
            PKey?: string;
            /** The ArriveNum value returned by the Jushuitan API. */
            ArriveNum?: string;
            /** The LogisticsCompany value returned by the Jushuitan API. */
            LogisticsCompany?: string;
            /** The MinPurchaseDate value returned by the Jushuitan API. */
            MinPurchaseDate?: string;
            /** The IsArrive value returned by the Jushuitan API. */
            IsArrive?: string;
            /** The IsCanceled value returned by the Jushuitan API. */
            IsCanceled?: string;
            /** The SkuId value returned by the Jushuitan API. */
            SkuId?: string;
            /** The Qty value returned by the Jushuitan API. */
            Qty?: number;
            /** The FromOId value returned by the Jushuitan API. */
            FromOId?: number;
            /** The FromOiId value returned by the Jushuitan API. */
            FromOiId?: number;
            [key: string]: unknown;
          }>;
          /** The maximum record identifier on the current page. */
          MaxId?: number;
          [key: string]: unknown;
        };
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: string;
        /** The issuccess value returned by the Jushuitan API. */
        issuccess?: string;
        /** The response message returned by Jushuitan. */
        msg?: string;
        [key: string]: unknown;
      };
    };
    /** Get ordinary product details by SKU code. */
    "jushuitan.get_product_by_sku": {
      input: {
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        page_index?: number;
        /**
         * The number of records per page. Defaults to 30 and cannot exceed 100.
         * @minimum 1
         * @maximum 100
         */
        page_size?: number;
        /** The inclusive beginning of the modification-time filter. Provide it together with modified_end; the interval cannot exceed seven days, and either a time range or another product selector is required. One-hour windows are recommended for better performance. */
        modified_begin?: string;
        /** The end of the modification-time filter. Provide it together with modified_begin; the interval cannot exceed seven days, and either a time range or another product selector is required. */
        modified_end?: string;
        /** Up to 20 comma-separated merchant SKU identifiers to match. At least one supported selector, such as a product name, modification-time range, SKU identifier, model identifier, brand, or auxiliary code, must be provided. */
        sku_ids?: string;
        /** The exact product name to match; only one name is supported. At least one supported selector, such as a product name, modification-time range, SKU identifier, model identifier, brand, or auxiliary code, must be provided. */
        exactly_name?: string;
        /** The product name to match approximately; only one name is supported. At least one supported selector, such as a product name, modification-time range, SKU identifier, model identifier, brand, or auxiliary code, must be provided. */
        name?: string;
        /** The brands to match. At least one supported selector, such as a product name, modification-time range, SKU identifier, model identifier, brand, or auxiliary code, must be provided. */
        brand?: Array<string>;
        /** The i ids value accepted by the Jushuitan API. */
        i_ids?: Array<string>;
        /** The date field used by the time range: created or modified. Defaults to modified. */
        date_field?: string;
        /** The flds value accepted by the Jushuitan API. */
        flds?: string;
        /** The auxiliary product codes to match. At least one supported selector, such as a product name, modification-time range, SKU identifier, model identifier, brand, or auxiliary code, must be provided. */
        sku_codes?: string;
        /** The labels value accepted by the Jushuitan API. */
        labels?: Array<string>;
        /** The not labels value accepted by the Jushuitan API. */
        not_labels?: Array<string>;
        /** The loadSkuBin value accepted by the Jushuitan API. */
        loadSkuBin?: boolean;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The number of records per page. */
          page_size?: number;
          /** The one-based page number. */
          page_index?: number;
          /** The total number of matching records. */
          data_count?: number;
          /** The total number of available pages. */
          page_count?: number;
          /** Whether another page is available after this page. */
          has_next?: boolean;
          /** The business records returned in this response. */
          datas?: Array<{
            /** The merchant SKU identifier in Jushuitan. */
            sku_id?: string;
            /** The i id value returned by the Jushuitan API. */
            i_id?: string;
            /** The name value returned by the Jushuitan API. */
            name?: string;
            /** The short name value returned by the Jushuitan API. */
            short_name?: string;
            /** The sale price value returned by the Jushuitan API. */
            sale_price?: number;
            /** The cost price value returned by the Jushuitan API. */
            cost_price?: number;
            /** The properties value value returned by the Jushuitan API. */
            properties_value?: string;
            /** The color value returned by the Jushuitan API. */
            color?: string;
            /** The c id value returned by the Jushuitan API. */
            c_id?: number;
            /** The category value returned by the Jushuitan API. */
            category?: string;
            /** The pic big value returned by the Jushuitan API. */
            pic_big?: string;
            /** The pic value returned by the Jushuitan API. */
            pic?: string;
            /** The product status: -1 for disabled, 0 for standby, or 1 for enabled. */
            enabled?: number;
            /** The weight value returned by the Jushuitan API. */
            weight?: number;
            /** The market price value returned by the Jushuitan API. */
            market_price?: number;
            /** The brand value returned by the Jushuitan API. */
            brand?: string;
            /** The supplier id value returned by the Jushuitan API. */
            supplier_id?: number;
            /** The supplier name value returned by the Jushuitan API. */
            supplier_name?: string;
            /** The modified value returned by the Jushuitan API. */
            modified?: string;
            /** The sku code value returned by the Jushuitan API. */
            sku_code?: string;
            /** The supplier sku id value returned by the Jushuitan API. */
            supplier_sku_id?: string;
            /** The supplier i id value returned by the Jushuitan API. */
            supplier_i_id?: string;
            /** The vc name value returned by the Jushuitan API. */
            vc_name?: string;
            /** The sku type value returned by the Jushuitan API. */
            sku_type?: string;
            /** The creator value returned by the Jushuitan API. */
            creator?: number;
            /** The created value returned by the Jushuitan API. */
            created?: string;
            /** The remark value returned by the Jushuitan API. */
            remark?: string;
            /** The item type value returned by the Jushuitan API. */
            item_type?: string;
            /** The inventory-synchronization status: 0 for enabled, 1 for disabled, or 2 for partially disabled. */
            stock_disabled?: number;
            /** The unit value returned by the Jushuitan API. */
            unit?: string;
            /** The shelf life value returned by the Jushuitan API. */
            shelf_life?: number;
            /** The labels value returned by the Jushuitan API. */
            labels?: string;
            /** The production licence value returned by the Jushuitan API. */
            production_licence?: string;
            /** The l value returned by the Jushuitan API. */
            l?: number;
            /** The w value returned by the Jushuitan API. */
            w?: number;
            /** The h value returned by the Jushuitan API. */
            h?: number;
            /** The is series number value returned by the Jushuitan API. */
            is_series_number?: boolean;
            /** The other price 1 value returned by the Jushuitan API. */
            other_price_1?: number;
            /** The other price 2 value returned by the Jushuitan API. */
            other_price_2?: number;
            /** The other price 3 value returned by the Jushuitan API. */
            other_price_3?: number;
            /** The other price 4 value returned by the Jushuitan API. */
            other_price_4?: number;
            /** The other price 5 value returned by the Jushuitan API. */
            other_price_5?: number;
            /** The other price 6 value returned by the Jushuitan API. */
            other_price_6?: number;
            /** The other price 7 value returned by the Jushuitan API. */
            other_price_7?: number;
            /** The other price 8 value returned by the Jushuitan API. */
            other_price_8?: number;
            /** The other price 9 value returned by the Jushuitan API. */
            other_price_9?: number;
            /** The other price 10 value returned by the Jushuitan API. */
            other_price_10?: number;
            /** The other 1 value returned by the Jushuitan API. */
            other_1?: string;
            /** The other 2 value returned by the Jushuitan API. */
            other_2?: string;
            /** The other 3 value returned by the Jushuitan API. */
            other_3?: string;
            /** The other 4 value returned by the Jushuitan API. */
            other_4?: string;
            /** The other 5 value returned by the Jushuitan API. */
            other_5?: string;
            /** The other 6 value returned by the Jushuitan API. */
            other_6?: string;
            /** The other 7 value returned by the Jushuitan API. */
            other_7?: string;
            /** The other 8 value returned by the Jushuitan API. */
            other_8?: string;
            /** The other 9 value returned by the Jushuitan API. */
            other_9?: string;
            /** The other 10 value returned by the Jushuitan API. */
            other_10?: string;
            /** The stock type value returned by the Jushuitan API. */
            stock_type?: string;
            /** The sku codes value returned by the Jushuitan API. */
            sku_codes?: string;
            /** The autoid value returned by the Jushuitan API. */
            autoid?: number;
            /** The batch enabled value returned by the Jushuitan API. */
            batch_enabled?: boolean;
            /** The bin value returned by the Jushuitan API. */
            bin?: string;
            /** The other bin value returned by the Jushuitan API. */
            other_bin?: string;
            /** The min qty value returned by the Jushuitan API. */
            min_qty?: number;
            /** The max qty value returned by the Jushuitan API. */
            max_qty?: number;
            /** The overflow qty value returned by the Jushuitan API. */
            overflow_qty?: number;
            /** The pack qty value returned by the Jushuitan API. */
            pack_qty?: number;
            /** The pack volume value returned by the Jushuitan API. */
            pack_volume?: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get the historical cost price for a product at the requested point in time. */
    "jushuitan.get_product_historical_cost": {
      input: {
        /** The sku ids value accepted by the Jushuitan API. */
        sku_ids: Array<string>;
        /** The warehouse-company identifiers. When omitted, Jushuitan queries the current company. */
        wms_co_ids?: Array<number>;
        /** How to retrieve historical costs: all for every historical cost or newest for only the latest cost. Defaults to all. */
        get_way?: string;
        /** Whether to fall back to the ordinary product master cost when no historical cost exists. Defaults to true. */
        is_use_item_sku_cost_price?: boolean;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The sku history cost price maps value returned by the Jushuitan API. */
          sku_history_cost_price_maps?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The response message value returned by the Jushuitan API. */
        msg?: unknown;
        /** The request identifier assigned by Jushuitan. */
        request_id?: unknown;
        [key: string]: unknown;
      };
    };
    /** Get recommended warehouse bins for products in a specified package. */
    "jushuitan.get_recommended_bin_by_package": {
      input: {
        /** The pack id value accepted by the Jushuitan API. */
        pack_id: string;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: number;
        /** The response message returned by Jushuitan. */
        msg: string;
        /** The request identifier assigned by Jushuitan. */
        request_id: string;
        /** The data value returned by the Jushuitan API. */
        data: Array<{
          /** The merchant SKU identifier in Jushuitan. */
          sku_id: string;
          /** The bin value returned by the Jushuitan API. */
          bin: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get recommended warehouse bins for a product. */
    "jushuitan.get_recommended_product_bin": {
      input: {
        /** The merchant SKU identifier in Jushuitan. */
        sku_id: string;
        /** How to interpret sku_id: 0 as the product code or 1 for automatic recognition across product, barcode, and auxiliary codes. */
        sku_id_type?: number;
        /** The Jushuitan warehouse-company identifier. */
        wms_co_id?: number;
        /** The owner co id value accepted by the Jushuitan API. */
        owner_co_id?: number;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data: {
          /** The merchant SKU identifier in Jushuitan. */
          sku_id: string;
          /** The bin value returned by the Jushuitan API. */
          bin?: string;
          [key: string]: unknown;
        };
        /** The response message value returned by the Jushuitan API. */
        msg?: unknown;
        /** The request identifier assigned by Jushuitan. */
        request_id?: unknown;
        [key: string]: unknown;
      };
    };
    /** Get return-to-warehouse information for a delivery package. */
    "jushuitan.get_returned_warehouse_package": {
      input: {
        /** The package id value accepted by the Jushuitan API. */
        package_id: string;
      };
      output: {
        /** The data value returned by the Jushuitan API. */
        data: {
          /** The warehouse id value returned by the Jushuitan API. */
          warehouse_id: string;
          /** The warehouse name value returned by the Jushuitan API. */
          warehouse_name: string;
          [key: string]: unknown;
        };
        /** The Jushuitan response code; zero indicates a successful request. */
        code: number;
        /** The response message returned by Jushuitan. */
        msg: string;
        /** The request identifier assigned by Jushuitan. */
        request_id: string;
        [key: string]: unknown;
      };
    };
    /** Get a picking wave available to a warehouse robot. */
    "jushuitan.get_robot_picking_wave": {
      input: {
        /** The robot id value accepted by the Jushuitan API. */
        robot_id: string;
        /** The Jushuitan warehouse-company identifier. */
        wms_co_id?: number;
        /** The bin value accepted by the Jushuitan API. */
        bin?: string;
        /** The wave id value accepted by the Jushuitan API. */
        wave_id?: number;
      };
      output: {
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The wave id value returned by the Jushuitan API. */
          wave_id?: number;
          /** The status value returned by the Jushuitan API. */
          status?: string;
          /** The type value returned by the Jushuitan API. */
          type?: string;
          /** The bin value returned by the Jushuitan API. */
          bin?: string;
          /** The pick finish value returned by the Jushuitan API. */
          pick_finish?: boolean;
          /** The remark value returned by the Jushuitan API. */
          remark?: string;
          /** The is agv pick value returned by the Jushuitan API. */
          is_agv_pick?: boolean;
          /** The filter value returned by the Jushuitan API. */
          filter?: string;
          [key: string]: unknown;
        };
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: string;
        /** The issuccess value returned by the Jushuitan API. */
        issuccess?: string;
        /** The response message returned by Jushuitan. */
        msg?: string;
        [key: string]: unknown;
      };
    };
    /** Get seeding wave information, including supported third-party warehouse data. */
    "jushuitan.get_seeding_wave": {
      input: {
        /** The wave id value accepted by the Jushuitan API. */
        wave_id: number;
        /** The warehouse-company identifier, required when querying a picking wave from a branch warehouse. */
        wms_co_id?: number;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: boolean;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The wave id value returned by the Jushuitan API. */
          wave_id?: number;
          /** The order count value returned by the Jushuitan API. */
          order_count?: number;
          /** The sku count value returned by the Jushuitan API. */
          sku_count?: number;
          /** The sku qty value returned by the Jushuitan API. */
          sku_qty?: number;
          /** The status value returned by the Jushuitan API. */
          status?: string;
          /** The created value returned by the Jushuitan API. */
          created?: string;
          /** The remark value returned by the Jushuitan API. */
          remark?: string;
          /** The Inouts value returned by the Jushuitan API. */
          Inouts?: Array<{
            /** The Jushuitan inbound or outbound document identifier. */
            io_id?: number;
            /** The internal Jushuitan order identifier. */
            o_id?: number;
            /** The idx value returned by the Jushuitan API. */
            idx?: number;
            /** The l id value returned by the Jushuitan API. */
            l_id?: string;
            /** The lc id value returned by the Jushuitan API. */
            lc_id?: string;
            /** The logistics company value returned by the Jushuitan API. */
            logistics_company?: string;
            /** The status value returned by the Jushuitan API. */
            status?: string;
            /** The items value returned by the Jushuitan API. */
            items?: Array<{
              /** The merchant SKU identifier in Jushuitan. */
              sku_id?: string;
              /** The sku code value returned by the Jushuitan API. */
              sku_code?: string;
              /** The auxiliary SKU codes. Revised third-party warehouses do not support this field, and at most 10 codes are returned. */
              _sku_codes?: Array<string>;
              /** The i id value returned by the Jushuitan API. */
              i_id?: string;
              /** The name value returned by the Jushuitan API. */
              name?: string;
              /** The qty value returned by the Jushuitan API. */
              qty?: number;
              /** The seed qty value returned by the Jushuitan API. */
              seed_qty?: number;
              /** The properties value value returned by the Jushuitan API. */
              properties_value?: string;
              /** The ioi id value returned by the Jushuitan API. */
              ioi_id?: number;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get tracking history for a unique product serial number. */
    "jushuitan.get_serial_number_trace": {
      input: {
        /** The sku sns value accepted by the Jushuitan API. */
        sku_sns?: Array<string>;
        /** The io ids value accepted by the Jushuitan API. */
        io_ids?: Array<string>;
        /** The wave ids value accepted by the Jushuitan API. */
        wave_ids?: Array<string>;
        /** The pack ids value accepted by the Jushuitan API. */
        pack_ids?: Array<string>;
        /** The bins value accepted by the Jushuitan API. */
        bins?: Array<string>;
        /** Trace statuses such as Pack, Out, Pick, Checkout, Seed, PickReturn, Pick1, Pick2, PaperPick, WaitConfirm, or WaitPack. */
        status?: Array<string>;
        /** The except statuses value accepted by the Jushuitan API. */
        except_statuses?: Array<string>;
        /** The is except no batch value accepted by the Jushuitan API. */
        is_except_no_batch?: boolean;
        /** The flds value accepted by the Jushuitan API. */
        flds?: Array<string>;
        /**
         * The one-based page number.
         * @minimum 1
         */
        page_index?: number;
        /**
         * The number of records requested or returned in one page.
         * @minimum 1
         */
        page_size?: number;
        /** The inclusive beginning of the modification-time filter. It is required with modified_end when sku_sns, io_ids, wave_ids, pack_ids, and bins are all empty; the range cannot exceed seven days. */
        modified_begin?: string;
        /** The end of the modification-time filter. Supply a time range or another trace selector. */
        modified_end?: string;
        /** The time-field type. Defaults to 0 for modified time. */
        date_time?: number;
        /** Unique-code types to return: 1 serial number, 3 production batch, or 4 fast-moving. PSD types are omitted unless requested here. */
        types?: Array<string>;
        /** Product identifiers. This selector, the time range, and the other trace selectors cannot all be empty. */
        sku_ids?: Array<string>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: string;
        /** The issuccess value returned by the Jushuitan API. */
        issuccess?: string;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: Array<{
          /** The sku sn value returned by the Jushuitan API. */
          sku_sn?: string;
          /** The Jushuitan ERP company identifier. */
          co_id?: number;
          /** The merchant SKU identifier in Jushuitan. */
          sku_id?: string;
          /** The status value returned by the Jushuitan API. */
          status?: string;
          /** The wave id value returned by the Jushuitan API. */
          wave_id?: string;
          /** The Jushuitan inbound or outbound document identifier. */
          io_id?: string;
          /** The bin value returned by the Jushuitan API. */
          bin?: string;
          /** The modified value returned by the Jushuitan API. */
          modified?: string;
          /** The pack id value returned by the Jushuitan API. */
          pack_id?: string;
          /** The i id value returned by the Jushuitan API. */
          i_id?: string;
          /** The lc id value returned by the Jushuitan API. */
          lc_id?: string;
          /** The pay date value returned by the Jushuitan API. */
          pay_date?: string;
          /** The sku info value returned by the Jushuitan API. */
          sku_info?: string;
          /** The supplier name value returned by the Jushuitan API. */
          supplier_name?: string;
          /** The print date value returned by the Jushuitan API. */
          print_date?: string;
          /** The created value returned by the Jushuitan API. */
          created?: string;
          /** The creator value returned by the Jushuitan API. */
          creator?: string;
          /** The Jushuitan warehouse-company identifier. */
          wms_co_id?: string;
          /** The Jushuitan shop identifier. */
          shop_id?: string;
          /** The remark value returned by the Jushuitan API. */
          remark?: string;
          /** The total qty value returned by the Jushuitan API. */
          total_qty?: string;
          /** The io date value returned by the Jushuitan API. */
          io_date?: string;
          /** The ioitem index value returned by the Jushuitan API. */
          ioitem_index?: string;
          /** The p key value returned by the Jushuitan API. */
          p_key?: string;
          /** The po id value returned by the Jushuitan API. */
          po_id?: string;
          /** The prev status value returned by the Jushuitan API. */
          prev_status?: string;
          /** The qty value returned by the Jushuitan API. */
          qty?: string;
          /** The from co id value returned by the Jushuitan API. */
          from_co_id?: string;
          /** The push status value returned by the Jushuitan API. */
          push_status?: string;
          /** The print task value returned by the Jushuitan API. */
          print_task?: string;
          /** The print index value returned by the Jushuitan API. */
          print_index?: string;
          /** The supplier id value returned by the Jushuitan API. */
          supplier_id?: string;
          /** The supplier i id value returned by the Jushuitan API. */
          supplier_i_id?: string;
          /** The combine sku id value returned by the Jushuitan API. */
          combine_sku_id?: string;
          /** The internal Jushuitan order identifier. */
          o_id?: string;
          /** The inventory status value returned by the Jushuitan API. */
          inventory_status?: string;
          /** The expiration date value returned by the Jushuitan API. */
          expiration_date?: string;
          /** The ts value returned by the Jushuitan API. */
          ts?: string;
          /** The type value returned by the Jushuitan API. */
          type?: string;
          /** The batch id value returned by the Jushuitan API. */
          batch_id?: string;
          /** The produced date value returned by the Jushuitan API. */
          produced_date?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List actual warehouse receipts for sales returns. */
    "jushuitan.list_after_sale_receipts": {
      input: {
        /**
         * The number of records per page. Defaults to 30 and cannot exceed 50.
         * @minimum 1
         * @maximum 50
         */
        page_size?: number;
        /** The inclusive beginning of the modification-time filter. Provide it together with modified_end; the interval cannot exceed seven days. */
        modified_begin?: string;
        /** The end of the modification-time filter. Provide it together with modified_begin; the interval cannot exceed seven days. */
        modified_end?: string;
        /** The so ids value accepted by the Jushuitan API. */
        so_ids?: Array<string>;
        /** The incremental timestamp cursor used to continue a changing-data query. */
        start_ts?: number;
        /** The o ids value accepted by the Jushuitan API. */
        o_ids?: Array<string>;
        /**
         * The one-based page number.
         * @minimum 1
         */
        page_index?: number;
        /** The Jushuitan shop identifier. */
        shop_id?: string;
        /** Comma-separated owner identifiers. Omit to query all documents, use 0 for self-operated documents, or provide specific owners. */
        owner_co_ids?: string;
        /** The date field used for filtering: 0 for modified time, 1 for creation date, or 4 for actual inbound/outbound time. */
        date_type?: number;
        /**
         * The after-sale identifiers; at most 50 are accepted.
         * @maxItems 50
         */
        as_ids?: Array<number>;
        /**
         * The return-warehouse document identifiers; at most 50 are accepted.
         * @maxItems 50
         */
        io_ids?: Array<number>;
        /** The Jushuitan warehouse-company identifier. */
        wms_co_id?: number;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The number of records per page. */
          page_size?: number;
          /** The one-based page number. */
          page_index?: number;
          /** The total number of matching records. */
          data_count?: number;
          /** The total number of available pages. */
          page_count?: number;
          /** Whether another page is available after this page. */
          has_next?: boolean;
          /** The business records returned in this response. */
          datas?: Array<{
            /** The Jushuitan inbound or outbound document identifier. */
            io_id?: number;
            /** The internal Jushuitan order identifier. */
            o_id?: number;
            /** The online sales-order identifier. */
            so_id?: string;
            /** The as id value returned by the Jushuitan API. */
            as_id?: number;
            /** The owner co id value returned by the Jushuitan API. */
            owner_co_id?: number;
            /** The owner co name value returned by the Jushuitan API. */
            owner_co_name?: string;
            /** The l id value returned by the Jushuitan API. */
            l_id?: string;
            /** The logistics company value returned by the Jushuitan API. */
            logistics_company?: string;
            /** The creator value returned by the Jushuitan API. */
            creator?: number;
            /** The creator name value returned by the Jushuitan API. */
            creator_name?: string;
            /** The io date value returned by the Jushuitan API. */
            io_date?: string;
            /** The warehouse value returned by the Jushuitan API. */
            warehouse?: string;
            /** The modified value returned by the Jushuitan API. */
            modified?: string;
            /** The lc id value returned by the Jushuitan API. */
            lc_id?: string;
            /** The Jushuitan shop identifier. */
            shop_id?: number;
            /** The aftersale remark value returned by the Jushuitan API. */
            aftersale_remark?: string;
            /** The ts value returned by the Jushuitan API. */
            ts?: number;
            /** The status value returned by the Jushuitan API. */
            status?: string;
            /** The warehouse identifier: 1 for main, 2 for sales returns, 3 for purchasing, or 4 for defective goods. */
            wh_id?: number;
            /** The Jushuitan warehouse-company identifier. */
            wms_co_id?: number;
            /** The drp co name value returned by the Jushuitan API. */
            drp_co_name?: string;
            /** The drp co id to value returned by the Jushuitan API. */
            drp_co_id_to?: number;
            /** The drp co id from value returned by the Jushuitan API. */
            drp_co_id_from?: number;
            /** The after-sale type, such as standard return, other, refused return, refund only, complaint, reshipment, exchange, or repair. */
            type?: string;
            /** The items value returned by the Jushuitan API. */
            items?: Array<{
              /** The Jushuitan inbound or outbound document identifier. */
              io_id?: number;
              /** The merchant SKU identifier in Jushuitan. */
              sku_id?: string;
              /** The i id value returned by the Jushuitan API. */
              i_id?: string;
              /** The unit value returned by the Jushuitan API. */
              unit?: string;
              /** The qty value returned by the Jushuitan API. */
              qty?: number;
              /** The name value returned by the Jushuitan API. */
              name?: string;
              /** The properties value value returned by the Jushuitan API. */
              properties_value?: string;
              /** The sale price value returned by the Jushuitan API. */
              sale_price?: number;
              /** The sale amount value returned by the Jushuitan API. */
              sale_amount?: number;
              /** The ioi id value returned by the Jushuitan API. */
              ioi_id?: number;
              /** The raw so id value returned by the Jushuitan API. */
              raw_so_id?: string;
              /** The bu id value returned by the Jushuitan API. */
              bu_id?: number;
              [key: string]: unknown;
            }>;
            /** The batchs value returned by the Jushuitan API. */
            batchs?: Array<{
              /** The batch no value returned by the Jushuitan API. */
              batch_no?: string;
              /** The ioi id value returned by the Jushuitan API. */
              ioi_id?: number;
              /** The merchant SKU identifier in Jushuitan. */
              sku_id?: string;
              /** The qty value returned by the Jushuitan API. */
              qty?: number;
              /** The product date value returned by the Jushuitan API. */
              product_date?: string;
              /** The supplier id value returned by the Jushuitan API. */
              supplier_id?: string;
              /** The supplier name value returned by the Jushuitan API. */
              supplier_name?: string;
              /** The expiration date value returned by the Jushuitan API. */
              expiration_date?: string;
              [key: string]: unknown;
            }>;
            /** The sns value returned by the Jushuitan API. */
            sns?: Array<{
              /** The merchant SKU identifier in Jushuitan. */
              sku_id?: string;
              /** The sn value returned by the Jushuitan API. */
              sn?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List after-sale return and refund records visible through OpenWeb. */
    "jushuitan.list_after_sales": {
      input: {
        /** The Jushuitan shop identifier. */
        shop_id?: number;
        /** Whether to query offline-shop documents when shop_id is 0. */
        is_offline_shop?: boolean;
        /** The after-sale date field used for filtering: 0 for modified time, 1 for creation time, or 2 for confirmation time. Defaults to 0. */
        date_type?: number;
        /** The inclusive beginning of the modification-time filter. Provide it together with modified_end; the interval cannot exceed seven days, and either a time range or an order identifier is required. Prefer start_ts for incremental queries to avoid pagination gaps while records change. */
        modified_begin?: string;
        /** The end of the modification-time filter. Provide it together with modified_begin; the interval cannot exceed seven days, and either a time range or an order identifier is required. */
        modified_end?: string;
        /** The online sales-order identifiers. Either these or a time range is required. */
        so_ids?: Array<string>;
        /**
         * The buyer-account identifiers; at most 50 are accepted.
         * @maxItems 50
         */
        shop_buyer_ids?: Array<string>;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        page_index?: number;
        /**
         * The number of records per page. Defaults to 30 and cannot exceed 50.
         * @minimum 1
         * @maximum 50
         */
        page_size?: number;
        /** The internal order identifiers. Either these or a time range is required. */
        o_ids?: Array<number>;
        /** The merchant-unique after-sale identifiers. Either these or a time range is required. */
        as_ids?: Array<number>;
        /** The status value accepted by the Jushuitan API. */
        status?: string;
        /** The incremental timestamp cursor used to continue a changing-data query. */
        start_ts?: number;
        /** Whether to calculate the total count. Defaults to true; use false with start_ts to avoid reducing query efficiency. */
        is_get_total?: string;
        /** The good status value accepted by the Jushuitan API. */
        good_status?: string;
        /** The after-sale type, such as standard return, other, refused return, refund only, complaint, reshipment, exchange, or repair. */
        type?: string;
        /** The owner co id value accepted by the Jushuitan API. */
        owner_co_id?: string;
        /** Whether to query archived data. true queries archived records; false or omission queries unarchived records. */
        archive?: boolean;
        /** Comma-separated tracking numbers; at most 100 are accepted. */
        l_id?: string;
        /** Whether to return after-sale revenue subtotal amounts. Defaults to false. */
        is_get_promotion?: boolean;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The number of records per page. */
          page_size?: number;
          /** The one-based page number. */
          page_index?: number;
          /** The total number of matching records. */
          data_count?: number;
          /** The total number of available pages. */
          page_count?: number;
          /** Whether another page is available after this page. */
          has_next?: boolean;
          /** The business records returned in this response. */
          datas?: Array<{
            /** The as id value returned by the Jushuitan API. */
            as_id?: number;
            /** The as date value returned by the Jushuitan API. */
            as_date?: string;
            /** The outer as id value returned by the Jushuitan API. */
            outer_as_id?: string;
            /** The internal Jushuitan order identifier. */
            o_id?: number;
            /** The online sales-order identifier. */
            so_id?: string;
            /** The after-sale type, such as standard return, other, refused return, refund only, complaint, reshipment, exchange, or repair. */
            type?: string;
            /** The created value returned by the Jushuitan API. */
            created?: string;
            /** The modified value returned by the Jushuitan API. */
            modified?: string;
            /** The status value returned by the Jushuitan API. */
            status?: string;
            /** The shop status value returned by the Jushuitan API. */
            shop_status?: string;
            /** The remark value returned by the Jushuitan API. */
            remark?: string;
            /** The question type value returned by the Jushuitan API. */
            question_type?: string;
            /** The warehouse value returned by the Jushuitan API. */
            warehouse?: string;
            /** The refund value returned by the Jushuitan API. */
            refund?: number;
            /** The payment value returned by the Jushuitan API. */
            payment?: number;
            /** The free amount value returned by the Jushuitan API. */
            free_amount?: number;
            /** The good status value returned by the Jushuitan API. */
            good_status?: string;
            /** The node value returned by the Jushuitan API. */
            node?: string;
            /** The order status value returned by the Jushuitan API. */
            order_status?: string;
            /** The shop type value returned by the Jushuitan API. */
            shop_type?: string;
            /** The Jushuitan shop identifier. */
            shop_id?: number;
            /** The logistics company value returned by the Jushuitan API. */
            logistics_company?: string;
            /** The l id value returned by the Jushuitan API. */
            l_id?: string;
            /** The warehouse identifier: 1 for main, 2 for sales returns, 3 for purchasing, or 4 for defective goods. */
            wh_id?: number;
            /** The Jushuitan warehouse-company identifier. */
            wms_co_id?: number;
            /** The confirm date value returned by the Jushuitan API. */
            confirm_date?: string;
            /** The freight value returned by the Jushuitan API. */
            freight?: number;
            /** The drp co id from value returned by the Jushuitan API. */
            drp_co_id_from?: number;
            /** The receiver mobile value returned by the Jushuitan API. */
            receiver_mobile?: string;
            /** The receiver name value returned by the Jushuitan API. */
            receiver_name?: string;
            /** The shop buyer id value returned by the Jushuitan API. */
            shop_buyer_id?: string;
            /** The buyer apply refund value returned by the Jushuitan API. */
            buyer_apply_refund?: number;
            /** The receive refund value returned by the Jushuitan API. */
            receive_refund?: number;
            /** The result value returned by the Jushuitan API. */
            result?: string;
            /** The items value returned by the Jushuitan API. */
            items?: Array<{
              /** The asi id value returned by the Jushuitan API. */
              asi_id?: number;
              /** The as id value returned by the Jushuitan API. */
              as_id?: number;
              /** The shop amount value returned by the Jushuitan API. */
              shop_amount?: number;
              /** The merchant SKU identifier in Jushuitan. */
              sku_id?: string;
              /** The qty value returned by the Jushuitan API. */
              qty?: number;
              /** The is gift value returned by the Jushuitan API. */
              is_gift?: boolean;
              /** The price value returned by the Jushuitan API. */
              price?: number;
              /** The amount value returned by the Jushuitan API. */
              amount?: number;
              /** The name value returned by the Jushuitan API. */
              name?: string;
              /** The pic value returned by the Jushuitan API. */
              pic?: string;
              /** The type value returned by the Jushuitan API. */
              type?: string;
              /** The properties value value returned by the Jushuitan API. */
              properties_value?: string;
              /** The child order-line identifier copied from the original order's outer_oi_id. */
              outer_oi_id?: string;
              /** The sku type value returned by the Jushuitan API. */
              sku_type?: string;
              /** The r qty value returned by the Jushuitan API. */
              r_qty?: number;
              /** The receive date value returned by the Jushuitan API. */
              receive_date?: string;
              /** The combine sku id value returned by the Jushuitan API. */
              combine_sku_id?: string;
              /** The shop sku id value returned by the Jushuitan API. */
              shop_sku_id?: string;
              /** The i id value returned by the Jushuitan API. */
              i_id?: string;
              /** The defective qty value returned by the Jushuitan API. */
              defective_qty?: number;
              /** The remark value returned by the Jushuitan API. */
              remark?: string;
              /** The raw so id value returned by the Jushuitan API. */
              raw_so_id?: string;
              /** The line-level seller refund subtotal, returned only when is_get_promotion is true and ERP revenue subtotals are enabled. */
              seller_income_amount?: number;
              /** The line-level buyer-paid subtotal, returned only when is_get_promotion is true and ERP revenue subtotals are enabled. */
              buyer_paid_amount?: number;
              [key: string]: unknown;
            }>;
            /** The batchs value returned by the Jushuitan API. */
            batchs?: Array<{
              /** The batch no value returned by the Jushuitan API. */
              batch_no?: string;
              /** The merchant SKU identifier in Jushuitan. */
              sku_id?: string;
              /** The qty value returned by the Jushuitan API. */
              qty?: number;
              /** The product date value returned by the Jushuitan API. */
              product_date?: string;
              /** The supplier id value returned by the Jushuitan API. */
              supplier_id?: number;
              /** The supplier name value returned by the Jushuitan API. */
              supplier_name?: string;
              /** The expiration date value returned by the Jushuitan API. */
              expiration_date?: string;
              [key: string]: unknown;
            }>;
            /** The sns value returned by the Jushuitan API. */
            sns?: Array<{
              /** The merchant SKU identifier in Jushuitan. */
              sku_id?: string;
              /** The sn value returned by the Jushuitan API. */
              sn?: string;
              [key: string]: unknown;
            }>;
            /** The drp co id to value returned by the Jushuitan API. */
            drp_co_id_to?: number;
            /** The labels value returned by the Jushuitan API. */
            labels?: string;
            /** The refund version value returned by the Jushuitan API. */
            refund_version?: number;
            /** The ts value returned by the Jushuitan API. */
            ts?: string;
            /** The shop name value returned by the Jushuitan API. */
            shop_name?: string;
            /** The currency code, returned for cross-border documents. */
            currency?: string;
            /** The original order labels. Jushuitan omits this field for archived orders. */
            order_labels?: Array<string>;
            /** The refund phase value returned by the Jushuitan API. */
            refund_phase?: string;
            /** The creator name value returned by the Jushuitan API. */
            creator_name?: string;
            /** The drp refund status value returned by the Jushuitan API. */
            drp_refund_status?: string;
            /** The shop freight value returned by the Jushuitan API. */
            shop_freight?: number;
            /** The order type value returned by the Jushuitan API. */
            order_type?: string;
            /** The images value returned by the Jushuitan API. */
            images?: Array<{
              /** The key value returned by the Jushuitan API. */
              key?: string;
              /** The domain value returned by the Jushuitan API. */
              domain?: string;
              [key: string]: unknown;
            }>;
            /** The buyer refund plus platform subsidy for Douyin and JD. For fully refunded Pinduoduo after-sales with a subsidy, Jushuitan uses the online requested amount plus the subsidy; other platforms omit this value. */
            buyer_receive_refund?: number;
            /** The platform promotion value returned by the Jushuitan API. */
            platform_promotion?: number;
            /** The owner co id value returned by the Jushuitan API. */
            owner_co_id?: number;
            /** The drp from submit value returned by the Jushuitan API. */
            drp_from_submit?: boolean;
            /** The drp submit value returned by the Jushuitan API. */
            drp_submit?: boolean;
            /** The seller refund subtotal, returned only when is_get_promotion is true and ERP revenue subtotals are enabled. */
            seller_income_amount?: number;
            /** The buyer-paid subtotal, returned only when is_get_promotion is true and ERP revenue subtotals are enabled. */
            buyer_paid_amount?: number;
            /** The platform subsidy subtotal, returned only when is_get_promotion is true and ERP revenue subtotals are enabled; Jushuitan may return a number or an empty string. */
            platform_free_amount?: string | number;
            /** The government subsidy subtotal, returned only when is_get_promotion is true and ERP revenue subtotals are enabled. */
            government_free_amount?: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List inventory allocation documents. */
    "jushuitan.list_allocations": {
      input: {
        /** The inclusive beginning of the modification-time filter. Provide it together with modified_end; the interval cannot exceed seven days, and either a time range or so_ids is required. */
        modified_begin?: string;
        /** The end of the modification-time filter. Provide it together with modified_begin; the interval cannot exceed seven days, and either a time range or so_ids is required. */
        modified_end?: string;
        /** The online sales-order identifiers to query. Either this field or a modification-time range is required. */
        so_ids?: Array<string>;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        page_index?: number;
        /**
         * The number of records per page. Defaults to 30 and cannot exceed 50.
         * @minimum 1
         * @maximum 50
         */
        page_size?: number;
        /** The io ids value accepted by the Jushuitan API. */
        io_ids?: Array<string>;
        /** The allocation direction, either outbound or inbound. */
        type?: string;
        /** The date field used for filtering: 0 for modified time or 2 for inbound/outbound time. Defaults to 0. */
        date_type?: number;
        /** The owner-company identifier. Third-party warehouse merchants default to their own data when omitted; use 2147483647 to query all owners. */
        owner_co_id?: number;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The number of records per page. */
          page_size?: number;
          /** The one-based page number. */
          page_index?: number;
          /** The total number of matching records. */
          data_count?: number;
          /** The total number of available pages. */
          page_count?: number;
          /** Whether another page is available after this page. */
          has_next?: boolean;
          /** The business records returned in this response. */
          datas?: Array<{
            /** The Jushuitan warehouse-company identifier. */
            wms_co_id?: number;
            /** The Jushuitan ERP company identifier. */
            co_id?: number;
            /** The Jushuitan inbound or outbound document identifier. */
            io_id?: number;
            /** The io date value returned by the Jushuitan API. */
            io_date?: string;
            /** The modified value returned by the Jushuitan API. */
            modified?: string;
            /** The allocation status: Creating, Confirmed, Picking, OuterConfirming, Cancelled, Confirming, or WaitConfirm. A completed document whose remark contains the reversal marker is shown as reversed in ERP. */
            status?: string;
            /** The source warehouse name for an outbound allocation or the destination warehouse name for an inbound allocation. */
            warehouse?: string;
            /** The destination warehouse name for an outbound allocation or the source warehouse name for an inbound allocation. */
            link_warehouse?: string;
            /** The financial status: Archive, modifing, WaitConfirm, Confirmed, Cancelled, or Delete. */
            f_status?: string;
            /** The type value returned by the Jushuitan API. */
            type?: string;
            /** The source warehouse identifier: 1 for main, 2 for sales returns, 3 for purchasing, or 4 for defective goods. */
            wh_id?: number;
            /** The destination warehouse identifier: 1 for main, 2 for sales returns, 3 for purchasing, or 4 for defective goods. */
            link_wh_id?: number;
            /** The destination branch identifier for an outbound allocation or the source branch identifier for an inbound allocation. */
            link_wms_co_id?: number;
            /** The link io id value returned by the Jushuitan API. */
            link_io_id?: number;
            /** The allocation suggestion identifier. It is returned only for cross-warehouse inbound allocations and comes from the uploaded so_id. */
            so_id?: string;
            /** The wave id value returned by the Jushuitan API. */
            wave_id?: number;
            /** The remark value returned by the Jushuitan API. */
            remark?: string;
            /** The creator name value returned by the Jushuitan API. */
            creator_name?: string;
            /** The lock wh id value returned by the Jushuitan API. */
            lock_wh_id?: string;
            /** The lock link wh id value returned by the Jushuitan API. */
            lock_link_wh_id?: string;
            /** The out io id value returned by the Jushuitan API. */
            out_io_id?: string;
            /** The labels value returned by the Jushuitan API. */
            labels?: Array<string>;
            /** The items value returned by the Jushuitan API. */
            items?: Array<{
              /** The Jushuitan inbound or outbound document identifier. */
              io_id?: number;
              /** The ioi id value returned by the Jushuitan API. */
              ioi_id?: number;
              /** The merchant SKU identifier in Jushuitan. */
              sku_id?: string;
              /** The i id value returned by the Jushuitan API. */
              i_id?: string;
              /** The qty value returned by the Jushuitan API. */
              qty?: number;
              /** The cost price value returned by the Jushuitan API. */
              cost_price?: number;
              /** The cost amount value returned by the Jushuitan API. */
              cost_amount?: number;
              /** The name value returned by the Jushuitan API. */
              name?: string;
              /** The properties value value returned by the Jushuitan API. */
              properties_value?: string;
              /** The r qty value returned by the Jushuitan API. */
              r_qty?: number;
              /** The production batch identifier, returned when the corresponding ERP feature is enabled. */
              batch_id?: string;
              /** The production batch date, returned when the corresponding ERP feature is enabled. */
              product_date?: string;
              /** The supplier identifier, returned when the corresponding ERP feature is enabled. */
              supplier_id?: number;
              /** The expiration date, returned when the corresponding ERP business feature is enabled. */
              expiration_date?: string;
              /** The unit value returned by the Jushuitan API. */
              unit?: string;
              [key: string]: unknown;
            }>;
            /** The production batches, returned when production batch management is enabled for the company and, for branch data, the branch. */
            batchs?: Array<{
              /** The batch no value returned by the Jushuitan API. */
              batch_no?: string;
              /** The merchant SKU identifier in Jushuitan. */
              sku_id?: string;
              /** The qty value returned by the Jushuitan API. */
              qty?: number;
              /** The product date value returned by the Jushuitan API. */
              product_date?: string;
              /** The supplier id value returned by the Jushuitan API. */
              supplier_id?: number;
              /** The supplier name value returned by the Jushuitan API. */
              supplier_name?: string;
              /** The line-item identifier, returned when document batch details and production-batch tracking are enabled in ERP. */
              ioi_id: string;
              [key: string]: unknown;
            }>;
            /** The sns value returned by the Jushuitan API. */
            sns?: Array<{
              /** The merchant SKU identifier in Jushuitan. */
              sku_id?: string;
              /** The sn value returned by the Jushuitan API. */
              sn?: string;
              [key: string]: unknown;
            }>;
            /** The receiver name en value returned by the Jushuitan API. */
            receiver_name_en?: string;
            /** The receiver mobile en value returned by the Jushuitan API. */
            receiver_mobile_en?: string;
            /** The receiver state value returned by the Jushuitan API. */
            receiver_state?: string;
            /** The receiver city value returned by the Jushuitan API. */
            receiver_city?: string;
            /** The receiver district value returned by the Jushuitan API. */
            receiver_district?: string;
            /** The receiver address value returned by the Jushuitan API. */
            receiver_address?: string;
            /** The l id value returned by the Jushuitan API. */
            l_id?: string;
            /** The lc id value returned by the Jushuitan API. */
            lc_id?: string;
            /** The logistics company value returned by the Jushuitan API. */
            logistics_company?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List bundle products and their component product definitions. */
    "jushuitan.list_bundle_products": {
      input: {
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        page_index?: number;
        /**
         * The number of records per page. Defaults to 30 and cannot exceed 50.
         * @minimum 1
         * @maximum 50
         */
        page_size?: number;
        /** The inclusive beginning of the modification-time filter. Provide both modification times; the range cannot exceed seven days. */
        modified_begin?: string;
        /** The end of the modification-time filter. Provide both modification times; the range cannot exceed seven days. */
        modified_end?: string;
        /** Up to 20 bundle-product SKU identifiers. Provide this field or a complete modification-time range. */
        sku_ids?: string;
        /** The bundle style identifiers to include. */
        i_ids?: Array<string>;
        /** The optional bundle-item fields to include in the response. */
        combine_itemsku_flds?: Array<string>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The number of records per page. */
          page_size?: number;
          /** The one-based page number. */
          page_index?: number;
          /** The total number of matching records. */
          data_count?: number;
          /** The total number of available pages. */
          page_count?: number;
          /** Whether another page is available after this page. */
          has_next?: boolean;
          /** The business records returned in this response. */
          datas?: Array<{
            /** The i id value returned by the Jushuitan API. */
            i_id?: string;
            /** The name value returned by the Jushuitan API. */
            name?: string;
            /** The short name value returned by the Jushuitan API. */
            short_name?: string;
            /** The vc name value returned by the Jushuitan API. */
            vc_name?: string;
            /** The pic value returned by the Jushuitan API. */
            pic?: string;
            /** The properties value value returned by the Jushuitan API. */
            properties_value?: string;
            /** The sale price value returned by the Jushuitan API. */
            sale_price?: number;
            /** The weight value returned by the Jushuitan API. */
            weight?: number;
            /** The merchant SKU identifier in Jushuitan. */
            sku_id?: string;
            /** The modified value returned by the Jushuitan API. */
            modified?: string;
            /** The created value returned by the Jushuitan API. */
            created?: string;
            /** The enty sku id value returned by the Jushuitan API. */
            enty_sku_id?: string;
            /** The labels value returned by the Jushuitan API. */
            labels?: string;
            /** The brand value returned by the Jushuitan API. */
            brand?: string;
            /** The cost price value returned by the Jushuitan API. */
            cost_price?: number;
            /** The bundle-product status: -1 for disabled, 0 for standby, or 1 for enabled. */
            enabled?: number;
            /** The sku code value returned by the Jushuitan API. */
            sku_code?: string;
            /** The other price 1 value returned by the Jushuitan API. */
            other_price_1?: number;
            /** The other price 2 value returned by the Jushuitan API. */
            other_price_2?: number;
            /** The other price 3 value returned by the Jushuitan API. */
            other_price_3?: number;
            /** The other price 4 value returned by the Jushuitan API. */
            other_price_4?: number;
            /** The other price 5 value returned by the Jushuitan API. */
            other_price_5?: number;
            /** The other 1 value returned by the Jushuitan API. */
            other_1?: string;
            /** The other 2 value returned by the Jushuitan API. */
            other_2?: string;
            /** The other 3 value returned by the Jushuitan API. */
            other_3?: string;
            /** The other 4 value returned by the Jushuitan API. */
            other_4?: string;
            /** The other 5 value returned by the Jushuitan API. */
            other_5?: string;
            /** The l value returned by the Jushuitan API. */
            l?: number;
            /** The w value returned by the Jushuitan API. */
            w?: number;
            /** The h value returned by the Jushuitan API. */
            h?: number;
            /** The volume value returned by the Jushuitan API. */
            volume?: number;
            /** The item type value returned by the Jushuitan API. */
            item_type?: string;
            /** The remark value returned by the Jushuitan API. */
            remark?: string;
            /** The sku qty value returned by the Jushuitan API. */
            sku_qty?: number;
            /** The items value returned by the Jushuitan API. */
            items?: Array<{
              /** The src sku id value returned by the Jushuitan API. */
              src_sku_id?: string;
              /** The qty value returned by the Jushuitan API. */
              qty?: number;
              /** The sale price value returned by the Jushuitan API. */
              sale_price?: number;
              /** The modified value returned by the Jushuitan API. */
              modified?: string;
              /** The combine sku id value returned by the Jushuitan API. */
              combine_sku_id?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List users belonging to the authorized Jushuitan merchant company. */
    "jushuitan.list_company_users": {
      input: {
        /**
         * The one-based current page number.
         * @minimum 1
         */
        current_page: number;
        /**
         * The number of records requested or returned in one page.
         * @minimum 1
         */
        page_size: number;
        /** The query mode: 0 returns records and the total count, 1 returns records only, and 2 returns the total count only. */
        page_action?: number;
        /** Whether to return enabled company users. */
        enabled?: boolean;
        /** The response version. Use 2 to include group and role information; otherwise Jushuitan returns the basic user fields. */
        version?: number;
        /** The login account to query. */
        loginId?: string;
        /** The beginning of the user-creation time range. */
        creatd_begin?: string;
        /** The end of the user-creation time range. */
        creatd_end?: string;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The one-based current page number. */
          current_page?: string;
          /** The number of records requested or returned in one page. */
          page_size?: string;
          /** The count value returned by the Jushuitan API. */
          count?: string;
          /** The pages value returned by the Jushuitan API. */
          pages?: string;
          /** The business records returned in this response. */
          datas?: Array<{
            /** The u id value returned by the Jushuitan API. */
            u_id?: number;
            /** The name value returned by the Jushuitan API. */
            name?: string;
            /** The enabled value returned by the Jushuitan API. */
            enabled?: string;
            /** The created value returned by the Jushuitan API. */
            created?: string;
            /** The modified value returned by the Jushuitan API. */
            modified?: string;
            /** The last login time value returned by the Jushuitan API. */
            last_login_time?: string;
            /** The ug names value returned by the Jushuitan API. */
            ug_names?: Array<string>;
            /** The ug ids value returned by the Jushuitan API. */
            ug_ids?: string;
            /** The roles value returned by the Jushuitan API. */
            roles?: string;
            /** The roleIds value returned by the Jushuitan API. */
            roleIds?: string;
            /** The pwd modified value returned by the Jushuitan API. */
            pwd_modified?: string;
            /** The remark value returned by the Jushuitan API. */
            remark?: string;
            /** The empId value returned by the Jushuitan API. */
            empId?: string;
            /** The creator value returned by the Jushuitan API. */
            creator?: string;
            /** The modifier value returned by the Jushuitan API. */
            modifier?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The request identifier assigned by Jushuitan. */
        requestId?: string;
        [key: string]: unknown;
      };
    };
    /** List rejected or invalid records from a profitability data upload batch. */
    "jushuitan.list_cost_upload_batch_errors": {
      input: {
        /** The task id value accepted by the Jushuitan API. */
        task_id: string;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: number;
        /** The response message returned by Jushuitan. */
        msg: string;
        /** The data value returned by the Jushuitan API. */
        data: {
          /** The task id value returned by the Jushuitan API. */
          task_id: string;
          /** The status value returned by the Jushuitan API. */
          status: string;
          /** The err msg value returned by the Jushuitan API. */
          err_msg: string;
          /** The URL for downloading the error details as an Excel file. */
          error_url: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List cross-border after-sale documents. */
    "jushuitan.list_cross_border_after_sales": {
      input: {
        /** The inclusive beginning of the modification-time filter. */
        modified_begin: string;
        /** The end of the modification-time filter. */
        modified_end: string;
        /** The as ids value accepted by the Jushuitan API. */
        as_ids?: Array<number>;
        /** The good status value accepted by the Jushuitan API. */
        good_status?: string;
        /** The status value accepted by the Jushuitan API. */
        status?: string;
        /** The shop status value accepted by the Jushuitan API. */
        shop_status?: string;
        /** The so ids value accepted by the Jushuitan API. */
        so_ids?: Array<string>;
        /** The shop buyer ids value accepted by the Jushuitan API. */
        shop_buyer_ids?: Array<string>;
        /** The o ids value accepted by the Jushuitan API. */
        o_ids?: Array<number>;
        /** The io ids value accepted by the Jushuitan API. */
        io_ids?: Array<string>;
        /** The Jushuitan shop identifier. */
        shop_id?: number;
        /** The incremental timestamp cursor used to continue a changing-data query. */
        start_ts?: number;
        /**
         * The one-based current page number.
         * @minimum 1
         */
        current_page: number;
        /**
         * The number of records requested or returned in one page.
         * @minimum 1
         */
        page_size: number;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The one-based page number. */
          page_index?: number;
          /** The number of records requested or returned in one page. */
          page_size?: number;
          /** The total number of matching records. */
          data_count?: number;
          /** The total number of available pages. */
          page_count?: number;
          /** Whether another page is available after this page. */
          has_next?: boolean;
          /** The data value returned by the Jushuitan API. */
          data?: Array<{
            /** The as id value returned by the Jushuitan API. */
            as_id: number;
            /** The as date value returned by the Jushuitan API. */
            as_date: string;
            /** The outer as id value returned by the Jushuitan API. */
            outer_as_id: string;
            /** The internal Jushuitan order identifier. */
            o_id: string;
            /** The online sales-order identifier. */
            so_id: string;
            /** The type value returned by the Jushuitan API. */
            type: string;
            /** The created value returned by the Jushuitan API. */
            created: string;
            /** The labels value returned by the Jushuitan API. */
            labels: string;
            /** The creator name value returned by the Jushuitan API. */
            creator_name: string;
            /** The modified value returned by the Jushuitan API. */
            modified: string;
            /** The modifier name value returned by the Jushuitan API. */
            modifier_name: string;
            /** The status value returned by the Jushuitan API. */
            status: string;
            /** The shop status value returned by the Jushuitan API. */
            shop_status: string;
            /** The remark value returned by the Jushuitan API. */
            remark: string;
            /** The Jushuitan inbound or outbound document identifier. */
            io_id: string;
            /** The question type value returned by the Jushuitan API. */
            question_type: string;
            /** The warehouse value returned by the Jushuitan API. */
            warehouse: string;
            /** The refund value returned by the Jushuitan API. */
            refund: string;
            /** The payment value returned by the Jushuitan API. */
            payment: string;
            /** The good status value returned by the Jushuitan API. */
            good_status: string;
            /** The node value returned by the Jushuitan API. */
            node: string;
            /** The order status value returned by the Jushuitan API. */
            order_status: string;
            /** The shop buyer id value returned by the Jushuitan API. */
            shop_buyer_id: string;
            /** The Jushuitan shop identifier. */
            shop_id: string;
            /** The receiver name value returned by the Jushuitan API. */
            receiver_name: string;
            /** The receiver mobile value returned by the Jushuitan API. */
            receiver_mobile: string;
            /** The logistics company value returned by the Jushuitan API. */
            logistics_company: string;
            /** The l id value returned by the Jushuitan API. */
            l_id: string;
            /** The wh id value returned by the Jushuitan API. */
            wh_id: string;
            /** The drp co name value returned by the Jushuitan API. */
            drp_co_name: string;
            /** The Jushuitan warehouse-company identifier. */
            wms_co_id: string;
            /** The confirm date value returned by the Jushuitan API. */
            confirm_date: string;
            /** The freight value returned by the Jushuitan API. */
            freight: string;
            /** The drp co id from value returned by the Jushuitan API. */
            drp_co_id_from: string;
            /** The drp co id to value returned by the Jushuitan API. */
            drp_co_id_to: string;
            /** The order type value returned by the Jushuitan API. */
            order_type: string;
            /** The buyer apply refund value returned by the Jushuitan API. */
            buyer_apply_refund: string;
            /** The free amount value returned by the Jushuitan API. */
            free_amount: string;
            /** The ts value returned by the Jushuitan API. */
            ts: string;
            /** The Jushuitan ERP company identifier. */
            co_id: string;
            /** The refund items value returned by the Jushuitan API. */
            refund_items: Array<{
              /** The asi id value returned by the Jushuitan API. */
              asi_id: number;
              /** The as id value returned by the Jushuitan API. */
              as_id: number;
              /** The merchant SKU identifier in Jushuitan. */
              sku_id: string;
              /** The qty value returned by the Jushuitan API. */
              qty: string;
              /** The defective qty value returned by the Jushuitan API. */
              defective_qty: string;
              /** The price value returned by the Jushuitan API. */
              price: string;
              /** The amount value returned by the Jushuitan API. */
              amount: string;
              /** The name value returned by the Jushuitan API. */
              name: string;
              /** The pic value returned by the Jushuitan API. */
              pic: string;
              /** The type value returned by the Jushuitan API. */
              type: string;
              /** The properties value value returned by the Jushuitan API. */
              properties_value: string;
              /** The outer oi id value returned by the Jushuitan API. */
              outer_oi_id: string;
              /** The sku type value returned by the Jushuitan API. */
              sku_type: string;
              /** The r qty value returned by the Jushuitan API. */
              r_qty: string;
              /** The item sign value returned by the Jushuitan API. */
              item_sign: string;
              /** The box id value returned by the Jushuitan API. */
              box_id: string;
              /** The combine sku id value returned by the Jushuitan API. */
              combine_sku_id: string;
              /** The receive date value returned by the Jushuitan API. */
              receive_date: string;
              /** The shop sku id value returned by the Jushuitan API. */
              shop_sku_id: string;
              /** The i id value returned by the Jushuitan API. */
              i_id: string;
              /** The des value returned by the Jushuitan API. */
              des: string;
              /** The shop amount value returned by the Jushuitan API. */
              shop_amount: string;
              /** The is gift value returned by the Jushuitan API. */
              is_gift: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** The response message value returned by the Jushuitan API. */
        msg?: unknown;
        /** The request identifier assigned by Jushuitan. */
        request_id?: unknown;
        [key: string]: unknown;
      };
    };
    /** List cross-border logistics providers and channels enabled for the merchant. */
    "jushuitan.list_cross_border_logistics_channels": {
      input: Record<string, never>;
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: Array<{
          /** The delivery id value returned by the Jushuitan API. */
          delivery_id: number;
          /** The delivery name value returned by the Jushuitan API. */
          delivery_name: string;
          /** The original delivery code value returned by the Jushuitan API. */
          original_delivery_code: string;
          /** The original delivery name value returned by the Jushuitan API. */
          original_delivery_name: string;
          /** The open channels value returned by the Jushuitan API. */
          open_channels: Array<{
            /** The channel name value returned by the Jushuitan API. */
            channel_name: string;
            /** The channel code value returned by the Jushuitan API. */
            channel_code: string;
            /** The shorter name value returned by the Jushuitan API. */
            shorter_name: string;
            /** The sorting code value returned by the Jushuitan API. */
            sorting_code: string;
            /** The channel mappings value returned by the Jushuitan API. */
            channel_mappings: Array<{
              /** The plat type value returned by the Jushuitan API. */
              plat_type: string;
              /** The plat name value returned by the Jushuitan API. */
              plat_name: string;
              /** The plat channel code value returned by the Jushuitan API. */
              plat_channel_code: string;
              /** The plat channel name cn value returned by the Jushuitan API. */
              plat_channel_name_cn: string;
              /** The plat channel name en value returned by the Jushuitan API. */
              plat_channel_name_en: string;
              /** The tracking url value returned by the Jushuitan API. */
              tracking_url: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** The response message value returned by the Jushuitan API. */
        msg?: unknown;
        /** The request identifier assigned by Jushuitan. */
        request_id?: unknown;
        [key: string]: unknown;
      };
    };
    /** List cross-border orders. */
    "jushuitan.list_cross_border_orders": {
      input: {
        /** The inclusive beginning of the modification-time filter. */
        modified_begin: string;
        /** The end of the modification-time filter. */
        modified_end: string;
        /** The o ids value accepted by the Jushuitan API. */
        o_ids?: Array<number>;
        /** The status value accepted by the Jushuitan API. */
        status?: string;
        /** The not status value accepted by the Jushuitan API. */
        not_status?: string;
        /** The so ids value accepted by the Jushuitan API. */
        so_ids?: Array<string>;
        /** The io ids value accepted by the Jushuitan API. */
        io_ids?: Array<string>;
        /** The seller flag value accepted by the Jushuitan API. */
        seller_flag?: string;
        /** The l id value accepted by the Jushuitan API. */
        l_id?: string;
        /** The cb l id value accepted by the Jushuitan API. */
        cb_l_id?: string;
        /** The order types value accepted by the Jushuitan API. */
        order_types?: Array<string>;
        /** The incremental timestamp cursor used to continue a changing-data query. */
        start_ts?: number;
        /**
         * The one-based current page number.
         * @minimum 1
         */
        current_page: number;
        /**
         * The number of records requested or returned in one page.
         * @minimum 1
         */
        page_size: number;
        /** The Jushuitan shop identifier. */
        shop_id?: number;
        /** The shop name value accepted by the Jushuitan API. */
        shop_name?: string;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The one-based page number. */
          page_index?: number;
          /** The number of records requested or returned in one page. */
          page_size?: number;
          /** The total number of matching records. */
          data_count?: number;
          /** The total number of available pages. */
          page_count?: number;
          /** Whether another page is available after this page. */
          has_next?: boolean;
          /** The data value returned by the Jushuitan API. */
          data?: Array<{
            /** The Jushuitan ERP company identifier. */
            co_id: number;
            /** The internal Jushuitan order identifier. */
            o_id: number;
            /** The Jushuitan shop identifier. */
            shop_id: number;
            /** The online sales-order identifier. */
            so_id: string;
            /** The order date value returned by the Jushuitan API. */
            order_date: string;
            /** The shop status value returned by the Jushuitan API. */
            shop_status: string;
            /** The question type value returned by the Jushuitan API. */
            question_type: string;
            /** The question desc value returned by the Jushuitan API. */
            question_desc: string;
            /** The status value returned by the Jushuitan API. */
            status: string;
            /** The shop buyer id value returned by the Jushuitan API. */
            shop_buyer_id: string;
            /** The receiver country value returned by the Jushuitan API. */
            receiver_country: string;
            /** The receiver state value returned by the Jushuitan API. */
            receiver_state: string;
            /** The receiver city value returned by the Jushuitan API. */
            receiver_city: string;
            /** The receiver district value returned by the Jushuitan API. */
            receiver_district: string;
            /** The receiver address value returned by the Jushuitan API. */
            receiver_address: string;
            /** The receiver name value returned by the Jushuitan API. */
            receiver_name: string;
            /** The receiver mobile value returned by the Jushuitan API. */
            receiver_mobile: string;
            /** The receiver phone value returned by the Jushuitan API. */
            receiver_phone: string;
            /** The receiver town value returned by the Jushuitan API. */
            receiver_town: string;
            /** The receiver zip value returned by the Jushuitan API. */
            receiver_zip: string;
            /** The buyer id value returned by the Jushuitan API. */
            buyer_id: string;
            /** The send date value returned by the Jushuitan API. */
            send_date: string;
            /** The pay amount value returned by the Jushuitan API. */
            pay_amount: string;
            /** The freight value returned by the Jushuitan API. */
            freight: string;
            /** The first freight value returned by the Jushuitan API. */
            first_freight: string;
            /** The outerwms freight value returned by the Jushuitan API. */
            outerwms_freight: string;
            /** The weight value returned by the Jushuitan API. */
            weight: string;
            /** The f weight value returned by the Jushuitan API. */
            f_weight: string;
            /** The buyer message value returned by the Jushuitan API. */
            buyer_message: string;
            /** The remark value returned by the Jushuitan API. */
            remark: string;
            /** The invoice title value returned by the Jushuitan API. */
            invoice_title: string;
            /** The is cod value returned by the Jushuitan API. */
            is_cod: boolean;
            /** The type value returned by the Jushuitan API. */
            type: string;
            /** The shop site value returned by the Jushuitan API. */
            shop_site: string;
            /** The free amount value returned by the Jushuitan API. */
            free_amount: string;
            /** The paid amount value returned by the Jushuitan API. */
            paid_amount: string;
            /** The pay date value returned by the Jushuitan API. */
            pay_date: string;
            /** The outer pay id value returned by the Jushuitan API. */
            outer_pay_id: string;
            /** The modified value returned by the Jushuitan API. */
            modified: string;
            /** The order from value returned by the Jushuitan API. */
            order_from: string;
            /** The shop name value returned by the Jushuitan API. */
            shop_name: string;
            /** The seller flag value returned by the Jushuitan API. */
            seller_flag: string;
            /** The plan delivery date value returned by the Jushuitan API. */
            plan_delivery_date: string;
            /** The lc id value returned by the Jushuitan API. */
            lc_id: string;
            /** The l id value returned by the Jushuitan API. */
            l_id: string;
            /** The logistics company value returned by the Jushuitan API. */
            logistics_company: string;
            /** The discount rate value returned by the Jushuitan API. */
            discount_rate: string;
            /** The tag value returned by the Jushuitan API. */
            tag: string;
            /** The Jushuitan warehouse-company identifier. */
            wms_co_id: string;
            /** The currency value returned by the Jushuitan API. */
            currency: string;
            /** The labels value returned by the Jushuitan API. */
            labels: string;
            /** The amount value returned by the Jushuitan API. */
            amount: string;
            /** The drp co id from value returned by the Jushuitan API. */
            drp_co_id_from: string;
            /** The is split value returned by the Jushuitan API. */
            is_split: boolean;
            /** The is merge value returned by the Jushuitan API. */
            is_merge: boolean;
            /** The creator name value returned by the Jushuitan API. */
            creator_name: string;
            /** The buyer tax no value returned by the Jushuitan API. */
            buyer_tax_no: string;
            /** The invoice type value returned by the Jushuitan API. */
            invoice_type: string;
            /** The sign time value returned by the Jushuitan API. */
            sign_time: string;
            /** The logistics sign time value returned by the Jushuitan API. */
            logistics_sign_time: string;
            /** The skus value returned by the Jushuitan API. */
            skus: string;
            /** The card info value returned by the Jushuitan API. */
            card_info: string;
            /** The end time value returned by the Jushuitan API. */
            end_time: string;
            /** The sender address value returned by the Jushuitan API. */
            sender_address: string;
            /** The referrer id value returned by the Jushuitan API. */
            referrer_id: string;
            /** The referrer name value returned by the Jushuitan API. */
            referrer_name: string;
            /** The created value returned by the Jushuitan API. */
            created: string;
            /** The shipment value returned by the Jushuitan API. */
            shipment: string;
            /** The open id value returned by the Jushuitan API. */
            open_id: string;
            /** The outer as id value returned by the Jushuitan API. */
            outer_as_id: string;
            /** The ts value returned by the Jushuitan API. */
            ts: string;
            /** The buyer paid amount value returned by the Jushuitan API. */
            buyer_paid_amount: string;
            /** The seller income amount value returned by the Jushuitan API. */
            seller_income_amount: string;
            /** The link o id value returned by the Jushuitan API. */
            link_o_id: string;
            /** The merge so id value returned by the Jushuitan API. */
            merge_so_id: string;
            /** The outer so id value returned by the Jushuitan API. */
            outer_so_id: string;
            /** The cb l id value returned by the Jushuitan API. */
            cb_l_id: string;
            /** The cb lc code value returned by the Jushuitan API. */
            cb_lc_code: string;
            /** The l id first trip value returned by the Jushuitan API. */
            l_id_first_trip: string;
            /** The l id last trip value returned by the Jushuitan API. */
            l_id_last_trip: string;
            /** The cb lc name value returned by the Jushuitan API. */
            cb_lc_name: string;
            /** The chosen channel value returned by the Jushuitan API. */
            chosen_channel: string;
            /** The channel name value returned by the Jushuitan API. */
            channel_name: string;
            /** The confirm date value returned by the Jushuitan API. */
            confirm_date: string;
            /** The declare amount value returned by the Jushuitan API. */
            declare_amount: string;
            /** The cb total tax value returned by the Jushuitan API. */
            cb_total_tax: string;
            /** The freight tax value returned by the Jushuitan API. */
            freight_tax: string;
            /** The package no value returned by the Jushuitan API. */
            package_no: string;
            /** The warehouse oid value returned by the Jushuitan API. */
            warehouse_oid: string;
            /** The platform subsidy amount; Jushuitan may return a number or an empty string. */
            platform_free_amount: string | number;
            /** The payment discount amount; Jushuitan may return a number or an empty string. */
            pay_free_amount: string | number;
            /** The referrer discount amount; Jushuitan may return a number or an empty string. */
            referrer_free_amount: string | number;
            /** The shop discount amount; Jushuitan may return a number or an empty string. */
            shop_free_amount: string | number;
            /** The refund amount value returned by the Jushuitan API. */
            refund_amount: string;
            /** The first freight tariff value returned by the Jushuitan API. */
            first_freight_tariff: number;
            /** The f freight other expense value returned by the Jushuitan API. */
            f_freight_other_expense: number;
            /** The order items value returned by the Jushuitan API. */
            order_items: Array<{
              /** The oi id value returned by the Jushuitan API. */
              oi_id: number;
              /** The merchant SKU identifier in Jushuitan. */
              sku_id: string;
              /** The i id value returned by the Jushuitan API. */
              i_id: string;
              /** The shop sku id value returned by the Jushuitan API. */
              shop_sku_id: string;
              /** The shop i id value returned by the Jushuitan API. */
              shop_i_id: string;
              /** The properties value value returned by the Jushuitan API. */
              properties_value: string;
              /** The amount value returned by the Jushuitan API. */
              amount: string;
              /** The base price value returned by the Jushuitan API. */
              base_price: string;
              /** The qty value returned by the Jushuitan API. */
              qty: string;
              /** The name value returned by the Jushuitan API. */
              name: string;
              /** The unit price, including tax by default. */
              price: string;
              /** The outer oi id value returned by the Jushuitan API. */
              outer_oi_id: string;
              /** The refund id value returned by the Jushuitan API. */
              refund_id: string;
              /** The refund qty value returned by the Jushuitan API. */
              refund_qty: string;
              /** The refund status value returned by the Jushuitan API. */
              refund_status: string;
              /** The raw so id value returned by the Jushuitan API. */
              raw_so_id: string;
              /** The is presale value returned by the Jushuitan API. */
              is_presale: boolean;
              /** The is gift value returned by the Jushuitan API. */
              is_gift: boolean;
              /** The item status value returned by the Jushuitan API. */
              item_status: string | null;
              /** The send warehouse value returned by the Jushuitan API. */
              send_warehouse: string;
              /** The item pay amount value returned by the Jushuitan API. */
              item_pay_amount: string;
              /** The referrer id value returned by the Jushuitan API. */
              referrer_id: string;
              /** The referrer name value returned by the Jushuitan API. */
              referrer_name: string;
              /** The discount rate value returned by the Jushuitan API. */
              discount_rate: string;
              /** The pic value returned by the Jushuitan API. */
              pic: string;
              /** The sku type value returned by the Jushuitan API. */
              sku_type: string;
              /** The remark value returned by the Jushuitan API. */
              remark: string;
              /** The src combine sku id value returned by the Jushuitan API. */
              src_combine_sku_id: string;
              /** The item ext data value returned by the Jushuitan API. */
              item_ext_data: string;
              /** The buyer paid amount value returned by the Jushuitan API. */
              buyer_paid_amount: string;
              /** The seller income amount value returned by the Jushuitan API. */
              seller_income_amount: string;
              /** The product tax value returned by the Jushuitan API. */
              product_tax: string;
              /** The product freight value returned by the Jushuitan API. */
              product_freight: string;
              /** The product free amount value returned by the Jushuitan API. */
              product_free_amount: string;
              /** The batch id value returned by the Jushuitan API. */
              batch_id: string;
              /** The produced date value returned by the Jushuitan API. */
              produced_date: unknown;
              /** The expiration date value returned by the Jushuitan API. */
              expiration_date: unknown;
              [key: string]: unknown;
            }>;
            /** The order pays value returned by the Jushuitan API. */
            order_pays: Array<{
              /** The pay id value returned by the Jushuitan API. */
              pay_id: number;
              /** The outer pay id value returned by the Jushuitan API. */
              outer_pay_id: string;
              /** The pay date value returned by the Jushuitan API. */
              pay_date: string;
              /** The amount value returned by the Jushuitan API. */
              amount: string;
              /** The payment value returned by the Jushuitan API. */
              payment: string;
              /** The buyer account value returned by the Jushuitan API. */
              buyer_account: string;
              /** The is order pay value returned by the Jushuitan API. */
              is_order_pay: boolean;
              /** The status value returned by the Jushuitan API. */
              status: string;
              /** The pay type value returned by the Jushuitan API. */
              pay_type: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** The response message value returned by the Jushuitan API. */
        msg?: unknown;
        /** The request identifier assigned by Jushuitan. */
        request_id?: unknown;
        [key: string]: unknown;
      };
    };
    /** List distributors linked to the merchant in the Jushuitan distribution network. */
    "jushuitan.list_drp_distributors": {
      input: {
        /** The cooperation status: 0 for pending authorization, 1 for pending review, 2 for active, 3 for rejected, or 4 for terminated. */
        status?: number;
        /**
         * The one-based page number.
         * @minimum 1
         */
        page_num: number;
        /**
         * The number of records requested or returned in one page.
         * @minimum 1
         * @maximum 100
         */
        page_size: number;
        /** The exclusive beginning of the modification-time range in YYYY-MM-DD HH:mm:ss format. */
        updated_start?: string;
        /** The exclusive end of the modification-time range in YYYY-MM-DD HH:mm:ss format. */
        updated_end?: string;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: number;
        /** The response message returned by Jushuitan. */
        msg: string;
        /** The data value returned by the Jushuitan API. */
        data: {
          /** The total number of matching records when provided by Jushuitan. */
          total: number;
          /** The channel vos value returned by the Jushuitan API. */
          channel_vos: Array<{
            /** The cooperation status: 0 for pending authorization, 1 for pending review, 2 for active, 3 for rejected, or 4 for terminated. */
            status: number;
            /** The distributor company name. */
            co_name: string;
            /** The distributor company identifier. */
            channel_co_id: string;
            /** The apply time value returned by the Jushuitan API. */
            apply_time: string;
            /** The confirm time value returned by the Jushuitan API. */
            confirm_time: string;
            /** The bill name value returned by the Jushuitan API. */
            bill_name: string;
            /** The contact name value returned by the Jushuitan API. */
            contact_name: string;
            /** The contact phone value returned by the Jushuitan API. */
            contact_phone: string;
            /** The supplier remark value returned by the Jushuitan API. */
            supplier_remark: string;
            /** The supplier salesman name value returned by the Jushuitan API. */
            supplier_salesman_name: string;
            /** The dis level value returned by the Jushuitan API. */
            dis_level: number;
            /** The updated value returned by the Jushuitan API. */
            updated: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List suppliers linked to the merchant in the Jushuitan distribution network. */
    "jushuitan.list_drp_suppliers": {
      input: {
        /** The cooperation status: 0 for pending authorization, 1 for pending review, 2 for active, 3 for rejected, or 4 for terminated. */
        status?: number;
        /** The supplier company name to query. */
        co_name?: string;
        /** The supplier company identifier to query. */
        supplier_co_id?: string;
        /**
         * The one-based page number.
         * @minimum 1
         */
        page_num: number;
        /**
         * The number of records requested or returned in one page.
         * @minimum 1
         * @maximum 100
         */
        page_size: number;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: number;
        /** The response message returned by Jushuitan. */
        msg: string;
        /** The data value returned by the Jushuitan API. */
        data: {
          /** The total number of matching records when provided by Jushuitan. */
          total: number;
          /** The supplier vos value returned by the Jushuitan API. */
          supplier_vos: Array<{
            /** The cooperation status: 0 for pending authorization, 1 for pending review, 2 for active, 3 for rejected, or 4 for terminated. */
            status: number;
            /** The supplier company name. */
            co_name: string;
            /** The supplier company identifier. */
            supplier_co_id: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List registered express shipment records. */
    "jushuitan.list_express_registrations": {
      input: {
        /** The i ids value accepted by the Jushuitan API. */
        i_ids?: Array<string>;
        /** The logistics companys value accepted by the Jushuitan API. */
        logistics_companys?: Array<string>;
        /** The is archive value accepted by the Jushuitan API. */
        is_archive?: boolean;
        /** The begin time value accepted by the Jushuitan API. */
        begin_time?: string;
        /** The end time value accepted by the Jushuitan API. */
        end_time?: string;
        /** The begin timestamp value accepted by the Jushuitan API. */
        begin_timestamp?: number;
        /**
         * The one-based page number.
         * @minimum 1
         */
        page_index: number;
        /**
         * The number of records per page; supported values are 100, 200, and 500.
         * @minimum 1
         */
        page_size: number;
        /** The enabled value accepted by the Jushuitan API. */
        enabled?: boolean;
      };
      output: {
        /** The page value returned by the Jushuitan API. */
        page?: {
          /** The one-based current page number. */
          current_page?: number;
          /** The number of records requested or returned in one page. */
          page_size?: number;
          /** The count value returned by the Jushuitan API. */
          count?: number;
          /** The pages value returned by the Jushuitan API. */
          pages?: number;
          /** The index value returned by the Jushuitan API. */
          index?: number;
          [key: string]: unknown;
        };
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The act value returned by the Jushuitan API. */
        act?: number;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The as express list value returned by the Jushuitan API. */
          as_express_list?: Array<{
            /** The l id value returned by the Jushuitan API. */
            l_id?: string;
            /** The logistics company value returned by the Jushuitan API. */
            logistics_company?: string;
            /** The total qty value returned by the Jushuitan API. */
            total_qty?: number;
            /** The warehouse receipt value returned by the Jushuitan API. */
            warehouse_receipt?: number;
            /** The creator name value returned by the Jushuitan API. */
            creator_name?: string;
            /** The created value returned by the Jushuitan API. */
            created?: string;
            /** Whether the record is active: true for active and false for voided. */
            enabled?: boolean;
            /** The warehouse remark value returned by the Jushuitan API. */
            warehouse_remark?: string;
            /** The remark value returned by the Jushuitan API. */
            remark?: string;
            /** The labels value returned by the Jushuitan API. */
            labels?: string;
            /** The wms co name value returned by the Jushuitan API. */
            wms_co_name?: string;
            /** The receipt date value returned by the Jushuitan API. */
            receipt_date?: string;
            /** The timestamp value returned by the Jushuitan API. */
            timestamp?: number;
            [key: string]: unknown;
          }>;
          /** The one-based current page number. */
          current_page?: number;
          /** The number of records requested or returned in one page. */
          page_size?: number;
          /** The count value returned by the Jushuitan API. */
          count?: number;
          /** The pages value returned by the Jushuitan API. */
          pages?: number;
          [key: string]: unknown;
        };
        /** The response message value returned by the Jushuitan API. */
        msg?: unknown;
        /** The msg type value returned by the Jushuitan API. */
        msg_type?: string;
        /** The request identifier assigned by Jushuitan. */
        request_id?: unknown;
        /** The cookie value returned by the Jushuitan API. */
        cookie?: unknown;
        [key: string]: unknown;
      };
    };
    /** List finance expense projects configured for the merchant. */
    "jushuitan.list_finance_projects": {
      input: {
        /** Whether child projects should be nested under their parents. False returns a flat list; omission uses the nested form. */
        include_children: boolean;
        /** Whether to filter by enabled state. True returns enabled projects, false returns disabled projects, and omission returns both. */
        enable?: boolean;
      };
      output: {
        /** The one-based page number. */
        page_index?: number;
        /** The number of records requested or returned in one page. */
        page_size?: number;
        /** Whether another page is available after this page. */
        has_next?: boolean;
        /** The count value returned by the Jushuitan API. */
        count?: number;
        /** The pages value returned by the Jushuitan API. */
        pages?: number;
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The is success value returned by the Jushuitan API. */
        is_success?: boolean;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The business records returned in this response. */
        datas?: Array<{
          /** The csg id value returned by the Jushuitan API. */
          csg_id: number;
          /** The pcsg id value returned by the Jushuitan API. */
          pcsg_id: number;
          /** The finance-project code. */
          code: string;
          /** The name value returned by the Jushuitan API. */
          name: string;
          /** The remark value returned by the Jushuitan API. */
          remark: string;
          /** The level value returned by the Jushuitan API. */
          level: number;
          /** The enabled value returned by the Jushuitan API. */
          enabled: string;
          /** The is last level value returned by the Jushuitan API. */
          is_last_level: string;
          /** The parent code value returned by the Jushuitan API. */
          parent_code: string;
          /** The parent name value returned by the Jushuitan API. */
          parent_name: string;
          /** The create time value returned by the Jushuitan API. */
          create_time: string;
          /** The child projects, returned when include_children is true or omitted. */
          children: Array<{
            /** The csg id value returned by the Jushuitan API. */
            csg_id: number;
            /** The pcsg id value returned by the Jushuitan API. */
            pcsg_id: number;
            /** The child finance-project code. */
            code: string;
            /** The name value returned by the Jushuitan API. */
            name: string;
            /** The remark value returned by the Jushuitan API. */
            remark: string;
            /** The level value returned by the Jushuitan API. */
            level: number;
            /** The enabled value returned by the Jushuitan API. */
            enabled: string;
            /** The is last level value returned by the Jushuitan API. */
            is_last_level: string;
            /** The parent code value returned by the Jushuitan API. */
            parent_code: string;
            /** The parent name value returned by the Jushuitan API. */
            parent_name: string;
            /** The create time value returned by the Jushuitan API. */
            create_time: string;
            /** The children value returned by the Jushuitan API. */
            children: Array<string>;
            /** The labels value returned by the Jushuitan API. */
            labels: unknown;
            [key: string]: unknown;
          }>;
          /** The labels value returned by the Jushuitan API. */
          labels: Array<string> | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List product inventory by warehouse and product filters. */
    "jushuitan.list_inventory": {
      input: {
        /** The warehouse-company identifier. Omit it or use 0 to aggregate inventory across all warehouses; provide one to query that branch warehouse. */
        wms_co_id?: number;
        /**
         * The one-based page number.
         * @minimum 1
         */
        page_index: number;
        /**
         * The number of records per page. Defaults to 30 and cannot exceed 100.
         * @minimum 1
         * @maximum 100
         */
        page_size: number;
        /** The inclusive beginning of the modification-time filter. Provide it together with modified_end; the interval cannot exceed seven days. */
        modified_begin?: string;
        /** The end of the modification-time filter. Provide it together with modified_begin; the interval cannot exceed seven days. */
        modified_end?: string;
        /** Comma-separated merchant SKU identifiers. Either this field or a modification-time range is required; at most 100 identifiers are accepted. */
        sku_ids?: string;
        /** The has lock qty value accepted by the Jushuitan API. */
        has_lock_qty?: boolean;
        /** Comma-separated product names; at most 100 names are accepted. */
        names?: string;
        /** The i ids value accepted by the Jushuitan API. */
        i_ids?: string;
        /** The incremental timestamp cursor used to avoid missing records. Do not provide time-range filters when using it. */
        ts?: number;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The number of records per page. */
          page_size?: number;
          /** The one-based page number. */
          page_index?: number;
          /** Whether another page is available. Timestamp queries are not aggregated; when has_next is false, use the largest returned ts to decide whether to continue. */
          has_next?: boolean;
          /** The inventorys value returned by the Jushuitan API. */
          inventorys?: Array<{
            /** The merchant SKU identifier in Jushuitan. */
            sku_id: string;
            /** The ts value returned by the Jushuitan API. */
            ts: number;
            /** The i id value returned by the Jushuitan API. */
            i_id?: string;
            /** The qty value returned by the Jushuitan API. */
            qty?: number;
            /** The order lock value returned by the Jushuitan API. */
            order_lock?: number;
            /** The pick lock value returned by the Jushuitan API. */
            pick_lock?: number;
            /** The virtual qty value returned by the Jushuitan API. */
            virtual_qty?: number;
            /** The purchase qty value returned by the Jushuitan API. */
            purchase_qty?: number;
            /** The return qty value returned by the Jushuitan API. */
            return_qty?: number;
            /** The in qty value returned by the Jushuitan API. */
            in_qty?: number;
            /** The defective-goods inventory. Updating modified when this quantity changes requires the corresponding ERP base-setting switch. */
            defective_qty?: number;
            /** The modification time, suitable as the starting point for the next query. */
            modified?: string;
            /** The min qty value returned by the Jushuitan API. */
            min_qty?: number;
            /** The max qty value returned by the Jushuitan API. */
            max_qty?: number;
            /** The locked inventory quantity, returned according to the has_lock_qty input. */
            lock_qty?: number;
            /** The name value returned by the Jushuitan API. */
            name?: string;
            /** The customize qty 1 value returned by the Jushuitan API. */
            customize_qty_1?: number;
            /** The customize qty 2 value returned by the Jushuitan API. */
            customize_qty_2?: number;
            /** The customize qty 3 value returned by the Jushuitan API. */
            customize_qty_3?: number;
            /** The allocate qty value returned by the Jushuitan API. */
            allocate_qty?: number;
            /** The sales-return quantity in transit. It is omitted unless the corresponding configuration is enabled. */
            sale_refund_qty?: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List inventory count documents and their recorded quantities. */
    "jushuitan.list_inventory_counts": {
      input: {
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        page_index?: number;
        /**
         * The number of records per page. Defaults to 30 and cannot exceed 50; larger values can make page_count incomplete.
         * @minimum 1
         * @maximum 50
         */
        page_size?: number;
        /** The inclusive beginning of the modification-time filter. Provide it together with modified_end; the interval cannot exceed seven days, and either a time range or io_ids is required. */
        modified_begin?: string;
        /** The end of the modification-time filter. Provide it together with modified_begin; the interval cannot exceed seven days, and either a time range or io_ids is required. */
        modified_end?: string;
        /** Comma-separated inventory-count document identifiers. Either this field or a modification-time range is required; at most 50 are accepted. */
        io_ids?: string;
        /** The document status: WaitConfirm, Confirmed, Archive, Cancelled, or Delete. */
        status?: string;
        /** The owner-company identifier. Third-party warehouse merchants default to their own data when omitted; use 2147483647 to query all owners. */
        owner_co_id?: number;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The number of records per page. */
          page_size?: number;
          /** The one-based page number. */
          page_index?: number;
          /** The total number of matching records. */
          data_count?: number;
          /** The total number of available pages. */
          page_count?: number;
          /** Whether another page is available after this page. */
          has_next?: boolean;
          /** The business records returned in this response. */
          datas?: Array<{
            /** The type value returned by the Jushuitan API. */
            type?: string;
            /** The Jushuitan inbound or outbound document identifier. */
            io_id?: number;
            /** The io date value returned by the Jushuitan API. */
            io_date?: string;
            /** The document status: WaitConfirm, Confirmed, Archive, Cancelled, or Delete. */
            status?: string;
            /** The warehouse value returned by the Jushuitan API. */
            warehouse?: string;
            /** The creator name value returned by the Jushuitan API. */
            creator_name?: string;
            /** The remark value returned by the Jushuitan API. */
            remark?: string;
            /** The warehouse identifier: 1 for main, 2 for sales returns, 3 for purchasing, or 4 for defective goods. */
            wh_id?: number;
            /** The Jushuitan warehouse-company identifier. */
            wms_co_id?: number;
            /** The modified value returned by the Jushuitan API. */
            modified?: string;
            /** The items value returned by the Jushuitan API. */
            items?: Array<{
              /** The Jushuitan inbound or outbound document identifier. */
              io_id?: number;
              /** The ioi id value returned by the Jushuitan API. */
              ioi_id?: number;
              /** The merchant SKU identifier in Jushuitan. */
              sku_id?: string;
              /** The i id value returned by the Jushuitan API. */
              i_id?: string;
              /** The name value returned by the Jushuitan API. */
              name?: string;
              /** The properties value value returned by the Jushuitan API. */
              properties_value?: string;
              /** The r qty value returned by the Jushuitan API. */
              r_qty?: number;
              /** The qty value returned by the Jushuitan API. */
              qty?: number;
              /** The production batch identifier, returned when the corresponding ERP feature is enabled. */
              batch_id?: string;
              /** The production batch date, returned when the corresponding ERP feature is enabled. */
              product_date?: string;
              /** The supplier identifier, returned when the corresponding ERP feature is enabled. */
              supplier_id?: number;
              /** The expiration date, returned when the corresponding ERP business feature is enabled. */
              expiration_date?: string;
              [key: string]: unknown;
            }>;
            /** The production batches, returned when the corresponding ERP feature is enabled. */
            batchs?: Array<{
              /** The batch no value returned by the Jushuitan API. */
              batch_no?: string;
              /** The merchant SKU identifier in Jushuitan. */
              sku_id?: string;
              /** The qty value returned by the Jushuitan API. */
              qty?: number;
              /** The product date value returned by the Jushuitan API. */
              product_date?: string;
              /** The supplier id value returned by the Jushuitan API. */
              supplier_id?: number;
              /** The supplier name value returned by the Jushuitan API. */
              supplier_name?: string;
              /** The expiration date, returned when the corresponding ERP business feature is enabled. */
              expiration_date?: string;
              /** The ioi id value returned by the Jushuitan API. */
              ioi_id?: string;
              [key: string]: unknown;
            }>;
            /** The unique serial numbers, returned when the corresponding ERP feature is enabled. */
            sns?: Array<{
              /** The merchant SKU identifier in Jushuitan. */
              sku_id?: string;
              /** The sn value returned by the Jushuitan API. */
              sn?: string;
              /** The qty value returned by the Jushuitan API. */
              qty?: number;
              [key: string]: unknown;
            }>;
            /** The financial-review status: WaitConfirm or Confirmed. */
            f_status?: string;
            /** The lock wh id value returned by the Jushuitan API. */
            lock_wh_id?: number;
            /** The lock wh name value returned by the Jushuitan API. */
            lock_wh_name?: string;
            /** The labels value returned by the Jushuitan API. */
            labels?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List logistics companies and carrier codes available to the merchant. */
    "jushuitan.list_logistics_companies": {
      input: {
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        page_index?: number;
        /**
         * The number of records per page. Defaults to 30 and cannot exceed 50.
         * @minimum 1
         * @maximum 50
         */
        page_size?: number;
        /** The inclusive beginning of the modification-time filter. */
        modified_begin?: string;
        /** The end of the modification-time filter. */
        modified_end?: string;
        /** The warehouse-company identifier. When omitted, Jushuitan returns enabled logistics companies across the merchant account. */
        wms_co_id?: number;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: number;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The one-based page number. */
          page_index: number;
          /** The number of records per page. */
          page_size: number;
          /** Whether another page is available after this page. */
          has_next?: boolean;
          /** The total number of matching records. */
          data_count?: number;
          /** The total number of available pages. */
          page_count?: number;
          /** The logistics companies returned in this response. */
          datas?: Array<{
            /** The unique ERP logistics-company code. */
            lc_id?: string;
            /** The logistics-company name. */
            lc_name?: string;
            /** The last modification time. */
            modified?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List manufacturing orders and their details. */
    "jushuitan.list_manufacturing_orders": {
      input: {
        /**
         * The one-based page number.
         * @minimum 1
         */
        page_index?: number;
        /**
         * The number of records per page. Defaults to 20 and cannot exceed 100.
         * @minimum 1
         * @maximum 100
         */
        page_size?: number;
        /** The start of the time filter. Supply it with end_time; the range cannot exceed seven days. */
        start_time?: string;
        /** The end of the time filter. Supply it with start_time; the range cannot exceed seven days. */
        end_time?: string;
        /** The date field used by the time filter: 0 modified, 1 created, or 2 manufacturing date. Defaults to 0. */
        date_type?: number;
        /**
         * External order numbers, up to 20. This selector, mo_ids, statusList, and the time range cannot all be empty.
         * @maxItems 20
         */
        so_ids?: Array<string>;
        /**
         * Manufacturing-order identifiers, up to 20. This selector, so_ids, statusList, and the time range cannot all be empty.
         * @maxItems 20
         */
        mo_ids?: Array<string>;
        /** Statuses to include: Creating, WaitConfirm, Confirmed, Finished, or Cancelled. This selector and the time range cannot both be empty. */
        statusList?: Array<string>;
      };
      output: {
        /** The number of records per page. */
        page_size?: number;
        /** The one-based page number. */
        page_index?: number;
        /** Whether another page is available after this page. */
        has_next?: boolean;
        /** The total number of available pages. */
        page_count?: number;
        /** The total number of matching records. */
        data_count?: number;
        /** The business records returned in this response. */
        datas?: Array<{
          /** The po id value returned by the Jushuitan API. */
          po_id?: number;
          /** The po date value returned by the Jushuitan API. */
          po_date?: string;
          /** The seller value returned by the Jushuitan API. */
          seller?: string;
          /** The send address value returned by the Jushuitan API. */
          send_address?: string;
          /** The term value returned by the Jushuitan API. */
          term?: string;
          /** The status value returned by the Jushuitan API. */
          status?: string;
          /** The purchaser name value returned by the Jushuitan API. */
          purchaser_name?: string;
          /** The labels value returned by the Jushuitan API. */
          labels?: string;
          /** The print count value returned by the Jushuitan API. */
          print_count?: number;
          /** The manufacture type value returned by the Jushuitan API. */
          manufacture_type?: string;
          /** The sub type value returned by the Jushuitan API. */
          sub_type?: string;
          /** The weight value returned by the Jushuitan API. */
          weight?: number;
          /** The volume value returned by the Jushuitan API. */
          volume?: number;
          /** The Jushuitan warehouse-company identifier. */
          wms_co_id?: number;
          /** The receipt wms co id value returned by the Jushuitan API. */
          receipt_wms_co_id?: number;
          /** The modified value returned by the Jushuitan API. */
          modified?: string;
          /** The created value returned by the Jushuitan API. */
          created?: string;
          /** The items value returned by the Jushuitan API. */
          items?: Array<{
            /** The pic value returned by the Jushuitan API. */
            pic?: string;
            /** The merchant SKU identifier in Jushuitan. */
            sku_id?: string;
            /** The name value returned by the Jushuitan API. */
            name?: string;
            /** The properties value value returned by the Jushuitan API. */
            properties_value?: string;
            /** The i id value returned by the Jushuitan API. */
            i_id?: string;
            /** The qty value returned by the Jushuitan API. */
            qty?: number;
            /** The plan arrive qty value returned by the Jushuitan API. */
            plan_arrive_qty?: number;
            /** The delivery date value returned by the Jushuitan API. */
            delivery_date?: string;
            /** The price value returned by the Jushuitan API. */
            price?: number;
            /** The processing charges value returned by the Jushuitan API. */
            processing_charges?: number;
            /** The amount value returned by the Jushuitan API. */
            amount?: number;
            /** The remark value returned by the Jushuitan API. */
            remark?: string;
            /** The io qty value returned by the Jushuitan API. */
            io_qty?: number;
            [key: string]: unknown;
          }>;
          /** The raws value returned by the Jushuitan API. */
          raws?: Array<{
            /** The pic value returned by the Jushuitan API. */
            pic?: string;
            /** The merchant SKU identifier in Jushuitan. */
            sku_id?: string;
            /** The name value returned by the Jushuitan API. */
            name?: string;
            /** The properties value value returned by the Jushuitan API. */
            properties_value?: string;
            /** The qty value returned by the Jushuitan API. */
            qty?: number;
            /** The remark value returned by the Jushuitan API. */
            remark?: string;
            [key: string]: unknown;
          }>;
          /** The batchs value returned by the Jushuitan API. */
          batchs?: Array<{
            /** The batch no value returned by the Jushuitan API. */
            batch_no?: string;
            /** The merchant SKU identifier in Jushuitan. */
            sku_id?: string;
            /** The qty value returned by the Jushuitan API. */
            qty?: number;
            /** The product date value returned by the Jushuitan API. */
            product_date?: string;
            /** The supplier id value returned by the Jushuitan API. */
            supplier_id?: number;
            /** The supplier name value returned by the Jushuitan API. */
            supplier_name?: string;
            /** The expiration date value returned by the Jushuitan API. */
            expiration_date?: string;
            [key: string]: unknown;
          }>;
          /** The wave id value returned by the Jushuitan API. */
          wave_id?: number;
          /** The remark value returned by the Jushuitan API. */
          remark?: string;
          /** The out lwh id value returned by the Jushuitan API. */
          out_lwh_id?: number;
          /** The in lwh id value returned by the Jushuitan API. */
          in_lwh_id?: number;
          [key: string]: unknown;
        }>;
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The issuccess value returned by the Jushuitan API. */
        issuccess?: boolean;
        /** The response message returned by Jushuitan. */
        msg?: string;
        [key: string]: unknown;
      };
    };
    /** List operating expense records from the Jushuitan finance module. */
    "jushuitan.list_operating_expenses": {
      input: {
        /**
         * The one-based page number.
         * @minimum 1
         */
        page_index: number;
        /**
         * The number of records requested or returned in one page.
         * @minimum 1
         */
        page_size: number;
        /** The fee ids value accepted by the Jushuitan API. */
        fee_ids?: Array<string>;
        /** The bill begin date value accepted by the Jushuitan API. */
        bill_begin_date: string;
        /** The bill end date value accepted by the Jushuitan API. */
        bill_end_date: string;
        /** The bill type value accepted by the Jushuitan API. */
        bill_type?: Array<string>;
        /** The status value accepted by the Jushuitan API. */
        status?: Array<string>;
        /** The inclusive beginning of the modification-time filter. */
        modified_begin?: string;
        /** The end of the modification-time filter. */
        modified_end?: string;
      };
      output: {
        /** The one-based page number. */
        page_index?: number;
        /** The number of records requested or returned in one page. */
        page_size?: number;
        /** Whether another page is available after this page. */
        has_next?: boolean;
        /** The count value returned by the Jushuitan API. */
        count?: number;
        /** The pages value returned by the Jushuitan API. */
        pages?: number;
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The is success value returned by the Jushuitan API. */
        is_success?: boolean;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The business records returned in this response. */
        datas?: Array<{
          /** The fee id value returned by the Jushuitan API. */
          fee_id?: number;
          /** The bill type value returned by the Jushuitan API. */
          bill_type?: string;
          /** The fee date value returned by the Jushuitan API. */
          fee_date?: string;
          /** The status value returned by the Jushuitan API. */
          status?: string;
          /** The seller type value returned by the Jushuitan API. */
          seller_type?: string;
          /** The seller id value returned by the Jushuitan API. */
          seller_id?: number;
          /** The seller name value returned by the Jushuitan API. */
          seller_name?: string;
          /** The from bill type value returned by the Jushuitan API. */
          from_bill_type?: string;
          /** The currency value returned by the Jushuitan API. */
          currency?: string;
          /** The is adjust cost value returned by the Jushuitan API. */
          is_adjust_cost?: boolean;
          /** The remark value returned by the Jushuitan API. */
          remark?: string;
          /** The rate value returned by the Jushuitan API. */
          rate?: number;
          /** The amount value returned by the Jushuitan API. */
          amount?: number;
          /** The tax out amount value returned by the Jushuitan API. */
          tax_out_amount?: number;
          /** The tax amount value returned by the Jushuitan API. */
          tax_amount?: number;
          /** The fee type id value returned by the Jushuitan API. */
          fee_type_id?: number;
          /** The fee type code value returned by the Jushuitan API. */
          fee_type_code?: string;
          /** The fee type name value returned by the Jushuitan API. */
          fee_type_name?: string;
          /** The is create payment value returned by the Jushuitan API. */
          is_create_payment?: boolean;
          /** The account value returned by the Jushuitan API. */
          account?: unknown;
          /** The account name value returned by the Jushuitan API. */
          account_name?: unknown;
          /** The paid amount value returned by the Jushuitan API. */
          paid_amount?: number;
          /** The images value returned by the Jushuitan API. */
          images?: unknown;
          /** The owner id value returned by the Jushuitan API. */
          owner_id?: number;
          /** The owner name value returned by the Jushuitan API. */
          owner_name?: string;
          /** The is print value returned by the Jushuitan API. */
          is_print?: boolean;
          /** The created value returned by the Jushuitan API. */
          created?: string;
          /** The creator name value returned by the Jushuitan API. */
          creator_name?: string;
          /** The modified value returned by the Jushuitan API. */
          modified?: string;
          /** The modifier name value returned by the Jushuitan API. */
          modifier_name?: string;
          /** The Jushuitan warehouse-company identifier. */
          wms_co_id?: unknown;
          /** The is init bill value returned by the Jushuitan API. */
          is_init_bill?: boolean;
          /** The ts value returned by the Jushuitan API. */
          ts?: number;
          /** The items value returned by the Jushuitan API. */
          items?: Array<{
            /** The fee id value returned by the Jushuitan API. */
            fee_id?: number;
            /** The feeitem id value returned by the Jushuitan API. */
            feeitem_id?: number;
            /** The from id value returned by the Jushuitan API. */
            from_id?: number;
            /** The p from id value returned by the Jushuitan API. */
            p_from_id?: number;
            /** The merchant SKU identifier in Jushuitan. */
            sku_id?: string;
            /** The name value returned by the Jushuitan API. */
            name?: string;
            /** The properties value value returned by the Jushuitan API. */
            properties_value?: string;
            /** The weight value returned by the Jushuitan API. */
            weight?: unknown;
            /** The volume value returned by the Jushuitan API. */
            volume?: unknown;
            /** The qty value returned by the Jushuitan API. */
            qty?: number;
            /** The amount value returned by the Jushuitan API. */
            amount?: number;
            /** The rate amount value returned by the Jushuitan API. */
            rate_amount?: number;
            /** The amount rate out value returned by the Jushuitan API. */
            amount_rate_out?: unknown;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List orders visible through the standard Jushuitan OpenWeb channel. */
    "jushuitan.list_orders": {
      input: {
        /** The Jushuitan shop identifier. */
        shop_id?: number;
        /** The is offline shop value accepted by the Jushuitan API. */
        is_offline_shop?: boolean;
        /**
         * Online order numbers. This selector, o_ids, and the time range cannot all be empty; at most 20 values are accepted.
         * @maxItems 20
         */
        so_ids?: Array<string>;
        /** The inclusive beginning of the modification-time filter. Supply it with modified_end; the range cannot exceed seven days, and either a time range, so_ids, or o_ids is required. Prefer start_ts for reliable incremental pagination. */
        modified_begin?: string;
        /** The end of the modification-time filter. Supply it with modified_begin; the range cannot exceed seven days, and either a time range, so_ids, or o_ids is required. */
        modified_end?: string;
        /** The date field used by the time filter: 0 for modified time, 2 for order date, or 3 for shipment date. Defaults to 0. */
        date_type?: number;
        /** The status value accepted by the Jushuitan API. */
        status?: string;
        /**
         * The one-based page number.
         * @minimum 1
         */
        page_index?: number;
        /**
         * The number of records per page, up to 100.
         * @minimum 1
         * @maximum 100
         */
        page_size?: number;
        /** The incremental timestamp cursor used to continue a changing-data query. */
        start_ts?: number;
        /** Whether to return total record and page counts. Defaults to true; set it to false when using start_ts to avoid unnecessary query cost. */
        is_get_total?: boolean;
        /** Internal order identifiers. This selector, so_ids, and the time range cannot all be empty. */
        o_ids?: Array<number>;
        /** The order flds value accepted by the Jushuitan API. */
        order_flds?: Array<string>;
        /** The order item flds value accepted by the Jushuitan API. */
        order_item_flds?: Array<string>;
        /** The order types value accepted by the Jushuitan API. */
        order_types?: Array<string>;
        /** Whether to query archived orders. Defaults to false. */
        archive?: boolean;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The number of records per page. */
          page_size?: number;
          /** The one-based page number. */
          page_index?: number;
          /** The total number of matching records. */
          data_count?: number;
          /** The total number of available pages. */
          page_count?: number;
          /** Whether another page is available after this page. */
          has_next?: boolean;
          /** The orders value returned by the Jushuitan API. */
          orders?: Array<{
            /** The is cod value returned by the Jushuitan API. */
            is_cod?: boolean;
            /** The tracking number. It is written back only after the order has shipped and is unavailable while shipment is in progress. */
            l_id?: string;
            /** The send date value returned by the Jushuitan API. */
            send_date?: string;
            /** The pay date value returned by the Jushuitan API. */
            pay_date?: string;
            /** The freight value returned by the Jushuitan API. */
            freight?: string;
            /** The first freight value returned by the Jushuitan API. */
            first_freight?: string;
            /** The outerwms freight value returned by the Jushuitan API. */
            outerwms_freight?: string;
            /** The receiver address value returned by the Jushuitan API. */
            receiver_address?: string;
            /** The receiver district value returned by the Jushuitan API. */
            receiver_district?: string;
            /** The shipping warehouse-company identifier; 0 denotes the main warehouse. */
            wms_co_id?: number;
            /** The logistics company value returned by the Jushuitan API. */
            logistics_company?: string;
            /** The as id value returned by the Jushuitan API. */
            as_id?: number;
            /** The free amount value returned by the Jushuitan API. */
            free_amount?: number;
            /** The shop name value returned by the Jushuitan API. */
            shop_name?: string;
            /** The issue type, populated only for exception orders. */
            question_type?: string;
            /** The outer pay id value returned by the Jushuitan API. */
            outer_pay_id?: string;
            /** The platform-unique online sales-order identifier, up to 20 characters. */
            so_id?: string;
            /** The type value returned by the Jushuitan API. */
            type?: string;
            /** The order from value returned by the Jushuitan API. */
            order_from?: string;
            /** The status value returned by the Jushuitan API. */
            status?: string;
            /** The pay amount value returned by the Jushuitan API. */
            pay_amount?: number;
            /** The shop buyer id value returned by the Jushuitan API. */
            shop_buyer_id?: string;
            /** The platform buyer identifier, returned only for supported platforms. */
            open_id?: string;
            /** The platform order status. See Jushuitan's platform shop_status enumeration documentation for supported values. */
            shop_status?: string;
            /** The receiver mobile value returned by the Jushuitan API. */
            receiver_mobile?: string;
            /** The receiver phone value returned by the Jushuitan API. */
            receiver_phone?: string;
            /** The order date value returned by the Jushuitan API. */
            order_date?: string;
            /** The question desc value returned by the Jushuitan API. */
            question_desc?: string;
            /** The receiver city value returned by the Jushuitan API. */
            receiver_city?: string;
            /** The receiver state value returned by the Jushuitan API. */
            receiver_state?: string;
            /** The receiver name value returned by the Jushuitan API. */
            receiver_name?: string;
            /** The internal Jushuitan order identifier. */
            o_id?: number;
            /** The Jushuitan shop identifier. */
            shop_id?: number;
            /** The Jushuitan ERP company identifier. */
            co_id?: number;
            /** The remark value returned by the Jushuitan API. */
            remark?: string;
            /** The package no value returned by the Jushuitan API. */
            package_no?: string;
            /** The warehouse oid value returned by the Jushuitan API. */
            warehouse_oid?: string;
            /** The drp co id from value returned by the Jushuitan API. */
            drp_co_id_from?: string;
            /** The modified value returned by the Jushuitan API. */
            modified?: string;
            /** The labels value returned by the Jushuitan API. */
            labels?: string;
            /** The paid amount value returned by the Jushuitan API. */
            paid_amount?: number;
            /** The platform subsidy amount; Jushuitan may return a number or an empty string. */
            platform_free_amount?: string | number;
            /** The payment discount amount; Jushuitan may return a number or an empty string. */
            pay_free_amount?: string | number;
            /** The referrer discount amount; Jushuitan may return a number or an empty string. */
            referrer_free_amount?: string | number;
            /** The shop discount amount; Jushuitan may return a number or an empty string. */
            shop_free_amount?: string | number;
            /** The currency value returned by the Jushuitan API. */
            currency?: string;
            /** The buyer message value returned by the Jushuitan API. */
            buyer_message?: string;
            /** The lc id value returned by the Jushuitan API. */
            lc_id?: string;
            /** The cb total tax value returned by the Jushuitan API. */
            cb_total_tax?: string;
            /** The invoice title value returned by the Jushuitan API. */
            invoice_title?: string;
            /** The invoice type value returned by the Jushuitan API. */
            invoice_type?: string;
            /** The invoice amount value returned by the Jushuitan API. */
            invoice_amount?: number;
            /** The buyer tax no value returned by the Jushuitan API. */
            buyer_tax_no?: string;
            /** The creator name value returned by the Jushuitan API. */
            creator_name?: string;
            /** The plan delivery date value returned by the Jushuitan API. */
            plan_delivery_date?: string;
            /** The node value returned by the Jushuitan API. */
            node?: string;
            /** The receiver town value returned by the Jushuitan API. */
            receiver_town?: string;
            /** The drp co id to value returned by the Jushuitan API. */
            drp_co_id_to?: string;
            /** The shop site value returned by the Jushuitan API. */
            shop_site?: string;
            /** The un lid value returned by the Jushuitan API. */
            un_lid?: string;
            /** The receipt-confirmation time for supported platforms; for a cancelled online order, this is the completion time. */
            end_time?: string;
            /** The recipient country code. */
            receiver_country?: string;
            /** The receiver zip value returned by the Jushuitan API. */
            receiver_zip?: string;
            /** The seller flag: 1 red, 2 yellow, 3 green, 4 blue, or 5 purple. */
            seller_flag?: number;
            /** The receiver email value returned by the Jushuitan API. */
            receiver_email?: string;
            /** The referrer id value returned by the Jushuitan API. */
            referrer_id?: string;
            /** The referrer name value returned by the Jushuitan API. */
            referrer_name?: string;
            /** The created value returned by the Jushuitan API. */
            created?: string;
            /** The pays value returned by the Jushuitan API. */
            pays?: Array<{
              /** The is order pay value returned by the Jushuitan API. */
              is_order_pay?: boolean;
              /** The buyer account value returned by the Jushuitan API. */
              buyer_account?: string;
              /** The amount value returned by the Jushuitan API. */
              amount?: number;
              /** The pay date value returned by the Jushuitan API. */
              pay_date?: string;
              /** The outer pay id value returned by the Jushuitan API. */
              outer_pay_id?: string;
              /** The pay id value returned by the Jushuitan API. */
              pay_id?: string;
              /** The payment value returned by the Jushuitan API. */
              payment?: string;
              /** The status value returned by the Jushuitan API. */
              status?: string;
              /** The pay type value returned by the Jushuitan API. */
              pay_type?: string;
              /** The internal Jushuitan order identifier. */
              o_id?: number;
              [key: string]: unknown;
            }>;
            /** The items value returned by the Jushuitan API. */
            items?: Array<{
              /** The is gift value returned by the Jushuitan API. */
              is_gift?: boolean;
              /** The merchant SKU identifier in Jushuitan. */
              sku_id?: string;
              /** The name value returned by the Jushuitan API. */
              name?: string;
              /** The refund status value returned by the Jushuitan API. */
              refund_status?: string;
              /** The refund id value returned by the Jushuitan API. */
              refund_id?: string;
              /** The price value returned by the Jushuitan API. */
              price?: number;
              /** The merchant line-item key used to trace splits and merges, up to 50 characters. */
              outer_oi_id?: string;
              /** The item fulfillment status, such as None, WaitPay, WaitConfirm, Question, WaitDeliver, Delivering, Sent, Cancelled, Split, or Lock. Null has no special meaning. */
              item_status?: string | null;
              /** The i id value returned by the Jushuitan API. */
              i_id?: string;
              /** The properties value value returned by the Jushuitan API. */
              properties_value?: string;
              /** The child-order identifier, up to 20 characters upstream. */
              oi_id?: number;
              /** The amount value returned by the Jushuitan API. */
              amount?: number;
              /** The shop sku id value returned by the Jushuitan API. */
              shop_sku_id?: string;
              /** The raw so id value returned by the Jushuitan API. */
              raw_so_id?: string;
              /** The qty value returned by the Jushuitan API. */
              qty?: number;
              /** The src combine sku id value returned by the Jushuitan API. */
              src_combine_sku_id?: string;
              /** The is presale value returned by the Jushuitan API. */
              is_presale?: boolean;
              /** The base price value returned by the Jushuitan API. */
              base_price?: number;
              /** The pic value returned by the Jushuitan API. */
              pic?: string;
              /** The sku type value returned by the Jushuitan API. */
              sku_type?: string;
              /** The shop i id value returned by the Jushuitan API. */
              shop_i_id?: string;
              /** The buyer-paid revenue subtotal, returned only for orders visible in the ERP order details. */
              buyer_paid_amount?: number;
              /** The seller-received revenue subtotal, returned only for orders visible in the ERP order details. */
              seller_income_amount?: number;
              /** The referrer id value returned by the Jushuitan API. */
              referrer_id?: string;
              /** The lwh id value returned by the Jushuitan API. */
              lwh_id?: string;
              /** The lwh name value returned by the Jushuitan API. */
              lwh_name?: string;
              /** The remark value returned by the Jushuitan API. */
              remark?: string;
              /** The produced date value returned by the Jushuitan API. */
              produced_date: string;
              /** The batch id value returned by the Jushuitan API. */
              batch_id: string;
              /** The item ext data value returned by the Jushuitan API. */
              item_ext_data?: string;
              [key: string]: unknown;
            }>;
            /** The skus value returned by the Jushuitan API. */
            skus?: string;
            /** The f weight value returned by the Jushuitan API. */
            f_weight?: number;
            /** The weight value returned by the Jushuitan API. */
            weight?: number;
            /** The SQL Server rowversion value used as an incremental cursor. */
            ts?: number;
            /** The buyer id value returned by the Jushuitan API. */
            buyer_id?: string;
            /** The buyer-paid revenue subtotal, returned only for orders visible in the ERP order details. */
            buyer_paid_amount?: number;
            /** The seller-received revenue subtotal, returned only for orders visible in the ERP order details. */
            seller_income_amount?: number;
            /** The chosen channel value returned by the Jushuitan API. */
            chosen_channel?: string;
            /** The channel name value returned by the Jushuitan API. */
            channel_name?: string;
            /** The cb lc code value returned by the Jushuitan API. */
            cb_lc_code?: string;
            /** The cb lc name value returned by the Jushuitan API. */
            cb_lc_name?: string;
            /** The link o id value returned by the Jushuitan API. */
            link_o_id?: number;
            /** The merge so id value returned by the Jushuitan API. */
            merge_so_id?: string;
            /** The shipment value returned by the Jushuitan API. */
            shipment?: string;
            /** The sign time value returned by the Jushuitan API. */
            sign_time?: string;
            /** Deprecated cross-border finance data retained by Jushuitan for compatibility; use cb_financenew instead. */
            cb_finances?: {
              /** The internal Jushuitan order identifier. */
              o_id?: number;
              /** The rebate fee value returned by the Jushuitan API. */
              rebate_fee?: number;
              /** The product tax value returned by the Jushuitan API. */
              product_tax?: number;
              /** The shipping tax value returned by the Jushuitan API. */
              shipping_tax?: number;
              /** The other income value returned by the Jushuitan API. */
              other_income?: number;
              /** The voucher from seller value returned by the Jushuitan API. */
              voucher_from_seller?: number;
              /** The platform commission value returned by the Jushuitan API. */
              platform_commission?: number;
              /** The transition fee value returned by the Jushuitan API. */
              transition_fee?: number;
              /** The transaction fee value returned by the Jushuitan API. */
              transaction_fee?: number;
              /** The opaque bagging fee value returned by the Jushuitan API. */
              opaque_bagging_fee?: number;
              /** The other expense value returned by the Jushuitan API. */
              other_expense?: number;
              [key: string]: unknown;
            };
            /** The is merge value returned by the Jushuitan API. */
            is_merge?: boolean;
            /** The is split value returned by the Jushuitan API. */
            is_split?: boolean;
            /** The first freight tariff value returned by the Jushuitan API. */
            first_freight_tariff?: number;
            /** The f freight other expense value returned by the Jushuitan API. */
            f_freight_other_expense?: number;
            /** The service charge value returned by the Jushuitan API. */
            service_charge?: number;
            /** The government free amount value returned by the Jushuitan API. */
            government_free_amount?: number;
            /** The original online revenue amount; Jushuitan may return a number or an empty string. */
            online_origin_amount?: string | number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List miscellaneous inbound and outbound stock documents. */
    "jushuitan.list_other_stock_movements": {
      input: {
        /** The inclusive beginning of the modification-time filter. Provide it together with modified_end; the interval cannot exceed seven days, and either a time range or so_ids is required. */
        modified_begin?: string;
        /** The end of the modification-time filter. Provide it together with modified_begin; the interval cannot exceed seven days, and either a time range or so_ids is required. */
        modified_end?: string;
        /**
         * The online sales-order identifiers to query. Either this field or a modification-time range is required; at most 50 are accepted.
         * @maxItems 50
         */
        so_ids?: Array<string>;
        /** The types value accepted by the Jushuitan API. */
        types?: Array<string>;
        /** The status value accepted by the Jushuitan API. */
        status?: string;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        page_index?: number;
        /**
         * The number of records per page. Defaults to 30 and cannot exceed 50.
         * @minimum 1
         * @maximum 50
         */
        page_size?: number;
        /** The Jushuitan warehouse-company identifier. */
        wms_co_id?: number;
        /**
         * The stock-movement document identifiers to query; at most 50 are accepted.
         * @maxItems 50
         */
        io_ids?: Array<number>;
        /** The date field used for filtering: 0 for modified time or 2 for inbound/outbound time. Defaults to 0. */
        date_type?: number;
        /** The SQL Server row-version cursor used to avoid missing changing records during pagination. When provided, use it only with pagination fields. */
        start_ts?: number;
        /** The owner-company identifier. Third-party warehouse merchants default to their own data when omitted; use 2147483647 to query all owners. */
        owner_co_id?: number;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The number of records per page. */
          page_size?: number;
          /** The one-based page number. */
          page_index?: number;
          /** The total number of matching records. */
          data_count?: number;
          /** The total number of available pages. */
          page_count?: number;
          /** Whether another page is available after this page. */
          has_next?: boolean;
          /** The business records returned in this response. */
          datas?: Array<{
            /** The Jushuitan inbound or outbound document identifier. */
            io_id?: number;
            /** The io date value returned by the Jushuitan API. */
            io_date?: string;
            /** The status value returned by the Jushuitan API. */
            status?: string;
            /** The online sales-order identifier. */
            so_id?: string;
            /** The type value returned by the Jushuitan API. */
            type?: string;
            /** The f status value returned by the Jushuitan API. */
            f_status?: string;
            /** The warehouse value returned by the Jushuitan API. */
            warehouse?: string;
            /** The receiver name value returned by the Jushuitan API. */
            receiver_name?: string;
            /** The receiver mobile value returned by the Jushuitan API. */
            receiver_mobile?: string;
            /** The receiver state value returned by the Jushuitan API. */
            receiver_state?: string;
            /** The receiver city value returned by the Jushuitan API. */
            receiver_city?: string;
            /** The receiver district value returned by the Jushuitan API. */
            receiver_district?: string;
            /** The receiver address value returned by the Jushuitan API. */
            receiver_address?: string;
            /** The warehouse identifier: 1 for main, 2 for sales returns, 3 for purchasing, 4 for defective goods, or 6 through 8 for custom warehouses. */
            wh_id?: number;
            /** The remark value returned by the Jushuitan API. */
            remark?: string;
            /** The modified value returned by the Jushuitan API. */
            modified?: string;
            /** The created value returned by the Jushuitan API. */
            created?: string;
            /** The labels value returned by the Jushuitan API. */
            labels?: string;
            /** The Jushuitan warehouse-company identifier. */
            wms_co_id?: number;
            /** The creator name value returned by the Jushuitan API. */
            creator_name?: string;
            /** The wave id value returned by the Jushuitan API. */
            wave_id?: number;
            /** The drop co name value returned by the Jushuitan API. */
            drop_co_name?: string;
            /** The inout user value returned by the Jushuitan API. */
            inout_user?: string;
            /** The l id value returned by the Jushuitan API. */
            l_id?: string;
            /** The lc id value returned by the Jushuitan API. */
            lc_id?: string;
            /** The logistics company value returned by the Jushuitan API. */
            logistics_company?: string;
            /** The lock wh id value returned by the Jushuitan API. */
            lock_wh_id?: number;
            /** The lock wh name value returned by the Jushuitan API. */
            lock_wh_name?: string;
            /** The items value returned by the Jushuitan API. */
            items?: Array<{
              /** The ioi id value returned by the Jushuitan API. */
              ioi_id?: number;
              /** The merchant SKU identifier in Jushuitan. */
              sku_id?: string;
              /** The name value returned by the Jushuitan API. */
              name?: string;
              /** The unit value returned by the Jushuitan API. */
              unit?: string;
              /** The properties value value returned by the Jushuitan API. */
              properties_value?: string;
              /** The qty value returned by the Jushuitan API. */
              qty?: number;
              /** The cost price value returned by the Jushuitan API. */
              cost_price?: number;
              /** The cost amount value returned by the Jushuitan API. */
              cost_amount?: number;
              /** The i id value returned by the Jushuitan API. */
              i_id?: string;
              /** The remark value returned by the Jushuitan API. */
              remark?: string;
              /** The Jushuitan inbound or outbound document identifier. */
              io_id?: number;
              /** The sale price value returned by the Jushuitan API. */
              sale_price?: number;
              /** The sale amount value returned by the Jushuitan API. */
              sale_amount?: number;
              /** The batch id value returned by the Jushuitan API. */
              batch_id?: string;
              /** The product date value returned by the Jushuitan API. */
              product_date?: string;
              /** The supplier id value returned by the Jushuitan API. */
              supplier_id?: number;
              /** The expiration date, returned when the corresponding ERP business feature is enabled. */
              expiration_date?: string;
              [key: string]: unknown;
            }>;
            /** The production batches, returned when production batch management is enabled for the company and, for branch data, the branch. */
            batchs?: Array<{
              /** The batch no value returned by the Jushuitan API. */
              batch_no?: string;
              /** The merchant SKU identifier in Jushuitan. */
              sku_id?: string;
              /** The qty value returned by the Jushuitan API. */
              qty?: number;
              /** The product date value returned by the Jushuitan API. */
              product_date?: string;
              /** The supplier id value returned by the Jushuitan API. */
              supplier_id?: number;
              /** The supplier name value returned by the Jushuitan API. */
              supplier_name?: string;
              /** The ioi id value returned by the Jushuitan API. */
              ioi_id?: string;
              [key: string]: unknown;
            }>;
            /** The sns value returned by the Jushuitan API. */
            sns?: Array<{
              /** The merchant SKU identifier in Jushuitan. */
              sku_id?: string;
              /** The sn value returned by the Jushuitan API. */
              sn?: string;
              [key: string]: unknown;
            }>;
            /** The ts value returned by the Jushuitan API. */
            ts?: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List inventory contained in packages and warehouse bins. */
    "jushuitan.list_package_bin_inventory": {
      input: {
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        page_index?: number;
        /**
         * The number of records per page; at most 500 are returned.
         * @minimum 1
         * @maximum 500
         */
        page_size?: number;
        /** The merchant SKU identifiers. At least one of sku_ids, a modification-time range, or pack_item_id_begin is required. */
        sku_ids?: Array<string>;
        /** The warehouse-company identifier. Defaults to the account currently authorizing the request. */
        wms_co_id?: number;
        /** The owner co id value accepted by the Jushuitan API. */
        owner_co_id?: number;
        /** The storage type: Bin for bin inventory, DefaultPack for staging inventory, or Pack for boxed inventory. */
        pack_type?: string;
        /** The inclusive beginning of the modification-time filter. At least one of a time range, sku_ids, or pack_item_id_begin is required. */
        modified_begin?: string;
        /** The end of the modification-time filter. At least one of a time range, sku_ids, or pack_item_id_begin is required. */
        modified_end?: string;
        /** Whether to query all warehouses. When false, returned wms_co_id values are null. */
        is_load_all_wms?: boolean;
        /** The auto-increment cursor for full extraction. Do not combine it with time filters; at least one of this field, sku_ids, or a time range is required. */
        pack_item_id_begin?: number;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The one-based page number. */
          page_index?: number;
          /** The number of records requested or returned in one page. */
          page_size?: number;
          /** The total number of matching records. */
          data_count?: number;
          /** The total number of available pages. */
          page_count?: number;
          /** Whether another page is available after this page. */
          has_next?: boolean;
          /** The data value returned by the Jushuitan API. */
          data?: Array<{
            /** The pack id value returned by the Jushuitan API. */
            pack_id: string;
            /** The pack item id value returned by the Jushuitan API. */
            pack_item_id: number;
            /** The wh id value returned by the Jushuitan API. */
            wh_id: number;
            /** The pack type value returned by the Jushuitan API. */
            pack_type: string;
            /** The bin value returned by the Jushuitan API. */
            bin: string;
            /** The bin group value returned by the Jushuitan API. */
            bin_group: unknown;
            /** The merchant SKU identifier in Jushuitan. */
            sku_id: string;
            /** The qty value returned by the Jushuitan API. */
            qty: number;
            /** The batch id value returned by the Jushuitan API. */
            batch_id: string;
            /** The supplier id value returned by the Jushuitan API. */
            supplier_id: number;
            /** The produced date value returned by the Jushuitan API. */
            produced_date: unknown;
            /** The expiration date value returned by the Jushuitan API. */
            expiration_date: unknown;
            /** The Jushuitan warehouse-company identifier. */
            wms_co_id: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** The response message value returned by the Jushuitan API. */
        msg?: unknown;
        /** The request identifier assigned by Jushuitan. */
        request_id?: unknown;
        [key: string]: unknown;
      };
    };
    /** List payable documents from the Jushuitan finance module. */
    "jushuitan.list_payables": {
      input: {
        /**
         * The one-based page number.
         * @minimum 1
         */
        page_index: number;
        /**
         * The number of records requested or returned in one page.
         * @minimum 1
         */
        page_size: number;
        /** The beginning of the document-time range. Provide this range or the complete modification-time range. */
        start_time?: string;
        /** The end of the document-time range. Provide this range or the complete modification-time range. */
        end_time?: string;
        /** The payable type: 1 for payables or 2 for opening payables. */
        type: number;
        /** The beginning of the last-modified range. Provide this range or the complete document-time range. */
        modified_begin?: string;
        /** The end of the last-modified range. Provide this range or the complete document-time range. */
        modifie_end?: string;
      };
      output: {
        /** The one-based page number. */
        page_index?: number;
        /** The number of records requested or returned in one page. */
        page_size?: number;
        /** Whether another page is available after this page. */
        has_next?: boolean;
        /** The count value returned by the Jushuitan API. */
        count?: number;
        /** The pages value returned by the Jushuitan API. */
        pages?: number;
        /** The business records returned in this response. */
        datas?: Array<{
          /** The pinv id value returned by the Jushuitan API. */
          pinv_id: number;
          /** The Jushuitan ERP company identifier. */
          co_id: number;
          /** The inv type value returned by the Jushuitan API. */
          inv_type: string;
          /** The type value returned by the Jushuitan API. */
          type: string;
          /** The status value returned by the Jushuitan API. */
          status: string;
          /** The paid amount value returned by the Jushuitan API. */
          paid_amount: number;
          /** The seller id value returned by the Jushuitan API. */
          seller_id: number;
          /** The created value returned by the Jushuitan API. */
          created: string;
          /** The creator value returned by the Jushuitan API. */
          creator: number;
          /** The modified value returned by the Jushuitan API. */
          modified: string;
          /** The modifier value returned by the Jushuitan API. */
          modifier: number;
          /** The creator name value returned by the Jushuitan API. */
          creator_name: string;
          /** The modifier name value returned by the Jushuitan API. */
          modifier_name: string;
          /** The src pinv id value returned by the Jushuitan API. */
          src_pinv_id: number;
          /** The tax rate value returned by the Jushuitan API. */
          tax_rate: number;
          /** The payable type value returned by the Jushuitan API. */
          payable_type: string;
          /** The payable date value returned by the Jushuitan API. */
          payable_date: string;
          /** The pinv date value returned by the Jushuitan API. */
          pinv_date: string;
          /** The pinv code value returned by the Jushuitan API. */
          pinv_code: string;
          /** The pinv number value returned by the Jushuitan API. */
          pinv_number: string;
          /** The other amount value returned by the Jushuitan API. */
          other_amount: number;
          /** The inv amount value returned by the Jushuitan API. */
          inv_amount: number;
          /** The remark value returned by the Jushuitan API. */
          remark: string;
          /** The payment status value returned by the Jushuitan API. */
          payment_status: string;
          /** The total invoice amount value returned by the Jushuitan API. */
          total_invoice_amount: number;
          /** The is adjust cost value returned by the Jushuitan API. */
          is_adjust_cost: string;
          /** The Jushuitan inbound or outbound document identifier. */
          io_id: number;
          /** The ts value returned by the Jushuitan API. */
          ts: number;
          /** The supplier name value returned by the Jushuitan API. */
          supplier_name: string;
          /** The fee total for the new payable model. This value is not included in the payable total. */
          fee_amount: number;
          /** The items value returned by the Jushuitan API. */
          items: Array<{
            /** The ipinv id value returned by the Jushuitan API. */
            ipinv_id: number;
            /** The pinv id value returned by the Jushuitan API. */
            pinv_id: number;
            /** The Jushuitan ERP company identifier. */
            co_id: number;
            /** The internal Jushuitan order identifier. */
            o_id: number;
            /** The Jushuitan inbound or outbound document identifier. */
            io_id: number;
            /** The ioi id value returned by the Jushuitan API. */
            ioi_id: number;
            /** The merchant SKU identifier in Jushuitan. */
            sku_id: string;
            /** The qty value returned by the Jushuitan API. */
            qty: number;
            /** The amount value returned by the Jushuitan API. */
            amount: number;
            /** The inv qty value returned by the Jushuitan API. */
            inv_qty: number;
            /** The inv amount value returned by the Jushuitan API. */
            inv_amount: number;
            /** The adjust amount value returned by the Jushuitan API. */
            adjust_amount: number;
            [key: string]: unknown;
          }>;
          /** The free items value returned by the Jushuitan API. */
          free_items: Array<{
            /** The pay id value returned by the Jushuitan API. */
            pay_id: number;
            /** The pinv id value returned by the Jushuitan API. */
            pinv_id: number;
            /** The amount value returned by the Jushuitan API. */
            amount: number;
            /** The remark value returned by the Jushuitan API. */
            remark: string;
            /** The seller value returned by the Jushuitan API. */
            seller: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List payment documents from the Jushuitan finance module. */
    "jushuitan.list_payments": {
      input: {
        /**
         * The one-based page number.
         * @minimum 1
         */
        page_index: number;
        /**
         * The number of records requested or returned in one page.
         * @minimum 1
         */
        page_size: number;
        /** The beginning of the document-time range. Provide this range or the complete modification-time range. */
        start_time?: string;
        /** The end of the document-time range. Provide this range or the complete modification-time range. */
        end_time?: string;
        /** The beginning of the last-modified range. Provide this range or the complete document-time range. */
        modified_begin?: string;
        /** The end of the last-modified range. Provide this range or the complete document-time range. */
        modified_end?: string;
      };
      output: {
        /** The one-based page number. */
        page_index?: number;
        /** The number of records requested or returned in one page. */
        page_size?: number;
        /** Whether another page is available after this page. */
        has_next?: boolean;
        /** The count value returned by the Jushuitan API. */
        count?: number;
        /** The pages value returned by the Jushuitan API. */
        pages?: number;
        /** The business records returned in this response. */
        datas?: Array<{
          /** The pay id value returned by the Jushuitan API. */
          pay_id?: number;
          /** The Jushuitan ERP company identifier. */
          co_id?: number;
          /** The pay date value returned by the Jushuitan API. */
          pay_date?: string;
          /** The status value returned by the Jushuitan API. */
          status?: string;
          /** The pay account number value returned by the Jushuitan API. */
          pay_account_number?: string;
          /** The pay pro bank value returned by the Jushuitan API. */
          pay_pro_bank?: string;
          /** The seller id value returned by the Jushuitan API. */
          seller_id?: number;
          /** The seller value returned by the Jushuitan API. */
          seller?: string;
          /** The pay amount value returned by the Jushuitan API. */
          pay_amount?: unknown;
          /** The amount value returned by the Jushuitan API. */
          amount?: number;
          /** The less amount value returned by the Jushuitan API. */
          less_amount?: number;
          /** The payway value returned by the Jushuitan API. */
          payway?: string;
          /** The remark value returned by the Jushuitan API. */
          remark?: string;
          /** The created value returned by the Jushuitan API. */
          created?: string;
          /** The creator value returned by the Jushuitan API. */
          creator?: number;
          /** The modified value returned by the Jushuitan API. */
          modified?: string;
          /** The modifier value returned by the Jushuitan API. */
          modifier?: number;
          /** The creator name value returned by the Jushuitan API. */
          creator_name?: string;
          /** The modifier name value returned by the Jushuitan API. */
          modifier_name?: string;
          /** The purchase-order identifier, returned only for prepayment and prepayment-refund payment documents. */
          po_id?: number;
          /** The account value returned by the Jushuitan API. */
          account?: string;
          /** The ispaid value returned by the Jushuitan API. */
          ispaid?: string;
          /** The paid date value returned by the Jushuitan API. */
          paid_date?: string;
          /** The labs value returned by the Jushuitan API. */
          labs?: string;
          /** The seller type value returned by the Jushuitan API. */
          seller_type?: string;
          /** The pay account name value returned by the Jushuitan API. */
          pay_account_name?: string;
          /** The ts value returned by the Jushuitan API. */
          ts?: number;
          /** The paid status value returned by the Jushuitan API. */
          paid_status?: string;
          /** The items value returned by the Jushuitan API. */
          items?: Array<{
            /** The autoid value returned by the Jushuitan API. */
            autoid?: number;
            /** The pay id value returned by the Jushuitan API. */
            pay_id?: number;
            /** The Jushuitan ERP company identifier. */
            co_id?: number;
            /** The Jushuitan inbound or outbound document identifier. */
            io_id?: number;
            /** The amount value returned by the Jushuitan API. */
            amount?: number;
            /** The type value returned by the Jushuitan API. */
            type?: string;
            /** The purchase-order identifier, returned only for prepayment-offset and prepayment-refund items. */
            po_id?: number;
            /** The po ids value returned by the Jushuitan API. */
            po_ids?: string;
            [key: string]: unknown;
          }>;
          /** The paid items value returned by the Jushuitan API. */
          paid_items?: Array<{
            /** The paid id value returned by the Jushuitan API. */
            paid_id?: number;
            /** The pay id value returned by the Jushuitan API. */
            pay_id?: number;
            /** The type value returned by the Jushuitan API. */
            type?: string;
            /** The paid account value returned by the Jushuitan API. */
            paid_account?: string;
            /** The paid acount name value returned by the Jushuitan API. */
            paid_acount_name?: string;
            /** The paid serial number value returned by the Jushuitan API. */
            paid_serial_number?: string;
            /** The paid date value returned by the Jushuitan API. */
            paid_date?: string;
            /** The paid amount value returned by the Jushuitan API. */
            paid_amount?: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List picking waves matching the requested filters. */
    "jushuitan.list_picking_waves": {
      input: {
        /** The wave ids value accepted by the Jushuitan API. */
        wave_ids?: Array<number>;
        /** The beginning of the creation-time filter. The range cannot exceed three days. */
        create_time_begin?: string;
        /** The end of the creation-time filter. The range cannot exceed three days. */
        create_time_end?: string;
        /** The inclusive beginning of the modification-time filter. The range cannot exceed three days. */
        modified_begin?: string;
        /** The end of the modification-time filter. The range cannot exceed three days. */
        modified_end?: string;
        /** Wave statuses: None=0, WaitPick=1, WaitSeed=2, WaitCheck=3, WaitFinish=4, Break=5, WaitPurchase=6, Picking=11, Seeding=22, Checking=33, Finished=44, or WaitToBin=55. When only wave status or type is supplied, Jushuitan limits the query to the latest three days. */
        wave_status?: Array<string>;
        /** Wave types: 1 single-item, 2 multi-item, 6 large order, 7 full carton, 8 replenishment, 9 grouped, 10 secondary sorting, or 15 A+N. When only wave type or status is supplied, Jushuitan limits the query to the latest three days. */
        wave_types?: Array<number>;
        /**
         * Seeding-cart identifiers bound to waves, up to 1,000 values.
         * @maxItems 1000
         */
        wave_carry_ids?: Array<string>;
        /** Whether to restrict results to the main warehouse. Defaults to true; pass false to query branch warehouses. */
        check_wms_coid?: boolean;
      };
      output: {
        /** The data value returned by the Jushuitan API. */
        data?: Array<{
          /** The wave id value returned by the Jushuitan API. */
          wave_id?: number;
          /** The carry ids value returned by the Jushuitan API. */
          carry_ids?: Array<string>;
          /** The type value returned by the Jushuitan API. */
          type?: string;
          /** The Jushuitan ERP company identifier. */
          co_id?: number;
          /** The picker value returned by the Jushuitan API. */
          picker?: string;
          /** The picked qty value returned by the Jushuitan API. */
          picked_qty?: number;
          /** The qty value returned by the Jushuitan API. */
          qty?: number;
          /** The picker name value returned by the Jushuitan API. */
          picker_name?: string;
          /** The order count value returned by the Jushuitan API. */
          order_count?: number;
          /** The sku count value returned by the Jushuitan API. */
          sku_count?: number;
          /** The sku qty value returned by the Jushuitan API. */
          sku_qty?: number;
          /** The status value returned by the Jushuitan API. */
          status?: string;
          /** The created value returned by the Jushuitan API. */
          created?: string;
          /** The creator value returned by the Jushuitan API. */
          creator?: string;
          /** The modified value returned by the Jushuitan API. */
          modified?: string;
          /** The seed begin value returned by the Jushuitan API. */
          seed_begin?: string;
          /** The seeder id value returned by the Jushuitan API. */
          seeder_id?: string;
          /** The seeder name value returned by the Jushuitan API. */
          seeder_name?: string;
          /** The remark value returned by the Jushuitan API. */
          remark?: string;
          /** The hybrid pick value returned by the Jushuitan API. */
          hybrid_pick?: string;
          /** The Jushuitan warehouse-company identifier. */
          wms_co_id?: number;
          /** The filter value returned by the Jushuitan API. */
          filter?: string;
          /** The is print value returned by the Jushuitan API. */
          is_print?: boolean;
          /** The wave bin value returned by the Jushuitan API. */
          wave_bin?: string;
          /** The po id value returned by the Jushuitan API. */
          po_id?: number;
          /** The split pick value returned by the Jushuitan API. */
          split_pick?: string;
          /** The is print express value returned by the Jushuitan API. */
          is_print_express?: boolean;
          /** The paper pick value returned by the Jushuitan API. */
          paper_pick?: string;
          /** The pick seed value returned by the Jushuitan API. */
          pick_seed?: string;
          /** The is print order value returned by the Jushuitan API. */
          is_print_order?: boolean;
          /** The warehouse identifier: 1 for main, 2 for sales returns, 3 for purchasing, or 4 for defective goods. */
          wh_id?: number;
          /** The priorty value returned by the Jushuitan API. */
          priorty?: number;
          /** The pick invert value returned by the Jushuitan API. */
          pick_invert?: boolean;
          /** The is print ordertags value returned by the Jushuitan API. */
          is_print_ordertags?: boolean;
          /** The wave flag value returned by the Jushuitan API. */
          wave_flag?: Record<string, unknown>;
          /** The wave extend type value returned by the Jushuitan API. */
          wave_extend_type?: string;
          /** The items value returned by the Jushuitan API. */
          items?: Array<{
            /** The wave item id value returned by the Jushuitan API. */
            wave_item_id?: number;
            /** The wave id value returned by the Jushuitan API. */
            wave_id?: number;
            /** The bin value returned by the Jushuitan API. */
            bin?: string;
            /** The merchant SKU identifier in Jushuitan. */
            sku_id?: string;
            /** The name value returned by the Jushuitan API. */
            name?: string;
            /** The properties value value returned by the Jushuitan API. */
            properties_value?: string;
            /** The picked qty value returned by the Jushuitan API. */
            picked_qty?: number;
            /** The qty value returned by the Jushuitan API. */
            qty?: number;
            /** The bin id value returned by the Jushuitan API. */
            bin_id?: number;
            /** The skip value returned by the Jushuitan API. */
            skip?: boolean;
            /** The checked qty value returned by the Jushuitan API. */
            checked_qty?: number;
            /** The disabled value returned by the Jushuitan API. */
            disabled?: boolean;
            /** The other bin value returned by the Jushuitan API. */
            other_bin?: string;
            /** The i id value returned by the Jushuitan API. */
            i_id?: string;
            /** The sub pack qty value returned by the Jushuitan API. */
            sub_pack_qty?: number;
            /** The skip pick pack value returned by the Jushuitan API. */
            skip_pick_pack?: boolean;
            /** The skip pick bin value returned by the Jushuitan API. */
            skip_pick_bin?: boolean;
            /** The combine sku id value returned by the Jushuitan API. */
            combine_sku_id?: string;
            /** The batch id value returned by the Jushuitan API. */
            batch_id?: string;
            /** The produced date value returned by the Jushuitan API. */
            produced_date?: string;
            /** The supplier id value returned by the Jushuitan API. */
            supplier_id?: number;
            /** The wave item type value returned by the Jushuitan API. */
            wave_item_type?: string;
            /** The relate id value returned by the Jushuitan API. */
            relate_id?: number;
            /** The expiration date value returned by the Jushuitan API. */
            expiration_date?: string;
            /** The wave co id value returned by the Jushuitan API. */
            wave_co_id?: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The request identifier assigned by Jushuitan. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** List product bills of materials and their component relationships. */
    "jushuitan.list_product_boms": {
      input: {
        /** The beginning of the modification-time range. The interval cannot exceed 30 days. */
        modified_start?: string;
        /** The end of the modification-time range. The interval cannot exceed 30 days. */
        modified_end?: string;
        /**
         * The merchant SKU identifiers. Either this field or a modification-time range must be provided.
         * @maxItems 50
         */
        sku_ids?: Array<string>;
        /** The page value accepted by the Jushuitan API. */
        page: {
          /**
           * The one-based current page number.
           * @minimum 1
           */
          current_page: number;
          /**
           * The number of records requested or returned in one page.
           * @minimum 1
           * @maximum 2000
           */
          page_size: number;
        };
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The list value returned by the Jushuitan API. */
          list: {
            /** The merchant SKU identifier in Jushuitan. */
            sku_id: string;
            /** The i id value returned by the Jushuitan API. */
            i_id: string;
            /** The boms value returned by the Jushuitan API. */
            boms: Array<{
              /** The merchant SKU identifier in Jushuitan. */
              sku_id: number;
              /** The outer sku id value returned by the Jushuitan API. */
              outer_sku_id: string;
              /** The name value returned by the Jushuitan API. */
              name: string;
              /** The map sku id value returned by the Jushuitan API. */
              map_sku_id: number;
              /** The map outer sku id value returned by the Jushuitan API. */
              map_outer_sku_id: string;
              /** The map name value returned by the Jushuitan API. */
              map_name: string;
              /** The properties value value returned by the Jushuitan API. */
              properties_value: string | null;
              /** The map properties value value returned by the Jushuitan API. */
              map_properties_value: string | null;
              /** The pic value returned by the Jushuitan API. */
              pic: unknown;
              /** The rm qty value returned by the Jushuitan API. */
              rm_qty: number;
              [key: string]: unknown;
            }>;
            /** The modifier name value returned by the Jushuitan API. */
            modifier_name: string;
            /** The modified value returned by the Jushuitan API. */
            modified: string;
            /** The bom minors value returned by the Jushuitan API. */
            bom_minors: Array<{
              /** The merchant SKU identifier in Jushuitan. */
              sku_id: number;
              /** The outer sku id value returned by the Jushuitan API. */
              outer_sku_id: string;
              /** The name value returned by the Jushuitan API. */
              name: string;
              /** The properties value value returned by the Jushuitan API. */
              properties_value: string | null;
              /** The qty value returned by the Jushuitan API. */
              qty: number;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          };
          /** The page value returned by the Jushuitan API. */
          page: {
            /** The one-based current page number. */
            current_page: number;
            /** The number of records per page. */
            page_size: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** The response message value returned by the Jushuitan API. */
        msg?: unknown;
        /** The request identifier assigned by Jushuitan. */
        request_id?: unknown;
        [key: string]: unknown;
      };
    };
    /** List product categories configured for the merchant. */
    "jushuitan.list_product_categories": {
      input: {
        /** The inclusive beginning of the modification-time filter. */
        modified_begin?: string;
        /** The end of the modification-time filter. */
        modified_end?: string;
        /**
         * The one-based page number.
         * @minimum 1
         */
        page_index?: number;
        /**
         * The number of records per page.
         * @minimum 1
         */
        page_size?: number;
        /** The c ids value accepted by the Jushuitan API. */
        c_ids?: Array<string>;
        /** The parent c ids value accepted by the Jushuitan API. */
        parent_c_ids?: Array<string>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The number of records per page. */
          page_size?: number;
          /** The one-based page number. */
          page_index?: number;
          /** The total number of matching records. */
          data_count?: number;
          /** The total number of available pages. */
          page_count?: number;
          /** Whether another page is available after this page. */
          has_next?: boolean;
          /** The business records returned in this response. */
          datas?: Array<{
            /** The c id value returned by the Jushuitan API. */
            c_id?: number;
            /** The parent c id value returned by the Jushuitan API. */
            parent_c_id?: number;
            /** The modified value returned by the Jushuitan API. */
            modified?: string;
            /** The name value returned by the Jushuitan API. */
            name?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List customs declaration information for products. */
    "jushuitan.list_product_customs_declarations": {
      input: {
        /**
         * Up to 20 merchant SKU identifiers.
         * @maxItems 20
         */
        sku_ids?: Array<string>;
        /** The beginning of the modification-time range. */
        modified_begin?: string;
        /** The end of the modification-time range. The range cannot exceed seven days. */
        modified_end?: string;
        /**
         * The number of records per page. Defaults to 20 and cannot exceed 50.
         * @minimum 1
         * @maximum 50
         */
        page_size?: number;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        page_index?: number;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The one-based page number. Defaults to 1. */
          page_index: number;
          /** The number of records per page. Defaults to 20. */
          page_size: number;
          /** The total number of matching records. */
          data_count: number;
          /** The total number of available pages. */
          page_count: number;
          /** Whether another page is available after this page. */
          has_next: boolean;
          /** The data value returned by the Jushuitan API. */
          data: Array<{
            /** The i id value returned by the Jushuitan API. */
            i_id: string;
            /** The merchant SKU identifier in Jushuitan. */
            sku_id: string;
            /** The declare name z n value returned by the Jushuitan API. */
            declare_name_z_n: string;
            /** The declare name e n value returned by the Jushuitan API. */
            declare_name_e_n: string;
            /** The declare amount value returned by the Jushuitan API. */
            declare_amount: number;
            /** Whether the amount uses the product's actual sale price; false means it uses declareAmount. */
            is_get_price: boolean;
            /** The declare weight value returned by the Jushuitan API. */
            declare_weight: number;
            /** Whether the weight uses the product's actual weight; false means it uses declareWeight. */
            is_get_weight: boolean;
            /** The hs code value returned by the Jushuitan API. */
            hs_code: string;
            /** The post tax num value returned by the Jushuitan API. */
            post_tax_num: string;
            /** The unit1 value returned by the Jushuitan API. */
            unit1: string;
            /** The unit2 value returned by the Jushuitan API. */
            unit2: string;
            /** The is liquid value returned by the Jushuitan API. */
            is_liquid: boolean;
            /** The is battery value returned by the Jushuitan API. */
            is_battery: boolean;
            /** The is paste value returned by the Jushuitan API. */
            is_paste: boolean;
            /** The is powder value returned by the Jushuitan API. */
            is_powder: boolean;
            /** The is magnetic value returned by the Jushuitan API. */
            is_magnetic: boolean;
            /** The is fluid value returned by the Jushuitan API. */
            is_fluid: boolean;
            /** The is special cargo value returned by the Jushuitan API. */
            is_special_cargo: boolean;
            /** The other attr value returned by the Jushuitan API. */
            other_attr: {
              /** The declarematerial value returned by the Jushuitan API. */
              declarematerial: string;
              /** The declareuse value returned by the Jushuitan API. */
              declareuse: string;
              /** The origin country value returned by the Jushuitan API. */
              origin_country: string;
              /** The attrinfos value returned by the Jushuitan API. */
              attrinfos: Array<{
                /** The name value returned by the Jushuitan API. */
                name: string;
                /** The product-attribute code. */
                code: string;
                /** The childrens value returned by the Jushuitan API. */
                childrens: Array<Record<string, unknown>>;
                /** The ischecked value returned by the Jushuitan API. */
                ischecked: string;
                [key: string]: unknown;
              }>;
              [key: string]: unknown;
            };
            /** The modified value returned by the Jushuitan API. */
            modified: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** The response message value returned by the Jushuitan API. */
        msg?: unknown;
        /** The request identifier assigned by Jushuitan. */
        request_id?: unknown;
        [key: string]: unknown;
      };
    };
    /** List paginated historical cost-price records for products. */
    "jushuitan.list_product_historical_costs": {
      input: {
        /** The sku ids value accepted by the Jushuitan API. */
        sku_ids: Array<string>;
        /** The wms co ids value accepted by the Jushuitan API. */
        wms_co_ids?: Array<number>;
        /** The beginning of the modification-time filter. */
        modified_start: string;
        /** The end of the modification-time filter. */
        modified_end: string;
        /** The page value accepted by the Jushuitan API. */
        page: {
          /**
           * The one-based current page number.
           * @minimum 1
           * @maximum 100
           */
          current_page: number;
          /**
           * The number of records requested or returned in one page.
           * @minimum 1
           */
          page_size: number;
        };
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The list value returned by the Jushuitan API. */
          list?: Array<{
            /** The merchant SKU identifier in Jushuitan. */
            sku_id?: string;
            /** The cost price value returned by the Jushuitan API. */
            cost_price?: number;
            /** The end date value returned by the Jushuitan API. */
            end_date?: string;
            /** The warehouse-company identifier. Without branch-level historical costs, 0 or the current company identifier denotes company-level costs; with that feature enabled, a nonzero value denotes a branch company. */
            wms_co_id?: number;
            /** The modified value returned by the Jushuitan API. */
            modified?: string;
            /** The created value returned by the Jushuitan API. */
            created?: string;
            [key: string]: unknown;
          }>;
          /** The page value returned by the Jushuitan API. */
          page?: {
            /** The one-based current page number. */
            current_page?: number;
            /** The number of records requested or returned in one page. */
            page_size?: number;
            /** The count value returned by the Jushuitan API. */
            count?: number;
            /** The pages value returned by the Jushuitan API. */
            pages?: number;
            /** The index value returned by the Jushuitan API. */
            index?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** The response message value returned by the Jushuitan API. */
        msg?: unknown;
        /** The request identifier assigned by Jushuitan. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** List ordinary products grouped and filtered by product model. */
    "jushuitan.list_product_models": {
      input: {
        /** The inclusive beginning of the modification-time filter. Provide it together with modified_end; the interval cannot exceed seven days, and either a time range or i_ids is required. */
        modified_begin?: string;
        /** The end of the modification-time filter. Provide it together with modified_begin; the interval cannot exceed seven days, and either a time range or i_ids is required. */
        modified_end?: string;
        /** The only item value accepted by the Jushuitan API. */
        only_item?: boolean;
        /**
         * The product model identifiers. Either this field or a modification-time range must be provided.
         * @maxItems 20
         */
        i_ids?: Array<string>;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        page_index?: number;
        /**
         * The number of records per page. Defaults to 30 and cannot exceed 50.
         * @minimum 1
         * @maximum 50
         */
        page_size?: number;
        /** The item flds value accepted by the Jushuitan API. */
        item_flds?: Array<string>;
        /** The itemsku flds value accepted by the Jushuitan API. */
        itemsku_flds?: Array<string>;
        /** The date field used for filtering: created or modified. */
        date_field: string;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The number of records per page. */
          page_size?: number;
          /** The one-based page number. */
          page_index?: number;
          /** The total number of matching records. */
          data_count?: number;
          /** The total number of available pages. */
          page_count?: number;
          /** Whether another page is available after this page. */
          has_next?: boolean;
          /** The business records returned in this response. */
          datas?: Array<{
            /** The i id value returned by the Jushuitan API. */
            i_id?: string;
            /** The Jushuitan ERP company identifier. */
            co_id?: number;
            /** The name value returned by the Jushuitan API. */
            name?: string;
            /** The c id value returned by the Jushuitan API. */
            c_id?: number;
            /** The c name value returned by the Jushuitan API. */
            c_name?: string;
            /** The s price value returned by the Jushuitan API. */
            s_price?: number;
            /** The c price value returned by the Jushuitan API. */
            c_price?: number;
            /** The remark value returned by the Jushuitan API. */
            remark?: string;
            /** The pic value returned by the Jushuitan API. */
            pic?: string;
            /** The created value returned by the Jushuitan API. */
            created?: string;
            /** The modified value returned by the Jushuitan API. */
            modified?: string;
            /** The brand value returned by the Jushuitan API. */
            brand?: string;
            /** The weight value returned by the Jushuitan API. */
            weight?: number;
            /** The market price value returned by the Jushuitan API. */
            market_price?: string;
            /** The vc name value returned by the Jushuitan API. */
            vc_name?: string;
            /** The item type value returned by the Jushuitan API. */
            item_type?: string;
            /** The l value returned by the Jushuitan API. */
            l?: number;
            /** The w value returned by the Jushuitan API. */
            w?: number;
            /** The h value returned by the Jushuitan API. */
            h?: number;
            /** The shelf life value returned by the Jushuitan API. */
            shelf_life?: number;
            /** The skus value returned by the Jushuitan API. */
            skus?: Array<{
              /** The Jushuitan ERP company identifier. */
              co_id?: number;
              /** The merchant SKU identifier in Jushuitan. */
              sku_id?: string;
              /** The i id value returned by the Jushuitan API. */
              i_id?: string;
              /** The name value returned by the Jushuitan API. */
              name?: string;
              /** The c id value returned by the Jushuitan API. */
              c_id?: number;
              /** The brand value returned by the Jushuitan API. */
              brand?: string;
              /** The market price value returned by the Jushuitan API. */
              market_price?: number;
              /** The sale price value returned by the Jushuitan API. */
              sale_price?: number;
              /** The cost price value returned by the Jushuitan API. */
              cost_price?: number;
              /** The product status: -1 for disabled, 0 for standby, or 1 for enabled. */
              enabled?: number;
              /** The category value returned by the Jushuitan API. */
              category?: string;
              /** The creator value returned by the Jushuitan API. */
              creator?: string;
              /** The modifier value returned by the Jushuitan API. */
              modifier?: string;
              /** The creator name value returned by the Jushuitan API. */
              creator_name?: string;
              /** The modifier name value returned by the Jushuitan API. */
              modifier_name?: string;
              /** The properties value value returned by the Jushuitan API. */
              properties_value?: string;
              /** The sku code value returned by the Jushuitan API. */
              sku_code?: string;
              /** The purchase price value returned by the Jushuitan API. */
              purchase_price?: number;
              /** The pic value returned by the Jushuitan API. */
              pic?: string;
              /** The pic big value returned by the Jushuitan API. */
              pic_big?: string;
              /** The weight value returned by the Jushuitan API. */
              weight?: number;
              /** The short name value returned by the Jushuitan API. */
              short_name?: string;
              /** The item type value returned by the Jushuitan API. */
              item_type?: string;
              /** The supplier id value returned by the Jushuitan API. */
              supplier_id?: number;
              /** The supplier name value returned by the Jushuitan API. */
              supplier_name?: string;
              /** The supplier sku id value returned by the Jushuitan API. */
              supplier_sku_id?: string;
              /** The supplier i id value returned by the Jushuitan API. */
              supplier_i_id?: string;
              /** The remark value returned by the Jushuitan API. */
              remark?: string;
              /** The vc name value returned by the Jushuitan API. */
              vc_name?: string;
              /** The l value returned by the Jushuitan API. */
              l?: number;
              /** The w value returned by the Jushuitan API. */
              w?: number;
              /** The h value returned by the Jushuitan API. */
              h?: number;
              /** The other price 1 value returned by the Jushuitan API. */
              other_price_1?: number;
              /** The other price 2 value returned by the Jushuitan API. */
              other_price_2?: number;
              /** The other price 3 value returned by the Jushuitan API. */
              other_price_3?: number;
              /** The other price 4 value returned by the Jushuitan API. */
              other_price_4?: number;
              /** The other price 5 value returned by the Jushuitan API. */
              other_price_5?: number;
              /** The labels value returned by the Jushuitan API. */
              labels?: string;
              /** The other 1 value returned by the Jushuitan API. */
              other_1?: string;
              /** The other 2 value returned by the Jushuitan API. */
              other_2?: string;
              /** The other 3 value returned by the Jushuitan API. */
              other_3?: string;
              /** The other 4 value returned by the Jushuitan API. */
              other_4?: string;
              /** The other 5 value returned by the Jushuitan API. */
              other_5?: string;
              /** The unit value returned by the Jushuitan API. */
              unit?: string;
              /** The shelf life value returned by the Jushuitan API. */
              shelf_life?: string;
              /** The productionbatch format value returned by the Jushuitan API. */
              productionbatch_format?: string;
              /** The production licence value returned by the Jushuitan API. */
              production_licence?: string;
              /** The drp co id to value returned by the Jushuitan API. */
              drp_co_id_to?: number;
              [key: string]: unknown;
            }>;
            /** The ups value returned by the Jushuitan API. */
            ups?: Array<{
              /** The p id value returned by the Jushuitan API. */
              p_id?: number;
              /** The p name value returned by the Jushuitan API. */
              p_name?: string;
              /** The pv id value returned by the Jushuitan API. */
              pv_id?: number;
              /** The pv value value returned by the Jushuitan API. */
              pv_value?: string;
              [key: string]: unknown;
            }>;
            /** The productionbatch format value returned by the Jushuitan API. */
            productionbatch_format?: string;
            /** The production licence value returned by the Jushuitan API. */
            production_licence?: string;
            /** The unit value returned by the Jushuitan API. */
            unit?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List product operation history used to recover product data. */
    "jushuitan.list_product_restore_history": {
      input: {
        /**
         * The one-based current page number.
         * @minimum 1
         */
        current_page: number;
        /**
         * The number of records requested or returned in one page.
         * @minimum 1
         * @maximum 2000
         */
        page_size: number;
        /** The start time value accepted by the Jushuitan API. */
        start_time: string;
        /** The end time value accepted by the Jushuitan API. */
        end_time: string;
        /** The creatorname value accepted by the Jushuitan API. */
        creatorname?: string;
        /** The skuid value accepted by the Jushuitan API. */
        skuid?: string;
        /** The iid value accepted by the Jushuitan API. */
        iid?: string;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The page value returned by the Jushuitan API. */
          page?: {
            /** The one-based current page number. */
            current_page?: number;
            /** The number of records requested or returned in one page. */
            page_size?: number;
            /** The count value returned by the Jushuitan API. */
            count?: number;
            /** The pages value returned by the Jushuitan API. */
            pages?: number;
            /** The index value returned by the Jushuitan API. */
            index?: number;
            [key: string]: unknown;
          };
          /** The list value returned by the Jushuitan API. */
          list?: Array<{
            /** The autoid value returned by the Jushuitan API. */
            autoid?: number;
            /** The operation type value returned by the Jushuitan API. */
            operation_type?: string;
            /** The operation description value returned by the Jushuitan API. */
            operation_description?: string;
            /** The created value returned by the Jushuitan API. */
            created?: string;
            /** The creator name value returned by the Jushuitan API. */
            creator_name?: string;
            /** The merchant SKU identifier in Jushuitan. */
            sku_id?: string;
            /** The i id value returned by the Jushuitan API. */
            i_id?: string;
            /** The name value returned by the Jushuitan API. */
            name?: string;
            /** The properties value value returned by the Jushuitan API. */
            properties_value?: string;
            /** The sku type value returned by the Jushuitan API. */
            sku_type?: string;
            /** The recovery count value returned by the Jushuitan API. */
            recovery_count?: unknown;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** The response message value returned by the Jushuitan API. */
        msg?: unknown;
        /** The request identifier assigned by Jushuitan. */
        request_id?: unknown;
        [key: string]: unknown;
      };
    };
    /** List supplier relationships configured for products. */
    "jushuitan.list_product_suppliers": {
      input: {
        /** The skuid value accepted by the Jushuitan API. */
        skuid?: string;
        /** The iid value accepted by the Jushuitan API. */
        iid?: string;
        /** The supplier id value accepted by the Jushuitan API. */
        supplier_id?: number;
        /** The begin value accepted by the Jushuitan API. */
        begin?: string;
        /** The end value accepted by the Jushuitan API. */
        end?: string;
        /**
         * The one-based current page number.
         * @minimum 1
         */
        current_page: number;
        /**
         * The number of records requested or returned in one page.
         * @minimum 1
         */
        page_size: number;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: string;
        /** The response message returned by Jushuitan. */
        msg: string;
        /** The data value returned by the Jushuitan API. */
        data: {
          /** The page value returned by the Jushuitan API. */
          page: {
            /** The pages value returned by the Jushuitan API. */
            pages: number;
            /** The count value returned by the Jushuitan API. */
            count: number;
            [key: string]: unknown;
          };
          /** The list value returned by the Jushuitan API. */
          list: Array<{
            /** The i id value returned by the Jushuitan API. */
            i_id: string;
            /** The supplier i id value returned by the Jushuitan API. */
            supplier_i_id: string;
            /** The created value returned by the Jushuitan API. */
            created: string;
            /** The purchase url value returned by the Jushuitan API. */
            purchase_url: string;
            /** The merchant SKU identifier in Jushuitan. */
            sku_id: string;
            /** The remark value returned by the Jushuitan API. */
            remark: string;
            /** The pack qty value returned by the Jushuitan API. */
            pack_qty: string;
            /** The supplier sku id value returned by the Jushuitan API. */
            supplier_sku_id: string;
            /** The delivery day value returned by the Jushuitan API. */
            delivery_day: string;
            /** The supplier name value returned by the Jushuitan API. */
            supplier_name: string;
            /** The supplier code value returned by the Jushuitan API. */
            supplier_code: string;
            /** The supplier id value returned by the Jushuitan API. */
            supplier_id: string;
            /** The cost price value returned by the Jushuitan API. */
            cost_price: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List available profit-statement cost and revenue items. */
    "jushuitan.list_profit_statement_items": {
      input: Record<string, never>;
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The trance id value returned by the Jushuitan API. */
          trance_id?: string;
          /** Whether another page is available after this page. */
          has_next?: boolean;
          /** The business records returned in this response. */
          datas?: Array<{
            /** The csg id value returned by the Jushuitan API. */
            csg_id?: string;
            /** The actual shop value returned by the Jushuitan API. */
            actual_shop?: string;
            /** The csg code value returned by the Jushuitan API. */
            csg_code?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List scheduled purchase receiving bookings. */
    "jushuitan.list_purchase_bookings": {
      input: {
        /** The start of the modification-time filter. Supply it with end_time; the range cannot exceed seven days. */
        start_time?: string;
        /** The end of the modification-time filter. Supply it with start_time; the range cannot exceed seven days. */
        end_time?: string;
        /**
         * The one-based page number.
         * @minimum 1
         */
        page_index: number;
        /**
         * The number of records per page, up to 100.
         * @minimum 1
         * @maximum 100
         */
        page_size: number;
        /**
         * Booking identifiers, up to 20 and limited to documents from the past year. This selector and the time range cannot both be empty.
         * @maxItems 20
         */
        bio_ids?: Array<number>;
        /**
         * Purchase-order identifiers, up to 20 and limited to documents from the past year. This selector and the time range cannot both be empty.
         * @maxItems 20
         */
        po_ids?: Array<number>;
        /**
         * External identifiers, up to 20 and limited to documents from the past year. This selector and the time range cannot both be empty.
         * @maxItems 20
         */
        external_ids?: Array<string>;
      };
      output: {
        /** The number of records per page. */
        page_size?: number;
        /** The one-based page number. */
        page_index?: number;
        /** Whether another page is available after this page. */
        has_next?: boolean;
        /** The total number of available pages. */
        page_count?: number;
        /** The total number of matching records. */
        data_count?: number;
        /** The business records returned in this response. */
        datas?: Array<{
          /** The po id value returned by the Jushuitan API. */
          po_id?: number;
          /** The merge po id value returned by the Jushuitan API. */
          merge_po_id?: string;
          /** The seller id value returned by the Jushuitan API. */
          seller_id?: number;
          /** The seller value returned by the Jushuitan API. */
          seller?: string;
          /** The external id value returned by the Jushuitan API. */
          external_id?: string;
          /** The created value returned by the Jushuitan API. */
          created?: string;
          /** The plan arrive date value returned by the Jushuitan API. */
          plan_arrive_date?: string;
          /** The modified value returned by the Jushuitan API. */
          modified?: string;
          /** The status value returned by the Jushuitan API. */
          status?: string;
          /** The remark value returned by the Jushuitan API. */
          remark?: string;
          /** The send address value returned by the Jushuitan API. */
          send_address?: string;
          /** The creator name value returned by the Jushuitan API. */
          creator_name?: string;
          /** The Jushuitan warehouse-company identifier. */
          wms_co_id?: number;
          /** The items value returned by the Jushuitan API. */
          items?: Array<{
            /** The poi id value returned by the Jushuitan API. */
            poi_id?: number;
            /** The merchant SKU identifier in Jushuitan. */
            sku_id?: string;
            /** The i id value returned by the Jushuitan API. */
            i_id?: string;
            /** The name value returned by the Jushuitan API. */
            name?: string;
            /** The properties value value returned by the Jushuitan API. */
            properties_value?: string;
            /** The qty value returned by the Jushuitan API. */
            qty?: number;
            /** The plan qty value returned by the Jushuitan API. */
            plan_qty?: number;
            /** The plan arrive qty value returned by the Jushuitan API. */
            plan_arrive_qty?: number;
            /** The remark value returned by the Jushuitan API. */
            remark?: string;
            /** The in qty value returned by the Jushuitan API. */
            in_qty?: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The response message returned by Jushuitan. */
        msg?: string;
        [key: string]: unknown;
      };
    };
    /** List purchase orders and their line items. */
    "jushuitan.list_purchase_orders": {
      input: {
        /**
         * The one-based page number.
         * @minimum 1
         */
        page_index?: number;
        /**
         * The number of records per page. Defaults to 30 and cannot exceed 50.
         * @minimum 1
         * @maximum 50
         */
        page_size?: number;
        /** The inclusive beginning of the modification-time filter. Supply it with modified_end; the range cannot exceed seven days, and either a time range or external order number is required. */
        modified_begin?: string;
        /** The end of the modification-time filter. Supply it with modified_begin; the range cannot exceed seven days, and either a time range or external order number is required. */
        modified_end?: string;
        /** External order numbers corresponding to external_id from purchase-order upload. This selector and the time range cannot both be empty. */
        so_ids?: Array<string>;
        /** Purchase-order identifiers. This selector and the time range cannot both be empty. */
        po_ids?: Array<string>;
        /** Whether to return operational cloud-warehouse information. */
        is_lock?: string;
        /** The status value accepted by the Jushuitan API. */
        status?: string;
        /** The statuss value accepted by the Jushuitan API. */
        statuss?: Array<string>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The number of records per page. */
          page_size?: number;
          /** The one-based page number. */
          page_index?: number;
          /** The total number of matching records. */
          data_count?: number;
          /** The total number of available pages. */
          page_count?: number;
          /** Whether another page is available after this page. */
          has_next?: boolean;
          /** The business records returned in this response. */
          datas?: Array<{
            /** The po date value returned by the Jushuitan API. */
            po_date?: string;
            /** The po id value returned by the Jushuitan API. */
            po_id?: number;
            /** The online sales-order identifier. */
            so_id?: string;
            /** The remark value returned by the Jushuitan API. */
            remark?: string;
            /** The status value returned by the Jushuitan API. */
            status?: string;
            /** The supplier id value returned by the Jushuitan API. */
            supplier_id?: number;
            /** The seller value returned by the Jushuitan API. */
            seller?: string;
            /** The tax rate value returned by the Jushuitan API. */
            tax_rate?: number;
            /** The purchaser name value returned by the Jushuitan API. */
            purchaser_name?: string;
            /** The send address value returned by the Jushuitan API. */
            send_address?: string;
            /** The plat so id value returned by the Jushuitan API. */
            plat_so_id?: string;
            /** The outer status value returned by the Jushuitan API. */
            outer_status?: string;
            /** The member id value returned by the Jushuitan API. */
            member_id?: string;
            /** The member name 1688 value returned by the Jushuitan API. */
            member_name_1688?: string;
            /** The online purchase memos value returned by the Jushuitan API. */
            online_purchase_memos?: string;
            /** The plat pay date value returned by the Jushuitan API. */
            plat_pay_date?: string;
            /** The term value returned by the Jushuitan API. */
            term?: string;
            /** The item type value returned by the Jushuitan API. */
            item_type?: string;
            /** The items value returned by the Jushuitan API. */
            items?: Array<{
              /** The merchant SKU identifier in Jushuitan. */
              sku_id?: string;
              /** The name value returned by the Jushuitan API. */
              name?: string;
              /** The qty value returned by the Jushuitan API. */
              qty?: number;
              /** The plan arrive qty value returned by the Jushuitan API. */
              plan_arrive_qty?: number;
              /** The price value returned by the Jushuitan API. */
              price?: number;
              /** The i id value returned by the Jushuitan API. */
              i_id?: string;
              /** The po id value returned by the Jushuitan API. */
              po_id?: number;
              /** The poi id value returned by the Jushuitan API. */
              poi_id?: number;
              /** The delivery date value returned by the Jushuitan API. */
              delivery_date?: string;
              /** The remark value returned by the Jushuitan API. */
              remark?: string;
              /** The tax rate value returned by the Jushuitan API. */
              tax_rate?: number;
              /** The qc qty value returned by the Jushuitan API. */
              qc_qty?: number;
              /** The qc quality qty value returned by the Jushuitan API. */
              qc_quality_qty?: number;
              /** The qc defective qty value returned by the Jushuitan API. */
              qc_defective_qty?: number;
              /** The inQty value returned by the Jushuitan API. */
              inQty?: number;
              /** The return qty value returned by the Jushuitan API. */
              return_qty?: number;
              /** The shelving status: 0 not shelved, 1 partially shelved, or 2 fully shelved. */
              is_delivery?: number;
              [key: string]: unknown;
            }>;
            /** The labels value returned by the Jushuitan API. */
            labels?: string;
            /** The confirm date value returned by the Jushuitan API. */
            confirm_date?: string;
            /** The finish time value returned by the Jushuitan API. */
            finish_time?: string;
            /** The modified value returned by the Jushuitan API. */
            modified?: string;
            /** The Jushuitan warehouse-company identifier. */
            wms_co_id?: number;
            /** The receive status value returned by the Jushuitan API. */
            receive_status?: string;
            /** The more rate value returned by the Jushuitan API. */
            more_rate?: number;
            /** The freight value returned by the Jushuitan API. */
            freight?: number;
            /** The operational cloud-warehouse code, returned only when is_lock is true and the purchase order specifies an operational cloud warehouse. */
            lock_lwh_id?: number;
            /** The lock priority json value returned by the Jushuitan API. */
            lock_priority_json?: string;
            /** The merge po id value returned by the Jushuitan API. */
            merge_po_id?: string;
            /** The source o id value returned by the Jushuitan API. */
            source_o_id?: number;
            /** The payment method value returned by the Jushuitan API. */
            payment_method?: string;
            /** The logistics value returned by the Jushuitan API. */
            logistics?: Array<string>;
            /** The l id value returned by the Jushuitan API. */
            l_id?: string;
            /** The logistics company value returned by the Jushuitan API. */
            logistics_company?: string;
            /** The receiver name value returned by the Jushuitan API. */
            receiver_name?: string;
            /** The receiver phone value returned by the Jushuitan API. */
            receiver_phone?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List purchase receipt documents and their line items. */
    "jushuitan.list_purchase_receipts": {
      input: {
        /**
         * The one-based page number.
         * @minimum 1
         */
        page_index?: number;
        /**
         * The number of records per page. Defaults to 30 and cannot exceed 50.
         * @minimum 1
         * @maximum 50
         */
        page_size?: number;
        /** The inclusive beginning of the modification-time filter. Provide it together with modified_end; the interval cannot exceed seven days, and at least one supported document identifier or time range is required. */
        modified_begin?: string;
        /** The end of the modification-time filter. Provide it together with modified_begin; the interval cannot exceed seven days, and at least one supported document identifier or time range is required. */
        modified_end?: string;
        /**
         * The purchase-order identifiers. Either these or a modification-time range is required; at most 30 are accepted.
         * @maxItems 30
         */
        po_ids?: Array<number>;
        /**
         * The purchase-receipt identifiers. Either these or a modification-time range is required; at most 30 are accepted.
         * @maxItems 30
         */
        io_ids?: Array<number>;
        /** The document statuses. When omitted, only Confirmed records are returned; supported statuses include WaitConfirm, Confirmed, Cancelled, Delete, Archive, and OuterConfirming. */
        statuss?: Array<string>;
        /** Online order numbers. Provide this field or a complete modification-time range. */
        so_ids?: Array<string>;
        /** The SQL Server row-version cursor used to avoid missing records during pagination. It returns Confirmed records by default; provide statuss to include other statuses. */
        start_ts?: number;
        /** Whether to calculate the total count. Defaults to true; use false with start_ts to avoid reducing query efficiency. */
        is_get_total?: boolean;
        /** The date field used for filtering: 0 for modified time or 2 for receipt time. Defaults to 0. */
        date_type?: number;
        /** The supplier identifiers, which must be queried together with modified_begin and modified_end. */
        seller_ids?: Array<number>;
        /** The owner-company identifier. Third-party warehouse merchants default to their own data when omitted; use 2147483647 to query all owners. */
        owner_co_id?: number;
        /** The Jushuitan warehouse-company identifier. */
        wms_co_id?: number;
      };
      output: {
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The business records returned in this response. */
          datas?: Array<{
            /** The po id value returned by the Jushuitan API. */
            po_id?: number;
            /** The io date value returned by the Jushuitan API. */
            io_date?: string;
            /** The remark value returned by the Jushuitan API. */
            remark?: string;
            /** The warehouse value returned by the Jushuitan API. */
            warehouse?: string;
            /** The type value returned by the Jushuitan API. */
            type?: string;
            /** The tax rate value returned by the Jushuitan API. */
            tax_rate?: number;
            /** The Jushuitan inbound or outbound document identifier. */
            io_id?: number;
            /** The labels value returned by the Jushuitan API. */
            labels?: string;
            /** The archived value returned by the Jushuitan API. */
            archived?: string;
            /** The merge so id value returned by the Jushuitan API. */
            merge_so_id?: string;
            /** The items value returned by the Jushuitan API. */
            items?: Array<{
              /** The ioi id value returned by the Jushuitan API. */
              ioi_id?: number;
              /** The merchant SKU identifier in Jushuitan. */
              sku_id?: string;
              /** The i id value returned by the Jushuitan API. */
              i_id?: string;
              /** The unit value returned by the Jushuitan API. */
              unit?: string;
              /** The name value returned by the Jushuitan API. */
              name?: string;
              /** The qty value returned by the Jushuitan API. */
              qty?: number;
              /** The Jushuitan inbound or outbound document identifier. */
              io_id?: number;
              /** The cost price value returned by the Jushuitan API. */
              cost_price?: number;
              /** The cost amount value returned by the Jushuitan API. */
              cost_amount?: number;
              /** The remark value returned by the Jushuitan API. */
              remark?: string;
              /** The batch no value returned by the Jushuitan API. */
              batch_no?: string;
              /** The tax rate value returned by the Jushuitan API. */
              tax_rate?: number;
              /** The properties value value returned by the Jushuitan API. */
              properties_value?: string;
              [key: string]: unknown;
            }>;
            /** The Jushuitan warehouse-company identifier. */
            wms_co_id?: number;
            /** The warehouse identifier: 1 for main, 2 for sales returns, 3 for purchasing, 4 for defective goods, or 6 through 8 for custom warehouses. */
            wh_id?: string;
            /** The online order number shown on the purchase-receipt page, corresponding to external_id supplied during upload. */
            so_id?: string;
            /** The modified value returned by the Jushuitan API. */
            modified?: string;
            /** The unique serial numbers, returned when unique-code tracking is enabled in ERP. */
            sns?: Array<{
              /** The merchant SKU identifier in Jushuitan. */
              sku_id?: string;
              /** The sn value returned by the Jushuitan API. */
              sn?: string;
              [key: string]: unknown;
            }>;
            /** The creator name value returned by the Jushuitan API. */
            creator_name?: string;
            /** The supplier name value returned by the Jushuitan API. */
            supplier_name?: string;
            /** The supplier id value returned by the Jushuitan API. */
            supplier_id?: number;
            /** The production batches, returned when production batch management is enabled for the company and, for branch data, the branch. */
            batchs?: Array<{
              /** The batch no value returned by the Jushuitan API. */
              batch_no?: string;
              /** The merchant SKU identifier in Jushuitan. */
              sku_id?: number;
              /** The qty value returned by the Jushuitan API. */
              qty?: string;
              /** The product date value returned by the Jushuitan API. */
              product_date?: string;
              /** The supplier id value returned by the Jushuitan API. */
              supplier_id?: number;
              /** The supplier name value returned by the Jushuitan API. */
              supplier_name?: string;
              /** The expiration date value returned by the Jushuitan API. */
              expiration_date?: string;
              /** The line-item identifier, returned when document batch details and production-batch tracking are enabled in ERP. */
              ioi_id?: string;
              [key: string]: unknown;
            }>;
            /** The financial-review status: WaitConfirm or Confirmed. */
            f_status?: string;
            /** The document status: WaitConfirm, Confirmed, Cancelled, Archive, or OuterConfirming. */
            status?: string;
            /** The out io id value returned by the Jushuitan API. */
            out_io_id?: string;
            /** The ts value returned by the Jushuitan API. */
            ts?: number;
            /** The lock wh id value returned by the Jushuitan API. */
            lock_wh_id?: number;
            /** The extend remark value returned by the Jushuitan API. */
            extend_remark?: string;
            /** The l id value returned by the Jushuitan API. */
            l_id?: string;
            /** The logistics company value returned by the Jushuitan API. */
            logistics_company?: string;
            [key: string]: unknown;
          }>;
          /** The one-based page number. */
          page_index?: number;
          /** Whether another page is available after this page. */
          has_next?: boolean;
          /** The total number of matching records. */
          data_count?: number;
          /** The total number of available pages. */
          page_count?: number;
          /** The number of records requested or returned in one page. */
          page_size?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List purchase requests across virtual and physical warehouses. */
    "jushuitan.list_purchase_requests": {
      input: {
        /** The auto id value accepted by the Jushuitan API. */
        auto_id?: number;
        /** The lwh id value accepted by the Jushuitan API. */
        lwh_id?: number;
        /** The Jushuitan warehouse-company identifier. */
        wms_co_id?: number;
        /** The status value accepted by the Jushuitan API. */
        status?: string;
        /** The remark value accepted by the Jushuitan API. */
        remark?: string;
        /** The beginning of the creation-time filter. */
        create_time_begin?: string;
        /** The end of the creation-time filter. */
        create_time_end?: string;
        /** The inclusive beginning of the modification-time filter. */
        modified_begin?: string;
        /** The end of the modification-time filter. */
        modified_end?: string;
        /** The page value accepted by the Jushuitan API. */
        page: {
          /**
           * The one-based current page number.
           * @minimum 1
           */
          current_page: number;
          /**
           * The number of records per page.
           * @minimum 1
           */
          page_size: number;
        };
      };
      output: {
        /** The data value returned by the Jushuitan API. */
        data: Array<{
          /** The lock purchase value returned by the Jushuitan API. */
          lock_purchase: {
            /** The lp id value returned by the Jushuitan API. */
            lp_id: number;
            /** The type value returned by the Jushuitan API. */
            type: string;
            /** The lwh id value returned by the Jushuitan API. */
            lwh_id: string;
            /** The lwh name value returned by the Jushuitan API. */
            lwh_name: string;
            /** The Jushuitan warehouse-company identifier. */
            wms_co_id: number;
            /** The status value returned by the Jushuitan API. */
            status: string;
            /** The remark value returned by the Jushuitan API. */
            remark: string;
            /** The creator name value returned by the Jushuitan API. */
            creator_name: string;
            /** The modified value returned by the Jushuitan API. */
            modified: string;
            /** The modifier name value returned by the Jushuitan API. */
            modifier_name: string;
            /** The confirmed value returned by the Jushuitan API. */
            confirmed: string;
            /** The confirmer name value returned by the Jushuitan API. */
            confirmer_name: string;
            [key: string]: unknown;
          };
          /** The lock purchase items value returned by the Jushuitan API. */
          lock_purchase_items: Array<{
            /** The lp id value returned by the Jushuitan API. */
            lp_id: number;
            /** The merchant SKU identifier in Jushuitan. */
            sku_id: string;
            /** The name value returned by the Jushuitan API. */
            name: string;
            /** The i id value returned by the Jushuitan API. */
            i_id: string;
            /** The qty value returned by the Jushuitan API. */
            qty: number;
            /** The supplier name value returned by the Jushuitan API. */
            supplier_name: string;
            /** The remark value returned by the Jushuitan API. */
            remark: string;
            /** The status value returned by the Jushuitan API. */
            status: string;
            /** The status c n value returned by the Jushuitan API. */
            status_c_n: string;
            /** The po id value returned by the Jushuitan API. */
            po_id: number;
            /** The auto id value returned by the Jushuitan API. */
            auto_id: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List purchase return outbound documents. */
    "jushuitan.list_purchase_returns": {
      input: {
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        page_index?: number;
        /**
         * The number of records per page. Defaults to 30 and cannot exceed 50.
         * @minimum 1
         * @maximum 50
         */
        page_size?: number;
        /** The inclusive beginning of the modification-time filter. Supply it with modified_end; the range cannot exceed seven days, and either a time range or so_ids is required. */
        modified_begin?: string;
        /** The end of the modification-time filter. Supply it with modified_begin; the range cannot exceed seven days, and either a time range or so_ids is required. */
        modified_end?: string;
        /** Online order numbers. This selector and the time range cannot both be empty. */
        so_ids?: Array<string>;
        /** The document status: Confirmed, WaitConfirm, Creating, Archive, Cancelled, or Confirming. */
        status?: string;
        /**
         * Purchase return document identifiers, up to 30 per request.
         * @maxItems 30
         */
        io_ids?: Array<string>;
        /** The date field used by the time filter: 0 for modified time or 2 for outbound time. Defaults to 0. */
        date_type?: number;
        /** The owner co id value accepted by the Jushuitan API. */
        owner_co_id?: number;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The number of records per page. */
          page_size?: number;
          /** The one-based page number. */
          page_index?: number;
          /** The total number of matching records. */
          data_count?: number;
          /** The total number of available pages. */
          page_count?: number;
          /** Whether another page is available after this page. */
          has_next?: boolean;
          /** The business records returned in this response. */
          datas?: Array<{
            /** The Jushuitan inbound or outbound document identifier. */
            io_id?: number;
            /** The io date value returned by the Jushuitan API. */
            io_date?: string;
            /** The created po id value returned by the Jushuitan API. */
            created_po_id?: number;
            /** The status value returned by the Jushuitan API. */
            status?: string;
            /** The online sales-order identifier. */
            so_id?: string;
            /** The finance status: WaitConfirm or Confirmed. */
            f_status?: string;
            /** The warehouse value returned by the Jushuitan API. */
            warehouse?: string;
            /** The receiver name value returned by the Jushuitan API. */
            receiver_name?: string;
            /** The receiver mobile value returned by the Jushuitan API. */
            receiver_mobile?: string;
            /** The receiver state value returned by the Jushuitan API. */
            receiver_state?: string;
            /** The receiver city value returned by the Jushuitan API. */
            receiver_city?: string;
            /** The receiver district value returned by the Jushuitan API. */
            receiver_district?: string;
            /** The receiver address value returned by the Jushuitan API. */
            receiver_address?: string;
            /** The warehouse type: 1 for main, 2 for sales return, 3 for purchasing, or 4 for defective goods. */
            wh_id?: number;
            /** The remark value returned by the Jushuitan API. */
            remark?: string;
            /** The modified value returned by the Jushuitan API. */
            modified?: string;
            /** The po id value returned by the Jushuitan API. */
            po_id?: number;
            /** The Jushuitan warehouse-company identifier. */
            wms_co_id?: string;
            /** The seller id value returned by the Jushuitan API. */
            seller_id?: number;
            /** The seller name value returned by the Jushuitan API. */
            seller_name?: string;
            /** The labels value returned by the Jushuitan API. */
            labels?: string;
            /** The wave id value returned by the Jushuitan API. */
            wave_id?: number;
            /** The logistics company value returned by the Jushuitan API. */
            logistics_company?: string;
            /** The free amount value returned by the Jushuitan API. */
            free_amount?: number;
            /** The lc id value returned by the Jushuitan API. */
            lc_id?: string;
            /** The l id value returned by the Jushuitan API. */
            l_id?: string;
            /** The archived value returned by the Jushuitan API. */
            archived?: string;
            /** The creator name value returned by the Jushuitan API. */
            creator_name?: string;
            /** The lock wh id value returned by the Jushuitan API. */
            lock_wh_id?: number;
            /** The lock wh name value returned by the Jushuitan API. */
            lock_wh_name?: string;
            /** The out io id value returned by the Jushuitan API. */
            out_io_id?: string;
            /** The tax rate value returned by the Jushuitan API. */
            tax_rate?: number;
            /** The items value returned by the Jushuitan API. */
            items?: Array<{
              /** The ioi id value returned by the Jushuitan API. */
              ioi_id?: number;
              /** The merchant SKU identifier in Jushuitan. */
              sku_id?: string;
              /** The name value returned by the Jushuitan API. */
              name?: string;
              /** The properties value value returned by the Jushuitan API. */
              properties_value?: string;
              /** The tax rate value returned by the Jushuitan API. */
              tax_rate?: number;
              /** The qty value returned by the Jushuitan API. */
              qty?: number;
              /** The cost price value returned by the Jushuitan API. */
              cost_price?: number;
              /** The cost amount value returned by the Jushuitan API. */
              cost_amount?: number;
              /** The i id value returned by the Jushuitan API. */
              i_id?: string;
              /** The remark value returned by the Jushuitan API. */
              remark?: string;
              /** The Jushuitan inbound or outbound document identifier. */
              io_id?: number;
              /** The Jushuitan ERP company identifier. */
              co_id?: number;
              /** The batch no value returned by the Jushuitan API. */
              batch_no?: string;
              [key: string]: unknown;
            }>;
            /** Production batches, returned only when production-batch management is enabled for the merchant and, for branch data, for the branch warehouse. */
            batchs?: Array<{
              /** The batch no value returned by the Jushuitan API. */
              batch_no?: string;
              /** The ioi id value returned by the Jushuitan API. */
              ioi_id?: string;
              /** The merchant SKU identifier in Jushuitan. */
              sku_id?: string;
              /** The qty value returned by the Jushuitan API. */
              qty?: number;
              /** The product date value returned by the Jushuitan API. */
              product_date?: string;
              /** The supplier id value returned by the Jushuitan API. */
              supplier_id?: number;
              /** The supplier name value returned by the Jushuitan API. */
              supplier_name?: string;
              [key: string]: unknown;
            }>;
            /** The unique serial numbers, available when the ERP product unique-code feature is configured. */
            sns?: Array<{
              /** The merchant SKU identifier in Jushuitan. */
              sku_id?: string;
              /** The sn value returned by the Jushuitan API. */
              sn?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List sales outbound documents visible through OpenWeb. */
    "jushuitan.list_sales_outbounds": {
      input: {
        /** The Jushuitan shop identifier. */
        shop_id?: number;
        /** The is offline shop value accepted by the Jushuitan API. */
        is_offline_shop?: boolean;
        /** The document status: WaitConfirm, Confirmed, Delete, Cancelled, OuterConfirming, or Archive. */
        status?: string;
        /** The inclusive beginning of the modification-time filter. Supply it with modified_end; the range cannot exceed seven days, and either a time range or another document selector is required. Prefer start_ts for reliable incremental pagination. */
        modified_begin?: string;
        /** The end of the modification-time filter. Supply it with modified_begin; the range cannot exceed seven days, and either a time range or another document selector is required. */
        modified_end?: string;
        /**
         * Online order numbers. They and the time range cannot both be empty; at most 50 values are accepted.
         * @maxItems 50
         */
        so_ids?: Array<string>;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        page_index?: number;
        /**
         * The number of records per page. Defaults to 30 and cannot exceed 50.
         * @minimum 1
         * @maximum 50
         */
        page_size?: number;
        /** The Jushuitan warehouse-company identifier. */
        wms_co_id?: number;
        /**
         * Internal order identifiers. They and the time range cannot both be empty; at most 50 values are accepted.
         * @maxItems 50
         */
        o_ids?: Array<number>;
        /**
         * Tracking numbers, up to 20 per request.
         * @maxItems 20
         */
        l_ids?: Array<string>;
        /**
         * Picking-wave identifiers. They and the time range cannot both be empty; at most 50 values are accepted.
         * @maxItems 50
         */
        wave_ids?: Array<number>;
        /** The incremental timestamp cursor used to continue a changing-data query. */
        start_ts?: number;
        /** Whether to return total record and page counts. Defaults to true, or false when start_ts is supplied. */
        is_get_total?: boolean;
        /**
         * Outbound document identifiers, up to 50 per request.
         * @maxItems 50
         */
        io_ids?: Array<string>;
        /** The owner co id value accepted by the Jushuitan API. */
        owner_co_id?: number;
        /** The is get cbfinance value accepted by the Jushuitan API. */
        is_get_cbfinance?: boolean;
        /** The is get cblogistic value accepted by the Jushuitan API. */
        is_get_cblogistic?: boolean;
        /** The date field used by the time filter: 0 for modified time or 2 for outbound time. Defaults to 0. */
        date_type?: number;
        /** The distributor identifier. When supplied, the query time range is limited to one day. */
        drp_co_id?: number;
        /** The inout flds value accepted by the Jushuitan API. */
        inout_flds?: Array<string>;
        /** The inout item flds value accepted by the Jushuitan API. */
        inout_item_flds?: Array<string>;
        /** Whether to query archived data. Omit it or pass false for active data. */
        archive?: boolean;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The number of records per page. */
          page_size?: number;
          /** The one-based page number. */
          page_index?: number;
          /** The total number of matching records. */
          data_count?: number;
          /** The total number of available pages. */
          page_count?: number;
          /** Whether another page is available after this page. */
          has_next?: boolean;
          /** The maximum rowversion cursor in this response. */
          max_ts?: number;
          /** The business records returned in this response. */
          datas?: Array<{
            /** The Jushuitan ERP company identifier. */
            co_id?: number;
            /** The Jushuitan shop identifier. */
            shop_id?: number;
            /** The Jushuitan inbound or outbound document identifier. */
            io_id?: number;
            /** The internal Jushuitan order identifier. */
            o_id?: number;
            /** The online sales-order identifier. */
            so_id?: string;
            /** The created value returned by the Jushuitan API. */
            created?: string;
            /** The modified value returned by the Jushuitan API. */
            modified?: string;
            /** The document status: WaitConfirm, Confirmed, Delete, OuterConfirming, or Cancelled. */
            status?: string;
            /** The order type value returned by the Jushuitan API. */
            order_type?: string;
            /** The invoice title value returned by the Jushuitan API. */
            invoice_title?: string;
            /** The shop buyer id value returned by the Jushuitan API. */
            shop_buyer_id?: string;
            /** The platform buyer identifier, available only for Tmall, Douyin, and Kuaishou. */
            open_id?: string;
            /** The receiver country value returned by the Jushuitan API. */
            receiver_country?: string;
            /** The receiver state value returned by the Jushuitan API. */
            receiver_state?: string;
            /** The receiver city value returned by the Jushuitan API. */
            receiver_city?: string;
            /** The receiver district value returned by the Jushuitan API. */
            receiver_district?: string;
            /** The receiver town value returned by the Jushuitan API. */
            receiver_town?: string;
            /** The receiver address value returned by the Jushuitan API. */
            receiver_address?: string;
            /** The receiver name value returned by the Jushuitan API. */
            receiver_name?: string;
            /** The receiver phone value returned by the Jushuitan API. */
            receiver_phone?: string;
            /** The receiver mobile value returned by the Jushuitan API. */
            receiver_mobile?: string;
            /** The buyer message value returned by the Jushuitan API. */
            buyer_message?: string;
            /** The remark value returned by the Jushuitan API. */
            remark?: string;
            /** The is cod value returned by the Jushuitan API. */
            is_cod?: boolean;
            /** The pay amount value returned by the Jushuitan API. */
            pay_amount?: number;
            /** The l id value returned by the Jushuitan API. */
            l_id?: string;
            /** The outbound time. It defaults to the document creation time regardless of outbound status and is not cleared when the document is cancelled. */
            io_date?: string;
            /** The lc id value returned by the Jushuitan API. */
            lc_id?: string;
            /** The stock enabled value returned by the Jushuitan API. */
            stock_enabled?: string;
            /** The drp co id from value returned by the Jushuitan API. */
            drp_co_id_from?: string;
            /** The labels value returned by the Jushuitan API. */
            labels?: string;
            /** The paid amount value returned by the Jushuitan API. */
            paid_amount?: number;
            /** The free amount value returned by the Jushuitan API. */
            free_amount?: number;
            /** The amount paid by the buyer, returned only for platforms whose order details expose the revenue subtotal. */
            buyer_paid_amount?: number;
            /** The amount received by the seller, returned only for platforms whose order details expose the revenue subtotal. */
            seller_income_amount?: number;
            /** The f volume value returned by the Jushuitan API. */
            f_volume?: string;
            /** The freight value returned by the Jushuitan API. */
            freight?: number;
            /** The first freight value returned by the Jushuitan API. */
            first_freight?: string;
            /** The outerwms freight value returned by the Jushuitan API. */
            outerwms_freight?: string;
            /** The weight value returned by the Jushuitan API. */
            weight?: number;
            /** The f weight value returned by the Jushuitan API. */
            f_weight?: number;
            /** The merge so id value returned by the Jushuitan API. */
            merge_so_id?: string;
            /** The Jushuitan warehouse-company identifier. */
            wms_co_id?: number;
            /** The owner oid value returned by the Jushuitan API. */
            owner_oid?: number;
            /** The business staff value returned by the Jushuitan API. */
            business_staff?: string;
            /** The currency value returned by the Jushuitan API. */
            currency?: string;
            /** The pay date value returned by the Jushuitan API. */
            pay_date?: string;
            /** The logistics company value returned by the Jushuitan API. */
            logistics_company?: string;
            /** The wave id value returned by the Jushuitan API. */
            wave_id?: number;
            /** The seller flag: 1 red, 2 yellow, 3 green, 4 blue, or 5 purple. */
            seller_flag?: number;
            /** The gov supplier name value returned by the Jushuitan API. */
            gov_supplier_name?: string;
            /** The government free amount value returned by the Jushuitan API. */
            government_free_amount?: number;
            /** The order staff id value returned by the Jushuitan API. */
            order_staff_id?: number;
            /** The order staff name value returned by the Jushuitan API. */
            order_staff_name?: string;
            /** The node value returned by the Jushuitan API. */
            node?: string;
            /** The first freight tariff value returned by the Jushuitan API. */
            first_freight_tariff?: number;
            /** The f freight other expense value returned by the Jushuitan API. */
            f_freight_other_expense?: number;
            /** The items value returned by the Jushuitan API. */
            items?: Array<{
              /** The ioi id value returned by the Jushuitan API. */
              ioi_id?: number;
              /** The pic value returned by the Jushuitan API. */
              pic?: string;
              /** The merchant SKU identifier in Jushuitan. */
              sku_id?: string;
              /** The qty value returned by the Jushuitan API. */
              qty?: number;
              /** The name value returned by the Jushuitan API. */
              name?: string;
              /** The properties value value returned by the Jushuitan API. */
              properties_value?: string;
              /** The sale price value returned by the Jushuitan API. */
              sale_price?: number;
              /** The oi id value returned by the Jushuitan API. */
              oi_id?: string;
              /** The sale amount value returned by the Jushuitan API. */
              sale_amount?: number;
              /** The i id value returned by the Jushuitan API. */
              i_id?: string;
              /** The unit value returned by the Jushuitan API. */
              unit?: string;
              /** The sale base price value returned by the Jushuitan API. */
              sale_base_price?: number;
              /** The combine sku id value returned by the Jushuitan API. */
              combine_sku_id?: string;
              /** The is gift value returned by the Jushuitan API. */
              is_gift?: boolean;
              /** The outer oi id value returned by the Jushuitan API. */
              outer_oi_id?: string;
              /** The raw so id value returned by the Jushuitan API. */
              raw_so_id?: string;
              /** The batch id value returned by the Jushuitan API. */
              batch_id?: string;
              /** The product date value returned by the Jushuitan API. */
              product_date?: string;
              /** The supplier id value returned by the Jushuitan API. */
              supplier_id?: number;
              /** The expiration date, available only when the related production-batch feature is enabled. */
              expiration_date?: string;
              /** The buyer paid amount value returned by the Jushuitan API. */
              buyer_paid_amount?: number;
              /** The seller income amount value returned by the Jushuitan API. */
              seller_income_amount?: number;
              /** The total qty value returned by the Jushuitan API. */
              total_qty?: number;
              [key: string]: unknown;
            }>;
            /** The ClusterInfos value returned by the Jushuitan API. */
            ClusterInfos?: Array<{
              /** The Jushuitan inbound or outbound document identifier. */
              io_id?: string;
              /** The l id value returned by the Jushuitan API. */
              l_id?: string;
              /** The logistic company value returned by the Jushuitan API. */
              logistic_company?: string;
              /** The lc id value returned by the Jushuitan API. */
              lc_id?: string;
              /** The f weight value returned by the Jushuitan API. */
              f_weight?: number;
              [key: string]: unknown;
            }>;
            /** Production batches, returned only when production-batch management is enabled for the merchant and, for branch data, for the branch warehouse. */
            batchs?: Array<{
              /** The batch no value returned by the Jushuitan API. */
              batch_no?: string;
              /** The ioi id value returned by the Jushuitan API. */
              ioi_id?: number;
              /** The merchant SKU identifier in Jushuitan. */
              sku_id?: string;
              /** The qty value returned by the Jushuitan API. */
              qty?: number;
              /** The product date value returned by the Jushuitan API. */
              product_date?: string;
              /** The supplier id value returned by the Jushuitan API. */
              supplier_id?: number;
              /** The supplier name value returned by the Jushuitan API. */
              supplier_name?: string;
              /** The expiration date value returned by the Jushuitan API. */
              expiration_date?: string;
              /** The status value returned by the Jushuitan API. */
              status?: string;
              [key: string]: unknown;
            }>;
            /** The unique serial numbers, available when the ERP product unique-code feature is configured. Values normally come from tracking data, or from the unique-code ledger when ledger reading is enabled. */
            sns?: Array<{
              /** The merchant SKU identifier in Jushuitan. */
              sku_id?: string;
              /** The sn value returned by the Jushuitan API. */
              sn?: string;
              /** The certificate no value returned by the Jushuitan API. */
              certificate_no?: string;
              /** The is pack sn value returned by the Jushuitan API. */
              is_pack_sn?: boolean;
              /** The is opened value returned by the Jushuitan API. */
              is_opened?: boolean;
              /** The pack sn value returned by the Jushuitan API. */
              pack_sn?: string;
              /** The production batch identifier, available only when unique-code production-batch tracing is enabled. */
              batch_id?: string;
              /** The production date, available only when unique-code production-batch tracing is enabled. */
              produced_date?: string;
              /** The expiration date, available only when unique-code production-batch tracing is enabled. */
              expiration_date?: string;
              [key: string]: unknown;
            }>;
            /** The is print express value returned by the Jushuitan API. */
            is_print_express?: boolean;
            /** The is print value returned by the Jushuitan API. */
            is_print?: boolean;
            /** The shop name value returned by the Jushuitan API. */
            shop_name?: string;
            /** The ts value returned by the Jushuitan API. */
            ts?: number;
            /** The shipment value returned by the Jushuitan API. */
            shipment?: string;
            /** The deliver name value returned by the Jushuitan API. */
            deliver_name?: string;
            /** The channel name value returned by the Jushuitan API. */
            channel_name?: string;
            /** The tracking number value returned by the Jushuitan API. */
            tracking_number?: string;
            /** The package no value returned by the Jushuitan API. */
            package_no?: string;
            /** The warehouse oid value returned by the Jushuitan API. */
            warehouse_oid?: string;
            /** Deprecated cross-border finance data retained by Jushuitan for compatibility; use cb_financenew instead. */
            cb_finances?: Record<string, unknown>;
            /** The current cross-border finance data returned by Jushuitan. */
            cb_financenew?: {
              /** The currency code value returned by the Jushuitan API. */
              currency_code?: string;
              /** The order currency code value returned by the Jushuitan API. */
              order_currency_code?: string;
              /** The internal Jushuitan order identifier. */
              o_id?: number;
              /** The rate value returned by the Jushuitan API. */
              rate?: string;
              /** The currency to usd value returned by the Jushuitan API. */
              currency_to_usd?: string;
              /** The currency to rmb value returned by the Jushuitan API. */
              currency_to_rmb?: string;
              /** The rate date value returned by the Jushuitan API. */
              rate_date?: string;
              /** The profit value returned by the Jushuitan API. */
              profit?: string;
              /** The profit rate value returned by the Jushuitan API. */
              profit_rate?: string;
              /** The net amount value returned by the Jushuitan API. */
              net_amount?: string;
              /** The income group value returned by the Jushuitan API. */
              income_group?: string;
              /** The income total value returned by the Jushuitan API. */
              income_total?: string;
              /** The expense group value returned by the Jushuitan API. */
              expense_group?: string;
              /** The expense total value returned by the Jushuitan API. */
              expense_total?: string;
              /** The erp expense group value returned by the Jushuitan API. */
              erp_expense_group?: string;
              /** The erp expense total value returned by the Jushuitan API. */
              erp_expense_total?: string;
              /** The refund group value returned by the Jushuitan API. */
              refund_group?: string;
              /** The refund total value returned by the Jushuitan API. */
              refund_total?: string;
              [key: string]: unknown;
            };
            /** The owner co id value returned by the Jushuitan API. */
            owner_co_id?: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List inbound and outbound movements for unique product serial numbers. */
    "jushuitan.list_serial_number_stock_movements": {
      input: {
        /** The Jushuitan warehouse-company identifier. */
        wms_co_id: number;
        /**
         * The one-based page number.
         * @minimum 1
         */
        page_index: number;
        /**
         * The number of records per page. Defaults to 1,000 and cannot exceed 1,000.
         * @minimum 1
         * @maximum 1000
         */
        page_size: number;
        /** The io ids value accepted by the Jushuitan API. */
        io_ids?: Array<number>;
        /** The o ids value accepted by the Jushuitan API. */
        o_ids?: Array<number>;
        /** The sku sns value accepted by the Jushuitan API. */
        sku_sns?: Array<string>;
        /** The beginning of the creation-time filter. Without io_ids, o_ids, or sku_sns, the range cannot exceed 30 days. */
        create_time_start?: string;
        /** The end of the creation-time filter. When no time range is supplied, Jushuitan queries the previous seven days. */
        create_time_end?: string;
        /** The last ioi sn id value accepted by the Jushuitan API. */
        last_ioi_sn_id?: number;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: Array<{
          /** The Jushuitan inbound or outbound document identifier. */
          io_id?: number;
          /** The internal Jushuitan order identifier. */
          o_id?: unknown;
          /** The document type: 1 purchase receipt, 2 purchase return, 3 sales outbound, 4 sales return, 5 allocation outbound, 6 allocation inbound, 7 inventory count, 8 discrepancy, 9 settlement, 10 requisition outbound, 11 requisition return, 12 opening balance, 13 other outbound, 14 other inbound, 15 invoice, 16 processing outbound, 17 processing inbound, or 18 other return. */
          inout_type?: number;
          /** The merchant SKU identifier in Jushuitan. */
          sku_id?: string;
          /** The sku sn value returned by the Jushuitan API. */
          sku_sn?: string;
          /** The cost price value returned by the Jushuitan API. */
          cost_price?: unknown;
          /** The cost amount value returned by the Jushuitan API. */
          cost_amount?: number;
          /** The remark value returned by the Jushuitan API. */
          remark?: unknown;
          /** The create time value returned by the Jushuitan API. */
          create_time?: string;
          /** The modified time value returned by the Jushuitan API. */
          modified_time?: string;
          /** The supplier id value returned by the Jushuitan API. */
          supplier_id?: unknown;
          /** The supplier name value returned by the Jushuitan API. */
          supplier_name?: unknown;
          /** The ioi sn id value returned by the Jushuitan API. */
          ioi_sn_id?: number;
          [key: string]: unknown;
        }>;
        /** The response message value returned by the Jushuitan API. */
        msg?: unknown;
        /** The request identifier assigned by Jushuitan. */
        request_id?: unknown;
        [key: string]: unknown;
      };
    };
    /** List shipment and logistics information visible through OpenWeb. */
    "jushuitan.list_shipments": {
      input: {
        /** The Jushuitan shop identifier. */
        shop_id?: number;
        /**
         * The one-based page number.
         * @minimum 1
         */
        page_index?: number;
        /**
         * The number of records per page. Defaults to 30 and cannot exceed 50.
         * @minimum 1
         * @maximum 50
         */
        page_size?: number;
        /** The inclusive beginning of the modification-time filter. Provide it together with modified_end; the interval cannot exceed seven days. */
        modified_begin?: string;
        /** The end of the modification-time filter. Provide it together with modified_begin; the interval cannot exceed seven days. */
        modified_end?: string;
        /** The date field used for filtering: 0 for modified time, 1 for creation date, 2 for order date, or 3 for shipment time. Defaults to shipment time. */
        date_type?: number;
        /**
         * The platform order identifiers; at most 20 are accepted. When provided, filters other than the time range are ignored.
         * @maxItems 20
         */
        so_ids?: Array<string>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The number of records per page. */
          page_size?: number;
          /** The one-based page number. */
          page_index?: number;
          /** The total number of matching records. */
          data_count?: number;
          /** The total number of available pages. */
          page_count?: number;
          /** Whether another page is available after this page. */
          has_next: boolean;
          /** The orders value returned by the Jushuitan API. */
          orders?: Array<{
            /** The internal Jushuitan order identifier. */
            o_id: number;
            /** The Jushuitan shop identifier. */
            shop_id: number;
            /** The unique online sales-order identifier, at most 50 characters. */
            so_id: string;
            /** The as id value returned by the Jushuitan API. */
            as_id?: number;
            /** The send date value returned by the Jushuitan API. */
            send_date?: string;
            /** The freight value returned by the Jushuitan API. */
            freight?: number;
            /** The weight value returned by the Jushuitan API. */
            weight?: number;
            /** The shipping warehouse-company identifier; 0 denotes the main warehouse. */
            wms_co_id?: number;
            /** The lc id value returned by the Jushuitan API. */
            lc_id?: string;
            /** The l id value returned by the Jushuitan API. */
            l_id?: string;
            /** The logistics company value returned by the Jushuitan API. */
            logistics_company?: string;
            /** The items value returned by the Jushuitan API. */
            items: Array<{
              /** The merchant SKU identifier in Jushuitan. */
              sku_id: string;
              /** The qty value returned by the Jushuitan API. */
              qty: number;
              /** The outer oi id value returned by the Jushuitan API. */
              outer_oi_id: string;
              /** The original platform order identifier, which may be empty and cannot exceed 50 characters. */
              raw_so_id?: string;
              /** The internal Jushuitan order identifier. */
              o_id?: string;
              /** The refund status value returned by the Jushuitan API. */
              refund_status?: string;
              /** The sku type value returned by the Jushuitan API. */
              sku_type?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List shop product records and their mappings to Jushuitan products. */
    "jushuitan.list_shop_products": {
      input: {
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        page_index?: number;
        /**
         * The number of records per page. Defaults to 30 and cannot exceed 50.
         * @minimum 1
         * @maximum 50
         */
        page_size?: number;
        /** The inclusive beginning of the modification-time filter. Provide both modification times; the range cannot exceed seven days. Provide this range or sku_ids. */
        modified_begin?: string;
        /** The end of the modification-time filter. Provide both modification times; the range cannot exceed seven days. Provide this range or sku_ids. */
        modified_end?: string;
        /** The link modified begin value accepted by the Jushuitan API. */
        link_modified_begin?: string;
        /** The link modified end value accepted by the Jushuitan API. */
        link_modified_end?: string;
        /** Up to 20 online SKU identifiers. Provide this field or a complete modification-time range. */
        sku_ids?: string;
        /** The Jushuitan shop identifier. */
        shop_id?: number;
        /** The beginning of the creation-time range. Provide it together with created_end. */
        created_begin?: string;
        /** The end of the creation-time range. Provide it together with created_begin. */
        created_end?: string;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The number of records per page. */
          page_size?: number;
          /** The one-based page number. */
          page_index?: number;
          /** The total number of matching records. */
          data_count?: number;
          /** The total number of available pages. */
          page_count?: number;
          /** Whether another page is available after this page. */
          has_next?: boolean;
          /** The business records returned in this response. */
          datas?: Array<{
            /** The Jushuitan ERP company identifier. */
            co_id?: number;
            /** The Jushuitan shop identifier. */
            shop_id?: number;
            /** The source platform. See Jushuitan's channel enumeration documentation at https://jushuitan.yuque.com/docs/share/d34de6aa-9613-4bc3-8a6e-12b20523925f (password: tyuy). */
            channel?: string;
            /** The i id value returned by the Jushuitan API. */
            i_id?: string;
            /** The merchant SKU identifier in Jushuitan. */
            sku_id?: string;
            /** The shop i id value returned by the Jushuitan API. */
            shop_i_id?: string;
            /** The shop sku id value returned by the Jushuitan API. */
            shop_sku_id?: string;
            /** The modified value returned by the Jushuitan API. */
            modified?: string;
            /** The link modified value returned by the Jushuitan API. */
            link_modified?: string;
            /** The enabled value returned by the Jushuitan API. */
            enabled?: boolean;
            /** The c id value returned by the Jushuitan API. */
            c_id?: number;
            /** The raw sku id value returned by the Jushuitan API. */
            raw_sku_id?: string;
            /** The shop price value returned by the Jushuitan API. */
            shop_price?: string;
            /** The name value returned by the Jushuitan API. */
            name?: string;
            /** The properties value value returned by the Jushuitan API. */
            properties_value?: string;
            /** The pic value returned by the Jushuitan API. */
            pic?: string;
            /** The created value returned by the Jushuitan API. */
            created?: string;
            /** The shop created value returned by the Jushuitan API. */
            shop_created?: string;
            /** The pull off time value returned by the Jushuitan API. */
            pull_off_time?: string;
            /** The outer sku code value returned by the Jushuitan API. */
            outer_sku_code?: string;
            /** The link synchronization state: 0 enabled, 2 disabled, 3 disabled by the product mapping, or 254/255 disabled after locking. */
            type?: number;
            /** The shop qty value returned by the Jushuitan API. */
            shop_qty?: number;
            /** The link sku id value returned by the Jushuitan API. */
            link_sku_id?: string;
            /** The sale price min value returned by the Jushuitan API. */
            sale_price_min?: number;
            /** The sale price max value returned by the Jushuitan API. */
            sale_price_max?: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List shops available to the authorized Jushuitan merchant account. */
    "jushuitan.list_shops": {
      input: {
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        page_index?: number;
        /**
         * The number of records per page. Defaults to 100 and cannot exceed 100.
         * @minimum 1
         * @maximum 100
         */
        page_size?: number;
        /** The Jushuitan shop identifiers to include. */
        shop_ids?: Array<number>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: number;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The one-based page number. */
          page_index: number;
          /** The number of records per page. */
          page_size: number;
          /** Whether another page is available after this page. */
          has_next?: boolean;
          /** The business records returned in this response. */
          datas?: Array<{
            /** The Jushuitan shop identifier. */
            shop_id?: number;
            /** The shop name. */
            shop_name?: string;
            /** The Jushuitan ERP company identifier. */
            co_id?: number;
            /** The platform site associated with the shop. */
            shop_site?: string;
            /** The shop URL. */
            shop_url?: string;
            /** The shop creation time. */
            created?: string;
            /** The account that authorized the shop. */
            nick?: string;
            /** The authorization expiration time. */
            session_expired?: string;
            /** The authorization session user identifier. */
            session_uid?: string;
            /** The abbreviated shop name. */
            short_name?: string;
            /** The shop group identifier. */
            group_id?: number;
            /** The shop group name. */
            group_name?: string;
            /** The authorization status: 0 for unauthorized, 1 for expired, 2 for authorized, or 3 when authorization is not required. */
            session_status?: number;
            /** The shop name on the connected commerce platform. */
            platform_shop_name?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List supplier master records. */
    "jushuitan.list_suppliers": {
      input: {
        /** The supplier codes value accepted by the Jushuitan API. */
        supplier_codes?: Array<string>;
        /**
         * The one-based page number.
         * @minimum 1
         */
        page_index?: number;
        /**
         * The number of records per page. Defaults to 30 and cannot exceed 500.
         * @minimum 1
         * @maximum 500
         */
        page_size?: number;
        /** The inclusive beginning of the modification-time filter. */
        modified_begin?: string;
        /** The end of the modification-time filter. The query range cannot exceed one day. */
        modified_end?: string;
        /**
         * Internal supplier identifiers, up to 50 per request.
         * @maxItems 50
         */
        supplier_ids?: Array<number>;
        /**
         * Supplier names, up to 50 per request.
         * @maxItems 50
         */
        names?: Array<string>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The number of records per page. */
          page_size?: number;
          /** The one-based page number. */
          page_index?: number;
          /** The total number of matching records. */
          data_count?: number;
          /** The total number of available pages. */
          page_count?: number;
          /** Whether another page is available after this page. */
          has_next?: boolean;
          /** The business records returned in this response. */
          datas?: Array<{
            /** The supplier id value returned by the Jushuitan API. */
            supplier_id?: number;
            /** The supplier code value returned by the Jushuitan API. */
            supplier_code?: string;
            /** The name value returned by the Jushuitan API. */
            name?: string;
            /** The modified value returned by the Jushuitan API. */
            modified?: string;
            /** The remark value returned by the Jushuitan API. */
            remark?: string;
            /** The remark2 value returned by the Jushuitan API. */
            remark2?: string;
            /** The remark3 value returned by the Jushuitan API. */
            remark3?: string;
            /** The group value returned by the Jushuitan API. */
            group?: string;
            /** The enabled value returned by the Jushuitan API. */
            enabled?: boolean;
            /** The depositbank value returned by the Jushuitan API. */
            depositbank?: string;
            /** The bankacount value returned by the Jushuitan API. */
            bankacount?: string;
            /** The acountnumber value returned by the Jushuitan API. */
            acountnumber?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List virtual-warehouse allocation documents with pagination. */
    "jushuitan.list_virtual_warehouse_allocations": {
      input: {
        /** The Jushuitan inbound or outbound document identifier. */
        io_id?: number;
        /** Comma-separated merchant SKU identifiers; at most 50 are accepted. */
        sku_id?: string;
        /** The out lwh id value accepted by the Jushuitan API. */
        out_lwh_id?: number;
        /** The date field used for filtering: 0 for creation time or 1 for approval time. Defaults to creation time. */
        date_type?: number;
        /** The beginning of the date range. When both date bounds are omitted, the query defaults to the last three months. */
        date_begin?: string;
        /** The end of the date range. When both date bounds are omitted, the query defaults to the last three months. */
        date_end?: string;
        /** The online sales-order identifier. */
        so_id?: string;
        /** The status value accepted by the Jushuitan API. */
        status?: string;
        /** The page value accepted by the Jushuitan API. */
        page: {
          /**
           * The number of records per page.
           * @minimum 1
           */
          page_size: number;
          /**
           * The one-based current page number.
           * @minimum 1
           */
          current_page: number;
        };
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The page value returned by the Jushuitan API. */
          page?: {
            /** The one-based current page number. */
            current_page?: number;
            /** The number of records requested or returned in one page. */
            page_size?: number;
            /** The count value returned by the Jushuitan API. */
            count?: number;
            /** The pages value returned by the Jushuitan API. */
            pages?: number;
            /** The index value returned by the Jushuitan API. */
            index?: number;
            [key: string]: unknown;
          };
          /** The list value returned by the Jushuitan API. */
          list?: Array<{
            /** The Jushuitan inbound or outbound document identifier. */
            io_id: number;
            /** The out lwh id value returned by the Jushuitan API. */
            out_lwh_id: number;
            /** The out lwh name value returned by the Jushuitan API. */
            out_lwh_name: string;
            /** The in lwh id value returned by the Jushuitan API. */
            in_lwh_id: number;
            /** The in lwh name value returned by the Jushuitan API. */
            in_lwh_name: string;
            /** The status value returned by the Jushuitan API. */
            status: string;
            /** The labels value returned by the Jushuitan API. */
            labels: string;
            /** The remark value returned by the Jushuitan API. */
            remark: string;
            /** The Jushuitan warehouse-company identifier. */
            wms_co_id: number;
            /** The wms name value returned by the Jushuitan API. */
            wms_name: string;
            /** The created value returned by the Jushuitan API. */
            created: string;
            /** The io date value returned by the Jushuitan API. */
            io_date: string;
            /** The items value returned by the Jushuitan API. */
            items: Array<{
              /** The i id value returned by the Jushuitan API. */
              i_id: string;
              /** The merchant SKU identifier in Jushuitan. */
              sku_id: string;
              /** The sku name value returned by the Jushuitan API. */
              sku_name: string;
              /** The properties value value returned by the Jushuitan API. */
              properties_value: string;
              /** The qty value returned by the Jushuitan API. */
              qty: number;
              /** The lock qty value returned by the Jushuitan API. */
              lock_qty: number;
              /** The target lwh lockable qty value returned by the Jushuitan API. */
              target_lwh_lockable_qty: number;
              /** The pick able qty value returned by the Jushuitan API. */
              pick_able_qty: number;
              /** The public qty value returned by the Jushuitan API. */
              public_qty: number;
              /** The cost price value returned by the Jushuitan API. */
              cost_price: number;
              [key: string]: unknown;
            }>;
            /** The online sales-order identifier. */
            so_id: string;
            /** The type value returned by the Jushuitan API. */
            type: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** The response message value returned by the Jushuitan API. */
        msg?: unknown;
        /** The request identifier assigned by Jushuitan. */
        request_id?: unknown;
        [key: string]: unknown;
      };
    };
    /** List product inventory held in virtual warehouses. */
    "jushuitan.list_virtual_warehouse_inventory": {
      input: {
        /** The Jushuitan warehouse-company identifier. */
        wms_co_id?: string;
        /** The merchant SKU identifiers. Either this field or a modification-time range is required. */
        sku_ids?: Array<string>;
        /** The inclusive beginning of the modification-time filter. Either a time range or sku_ids is required. */
        modified_begin?: string;
        /** The end of the modification-time filter. Either a time range or sku_ids is required. */
        modified_end?: string;
        /** The page value accepted by the Jushuitan API. */
        page: {
          /** The one-based current page number. */
          current_page: string;
          /** The number of records requested or returned in one page. */
          page_size: string;
        };
      };
      output: {
        /** The one-based page number. */
        page_index: number;
        /** The number of records requested or returned in one page. */
        page_size: number;
        /** The total number of matching records. */
        data_count: number;
        /** Whether another page is available after this page. */
        has_next: boolean;
        /** The data value returned by the Jushuitan API. */
        data: Array<{
          /** The merchant SKU identifier in Jushuitan. */
          sku_id: string;
          /** The stocks value returned by the Jushuitan API. */
          stocks: Array<{
            /** The lwh id value returned by the Jushuitan API. */
            lwh_id: number;
            /** The name value returned by the Jushuitan API. */
            name: string;
            /** The qty value returned by the Jushuitan API. */
            qty: number;
            /** The order able qty value returned by the Jushuitan API. */
            order_able_qty: number;
            /** The order lock value returned by the Jushuitan API. */
            order_lock: number;
            /** The pick lock value returned by the Jushuitan API. */
            pick_lock: number;
            /** The modified value returned by the Jushuitan API. */
            modified: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List virtual-warehouse allocation and return documents with pagination. */
    "jushuitan.list_virtual_warehouse_operations": {
      input: {
        /** The Jushuitan inbound or outbound document identifier. */
        io_id?: number;
        /** Comma-separated merchant SKU identifiers; at most 50 are accepted. */
        sku_id?: string;
        /** The lwh id value accepted by the Jushuitan API. */
        lwh_id?: number;
        /** The date field used for filtering: 0 for creation time or 1 for approval time. Defaults to creation time. */
        date_type?: number;
        /** The beginning of the date range. When both date bounds are omitted, the query defaults to the last three months. */
        date_begin?: string;
        /** The end of the date range. When both date bounds are omitted, the query defaults to the last three months. */
        date_end?: string;
        /** The online sales-order identifier. */
        so_id?: string;
        /** The status value accepted by the Jushuitan API. */
        status?: string;
        /** The type value accepted by the Jushuitan API. */
        type?: string;
        /** The page value accepted by the Jushuitan API. */
        page: {
          /**
           * The number of records per page.
           * @minimum 1
           */
          page_size: number;
          /**
           * The one-based current page number.
           * @minimum 1
           */
          current_page: number;
        };
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The page value returned by the Jushuitan API. */
          page?: {
            /** The one-based current page number. */
            current_page?: number;
            /** The number of records requested or returned in one page. */
            page_size?: number;
            /** The count value returned by the Jushuitan API. */
            count?: number;
            /** The pages value returned by the Jushuitan API. */
            pages?: number;
            /** The index value returned by the Jushuitan API. */
            index?: number;
            [key: string]: unknown;
          };
          /** The list value returned by the Jushuitan API. */
          list?: Array<{
            /** The Jushuitan inbound or outbound document identifier. */
            io_id: number;
            /** The lwh id value returned by the Jushuitan API. */
            lwh_id: number;
            /** The lwh name value returned by the Jushuitan API. */
            lwh_name: string;
            /** The status value returned by the Jushuitan API. */
            status: string;
            /** The labels value returned by the Jushuitan API. */
            labels: string;
            /** The remark value returned by the Jushuitan API. */
            remark: string;
            /** The Jushuitan warehouse-company identifier. */
            wms_co_id: number;
            /** The wms name value returned by the Jushuitan API. */
            wms_name: string;
            /** The created value returned by the Jushuitan API. */
            created: string;
            /** The io date value returned by the Jushuitan API. */
            io_date: string;
            /** The items value returned by the Jushuitan API. */
            items: Array<{
              /** The i id value returned by the Jushuitan API. */
              i_id: string;
              /** The merchant SKU identifier in Jushuitan. */
              sku_id: string;
              /** The sku name value returned by the Jushuitan API. */
              sku_name: string;
              /** The properties value value returned by the Jushuitan API. */
              properties_value: string;
              /** The qty value returned by the Jushuitan API. */
              qty: number;
              /** The lock qty value returned by the Jushuitan API. */
              lock_qty: number;
              /** The target lwh lockable qty value returned by the Jushuitan API. */
              target_lwh_lockable_qty: number;
              /** The pick able qty value returned by the Jushuitan API. */
              pick_able_qty: number;
              /** The public qty value returned by the Jushuitan API. */
              public_qty: number;
              /** The cost price value returned by the Jushuitan API. */
              cost_price: number;
              [key: string]: unknown;
            }>;
            /** The type value returned by the Jushuitan API. */
            type: string;
            /** The online sales-order identifier. */
            so_id: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** The response message value returned by the Jushuitan API. */
        msg?: unknown;
        /** The request identifier assigned by Jushuitan. */
        request_id?: unknown;
        [key: string]: unknown;
      };
    };
    /** List virtual warehouses available to the merchant. */
    "jushuitan.list_virtual_warehouses": {
      input: Record<string, never>;
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: number;
        /** The response message returned by Jushuitan. */
        msg: string;
        /** The data value returned by the Jushuitan API. */
        data: Array<{
          /** The lwh id value returned by the Jushuitan API. */
          lwh_id: number;
          /** The name value returned by the Jushuitan API. */
          name: string;
          /** The mnemonic value returned by the Jushuitan API. */
          mnemonic?: string;
          /** The flag value returned by the Jushuitan API. */
          flag?: string;
          /** The bind wms value returned by the Jushuitan API. */
          bind_wms?: Array<{
            /** The Jushuitan warehouse-company identifier. */
            wms_co_id?: number;
            /** The wms name value returned by the Jushuitan API. */
            wms_name?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List warehouses available to the authorized merchant account. */
    "jushuitan.list_warehouses": {
      input: {
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        page_index?: number;
        /**
         * The number of records per page. Defaults to 30.
         * @minimum 1
         */
        page_size?: number;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The total number of matching records. */
          data_count?: number;
          /** The total number of available pages. */
          page_count?: number;
          /** Whether another page is available after this page. */
          has_next?: boolean;
          /** The one-based page number. */
          page_index?: number;
          /** The number of records per page. */
          page_size?: number;
          /** The business records returned in this response. */
          datas?: Array<{
            /** The warehouse name. */
            name?: string;
            /** The Jushuitan ERP company identifier. */
            co_id?: number;
            /** The Jushuitan warehouse-company identifier. */
            wms_co_id?: number;
            /** Whether this is the merchant's main warehouse. */
            is_main?: boolean;
            /** The warehouse status. */
            status?: string;
            /** The partner's warehouse remark. */
            remark1?: string;
            /** The merchant's warehouse remark. */
            remark2?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List WMS inbound and outbound stock movement records. */
    "jushuitan.list_wms_stock_movements": {
      input: {
        /**
         * The one-based page number, up to page 800.
         * @minimum 1
         * @maximum 800
         */
        page_index?: number;
        /**
         * The number of records per page, up to 50.
         * @minimum 1
         * @maximum 50
         */
        page_size?: number;
        /** The start time value accepted by the Jushuitan API. */
        start_time?: string;
        /** The end time value accepted by the Jushuitan API. */
        end_time?: string;
        /** The date field used by the time filter: 0 modified, 1 document date, or 2 stock-movement time. Defaults to 0. */
        date_type?: number;
        /** The type value accepted by the Jushuitan API. */
        type?: string;
        /** The Jushuitan warehouse-company identifier. */
        wms_co_id?: number;
      };
      output: {
        /** The business records returned in this response. */
        datas?: {
          /** The Jushuitan ERP company identifier. */
          co_id?: number;
          /** The Jushuitan warehouse-company identifier. */
          wms_co_id?: number;
          /** The warehouse type: 1 main, 2 sales return, 3 purchasing, or 4 defective goods. */
          wh_id?: number;
          /** For transfers, the linked source or destination warehouse type: 1 main, 2 sales return, 3 purchasing, or 4 defective goods. */
          link_wh_id?: number;
          /** The link io id value returned by the Jushuitan API. */
          link_io_id?: number;
          /** The Jushuitan shop identifier. */
          shop_id?: number;
          /** The Jushuitan inbound or outbound document identifier. */
          io_id?: number;
          /** The internal Jushuitan order identifier. */
          o_id?: number;
          /** The created value returned by the Jushuitan API. */
          created?: string;
          /** The modified value returned by the Jushuitan API. */
          modified?: string;
          /** The io date value returned by the Jushuitan API. */
          io_date?: string;
          /** The supplier id value returned by the Jushuitan API. */
          supplier_id?: number;
          /** The status value returned by the Jushuitan API. */
          status?: string;
          /** The stock enabled value returned by the Jushuitan API. */
          stock_enabled?: string;
          /** The weight value returned by the Jushuitan API. */
          weight?: number;
          /** The f weight value returned by the Jushuitan API. */
          f_weight?: number;
          /** The drp co name value returned by the Jushuitan API. */
          drp_co_name?: string;
          /** The remark value returned by the Jushuitan API. */
          remark?: string;
          /** The items value returned by the Jushuitan API. */
          items?: {
            /** The ioi id value returned by the Jushuitan API. */
            ioi_id?: number;
            /** The merchant SKU identifier in Jushuitan. */
            sku_id?: string;
            /** The qty value returned by the Jushuitan API. */
            qty?: number;
            /** The properties value value returned by the Jushuitan API. */
            properties_value?: string;
            /** The r qty value returned by the Jushuitan API. */
            r_qty?: number;
            /** The qty type value returned by the Jushuitan API. */
            qty_type?: number;
            [key: string]: unknown;
          };
          /** The type value returned by the Jushuitan API. */
          type?: string;
          [key: string]: unknown;
        };
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The issuccess value returned by the Jushuitan API. */
        issuccess?: string;
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** Whether another page is available after this page. */
        has_next?: boolean;
        /** The total number of available pages. */
        page_count?: number;
        /** The total number of matching records. */
        data_count?: number;
        /** The one-based page number. */
        page_index?: number;
        /** The number of records per page. */
        page_size?: number;
        [key: string]: unknown;
      };
    };
    /** List WMS work logs for authorized warehouses. */
    "jushuitan.list_wms_work_logs": {
      input: {
        /** The sku ids value accepted by the Jushuitan API. */
        sku_ids?: Array<string>;
        /** The types value accepted by the Jushuitan API. */
        types?: Array<string>;
        /**
         * The zero-based page number.
         * @minimum 0
         */
        page_num?: number;
        /**
         * The number of records per page, up to 50.
         * @minimum 1
         * @maximum 50
         */
        page_size?: number;
        /** The created date start value accepted by the Jushuitan API. */
        created_date_start: string;
        /** The end of the log creation-time range. The default range covers the previous day. */
        created_date_end: string;
        /** The owner co id value accepted by the Jushuitan API. */
        owner_co_id?: number;
      };
      output: {
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: string;
        /** The request identifier assigned by Jushuitan. */
        request_id?: string;
        /** The data value returned by the Jushuitan API. */
        data?: Array<{
          /** The creator value returned by the Jushuitan API. */
          creator?: string;
          /** The pack id value returned by the Jushuitan API. */
          pack_id?: string;
          /** The created value returned by the Jushuitan API. */
          created?: string;
          /** The bin value returned by the Jushuitan API. */
          bin?: string;
          /** The autoid value returned by the Jushuitan API. */
          autoid?: string;
          /** The Jushuitan ERP company identifier. */
          co_id?: number;
          /** The merchant SKU identifier in Jushuitan. */
          sku_id?: string;
          /** The remark value returned by the Jushuitan API. */
          remark?: string;
          /** The type value returned by the Jushuitan API. */
          type?: string;
          /** The id1 value returned by the Jushuitan API. */
          id1?: string;
          /** The id2 value returned by the Jushuitan API. */
          id2?: string;
          /** The qty value returned by the Jushuitan API. */
          qty?: string;
          /** The owner co id value returned by the Jushuitan API. */
          owner_co_id?: number;
          /** The s2 value returned by the Jushuitan API. */
          s2?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Move orders into the exception-order workflow. */
    "jushuitan.mark_orders_exception": {
      input: {
        /**
         * The o ids value accepted by the Jushuitan API.
         * @maxItems 50
         */
        o_ids?: Array<number>;
        /**
         * Online order numbers. Supply either this list or o_ids; at most 50 values are accepted.
         * @maxItems 50
         */
        so_ids?: Array<string>;
        /** The operator recorded in the order log. Defaults to open. */
        channel?: string;
        /** The question type value accepted by the Jushuitan API. */
        question_type: string;
        /** The question desc value accepted by the Jushuitan API. */
        question_desc?: string;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The success value returned by the Jushuitan API. */
          success?: number;
          /** The fail value returned by the Jushuitan API. */
          fail?: number;
          /** The response message value returned by the Jushuitan API. */
          message?: Array<{
            /** The id value returned by the Jushuitan API. */
            id: number;
            /** The response message returned by Jushuitan. */
            msg: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** The response message value returned by the Jushuitan API. */
        msg?: unknown;
        /** The request identifier assigned by Jushuitan. */
        request_id?: unknown;
        [key: string]: unknown;
      };
    };
    /** Mark orders as shipped and submit their shipment details. */
    "jushuitan.mark_orders_shipped": {
      input: {
        /** The items value accepted by the Jushuitan API. */
        items: Array<{
          /** The internal Jushuitan order identifier. */
          o_id: number;
          /** The Jushuitan shop identifier. */
          shop_id: number;
          /** The online sales-order identifier. */
          so_id: string;
          /** The lc name value accepted by the Jushuitan API. */
          lc_name: string;
          /** The tracking number; for cross-border logistics, pass the international waybill number. */
          l_id: string;
          /** Whether duplicate tracking numbers are allowed. Defaults to false. */
          send_by_used_lid?: boolean;
          /** The lc id value accepted by the Jushuitan API. */
          lc_id: string;
          /** Whether this is cross-border logistics. When true, tracking channel information is required. */
          is_un_lid?: boolean;
          /** The tracking code value accepted by the Jushuitan API. */
          tracking_code?: string;
          /** The tracking info value accepted by the Jushuitan API. */
          tracking_info?: string;
          /** The freight-forwarder identifier. Use 1000 as the default. */
          tracking_type?: number;
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The issuccess value returned by the Jushuitan API. */
        issuccess?: boolean;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Record packing details for a shipment. */
    "jushuitan.pack_shipment": {
      input: {
        /** The Jushuitan inbound or outbound document identifier. */
        io_id: number;
        /** The lid value accepted by the Jushuitan API. */
        lid: string;
        /** The detail value accepted by the Jushuitan API. */
        detail: Array<{
          /** The merchant SKU identifier in Jushuitan. */
          sku_id: string;
          /** The qty value accepted by the Jushuitan API. */
          qty: number;
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The Jushuitan inbound or outbound document identifier. */
          io_id?: number;
          /** The internal Jushuitan order identifier. */
          o_id?: number;
          /** The lc l id value returned by the Jushuitan API. */
          lc_l_id?: string;
          /** The logistics company value returned by the Jushuitan API. */
          logistics_company?: string;
          /** The inout qty value returned by the Jushuitan API. */
          inout_qty?: number;
          /** The Jushuitan shop identifier. */
          shop_id?: number;
          /** The shop buyer id value returned by the Jushuitan API. */
          shop_buyer_id?: unknown;
          /** The total packed qty value returned by the Jushuitan API. */
          total_packed_qty?: number;
          /** The pack ids value returned by the Jushuitan API. */
          pack_ids?: Array<string>;
          /** The Jushuitan ERP company identifier. */
          co_id?: number;
          /** The packing error. A non-empty value indicates packing failed even when the response code is 0. */
          error?: string;
          [key: string]: unknown;
        };
        /** The response message value returned by the Jushuitan API. */
        msg?: unknown;
        /** The msg type value returned by the Jushuitan API. */
        msg_type?: string;
        [key: string]: unknown;
      };
    };
    /** Recalculate inventory reservations for a picking wave. */
    "jushuitan.recalculate_wave_inventory_reservation": {
      input: {
        /**
         * The wave ids value accepted by the Jushuitan API.
         * @maxItems 50
         */
        wave_ids: Array<number>;
      };
      output: {
        /** The data value returned by the Jushuitan API. */
        data?: Array<{
          /** The wave id value returned by the Jushuitan API. */
          wave_id?: number;
          /** The bin value returned by the Jushuitan API. */
          bin?: string;
          /** The status value returned by the Jushuitan API. */
          status?: string;
          [key: string]: unknown;
        }>;
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: string;
        /** The issuccess value returned by the Jushuitan API. */
        issuccess?: string;
        /** The response message returned by Jushuitan. */
        msg?: string;
        [key: string]: unknown;
      };
    };
    /** Record arrival of fast-moving products in the WMS workflow. */
    "jushuitan.record_fast_moving_arrival": {
      input: {
        /** The sku sn value accepted by the Jushuitan API. */
        sku_sn: string;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: string;
        /** The issuccess value returned by the Jushuitan API. */
        issuccess: string;
        /** The response message returned by Jushuitan. */
        msg: string;
        /** The data value returned by the Jushuitan API. */
        data: {
          /** The label status: valid, voided, or not a fast-moving label. */
          Status: string;
          /** The PKey value returned by the Jushuitan API. */
          PKey: string;
          /** The Area value returned by the Jushuitan API. */
          Area: string;
          /** The AreaBin value returned by the Jushuitan API. */
          AreaBin: string;
          /** The ArriveNum value returned by the Jushuitan API. */
          ArriveNum: number;
          /** The number of valid labels that have not arrived. */
          UnArriveNum: number;
          /** The LogisticsCompany value returned by the Jushuitan API. */
          LogisticsCompany: string;
          /** The MinPurchaseDate value returned by the Jushuitan API. */
          MinPurchaseDate: string;
          /** The IsArrive value returned by the Jushuitan API. */
          IsArrive: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Register express shipment records in batches. */
    "jushuitan.register_express_shipments": {
      input: {
        /**
         * The business parameters used to register express shipment records in batches.
         * @minItems 1
         */
        items: Array<{
          /** The l id value accepted by the Jushuitan API. */
          l_id: string;
          /** The l name value accepted by the Jushuitan API. */
          l_name: string;
          /** The warehouseRemark value accepted by the Jushuitan API. */
          warehouseRemark?: string;
          /** The registering user's ERP user identifier, not their name. If the identifier does not exist in ERP user permissions, no creator is recorded. */
          creator?: number;
          /** The received parcel weight, rounded to four decimal places when necessary. */
          weight?: number;
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Create or update mappings for products sourced from 1688. */
    "jushuitan.save_1688_product_mapping": {
      input: {
        /**
         * The business parameters used to create or update mappings for products sourced from 1688.
         * @minItems 1
         */
        items: Array<{
          /** The merchant SKU identifier in Jushuitan. */
          sku_id: string;
          /** The supplier id value accepted by the Jushuitan API. */
          supplier_id: number;
          /** The plat offer id value accepted by the Jushuitan API. */
          plat_offer_id: string;
          /** The plat spec id value accepted by the Jushuitan API. */
          plat_spec_id?: string;
          /** The plat sku id value accepted by the Jushuitan API. */
          plat_sku_id: string;
          /** The url value accepted by the Jushuitan API. */
          url?: string;
          /** The plat p v value accepted by the Jushuitan API. */
          plat_p_v: string;
          /** The name value accepted by the Jushuitan API. */
          name: string;
          /** The pic value accepted by the Jushuitan API. */
          pic: string;
          /** The min order qty value accepted by the Jushuitan API. */
          min_order_qty: number;
          /** The member id value accepted by the Jushuitan API. */
          member_id: string;
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The Jushuitan response code; zero indicates a successful request. */
          code?: number;
          /** The response message returned by Jushuitan. */
          msg?: string;
          /** The data value returned by the Jushuitan API. */
          data?: unknown;
          [key: string]: unknown;
        };
        /** The response message value returned by the Jushuitan API. */
        msg?: unknown;
        /** The request identifier assigned by Jushuitan. */
        request_id?: unknown;
        /** The success value returned by the Jushuitan API. */
        success?: boolean;
        [key: string]: unknown;
      };
    };
    /** Save a packing-machine video record for a package or shipment. */
    "jushuitan.save_packing_video_record": {
      input: {
        /** Outbound document identifiers. Supply this field or l_ids. */
        io_ids?: string;
        /** Tracking numbers. Supply this field or io_ids. */
        l_ids?: string;
        /** The vedio duration value accepted by the Jushuitan API. */
        vedio_duration: number;
        /** The d ids value accepted by the Jushuitan API. */
        d_ids: string;
        /** The packing operation, such as single-item checking, continuous single-item checking, multi-item checking, shipment packing, weighing, fast-moving shipment, or packing registration. */
        operation: string;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: string;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The request identifier assigned by Jushuitan. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Create or update product categories in Jushuitan. */
    "jushuitan.save_product_categories": {
      input: {
        /** The c name value accepted by the Jushuitan API. */
        c_name: string;
        /** The parent c id value accepted by the Jushuitan API. */
        parent_c_id?: number;
        /** The c id value accepted by the Jushuitan API. */
        c_id?: number;
        /** The sort value accepted by the Jushuitan API. */
        sort?: number;
        /** The is pv value accepted by the Jushuitan API. */
        is_pv?: boolean;
        /** The pv names value accepted by the Jushuitan API. */
        pv_names?: Array<string>;
        /** Whether the category is enabled. Omit this field to leave the existing state unchanged. */
        enable?: boolean;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: string;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The c id value returned by the Jushuitan API. */
          c_id?: number;
          /** The parent c id value returned by the Jushuitan API. */
          parent_c_id: number;
          [key: string]: unknown;
        };
        /** The request identifier assigned by Jushuitan. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Create or modify supplier relationships for products. */
    "jushuitan.save_product_suppliers": {
      input: {
        /** The supplier id value accepted by the Jushuitan API. */
        supplier_id: number;
        /** The i id value accepted by the Jushuitan API. */
        i_id: string;
        /** The merchant SKU identifier in Jushuitan. */
        sku_id: string;
        /** The supplier sku id value accepted by the Jushuitan API. */
        supplier_sku_id?: string;
        /** The supplier i id value accepted by the Jushuitan API. */
        supplier_i_id?: string;
        /** The cost price value accepted by the Jushuitan API. */
        cost_price?: number;
        /** The purchase url value accepted by the Jushuitan API. */
        purchase_url?: string;
        /** The delivery day value accepted by the Jushuitan API. */
        delivery_day?: number;
        /** The pack qty value accepted by the Jushuitan API. */
        pack_qty?: number;
        /** The remark value accepted by the Jushuitan API. */
        remark?: string;
        /** Whether this supplier relation is the default: true sets it as default, false removes the default, and omission leaves it unchanged. */
        is_default?: boolean;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: string;
        /** The response message returned by Jushuitan. */
        msg: string;
        /** The request identifier assigned by Jushuitan. */
        request_id: string;
        [key: string]: unknown;
      };
    };
    /** Create or update ordinary product records in batches using the current API. */
    "jushuitan.save_products_batch": {
      input: {
        /** Whether existing products may be updated. Defaults to true; false skips an existing row. */
        is_update?: boolean;
        /** Whether to append product labels. Defaults to true; false replaces the complete label set. */
        is_add_labels?: boolean;
        /** Whether to append auxiliary codes. Defaults to true; false replaces the complete auxiliary-code set. */
        is_add_other_code?: boolean;
        /** Whether to overwrite model-level fields. Defaults to true, which copies the first SKU's maintained values to the model when it has multiple SKUs; false preserves existing model fields. */
        is_over_item?: boolean;
        /**
         * The items value accepted by the Jushuitan API.
         * @maxItems 500
         */
        items: Array<{
          /** The i id value accepted by the Jushuitan API. */
          i_id: string;
          /** The merchant SKU identifier in Jushuitan. */
          sku_id: string;
          /** The batch enabled value accepted by the Jushuitan API. */
          batch_enabled?: boolean;
          /** The is series number value accepted by the Jushuitan API. */
          is_series_number?: boolean;
          /** The shelf life value accepted by the Jushuitan API. */
          shelf_life?: number;
          /** The hand day value accepted by the Jushuitan API. */
          hand_day?: number;
          /** The reject lifecycle value accepted by the Jushuitan API. */
          reject_lifecycle?: number;
          /** The lockup lifecycle value accepted by the Jushuitan API. */
          lockup_lifecycle?: number;
          /** The advent lifecycle value accepted by the Jushuitan API. */
          advent_lifecycle?: number;
          /** The production licence value accepted by the Jushuitan API. */
          production_licence?: string;
          /** The labels value accepted by the Jushuitan API. */
          labels?: Array<string>;
          /** The remove labels value accepted by the Jushuitan API. */
          remove_labels?: Array<string>;
          /** The category propertys value accepted by the Jushuitan API. */
          category_propertys?: {
            /** The 111 value accepted by the Jushuitan API. */
            "111"?: string;
            /** The 222 value accepted by the Jushuitan API. */
            "222"?: string;
          };
          /** The remark value accepted by the Jushuitan API. */
          remark?: string;
          /** The supplier i id value accepted by the Jushuitan API. */
          supplier_i_id?: string;
          /** The sku code value accepted by the Jushuitan API. */
          sku_code?: string;
          /** The name value accepted by the Jushuitan API. */
          name?: string;
          /** The other1 value accepted by the Jushuitan API. */
          other1?: string;
          /** The other2 value accepted by the Jushuitan API. */
          other2?: string;
          /** The other3 value accepted by the Jushuitan API. */
          other3?: string;
          /** The other4 value accepted by the Jushuitan API. */
          other4?: string;
          /** The other5 value accepted by the Jushuitan API. */
          other5?: string;
          /** The other6 value accepted by the Jushuitan API. */
          other6?: string;
          /** The other7 value accepted by the Jushuitan API. */
          other7?: string;
          /** The other8 value accepted by the Jushuitan API. */
          other8?: string;
          /** The other9 value accepted by the Jushuitan API. */
          other9?: string;
          /** The other10 value accepted by the Jushuitan API. */
          other10?: string;
          /** The unit value accepted by the Jushuitan API. */
          unit?: string;
          /** The supplier sku id value accepted by the Jushuitan API. */
          supplier_sku_id?: string;
          /** The market price value accepted by the Jushuitan API. */
          market_price?: string;
          /** The weight value accepted by the Jushuitan API. */
          weight?: string;
          /** The l value accepted by the Jushuitan API. */
          l?: number;
          /** The w value accepted by the Jushuitan API. */
          w?: number;
          /** The h value accepted by the Jushuitan API. */
          h?: number;
          /** The brand value accepted by the Jushuitan API. */
          brand?: string;
          /** The sale price value accepted by the Jushuitan API. */
          sale_price?: string;
          /** The cost price value accepted by the Jushuitan API. */
          cost_price?: string;
          /** The fj price rate value accepted by the Jushuitan API. */
          fj_price_rate?: number;
          /** The short name value accepted by the Jushuitan API. */
          short_name?: string;
          /** The properties value value accepted by the Jushuitan API. */
          properties_value?: string;
          /** The supplier name value accepted by the Jushuitan API. */
          supplier_name?: string;
          /** The purchase price value accepted by the Jushuitan API. */
          purchase_price?: number;
          /** The vc name value accepted by the Jushuitan API. */
          vc_name?: string;
          /** The other code value accepted by the Jushuitan API. */
          other_code?: string;
          /** The category value accepted by the Jushuitan API. */
          category?: string;
          /** The item type value accepted by the Jushuitan API. */
          item_type?: string;
          /** The product status. Defaults to 1; -1 is disabled, 0 standby, and 1 enabled. */
          enabled?: number;
          /** The other price1 value accepted by the Jushuitan API. */
          other_price1?: number;
          /** The other price2 value accepted by the Jushuitan API. */
          other_price2?: number;
          /** The other price3 value accepted by the Jushuitan API. */
          other_price3?: number;
          /** The other price4 value accepted by the Jushuitan API. */
          other_price4?: number;
          /** The other price5 value accepted by the Jushuitan API. */
          other_price5?: number;
          /** Whether inventory synchronization is prohibited: true prohibits synchronization and false allows it. */
          stock_disabled?: boolean;
          /** The pic value accepted by the Jushuitan API. */
          pic?: string;
          /** The pic big value accepted by the Jushuitan API. */
          pic_big?: string;
          /** The item pic value accepted by the Jushuitan API. */
          item_pic?: string;
          /**
           * The pics value accepted by the Jushuitan API.
           * @maxItems 10
           */
          pics?: Array<string>;
          /** The manufacturing enterprise value accepted by the Jushuitan API. */
          manufacturing_enterprise?: string;
          /** The registration certificate no value accepted by the Jushuitan API. */
          registration_certificate_no?: string;
          /** The batch format value accepted by the Jushuitan API. */
          batch_format?: string;
          /** The expiration date value accepted by the Jushuitan API. */
          expiration_date?: string;
          /** The batch end format value accepted by the Jushuitan API. */
          batch_end_format?: string;
          /** The storeage value accepted by the Jushuitan API. */
          storeage?: string;
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: Array<{
          /** The merchant SKU identifier in Jushuitan. */
          sku_id: string;
          /** The response message returned by Jushuitan. */
          message: string;
          [key: string]: unknown;
        }>;
        /** The response message value returned by the Jushuitan API. */
        msg?: unknown;
        /** The request identifier assigned by Jushuitan. */
        request_id?: unknown;
        [key: string]: unknown;
      };
    };
    /** Create or update a virtual-warehouse purchase request. */
    "jushuitan.save_virtual_warehouse_purchase_request": {
      input: {
        /** The virtual-warehouse purchase-request identifier, required when updating an existing request. */
        lp_id?: string;
        /** The lwh id value accepted by the Jushuitan API. */
        lwh_id: string;
        /** The Jushuitan warehouse-company identifier. */
        wms_co_id: string;
        /** The remarks value accepted by the Jushuitan API. */
        remarks?: string;
        /** The items value accepted by the Jushuitan API. */
        items: Array<{
          /** The merchant SKU identifier in Jushuitan. */
          sku_id: string;
          /** The qty value accepted by the Jushuitan API. */
          qty: string;
          /** The remark value accepted by the Jushuitan API. */
          remark?: string;
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: number;
        /** The response message returned by Jushuitan. */
        msg: string;
        /** The data value returned by the Jushuitan API. */
        data: {
          /** The lp id value returned by the Jushuitan API. */
          lp_id: string;
          /** The is success value returned by the Jushuitan API. */
          is_success: boolean;
          /** The response message returned by Jushuitan. */
          msg: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Set labels on after-sale documents. */
    "jushuitan.set_after_sale_labels": {
      input: {
        /** The as ids value accepted by the Jushuitan API. */
        as_ids: Array<number>;
        /** The labels value accepted by the Jushuitan API. */
        labels: Array<string>;
        /** The remove value accepted by the Jushuitan API. */
        remove: boolean;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The success value returned by the Jushuitan API. */
          success: Array<{
            /** The as id value returned by the Jushuitan API. */
            as_id: number;
            /** The outer as id value returned by the Jushuitan API. */
            outer_as_id: string;
            /** The Jushuitan response code; zero indicates a successful request. */
            code: number;
            /** The response message value returned by the Jushuitan API. */
            message: unknown;
            /** The details value returned by the Jushuitan API. */
            details: unknown;
            /** The is success value returned by the Jushuitan API. */
            is_success: boolean;
            [key: string]: unknown;
          }>;
          /** The fail value returned by the Jushuitan API. */
          fail: Array<{
            /** The as id value returned by the Jushuitan API. */
            as_id: number;
            /** The outer as id value returned by the Jushuitan API. */
            outer_as_id: unknown;
            /** The Jushuitan response code; zero indicates a successful request. */
            code: number;
            /** The response message returned by Jushuitan. */
            message: string;
            /** The details value returned by the Jushuitan API. */
            details: unknown;
            /** The is success value returned by the Jushuitan API. */
            is_success: boolean;
            [key: string]: unknown;
          }>;
          /** The success count value returned by the Jushuitan API. */
          success_count?: number;
          /** The fail count value returned by the Jushuitan API. */
          fail_count?: number;
          [key: string]: unknown;
        };
        /** The response message value returned by the Jushuitan API. */
        msg?: unknown;
        [key: string]: unknown;
      };
    };
    /** Complete shipment for sales outbound documents. */
    "jushuitan.ship_sales_outbounds": {
      input: {
        /**
         * The business parameters used to complete shipment for sales outbound documents.
         * @minItems 1
         */
        items: Array<{
          /** The Jushuitan inbound or outbound document identifier. */
          io_id: number;
          /**
           * The logistics-company name, up to 30 characters.
           * @maxLength 30
           */
          lc_name: string;
          /**
           * The tracking number, up to 50 characters. For cross-border logistics, pass the international waybill number.
           * @maxLength 50
           */
          l_id: string;
          /** The lc id value accepted by the Jushuitan API. */
          lc_id: string;
          /** The Jushuitan warehouse-company identifier. */
          wms_co_id?: number;
          /** Whether this is cross-border logistics. When true, tracking channel information is required. */
          is_un_lid?: boolean;
          /** The tracking code value accepted by the Jushuitan API. */
          tracking_code?: string;
          /** The tracking info value accepted by the Jushuitan API. */
          tracking_info?: string;
          /** The freight-forwarder identifier. Use 1000 as the default. */
          tracking_type?: number;
          /** The items value accepted by the Jushuitan API. */
          items?: Array<{
            /** The merchant SKU identifier in Jushuitan. */
            sku_id?: string;
            /** The sn list value accepted by the Jushuitan API. */
            sn_list?: Array<string>;
            /** The sn exts value accepted by the Jushuitan API. */
            sn_exts?: Array<{
              /** The sn value accepted by the Jushuitan API. */
              sn?: string;
              /** The imei value accepted by the Jushuitan API. */
              imei?: string;
              /** The batch identifier. For merchants without fine-grained or production-batch management, it takes effect only when writing batch data to tracking information is enabled. */
              batch_id?: string;
              /** The produced date value accepted by the Jushuitan API. */
              produced_date?: string;
              /** The expiration date value accepted by the Jushuitan API. */
              expiration_date?: string;
            }>;
            /** The batch list value accepted by the Jushuitan API. */
            batch_list?: Array<{
              /** The batch id value accepted by the Jushuitan API. */
              batch_id: string;
              /** The produced date value accepted by the Jushuitan API. */
              produced_date: string;
              /** The expiration date value accepted by the Jushuitan API. */
              expiration_date: string;
              /** The qty value accepted by the Jushuitan API. */
              qty: number;
              /** The ioi id value accepted by the Jushuitan API. */
              ioi_id: number;
            }>;
          }>;
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The data value returned by the Jushuitan API. */
          data?: Array<{
            /** The response message returned by Jushuitan. */
            msg?: string;
            /** The issuccess value returned by the Jushuitan API. */
            issuccess?: boolean;
            /** The internal Jushuitan order identifier. */
            o_id?: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Split an order into separate fulfillment orders. */
    "jushuitan.split_order": {
      input: {
        /** The internal Jushuitan order identifier. */
        o_id: string;
        /** The split infos value accepted by the Jushuitan API. */
        split_infos: Array<Array<{
          /** The oi id value accepted by the Jushuitan API. */
          oi_id: string;
          /** The qty value accepted by the Jushuitan API. */
          qty: number;
        }>>;
      };
      output: {
        /** The data value returned by the Jushuitan API. */
        data: Array<number>;
        /** The Jushuitan response code; zero indicates a successful request. */
        code: string;
        /** The issuccess value returned by the Jushuitan API. */
        issuccess: string;
        /** The response message returned by Jushuitan. */
        msg: string;
        [key: string]: unknown;
      };
    };
    /** Unbind outbound documents from a seeding cart. */
    "jushuitan.unbind_outbound_from_seeding_cart": {
      input: {
        /** The carry id value accepted by the Jushuitan API. */
        carry_id: string;
        /** The is append jb cc value accepted by the Jushuitan API. */
        is_append_jb_cc: boolean;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: number;
        /** The response message returned by Jushuitan. */
        msg: string;
        /** The data value returned by the Jushuitan API. */
        data: boolean;
        [key: string]: unknown;
      };
    };
    /** Unbind a picking or seeding cart from a wave. */
    "jushuitan.unbind_wave_cart": {
      input: {
        /** The carry ids value accepted by the Jushuitan API. */
        carry_ids: Array<string>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: number;
        /** The data value returned by the Jushuitan API. */
        data: {
          /** The is success value returned by the Jushuitan API. */
          is_success: boolean;
          /** The response message returned by Jushuitan. */
          msg: string;
          [key: string]: unknown;
        };
        /** The response message returned by Jushuitan. */
        msg: string;
        [key: string]: unknown;
      };
    };
    /** Reverse cancellation for eligible orders. */
    "jushuitan.uncancel_orders": {
      input: {
        /**
         * Internal order identifiers, up to 50 per request.
         * @maxItems 50
         */
        order_ids: Array<number>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: Array<{
          /** The order id value returned by the Jushuitan API. */
          order_id: number;
          /** The success value returned by the Jushuitan API. */
          success: boolean;
          /** The response message returned by Jushuitan. */
          message: string;
          [key: string]: unknown;
        }>;
        /** The response message value returned by the Jushuitan API. */
        msg?: unknown;
        /** The request identifier assigned by Jushuitan. */
        request_id?: unknown;
        [key: string]: unknown;
      };
    };
    /** Reverse confirmation of an after-sale document. */
    "jushuitan.unconfirm_after_sale": {
      input: {
        /** The as ids value accepted by the Jushuitan API. */
        as_ids: Array<number>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The success value returned by the Jushuitan API. */
          success?: Array<{
            /** The as id value returned by the Jushuitan API. */
            as_id: number;
            /** The outer as id value returned by the Jushuitan API. */
            outer_as_id: string;
            /** The response message returned by Jushuitan. */
            message: string;
            /** The details value returned by the Jushuitan API. */
            details: string;
            /** The is success value returned by the Jushuitan API. */
            is_success: boolean;
            [key: string]: unknown;
          }>;
          /** The fail value returned by the Jushuitan API. */
          fail?: Array<{
            /** The as id value returned by the Jushuitan API. */
            as_id: number;
            /** The outer as id value returned by the Jushuitan API. */
            outer_as_id: string;
            /** The response message returned by Jushuitan. */
            message: string;
            /** The details value returned by the Jushuitan API. */
            details: string;
            /** The is success value returned by the Jushuitan API. */
            is_success: boolean;
            [key: string]: unknown;
          }>;
          /** The success count value returned by the Jushuitan API. */
          success_count?: number;
          /** The fail count value returned by the Jushuitan API. */
          fail_count?: number;
          [key: string]: unknown;
        };
        /** The response message returned by Jushuitan. */
        msg?: string;
        [key: string]: unknown;
      };
    };
    /** Update cross-border forwarding and logistics information for an order. */
    "jushuitan.update_cross_border_order_forwarding": {
      input: {
        /** The items value accepted by the Jushuitan API. */
        items: Array<{
          /** The Jushuitan shop identifier. */
          shop_id: string;
          /** The internal Jushuitan order identifier. */
          o_id: string;
          /** The online sales-order identifier. */
          so_id: string;
          /** The tracking channel type. Defaults to 1000. */
          tracking_type?: number;
          /** The tracking channel code. It defaults to the open-platform channel and is saved only when tracking_no is provided. */
          tracking_code?: string;
          /** The tracking info value accepted by the Jushuitan API. */
          tracking_info?: string;
          /** The l id value accepted by the Jushuitan API. */
          l_id?: string;
          /** The lc code value accepted by the Jushuitan API. */
          lc_code?: string;
          /** The shipping-label PDF URL. This is required when the label will be printed in Jushuitan ERP. */
          pdf_url?: string;
          /** The tracking no value accepted by the Jushuitan API. */
          tracking_no?: string;
        }>;
      };
      output: {
        /** The data value returned by the Jushuitan API. */
        data?: string;
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The issuccess value returned by the Jushuitan API. */
        issuccess?: boolean;
        /** The response message returned by Jushuitan. */
        msg?: string;
        [key: string]: unknown;
      };
    };
    /** Write back the last-mile shipping fee for a cross-border shipment. */
    "jushuitan.update_last_mile_shipping_fee": {
      input: {
        /** The order id value accepted by the Jushuitan API. */
        order_id: number;
        /** The sale order id value accepted by the Jushuitan API. */
        sale_order_id: string;
        /** The currency value accepted by the Jushuitan API. */
        currency: string;
        /** The amount value accepted by the Jushuitan API. */
        amount: number;
        /** The outerwms weight value accepted by the Jushuitan API. */
        outerwms_weight?: number;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data: boolean;
        /** The response message value returned by the Jushuitan API. */
        msg?: unknown;
        /** The request identifier assigned by Jushuitan. */
        request_id?: unknown;
        [key: string]: unknown;
      };
    };
    /** Update invoice information attached to an order. */
    "jushuitan.update_order_invoice": {
      input: {
        /** The bu value accepted by the Jushuitan API. */
        bu: string;
        /** The invoices value accepted by the Jushuitan API. */
        invoices: Array<{
          /**
           * The bank account number, up to 50 characters.
           * @maxLength 50
           */
          account?: string;
          /**
           * The invoice address, up to 500 characters.
           * @maxLength 500
           */
          address?: string;
          /**
           * The bank name, up to 50 characters.
           * @maxLength 50
           */
          bank?: string;
          /**
           * The buyer tax identifier, up to 25 characters.
           * @maxLength 25
           */
          buyerTaxNo?: string;
          /**
           * The invoice email, up to 100 characters.
           * @maxLength 100
           */
          email?: string;
          /** The invoiceAmount value accepted by the Jushuitan API. */
          invoiceAmount?: number;
          /** The invoice kind: electronic ordinary, paper ordinary, paper VAT, electronic VAT, fully digital ordinary, or fully digital VAT. */
          invoiceKind?: string;
          /**
           * The invoice title, up to 50 characters.
           * @maxLength 50
           */
          invoiceTitle: string;
          /**
           * The invoice telephone, up to 50 characters.
           * @maxLength 50
           */
          phone?: string;
          /** The shopId value accepted by the Jushuitan API. */
          shopId: number;
          /**
           * The online order number, up to 50 characters.
           * @maxLength 50
           */
          soId: string;
          /** The titleType value accepted by the Jushuitan API. */
          titleType?: string;
          /**
           * The contact address, up to 500 characters.
           * @maxLength 500
           */
          userAddress?: string;
          /**
           * The contact name, up to 50 characters.
           * @maxLength 50
           */
          userName?: string;
          /**
           * The contact telephone, up to 50 characters.
           * @maxLength 50
           */
          userPhone?: string;
          /** The invoiceType value accepted by the Jushuitan API. */
          invoiceType?: string;
          /** The application time, for example 2025-12-10 15:02:55. */
          applyTime?: string;
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: number;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The errors dic value returned by the Jushuitan API. */
          errors_dic?: unknown;
          [key: string]: unknown;
        };
        /** The response message value returned by the Jushuitan API. */
        msg?: unknown;
        /** The request identifier assigned by Jushuitan. */
        request_id?: unknown;
        [key: string]: unknown;
      };
    };
    /** Add or remove labels on orders. */
    "jushuitan.update_order_labels": {
      input: {
        /** The internal Jushuitan order identifier. Supply either this field or the shop_id and so_id pair. */
        o_id?: number;
        /** The Jushuitan shop identifier. */
        shop_id?: number;
        /** The online sales-order identifier. */
        so_id?: string;
        /**
         * The labels to add or remove. Supply 1 to 19 unique labels, each 1 to 10 characters long.
         * @minItems 1
         * @maxItems 19
         */
        labels: Array<string>;
        /** The operation type: 1 to add labels or 2 to remove labels. */
        action_type: number;
        /** The owner co id value accepted by the Jushuitan API. */
        owner_co_id?: number;
        /** The Jushuitan warehouse-company identifier. */
        wms_co_id?: number;
        /** The Jushuitan ERP company identifier. */
        co_id?: number;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: number;
        /** The issuccess value returned by the Jushuitan API. */
        issuccess: boolean;
        /** The response message returned by Jushuitan. */
        msg: string;
        [key: string]: unknown;
      };
    };
    /** Change the logistics company assigned to an order. */
    "jushuitan.update_order_logistics_company": {
      input: {
        /** The order lcs value accepted by the Jushuitan API. */
        order_lcs: Array<{
          /** The oid value accepted by the Jushuitan API. */
          oid: number;
          /** The lc id value accepted by the Jushuitan API. */
          lc_id: string;
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: string;
        /** The response message returned by Jushuitan. */
        msg: string;
        /** The data value returned by the Jushuitan API. */
        data: {
          /** The fail orders value returned by the Jushuitan API. */
          fail_orders: Array<{
            /** The oid value returned by the Jushuitan API. */
            oid: string;
            /** The response message returned by Jushuitan. */
            msg: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Update an order note or offline remark by order number. */
    "jushuitan.update_order_offline_note": {
      input: {
        /** The Jushuitan shop identifier. */
        shop_id: number;
        /** The items value accepted by the Jushuitan API. */
        items: Array<{
          /** The internal Jushuitan order identifier. Supply either this field or so_id; at most 10 items are supported. */
          o_id?: number;
          /** The online order number. If o_id and so_id identify different existing orders, both orders are modified. */
          so_id?: string;
          /** The node value accepted by the Jushuitan API. */
          node: string;
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: number;
        /** The issuccess value returned by the Jushuitan API. */
        issuccess: boolean;
        /** The response message returned by Jushuitan. */
        msg: string;
        [key: string]: unknown;
      };
    };
    /** Update an order remark flag and synchronize the change to its platform. */
    "jushuitan.update_order_remark_flag": {
      input: {
        /** Internal order identifiers. Supply either this list or so_ids; at most 50 values are accepted. */
        o_ids: Array<number>;
        /** The remark value accepted by the Jushuitan API. */
        remark: string;
        /** The seller flag: 0 clears it, 1 red, 2 yellow, 3 green, 4 blue, or 5 purple. */
        seller_flag: string;
        /** Whether to append the remark. Defaults to false. */
        append_remrk?: string;
      };
      output: {
        /** The data value returned by the Jushuitan API. */
        data?: Array<{
          /** The order id value returned by the Jushuitan API. */
          order_id?: string;
          /** The flag value returned by the Jushuitan API. */
          flag?: string;
          /** The response message returned by Jushuitan. */
          message?: string;
          /** The exception value returned by the Jushuitan API. */
          exception?: string;
          [key: string]: unknown;
        }>;
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: string;
        /** The issuccess value returned by the Jushuitan API. */
        issuccess?: string;
        /** The response message returned by Jushuitan. */
        msg?: string;
        [key: string]: unknown;
      };
    };
    /** Update an order seller remark using the Jushuitan internal order number. */
    "jushuitan.update_order_seller_remark_by_internal_id": {
      input: {
        /** The internal Jushuitan order identifier. */
        o_id: number;
        /**
         * The seller remark, up to 500 characters; this update replaces the stored remark unless is_append is true.
         * @maxLength 500
         */
        remark: string;
        /** Whether to append the remark instead of replacing it. Defaults to false. */
        is_append?: boolean;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The issuccess value returned by the Jushuitan API. */
        issuccess?: string;
        /** The response message returned by Jushuitan. */
        msg?: string;
        [key: string]: unknown;
      };
    };
    /** Update an order seller remark using its online order number. */
    "jushuitan.update_order_seller_remark_by_online_id": {
      input: {
        /** The online sales-order identifier. */
        so_id: string;
        /** The remark value accepted by the Jushuitan API. */
        remark: string;
        /** The is append value accepted by the Jushuitan API. */
        is_append: boolean;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: number;
        /** The response message returned by Jushuitan. */
        msg: string;
        /** The data value returned by the Jushuitan API. */
        data: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Change the status of a miscellaneous inbound or outbound stock document. */
    "jushuitan.update_other_stock_movement_status": {
      input: {
        /**
         * The stock-movement document identifiers. Either io_ids or so_ids is required; when both are present, io_ids takes precedence. At most 20 are accepted.
         * @maxItems 20
         */
        io_ids?: Array<string>;
        /**
         * The online sales-order identifiers. Either so_ids or io_ids is required; when both are present, io_ids takes precedence. At most 20 are accepted.
         * @maxItems 20
         */
        so_ids?: Array<string>;
        /** The warehouse-company identifier, required for a branch stock-movement document. */
        wms_co_id?: number;
        /** The operation: 1 to approve, 2 to cancel approval, 3 to void, or 4 to confirm. Defaults to 3. */
        operate_type?: string;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** Whether the operation succeeded; true indicates success. */
        issuccess?: boolean;
        /** The response message returned by Jushuitan. */
        msg?: string;
        [key: string]: unknown;
      };
    };
    /** Update warehouse bin-capacity information for products. */
    "jushuitan.update_product_bin_capacity": {
      input: {
        /**
         * The business parameters used to update warehouse bin-capacity information for products.
         * @minItems 1
         */
        items: Array<{
          /** The merchant SKU identifier in Jushuitan. */
          sku_id: string;
          /** The bin value accepted by the Jushuitan API. */
          bin?: string;
          /** The other bin value accepted by the Jushuitan API. */
          other_bin?: Array<string>;
          /** The min qty value accepted by the Jushuitan API. */
          min_qty?: number;
          /** The max qty value accepted by the Jushuitan API. */
          max_qty?: number;
          /** The overflow qty value accepted by the Jushuitan API. */
          overflow_qty?: number;
          /** The pack qty value accepted by the Jushuitan API. */
          pack_qty?: number;
          /** The pack volume value accepted by the Jushuitan API. */
          pack_volume?: number;
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: Array<{
          /** The merchant SKU identifier in Jushuitan. */
          sku_id?: string;
          /** The issuccess value returned by the Jushuitan API. */
          issuccess?: boolean;
          /** The response message returned by Jushuitan. */
          msg?: string;
          [key: string]: unknown;
        }>;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The request identifier assigned by Jushuitan. */
        requestId?: unknown;
        [key: string]: unknown;
      };
    };
    /** Update basic invoicing information for products. */
    "jushuitan.update_product_invoice_profile": {
      input: {
        /**
         * The business parameters used to update basic invoicing information for products.
         * @minItems 1
         */
        items: Array<{
          /** The merchant SKU identifier in Jushuitan. */
          sku_id: string;
          /** The type value accepted by the Jushuitan API. */
          type?: string;
          /** The name value accepted by the Jushuitan API. */
          name?: string;
          /** The spec value accepted by the Jushuitan API. */
          spec?: string;
          /** The issuing office value accepted by the Jushuitan API. */
          issuing_office?: string;
          /** The tax code short value accepted by the Jushuitan API. */
          tax_code_short?: string;
          /** The tax code value accepted by the Jushuitan API. */
          tax_code?: string;
          /** The tax rate str value accepted by the Jushuitan API. */
          tax_rate_str?: string;
          /** The tax rate zero str value accepted by the Jushuitan API. */
          tax_rate_zero_str?: string;
          /** The sale price str value accepted by the Jushuitan API. */
          sale_price_str?: string;
          /** The qty str value accepted by the Jushuitan API. */
          qty_str?: string;
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The is new add invoice type value returned by the Jushuitan API. */
          is_new_add_invoice_type?: boolean;
          /** The error message value returned by the Jushuitan API. */
          error_message?: string;
          /** The finish value returned by the Jushuitan API. */
          finish?: boolean;
          /** The success count value returned by the Jushuitan API. */
          success_count?: number;
          /** The fail count value returned by the Jushuitan API. */
          fail_count?: number;
          /** The skip count value returned by the Jushuitan API. */
          skip_count?: number;
          /** The fail datas value returned by the Jushuitan API. */
          fail_datas?: Array<{
            /** The merchant SKU identifier in Jushuitan. */
            sku_id?: string;
            /** The error type value returned by the Jushuitan API. */
            error_type?: string;
            /** The error message value returned by the Jushuitan API. */
            error_message?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** The response message value returned by the Jushuitan API. */
        msg?: unknown;
        /** The request identifier assigned by Jushuitan. */
        request_id?: unknown;
        [key: string]: unknown;
      };
    };
    /** Bind or unbind product mapping relationships. */
    "jushuitan.update_product_mappings": {
      input: {
        /** The bind value accepted by the Jushuitan API. */
        bind: boolean;
        /** The output links value accepted by the Jushuitan API. */
        output_links: boolean;
        /** The links value accepted by the Jushuitan API. */
        links: Array<{
          /** The Jushuitan shop identifier. */
          shop_id: number;
          /** The shop i id value accepted by the Jushuitan API. */
          shop_i_id: string;
          /** The shop sku id value accepted by the Jushuitan API. */
          shop_sku_id: string;
          /** The link sku id value accepted by the Jushuitan API. */
          link_sku_id: string;
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: Array<{
          /** The Jushuitan shop identifier. */
          shop_id?: number;
          /** The shop i id value returned by the Jushuitan API. */
          shop_i_id?: string;
          /** The shop sku id value returned by the Jushuitan API. */
          shop_sku_id?: string;
          /** The link sku id value returned by the Jushuitan API. */
          link_sku_id?: string;
          [key: string]: unknown;
        }>;
        /** The response message value returned by the Jushuitan API. */
        msg?: unknown;
        /** The request identifier assigned by Jushuitan. */
        request_id?: unknown;
        [key: string]: unknown;
      };
    };
    /** Update product model information. */
    "jushuitan.update_product_models": {
      input: {
        /**
         * The items value accepted by the Jushuitan API.
         * @maxItems 500
         */
        items: Array<{
          /** The i id value accepted by the Jushuitan API. */
          i_id: string;
          /** The name value accepted by the Jushuitan API. */
          name?: string;
          /** The brand value accepted by the Jushuitan API. */
          brand?: string;
          /** The category value accepted by the Jushuitan API. */
          category?: string;
          /** The vc name value accepted by the Jushuitan API. */
          vc_name?: string;
          /** The supplier name value accepted by the Jushuitan API. */
          supplier_name?: string;
          /** The supplier i id value accepted by the Jushuitan API. */
          supplier_i_id?: string;
          /** The sale price value accepted by the Jushuitan API. */
          sale_price?: number;
          /** The market price value accepted by the Jushuitan API. */
          market_price?: number;
          /** The cost price value accepted by the Jushuitan API. */
          cost_price?: number;
          /** The weight value accepted by the Jushuitan API. */
          weight?: number;
          /** The unit value accepted by the Jushuitan API. */
          unit?: string;
          /** The item type value accepted by the Jushuitan API. */
          item_type?: string;
          /** The l value accepted by the Jushuitan API. */
          l?: number;
          /** The w value accepted by the Jushuitan API. */
          w?: number;
          /** The h value accepted by the Jushuitan API. */
          h?: number;
          /** The remark value accepted by the Jushuitan API. */
          remark?: string;
          /** The pic value accepted by the Jushuitan API. */
          pic?: string;
          /** The pic2 value accepted by the Jushuitan API. */
          pic2?: string;
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: Array<{
          /** The i id value returned by the Jushuitan API. */
          i_id?: string;
          /** The response message returned by Jushuitan. */
          message?: string;
          [key: string]: unknown;
        }>;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The request identifier assigned by Jushuitan. */
        request_id?: unknown;
        [key: string]: unknown;
      };
    };
    /** Modify an existing purchase order. */
    "jushuitan.update_purchase_order": {
      input: {
        /** The external order number. Supply it or po_id. */
        external_id?: string;
        /** The internal purchase-order identifier. Supply it or external_id. */
        po_id?: number;
        /** The Jushuitan warehouse-company identifier. */
        wms_co_id?: number;
        /** The supplier id value accepted by the Jushuitan API. */
        supplier_id?: number;
        /** The item type value accepted by the Jushuitan API. */
        item_type?: string;
        /** The remark value accepted by the Jushuitan API. */
        remark?: string;
        /** The term value accepted by the Jushuitan API. */
        term?: string;
        /** The send address value accepted by the Jushuitan API. */
        send_address?: string;
        /** The purchaser name value accepted by the Jushuitan API. */
        purchaser_name?: string;
        /** The tax rate value accepted by the Jushuitan API. */
        tax_rate?: number;
        /** The more rate value accepted by the Jushuitan API. */
        more_rate?: number;
        /** The po date value accepted by the Jushuitan API. */
        po_date?: string;
        /** The logistics company value accepted by the Jushuitan API. */
        logistics_company?: string;
        /** The l id value accepted by the Jushuitan API. */
        l_id?: string;
        /** The labels value accepted by the Jushuitan API. */
        labels?: Array<string>;
        /** The freight value accepted by the Jushuitan API. */
        freight?: number;
        /** The receiver name value accepted by the Jushuitan API. */
        receiver_name?: string;
        /** The receiver phone value accepted by the Jushuitan API. */
        receiver_phone?: string;
        /** The lock lwh id value accepted by the Jushuitan API. */
        lock_lwh_id?: number;
        /** The items value accepted by the Jushuitan API. */
        items?: Array<{
          /** The merchant SKU identifier in Jushuitan. */
          sku_id: string;
          /** The qty value accepted by the Jushuitan API. */
          qty?: number;
          /** The price value accepted by the Jushuitan API. */
          price?: number;
          /** The batch id value accepted by the Jushuitan API. */
          batch_id?: string;
          /** The produced date value accepted by the Jushuitan API. */
          produced_date?: string;
          /** The expiration date value accepted by the Jushuitan API. */
          expiration_date?: string;
          /** The delivery date value accepted by the Jushuitan API. */
          delivery_date?: string;
          /** The plan arrive qty value accepted by the Jushuitan API. */
          plan_arrive_qty?: number;
          /** The remark value accepted by the Jushuitan API. */
          remark?: string;
          /** The tax rate value accepted by the Jushuitan API. */
          tax_rate?: number;
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: number;
        /** The response message returned by Jushuitan. */
        msg: string;
        /** The request identifier assigned by Jushuitan. */
        request_id: string;
        /** The data value returned by the Jushuitan API. */
        data: {
          /** The success value returned by the Jushuitan API. */
          success: boolean;
          /** The response message returned by Jushuitan. */
          message: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Add or remove labels on purchase and manufacturing orders. */
    "jushuitan.update_purchase_order_labels": {
      input: {
        /** The purchase or manufacturing order identifier. Supply it or so_id; when both are supplied, po_id takes precedence. */
        po_id?: number;
        /** The online order number. Supply it or po_id; when both are supplied, po_id takes precedence. */
        so_id?: string;
        /**
         * The labels to add or remove. Supply 1 to 19 unique labels, each 1 to 10 characters long.
         * @minItems 1
         * @maxItems 19
         */
        labels: Array<string>;
        /** The operation type: 1 to add or 2 to remove. Defaults to 1. */
        action_type?: number;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Change the business status of a purchase order. */
    "jushuitan.update_purchase_order_status": {
      input: {
        /** External purchase-order numbers. Supply either this list or po_ids. */
        so_ids?: Array<string>;
        /** Internal purchase-order identifiers. Supply either this list or so_ids. */
        po_ids?: Array<string>;
        /** The status operation: 1 approve, 2 reopen for changes, 3 void, 4 complete, or 5 undo completion. */
        option: number;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: string;
        /** The issuccess value returned by the Jushuitan API. */
        issuccess?: string;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The result value returned by the Jushuitan API. */
        result?: Array<{
          /** The Jushuitan response code; zero indicates a successful request. */
          code?: string;
          /** The issuccess value returned by the Jushuitan API. */
          issuccess?: string;
          /** The response message returned by Jushuitan. */
          msg?: string;
          /** The po id value returned by the Jushuitan API. */
          po_id?: string;
          /** The online sales-order identifier. */
          so_id?: string;
          /** The status value returned by the Jushuitan API. */
          status?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Update recipient information for an order from a merchant-owned shop. */
    "jushuitan.update_self_store_order_recipient": {
      input: {
        /** The internal Jushuitan order identifier. */
        o_id: number;
        /** The Jushuitan shop identifier. */
        shop_id: number;
        /** The receiver state value accepted by the Jushuitan API. */
        receiver_state?: string;
        /** The receiver city value accepted by the Jushuitan API. */
        receiver_city?: string;
        /** The receiver district value accepted by the Jushuitan API. */
        receiver_district?: string;
        /** The receiver address value accepted by the Jushuitan API. */
        receiver_address?: string;
        /** The receiver name value accepted by the Jushuitan API. */
        receiver_name?: string;
        /** The receiver phone value accepted by the Jushuitan API. */
        receiver_phone?: string;
        /** The receiver mobile value accepted by the Jushuitan API. */
        receiver_mobile?: string;
        /** The receiver country value accepted by the Jushuitan API. */
        receiver_country?: string;
        /** The receiver zip value accepted by the Jushuitan API. */
        receiver_zip?: string;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: number;
        /** The response message returned by Jushuitan. */
        msg: string;
        /** The data value returned by the Jushuitan API. */
        data: {
          /** The data value returned by the Jushuitan API. */
          data: boolean;
          /** The Jushuitan response code; zero indicates a successful request. */
          code: number;
          /** The issuccess value returned by the Jushuitan API. */
          issuccess: boolean;
          /** The response message returned by Jushuitan. */
          msg: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Import or update virtual inventory quantities in batches. */
    "jushuitan.update_virtual_inventory": {
      input: {
        /** The Jushuitan warehouse-company identifier. */
        wms_co_id: number;
        /** The product quantities to update; at most 1,000 items are accepted. */
        sku_and_qty: Array<{
          /** The merchant SKU identifier in Jushuitan. */
          sku_id: string;
          /** The qty value accepted by the Jushuitan API. */
          qty: number;
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: string;
        /** The response message returned by Jushuitan. */
        msg: string;
        /** The data value returned by the Jushuitan API. */
        data: string;
        [key: string]: unknown;
      };
    };
    /** Update the picking status of a WMS wave. */
    "jushuitan.update_wave_picking_status": {
      input: {
        /** The wave id value accepted by the Jushuitan API. */
        wave_id: number;
        /** The wave status value accepted by the Jushuitan API. */
        wave_status?: string;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The issuccess value returned by the Jushuitan API. */
        issuccess?: boolean;
        /** The response message returned by Jushuitan. */
        msg?: string;
        [key: string]: unknown;
      };
    };
    /** Upload after-sale return or refund records. */
    "jushuitan.upload_after_sales": {
      input: {
        /**
         * The business parameters used to upload after-sale return or refund records.
         * @minItems 1
         */
        items: Array<{
          /** The Jushuitan shop identifier. */
          shop_id: number;
          /** The outer as id value accepted by the Jushuitan API. */
          outer_as_id: string;
          /** The platform order identifier shown as the online order number. If a pending after-sale was previously created manually for the order, a later upload with the same so_id is linked to that existing after-sale. */
          so_id: string;
          /** The after-sale type, such as standard return, other, refused return, refund only, complaint, reshipment, repair, or exchange. */
          type: string;
          /** The logistics company. It can be updated only before the goods status indicates that the seller has received them. */
          logistics_company?: string;
          /** The tracking number. It can be updated only before the seller receives the goods; an existing number may match an existing unidentified return instead of creating a new after-sale record. */
          l_id?: string;
          /** The recipient name, applicable only to exchange or reshipment after-sales. */
          receiver_name_en?: string;
          /** The recipient mobile number, applicable only to exchange or reshipment after-sales. */
          receiver_mobile_en?: string;
          /** The shop status value accepted by the Jushuitan API. */
          shop_status?: string;
          /** The remark value accepted by the Jushuitan API. */
          remark?: string;
          /** The good status value accepted by the Jushuitan API. */
          good_status?: string;
          /** The question type value accepted by the Jushuitan API. */
          question_type: string;
          /** The total amount value accepted by the Jushuitan API. */
          total_amount?: number;
          /** The refund value accepted by the Jushuitan API. */
          refund: number;
          /** The payment value accepted by the Jushuitan API. */
          payment: number;
          /** The enabled warehouse identifier: 1 for main, 2 for sales returns, 3 for purchasing, 4 for defective goods, or 6 through 8 for custom warehouses. */
          warehouse_type?: number;
          /** The Jushuitan warehouse-company identifier. */
          wms_co_id?: number;
          /** The recipient province. For exchange or reshipment after-sales, it is required when recipient information is supplied. */
          receiver_state?: string;
          /** The recipient city. For exchange or reshipment after-sales, it is required when recipient information is supplied. */
          receiver_city?: string;
          /** The recipient district. For exchange or reshipment after-sales, it is required when recipient information is supplied. */
          receiver_district?: string;
          /** The recipient street address. For exchange or reshipment after-sales, it is required when recipient information is supplied. */
          receiver_address?: string;
          /** The send lc id value accepted by the Jushuitan API. */
          send_lc_id?: string;
          /** The send lc name value accepted by the Jushuitan API. */
          send_lc_name?: string;
          /** The items value accepted by the Jushuitan API. */
          items: Array<{
            /** The platform order-line identifier used for uniqueness. It is required for bundle-product after-sales; omitting it can cause Jushuitan to refund and cancel the entire order when interception is enabled. */
            outer_oi_id?: string;
            /** The merchant SKU identifier in Jushuitan. */
            sku_id: string;
            /** The qty value accepted by the Jushuitan API. */
            qty: number;
            /** The amount value accepted by the Jushuitan API. */
            amount: number;
            /** The type value accepted by the Jushuitan API. */
            type: string;
            /** The name value accepted by the Jushuitan API. */
            name?: string;
            /** The pic value accepted by the Jushuitan API. */
            pic?: string;
            /** The properties value value accepted by the Jushuitan API. */
            properties_value?: string;
            /** The des value accepted by the Jushuitan API. */
            des?: string;
          }>;
          /** The freight value accepted by the Jushuitan API. */
          freight?: number;
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The business records returned in this response. */
          datas?: Array<{
            /** The response message returned by Jushuitan. */
            msg: string;
            /** The as id value returned by the Jushuitan API. */
            as_id: number;
            /** The issuccess value returned by the Jushuitan API. */
            issuccess: boolean;
            /** The online sales-order identifier. */
            so_id: string;
            /** The outer as id value returned by the Jushuitan API. */
            outer_as_id: string;
            /** The internal Jushuitan order identifier. */
            o_id: number;
            /** The id value returned by the Jushuitan API. */
            id: number;
            /** The order type value returned by the Jushuitan API. */
            order_type: string;
            /** The oaid value returned by the Jushuitan API. */
            oaid: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Upload bundle product definitions in batches. */
    "jushuitan.upload_bundle_products": {
      input: {
        /** Whether an existing bundle product is overwritten. Defaults to true. */
        is_cover?: boolean;
        /** Whether empty input values overwrite existing values. Defaults to false. */
        is_null_cover?: boolean;
        /**
         * The items value accepted by the Jushuitan API.
         * @maxItems 50
         */
        items: Array<{
          /** The merchant SKU identifier in Jushuitan. */
          sku_id: string;
          /** The i id value accepted by the Jushuitan API. */
          i_id?: string;
          /** The enty sku id value accepted by the Jushuitan API. */
          enty_sku_id?: string;
          /** The name value accepted by the Jushuitan API. */
          name?: string;
          /** The properties value value accepted by the Jushuitan API. */
          properties_value?: string;
          /** The brand value accepted by the Jushuitan API. */
          brand?: string;
          /** The cost price value accepted by the Jushuitan API. */
          cost_price?: number;
          /** The other 1 value accepted by the Jushuitan API. */
          other_1?: string;
          /** The other 2 value accepted by the Jushuitan API. */
          other_2?: string;
          /** The other 3 value accepted by the Jushuitan API. */
          other_3?: string;
          /** The other 4 value accepted by the Jushuitan API. */
          other_4?: string;
          /** The other 5 value accepted by the Jushuitan API. */
          other_5?: string;
          /** The other 6 value accepted by the Jushuitan API. */
          other_6?: string;
          /** The other 7 value accepted by the Jushuitan API. */
          other_7?: string;
          /** The other 8 value accepted by the Jushuitan API. */
          other_8?: string;
          /** The other 9 value accepted by the Jushuitan API. */
          other_9?: string;
          /** The other 10 value accepted by the Jushuitan API. */
          other_10?: string;
          /** The other price 1 value accepted by the Jushuitan API. */
          other_price_1?: number;
          /** The other price 2 value accepted by the Jushuitan API. */
          other_price_2?: number;
          /** The other price 3 value accepted by the Jushuitan API. */
          other_price_3?: number;
          /** The other price 4 value accepted by the Jushuitan API. */
          other_price_4?: number;
          /** The other price 5 value accepted by the Jushuitan API. */
          other_price_5?: number;
          /** The market price value accepted by the Jushuitan API. */
          market_price?: number;
          /** The purchase price value accepted by the Jushuitan API. */
          purchase_price?: number;
          /** The pic value accepted by the Jushuitan API. */
          pic?: string;
          /** The short name value accepted by the Jushuitan API. */
          short_name?: string;
          /** The remark value accepted by the Jushuitan API. */
          remark?: string;
          /** The compose sale price value accepted by the Jushuitan API. */
          compose_sale_price?: number;
          /** The bundle-product status: enabled, standby, or disabled. Defaults to enabled when omitted and may be updated. */
          enabled?: string;
          /** The childList value accepted by the Jushuitan API. */
          childList: Array<{
            /** The src sku id value accepted by the Jushuitan API. */
            src_sku_id: string;
            /** The qty value accepted by the Jushuitan API. */
            qty: number;
            /** The sale price value accepted by the Jushuitan API. */
            sale_price: number;
          }>;
          /** The deleteLabels value accepted by the Jushuitan API. */
          deleteLabels?: string;
          /**
           * Comma-separated product labels. Only labels maintained in Jushuitan can be appended, and restricted labels such as Qimen WMS and daily weighted cost cannot be appended.
           * @maxLength 200
           */
          labels?: string;
        }>;
        /** Whether to append labels: true appends them and false replaces the complete label set. */
        is_add_labels?: string;
        /** Whether to update the entity SKU from the bundle definition. Defaults to false; when true, Jushuitan updates the base sale price, cost price, volume, weight, and other prices 1 through 5. */
        is_update_enty_sku_from_combine_sku?: boolean;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: string;
        /** The data value returned by the Jushuitan API. */
        data: Record<string, unknown>;
        /** The response message returned by Jushuitan. */
        msg: string;
        [key: string]: unknown;
      };
    };
    /** Upload cost data for externally purchased orders. */
    "jushuitan.upload_external_purchase_order_costs": {
      input: {
        /** The upload batch identifier. */
        task_id: string;
        /** Whether this is the final upload for the batch. Set this to true on the final request. */
        is_completed: boolean;
        /** Whether Jushuitan should deduplicate records by biz_id. Defaults to false. */
        is_excduplicate: string;
        /** The upload datas value accepted by the Jushuitan API. */
        upload_datas: Array<{
          /** The optional business key used by Jushuitan to deduplicate uploaded records. */
          biz_id?: string;
          /** The upload data value accepted by the Jushuitan API. */
          upload_data: {
            /** The freight value accepted by the Jushuitan API. */
            freight?: number;
            /** The online sales-order identifier. Provide so_id or o_id. */
            so_id?: string;
            /** The internal Jushuitan order identifier. Provide o_id or so_id. */
            o_id?: string;
            /** The cost price value accepted by the Jushuitan API. */
            cost_price: number;
            /** The sku name value accepted by the Jushuitan API. */
            sku_name?: string;
            /** The merchant SKU identifier in Jushuitan. */
            sku_id: string;
          };
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: number;
        /** The response message returned by Jushuitan. */
        msg: string;
        /** The data value returned by the Jushuitan API. */
        data: {
          /** The task id value returned by the Jushuitan API. */
          task_id: string;
          /** The task detail id value returned by the Jushuitan API. */
          task_detail_id: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Upload manufacturing orders to Jushuitan. */
    "jushuitan.upload_manufacturing_orders": {
      input: {
        /** The online sales-order identifier. */
        so_id: string;
        /** Whether to force approval. Defaults to false. */
        is_force_confirm?: boolean;
        /** The po date value accepted by the Jushuitan API. */
        po_date: string;
        /** The outer po id value accepted by the Jushuitan API. */
        outer_po_id?: string;
        /** The seller id value accepted by the Jushuitan API. */
        seller_id: number;
        /** The send address value accepted by the Jushuitan API. */
        send_address?: string;
        /** The term value accepted by the Jushuitan API. */
        term?: string;
        /** The labels value accepted by the Jushuitan API. */
        labels?: Array<string>;
        /** The Jushuitan warehouse-company identifier. */
        wms_co_id?: number;
        /** The receipt wms co id value accepted by the Jushuitan API. */
        receipt_wms_co_id?: number;
        /** The remark value accepted by the Jushuitan API. */
        remark?: string;
        /** Finished products. For split manufacturing, omit this list and Jushuitan generates it from the finished-product BOM during approval. */
        items: Array<{
          /** The merchant SKU identifier in Jushuitan. */
          sku_id: string;
          /** The qty value accepted by the Jushuitan API. */
          qty: number;
          /** The plan arrive qty value accepted by the Jushuitan API. */
          plan_arrive_qty?: number;
          /** The delivery date value accepted by the Jushuitan API. */
          delivery_date?: string;
          /** The price value accepted by the Jushuitan API. */
          price?: string;
          /** The processing charges value accepted by the Jushuitan API. */
          processing_charges?: string;
          /** The remark value accepted by the Jushuitan API. */
          remark?: string;
        }>;
        /** Input materials. For assembly manufacturing, omit this list and Jushuitan generates it from the finished-product BOM during approval. */
        raws?: Array<{
          /** The merchant SKU identifier in Jushuitan. */
          sku_id: string;
          /** The qty value accepted by the Jushuitan API. */
          qty: string;
          /** The plan arrive qty value accepted by the Jushuitan API. */
          plan_arrive_qty?: string;
          /** The delivery date value accepted by the Jushuitan API. */
          delivery_date?: string;
          /** The price value accepted by the Jushuitan API. */
          price?: string;
          /** The processing charges value accepted by the Jushuitan API. */
          processing_charges?: string;
          /** The remark value accepted by the Jushuitan API. */
          remark?: string;
        }>;
        /** Whether to approve the document automatically. Defaults to false. */
        is_confirm?: boolean;
        /** The manufacturing type: 1 assembly or 2 split. Other or omitted values mean assembly; a type specified in labels takes precedence. */
        manufacture_type?: number;
        /** The manufacturing mode: 1 random or 2 standard BOM. Other or omitted values mean random; a mode specified in labels takes precedence. */
        manufacture_mode?: number;
        /** The more rate value accepted by the Jushuitan API. */
        more_rate?: number;
        /** The manufacturing warehouse. Defaults to the main warehouse: 1 main, 2 sales returns, 3 purchasing, 4 defective goods, or 6 through 15 for custom warehouses 1 through 10. */
        wh_id?: number;
        /** The receiving warehouse. Omit it for no explicit receiving warehouse; 1 is main, 2 sales returns, 3 purchasing, 4 defective goods, and 6 through 15 custom warehouses 1 through 10. */
        receipt_wh_id?: number;
        /** The out lwh id value accepted by the Jushuitan API. */
        out_lwh_id?: number;
        /** The receipt lwh id value accepted by the Jushuitan API. */
        receipt_lwh_id?: number;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The issuccess value returned by the Jushuitan API. */
        issuccess?: boolean;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The po id value returned by the Jushuitan API. */
          po_id?: number;
          /** The online sales-order identifier. */
          so_id?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Upload order expense data for profitability accounting. */
    "jushuitan.upload_order_expenses": {
      input: {
        /** The upload batch identifier. */
        task_id: string;
        /** Whether this is the final upload for the batch. Set this to true on the final request. */
        is_completed: boolean;
        /** How to allocate amounts across products: 0 by product amount or 1 by product line. Defaults to 0. */
        sku_amount_type: string;
        /** The account value accepted by the Jushuitan API. */
        account?: string;
        /** The remark value accepted by the Jushuitan API. */
        remark?: string;
        /** The upload datas value accepted by the Jushuitan API. */
        upload_datas: Array<{
          /** The biz id value accepted by the Jushuitan API. */
          biz_id?: string;
          /** The upload data value accepted by the Jushuitan API. */
          upload_data: {
            /** The internal Jushuitan order identifier. */
            o_id?: string;
            /** The online sales-order identifier. */
            so_id?: string;
            /** The i id value accepted by the Jushuitan API. */
            i_id?: string;
            /** The merchant SKU identifier in Jushuitan. */
            sku_id?: string;
            /** The csg id value accepted by the Jushuitan API. */
            csg_id: string;
            /** The date value accepted by the Jushuitan API. */
            date?: string;
            /** The amount value accepted by the Jushuitan API. */
            amount: number;
            /** The remark value accepted by the Jushuitan API. */
            remark?: string;
          };
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: number;
        /** The response message returned by Jushuitan. */
        msg: string;
        /** The act value returned by the Jushuitan API. */
        act: string;
        /** The data value returned by the Jushuitan API. */
        data: {
          /** The task id value returned by the Jushuitan API. */
          task_id: string;
          /** The task detail id value returned by the Jushuitan API. */
          task_detail_id: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Upload orders from merchant-owned shops or offline cross-border channels. */
    "jushuitan.upload_orders": {
      input: {
        /**
         * The business parameters used to upload orders from merchant-owned shops or offline cross-border channels.
         * @minItems 1
         * @maxItems 50
         */
        items: Array<{
          /** The Jushuitan shop identifier. Uploads support merchant-owned mall, offline cross-border, offline retail, and B2B shops; obtain the identifier from the shop query API. */
          shop_id: number;
          /** The encrypted OAID from Taobao. Also apply the Taobao order label and pass the online order number as full_receive_en_json.OuterSoId. */
          oaid?: string;
          /** The warehouse-company identifier for a branch warehouse. Omit it when shipping from the main warehouse; obtain it from the warehouse query API because the ERP UI does not display it. */
          wms_co_id?: number;
          /** The plan delivery date value accepted by the Jushuitan API. */
          plan_delivery_date?: string;
          /** The outer so id value accepted by the Jushuitan API. */
          outer_so_id?: string;
          /** The encrypted recipient JSON from Taobao, Douyin, Kuaishou, Pinduoduo, or JD. Apply the matching platform order label when this value is supplied. */
          full_receive_en_json?: string;
          /** The encrypted recipient mobile number, up to 200 characters. For Douyin encryption type 147, pass the original ciphertext. */
          receiver_mobile_en?: string;
          /** The encrypted recipient name, up to 200 characters. For Douyin encryption type 147, pass the original ciphertext. */
          receiver_name_en?: string;
          /**
           * The online sales-order identifier. It must be unique within the merchant-owned shop and cannot exceed 41 characters.
           * @maxLength 41
           */
          so_id: string;
          /** The order date. It cannot precede the order-archive cutoff date. */
          order_date: string;
          /** The shop order status: WAIT_BUYER_PAY, WAIT_SELLER_SEND_GOODS, WAIT_BUYER_CONFIRM_GOODS, TRADE_FINISHED, TRADE_CLOSED, or TRADE_CLOSED_BY_TAOBAO. With WAIT_SELLER_SEND_GOODS, the Pay-node payment amount must equal the amount due for ERP to show the order as paid and awaiting review. This field can be updated. */
          shop_status: string;
          /** The shop buyer id value accepted by the Jushuitan API. */
          shop_buyer_id: string;
          /**
           * The recipient province, up to 50 characters. Omit the field when the full address already includes the province; do not pass null or an empty string.
           * @maxLength 50
           */
          receiver_state?: string;
          /**
           * The recipient city, up to 50 characters. Omit the field when the full address already includes the city; do not pass null or an empty string.
           * @maxLength 50
           */
          receiver_city?: string;
          /**
           * The recipient district or street, up to 50 characters. Omit the field when the full address already includes it; do not pass null or an empty string.
           * @maxLength 50
           */
          receiver_district?: string;
          /**
           * The recipient address, up to 200 characters. Use three underscores to separate address lines. It can be updated before shipment, except within 48 hours of a previous update or when the stored address ends with #.
           * @maxLength 200
           */
          receiver_address: string;
          /**
           * The recipient name, up to 50 characters.
           * @maxLength 50
           */
          receiver_name: string;
          /**
           * The recipient telephone, up to 50 characters. Either this field or receiver_mobile is required.
           * @maxLength 50
           */
          receiver_phone?: string;
          /**
           * The recipient mobile number, up to 50 characters. Either this field or receiver_phone is required.
           * @maxLength 50
           */
          receiver_mobile?: string;
          /**
           * The recipient email, up to 200 characters. Invalid email addresses are ignored and this field cannot be updated.
           * @maxLength 200
           */
          receiver_email?: string;
          /**
           * The recipient town or street, up to 50 characters.
           * @maxLength 50
           */
          receiver_town?: string;
          /**
           * The recipient country as a two-letter country code, up to 5 characters.
           * @maxLength 5
           */
          receiver_country?: string;
          /** The receiver zip value accepted by the Jushuitan API. */
          receiver_zip?: string;
          /** The pay amount value accepted by the Jushuitan API. */
          pay_amount: number;
          /** The freight value accepted by the Jushuitan API. */
          freight: number;
          /**
           * The buyer message, up to 400 characters; it can be updated.
           * @maxLength 400
           */
          buyer_message?: string;
          /** The referrer id value accepted by the Jushuitan API. */
          referrer_id?: string;
          /** The referrer name value accepted by the Jushuitan API. */
          referrer_name?: string;
          /**
           * The seller remark, up to 1,000 characters; it can be updated.
           * @maxLength 1000
           */
          remark?: string;
          /** The shipment value accepted by the Jushuitan API. */
          shipment?: string;
          /** The is cod value accepted by the Jushuitan API. */
          is_cod?: boolean;
          /** The shop modified value accepted by the Jushuitan API. */
          shop_modified?: string;
          /** The end time value accepted by the Jushuitan API. */
          end_time?: string;
          /** The tracking number; for cross-border logistics, pass the international waybill number. */
          l_id?: string;
          /** The logistics-company name configured in Jushuitan. For on-site pickup, recipient details are optional but either a mobile number or telephone is required. */
          logistics_company?: string;
          /** The question desc value accepted by the Jushuitan API. */
          question_desc?: string;
          /** The seller flag: 1 for red, 2 for yellow, 3 for green, 4 for blue, or 5 for purple. */
          seller_flag?: number;
          /** The items value accepted by the Jushuitan API. */
          items: Array<{
            /**
             * The merchant SKU identifier in Jushuitan, up to 40 characters. To mark a presale, append either the platform presale marker or ==, followed by the optional expected shipment date; for example, A321232==2015-12-12.
             * @maxLength 40
             */
            sku_id: string;
            /**
             * The platform shop SKU identifier, up to 128 characters. A custom value is allowed when shop product data is not maintained.
             * @maxLength 128
             */
            shop_sku_id: string;
            /** The shop i id value accepted by the Jushuitan API. */
            shop_i_id?: string;
            /**
             * The ERP product style or item identifier, up to 40 characters.
             * @maxLength 40
             */
            i_id?: string;
            /**
             * The image URL, up to 300 characters. When the normal-product image option is enabled for order downloads, that image takes precedence.
             * @maxLength 300
             */
            pic?: string;
            /**
             * The product variant attributes, up to 100 characters.
             * @maxLength 100
             */
            properties_value?: string;
            /** The final line amount in yuan, with at most two decimal places. */
            amount: number;
            /** The unit price in yuan, with at most four decimal places. */
            price?: number;
            /** The base price value accepted by the Jushuitan API. */
            base_price: number;
            /** The qty value accepted by the Jushuitan API. */
            qty: number;
            /** The refund qty value accepted by the Jushuitan API. */
            refund_qty?: number;
            /**
             * The product name, up to 100 characters.
             * @maxLength 100
             */
            name: string;
            /** The refund status: waiting, success, or closed. A success item is excluded from shipment; setting every item to success cancels the order. */
            refund_status?: string;
            /**
             * The merchant line-item key used to trace splits and merges. It must be unique within the order and cannot exceed 50 characters.
             * @maxLength 50
             */
            outer_oi_id: string;
            /** The remark value accepted by the Jushuitan API. */
            remark?: string;
            /** The batch id value accepted by the Jushuitan API. */
            batch_id?: string;
            /** The produced date value accepted by the Jushuitan API. */
            produced_date?: string;
            /** The is gift value accepted by the Jushuitan API. */
            is_gift?: boolean;
            /** The bu id value accepted by the Jushuitan API. */
            bu_id?: number;
            /** The referrer id value accepted by the Jushuitan API. */
            referrer_id?: string;
            /** The referrer name value accepted by the Jushuitan API. */
            referrer_name?: string;
          }>;
          /** The payment details. They may be omitted for WAIT_BUYER_PAY orders; without them, Jushuitan treats the order as awaiting buyer payment, and an ERP policy that accepts only paid orders may reject it. */
          pay?: {
            /**
             * The external payment identifier, up to 50 characters.
             * @maxLength 50
             */
            outer_pay_id: string;
            /** The pay date value accepted by the Jushuitan API. */
            pay_date: string;
            /**
             * The merchant-defined payment method, up to 20 characters.
             * @maxLength 20
             */
            payment: string;
            /**
             * The seller receiving account, up to 50 characters.
             * @maxLength 50
             */
            seller_account: string;
            /**
             * The buyer payment account, up to 200 characters.
             * @maxLength 200
             */
            buyer_account: string;
            /** The total payment amount, with at most two decimal places. */
            amount: number;
          };
          /** Optional identity-card details. When this object is supplied, both name and card_id are required. */
          card?: {
            /** The identity-card holder name. */
            name: string;
            /** The identity-card number. */
            card_id: string;
          };
          /** The send date value accepted by the Jushuitan API. */
          send_date?: string;
          /**
           * Comma-separated order labels, up to 200 characters total and 10 characters per label.
           * @maxLength 200
           */
          labels?: string;
          /** The lc id value accepted by the Jushuitan API. */
          lc_id?: string;
          /** The currency code. It is required for offline cross-border orders and defaults to CNY when omitted. */
          currency?: string;
          /** The invoice type value accepted by the Jushuitan API. */
          invoice_type?: string;
          /** The invoice title value accepted by the Jushuitan API. */
          invoice_title?: string;
          /** The buyer tax no value accepted by the Jushuitan API. */
          buyer_tax_no?: string;
          /** The invoice value accepted by the Jushuitan API. */
          invoice?: {
            /** The address value accepted by the Jushuitan API. */
            address?: string;
            /** The bank value accepted by the Jushuitan API. */
            bank?: string;
            /** The phone value accepted by the Jushuitan API. */
            phone?: string;
            /** The account value accepted by the Jushuitan API. */
            account?: string;
            /** The email value accepted by the Jushuitan API. */
            email?: string;
            /** The userName value accepted by the Jushuitan API. */
            userName?: string;
            /** The userPhone value accepted by the Jushuitan API. */
            userPhone?: string;
            /** The userAddress value accepted by the Jushuitan API. */
            userAddress?: string;
          };
          /** The node value accepted by the Jushuitan API. */
          node?: string;
          /** The finance data value accepted by the Jushuitan API. */
          finance_data?: {
            /** The rebate fee value accepted by the Jushuitan API. */
            rebate_fee?: number;
            /** The product tax value accepted by the Jushuitan API. */
            product_tax?: number;
            /** The shipping tax value accepted by the Jushuitan API. */
            shipping_tax?: number;
            /** The other income value accepted by the Jushuitan API. */
            other_income?: number;
            /** The voucher from seller value accepted by the Jushuitan API. */
            voucher_from_seller?: number;
            /** The platform commission value accepted by the Jushuitan API. */
            platform_commission?: number;
            /** The transition fee value accepted by the Jushuitan API. */
            transition_fee?: number;
            /** The transaction fee value accepted by the Jushuitan API. */
            transaction_fee?: number;
            /** The opaque bagging fee value accepted by the Jushuitan API. */
            opaque_bagging_fee?: number;
            /** The other expense value accepted by the Jushuitan API. */
            other_expense?: number;
          };
          /** The salesperson user identifier from Jushuitan user and permission settings. */
          creator?: number;
          /** The creator name value accepted by the Jushuitan API. */
          creator_name?: string;
          /** Whether this is an O2O retail order. Defaults to false. */
          is_o2o?: boolean;
          /** The order ext value accepted by the Jushuitan API. */
          order_ext?: {
            /** The ext datas value accepted by the Jushuitan API. */
            ext_datas: {
              /** The door plate value accepted by the Jushuitan API. */
              door_plate: string;
              /** The company name value accepted by the Jushuitan API. */
              company_name: string;
            };
          };
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data: {
          /** The business records returned in this response. */
          datas: Array<{
            /** The internal Jushuitan order identifier. */
            o_id: number;
            /** The online sales-order identifier. */
            so_id: string;
            /** The issuccess value returned by the Jushuitan API. */
            issuccess: boolean;
            /** The response message returned by Jushuitan. */
            msg: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Upload product bill-of-material definitions. */
    "jushuitan.upload_product_boms": {
      input: {
        /** The bom list value accepted by the Jushuitan API. */
        bom_list?: Array<{
          /** The primary-material quantity. Defaults to 1 when omitted. */
          rm_qty?: number;
          /** The outer sku id value accepted by the Jushuitan API. */
          outer_sku_id: string;
          /** The map outer sku id value accepted by the Jushuitan API. */
          map_outer_sku_id: string;
          /** The i id value accepted by the Jushuitan API. */
          i_id: string;
          /** Whether to delete the primary material. Defaults to false. */
          is_delete?: boolean;
        }>;
        /** The minor list value accepted by the Jushuitan API. */
        minor_list?: Array<{
          /** The outer sku id value accepted by the Jushuitan API. */
          outer_sku_id: string;
          /** The i id value accepted by the Jushuitan API. */
          i_id: string;
          /** Whether to delete the secondary material. Defaults to false. */
          is_delete?: boolean;
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: boolean;
        /** The response message returned by Jushuitan. */
        msg?: string;
        [key: string]: unknown;
      };
    };
    /** Upload multiple product cost values for profitability accounting. */
    "jushuitan.upload_product_costs": {
      input: {
        /** The upload batch identifier. */
        task_id: string;
        /** Whether this is the final upload for the batch. Set this to true on the final request. */
        is_completed: boolean;
        /** How to handle an existing value for the same date and product: overrideold replaces it and skip keeps it. */
        override_type?: string;
        /** The product identifier type: SkuId for a merchant SKU or ShopSkuId for a shop SKU. */
        id_type?: string;
        /** The warehouse-company identifier. When omitted, Jushuitan imports the costs into the current company. */
        wms_co_id?: string;
        /** The multi-cost plan to update: User1, User2, User3, or User4. Confirm the appropriate plan with the merchant's finance team. */
        cost_price_type?: string;
        /** Whether Jushuitan should deduplicate records by biz_id. Defaults to false. */
        is_excduplicate?: boolean;
        /** The upload datas value accepted by the Jushuitan API. */
        upload_datas: Array<{
          /** The business key used for optional record deduplication. */
          biz_id?: string;
          /** The upload data value accepted by the Jushuitan API. */
          upload_data: {
            /** The merchant SKU identifier in Jushuitan. */
            sku_id: string;
            /** The cost price value accepted by the Jushuitan API. */
            cost_price?: number;
            /** The shop name value accepted by the Jushuitan API. */
            shop_name?: string;
            /** The shop identifier when this cost applies only to one shop. */
            shop_id?: number;
            /** The historical cost price. cost_date is required when this field is provided. */
            his_price?: number;
            /** The cutoff date for his_price. his_price is required when this field is provided. */
            cost_date?: string;
          };
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: number;
        /** The response message returned by Jushuitan. */
        msg: string;
        /** The data value returned by the Jushuitan API. */
        data: {
          /** The task id value returned by the Jushuitan API. */
          task_id: string;
          /** The task detail id value returned by the Jushuitan API. */
          task_detail_id: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Upload historical cost-price records for products. */
    "jushuitan.upload_product_historical_costs": {
      input: {
        /** The business records submitted to Jushuitan. */
        datas: Array<{
          /** The merchant SKU identifier in Jushuitan. */
          sku_id: string;
          /** The end date value accepted by the Jushuitan API. */
          end_date: string;
          /** The cost price value accepted by the Jushuitan API. */
          cost_price: string;
        }>;
        /** The is clear old value accepted by the Jushuitan API. */
        is_clear_old?: boolean;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code: number;
        /** The issuccess value returned by the Jushuitan API. */
        issuccess: boolean;
        /** The response message returned by Jushuitan. */
        msg: string;
        [key: string]: unknown;
      };
    };
    /** Upload scheduled purchase receiving bookings. */
    "jushuitan.upload_purchase_bookings": {
      input: {
        /**
         * Purchase-order identifiers, up to 10. When omitted, supplier_id is required.
         * @maxItems 10
         */
        po_ids?: Array<number>;
        /** The Jushuitan warehouse-company identifier. */
        wms_co_id?: number;
        /** The internal supplier identifier, required when po_ids is omitted. */
        supplier_id?: number;
        /** The external id value accepted by the Jushuitan API. */
        external_id: string;
        /** The plan arrive date value accepted by the Jushuitan API. */
        plan_arrive_date: string;
        /** The remark value accepted by the Jushuitan API. */
        remark?: string;
        /** The send address value accepted by the Jushuitan API. */
        send_address?: string;
        /** The product type: finished product, semi-finished product, or raw material. */
        item_type: string;
        /** The labels value accepted by the Jushuitan API. */
        labels: string;
        /** The items value accepted by the Jushuitan API. */
        items: Array<{
          /** The merchant SKU identifier in Jushuitan. */
          sku_id: string;
          /** The qty value accepted by the Jushuitan API. */
          qty: number;
        }>;
        /** Whether to approve the booking automatically. Defaults to false. */
        is_confirm: boolean;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The external id value returned by the Jushuitan API. */
          external_id?: string;
          /** The po id value returned by the Jushuitan API. */
          po_id?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Upload purchase orders to Jushuitan. */
    "jushuitan.upload_purchase_orders": {
      input: {
        /** The is confirm value accepted by the Jushuitan API. */
        is_confirm?: boolean;
        /** The Jushuitan warehouse-company identifier. */
        wms_co_id?: number;
        /** The supplier id value accepted by the Jushuitan API. */
        supplier_id: number;
        /** The item type value accepted by the Jushuitan API. */
        item_type?: string;
        /** The external id value accepted by the Jushuitan API. */
        external_id: string;
        /** The remark. Omit the key when no value is intended; it can be updated only while the purchase order is neither voided nor completed. */
        remark?: string;
        /** The term value accepted by the Jushuitan API. */
        term?: string;
        /** The send address value accepted by the Jushuitan API. */
        send_address?: string;
        /** The purchaser name value accepted by the Jushuitan API. */
        purchaser_name?: string;
        /** The tax rate value accepted by the Jushuitan API. */
        tax_rate?: number;
        /** The more rate value accepted by the Jushuitan API. */
        more_rate?: number;
        /** The po date value accepted by the Jushuitan API. */
        po_date?: string;
        /** The currency value accepted by the Jushuitan API. */
        currency?: string;
        /** The items value accepted by the Jushuitan API. */
        items: Array<{
          /** The merchant SKU identifier in Jushuitan. */
          sku_id: string;
          /** The qty value accepted by the Jushuitan API. */
          qty: number;
          /** The price value accepted by the Jushuitan API. */
          price?: number;
          /** The remark value accepted by the Jushuitan API. */
          remark?: string;
          /** The tax rate value accepted by the Jushuitan API. */
          tax_rate?: number;
          /** The plan arrive qty value accepted by the Jushuitan API. */
          plan_arrive_qty?: number;
          /** The plan arrive date value accepted by the Jushuitan API. */
          plan_arrive_date?: string;
          /** The batch id value accepted by the Jushuitan API. */
          batch_id?: string;
          /** The produced date value accepted by the Jushuitan API. */
          produced_date?: string;
          /** The expiration date value accepted by the Jushuitan API. */
          expiration_date?: string;
          /** The currency price value accepted by the Jushuitan API. */
          currency_price?: number;
        }>;
        /** The l id value accepted by the Jushuitan API. */
        l_id?: string;
        /** The logistics company value accepted by the Jushuitan API. */
        logistics_company?: string;
        /** The receiver state value accepted by the Jushuitan API. */
        receiver_state?: string;
        /** The receiver city value accepted by the Jushuitan API. */
        receiver_city?: string;
        /** The recipient district or county. When omitted, Jushuitan uses the warehouse's province, city, and district. */
        receiver_district?: string;
        /** The freight value accepted by the Jushuitan API. */
        freight?: number;
        /** The labels value accepted by the Jushuitan API. */
        labels?: Array<string>;
        /** The lock lwh id value accepted by the Jushuitan API. */
        lock_lwh_id?: number;
        /** Whether to update an existing document. Jushuitan updates it only when this value is true. */
        is_edit?: boolean;
        /** The payment method value accepted by the Jushuitan API. */
        payment_method?: string;
        /** The accounting period days value accepted by the Jushuitan API. */
        accounting_period_days?: string;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The data value returned by the Jushuitan API. */
          data?: {
            /** The po id value returned by the Jushuitan API. */
            po_id?: number;
            /** The external id value returned by the Jushuitan API. */
            external_id?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Upload product records for a merchant-owned online shop. */
    "jushuitan.upload_shop_products": {
      input: {
        /** The items value accepted by the Jushuitan API. */
        items?: Array<{
          /** The merchant SKU identifier in Jushuitan. */
          sku_id: string;
          /** The i id value accepted by the Jushuitan API. */
          i_id?: string;
          /** The sku code value accepted by the Jushuitan API. */
          sku_code?: string;
          /** The shop i id value accepted by the Jushuitan API. */
          shop_i_id: string;
          /** The shop sku id value accepted by the Jushuitan API. */
          shop_sku_id: string;
          /** The original sku id value accepted by the Jushuitan API. */
          original_sku_id?: string;
          /** The name value accepted by the Jushuitan API. */
          name?: string;
          /** The shop properties value value accepted by the Jushuitan API. */
          shop_properties_value?: string;
          /** The sku sign value accepted by the Jushuitan API. */
          sku_sign?: string;
          /** The Jushuitan shop identifier. */
          shop_id: number;
          /** The shop sku url value accepted by the Jushuitan API. */
          shop_sku_url?: string;
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: Record<string, unknown>;
        /** The response message returned by Jushuitan. */
        msg?: string;
        [key: string]: unknown;
      };
    };
    /** Upload supplier master records to Jushuitan. */
    "jushuitan.upload_suppliers": {
      input: {
        /**
         * The business parameters used to upload supplier master records to Jushuitan.
         * @minItems 1
         */
        items: Array<{
          /** The address value accepted by the Jushuitan API. */
          address?: string;
          /** The begin date value accepted by the Jushuitan API. */
          begin_date?: string;
          /** The contacts value accepted by the Jushuitan API. */
          contacts?: string;
          /** The enabled value accepted by the Jushuitan API. */
          enabled: boolean;
          /** The mobile value accepted by the Jushuitan API. */
          mobile?: string;
          /** The name value accepted by the Jushuitan API. */
          name: string;
          /** The phone value accepted by the Jushuitan API. */
          phone?: string;
          /** The accounting period days value accepted by the Jushuitan API. */
          accounting_period_days?: number;
          /** The tax rate value accepted by the Jushuitan API. */
          tax_rate?: number;
          /** The payment method value accepted by the Jushuitan API. */
          payment_method?: string;
          /** The remark value accepted by the Jushuitan API. */
          remark?: string;
          /** The remark2 value accepted by the Jushuitan API. */
          remark2?: string;
          /** The remark3 value accepted by the Jushuitan API. */
          remark3?: string;
          /** The supplier code value accepted by the Jushuitan API. */
          supplier_code: string;
          /** The depositbank value accepted by the Jushuitan API. */
          depositbank?: string;
          /** The bankacount value accepted by the Jushuitan API. */
          bankacount?: string;
          /** The acountnumber value accepted by the Jushuitan API. */
          acountnumber?: string;
          /** The group value accepted by the Jushuitan API. */
          group?: string;
          /** The business registration num value accepted by the Jushuitan API. */
          business_registration_num?: string;
          /** The establish date value accepted by the Jushuitan API. */
          establish_date?: string;
          /** The registered capital value accepted by the Jushuitan API. */
          registered_capital?: number;
          /** The taxpayer identification num value accepted by the Jushuitan API. */
          taxpayer_identification_num?: string;
          /** The unified social credit code value accepted by the Jushuitan API. */
          unified_social_credit_code?: string;
          /**
           * The business scope value accepted by the Jushuitan API.
           * @maxLength 500
           */
          business_scope?: string;
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The number of records per page. */
          page_size?: number;
          /** The one-based page number. */
          page_index?: number;
          /** The total number of matching records. */
          data_count?: number;
          /** The total number of available pages. */
          page_count?: number;
          /** Whether another page is available after this page. */
          has_next?: boolean;
          /** The business records returned in this response. */
          datas?: Array<{
            /** The id value returned by the Jushuitan API. */
            id?: number;
            /** The issuccess value returned by the Jushuitan API. */
            issuccess?: boolean;
            /** The response message returned by Jushuitan. */
            msg?: string;
            /** The name value returned by the Jushuitan API. */
            name?: string;
            /** The supplier code value returned by the Jushuitan API. */
            supplier_code?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Upload after-sale records for returned parcels without matching order information. */
    "jushuitan.upload_unidentified_after_sales": {
      input: {
        /** The data value accepted by the Jushuitan API. */
        data?: Array<{
          /** The Jushuitan after-sale identifier. Use a value greater than 0 to update or 0 to create. */
          as_id: number;
          /** The after-sale application time. Defaults to the current time when omitted. */
          as_date?: string;
          /** The external after-sale identifier. Jushuitan generates one when omitted. */
          outer_as_id?: string;
          /** The after-sale type; currently only standard return is supported. */
          type: string;
          /** The logistics company value accepted by the Jushuitan API. */
          logistics_company?: string;
          /** The l id value accepted by the Jushuitan API. */
          l_id?: string;
          /** The Jushuitan shop identifier; 0 denotes an offline shop and -1 an unknown shop. */
          shop_id: number;
          /** The shop status value accepted by the Jushuitan API. */
          shop_status?: string;
          /**
           * The issue type, updatable and at most 100 characters.
           * @maxLength 100
           */
          question_type?: string;
          /**
           * The refund reason, updatable and at most 100 characters.
           * @maxLength 100
           */
          question_reason?: string;
          /**
           * The updatable remark, at most 500 characters.
           * @maxLength 500
           */
          remark?: string;
          /** The freight value accepted by the Jushuitan API. */
          freight?: number;
          /** The Jushuitan warehouse-company identifier. */
          wms_co_id?: number;
          /** The enabled warehouse identifier: 1 for main, 2 for sales returns, 3 for purchasing, 4 for defective goods, or 6 through 8 for custom warehouses. */
          warehouse_type?: number;
          /** The items value accepted by the Jushuitan API. */
          items?: Array<{
            /** The merchant SKU identifier in Jushuitan. */
            sku_id: string;
            /** The qty value accepted by the Jushuitan API. */
            qty: number;
            /** The amount value accepted by the Jushuitan API. */
            amount?: string;
            /**
             * The product name. When omitted, Jushuitan attempts to fill it from the product master; at most 100 characters.
             * @maxLength 100
             */
            name?: string;
            /**
             * The image path. When omitted, Jushuitan attempts to fill it from the product master; at most 300 characters.
             * @maxLength 300
             */
            pic?: string;
            /**
             * The product variant attributes. When omitted, Jushuitan attempts to fill them from the product master; at most 100 characters.
             * @maxLength 100
             */
            properties_value?: string;
            /** The batch id value accepted by the Jushuitan API. */
            batch_id?: string;
            /** The produced date value accepted by the Jushuitan API. */
            produced_date?: string;
            /** The expiration date value accepted by the Jushuitan API. */
            expiration_date?: string;
            /** The line-item type; currently only return is supported. */
            type: string;
            /** The des value accepted by the Jushuitan API. */
            des?: string;
          }>;
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The issuccess value returned by the Jushuitan API. */
        issuccess?: boolean;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: Array<{
          /** The as id value returned by the Jushuitan API. */
          as_id?: string;
          /** The outer as id value returned by the Jushuitan API. */
          outer_as_id?: string;
          /** Whether the operation succeeded: true for success and false for failure. */
          success?: boolean;
          /** The response message returned by Jushuitan. */
          message?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Void an after-sale document. */
    "jushuitan.void_after_sale": {
      input: {
        /** The as ids value accepted by the Jushuitan API. */
        as_ids: Array<number>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The success value returned by the Jushuitan API. */
          success?: Array<{
            /** The as id value returned by the Jushuitan API. */
            as_id: number;
            /** The outer as id value returned by the Jushuitan API. */
            outer_as_id: string;
            /** The response message returned by Jushuitan. */
            message: string;
            /** The details value returned by the Jushuitan API. */
            details: string;
            /** The is success value returned by the Jushuitan API. */
            is_success: boolean;
            [key: string]: unknown;
          }>;
          /** The fail value returned by the Jushuitan API. */
          fail?: Array<{
            /** The as id value returned by the Jushuitan API. */
            as_id: number;
            /** The outer as id value returned by the Jushuitan API. */
            outer_as_id: string;
            /** The response message returned by Jushuitan. */
            message: string;
            /** The details value returned by the Jushuitan API. */
            details: string;
            /** The is success value returned by the Jushuitan API. */
            is_success: boolean;
            [key: string]: unknown;
          }>;
          /** The success count value returned by the Jushuitan API. */
          success_count?: number;
          /** The fail count value returned by the Jushuitan API. */
          fail_count?: number;
          [key: string]: unknown;
        };
        /** The response message returned by Jushuitan. */
        msg?: string;
        [key: string]: unknown;
      };
    };
    /** Void purchase orders, manufacturing orders, or receiving bookings. */
    "jushuitan.void_purchase_documents": {
      input: {
        /** Internal purchase, manufacturing, or booking identifiers. Supply this list or so_ids; po_ids takes precedence when both are supplied. */
        po_ids?: Array<number>;
        /** The type value accepted by the Jushuitan API. */
        type: string;
        /** The so ids value accepted by the Jushuitan API. */
        so_ids?: Array<string>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The data value returned by the Jushuitan API. */
        data?: unknown;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The request identifier assigned by Jushuitan. */
        request_id?: unknown;
        [key: string]: unknown;
      };
    };
    /** Record order weights, sort express parcels, and mark orders as shipped. */
    "jushuitan.weigh_sort_and_ship_orders": {
      input: {
        /**
         * The business parameters used to record order weights, sort express parcels, and mark orders as shipped.
         * @minItems 1
         */
        items: Array<{
          /** The l id value accepted by the Jushuitan API. */
          l_id: string;
          /** The parcel weight in kilograms. Use 0 to save zero weight or -1 to clear the outbound-document weight. */
          weight: number;
          /** The processing mode: 0 weigh after inspection, 1 weigh and ship after inspection, 2 weigh without inspection, 3 weigh and ship without inspection, 4 weigh after shipping, or 5 automatically choose and ship. Defaults to 1. */
          type?: number;
          /** Whether l_id is an international tracking number. Defaults to false for domestic shipments. */
          is_un_lid?: boolean;
          /** The f volume value accepted by the Jushuitan API. */
          f_volume?: number;
          /** The channel value accepted by the Jushuitan API. */
          channel?: string;
          /** The packaging-material specification. For one material, pass its product code; for multiple materials, use code*quantity pairs separated by commas. A packer is required when packaging materials are provided. */
          packages?: string;
          /** The packer value accepted by the Jushuitan API. */
          packer?: number;
        }>;
      };
      output: {
        /** The Jushuitan response code; zero indicates a successful request. */
        code?: number;
        /** The response message returned by Jushuitan. */
        msg?: string;
        /** The data value returned by the Jushuitan API. */
        data?: {
          /** The business records returned in this response. */
          datas?: Array<{
            /** The weight value returned by the Jushuitan API. */
            weight?: number;
            /** The volume value returned by the Jushuitan API. */
            volume?: number;
            /** The lc id value returned by the Jushuitan API. */
            lc_id?: string;
            /** The l id value returned by the Jushuitan API. */
            l_id?: string;
            /** The logistics company value returned by the Jushuitan API. */
            logistics_company?: number | string;
            /** The receiver state value returned by the Jushuitan API. */
            receiver_state?: string;
            /** The receiver city value returned by the Jushuitan API. */
            receiver_city?: string;
            /** The receiver district value returned by the Jushuitan API. */
            receiver_district?: string;
            /** The cb lc id value returned by the Jushuitan API. */
            cb_lc_id?: string;
            /** The cb l id value returned by the Jushuitan API. */
            cb_l_id?: string;
            /** The cb logistics company value returned by the Jushuitan API. */
            cb_logistics_company?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}
