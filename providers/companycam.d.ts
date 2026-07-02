import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Archive a CompanyCam project by ID. */
    "companycam.archive_project": {
      input: {
        /**
         * The CompanyCam project ID.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** A CompanyCam project. */
        project: {
          /** The CompanyCam project ID. */
          id: string | null;
          /** The CompanyCam company ID. */
          companyId: string | null;
          /** The ID of the entity that created the project. */
          creatorId: string | null;
          /** The type of entity that created the project. */
          creatorType: string | null;
          /** The display name of the entity that created the project. */
          creatorName: string | null;
          /** The project status returned by CompanyCam. */
          status: string | null;
          /** Whether the project is archived. */
          archived: boolean | null;
          /** The project name. */
          name: string | null;
          /** A CompanyCam address. */
          address: {
            /** The first street address line. */
            streetAddress1?: string | null;
            /** The second street address line. */
            streetAddress2?: string | null;
            /** The city name. */
            city?: string | null;
            /** The state or region name. */
            state?: string | null;
            /** The postal or ZIP code. */
            postalCode?: string | null;
            /** The country code or name. */
            country?: string | null;
          } | null;
          /** A latitude and longitude coordinate. */
          coordinates: {
            /** The latitude value. */
            lat: number;
            /** The longitude value. */
            lon: number;
          } | null;
          /** The project feature image variants. */
          featuredImage: Array<{
            /** The image variant type. */
            type?: string | null;
            /** The image URI. */
            uri?: string | null;
            /** The image URL. */
            url?: string | null;
          }>;
          /** The project URL in the CompanyCam web app. */
          projectUrl: string | null;
          /** The embeddable project URL. */
          embeddedProjectUrl: string | null;
          /** The public slug used in some CompanyCam URLs. */
          slug: string | null;
          /** Whether the project timeline and public features are enabled. */
          public: boolean | null;
          /** The project geofence coordinates. */
          geofence: Array<{
            /** The latitude value. */
            lat: number;
            /** The longitude value. */
            lon: number;
          }>;
          /** The project notepad text. */
          notepad: string | null;
          /** The Unix timestamp when the project was created. */
          createdAt: number | null;
          /** The Unix timestamp when the project was updated. */
          updatedAt: number | null;
          /** The raw CompanyCam object. */
          raw: Record<string, unknown>;
        };
        /** The raw CompanyCam object. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a CompanyCam project with optional address, coordinates, and contact data. */
    "companycam.create_project": {
      input: {
        /**
         * The project name.
         * @minLength 1
         */
        name: string;
        /** The address fields to send to CompanyCam. */
        address?: {
          /** The first street address line. */
          streetAddress1?: string;
          /** The second street address line. */
          streetAddress2?: string;
          /** The city name. */
          city?: string;
          /** The state or region name. */
          state?: string;
          /** The postal or ZIP code. */
          postalCode?: string;
          /** The country code or name. */
          country?: string;
        };
        /** A latitude and longitude coordinate. */
        coordinates?: {
          /** The latitude value. */
          lat: number;
          /** The longitude value. */
          lon: number;
        };
        /**
         * The project geofence coordinates.
         * @minItems 1
         */
        geofence?: Array<{
          /** The latitude value. */
          lat: number;
          /** The longitude value. */
          lon: number;
        }>;
        /** The primary contact fields to send to CompanyCam. */
        primaryContact?: {
          /** The primary contact name. */
          name?: string;
          /**
           * The primary contact email address.
           * @format email
           */
          email?: string;
          /** The primary contact phone number. */
          phoneNumber?: string;
        };
        /**
         * The CompanyCam user email to send in the X-CompanyCam-User header.
         * @format email
         */
        currentUserEmail?: string;
      };
      output: {
        /** A CompanyCam project. */
        project: {
          /** The CompanyCam project ID. */
          id: string | null;
          /** The CompanyCam company ID. */
          companyId: string | null;
          /** The ID of the entity that created the project. */
          creatorId: string | null;
          /** The type of entity that created the project. */
          creatorType: string | null;
          /** The display name of the entity that created the project. */
          creatorName: string | null;
          /** The project status returned by CompanyCam. */
          status: string | null;
          /** Whether the project is archived. */
          archived: boolean | null;
          /** The project name. */
          name: string | null;
          /** A CompanyCam address. */
          address: {
            /** The first street address line. */
            streetAddress1?: string | null;
            /** The second street address line. */
            streetAddress2?: string | null;
            /** The city name. */
            city?: string | null;
            /** The state or region name. */
            state?: string | null;
            /** The postal or ZIP code. */
            postalCode?: string | null;
            /** The country code or name. */
            country?: string | null;
          } | null;
          /** A latitude and longitude coordinate. */
          coordinates: {
            /** The latitude value. */
            lat: number;
            /** The longitude value. */
            lon: number;
          } | null;
          /** The project feature image variants. */
          featuredImage: Array<{
            /** The image variant type. */
            type?: string | null;
            /** The image URI. */
            uri?: string | null;
            /** The image URL. */
            url?: string | null;
          }>;
          /** The project URL in the CompanyCam web app. */
          projectUrl: string | null;
          /** The embeddable project URL. */
          embeddedProjectUrl: string | null;
          /** The public slug used in some CompanyCam URLs. */
          slug: string | null;
          /** Whether the project timeline and public features are enabled. */
          public: boolean | null;
          /** The project geofence coordinates. */
          geofence: Array<{
            /** The latitude value. */
            lat: number;
            /** The longitude value. */
            lon: number;
          }>;
          /** The project notepad text. */
          notepad: string | null;
          /** The Unix timestamp when the project was created. */
          createdAt: number | null;
          /** The Unix timestamp when the project was updated. */
          updatedAt: number | null;
          /** The raw CompanyCam object. */
          raw: Record<string, unknown>;
        };
        /** The raw CompanyCam object. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a CompanyCam tag. */
    "companycam.create_tag": {
      input: {
        /**
         * The user-facing tag label.
         * @minLength 1
         */
        displayValue: string;
      };
      output: {
        /** A CompanyCam tag. */
        tag: {
          /** The CompanyCam tag ID. */
          id: string | null;
          /** The CompanyCam company ID. */
          companyId: string | null;
          /** The user-facing tag label. */
          displayValue: string | null;
          /** The normalized tag value used for searching and sorting. */
          value: string | null;
          /** The Unix timestamp when the tag was created. */
          createdAt: number | null;
          /** The Unix timestamp when the tag was updated. */
          updatedAt: number | null;
          /** The raw CompanyCam object. */
          raw: Record<string, unknown>;
        };
        /** The raw CompanyCam object. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a CompanyCam tag by ID. */
    "companycam.delete_tag": {
      input: {
        /**
         * The CompanyCam tag ID.
         * @minLength 1
         */
        tagId: string;
      };
      output: {
        /** Whether the delete request completed successfully. */
        deleted: boolean;
        /** The raw CompanyCam object. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve the CompanyCam company associated with the API token. */
    "companycam.get_company": {
      input: Record<string, never>;
      output: {
        /** A CompanyCam company. */
        company: {
          /** The CompanyCam company ID. */
          id: string | null;
          /** The company name. */
          name: string | null;
          /** The company status returned by CompanyCam. */
          status: string | null;
          /** A CompanyCam address. */
          address: {
            /** The first street address line. */
            streetAddress1?: string | null;
            /** The second street address line. */
            streetAddress2?: string | null;
            /** The city name. */
            city?: string | null;
            /** The state or region name. */
            state?: string | null;
            /** The postal or ZIP code. */
            postalCode?: string | null;
            /** The country code or name. */
            country?: string | null;
          } | null;
          /** The company logo variants. */
          logo: Array<{
            /** The image variant type. */
            type?: string | null;
            /** The image URI. */
            uri?: string | null;
            /** The image URL. */
            url?: string | null;
          }>;
          /** The raw CompanyCam object. */
          raw: Record<string, unknown>;
        };
        /** The raw CompanyCam object. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve the current CompanyCam user associated with the API token. */
    "companycam.get_current_user": {
      input: Record<string, never>;
      output: {
        /** A CompanyCam user. */
        user: {
          /** The CompanyCam user ID. */
          id: string | null;
          /** The CompanyCam company ID. */
          companyId: string | null;
          /** The user's email address. */
          emailAddress: string | null;
          /** The user status returned by CompanyCam. */
          status: string | null;
          /** The user's first name. */
          firstName: string | null;
          /** The user's last name. */
          lastName: string | null;
          /** The user's profile image variants. */
          profileImage: Array<{
            /** The image variant type. */
            type?: string | null;
            /** The image URI. */
            uri?: string | null;
            /** The image URL. */
            url?: string | null;
          }>;
          /** The user's phone number. */
          phoneNumber: string | null;
          /** The Unix timestamp when the user was created. */
          createdAt: number | null;
          /** The Unix timestamp when the user was updated. */
          updatedAt: number | null;
          /** The user URL in the CompanyCam web app. */
          userUrl: string | null;
          /** The raw CompanyCam object. */
          raw: Record<string, unknown>;
        };
        /** The raw CompanyCam object. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one CompanyCam project by ID. */
    "companycam.get_project": {
      input: {
        /**
         * The CompanyCam project ID.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** A CompanyCam project. */
        project: {
          /** The CompanyCam project ID. */
          id: string | null;
          /** The CompanyCam company ID. */
          companyId: string | null;
          /** The ID of the entity that created the project. */
          creatorId: string | null;
          /** The type of entity that created the project. */
          creatorType: string | null;
          /** The display name of the entity that created the project. */
          creatorName: string | null;
          /** The project status returned by CompanyCam. */
          status: string | null;
          /** Whether the project is archived. */
          archived: boolean | null;
          /** The project name. */
          name: string | null;
          /** A CompanyCam address. */
          address: {
            /** The first street address line. */
            streetAddress1?: string | null;
            /** The second street address line. */
            streetAddress2?: string | null;
            /** The city name. */
            city?: string | null;
            /** The state or region name. */
            state?: string | null;
            /** The postal or ZIP code. */
            postalCode?: string | null;
            /** The country code or name. */
            country?: string | null;
          } | null;
          /** A latitude and longitude coordinate. */
          coordinates: {
            /** The latitude value. */
            lat: number;
            /** The longitude value. */
            lon: number;
          } | null;
          /** The project feature image variants. */
          featuredImage: Array<{
            /** The image variant type. */
            type?: string | null;
            /** The image URI. */
            uri?: string | null;
            /** The image URL. */
            url?: string | null;
          }>;
          /** The project URL in the CompanyCam web app. */
          projectUrl: string | null;
          /** The embeddable project URL. */
          embeddedProjectUrl: string | null;
          /** The public slug used in some CompanyCam URLs. */
          slug: string | null;
          /** Whether the project timeline and public features are enabled. */
          public: boolean | null;
          /** The project geofence coordinates. */
          geofence: Array<{
            /** The latitude value. */
            lat: number;
            /** The longitude value. */
            lon: number;
          }>;
          /** The project notepad text. */
          notepad: string | null;
          /** The Unix timestamp when the project was created. */
          createdAt: number | null;
          /** The Unix timestamp when the project was updated. */
          updatedAt: number | null;
          /** The raw CompanyCam object. */
          raw: Record<string, unknown>;
        };
        /** The raw CompanyCam object. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one CompanyCam tag by ID. */
    "companycam.get_tag": {
      input: {
        /**
         * The CompanyCam tag ID.
         * @minLength 1
         */
        tagId: string;
      };
      output: {
        /** A CompanyCam tag. */
        tag: {
          /** The CompanyCam tag ID. */
          id: string | null;
          /** The CompanyCam company ID. */
          companyId: string | null;
          /** The user-facing tag label. */
          displayValue: string | null;
          /** The normalized tag value used for searching and sorting. */
          value: string | null;
          /** The Unix timestamp when the tag was created. */
          createdAt: number | null;
          /** The Unix timestamp when the tag was updated. */
          updatedAt: number | null;
          /** The raw CompanyCam object. */
          raw: Record<string, unknown>;
        };
        /** The raw CompanyCam object. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one CompanyCam user by ID. */
    "companycam.get_user": {
      input: {
        /**
         * The CompanyCam user ID.
         * @minLength 1
         */
        userId: string;
      };
      output: {
        /** A CompanyCam user. */
        user: {
          /** The CompanyCam user ID. */
          id: string | null;
          /** The CompanyCam company ID. */
          companyId: string | null;
          /** The user's email address. */
          emailAddress: string | null;
          /** The user status returned by CompanyCam. */
          status: string | null;
          /** The user's first name. */
          firstName: string | null;
          /** The user's last name. */
          lastName: string | null;
          /** The user's profile image variants. */
          profileImage: Array<{
            /** The image variant type. */
            type?: string | null;
            /** The image URI. */
            uri?: string | null;
            /** The image URL. */
            url?: string | null;
          }>;
          /** The user's phone number. */
          phoneNumber: string | null;
          /** The Unix timestamp when the user was created. */
          createdAt: number | null;
          /** The Unix timestamp when the user was updated. */
          updatedAt: number | null;
          /** The user URL in the CompanyCam web app. */
          userUrl: string | null;
          /** The raw CompanyCam object. */
          raw: Record<string, unknown>;
        };
        /** The raw CompanyCam object. */
        raw: Record<string, unknown>;
      };
    };
    /** List CompanyCam projects with optional name, address, and modified-since filters. */
    "companycam.list_projects": {
      input: {
        /**
         * The page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @minimum 1
         */
        perPage?: number;
        /** Filter projects by name or the first address line. */
        query?: string;
        /**
         * Return projects modified on or after this timestamp.
         * @format date-time
         */
        modifiedSince?: string;
      };
      output: {
        /** The CompanyCam projects returned by the API. */
        projects: Array<{
          /** The CompanyCam project ID. */
          id: string | null;
          /** The CompanyCam company ID. */
          companyId: string | null;
          /** The ID of the entity that created the project. */
          creatorId: string | null;
          /** The type of entity that created the project. */
          creatorType: string | null;
          /** The display name of the entity that created the project. */
          creatorName: string | null;
          /** The project status returned by CompanyCam. */
          status: string | null;
          /** Whether the project is archived. */
          archived: boolean | null;
          /** The project name. */
          name: string | null;
          /** A CompanyCam address. */
          address: {
            /** The first street address line. */
            streetAddress1?: string | null;
            /** The second street address line. */
            streetAddress2?: string | null;
            /** The city name. */
            city?: string | null;
            /** The state or region name. */
            state?: string | null;
            /** The postal or ZIP code. */
            postalCode?: string | null;
            /** The country code or name. */
            country?: string | null;
          } | null;
          /** A latitude and longitude coordinate. */
          coordinates: {
            /** The latitude value. */
            lat: number;
            /** The longitude value. */
            lon: number;
          } | null;
          /** The project feature image variants. */
          featuredImage: Array<{
            /** The image variant type. */
            type?: string | null;
            /** The image URI. */
            uri?: string | null;
            /** The image URL. */
            url?: string | null;
          }>;
          /** The project URL in the CompanyCam web app. */
          projectUrl: string | null;
          /** The embeddable project URL. */
          embeddedProjectUrl: string | null;
          /** The public slug used in some CompanyCam URLs. */
          slug: string | null;
          /** Whether the project timeline and public features are enabled. */
          public: boolean | null;
          /** The project geofence coordinates. */
          geofence: Array<{
            /** The latitude value. */
            lat: number;
            /** The longitude value. */
            lon: number;
          }>;
          /** The project notepad text. */
          notepad: string | null;
          /** The Unix timestamp when the project was created. */
          createdAt: number | null;
          /** The Unix timestamp when the project was updated. */
          updatedAt: number | null;
          /** The raw CompanyCam object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw CompanyCam project array. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** List CompanyCam tags visible to the API token. */
    "companycam.list_tags": {
      input: {
        /**
         * The page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @minimum 1
         */
        perPage?: number;
      };
      output: {
        /** The CompanyCam tags returned by the API. */
        tags: Array<{
          /** The CompanyCam tag ID. */
          id: string | null;
          /** The CompanyCam company ID. */
          companyId: string | null;
          /** The user-facing tag label. */
          displayValue: string | null;
          /** The normalized tag value used for searching and sorting. */
          value: string | null;
          /** The Unix timestamp when the tag was created. */
          createdAt: number | null;
          /** The Unix timestamp when the tag was updated. */
          updatedAt: number | null;
          /** The raw CompanyCam object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw CompanyCam tag array. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** List CompanyCam users visible to the API token. */
    "companycam.list_users": {
      input: {
        /**
         * The page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @minimum 1
         */
        perPage?: number;
      };
      output: {
        /** The CompanyCam users returned by the API. */
        users: Array<{
          /** The CompanyCam user ID. */
          id: string | null;
          /** The CompanyCam company ID. */
          companyId: string | null;
          /** The user's email address. */
          emailAddress: string | null;
          /** The user status returned by CompanyCam. */
          status: string | null;
          /** The user's first name. */
          firstName: string | null;
          /** The user's last name. */
          lastName: string | null;
          /** The user's profile image variants. */
          profileImage: Array<{
            /** The image variant type. */
            type?: string | null;
            /** The image URI. */
            uri?: string | null;
            /** The image URL. */
            url?: string | null;
          }>;
          /** The user's phone number. */
          phoneNumber: string | null;
          /** The Unix timestamp when the user was created. */
          createdAt: number | null;
          /** The Unix timestamp when the user was updated. */
          updatedAt: number | null;
          /** The user URL in the CompanyCam web app. */
          userUrl: string | null;
          /** The raw CompanyCam object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw CompanyCam user array. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** Restore an archived CompanyCam project by ID. */
    "companycam.restore_project": {
      input: {
        /**
         * The CompanyCam project ID.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** A CompanyCam project. */
        project: {
          /** The CompanyCam project ID. */
          id: string | null;
          /** The CompanyCam company ID. */
          companyId: string | null;
          /** The ID of the entity that created the project. */
          creatorId: string | null;
          /** The type of entity that created the project. */
          creatorType: string | null;
          /** The display name of the entity that created the project. */
          creatorName: string | null;
          /** The project status returned by CompanyCam. */
          status: string | null;
          /** Whether the project is archived. */
          archived: boolean | null;
          /** The project name. */
          name: string | null;
          /** A CompanyCam address. */
          address: {
            /** The first street address line. */
            streetAddress1?: string | null;
            /** The second street address line. */
            streetAddress2?: string | null;
            /** The city name. */
            city?: string | null;
            /** The state or region name. */
            state?: string | null;
            /** The postal or ZIP code. */
            postalCode?: string | null;
            /** The country code or name. */
            country?: string | null;
          } | null;
          /** A latitude and longitude coordinate. */
          coordinates: {
            /** The latitude value. */
            lat: number;
            /** The longitude value. */
            lon: number;
          } | null;
          /** The project feature image variants. */
          featuredImage: Array<{
            /** The image variant type. */
            type?: string | null;
            /** The image URI. */
            uri?: string | null;
            /** The image URL. */
            url?: string | null;
          }>;
          /** The project URL in the CompanyCam web app. */
          projectUrl: string | null;
          /** The embeddable project URL. */
          embeddedProjectUrl: string | null;
          /** The public slug used in some CompanyCam URLs. */
          slug: string | null;
          /** Whether the project timeline and public features are enabled. */
          public: boolean | null;
          /** The project geofence coordinates. */
          geofence: Array<{
            /** The latitude value. */
            lat: number;
            /** The longitude value. */
            lon: number;
          }>;
          /** The project notepad text. */
          notepad: string | null;
          /** The Unix timestamp when the project was created. */
          createdAt: number | null;
          /** The Unix timestamp when the project was updated. */
          updatedAt: number | null;
          /** The raw CompanyCam object. */
          raw: Record<string, unknown>;
        };
        /** The raw CompanyCam object. */
        raw: Record<string, unknown>;
      };
    };
    /** Update a CompanyCam project's name, address, coordinates, or geofence. */
    "companycam.update_project": {
      input: {
        /**
         * The CompanyCam project ID.
         * @minLength 1
         */
        projectId: string;
        /** The updated project name. */
        name?: string;
        /** The address fields to send to CompanyCam. */
        address?: {
          /** The first street address line. */
          streetAddress1?: string;
          /** The second street address line. */
          streetAddress2?: string;
          /** The city name. */
          city?: string;
          /** The state or region name. */
          state?: string;
          /** The postal or ZIP code. */
          postalCode?: string;
          /** The country code or name. */
          country?: string;
        };
        /** A latitude and longitude coordinate. */
        coordinates?: {
          /** The latitude value. */
          lat: number;
          /** The longitude value. */
          lon: number;
        };
        /**
         * The updated project geofence coordinates.
         * @minItems 1
         */
        geofence?: Array<{
          /** The latitude value. */
          lat: number;
          /** The longitude value. */
          lon: number;
        }>;
      };
      output: {
        /** A CompanyCam project. */
        project: {
          /** The CompanyCam project ID. */
          id: string | null;
          /** The CompanyCam company ID. */
          companyId: string | null;
          /** The ID of the entity that created the project. */
          creatorId: string | null;
          /** The type of entity that created the project. */
          creatorType: string | null;
          /** The display name of the entity that created the project. */
          creatorName: string | null;
          /** The project status returned by CompanyCam. */
          status: string | null;
          /** Whether the project is archived. */
          archived: boolean | null;
          /** The project name. */
          name: string | null;
          /** A CompanyCam address. */
          address: {
            /** The first street address line. */
            streetAddress1?: string | null;
            /** The second street address line. */
            streetAddress2?: string | null;
            /** The city name. */
            city?: string | null;
            /** The state or region name. */
            state?: string | null;
            /** The postal or ZIP code. */
            postalCode?: string | null;
            /** The country code or name. */
            country?: string | null;
          } | null;
          /** A latitude and longitude coordinate. */
          coordinates: {
            /** The latitude value. */
            lat: number;
            /** The longitude value. */
            lon: number;
          } | null;
          /** The project feature image variants. */
          featuredImage: Array<{
            /** The image variant type. */
            type?: string | null;
            /** The image URI. */
            uri?: string | null;
            /** The image URL. */
            url?: string | null;
          }>;
          /** The project URL in the CompanyCam web app. */
          projectUrl: string | null;
          /** The embeddable project URL. */
          embeddedProjectUrl: string | null;
          /** The public slug used in some CompanyCam URLs. */
          slug: string | null;
          /** Whether the project timeline and public features are enabled. */
          public: boolean | null;
          /** The project geofence coordinates. */
          geofence: Array<{
            /** The latitude value. */
            lat: number;
            /** The longitude value. */
            lon: number;
          }>;
          /** The project notepad text. */
          notepad: string | null;
          /** The Unix timestamp when the project was created. */
          createdAt: number | null;
          /** The Unix timestamp when the project was updated. */
          updatedAt: number | null;
          /** The raw CompanyCam object. */
          raw: Record<string, unknown>;
        };
        /** The raw CompanyCam object. */
        raw: Record<string, unknown>;
      };
    };
    /** Update a CompanyCam tag label. */
    "companycam.update_tag": {
      input: {
        /**
         * The CompanyCam tag ID.
         * @minLength 1
         */
        tagId: string;
        /**
         * The updated user-facing tag label.
         * @minLength 1
         */
        displayValue: string;
      };
      output: {
        /** A CompanyCam tag. */
        tag: {
          /** The CompanyCam tag ID. */
          id: string | null;
          /** The CompanyCam company ID. */
          companyId: string | null;
          /** The user-facing tag label. */
          displayValue: string | null;
          /** The normalized tag value used for searching and sorting. */
          value: string | null;
          /** The Unix timestamp when the tag was created. */
          createdAt: number | null;
          /** The Unix timestamp when the tag was updated. */
          updatedAt: number | null;
          /** The raw CompanyCam object. */
          raw: Record<string, unknown>;
        };
        /** The raw CompanyCam object. */
        raw: Record<string, unknown>;
      };
    };
  }
}
