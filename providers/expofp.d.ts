import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a new exhibitor in one ExpoFP expo. */
    "expofp.add_exhibitor": {
      input: {
        /**
         * Exhibitor name.
         * @minLength 1
         */
        name?: string;
        /**
         * Sanitized HTML description with the tags allowed by ExpoFP.
         * @minLength 1
         */
        description?: string;
        /** Whether the exhibitor is featured. */
        featured?: boolean;
        /** Whether the exhibitor logo is advertised in the header. */
        advertised?: boolean;
        /**
         * Country.
         * @minLength 1
         */
        country?: string;
        /**
         * Address line 1.
         * @minLength 1
         */
        address?: string;
        /**
         * Address line 2.
         * @minLength 1
         */
        address2?: string;
        /**
         * City.
         * @minLength 1
         */
        city?: string;
        /**
         * State or province.
         * @minLength 1
         */
        state?: string;
        /**
         * ZIP or postal code.
         * @minLength 1
         */
        zip?: string;
        /**
         * Primary phone number.
         * @minLength 1
         */
        phone1?: string;
        /**
         * Secondary phone number.
         * @minLength 1
         */
        phone2?: string;
        /**
         * Public email address.
         * @minLength 1
         */
        publicEmail?: string;
        /**
         * Private email address.
         * @minLength 1
         */
        privateEmail?: string;
        /**
         * VAT number.
         * @minLength 1
         */
        vatNumber?: string;
        /**
         * Website URL.
         * @minLength 1
         */
        website?: string;
        /**
         * Facebook URL.
         * @minLength 1
         */
        facebook?: string;
        /**
         * Instagram URL.
         * @minLength 1
         */
        instagram?: string;
        /**
         * LinkedIn URL.
         * @minLength 1
         */
        linkedin?: string;
        /**
         * Twitter or X URL.
         * @minLength 1
         */
        twitter?: string;
        /**
         * Google+ URL.
         * @minLength 1
         */
        googlePlus?: string;
        /**
         * Xing URL.
         * @minLength 1
         */
        xing?: string;
        /**
         * YouTube URL.
         * @minLength 1
         */
        youtube?: string;
        /**
         * Video URL.
         * @minLength 1
         */
        videoUrl?: string;
        /**
         * Contact person name.
         * @minLength 1
         */
        contactName?: string;
        /**
         * Contact person phone number.
         * @minLength 1
         */
        contactPhone?: string;
        /**
         * Administrative notes hidden from the public view.
         * @minLength 1
         */
        adminNotes?: string;
        /**
         * External identifier used to link the exhibitor upstream.
         * @minLength 1
         */
        externalId?: string;
        /**
         * Auto-login URL for the exhibitor portal.
         * @minLength 1
         */
        autoLoginUrl?: string;
        /** Categories assigned to the exhibitor. */
        categories?: Array<{
          /**
           * Category identifier returned by ExpoFP.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * Category name returned by ExpoFP.
           * @minLength 1
           */
          name: string;
        }>;
        /** Tags assigned to the exhibitor. */
        tags?: Array<string>;
        /** Metadata key-value pairs visible only via API. */
        metadata?: Array<{
          /**
           * Metadata key visible only through the ExpoFP API.
           * @minLength 1
           */
          key: string;
          /**
           * Metadata value visible only through the ExpoFP API.
           * @minLength 1
           */
          value: string;
        }>;
        /**
         * Expo identifier where the exhibitor should be created.
         * @exclusiveMinimum 0
         */
        eventId: number;
      };
      output: {
        /**
         * Exhibitor identifier created by ExpoFP.
         * @exclusiveMinimum 0
         */
        id: number;
      };
    };
    /** Delete an ExpoFP exhibitor by exhibitor ID. */
    "expofp.delete_exhibitor": {
      input: {
        /**
         * Exhibitor identifier that should be deleted.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Whether ExpoFP accepted the exhibitor deletion. */
        success: boolean;
      };
    };
    /** Get one ExpoFP exhibitor by exhibitor ID. */
    "expofp.get_exhibitor": {
      input: {
        /**
         * Exhibitor identifier returned by ExpoFP.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The ExpoFP exhibitor returned by the API. */
        exhibitor: {
          /**
           * Exhibitor name.
           * @minLength 1
           */
          name?: string;
          /**
           * Sanitized HTML description with the tags allowed by ExpoFP.
           * @minLength 1
           */
          description?: string;
          /** Whether the exhibitor is featured. */
          featured?: boolean;
          /** Whether the exhibitor logo is advertised in the header. */
          advertised?: boolean;
          /**
           * Country.
           * @minLength 1
           */
          country?: string;
          /**
           * Address line 1.
           * @minLength 1
           */
          address?: string;
          /**
           * Address line 2.
           * @minLength 1
           */
          address2?: string;
          /**
           * City.
           * @minLength 1
           */
          city?: string;
          /**
           * State or province.
           * @minLength 1
           */
          state?: string;
          /**
           * ZIP or postal code.
           * @minLength 1
           */
          zip?: string;
          /**
           * Primary phone number.
           * @minLength 1
           */
          phone1?: string;
          /**
           * Secondary phone number.
           * @minLength 1
           */
          phone2?: string;
          /**
           * Public email address.
           * @minLength 1
           */
          publicEmail?: string;
          /**
           * Private email address.
           * @minLength 1
           */
          privateEmail?: string;
          /**
           * VAT number.
           * @minLength 1
           */
          vatNumber?: string;
          /**
           * Website URL.
           * @minLength 1
           */
          website?: string;
          /**
           * Facebook URL.
           * @minLength 1
           */
          facebook?: string;
          /**
           * Instagram URL.
           * @minLength 1
           */
          instagram?: string;
          /**
           * LinkedIn URL.
           * @minLength 1
           */
          linkedin?: string;
          /**
           * Twitter or X URL.
           * @minLength 1
           */
          twitter?: string;
          /**
           * Google+ URL.
           * @minLength 1
           */
          googlePlus?: string;
          /**
           * Xing URL.
           * @minLength 1
           */
          xing?: string;
          /**
           * YouTube URL.
           * @minLength 1
           */
          youtube?: string;
          /**
           * Video URL.
           * @minLength 1
           */
          videoUrl?: string;
          /**
           * Contact person name.
           * @minLength 1
           */
          contactName?: string;
          /**
           * Contact person phone number.
           * @minLength 1
           */
          contactPhone?: string;
          /**
           * Administrative notes hidden from the public view.
           * @minLength 1
           */
          adminNotes?: string;
          /**
           * External identifier used to link the exhibitor upstream.
           * @minLength 1
           */
          externalId?: string;
          /**
           * Auto-login URL for the exhibitor portal.
           * @minLength 1
           */
          autoLoginUrl?: string;
          /** Categories assigned to the exhibitor. */
          categories?: Array<{
            /**
             * Category identifier returned by ExpoFP.
             * @exclusiveMinimum 0
             */
            id: number;
            /**
             * Category name returned by ExpoFP.
             * @minLength 1
             */
            name: string;
          }>;
          /** Tags assigned to the exhibitor. */
          tags?: Array<string>;
          /** Metadata key-value pairs visible only via API. */
          metadata?: Array<{
            /**
             * Metadata key visible only through the ExpoFP API.
             * @minLength 1
             */
            key: string;
            /**
             * Metadata value visible only through the ExpoFP API.
             * @minLength 1
             */
            value: string;
          }>;
          /**
           * Exhibitor identifier returned by ExpoFP.
           * @exclusiveMinimum 0
           */
          id: number;
          /** Booth names assigned to the exhibitor. */
          booths: Array<string>;
          /** Gallery image identifiers assigned to the exhibitor. */
          images: Array<string>;
          /**
           * Logo image URL.
           * @format uri
           */
          logoFileUrl?: string | null;
          /**
           * Last updated timestamp in ISO8601 format.
           * @minLength 1
           */
          updatedAt?: string;
        };
      };
    };
    /** Resolve an ExpoFP exhibitor ID from expo ID and exhibitor external ID. */
    "expofp.get_exhibitor_id": {
      input: {
        /**
         * Expo identifier that owns the exhibitor.
         * @exclusiveMinimum 0
         */
        eventId: number;
        /**
         * External identifier configured on the exhibitor.
         * @minLength 1
         */
        externalId: string;
      };
      output: {
        /**
         * Exhibitor identifier returned by ExpoFP.
         * @exclusiveMinimum 0
         */
        id: number;
      };
    };
    /** List all exhibitors in one ExpoFP expo. */
    "expofp.list_exhibitors": {
      input: {
        /**
         * Expo identifier whose exhibitors should be listed.
         * @exclusiveMinimum 0
         */
        eventId: number;
      };
      output: {
        /** Exhibitors returned by ExpoFP. */
        exhibitors: Array<{
          /**
           * Exhibitor identifier returned by ExpoFP.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * Exhibitor name returned by ExpoFP.
           * @minLength 1
           */
          name: string;
          /** Booth names assigned to the exhibitor. */
          booths: Array<string>;
          /** Category names assigned to the exhibitor. */
          categories: Array<string>;
          /** String tags assigned to the exhibitor. */
          tags: Array<string>;
          /** Extra names assigned to the exhibitor. */
          extras: Array<string>;
        }>;
      };
    };
    /** List all expos accessible to the current ExpoFP API token. */
    "expofp.list_expos": {
      input: Record<string, never>;
      output: {
        /** Expos returned by ExpoFP. */
        expos: Array<{
          /**
           * Expo identifier returned by ExpoFP.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * Unique Expo key returned by ExpoFP.
           * @minLength 1
           */
          key: string;
          /**
           * Expo name returned by ExpoFP.
           * @minLength 1
           */
          name: string;
        }>;
      };
    };
    /** Partially update an ExpoFP exhibitor by exhibitor ID. */
    "expofp.update_exhibitor": {
      input: {
        /**
         * Exhibitor name.
         * @minLength 1
         */
        name?: string;
        /**
         * Sanitized HTML description with the tags allowed by ExpoFP.
         * @minLength 1
         */
        description?: string;
        /** Whether the exhibitor is featured. */
        featured?: boolean;
        /** Whether the exhibitor logo is advertised in the header. */
        advertised?: boolean;
        /**
         * Country.
         * @minLength 1
         */
        country?: string;
        /**
         * Address line 1.
         * @minLength 1
         */
        address?: string;
        /**
         * Address line 2.
         * @minLength 1
         */
        address2?: string;
        /**
         * City.
         * @minLength 1
         */
        city?: string;
        /**
         * State or province.
         * @minLength 1
         */
        state?: string;
        /**
         * ZIP or postal code.
         * @minLength 1
         */
        zip?: string;
        /**
         * Primary phone number.
         * @minLength 1
         */
        phone1?: string;
        /**
         * Secondary phone number.
         * @minLength 1
         */
        phone2?: string;
        /**
         * Public email address.
         * @minLength 1
         */
        publicEmail?: string;
        /**
         * Private email address.
         * @minLength 1
         */
        privateEmail?: string;
        /**
         * VAT number.
         * @minLength 1
         */
        vatNumber?: string;
        /**
         * Website URL.
         * @minLength 1
         */
        website?: string;
        /**
         * Facebook URL.
         * @minLength 1
         */
        facebook?: string;
        /**
         * Instagram URL.
         * @minLength 1
         */
        instagram?: string;
        /**
         * LinkedIn URL.
         * @minLength 1
         */
        linkedin?: string;
        /**
         * Twitter or X URL.
         * @minLength 1
         */
        twitter?: string;
        /**
         * Google+ URL.
         * @minLength 1
         */
        googlePlus?: string;
        /**
         * Xing URL.
         * @minLength 1
         */
        xing?: string;
        /**
         * YouTube URL.
         * @minLength 1
         */
        youtube?: string;
        /**
         * Video URL.
         * @minLength 1
         */
        videoUrl?: string;
        /**
         * Contact person name.
         * @minLength 1
         */
        contactName?: string;
        /**
         * Contact person phone number.
         * @minLength 1
         */
        contactPhone?: string;
        /**
         * Administrative notes hidden from the public view.
         * @minLength 1
         */
        adminNotes?: string;
        /**
         * External identifier used to link the exhibitor upstream.
         * @minLength 1
         */
        externalId?: string;
        /**
         * Auto-login URL for the exhibitor portal.
         * @minLength 1
         */
        autoLoginUrl?: string;
        /** Categories assigned to the exhibitor. */
        categories?: Array<{
          /**
           * Category identifier returned by ExpoFP.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * Category name returned by ExpoFP.
           * @minLength 1
           */
          name: string;
        }>;
        /** Tags assigned to the exhibitor. */
        tags?: Array<string>;
        /** Metadata key-value pairs visible only via API. */
        metadata?: Array<{
          /**
           * Metadata key visible only through the ExpoFP API.
           * @minLength 1
           */
          key: string;
          /**
           * Metadata value visible only through the ExpoFP API.
           * @minLength 1
           */
          value: string;
        }>;
        /**
         * Exhibitor identifier that should be updated.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Whether ExpoFP accepted the exhibitor update. */
        success: boolean;
      };
    };
  }
}
