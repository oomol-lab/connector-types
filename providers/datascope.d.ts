import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one DataScope metadata list element under a metadata list type. */
    "datascope.create_list_element": {
      input: {
        /**
         * The metadata list type that will own the new element.
         * @minLength 1
         */
        metadataType: string;
        /**
         * The code to store on the new metadata list element.
         * @minLength 1
         */
        code: string;
        /**
         * The display name of the new metadata list element.
         * @minLength 1
         */
        name: string;
        /**
         * The description to store on the new element.
         * @minLength 1
         */
        description?: string;
        /**
         * The first custom attribute to store on the new element.
         * @minLength 1
         */
        attribute1?: string;
        /**
         * The second custom attribute to store on the new element.
         * @minLength 1
         */
        attribute2?: string;
      };
      output: {
        /** The created metadata list element. */
        element: {
          /**
           * The unique identifier of the metadata list element.
           * @minimum 1
           */
          id: number;
          /**
           * The metadata list type that owns this element.
           * @minLength 1
           */
          metadataType?: string;
          /**
           * The list element code returned by DataScope.
           * @minLength 1
           */
          code?: string;
          /**
           * The list element name returned by DataScope.
           * @minLength 1
           */
          name: string;
          /**
           * The list element description returned by DataScope.
           * @minLength 1
           */
          description?: string;
          /**
           * The first custom attribute returned by DataScope.
           * @minLength 1
           */
          attribute1?: string;
          /**
           * The second custom attribute returned by DataScope.
           * @minLength 1
           */
          attribute2?: string;
          /**
           * The parent list identifier returned by DataScope.
           * @minimum 1
           */
          listId?: number;
          /**
           * The account identifier returned by DataScope.
           * @minimum 1
           */
          accountId?: number;
          /**
           * The creation timestamp returned by DataScope.
           * @minLength 1
           */
          createdAt?: string;
          /**
           * The last-updated timestamp returned by DataScope.
           * @minLength 1
           */
          updatedAt?: string;
        };
      };
    };
    /** Create a DataScope location using the official locations endpoint. */
    "datascope.create_location": {
      input: {
        /**
         * The location code to store in DataScope.
         * @minLength 1
         */
        code: string;
        /**
         * The location name to store in DataScope.
         * @minLength 1
         */
        name: string;
        /**
         * The location description to store in DataScope.
         * @minLength 1
         */
        description?: string;
        /**
         * The location address to store in DataScope.
         * @minLength 1
         */
        address?: string;
        /**
         * The city to store in DataScope.
         * @minLength 1
         */
        city?: string;
        /**
         * The country to store in DataScope.
         * @minLength 1
         */
        country?: string;
        /**
         * The region to store in DataScope.
         * @minLength 1
         */
        region?: string;
        /** The latitude to store in DataScope. */
        latitude?: number;
        /** The longitude to store in DataScope. */
        longitude?: number;
        /**
         * The phone number to store in DataScope.
         * @minLength 1
         */
        phone?: string;
        /**
         * The contact email to store in DataScope.
         * @minLength 1
         */
        email?: string;
        /**
         * The company code to store in DataScope.
         * @minLength 1
         */
        companyCode?: string;
        /**
         * The company name to store in DataScope.
         * @minLength 1
         */
        companyName?: string;
      };
      output: {
        /** The created DataScope location. */
        location: {
          /**
           * The unique identifier of the DataScope location.
           * @minimum 1
           */
          id: number;
          /**
           * The location code returned by DataScope.
           * @minLength 1
           */
          code?: string;
          /**
           * The location name returned by DataScope.
           * @minLength 1
           */
          name: string;
          /**
           * The location description returned by DataScope.
           * @minLength 1
           */
          description?: string;
          /**
           * The location address returned by DataScope.
           * @minLength 1
           */
          address?: string;
          /**
           * The city returned by DataScope.
           * @minLength 1
           */
          city?: string;
          /**
           * The country returned by DataScope.
           * @minLength 1
           */
          country?: string;
          /**
           * The region returned by DataScope.
           * @minLength 1
           */
          region?: string;
          /** The latitude returned by DataScope. */
          latitude?: number;
          /** The longitude returned by DataScope. */
          longitude?: number;
          /**
           * The phone number returned by DataScope.
           * @minLength 1
           */
          phone?: string;
          /**
           * The contact email returned by DataScope.
           * @minLength 1
           */
          email?: string;
          /**
           * The company code returned by DataScope.
           * @minLength 1
           */
          companyCode?: string;
          /**
           * The company name returned by DataScope.
           * @minLength 1
           */
          companyName?: string;
        };
      };
    };
    /** Get one DataScope metadata list element by metadata type and element ID. */
    "datascope.get_list_element": {
      input: {
        /**
         * The metadata list type that owns the element.
         * @minLength 1
         */
        metadataType: string;
        /**
         * The identifier of the metadata list element to fetch.
         * @minimum 1
         */
        elementId: number;
      };
      output: {
        /** The requested metadata list element. */
        element: {
          /**
           * The unique identifier of the metadata list element.
           * @minimum 1
           */
          id: number;
          /**
           * The metadata list type that owns this element.
           * @minLength 1
           */
          metadataType?: string;
          /**
           * The list element code returned by DataScope.
           * @minLength 1
           */
          code?: string;
          /**
           * The list element name returned by DataScope.
           * @minLength 1
           */
          name: string;
          /**
           * The list element description returned by DataScope.
           * @minLength 1
           */
          description?: string;
          /**
           * The first custom attribute returned by DataScope.
           * @minLength 1
           */
          attribute1?: string;
          /**
           * The second custom attribute returned by DataScope.
           * @minLength 1
           */
          attribute2?: string;
          /**
           * The parent list identifier returned by DataScope.
           * @minimum 1
           */
          listId?: number;
          /**
           * The account identifier returned by DataScope.
           * @minimum 1
           */
          accountId?: number;
          /**
           * The creation timestamp returned by DataScope.
           * @minLength 1
           */
          createdAt?: string;
          /**
           * The last-updated timestamp returned by DataScope.
           * @minLength 1
           */
          updatedAt?: string;
        };
      };
    };
    /** List DataScope answers from the v2 answers endpoint with stable top-level metadata and dynamic answer values grouped under answers. */
    "datascope.list_answers": {
      input: {
        /**
         * The DataScope form identifier to filter by.
         * @minimum 1
         */
        formId?: number;
        /**
         * The DataScope user identifier to filter by.
         * @minimum 1
         */
        userId?: number;
        /**
         * The DataScope location identifier to filter by.
         * @minimum 1
         */
        locationId?: number;
        /**
         * The inclusive start timestamp filter sent to DataScope.
         * @minLength 1
         */
        startAt?: string;
        /**
         * The inclusive end timestamp filter sent to DataScope.
         * @minLength 1
         */
        endAt?: string;
        /** Whether DataScope should filter answers by modified date instead of created date. */
        dateModified?: boolean;
        /**
         * The maximum number of answers to return. DataScope allows at most 200.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * The zero-based offset used to fetch the next page.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The normalized answers returned by DataScope. */
        answers: Array<{
          /**
           * The DataScope form identifier.
           * @minimum 1
           */
          formId: number;
          /**
           * The unique identifier of the submitted answer.
           * @minimum 1
           */
          formAnswerId: number;
          /**
           * The public code of the DataScope form.
           * @minLength 1
           */
          formCode?: string;
          /**
           * The form name returned by DataScope.
           * @minLength 1
           */
          formName?: string;
          /**
           * The workflow state of the submitted answer.
           * @minLength 1
           */
          formState?: string;
          /**
           * The display name of the user who submitted the answer.
           * @minLength 1
           */
          userName?: string;
          /**
           * The unique user identifier returned by DataScope, such as an email address.
           * @minLength 1
           */
          userIdentifier?: string;
          /**
           * The submission timestamp returned by DataScope.
           * @minLength 1
           */
          createdAt?: string;
          /** The latitude captured for the answer when available. */
          latitude?: number;
          /** The longitude captured for the answer when available. */
          longitude?: number;
          /** The dynamic answer values keyed by question label or field name. */
          answers: Record<string, unknown>;
        }>;
      };
    };
    /** List DataScope answers from the metadata-rich answers endpoint and normalize each question item into a stable questions array. */
    "datascope.list_answers_with_full_metadata": {
      input: {
        /**
         * The DataScope form identifier to filter by.
         * @minimum 1
         */
        formId?: number;
        /**
         * The DataScope user identifier to filter by.
         * @minimum 1
         */
        userId?: number;
        /**
         * The DataScope location identifier to filter by.
         * @minimum 1
         */
        locationId?: number;
        /**
         * The inclusive start timestamp filter sent to DataScope.
         * @minLength 1
         */
        startAt?: string;
        /**
         * The inclusive end timestamp filter sent to DataScope.
         * @minLength 1
         */
        endAt?: string;
      };
      output: {
        /** The normalized answers with per-question metadata. */
        answers: Array<{
          /**
           * The DataScope form identifier.
           * @minimum 1
           */
          formId: number;
          /**
           * The unique identifier of the submitted answer.
           * @minimum 1
           */
          formAnswerId: number;
          /**
           * The public code of the DataScope form.
           * @minLength 1
           */
          formCode?: string;
          /**
           * The form name returned by DataScope.
           * @minLength 1
           */
          formName?: string;
          /**
           * The workflow state of the submitted answer.
           * @minLength 1
           */
          formState?: string;
          /**
           * The display name of the user who submitted the answer.
           * @minLength 1
           */
          userName?: string;
          /**
           * The unique user identifier returned by DataScope, such as an email address.
           * @minLength 1
           */
          userIdentifier?: string;
          /**
           * The submission timestamp returned by DataScope.
           * @minLength 1
           */
          createdAt?: string;
          /**
           * The last-updated timestamp returned by DataScope.
           * @minLength 1
           */
          updatedAt?: string;
          /** The latitude captured for the answer when available. */
          latitude?: number;
          /** The longitude captured for the answer when available. */
          longitude?: number;
          /** Whether DataScope marks the answer as finished. */
          finished?: boolean;
          /** The assignment identifier attached to the answer when available. */
          assignId?: number | string;
          /** The internal assignment identifier attached to the answer when available. */
          assignInternalId?: number | string;
          /**
           * The assignment location name attached to the answer when available.
           * @minLength 1
           */
          assignLocationName?: string;
          /**
           * The assignment location description attached to the answer when available.
           * @minLength 1
           */
          assignLocationDescription?: string;
          /**
           * The assignment location code attached to the answer when available.
           * @minLength 1
           */
          assignLocationCode?: string;
          /** The normalized question items returned for this answer. */
          questions: Array<{
            /**
             * The DataScope form identifier that owns this answer field.
             * @minimum 1
             */
            formId?: number;
            /**
             * The answer identifier that owns this answer field.
             * @minimum 1
             */
            formAnswerId?: number;
            /**
             * The public code of the DataScope form.
             * @minLength 1
             */
            formCode?: string;
            /**
             * The workflow state of the answer.
             * @minLength 1
             */
            formState?: string;
            /**
             * The unique identifier of the form question.
             * @minimum 1
             */
            questionId?: number;
            /**
             * The visible question label returned by DataScope.
             * @minLength 1
             */
            questionName?: string;
            /**
             * The internal question name returned by DataScope.
             * @minLength 1
             */
            name?: string;
            /** The raw answer value returned for this question. */
            questionValue: unknown;
            /**
             * The question type returned by DataScope.
             * @minLength 1
             */
            questionType?: string;
            /**
             * The 1-based subform item index when present.
             * @minimum 1
             */
            subformIndex?: number;
            /**
             * The metadata list type referenced by this question.
             * @minLength 1
             */
            metadataType?: string;
            /**
             * The metadata element identifier referenced by this question.
             * @minimum 1
             */
            metadataId?: number;
          }>;
        }>;
      };
    };
    /** List all elements from one DataScope metadata list type. */
    "datascope.list_list_elements": {
      input: {
        /**
         * The metadata list type, such as products or customers.
         * @minLength 1
         */
        metadataType: string;
      };
      output: {
        /** The normalized metadata list elements returned by DataScope. */
        elements: Array<{
          /**
           * The unique identifier of the metadata list element.
           * @minimum 1
           */
          id: number;
          /**
           * The metadata list type that owns this element.
           * @minLength 1
           */
          metadataType?: string;
          /**
           * The list element code returned by DataScope.
           * @minLength 1
           */
          code?: string;
          /**
           * The list element name returned by DataScope.
           * @minLength 1
           */
          name: string;
          /**
           * The list element description returned by DataScope.
           * @minLength 1
           */
          description?: string;
          /**
           * The first custom attribute returned by DataScope.
           * @minLength 1
           */
          attribute1?: string;
          /**
           * The second custom attribute returned by DataScope.
           * @minLength 1
           */
          attribute2?: string;
          /**
           * The parent list identifier returned by DataScope.
           * @minimum 1
           */
          listId?: number;
          /**
           * The account identifier returned by DataScope.
           * @minimum 1
           */
          accountId?: number;
          /**
           * The creation timestamp returned by DataScope.
           * @minLength 1
           */
          createdAt?: string;
          /**
           * The last-updated timestamp returned by DataScope.
           * @minLength 1
           */
          updatedAt?: string;
        }>;
      };
    };
    /** List DataScope locations available to the authenticated account. */
    "datascope.list_locations": {
      input: Record<string, never>;
      output: {
        /** The normalized locations returned by DataScope. */
        locations: Array<{
          /**
           * The unique identifier of the DataScope location.
           * @minimum 1
           */
          id: number;
          /**
           * The location code returned by DataScope.
           * @minLength 1
           */
          code?: string;
          /**
           * The location name returned by DataScope.
           * @minLength 1
           */
          name: string;
          /**
           * The location description returned by DataScope.
           * @minLength 1
           */
          description?: string;
          /**
           * The location address returned by DataScope.
           * @minLength 1
           */
          address?: string;
          /**
           * The city returned by DataScope.
           * @minLength 1
           */
          city?: string;
          /**
           * The country returned by DataScope.
           * @minLength 1
           */
          country?: string;
          /**
           * The region returned by DataScope.
           * @minLength 1
           */
          region?: string;
          /** The latitude returned by DataScope. */
          latitude?: number;
          /** The longitude returned by DataScope. */
          longitude?: number;
          /**
           * The phone number returned by DataScope.
           * @minLength 1
           */
          phone?: string;
          /**
           * The contact email returned by DataScope.
           * @minLength 1
           */
          email?: string;
          /**
           * The company code returned by DataScope.
           * @minLength 1
           */
          companyCode?: string;
          /**
           * The company name returned by DataScope.
           * @minLength 1
           */
          companyName?: string;
        }>;
      };
    };
    /** Update one DataScope metadata list element by element ID. */
    "datascope.update_list_element": {
      input: {
        /**
         * The identifier of the metadata list element to update.
         * @minimum 1
         */
        elementId: number;
        /**
         * The code to store on the metadata list element.
         * @minLength 1
         */
        code?: string;
        /**
         * The display name to store on the metadata list element.
         * @minLength 1
         */
        name?: string;
        /**
         * The description to store on the metadata list element.
         * @minLength 1
         */
        description?: string;
        /**
         * The first custom attribute to store on the element.
         * @minLength 1
         */
        attribute1?: string;
        /**
         * The second custom attribute to store on the element.
         * @minLength 1
         */
        attribute2?: string;
      };
      output: {
        /** The updated metadata list element. */
        element: {
          /**
           * The unique identifier of the metadata list element.
           * @minimum 1
           */
          id: number;
          /**
           * The metadata list type that owns this element.
           * @minLength 1
           */
          metadataType?: string;
          /**
           * The list element code returned by DataScope.
           * @minLength 1
           */
          code?: string;
          /**
           * The list element name returned by DataScope.
           * @minLength 1
           */
          name: string;
          /**
           * The list element description returned by DataScope.
           * @minLength 1
           */
          description?: string;
          /**
           * The first custom attribute returned by DataScope.
           * @minLength 1
           */
          attribute1?: string;
          /**
           * The second custom attribute returned by DataScope.
           * @minLength 1
           */
          attribute2?: string;
          /**
           * The parent list identifier returned by DataScope.
           * @minimum 1
           */
          listId?: number;
          /**
           * The account identifier returned by DataScope.
           * @minimum 1
           */
          accountId?: number;
          /**
           * The creation timestamp returned by DataScope.
           * @minLength 1
           */
          createdAt?: string;
          /**
           * The last-updated timestamp returned by DataScope.
           * @minLength 1
           */
          updatedAt?: string;
        };
      };
    };
    /** Update one DataScope location by location ID. */
    "datascope.update_location": {
      input: {
        /**
         * The identifier of the DataScope location to update.
         * @minimum 1
         */
        locationId: number;
        /**
         * The location code to store in DataScope.
         * @minLength 1
         */
        code?: string;
        /**
         * The location name to store in DataScope.
         * @minLength 1
         */
        name?: string;
        /**
         * The location description to store in DataScope.
         * @minLength 1
         */
        description?: string;
        /**
         * The location address to store in DataScope.
         * @minLength 1
         */
        address?: string;
        /**
         * The city to store in DataScope.
         * @minLength 1
         */
        city?: string;
        /**
         * The country to store in DataScope.
         * @minLength 1
         */
        country?: string;
        /**
         * The region to store in DataScope.
         * @minLength 1
         */
        region?: string;
        /** The latitude to store in DataScope. */
        latitude?: number;
        /** The longitude to store in DataScope. */
        longitude?: number;
        /**
         * The phone number to store in DataScope.
         * @minLength 1
         */
        phone?: string;
        /**
         * The contact email to store in DataScope.
         * @minLength 1
         */
        email?: string;
        /**
         * The company code to store in DataScope.
         * @minLength 1
         */
        companyCode?: string;
        /**
         * The company name to store in DataScope.
         * @minLength 1
         */
        companyName?: string;
      };
      output: {
        /** The updated DataScope location. */
        location: {
          /**
           * The unique identifier of the DataScope location.
           * @minimum 1
           */
          id: number;
          /**
           * The location code returned by DataScope.
           * @minLength 1
           */
          code?: string;
          /**
           * The location name returned by DataScope.
           * @minLength 1
           */
          name: string;
          /**
           * The location description returned by DataScope.
           * @minLength 1
           */
          description?: string;
          /**
           * The location address returned by DataScope.
           * @minLength 1
           */
          address?: string;
          /**
           * The city returned by DataScope.
           * @minLength 1
           */
          city?: string;
          /**
           * The country returned by DataScope.
           * @minLength 1
           */
          country?: string;
          /**
           * The region returned by DataScope.
           * @minLength 1
           */
          region?: string;
          /** The latitude returned by DataScope. */
          latitude?: number;
          /** The longitude returned by DataScope. */
          longitude?: number;
          /**
           * The phone number returned by DataScope.
           * @minLength 1
           */
          phone?: string;
          /**
           * The contact email returned by DataScope.
           * @minLength 1
           */
          email?: string;
          /**
           * The company code returned by DataScope.
           * @minLength 1
           */
          companyCode?: string;
          /**
           * The company name returned by DataScope.
           * @minLength 1
           */
          companyName?: string;
        };
      };
    };
  }
}
