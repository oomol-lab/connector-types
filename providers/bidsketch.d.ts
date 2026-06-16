import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one BidSketch client by client ID. */
    "bidsketch.get_client": {
      input: {
        /**
         * The BidSketch client ID.
         * @exclusiveMinimum 0
         */
        clientId: number;
      };
      output: {
        /** A BidSketch client. */
        client: {
          /**
           * The BidSketch client ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The API URL for the client.
           * @format uri
           */
          url?: string;
          /**
           * The BidSketch app URL for the client.
           * @format uri
           */
          app_url?: string;
          /**
           * The timestamp when the client was created.
           * @format date-time
           */
          created_at?: string;
          /**
           * The timestamp when the client was last updated.
           * @format date-time
           */
          updated_at?: string;
          /**
           * The client first name.
           * @minLength 1
           */
          first_name?: string;
          /**
           * The client last name.
           * @minLength 1
           */
          last_name?: string;
          /**
           * The client primary email address.
           * @format email
           */
          email?: string;
          /**
           * The client company name or full display name.
           * @minLength 1
           */
          name?: string;
          /**
           * The client primary phone number.
           * @minLength 1
           */
          phone?: string;
          /**
           * The client alternate phone number.
           * @minLength 1
           */
          alt_phone?: string;
          /**
           * The client website.
           * @minLength 1
           */
          website?: string;
          /**
           * The first client address line.
           * @minLength 1
           */
          address_field_one?: string;
          /**
           * The second client address line.
           * @minLength 1
           */
          address_field_two?: string;
          /**
           * The client city.
           * @minLength 1
           */
          city?: string;
          /**
           * The client state or region.
           * @minLength 1
           */
          state?: string;
          /**
           * The client postal code.
           * @minLength 1
           */
          postal_zip?: string;
          /**
           * The client country.
           * @minLength 1
           */
          country?: string;
          /**
           * The client notes.
           * @minLength 1
           */
          notes?: string;
          /** A secondary contact attached to a BidSketch client. */
          other_contact?: {
            /**
             * The secondary contact first name.
             * @minLength 1
             */
            first_name?: string;
            /**
             * The secondary contact last name.
             * @minLength 1
             */
            last_name?: string;
            /**
             * The secondary contact email address.
             * @format email
             */
            email?: string;
            /**
             * The secondary contact phone number.
             * @minLength 1
             */
            phone?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Get one BidSketch proposal by proposal ID. */
    "bidsketch.get_proposal": {
      input: {
        /**
         * The BidSketch proposal ID.
         * @exclusiveMinimum 0
         */
        proposalId: number;
      };
      output: {
        /** A BidSketch proposal detail record. */
        proposal: {
          /**
           * The BidSketch proposal ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The API URL for the proposal.
           * @format uri
           */
          url?: string;
          /**
           * The BidSketch app URL for the proposal.
           * @format uri
           */
          app_url?: string;
          /**
           * The timestamp when the proposal was created.
           * @format date-time
           */
          created_at?: string;
          /**
           * The timestamp when the proposal was last updated.
           * @format date-time
           */
          updated_at?: string;
          /**
           * The explicit proposal date when BidSketch returns one.
           * @format date-time
           */
          proposal_date?: string | null;
          /**
           * The proposal name.
           * @minLength 1
           */
          name?: string;
          /**
           * The proposal description.
           * @minLength 1
           */
          description?: string;
          /**
           * The proposal status.
           * @minLength 1
           */
          status?: string;
          /** Whether the proposal is still a draft. */
          is_draft?: boolean;
          /**
           * The BidSketch user who owns the proposal.
           * @minLength 1
           */
          user?: string;
          /**
           * The proposal ISO currency code.
           * @minLength 1
           */
          currency?: string;
          /** The calculated primary tax value returned by BidSketch. */
          tax?: number;
          /** The calculated secondary tax value returned by BidSketch. */
          tax2?: number;
          /** The calculated monthly fee subtotal. */
          monthly_fees?: number;
          /** The calculated yearly fee subtotal. */
          yearly_fees?: number;
          /** The calculated one-time fee subtotal. */
          one_time_fees?: number;
          /** The calculated discount amount. */
          discount?: number;
          /** The calculated total proposal value. */
          total?: number;
          /** The BidSketch proposal settings block. */
          settings?: {
            /**
             * The approval message shown to the client.
             * @minLength 1
             */
            approval_message?: string;
            /**
             * The note displayed for optional fees.
             * @minLength 1
             */
            optional_fees_note?: string;
            /**
             * The title used for optional fees.
             * @minLength 1
             */
            optional_fees_title?: string;
            /**
             * The title used for proposal fees.
             * @minLength 1
             */
            proposal_fees_title?: string;
            /** Whether optional fees are included in BidSketch totals. */
            include_optional_fees_in_totals?: boolean;
            /** Whether the monthly total is hidden. */
            hide_monthly_total?: boolean;
            /** Whether the project total is hidden. */
            hide_project_total?: boolean;
            /** Whether the yearly total is hidden. */
            hide_yearly_total?: boolean;
            /** Whether the grand total is hidden. */
            hide_grand_total?: boolean;
            [key: string]: unknown;
          };
          /** The client summary nested under a BidSketch proposal. */
          client?: {
            /**
             * The BidSketch client ID attached to the proposal.
             * @exclusiveMinimum 0
             */
            id: number;
            /**
             * The client display name.
             * @minLength 1
             */
            name?: string;
            /**
             * The API URL for the client.
             * @format uri
             */
            url?: string;
            /**
             * The BidSketch app URL for the client.
             * @format uri
             */
            app_url?: string;
            [key: string]: unknown;
          };
          /** The BidSketch content summary attached to a proposal detail response. */
          content?: {
            /**
             * The total number of sections and fees in the proposal.
             * @minimum 0
             */
            count?: number;
            /**
             * The API URL for the proposal content endpoint.
             * @format uri
             */
            url?: string;
            /** A BidSketch proposal content bucket summary. */
            opening_sections?: {
              /**
               * The number of items in this proposal content bucket.
               * @minimum 0
               */
              count?: number;
              /**
               * The API URL for this proposal content bucket.
               * @format uri
               */
              url?: string;
              [key: string]: unknown;
            };
            /** A BidSketch proposal content bucket summary. */
            fees?: {
              /**
               * The number of items in this proposal content bucket.
               * @minimum 0
               */
              count?: number;
              /**
               * The API URL for this proposal content bucket.
               * @format uri
               */
              url?: string;
              [key: string]: unknown;
            };
            /** A BidSketch proposal content bucket summary. */
            closing_sections?: {
              /**
               * The number of items in this proposal content bucket.
               * @minimum 0
               */
              count?: number;
              /**
               * The API URL for this proposal content bucket.
               * @format uri
               */
              url?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Get one BidSketch proposal with its grouped sections and fees. */
    "bidsketch.get_proposal_content": {
      input: {
        /**
         * The BidSketch proposal ID.
         * @exclusiveMinimum 0
         */
        proposalId: number;
      };
      output: {
        /** A BidSketch proposal content response. */
        proposal: {
          /**
           * The BidSketch proposal ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The API URL for the proposal.
           * @format uri
           */
          url?: string;
          /**
           * The BidSketch app URL for the proposal.
           * @format uri
           */
          app_url?: string;
          /** The full BidSketch proposal content grouped by section type and fees. */
          content?: {
            /** The proposal opening sections in display order. */
            opening_sections?: Array<{
              /**
               * The BidSketch proposal section ID.
               * @exclusiveMinimum 0
               */
              id: number;
              /**
               * The API URL for the proposal section.
               * @format uri
               */
              url?: string;
              /**
               * The proposal section name.
               * @minLength 1
               */
              name?: string;
              /**
               * The proposal section HTML body.
               * @minLength 1
               */
              description?: string;
              [key: string]: unknown;
            }>;
            /** The proposal fee rows in display order. */
            fees?: Array<{
              /**
               * The BidSketch proposal fee ID.
               * @exclusiveMinimum 0
               */
              id: number;
              /**
               * The API URL for the proposal fee.
               * @format uri
               */
              url?: string;
              /**
               * The proposal fee name.
               * @minLength 1
               */
              name?: string;
              /** Whether the fee is optional. */
              optional?: boolean;
              /**
               * The BidSketch fee type.
               * @minLength 1
               */
              feetype?: string;
              /**
               * The unit label associated with the fee.
               * @minLength 1
               */
              unit?: string | null;
              /**
               * The display-friendly fee details string.
               * @minLength 1
               */
              details?: string;
              /**
               * The proposal fee ISO currency code.
               * @minLength 1
               */
              currency?: string;
              /** The base fee amount. */
              amount?: number;
              /** The fee quantity when BidSketch returns one. */
              quantity?: number | null;
              /** The total fee value. */
              total?: number;
              /**
               * The proposal fee HTML description.
               * @minLength 1
               */
              description?: string;
              [key: string]: unknown;
            }>;
            /** The proposal closing sections in display order. */
            closing_sections?: Array<{
              /**
               * The BidSketch proposal section ID.
               * @exclusiveMinimum 0
               */
              id: number;
              /**
               * The API URL for the proposal section.
               * @format uri
               */
              url?: string;
              /**
               * The proposal section name.
               * @minLength 1
               */
              name?: string;
              /**
               * The proposal section HTML body.
               * @minLength 1
               */
              description?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** List proposals that belong to one BidSketch client. */
    "bidsketch.list_client_proposals": {
      input: {
        /**
         * The BidSketch client ID.
         * @exclusiveMinimum 0
         */
        clientId: number;
        /**
         * The 1-based page number to request from BidSketch.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of records to request per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The proposal summaries returned by BidSketch. */
        proposals: Array<{
          /**
           * The BidSketch proposal ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The API URL for the proposal.
           * @format uri
           */
          url?: string;
          /**
           * The BidSketch app URL for the proposal.
           * @format uri
           */
          app_url?: string;
          /**
           * The timestamp when the proposal was created.
           * @format date-time
           */
          created_at?: string;
          /**
           * The timestamp when the proposal was last updated.
           * @format date-time
           */
          updated_at?: string;
          /**
           * The proposal name.
           * @minLength 1
           */
          name?: string;
          /**
           * The proposal description.
           * @minLength 1
           */
          description?: string;
          /**
           * The proposal status.
           * @minLength 1
           */
          status?: string;
          /** Whether the proposal is still a draft. */
          is_draft?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** List clients available in the authenticated BidSketch account. */
    "bidsketch.list_clients": {
      input: {
        /**
         * The 1-based page number to request from BidSketch.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of records to request per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The clients returned by BidSketch. */
        clients: Array<{
          /**
           * The BidSketch client ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The API URL for the client.
           * @format uri
           */
          url?: string;
          /**
           * The BidSketch app URL for the client.
           * @format uri
           */
          app_url?: string;
          /**
           * The timestamp when the client was created.
           * @format date-time
           */
          created_at?: string;
          /**
           * The timestamp when the client was last updated.
           * @format date-time
           */
          updated_at?: string;
          /**
           * The client first name.
           * @minLength 1
           */
          first_name?: string;
          /**
           * The client last name.
           * @minLength 1
           */
          last_name?: string;
          /**
           * The client primary email address.
           * @format email
           */
          email?: string;
          /**
           * The client company name or full display name.
           * @minLength 1
           */
          name?: string;
          /**
           * The client primary phone number.
           * @minLength 1
           */
          phone?: string;
          /**
           * The client alternate phone number.
           * @minLength 1
           */
          alt_phone?: string;
          /**
           * The client website.
           * @minLength 1
           */
          website?: string;
          /**
           * The first client address line.
           * @minLength 1
           */
          address_field_one?: string;
          /**
           * The second client address line.
           * @minLength 1
           */
          address_field_two?: string;
          /**
           * The client city.
           * @minLength 1
           */
          city?: string;
          /**
           * The client state or region.
           * @minLength 1
           */
          state?: string;
          /**
           * The client postal code.
           * @minLength 1
           */
          postal_zip?: string;
          /**
           * The client country.
           * @minLength 1
           */
          country?: string;
          /**
           * The client notes.
           * @minLength 1
           */
          notes?: string;
          /** A secondary contact attached to a BidSketch client. */
          other_contact?: {
            /**
             * The secondary contact first name.
             * @minLength 1
             */
            first_name?: string;
            /**
             * The secondary contact last name.
             * @minLength 1
             */
            last_name?: string;
            /**
             * The secondary contact email address.
             * @format email
             */
            email?: string;
            /**
             * The secondary contact phone number.
             * @minLength 1
             */
            phone?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** List proposals available in the authenticated BidSketch account. */
    "bidsketch.list_proposals": {
      input: {
        /**
         * The 1-based page number to request from BidSketch.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of records to request per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The proposal summaries returned by BidSketch. */
        proposals: Array<{
          /**
           * The BidSketch proposal ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The API URL for the proposal.
           * @format uri
           */
          url?: string;
          /**
           * The BidSketch app URL for the proposal.
           * @format uri
           */
          app_url?: string;
          /**
           * The timestamp when the proposal was created.
           * @format date-time
           */
          created_at?: string;
          /**
           * The timestamp when the proposal was last updated.
           * @format date-time
           */
          updated_at?: string;
          /**
           * The proposal name.
           * @minLength 1
           */
          name?: string;
          /**
           * The proposal description.
           * @minLength 1
           */
          description?: string;
          /**
           * The proposal status.
           * @minLength 1
           */
          status?: string;
          /** Whether the proposal is still a draft. */
          is_draft?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
