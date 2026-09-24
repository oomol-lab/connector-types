import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one Odoo record. Relational commands may delete related records. */
    "odoo.create": {
      input: {
        /**
         * The technical model name, such as res.partner or sale.order.
         * @minLength 1
         */
        model: string;
        /** The new record values, including relational command arrays. */
        values: Record<string, unknown>;
        /** Odoo context values such as lang, tz, or allowed_company_ids. */
        context?: Record<string, unknown>;
      };
      output: {
        /**
         * The created record ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
    };
    /** Call a public Odoo model method, including custom methods that may modify or delete data. */
    "odoo.execute_kw": {
      input: {
        /**
         * The technical model name, such as res.partner or sale.order.
         * @minLength 1
         */
        model: string;
        /**
         * The public model method name, such as action_confirm.
         * @minLength 1
         */
        method: string;
        /** The positional method arguments. */
        args?: Array<unknown>;
        /** The keyword method arguments, including context when needed. */
        kwargs?: Record<string, unknown>;
      };
      output: {
        /** The JSON value returned by the method without coercion. */
        result: unknown;
      };
    };
    /** Inspect field types and metadata for an Odoo model. */
    "odoo.fields_get": {
      input: {
        /**
         * The technical model name, such as res.partner or sale.order.
         * @minLength 1
         */
        model: string;
        /** The field names to return. */
        fields?: Array<string>;
        /** The metadata attributes to return, such as string, type, help, required, or selection. */
        attributes?: Array<string>;
        /** Odoo context values such as lang, tz, or allowed_company_ids. */
        context?: Record<string, unknown>;
      };
      output: {
        /** The field metadata keyed by field name. */
        fields: Record<string, Record<string, unknown>>;
      };
    };
    /** Read fields from specific Odoo records. */
    "odoo.read": {
      input: {
        /**
         * The technical model name, such as res.partner or sale.order.
         * @minLength 1
         */
        model: string;
        /**
         * The record IDs to operate on.
         * @minItems 1
         */
        ids: Array<number>;
        /** The field names to return. */
        fields?: Array<string>;
        /** Odoo context values such as lang, tz, or allowed_company_ids. */
        context?: Record<string, unknown>;
      };
      output: {
        /** The matching Odoo records. */
        records: Array<Record<string, unknown>>;
      };
    };
    /** Find record IDs matching an Odoo domain. */
    "odoo.search": {
      input: {
        /**
         * The technical model name, such as res.partner or sale.order.
         * @minLength 1
         */
        model: string;
        /** The Odoo domain in JSON form. Use an empty array to match all records. */
        domain: Array<unknown>;
        /**
         * The maximum number of records to return.
         * @exclusiveMinimum 0
         * @default 100
         */
        limit?: number;
        /**
         * The number of matching records to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * The sort expression, such as name asc or id asc.
         * @minLength 1
         */
        order?: string;
        /** Odoo context values such as lang, tz, or allowed_company_ids. */
        context?: Record<string, unknown>;
      };
      output: {
        /** The matching record IDs. */
        ids: Array<number>;
      };
    };
    /** Count Odoo records matching a domain. */
    "odoo.search_count": {
      input: {
        /**
         * The technical model name, such as res.partner or sale.order.
         * @minLength 1
         */
        model: string;
        /** The Odoo domain in JSON form. Use an empty array to match all records. */
        domain: Array<unknown>;
        /** Odoo context values such as lang, tz, or allowed_company_ids. */
        context?: Record<string, unknown>;
      };
      output: {
        /**
         * The record count.
         * @minimum 0
         */
        count: number;
      };
    };
    /** Search and read Odoo records in one ORM call. */
    "odoo.search_read": {
      input: {
        /**
         * The technical model name, such as res.partner or sale.order.
         * @minLength 1
         */
        model: string;
        /** The Odoo domain in JSON form. Use an empty array to match all records. */
        domain: Array<unknown>;
        /** The field names to return. */
        fields?: Array<string>;
        /**
         * The maximum number of records to return.
         * @exclusiveMinimum 0
         * @default 100
         */
        limit?: number;
        /**
         * The number of matching records to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * The sort expression, such as name asc or id asc.
         * @minLength 1
         */
        order?: string;
        /** Odoo context values such as lang, tz, or allowed_company_ids. */
        context?: Record<string, unknown>;
      };
      output: {
        /** The matching Odoo records. */
        records: Array<Record<string, unknown>>;
      };
    };
    /** Delete one or more Odoo records. */
    "odoo.unlink": {
      input: {
        /**
         * The technical model name, such as res.partner or sale.order.
         * @minLength 1
         */
        model: string;
        /**
         * The record IDs to operate on.
         * @minItems 1
         */
        ids: Array<number>;
        /** Odoo context values such as lang, tz, or allowed_company_ids. */
        context?: Record<string, unknown>;
      };
      output: {
        /** Whether Odoo reported success. */
        success: boolean;
      };
    };
    /** Update Odoo records. Relational commands may delete related records. */
    "odoo.write": {
      input: {
        /**
         * The technical model name, such as res.partner or sale.order.
         * @minLength 1
         */
        model: string;
        /**
         * The record IDs to operate on.
         * @minItems 1
         */
        ids: Array<number>;
        /** The updated field values, including relational command arrays. */
        values: Record<string, unknown>;
        /** Odoo context values such as lang, tz, or allowed_company_ids. */
        context?: Record<string, unknown>;
      };
      output: {
        /** Whether Odoo reported success. */
        success: boolean;
      };
    };
  }
}
