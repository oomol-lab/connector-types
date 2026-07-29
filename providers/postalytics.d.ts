import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get basic details for one Postalytics campaign. */
    "postalytics.get_campaign": {
      input: {
        /**
         * The Postalytics campaign identifier.
         * @minimum 1
         */
        campaignId: number;
      };
      output: {
        /** The contact list identifier used by the campaign. */
        ContactListId?: number;
        /** The Postalytics direct-mail drop identifier. */
        DirectMailDropId?: number;
        /** The direct-mail campaign name when available. */
        DirectMailName?: string | null;
        /** The campaign endpoint identifier when available. */
        EndPointId?: string | null;
        /** The Postalytics campaign status code. */
        Status?: number;
        [key: string]: unknown;
      };
    };
    /** Get delivery and engagement statistics for one Postalytics campaign. */
    "postalytics.get_campaign_stats": {
      input: {
        /**
         * The Postalytics campaign drop identifier.
         * @minimum 1
         */
        dropId: number;
      };
      output: Array<{
        /** The number of contacts targeted by the campaign. */
        audience?: number;
        /** The Postalytics campaign identifier. */
        campaign_id?: number;
        /** The Postalytics campaign type code. */
        campaign_type?: number;
        /** The number of conversions attributed to the campaign. */
        conversions?: number;
        /** The campaign creation timestamp returned by Postalytics. */
        created_date?: string;
        /** The Postalytics creative type code. */
        creative_type?: number;
        /** The number of delivered mail pieces. */
        delivered?: number;
        /** The Postalytics direct-mail drop identifier. */
        drop_id?: number;
        /** The triggered-drip endpoint when available. */
        endpoint?: string | null;
        /** The number of mail pieces in the local delivery area. */
        in_local_area?: number;
        /** The number of mail pieces in transit. */
        in_transit?: number;
        /** Whether the campaign is in live mode as a Postalytics numeric flag. */
        is_live_mode?: number;
        /** The campaign name when available. */
        name?: string | null;
        /** The total number of tracked page views. */
        pageviews?: number;
        /** The number of mail pieces processed for delivery. */
        processed_for_delivery?: number;
        /** The number of returned mail pieces. */
        returned?: number;
        /** The campaign send timestamp returned by Postalytics. */
        send_date?: string;
        /** The Postalytics campaign status code. */
        status?: number;
        /** The front thumbnail URL when available. */
        thumbnail?: string | null;
        /** The back thumbnail URL when available. */
        thumbnail_back?: string | null;
        /** The number of unique tracked page views. */
        unique_pageviews?: number;
        /** The number of unique tracked visitors. */
        unique_visitors?: number;
        [key: string]: unknown;
      }>;
    };
    /** Get details for one Postalytics contact. */
    "postalytics.get_contact": {
      input: {
        /**
         * The Postalytics contact identifier.
         * @minimum 1
         */
        contactId: number;
      };
      output: {
        /** The contact street address when available. */
        Address?: string | null;
        /** The second contact address line when available. */
        Address2?: string | null;
        /** The Postalytics address validation status identifier. */
        AddressStatusId?: number;
        /** The contact city when available. */
        City?: string | null;
        /** The contact company when available. */
        Company?: string | null;
        /** The Postalytics contact list identifier. */
        ContactListId?: number;
        /** The contact email address when available. */
        EmailId?: string | null;
        /** The contact first name when available. */
        FirstName?: string | null;
        /** The Postalytics contact identifier. */
        Id?: number;
        /** The contact last name when available. */
        LastName?: string | null;
        /** The contact mobile phone number when available. */
        Mobile?: string | null;
        /** The contact occupation when available. */
        Occupation?: string | null;
        /** The contact phone number when available. */
        Phone?: string | null;
        /** The contact state or region when available. */
        State?: string | null;
        /** The contact website when available. */
        Website?: string | null;
        /** The contact postal code when available. */
        Zip?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get details for one Postalytics direct-mail template. */
    "postalytics.get_template": {
      input: {
        /**
         * The Postalytics template identifier.
         * @minimum 1
         */
        templateId: number;
      };
      output: Array<{
        /** The full-size back image URL or letter back content when available. */
        back?: string | null;
        /** The number of pages in the template. */
        count?: number;
        /** The template creation timestamp when available. */
        created_date?: string | null;
        /** The template font family when available. */
        font_family?: string | null;
        /** The full-size front image URL or letter front content when available. */
        front?: string | null;
        /** The complete template HTML when available. */
        html?: string | null;
        /** Whether the template has a back side. */
        is_double_sided?: boolean;
        /** Whether the html field contains the complete template content. */
        is_full_html?: boolean;
        /** Whether the template has been proofed. */
        is_proofed?: boolean;
        /** The template name when available. */
        name?: string | null;
        /** The template size when available. */
        size?: string | null;
        /** The Postalytics template identifier. */
        template_id?: number;
        /** The front thumbnail URL when available. */
        thumbnail?: string | null;
        /** The back thumbnail URL when available. */
        thumbnail_back?: string | null;
        [key: string]: unknown;
      }>;
    };
    /** List all direct-mail campaigns in the authenticated Postalytics account. */
    "postalytics.list_campaigns": {
      input: Record<string, never>;
      output: Array<{
        /** The number of contacts targeted by the campaign. */
        audience?: number;
        /** The Postalytics campaign identifier. */
        campaign_id?: number;
        /** The Postalytics campaign type code. */
        campaign_type?: number;
        /** The number of conversions attributed to the campaign. */
        conversions?: number;
        /** The campaign creation timestamp returned by Postalytics. */
        created_date?: string;
        /** The Postalytics creative type code. */
        creative_type?: number;
        /** The number of delivered mail pieces. */
        delivered?: number;
        /** The Postalytics direct-mail drop identifier. */
        drop_id?: number;
        /** The triggered-drip endpoint when available. */
        endpoint?: string | null;
        /** The number of mail pieces in the local delivery area. */
        in_local_area?: number;
        /** The number of mail pieces in transit. */
        in_transit?: number;
        /** Whether the campaign is in live mode as a Postalytics numeric flag. */
        is_live_mode?: number;
        /** The campaign name when available. */
        name?: string | null;
        /** The total number of tracked page views. */
        pageviews?: number;
        /** The number of mail pieces processed for delivery. */
        processed_for_delivery?: number;
        /** The number of returned mail pieces. */
        returned?: number;
        /** The campaign send timestamp returned by Postalytics. */
        send_date?: string;
        /** The Postalytics campaign status code. */
        status?: number;
        /** The front thumbnail URL when available. */
        thumbnail?: string | null;
        /** The back thumbnail URL when available. */
        thumbnail_back?: string | null;
        /** The number of unique tracked page views. */
        unique_pageviews?: number;
        /** The number of unique tracked visitors. */
        unique_visitors?: number;
        [key: string]: unknown;
      }>;
    };
    /** List all contact lists in the authenticated Postalytics account. */
    "postalytics.list_contact_lists": {
      input: Record<string, never>;
      output: Array<{
        /** The Postalytics contact list identifier. */
        contact_list_id?: number;
        /** The number of contacts in the list. */
        count?: number;
        /** The contact list creation timestamp when available. */
        created_date?: string | null;
        /** The contact list name when available. */
        name?: string | null;
        [key: string]: unknown;
      }>;
    };
    /** List a bounded page of contacts from one Postalytics contact list. */
    "postalytics.list_contacts": {
      input: {
        /**
         * The Postalytics contact list identifier.
         * @minimum 1
         */
        contactListId: number;
        /**
         * The maximum number of contacts to return, from 1 through 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The one-based row number at which to start the result page.
         * @minimum 1
         */
        start?: number;
      };
      output: Array<{
        /** The contact city when available. */
        address_city?: string | null;
        /** The contact state or region when available. */
        address_state?: string | null;
        /** The contact street address when available. */
        address_street?: string | null;
        /** The second contact address line when available. */
        address_street2?: string | null;
        /** The contact postal code when available. */
        address_zip?: string | null;
        /** The contact company when available. */
        company?: string | null;
        /** The Postalytics contact identifier. */
        contact_id?: number;
        /** The Postalytics contact list identifier. */
        contact_list_id?: number;
        /** The contact creation timestamp when available. */
        created_date?: string | null;
        /** The contact email address when available. */
        email_address?: string | null;
        /** The contact first name when available. */
        first_name?: string | null;
        /** The contact last name when available. */
        last_name?: string | null;
        /** The contact mobile phone number when available. */
        mobile_phone?: string | null;
        /** The contact occupation when available. */
        occupation?: string | null;
        /** The contact phone number when available. */
        phone?: string | null;
        /** The one-based row number returned by Postalytics. */
        row?: number;
        /** The contact website when available. */
        website?: string | null;
        [key: string]: unknown;
      }>;
    };
    /** List all direct-mail templates in the authenticated Postalytics account. */
    "postalytics.list_templates": {
      input: Record<string, never>;
      output: Array<{
        /** The full-size back image URL or letter back content when available. */
        back?: string | null;
        /** The number of pages in the template. */
        count?: number;
        /** The template creation timestamp when available. */
        created_date?: string | null;
        /** The template font family when available. */
        font_family?: string | null;
        /** The full-size front image URL or letter front content when available. */
        front?: string | null;
        /** The complete template HTML when available. */
        html?: string | null;
        /** Whether the template has a back side. */
        is_double_sided?: boolean;
        /** Whether the html field contains the complete template content. */
        is_full_html?: boolean;
        /** Whether the template has been proofed. */
        is_proofed?: boolean;
        /** The template name when available. */
        name?: string | null;
        /** The template size when available. */
        size?: string | null;
        /** The Postalytics template identifier. */
        template_id?: number;
        /** The front thumbnail URL when available. */
        thumbnail?: string | null;
        /** The back thumbnail URL when available. */
        thumbnail_back?: string | null;
        [key: string]: unknown;
      }>;
    };
  }
}
