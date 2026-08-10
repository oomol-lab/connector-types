import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one LightSpeed VT course by course identifier. */
    "lightspeed_vt.get_course": {
      input: {
        /**
         * The LightSpeed VT course identifier.
         * @minimum 1
         */
        courseId: number;
      };
      output: {
        /** A LightSpeed VT course summary. Additional course fields may be returned. */
        course: {
          /**
           * The LightSpeed VT course identifier.
           * @minimum 1
           */
          courseId?: number;
          /** The course name. */
          courseName?: string;
          /**
           * The course category identifier.
           * @minimum 1
           */
          categoryId?: number;
          /** The course category name. */
          categoryName?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one LightSpeed VT location by location identifier. */
    "lightspeed_vt.get_location": {
      input: {
        /**
         * The LightSpeed VT location identifier.
         * @minimum 1
         */
        locationId: number;
      };
      output: {
        /** A LightSpeed VT location record. Detail responses may contain additional contact and theme fields. */
        location: {
          /**
           * The identifier of the LightSpeed VT system containing the location.
           * @minimum 1
           */
          systemId?: number;
          /**
           * The LightSpeed VT location identifier.
           * @minimum 1
           */
          locationId?: number;
          /** The location name. */
          name?: string;
          /** Whether the location is active. */
          isActive?: boolean;
          /** The external vendor reference associated with the location. */
          vendorId?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one LightSpeed VT user by user identifier. */
    "lightspeed_vt.get_user": {
      input: {
        /**
         * The LightSpeed VT user identifier.
         * @minimum 1
         */
        userId: number;
      };
      output: {
        /** A LightSpeed VT user record. Additional documented profile fields may be returned. */
        user: {
          /**
           * The LightSpeed VT user identifier.
           * @minimum 1
           */
          userId?: number;
          /** The globally unique LightSpeed VT username. */
          username?: string;
          /** The user's first name. */
          firstName?: string;
          /** The user's last name. */
          lastName?: string;
          /** The user's email address. */
          email?: string;
          /**
           * The identifier of the user's location.
           * @minimum 1
           */
          locationId?: number;
          /** The name of the user's location. */
          locationName?: string;
          /**
           * The identifier of the user's LightSpeed VT system.
           * @minimum 1
           */
          systemId?: number;
          /** Whether the user is active. */
          isActive?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** List active courses available to the connected LightSpeed VT API account. */
    "lightspeed_vt.list_courses": {
      input: {
        /**
         * Return courses from this LightSpeed VT system.
         * @minimum 1
         */
        systemId?: number;
        /**
         * Return courses from this category.
         * @minimum 1
         */
        categoryId?: number;
        /** Return courses that do or do not contain interactive chapters. */
        isInteractive?: boolean;
        /**
         * The number of records to return per page, up to 200.
         * @minimum 1
         * @maximum 200
         */
        itemsPerPage?: number;
        /**
         * The one-based result page to return.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The matching course summaries. */
        courses: Array<{
          /**
           * The LightSpeed VT course identifier.
           * @minimum 1
           */
          courseId?: number;
          /** The course name. */
          courseName?: string;
          /**
           * The course category identifier.
           * @minimum 1
           */
          categoryId?: number;
          /** The course category name. */
          categoryName?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List locations available to the connected LightSpeed VT API account. */
    "lightspeed_vt.list_locations": {
      input: {
        /**
         * Return locations from this LightSpeed VT system.
         * @minimum 1
         */
        systemId?: number;
        /**
         * Return only these location identifiers.
         * @minItems 1
         */
        locationIds?: Array<number>;
        /** Return locations matching this name. */
        name?: string;
        /** Return only active or inactive locations. */
        isActive?: boolean;
        /** Return locations with this external vendor reference. */
        vendorId?: string;
        /**
         * Return locations assigned to this superuser.
         * @minimum 1
         */
        superUserId?: number;
        /**
         * The number of records to return per page, up to 200.
         * @minimum 1
         * @maximum 200
         */
        itemsPerPage?: number;
        /**
         * The one-based result page to return.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The matching location records. */
        locations: Array<{
          /**
           * The identifier of the LightSpeed VT system containing the location.
           * @minimum 1
           */
          systemId?: number;
          /**
           * The LightSpeed VT location identifier.
           * @minimum 1
           */
          locationId?: number;
          /** The location name. */
          name?: string;
          /** Whether the location is active. */
          isActive?: boolean;
          /** The external vendor reference associated with the location. */
          vendorId?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List or find users available to the connected LightSpeed VT API account. */
    "lightspeed_vt.list_users": {
      input: {
        /** Return the user matching this globally unique username. */
        username?: string;
        /**
         * Return users matching this email address.
         * @format email
         */
        email?: string;
        /**
         * Return users from this LightSpeed VT system.
         * @minimum 1
         */
        systemId?: number;
        /**
         * Return users from this location.
         * @minimum 1
         */
        locationId?: number;
        /** Return only active or inactive users. */
        isActive?: boolean;
        /** Return users with this access-level value. */
        accessLevel?: number;
        /** Return users with this external vendor reference. */
        vendorId?: string;
        /**
         * The number of records to return per page, up to 200.
         * @minimum 1
         * @maximum 200
         */
        itemsPerPage?: number;
        /**
         * The one-based result page to return.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The matching user records. */
        users: Array<{
          /**
           * The LightSpeed VT user identifier.
           * @minimum 1
           */
          userId?: number;
          /** The globally unique LightSpeed VT username. */
          username?: string;
          /** The user's first name. */
          firstName?: string;
          /** The user's last name. */
          lastName?: string;
          /** The user's email address. */
          email?: string;
          /**
           * The identifier of the user's location.
           * @minimum 1
           */
          locationId?: number;
          /** The name of the user's location. */
          locationName?: string;
          /**
           * The identifier of the user's LightSpeed VT system.
           * @minimum 1
           */
          systemId?: number;
          /** Whether the user is active. */
          isActive?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
